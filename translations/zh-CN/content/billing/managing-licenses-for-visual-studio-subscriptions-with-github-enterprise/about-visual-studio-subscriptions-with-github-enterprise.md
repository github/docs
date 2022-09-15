---
title: 关于包含 GitHub Enterprise 的 Visual Studio 订阅
intro: '您可以通过 Microsoft 的组合服务授予团队中的 {% data variables.product.prodname_vs %} 订阅者访问 {% data variables.product.prodname_enterprise %}。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About
ms.openlocfilehash: d3adb998cb3413387766753a4dcdbee033df6506
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052254'
---
## 关于 {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %} 可根据 Microsoft 企业协议的条款从 Microsoft 获得。 有关详细信息，请参阅 {% data variables.product.prodname_vs %} 网站上的 [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)。

要使用许可的 {% data variables.product.prodname_enterprise %} 部分，每个订阅者在 {% data variables.product.prodname_dotcom_the_website %} 上的个人帐户必须是或成为 {% data variables.product.prodname_dotcom_the_website %} 上的企业所拥有组织的成员。 为此，组织所有者可以通过电子邮件地址邀请新成员加入组织。 订阅者可以使用 {% data variables.product.prodname_dotcom_the_website %} 上的现有个人帐户或新建一个帐户来接受邀请。

有关设置 {% data variables.product.prodname_vss_ghe %} 的详细信息，请参阅“[设置 {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)”。

## 关于 {% data variables.product.prodname_vss_ghe %} 的许可证

将 {% data variables.product.prodname_vss_ghe %} 许可证分配给订阅者后，订阅者将使用 {% data variables.product.prodname_dotcom_the_website %} 上的个人帐户加入你企业中的组织，从而使用该许可证的 {% data variables.product.prodname_enterprise %} 部分。 如果 {% data variables.product.prodname_dotcom_the_website %} 上的企业成员个人帐户经过认证的电子邮件地址匹配订阅 {% data variables.product.prodname_vs %} 帐户的用户主名 (UPN)，则 {% data variables.product.prodname_vs %} 订阅者将自动占用一个 {% data variables.product.prodname_vss_ghe %} 许可。

您的企业在 {% data variables.product.prodname_dotcom %} 上的许可总数等于任何标准 {% data variables.product.prodname_enterprise %} 许可和包括 {% data variables.product.prodname_dotcom %} 访问权限的 {% data variables.product.prodname_vs %} 订阅许可数量的总和。 如果企业成员的个人帐户与 {% data variables.product.prodname_vs %} 订阅者的电子邮件地址不对应，则该个人帐户占用的许可不适用于 {% data variables.product.prodname_vs %} 订阅者。

有关 {% data variables.product.prodname_enterprise %} 的详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/github/getting-started-with-github/githubs-products#github-enterprise)”。 有关 {% data variables.product.prodname_dotcom_the_website %} 帐户的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户的类型](/github/getting-started-with-github/types-of-github-accounts)”。

您可以在 {% data variables.product.product_location %} 上查看企业可用的 {% data variables.product.prodname_enterprise %} 许可证数量。 待处理的邀请列表包括尚未成为企业中至少一个组织成员的订阅者。 有关详细信息，请参阅“[查看企业帐户的订阅和使用情况](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”和“[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)”。

{% tip %}

**提示**：如果在“[查看企业帐户的订阅和使用情况](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)”的步骤 6 中下载了包含企业许可证使用情况的 CSV 文件，则“名称”或“配置文件”列缺少值的任何成员尚未接受加入企业内组织的邀请。

{% endtip %}

您也可以在 {% data variables.product.prodname_vss_admin_portal_with_url %} 中查看对订阅者的待处理 {% data variables.product.prodname_enterprise %} 邀请。

## 延伸阅读

- Microsoft Docs 中的[包含 {% data variables.product.prodname_enterprise %} 的 {% data variables.product.prodname_vs %} 订阅](https://docs.microsoft.com/visualstudio/subscriptions/access-github)。
- Microsoft Docs 中的[使用 {% data variables.product.prodname_vs %} 或 {% data variables.product.prodname_vscode %} 从 {% data variables.product.prodname_dotcom %} 部署应用](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio)
