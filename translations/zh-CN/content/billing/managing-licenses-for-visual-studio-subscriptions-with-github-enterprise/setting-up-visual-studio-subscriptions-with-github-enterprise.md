---
title: 使用 GitHub Enterprise 设置 Visual Studio 订阅
intro: '您的团队订阅 {% data variables.product.prodname_vs %} 还可以获得 {% data variables.product.prodname_enterprise %} 的访问权限。'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: 644a106a749a8c8324b6a3e83dcaa72c8ad878b1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717955'
---
## 关于 {% data variables.product.prodname_vss_ghe %} 的设置

{% data reusables.enterprise-accounts.vss-ghe-description %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)”。

本指南展示团队如何获得 {% data variables.product.prodname_vs %} 订阅者的许可，以及 {% data variables.product.prodname_enterprise %} 使用入门。

如果你更喜欢视频，可以观看 Microsoft Visual Studio 的 YouTube 频道上的[使用 {% data variables.product.prodname_vs %} 订阅设置 {% data variables.product.prodname_enterprise %} 许可证](https://www.youtube.com/watch?v=P_zBgp_BE_I)。

## {% data variables.product.prodname_vss_ghe %} 的角色

在设置 {% data variables.product.prodname_vss_ghe %} 之前，请务必了解此组合产品的角色。

| 角色 | 服务 | 说明 | 详细信息 |
| :- | :- | :- | :- |
| **订阅管理员** | {% data variables.product.prodname_vs %} 订阅 | 为 {% data variables.product.prodname_vs %} 订阅分配许可证的人员 | Microsoft Docs 中的[管理员职责概述](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) |
| **订阅服务器** | {% data variables.product.prodname_vs %} 订阅 | 使用许可证进行 {% data variables.product.prodname_vs %} 订阅的人员 | Microsoft Docs 中的 [Visual Studio 订阅文档](https://docs.microsoft.com/en-us/visualstudio/subscriptions/)。 |
| **企业所有者** | {% data variables.product.prodname_dotcom %} | 在 {% data variables.product.product_location %} 上拥有企业管理员个人帐户的人 | [企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) |
| **组织所有者** | {% data variables.product.prodname_dotcom %} | 在 {% data variables.product.product_location %} 上拥有团队企业中组织所有者个人帐户的人员 | [组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) |
| **企业成员** | {% data variables.product.prodname_dotcom %} | 在 {% data variables.product.product_location %} 上拥有企业成员个人帐户的人员 | [企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)  |

## 先决条件

- 团队的 {% data variables.product.prodname_vs %} 订阅必须包含 {% data variables.product.prodname_enterprise %}。 有关详细信息，请参阅 {% data variables.product.prodname_vs %} 网站上的 [{% data variables.product.prodname_vs %} 订阅和权益](https://visualstudio.microsoft.com/subscriptions/)以及 Microsoft 文档中的[管理员职责概述](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities)。
 
 - 您的团队必须在 {% data variables.product.product_location %} 上有企业。 如果您不确定您的团队是否拥有企业，请与您的 {% data variables.product.prodname_dotcom %} 管理员联系。 如果您不确定团队中谁负责 {% data variables.product.prodname_dotcom %}，请联系 {% data variables.contact.contact_enterprise_sales %}。 有关详细信息，请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。

## 设置 {% data variables.product.prodname_vss_ghe %}

要设置 {% data variables.product.prodname_vss_ghe %}，团队成员必须完成以下任务。

一个人或许能够完成任务，因为此人具有所有角色，但您可能需要与多个人协调任务。 有关详细信息，请参阅“[{% data variables.product.prodname_vss_ghe %} 的角色](#roles-for-visual-studio-subscriptions-with-github-enterprise)”。

1. 企业所有者必须在 {% data variables.product.product_location %} 上创建至少一个组织。 有关详细信息，请参阅“[将组织添加到企业](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)”。

1. 订阅管理员必须将 {% data variables.product.prodname_vs %} 许可证分配给 {% data variables.product.prodname_vss_admin_portal_with_url %} 中的订阅者。 更多信息请参阅 Microsoft 文档中的 [{% data variables.product.prodname_vs %} 订阅管理员门户概述](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal)和[在 {% data variables.product.prodname_vs %} 订阅管理员门户中分配 {% data variables.product.prodname_vs %} 许可证](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license)。

1. （可选）如果订阅管理员在将 {% data variables.product.prodname_enterprise %} 添加到订阅之前将许可证分配给 {% data variables.product.prodname_vs %} 中的订阅者，则订阅管理员可以在 {% data variables.product.prodname_vs %} 管理门户中将订阅者移动到组合产品/服务。 有关详细信息，请参阅 Microsoft Docs 中的[使用 {% data variables.product.prodname_enterprise %} 管理 {% data variables.product.prodname_vs %} 订阅](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise)。

1. 如果订阅管理员尚未禁用电子邮件通知，则订阅者将收到两封确认电子邮件。 有关详细信息，请参阅Microsoft 文档中的[包含 {% data variables.product.prodname_enterprise %} 的 {% data variables.product.prodname_vs %} 订阅](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process)。

1. 组织所有者必须在步骤 1 中的 {% data variables.product.product_location %} 上邀请订阅者加入组织。 订阅者可以使用 {% data variables.product.prodname_dotcom_the_website %} 上的现有个人帐户或新建一个帐户来接受邀请。 订阅者加入组织后，订阅者将成为企业成员。 有关详细信息，请参阅“[邀请用户加入你的组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”。

   {% tip %}

   **提示**：

   - 虽然不是必需的，但我们建议组织所有者向订阅者的用户主名 (UPN) 使用的同一电子邮件地址发送邀请。 当 {% data variables.product.product_location %} 上的电子邮件地址与订阅者的 UPN 匹配时，可以确保其他企业不会索要该订阅者的许可证。
   - 如果订阅者在 {% data variables.product.product_location %} 上接受具有现有个人帐户的组织邀请，我们建议订阅者在 {% data variables.product.product_location %} 上将他们用于 {% data variables.product.prodname_vs %} 的电子邮件地址添加到其个人帐户。 有关详细信息，请参阅“[将电子邮件地址添加到 {% data variables.product.prodname_dotcom %} 帐户](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)”。
   - 如果组织所有者必须邀请大量订阅者，脚本可以使进程更快。 有关详细信息，请参阅 `github/platform-samples` 存储库中的[示例 PowerShell 脚本](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1)。

    {% endtip %}

为团队中的订阅者设置 {% data variables.product.prodname_vss_ghe %} 后，企业所有者可以在 {% data variables.product.product_location %} 上查看许可信息。 有关详细信息，请参阅“[查看企业帐户的订阅和使用情况](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”。

## 延伸阅读

- “[{% data variables.product.prodname_ghe_cloud %} 入门](/get-started/onboarding/getting-started-with-github-enterprise-cloud)”
