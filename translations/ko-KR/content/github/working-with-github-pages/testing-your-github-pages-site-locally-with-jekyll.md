---
title: Testing your GitHub Pages site locally with Jekyll
intro: 'You can build your {{ site.data.variables.product.prodname_pages }} site locally to preview and test changes to your site.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll/
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll/
  - /articles/testing-your-github-pages-site-locally-with-jekyll
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Anyone with read permissions for a repository can test a {{ site.data.variables.product.prodname_pages }} site locally.

### 빌드전 요구 사양

Before you can use Jekyll to test a site, you must:
  - Install [Jekyll](https://jekyllrb.com/docs/installation/).
  - Create a Jekyll site. For more information, see "[Creating a {{ site.data.variables.product.prodname_pages }} site with Jekyll](/articles/creating-a-github-pages-site-with-jekyll)."

{{ site.data.reusables.pages.recommend-bundler }}

{{ site.data.reusables.pages.jekyll-install-troubleshooting }}

### Building your site locally

{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
{{ site.data.reusables.pages.navigate-publishing-source }}
3. Run your Jekyll site locally.
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
3. To preview your site, in your web browser, navigate to `http://localhost:4000`.

### Updating the {{ site.data.variables.product.prodname_pages }} gem

Jekyll is an active open source project that is updated frequently. If the `github-pages` gem on your computer is out of date with the `github-pages` gem on the {{ site.data.variables.product.prodname_pages }} server, your site may look different when built locally than when published on {{ site.data.variables.product.product_name }}. To avoid this, regularly update the `github-pages` gem on your computer.

{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
2. Update the `github-pages` gem.
    - If you installed Bundler, run `bundle update github-pages`.
    - If you don't have Bundler installed, run `gem update github-pages`.

### 더 읽을거리

- [{{ site.data.variables.product.prodname_pages }}](http://jekyllrb.com/docs/github-pages/) in the Jekyll documentation
