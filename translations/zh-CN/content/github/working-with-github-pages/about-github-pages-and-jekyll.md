---
title: 关于 GitHub Pages 和 Jekyll
intro: 'Jekyll 是一个静态站点生成器，内置 {% data variables.product.prodname_pages %} 支持。'
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
  github-ae: '*'
topics:
  - 页面
---

### 关于 Jekyll

Jekyll 是一个静态站点生成器，内置 {% data variables.product.prodname_pages %} 支持和简化的构建过程。 Jekyll 使用 Markdown 和 HTML 文件，并根据您选择的布局创建完整静态网站。 Jekyll 支持 Markdown 和 Lick，这是一种可在网站上加载动态内容的模板语言。 更多信息请参阅 [Jekyll](https://jekyllrb.com/)。

Windows 并未正式支持 Jekyll。 更多信息请参阅 Jekyll 文档中的“[Windows 上的 Jekyll](http://jekyllrb.com/docs/windows/#installation)”。

我们建议将 Jekyll 用于 {% data variables.product.prodname_pages %}。 如果您喜欢，可以使用其他静态站点生成器或者在本地或其他服务器上自定义构建过程。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators)”。

### 在 {% data variables.product.prodname_pages %} 网站中配置 Jekyll

您可以通过编辑 *_config.yml* 文件来配置大多数 Jekyll 设置，例如网站的主题和插件。 更多信息请参阅 Jekyll 文档中的“[配置](https://jekyllrb.com/docs/configuration/)”。

对于 {% data variables.product.prodname_pages %} 站点，有些配置设置不能更改。

```yaml
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

默认情况下，Jekyll 不会构建以下文件或文件夹：
- 位于文件夹 `/node_modules` 或 `/vendor` 中
- 开头为 `_`、`.`，或 `#`
- 结尾为 `~`
- 被配置文件中的 `exclude` 设置排除

如果您想要 Jekyll 处理其中任何文件，可以使用配置文件中的 `includes` 设置。

### 前页附属资料

{% data reusables.pages.about-front-matter %}

您可以添加 `site.github` 到帖子或页面，以将任何仓库引用元数据添加到您的网站。 更多信息请参阅 Jekyll 元数据文档中的“[使用`site.github`](https://jekyll.github.io/github-metadata/site.github/)”。

### 主题

{% data reusables.pages.add-jekyll-theme %} 更多信息请参阅 Jekyll 文档中的“[主题](https://jekyllrb.com/docs/themes/)”。

{% if currentVersion == "free-pro-team@latest" %}
您可以将支持的主题添加到
{% data variables.product.prodname_dotcom %} 上的站点。 更多信息请参阅 {% data variables.product.prodname_pages %} 站点上“[支持的主题](https://pages.github.com/themes/)"和"[使用主题选择器添加主题到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)”。

要使用 {% data variables.product.prodname_dotcom %} 上托管的任何其他开源 Jekyll 主题，您可以手动添加主题。{% else %} 您可以手动添加主题到站点。{% endif %} 更多信息请参阅{% if currentVersion == "free-pro-team@latest" %} [{% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) 上托管的主题和 {% else %}{% data variables.product.prodname_pages %} 站点上 "[支持的主题](https://pages.github.com/themes/)"和{% endif %}“[使用 Jekyll 添加主题到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”。

您可以通过编辑主题文件来覆盖任何主题的默认值。 更多信息请参阅您的主题文档和 Jekyll 文档中的“[覆盖主题默认值](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)“。

### 插件

您可以下载或创建 Jekyll 插件，以便为您的网站扩展 Jekyll 的功能。 例如， [jemoji](https://github.com/jekyll/jemoji) 插件允许您在站点的任何页面上使用 {% data variables.product.prodname_dotcom %} 风格的表情符号，就像在 {% data variables.product.prodname_dotcom %} 上使用一样。 更多信息请参阅 Jekyll 文档中的“[插件](https://jekyllrb.com/docs/plugins/)”。

{% data variables.product.prodname_pages %} 使用默认启用且不能禁用的插件：
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

您可以通过在 *_config.yml* 文件中添加插件的 gem 到 `plugins` 设置来启用额外的插件。 更多信息请参阅 Jekyll 文档中的“[配置](https://jekyllrb.com/docs/configuration/)”。

有关支持的插件列表，请参阅 {% data variables.product.prodname_pages %} 网站上的“[依赖项版本](https://pages.github.com/versions/)”。  有关特定插件的使用信息，请参阅插件的文档。

{% tip %}

**提示：** 您可以保持更新 {% data variables.product.prodname_pages %} gem，确保使用所有插件的最新版本。 更多信息请参阅 {% data variables.product.prodname_pages %} 网站上的“[使用 Jekyll 本地测试 GitHub Pages 站点](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)”和“[依赖项版本](https://pages.github.com/versions/)”。

{% endtip %}

{% data variables.product.prodname_pages %} 无法使用不支持的插件构建网站。 如果想使用不支持的插件，请在本地生成网站，然后将网站的静态文件推送到 {% data variables.product.product_name %}。

### 语法突显

为了使网站更容易读取，代码片段在 {% data variables.product.prodname_pages %} 上突显，就像在 {% data variables.product.product_name %} 上突显一样。 有关在 {% data variables.product.product_name %} 上突显语法的更多信息，请参阅“[创建和突显代码块](/articles/creating-and-highlighting-code-blocks)”。

默认情况下，网站上的代码块将被 Jekyll 突出显示。 Jekyll 使用 [Rouge](https://github.com/jneen/rouge) 突显工具，它兼容于 [Pygments](http://pygments.org/)。 如果在 *_config.yml* 文件中指定 Pygments，将改用 Rouge。 Jekyll 不能使用任何其他语法突显工具，如果您在 *_config.yml* 文件中指定其他语法突显工具，将会收到页面构建警告。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误](/articles/about-jekyll-build-errors-for-github-pages-sites)”。

如果想使用其他突显工具，如 `highlight.js`，则必须更新项目的 *_config.yml* 文件来禁用 Jekyll 的语法突显。

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

如果您的主题不含用于语法突显的 CSS，可以生成 {% data variables.product.prodname_dotcom %} 的语法突显 CSS 并将其添加到项目的 `style.css` 文件。

```shell
$ rougify style github > style.css
```

### 本地构建网站

{% data reusables.pages.test-locally %}
