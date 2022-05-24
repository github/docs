---
title: 使用 Jekyll 向 GitHub Pages 站点添加主题
intro: 您可以通过添加和自定义主题来个性化 Jekyll 站点。
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: 将主题添加到 Pages 站点
---

拥有仓库写入权限的人员可以使用 Jekyll 将主题添加到 {% data variables.product.prodname_pages %} 网站。

{% data reusables.pages.test-locally %}

## 添加主题

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
2. 导航到 *_config.yml*。
{% data reusables.repositories.edit-file %}
4. 为主题名称添加新行。
   - 要使用支持的主题，请键入 `theme: THEME-NAME`，将 _THEME-NAME_ 替换为主题仓库的 README 中显示的主题名称。 有关支持的主题列表，请参阅 {% data variables.product.prodname_pages %} 网站上的“[支持的主题](https://pages.github.com/themes/)”。 ![配置文件中支持的主题](/assets/images/help/pages/add-theme-to-config-file.png)
   - 要使用托管于 {% data variables.product.prodname_dotcom %} 的任何其他 Jekyll 主题，请键入 `remote_theme: THEME-NAME`，将 THEME-NAME 替换为主题仓库的 README 中显示的主题名称。 ![配置文件中不支持的主题](/assets/images/help/pages/add-remote-theme-to-config-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## 自定义主题的 CSS

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. 创建一个名为 _/assets/css/style.scss_ 的新文件。
2. 在文件顶部添加以下内容：
  ```scss
  ---
  ---

  @import "{% raw %}{{ site.theme }}{% endraw %}";
  ```
3. 在 `@import` 行的后面直接添加您喜欢的任何自定义 CSS 或 Sass（包括导入）。

## 自定义主题的 HTML 布局

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. 在 {% data variables.product.prodname_dotcom %} 上，导航到主题的源仓库。 例如，Minima 的源仓库为 https://github.com/jekyll/minima。
2. 在 *_layouts* 文件夹中，导航到主题的 _default.html_ 文件。
3. 复制文件的内容。
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
6. 创建名为 *_layouts/default.html* 的文件。
7. 粘贴之前复制的默认布局内容。
8. 根据需要自定义布局。

## 延伸阅读

- "[创建新文件](/articles/creating-new-files)"
