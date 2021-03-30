---
title: 使用主题选择器将主题添加到 GitHub Pages 站点
intro: '您可以将主题添加到 {% data variables.product.prodname_pages %} 站点，以自定义站点的外观。'
redirect_from:
  - /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser/
  - /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - 页面
---

拥有仓库管理员权限的人可以使用主题选择器向 {% data variables.product.prodname_pages %} 站点添加主题。

### 关于主题选择器

主题选择器可用于向仓库添加 Jekyll 主题。 有关 Jekyll 的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %} 和 Jekyll](/articles/about-github-pages-and-jekyll)”。

主题选择器如何工作取决于您的资源库是公共的还是私有的。
  - 如果已为仓库启用 {% data variables.product.prodname_pages %}，主题选择器会将主题添加到当前发布源。
  - 如果您的仓库是公共的，并且已对仓库禁用 {% data variables.product.prodname_pages %}，则使用主题选择器将启用 {% data variables.product.prodname_pages %} 并将默认分支配置为发布源。
  - 如果您的仓库是公共的，并且已对仓库禁用 {% data variables.product.prodname_pages %}，则必须先通过配置发布源来启用 {% data variables.product.prodname_pages %}，然后才可使用主题选择器。

有关发布源的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)”。

如果以前曾手动向仓库添加 Jekyll 主题，则这些文件在使用主题选择器后也可能应用。 为避免冲突，请先删除所有手动添加的主题文件夹和文件，然后再使用主题选择器。 更多信息请参阅“[使用 Jekyll 添加主题到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”。

### 使用主题选择器添加主题

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“{% data variables.product.prodname_pages %}”下，单击 **Choose a theme（选择主题）**或 **Change theme（更改主题）**。 ![选择主题按钮](/assets/images/help/pages/choose-a-theme.png)
4. 在页面顶部单击所需的主题，然后单击 **Select theme（选择主题）**。 ![主题选项和选择主题按钮](/assets/images/help/pages/select-theme.png)
5. 系统可能会提示您编辑站点的 *README.md* 文件。
   - 要稍后编辑该文件，请单击 **Cancel（取消）**。 ![编辑文件时取消链接](/assets/images/help/pages/cancel-edit.png)
   - 要立即编辑该文件，请参阅“[编辑仓库中的文件](/articles/editing-files-in-your-repository/)”。

您选择的主题将自动应用到仓库中的 Markdown 文件。 要将主题应用到仓库中的 HTML 文件，您需要添加 YAML 前页，以指定每个文件的布局。 更多信息请参阅 Jekyll 网站上的“[前页](https://jekyllrb.com/docs/front-matter/)”。

### 延伸阅读

- Jekyll 网站上的[主题](https://jekyllrb.com/docs/themes/)
