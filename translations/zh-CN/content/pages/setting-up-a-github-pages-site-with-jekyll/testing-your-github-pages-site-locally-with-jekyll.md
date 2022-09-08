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
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 68123d7bc2849881fc60fdd89dc4177e6701f5d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129655'
---
任何拥有仓库读取权限的人都可以在本地测试 {% data variables.product.prodname_pages %} 站点。

## 先决条件

在使用 Jekyll 测试站点之前，您必须：
  - 安装 [Jekyll](https://jekyllrb.com/docs/installation/)
  - 创建一个 Jekyll 站点。 有关详细信息，请参阅“[使用 Jekyll 创建 {% data variables.product.prodname_pages %} 站点](/articles/creating-a-github-pages-site-with-jekyll)”。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## 本地构建网站

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
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
3. 若要预览网站，请在 Web 浏览器中导航到 `http://localhost:4000`。

{% note %}

注意：如果使用 Ruby 3.0 和 Jekyll 4.2.x 或更低版本，则需要在运行 `bundle install` 之前将 `webrick` gem 添加到项目的 Gemfile 中。

{% endnote %}

## 更新 {% data variables.product.prodname_pages %} gem

Jekyll 是一个活跃的开源项目，经常更新。 如果计算机上的 `github-pages` gem 与 {% data variables.product.prodname_pages %} 服务器上的 `github-pages` gem 已过期，则站点外观在本地构建时可能与在 {% data variables.product.product_name %} 上发布时不同。 为避免这种情况，请定期更新计算机上的 `github-pages` gem。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 更新 `github-pages` gem。
    - 如果已安装 Bundler，请运行 `bundle update github-pages`。
    - 如果尚未安装 Bundler，请运行 `gem update github-pages`。

## 延伸阅读

- Jekyll 文档中的 [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/)
