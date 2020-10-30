---
title: About GitHub Pages and Jekyll
intro: 'Jekyll is a static site generator with built-in support for {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages/
  - /articles/search-engine-optimization-for-github-pages/
  - /articles/repository-metadata-on-github-pages/
  - /articles/atom-rss-feeds-for-github-pages/
  - /articles/redirects-on-github-pages/
  - /articles/emoji-on-github-pages/
  - /articles/mentions-on-github-pages/
  - /articles/using-jekyll-plugins-with-github-pages/
  - /articles/adding-jekyll-plugins-to-a-github-pages-site/
  - /articles/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About Jekyll

Jekyll is a static site generator with built-in support for {% data variables.product.prodname_pages %} and a simplified build process. Jekyll takes Markdown and HTML files and creates a complete static website based on your choice of layouts. Jekyll supports Markdown and Liquid, a templating language that loads dynamic content on your site. For more information, see [Jekyll](https://jekyllrb.com/).

Jekyll is not officially supported for Windows. For more information, see "[Jekyll on Windows](http://jekyllrb.com/docs/windows/#installation)" in the Jekyll documentation.

We recommend using Jekyll with {% data variables.product.prodname_pages %}. If you prefer, you can use other static site generators or customize your own build process locally or on another server. For more information, see "[About {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators)."

### Configuring Jekyll in your {% data variables.product.prodname_pages %} site

You can configure most Jekyll settings, such as your site's theme and plugins, by editing your *_config.yml* file. For more information, see "[Configuration](https://jekyllrb.com/docs/configuration/)" in the Jekyll documentation.

Some configuration settings cannot be changed for {% data variables.product.prodname_pages %} sites.

```
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

By default, Jekyll doesn't build files or folders that:
- are located in a folder called `/node_modules` or `/vendor`
- start with `_`, `.`, or `#`
- end with `~`
- are excluded by the `exclude` setting in your configuration file

If you want Jekyll to process any of these files, you can use the `includes` setting in your configuration file.

### Front matter

{% data reusables.pages.about-front-matter %}

You can add `site.github` to a post or page to add any repository references metadata to your site. For more information, see "[Using `site.github`](https://jekyll.github.io/github-metadata/site.github/)" in the Jekyll Metadata documentation.

### Themes

{% data reusables.pages.add-jekyll-theme %} For more information, see "[Themes](https://jekyllrb.com/docs/themes/)" in the Jekyll documentation.

{% if currentVersion == "free-pro-team@latest" %}
You can add a supported theme to your site on
{% data variables.product.prodname_dotcom %}. For more information, see "[Supported themes](https://pages.github.com/themes/)" on the {% data variables.product.prodname_pages %} site and "[Adding a theme to your {% data variables.product.prodname_pages %} site with the theme chooser](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)."

To use any other open source Jekyll theme hosted on {% data variables.product.prodname_dotcom %}, you can add the theme manually.{% else %} You can add a theme to your site manually.{% endif %} For more information, see{% if currentVersion == "free-pro-team@latest" %} [themes hosted on {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) and{% else %} "[Supported themes](https://pages.github.com/themes/)" on the {% data variables.product.prodname_pages %} site and{% endif %} "[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)."

You can override any of your theme's defaults by editing the theme's files. For more information, see your theme's documentation and "[Overriding your theme's defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)" in the Jekyll documentation.

### Plugins

You can download or create Jekyll plugins to extend the functionality of Jekyll for your site. For example, the [jemoji](https://github.com/jekyll/jemoji) plugin lets you use {% data variables.product.prodname_dotcom %}-flavored emoji in any page on your site the same way you would on {% data variables.product.prodname_dotcom %}. For more information, see "[Plugins](https://jekyllrb.com/docs/plugins/)" in the Jekyll documentation.

{% data variables.product.prodname_pages %} uses plugins that are enabled by default and cannot be disabled:
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

You can enable additional plugins by adding the plugin's gem to the `plugins` setting in your *_config.yml* file. For more information, see "[Configuration](https://jekyllrb.com/docs/configuration/)" in the Jekyll documentation. For a list of supported plugins, see "[Dependency versions](https://pages.github.com/versions/)" on the {% data variables.product.prodname_pages %} site.

For usage information for a specific plugin, see the plugin's documentation.

{% tip %}

**Tip:** You can make sure you're using the latest version of all plugins by keeping the {% data variables.product.prodname_pages %} gem updated. For more information, see "[Testing your GitHub Pages site locally with Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)" and "[Dependency versions](https://pages.github.com/versions/)" on the {% data variables.product.prodname_pages %} site.

{% endtip %}

{% data variables.product.prodname_pages %} cannot build sites using unsupported plugins. If you want to use unsupported plugins, generate your site locally and then push your site's static files to {% data variables.product.product_name %}.

### Syntax highlighting

To make your site easier to read, code snippets are highlighted on {% data variables.product.prodname_pages %} sites the same way they're highlighted on {% data variables.product.product_name %}. For more information about syntax highlighting on {% data variables.product.product_name %}, see "[Creating and highlighting code blocks](/articles/creating-and-highlighting-code-blocks)."

By default, code blocks on your site will be highlighted by Jekyll. Jekyll uses the [Rouge](https://github.com/jneen/rouge) highlighter, which is compatible with [Pygments](http://pygments.org/). If you specify Pygments in your *_config.yml* file, Rouge will be used instead. Jekyll cannot use any other syntax highlighter, and you'll get a page build warning if you specify another syntax highlighter in your *_config.yml* file. For more information, see "[About Jekyll build errors for {% data variables.product.prodname_pages %} sites](/articles/about-jekyll-build-errors-for-github-pages-sites)."

If you want to use another highlighter, such as `highlight.js`, you must disable Jekyll's syntax highlighting by updating your project's *_config.yml* file.

```
kramdown:
  syntax_highlighter_opts:
    disable : true
```

If your theme doesn't include CSS for syntax highlighting, you can generate {% data variables.product.prodname_dotcom %}'s syntax highlighting CSS and add it to your project's `style.css` file.

```shell
$ rougify style github > style.css
```

### Building your site locally

{% data reusables.pages.test-locally %}
