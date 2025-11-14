# hangnum.github.io

This repository hosts the personal blog that powers [hangnum.github.io](https://hangnum.github.io).  
The site now uses [Jekyll](https://jekyllrb.com/) with the GitHub Pages toolchain, so you can develop locally and deploy simply by pushing to GitHub.

## Prerequisites

- Ruby 3.1+ (matches the GitHub Pages build environment)
- [Bundler](https://bundler.io/) (`gem install bundler`)

## Local development

```bash
bundle install          # install dependencies defined in Gemfile
bundle exec jekyll serve --livereload
```

The site will be served at `http://127.0.0.1:4000`. Changes under `_posts`, `index.html`, or `assets/` hot-reload automatically.

## Writing a post

1. Create a file under `_posts/` named `YYYY-MM-DD-title.md`.
2. Add front matter similar to:
   ```yaml
   ---
   layout: post
   title: "Awesome Experiment"
   category: Research Notes
   date: 2024-11-20 09:00:00 +0800
   lang: zh-CN
   stylesheets:
     - /assets/css/post.css
   ---
   ```
3. Write the content in Markdown. Images and attachments go under `assets/`.

Each new post automatically appears in the “最新文章” list on the homepage.

## Deploying

Push the `main` branch (or the branch configured for GitHub Pages). GitHub builds the site with the bundled version of `github-pages` and serves it at `https://hangnum.github.io`.
