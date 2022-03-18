---
title: 使用 Jekyll 在本地测试 GitHub Pages 站点
intro: '您可以在本地构建 {% data variables.product.prodname_pages %} 站点，以预览和测试对站点的更改。'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: 使用 Jekyll 本地测试站点
---

任何拥有仓库读取权限的人都可以在本地测试 {% data variables.product.prodname_pages %} 站点。

## 基本要求

在使用 Jekyll 测试站点之前，您必须：
  - 安装 [Jekyll](https://jekyllrb.com/docs/installation/)。
  - 创建一个 Jekyll 站点。 更多信息请参阅“[使用 Jekyll 创建 {% data variables.product.prodname_pages %} 站点](/articles/creating-a-github-pages-site-with-jekyll)”。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## 本地构建网站

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.pages.navigate-publishing-source %}
3. 运行 `bundle install`。
3. 在本地运行您的 Jekyll 站点。
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
3. 要预览站点，请在 web 浏览器中导航到 `http://localhost:4000`。

{% note %}

**Note:** If you are using Ruby 3.0 and Jekyll 4.2.x or older, you will need to add the `webrick` gem to your project's Gemfile prior to running `bundle install`.

{% endnote %}

## 更新 {% data variables.product.prodname_pages %} gem

Jekyll 是一个活跃的开源项目，经常更新。 如果您计算机上的 `github-pages` gem 版本落后于 {% data variables.product.prodname_pages %} 服务器上的 `github-pages` gem 版本，则您的站点在本地构建时的外观与在 {% data variables.product.product_name %} 上发布时的外观可能不同。 为避免这种情况，请定期更新计算机上的 `github-pages` gem。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 更新 `github-pages` gem。
    - 如果您安装了 Bundler，请运行 `bundle update github-pages`。
    - 如果未安装 Bundler，则运行 `gem update github-pages`.

## 延伸阅读

- Jekyll 文档中的 [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/)
