---
title: 使用主题选择器将主题添加到 GitHub Pages 站点
intro: 您可以将主题添加到 {% data variables.product.prodname_pages %} 站点，以自定义站点的外观。
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428363"
---
## <a name="about-the-theme-chooser"></a>关于主题选择器

{% ifversion pages-custom-workflow %}

{% note %}

**注意**：使用自定义 {% data variables.product.prodname_actions %} 工作流发布的 {% data variables.product.prodname_pages %} 网站不支持 Jekyll 主题选择器。 如果使用 Jekyll 生成站点并使用自定义 {% data variables.product.prodname_actions %} 工作流发布站点，可以通过编辑 `_config.yml` 文件来添加主题。 有关详细信息，请参阅“[使用 Jekyll 将主题添加到 GitHub Pages 站点](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)”。

{% endnote %}

{% endif %}

主题选择器可用于向仓库添加 Jekyll 主题。 有关 Jekyll 的详细信息，请参阅“[关于 {% data variables.product.prodname_pages %} 和 Jekyll](/articles/about-github-pages-and-jekyll)”。

主题选择器如何工作取决于您的资源库是公共的还是私有的。
  - 如果已为仓库启用 {% data variables.product.prodname_pages %}，主题选择器会将主题添加到当前发布源。
  - 如果您的仓库是公共的，并且已对仓库禁用 {% data variables.product.prodname_pages %}，则使用主题选择器将启用 {% data variables.product.prodname_pages %} 并将默认分支配置为发布源。
  - 如果您的仓库是公共的，并且已对仓库禁用 {% data variables.product.prodname_pages %}，则必须先通过配置发布源来启用 {% data variables.product.prodname_pages %}，然后才可使用主题选择器。

有关发布源的详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)”。

如果以前曾手动向仓库添加 Jekyll 主题，则这些文件在使用主题选择器后也可能应用。 为避免冲突，请先删除所有手动添加的主题文件夹和文件，然后再使用主题选择器。 有关详细信息，请参阅“[使用 Jekyll 将主题添加到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”。

## <a name="adding-a-theme-with-the-theme-chooser"></a>使用主题选择器添加主题

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. 在“{% data variables.product.prodname_pages %}”下，单击“选择主题”或“更改主题” 。
  ![“选择主题”按钮](/assets/images/help/pages/choose-a-theme.png)
4. 在页面顶部，单击所需的主题，然后单击“选择主题”。
  ![“主题选项”和“选择主题”按钮](/assets/images/help/pages/select-theme.png)
5. 系统可能会提示你编辑站点的 README.md 文件。
   - 若要稍后编辑该文件，请单击“取消”。
   ![编辑文件时取消链接](/assets/images/help/pages/cancel-edit.png)
   - 若要立即编辑文件，请参阅“[编辑文件](/repositories/working-with-files/managing-files/editing-files)”。

您选择的主题将自动应用到仓库中的 Markdown 文件。 要将主题应用到仓库中的 HTML 文件，您需要添加 YAML 前页，以指定每个文件的布局。 有关详细信息，请参阅 Jekyll 站点上的“[Front Matter](https://jekyllrb.com/docs/front-matter/)”。

## <a name="further-reading"></a>延伸阅读

- Jekyll 站点上的[主题](https://jekyllrb.com/docs/themes/)
