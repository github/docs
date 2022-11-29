---
title: GitHub Pages 快速入门
intro: '您可以使用 {% data variables.product.prodname_pages %} 来展示一些开源项目、主持博客甚或分享您的简历。 本指南将帮助您开始创建下一个网站。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: a6cf4a2f00237206a3c15083797aa12c832cf32c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '145130258'
---
## <a name="introduction"></a>简介

{% data variables.product.prodname_pages %} 是通过 {% data variables.product.product_name %} 托管和发布的公共网页。 启动和运行的最快方法是使用 Jekyll 主题选择器加载预置主题。 然后，您可以修改 {% data variables.product.prodname_pages %} 的内容和样式。

本指南将引导你在 `username.github.io` 创建用户站点。

## <a name="creating-your-website"></a>创建网站

{% data reusables.repositories.create_new %}
1. 输入 `username.github.io` 作为存储库名称。 将 `username` 替换为你的 {% data variables.product.prodname_dotcom %} 用户名。 例如，如果用户名为 `octocat`，则存储库名称应为 `octocat.github.io`。
   ![存储库名称字段](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. 单击“选择主题”。
   ![“选择主题”按钮](/assets/images/help/pages/choose-theme.png)
2. 主题选择器将打开。 浏览可用主题，然后单击“选择主题”以选择主题。 以后更改主题很容易，因此，如果您不确定，请暂时选择一个。
   ![“主题”选项和“选择主题”按钮](/assets/images/help/pages/select-theme.png)
3. 选择主题后，存储库的 `README.md` 文件将在文件编辑器中打开。 `README.md` 文件是你将为站点编写内容的位置。 您可以编辑文件或暂时保留默认内容。
4. 编辑完文件后，单击“提交更改”。
5. 访问 `username.github.io` 以查看新网站。 注意：对站点的更改在推送到 {% data variables.product.product_name %} 后，最长可能需要 20 分钟才会发布。

## <a name="changing-the-title-and-description"></a>更改标题和说明

默认情况下，站点的标题为 `username.github.io`。 可通过编辑存储库中的 `_config.yml` 文件来更改标题。 您还可以为您的网站添加说明。

1. 单击存储库的“代码”选项卡。
1. 在文件列表中，单击 `_config.yml` 以打开该文件。
1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑文件。
1. `_config.yml` 文件已包含指定站点主题的行。 添加一个新行，其中 `title:` 后跟所需的标题。 添加一个新行，其中 `description:` 后跟所需的描述。 例如：

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. 编辑完文件后，单击“提交更改”。

## <a name="next-steps"></a>后续步骤

若要详细了解如何向网站添加其他页面，请参阅“[使用 Jekyll 向 GitHub Pages 站点添加内容](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)”。

若要详细了解如何使用 Jekyll 设置 {% data variables.product.prodname_pages %} 站点，请参阅“[关于 GitHub Pages 和 Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)”。
