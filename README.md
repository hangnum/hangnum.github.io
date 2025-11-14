# hangnum.github.io

> 🎓 **AI研究博客** - 专注于人工智能、机器学习与研究实践的学术分享平台

这个项目托管着个人学术博客 [hangnum.github.io](https://hangnum.github.io)，使用 [Jekyll](https://jekyllrb.com/) 静态网站生成器构建，部署在 GitHub Pages 上。

## ✨ 项目特色

- 📚 **学术导向** - 专门用于分享AI研究论文笔记、技术见解和项目经验
- 🎨 **现代设计** - 响应式布局，支持桌面端和移动端完美阅读
- 🧭 **智能导航** - 自动生成文章目录，支持平滑滚动和章节跳转
- 🔄 **实时预览** - 本地开发支持热重载，编辑即预览
- 📝 **Markdown支持** - 完整支持GitHub Flavored Markdown和代码高亮
- 🚀 **零配置部署** - 推送到GitHub自动构建和部署

## 🛠️ 环境要求

### 系统要求
- **操作系统**: Linux/macOS/Windows (推荐Linux)
- **Ruby**: 3.1+ (匹配GitHub Pages构建环境)
- **Git**: 用于版本控制和部署

### 依赖包
- **Bundler**: Ruby gem管理工具
- **Jekyll**: 静态网站生成器
- **GitHub Pages**: Jekyll主题和插件集合

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/hangnum/hangnum.github.io.git
cd hangnum.github.io
```

### 2. 安装Ruby环境 (如果未安装)

#### Ubuntu/Debian系统
```bash
# 安装Ruby和开发工具
sudo apt update
sudo apt install -y ruby-full build-essential zlib1g-dev

# 配置gem环境变量
echo '# Install Ruby gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$GEM_HOME/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 安装Jekyll和Bundler
gem install jekyll bundler
```

#### macOS系统
```bash
# 使用Homebrew安装
brew install ruby

# 添加到shell配置文件
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# 安装Jekyll和Bundler
gem install jekyll bundler
```

### 3. 安装项目依赖
```bash
bundle install
```

### 4. 启动本地服务器
```bash
bundle exec jekyll serve
```

访问 http://127.0.0.1:4000 查看你的博客！

## 📝 内容管理

### 文章结构

#### 文件命名规则
```
_posts/YYYY-MM-DD-文章标题.md
```

示例：
- `_posts/2025-11-14-cohort-individual-cooperative-learning.md`
- `_posts/2025-11-15-deep-learning-fundamentals.md`

#### Front Matter配置
```yaml
---
layout: post                    # 使用post布局模板
title: "文章标题"               # 文章标题
description: "文章简短描述"      # SEO描述
category: Research Notes        # 文章分类
date: 2025-11-15 10:00:00 +0800 # 发布时间
lang: zh-CN                    # 语言设置
use_prism: true                 # 启用代码高亮
stylesheets:                   # 自定义样式
  - /assets/css/post.css
keywords:                      # 搜索关键词（用于站内搜索）
  - 多模态学习
  - 医学影像
---
```

#### 推荐的文章分类
- `Research Notes` - 研究论文笔记
- `Blog` - 一般技术博客
- `Tutorial` - 教程和指南
- `Project` - 项目展示
- `Review` - 文献综述

#### 搜索功能（关键词）
- 首页提供搜索框，可按标题、描述、正文和 `keywords` 匹配文章。
- 在Front Matter中维护 `keywords` 数组即可将主题词纳入索引。
- 搜索索引文件位于 `search.json`，由Jekyll自动生成，无需手动维护。

### 文章内容模板

```markdown
### **论文/项目标题**

**期刊/会议:** 期刊名称, 年份

**核心关键词:** 关键词1, 关键词2, 关键词3

#### **1. 核心思想 (Executive Summary)**

简要概述研究的主要贡献和创新点...

#### **2. 背景与动机 (Background and Motivation)**

描述研究背景和要解决的问题...

#### **3. 方法详解 (Detailed Methodology)**

详细描述技术方法和实现细节...

#### **4. 实验与结果分析**

展示实验结果和数据分析...

#### **5. 亮点与贡献 (Highlights and Contributions)**

总结主要创新点和贡献...

#### **6. 总结**

整体评价和展望...
```

### 媒体资源管理

#### 图片和文件
- 存放位置：`assets/` 目录
- 引用方式：`![图片描述](/assets/images/example.png)`
- 支持格式：PNG, JPG, GIF, SVG

#### 代码高亮
```markdown
```python
def hello_world():
    print("Hello, Jekyll!")
```
```

#### 处理大图
- Markdown 图片会自动限制在文章容器宽度内；若使用 `<img>`，可加上 `class="responsive-image"`。
- 对需要突出展示的截图可包裹在 `<div class="figure-container">` 中，并添加 `figure-caption` 文字说明。
- 建议将图片宽度控制在 1200px 以内并在上传前压缩，避免加载缓慢或撑破布局。

## 🎨 样式定制

### CSS文件结构
```
assets/css/
├── home.css      # 首页样式
├── post.css      # 文章页面样式
└── custom.css    # 自定义样式
```

### 自定义样式
在文章的Front Matter中添加：
```yaml
stylesheets:
  - /assets/css/custom.css
```

### 响应式设计
- 移动端：320px - 768px
- 平板端：768px - 1024px
- 桌面端：1024px+

## 🔧 开发指南

### 常用Jekyll命令

```bash
# 启动开发服务器（默认端口4000）
bundle exec jekyll serve

# 启动服务器并监听所有网络接口
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# 启动服务器并启用增量构建（更快）
bundle exec jekyll serve --incremental

# 构建网站但不启动服务器
bundle exec jekyll build

# 清理构建文件
bundle exec jekyll clean

# 检查网站配置和依赖
bundle exec jekyll doctor
```

### 开发工作流

1. **创建新文章**
   ```bash
   # 创建新文章文件
   touch _posts/$(date +%Y-%m-%d)-new-article.md
   ```

2. **本地预览**
   ```bash
   # 启动服务器
   bundle exec jekyll serve --livereload
   ```

3. **编辑内容**
   - 使用任何Markdown编辑器编辑文章
   - 保存后浏览器自动刷新显示更改

4. **测试部署**
   ```bash
   # 本地构建测试
   bundle exec jekyll build
   # 检查生成的文件
   ls -la _site/
   ```

### Git工作流

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "Add new post: 文章标题"

# 推送到GitHub
git push origin main

# 查看部署状态
# 访问 https://github.com/hangnum/hangnum.github.io/actions
```

## 📊 项目结构

```
hangnum.github.io/
├── _config.yml              # Jekyll配置文件
├── Gemfile                  # Ruby依赖配置
├── index.html               # 首页模板
├── README.md               # 项目说明文档
├── _layouts/               # 页面布局模板
│   ├── default.html        # 默认布局
│   └── post.html          # 文章布局
├── _posts/                # 文章目录
│   └── 2025-11-14-*.md   # 文章文件
├── assets/                # 静态资源
│   └── css/              # 样式文件
│       ├── home.css      # 首页样式
│       └── post.css      # 文章样式
├── _site/                # 生成的静态网站（自动生成）
└── .gitignore           # Git忽略文件
```

## 🌐 部署指南

### GitHub Pages自动部署

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Update blog content"
   git push origin main
   ```

2. **自动构建**
   - GitHub Actions自动检测到推送
   - 使用Jekyll构建静态网站
   - 部署到 https://hangnum.github.io

3. **查看部署状态**
   - 访问 GitHub仓库的 Actions 页面
   - 查看构建日志和状态

### 自定义域名（可选）

1. **添加CNAME文件**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. **配置DNS**
   - 在域名提供商处添加CNAME记录
   - 指向 `hangnum.github.io`

## 🐛 故障排除

### 常见问题

#### 1. 服务器启动失败
```bash
# 检查Ruby版本
ruby --version

# 重新安装依赖
bundle install

# 清理并重新构建
bundle exec jekyll clean && bundle exec jekyll build
```

#### 2. 样式文件不生效
```bash
# 检查CSS文件路径
ls -la assets/css/

# 确保Front Matter中正确引用
# stylesheets:
#   - /assets/css/post.css
```

#### 3. 文章不显示
```bash
# 检查文件命名格式
ls -la _posts/

# 检查Front Matter格式
# 确保包含必要的字段：layout, title, date
```

#### 4. 图片无法显示
```bash
# 检查图片路径
ls -la assets/

# 确保引用路径正确
# ![描述](/assets/images/filename.png)
```

### 调试技巧

```bash
# 启用详细日志
bundle exec jekyll serve --verbose

# 检查配置文件
bundle exec jekyll doctor

# 查看生成的HTML
find _site -name "*.html" | head -5
```

## 📈 性能优化

### 图片优化
- 使用WebP格式减少文件大小
- 压缩图片保持质量
- 使用响应式图片

### 构建优化
```yaml
# _config.yml 中添加
plugins:
  - jekyll-sitemap
  - jekyll-seo-tag

exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
```

## 🤝 贡献指南

### 内容贡献
1. Fork项目
2. 创建功能分支
3. 编写高质量内容
4. 提交Pull Request

### 内容标准
- 原创性内容
- 准确的技术信息
- 清晰的结构和格式
- 适当的引用和致谢

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Jekyll官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages文档](https://docs.github.com/en/pages)
- [Markdown语法指南](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

## 📧 联系方式

- **GitHub**: [@hangnum](https://github.com/hangnum)
- **邮箱**: hello@example.com
- **博客**: [hangnum.github.io](https://hangnum.github.io)

---

> 💡 **提示**: 这个README文档会随着项目的发展持续更新。如果你有任何问题或建议，欢迎提交Issue或Pull Request！
