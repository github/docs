---
title: 关于 GitHub 文档的版本
intro: 您可以阅读反映您当前所用 {% data variables.product.company_short %} 产品的文档。
versions: '*'
shortTitle: Docs versions
ms.openlocfilehash: 656cb53b79409329299d63e9f77b14a56b809f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146681293"
---
## 关于 {% data variables.product.prodname_docs %} 的版本

{% data variables.product.company_short %} 提供不同的产品，用于存储和协作处理代码。 您使用的产品决定了您可以使用哪些功能。 有关详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products)”。

本网站 {% data variables.product.prodname_docs %} 提供 {% data variables.product.company_short %} 所有产品的文档。 如果您正在阅读的内容适用于多个产品，则可以通过选择当前正在使用的产品来选择与您相关的文档版本。

在 {% data variables.product.prodname_docs %} 页面顶部选择下拉菜单，然后单击产品。 如果浏览器窗口不够宽，无法显示完整的导航栏，可能需要先单击 {% octicon "three-bars" aria-label="The three bars icon" %}。

![用于选择要查看的 {% data variables.product.prodname_docs %} 版本的下拉菜单的屏幕截图](/assets/images/help/docs/version-picker.png)

{% note %}

注意：现在可以尝试更改版本。 你正在查看本文章的{% ifversion ghes %}{% else %}{% endif %}{% ifversion fpt %}免费、专业和团队{% else %}{% data variables.product.product_name %}{% endif %}版。

{% endnote %}

## 确定您使用的 {% data variables.product.company_short %} 产品

您可以通过查看浏览器地址栏中的网址和您所在 {% data variables.product.prodname_dotcom %} 网站的标题来确定您当前正在使用的 {% data variables.product.company_short %} 产品。

您可以使用多个 {% data variables.product.company_short %} 产品。 例如，您可以在 {% data variables.product.prodname_dotcom_the_website %} 上为开源做出贡献，并在雇主的 {% data variables.product.prodname_ghe_server %} 实例上协作编写代码。 您可能需要在不同时间查看同一文章的不同版本，具体取决于您当前尝试解决的问题。

### {% data variables.product.prodname_dotcom_the_website %} 计划或 {% data variables.product.prodname_ghe_cloud %}

如果你在 https://github.com 上访问 {% data variables.product.prodname_dotcom %}，则你使用的是免费、专业或团队计划的功能，或者你正在使用 {% data variables.product.prodname_ghe_cloud %}。

在宽浏览器窗口中，没有紧跟在标题左侧 {% data variables.product.company_short %} 徽标后面的文本。

![浏览器中地址栏和 {% data variables.product.prodname_dotcom_the_website %} 标题的屏幕截图](/assets/images/help/docs/header-dotcom.png)

在 {% data variables.product.prodname_dotcom_the_website %} 上，每个帐户都有自己的计划。 每个个人帐户都有一个关联的计划，该计划提供对某些功能的访问权限，并且每个组织都有不同的关联计划。 如果您的个人帐户是 {% data variables.product.prodname_dotcom_the_website %} 上某个组织的成员，则当您使用该组织拥有的资源时，您可能有权访问与使用个人帐户拥有的资源不同的功能。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 账户的类型](/get-started/learning-about-github/types-of-github-accounts)”。

如果您不知道某个组织是否使用 {% data variables.product.prodname_ghe_cloud %}，请询问组织所有者。 有关详细信息，请参阅“[查看组织中人员的角色](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)”。

### {% data variables.product.prodname_ghe_server %}

如果在 https://github.com 、`https://*.githubenterprise.com` 、`https://*.github.us` 或 `https://*.ghe.com` 之外的 URL 上访问 {% data variables.product.prodname_dotcom %}，则你使用的是 {% data variables.product.prodname_ghe_server %}。 例如，可在 `https://github.YOUR-COMPANY-NAME.com` 上访问 {% data variables.product.prodname_ghe_server %}。 您的管理员可以选择不包含单词“{% data variables.product.company_short %}”的 URL。

在宽浏览器窗口中，“企业”一词紧跟在标题左侧的 {% data variables.product.company_short %} 徽标之后。

![浏览器中地址栏和 {% data variables.product.prodname_ghe_server %} 标题的屏幕截图](/assets/images/help/docs/header-ghes.png)

可在任何页面的页脚中查看正在使用的 {% data variables.product.prodname_ghe_server %} 的版本。

![{% data variables.product.prodname_ghe_server %} 页脚的屏幕截图，其中突出显示了版本](/assets/images/help/docs/ghes-version-in-footer.png)

### {% data variables.product.prodname_ghe_managed %}

如果在 `https://*.githubenterprise.com`、`https://*.github.us` 或 `https://*.ghe.com` 上访问 {% data variables.product.prodname_dotcom %}，则你使用的是 {% data variables.product.prodname_ghe_managed %}。

在宽浏览器窗口中，标题中的 {% data variables.product.company_short %} 徽标后面紧跟“{% data variables.product.prodname_ghe_managed %}”字样。

![浏览器中的地址栏和 {% data variables.product.prodname_ghe_managed %} 标头](/assets/images/help/docs/header-ghae.png)
