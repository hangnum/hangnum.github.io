(function () {
  const searchInput = document.querySelector('#post-search-input');
  if (!searchInput) return;

  const resultsList = document.querySelector('#post-search-results');
  const defaultList = document.querySelector('#recent-post-list');
  const statusText = document.querySelector('#post-search-status');
  if (!resultsList || !defaultList || !statusText) return;

  let postsIndex = [];
  let isLoading = false;
  let hasLoaded = false;

  const normalize = (text) => text ? text.toLowerCase() : '';
  const updateStatus = (message) => {
    if (statusText) statusText.textContent = message;
  };

  const fetchIndex = async () => {
    if (hasLoaded || isLoading) return postsIndex;
    isLoading = true;
    updateStatus('正在加载文章索引…');
    try {
      const response = await fetch('/search.json');
      if (!response.ok) throw new Error('请求失败');
      postsIndex = await response.json();
      hasLoaded = true;
      updateStatus('输入关键词开始搜索');
    } catch (error) {
      console.error('搜索索引加载失败', error);
      updateStatus('搜索索引加载失败，请稍后再试');
    } finally {
      isLoading = false;
    }
    return postsIndex;
  };

  const renderResults = (items, query) => {
    if (!resultsList) return;
    resultsList.innerHTML = '';

    if (!query) {
      resultsList.classList.add('is-hidden');
      defaultList.classList.remove('is-hidden');
      updateStatus('输入关键词开始搜索');
      return;
    }

    defaultList.classList.add('is-hidden');
    resultsList.classList.remove('is-hidden');

    if (!items.length) {
      updateStatus(`未找到与 “${query}” 匹配的文章`);
      return;
    }

    updateStatus(`找到 ${items.length} 篇相关文章`);

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'post-item';
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.title;
      link.className = 'post-title';
      const meta = document.createElement('span');
      meta.className = 'post-date';
      meta.textContent = item.date;
      li.appendChild(link);
      li.appendChild(meta);

      if (item.keywords && item.keywords.length) {
        const keywordWrap = document.createElement('div');
        keywordWrap.className = 'search-keywords';
        item.keywords.forEach((keyword) => {
          const badge = document.createElement('span');
          badge.className = 'keyword-tag';
          badge.textContent = keyword;
          keywordWrap.appendChild(badge);
        });
        li.appendChild(keywordWrap);
      }

      fragment.appendChild(li);
    });
    resultsList.appendChild(fragment);
  };

  const handleInput = async (event) => {
    const query = event.target.value.trim();
    if (!query) {
      renderResults([], '');
      return;
    }

    await fetchIndex();
    if (!postsIndex.length) return;

    const keywords = query.toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = postsIndex.filter((post) => {
      const haystack = [post.title, post.description, post.content, (post.keywords || []).join(' ')
      ].map(normalize).join(' ');
      return keywords.every((word) => haystack.includes(word));
    });

    renderResults(filtered, query);
  };

  searchInput.addEventListener('focus', fetchIndex, { once: true });
  searchInput.addEventListener('input', handleInput);
})();
