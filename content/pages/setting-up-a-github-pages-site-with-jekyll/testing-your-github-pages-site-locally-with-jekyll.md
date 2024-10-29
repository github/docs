---
title: Testing your GitHub Pages site locally with Jekyll
intro: 'You can build your {% data variables.product.prodname_pages %} site locally to preview and test changes to your site.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
---

Anyone with read permissions for a repository can test a {% data variables.product.prodname_pages %} site locally.

## Prerequisites

Before you can use Jekyll to test a site, you must:
* Install [Jekyll](https://jekyllrb.com/docs/installation/).
* Create a Jekyll site. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)."

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Building your site locally

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.pages.navigate-publishing-source %}
1. Run `bundle install`.
1. Run your Jekyll site locally.

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

   {% note %}

   **Notes:**
   * If you've installed Ruby 3.0 or later (which you may have if you installed the default version via Homebrew), you might get an error at this step. That's because these versions of Ruby no longer come with `webrick` installed.

     To fix the error, try running `bundle add webrick`, then re-running `bundle exec jekyll serve`.

   * If your `_config.yml` file's `baseurl` field contains your GitHub repository's link, you can use the following command when building locally to ignore that value and serve the site on `localhost:4000/`:

     ```shell
     bundle exec jekyll serve --baseurl=""
     ```

   {% endnote %}

1. To preview your site, in your web browser, navigate to `http://localhost:4000`.

## Updating the {% data variables.product.prodname_pages %} gem

Jekyll is an active open source project that is updated frequently. If the `github-pages` gem on your computer is out of date with the `github-pages` gem on the {% data variables.product.prodname_pages %} server, your site may look different when built locally than when published on {% data variables.product.product_name %}. To avoid this, regularly update the `github-pages` gem on your computer.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Update the `github-pages` gem.
    * If you installed Bundler, run `bundle update github-pages`.
    * If you don't have Bundler installed, run `gem update github-pages`.

## Further reading

* [{% data variables.product.prodname_pages %}](https://jekyllrb.com/docs/github-pages/) in the Jekyll documentation
