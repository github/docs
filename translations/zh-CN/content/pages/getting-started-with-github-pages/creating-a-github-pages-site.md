---
title: 创建 GitHub Pages 站点
intro: '您可以在新仓库或现有仓库中创建 {% data variables.product.prodname_pages %} 站点。'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 83f953ac5c5c109abd5f63fd595642e4fd139113
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/27/2022
ms.locfileid: '147428354'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## <a name="creating-a-repository-for-your-site"></a>为站点创建仓库

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## <a name="creating-your-site"></a>创建站点

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. 为站点创建入口文件。 {% data variables.product.prodname_pages %} 将查找 `index.html`、`index.md` 或 `README.md` 文件，作为站点的入口文件。

   {% ifversion pages-custom-workflow %}如果发布源是分支和文件夹，则入口文件必须位于源分支上源文件夹的顶层。 例如，如果发布源是 `main` 分支上的 `/docs` 文件夹，则入口文件必须位于名为 `main` 的分支上的 `/docs` 文件夹。

   如果发布源是 {% data variables.product.prodname_actions %} 工作流，则部署的项目必须在项目的顶层包含入口文件。 可以选择使用 {% data variables.product.prodname_actions %} 工作流在工作流运行时生成入口文件，而不是将入口文件添加到存储库。{% else %} 入口文件必须位于所选发布源的顶层。 例如，如果发布源是 `main` 分支上的 `/docs` 文件夹，则入口文件必须位于名为 `main` 的分支上的 `/docs` 文件夹。{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## <a name="next-steps"></a>后续步骤

您可以通过创建更多新文件向网站添加更多页面。 每个文件都将在网站上与发布源相同的目录结构中。 例如，如果项目网站的发布源是 `gh-pages` 分支，并且你在 `gh-pages` 分支上创建了名为 `/about/contact-us.md` 的新文件，该文件将在 {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html` 下。

您还可以添加主题以自定义网站的外观。 有关详细信息，请参阅 {% ifversion fpt or ghec %}“[使用主题选择器将主题添加到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}”，以及“[使用 Jekyll 将主题添加到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}”。

要更多地自定义您的站点，您可以使用 Jekyl - 内置 {% data variables.product.prodname_pages %} 支持的静态站点生成器。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %} 和 Jekyll](/articles/about-github-pages-and-jekyll)”。

## <a name="further-reading"></a>延伸阅读

- “[排查 {% data variables.product.prodname_pages %} 站点的 Jekyll 生成错误](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)”
- “[在存储库中创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository)”
- [创建新文件](/articles/creating-new-files)
