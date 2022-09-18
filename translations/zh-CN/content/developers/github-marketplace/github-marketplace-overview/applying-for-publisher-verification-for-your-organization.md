---
title: 为组织申请发布者验证
intro: 要为应用程序提供付费计划或在应用程序上架信息中包含 Marketplace 徽章，您必须完成组织的发布者验证流程。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084976'
---
发布者验证确保 {% data variables.product.prodname_dotcom %} 有方法联系您、您已经为组织启用双重身份验证并且您组织的域已通过验证。

一旦您的组织通过验证，您就可以为应用程序发布付费计划。 有关详细信息，请参阅“[设置上架产品的定价计划](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”。

要为应用程序提供付费计划，该应用程序必须为组织所有，并且您必须拥有该组织的所有者权限。 如果应用当前属于个人帐户，需要将该应用的所有权转让给组织。 有关详细信息，请参阅“[转让 GitHub 应用的所有权](/developers/apps/transferring-ownership-of-a-github-app)”或“[转让 OAuth 应用的所有权](/developers/apps/transferring-ownership-of-an-oauth-app)”。

## 请求发布者验证


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在左侧边栏中，单击“开发人员设置”。
  ![组织设置边栏中的“开发人员设置”选项](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. 在“开发人员设置”下，单击“发布者验证”。
  ![组织设置边栏中的“发布者验证”选项](/assets/images/marketplace/publisher-verification-settings-option.png)
1. 在“Publisher Verification（发布者验证）”下，填写检查列表中的信息：
   - 确保您的基本个人资料信息正确无误。 另外，确保您添加了接收 {% data variables.product.company_short %} 的更新和支持信息的最合适电子邮件地址。
   - 确保为您的组织启用双重身份验证。 有关详细信息，请参阅“[要求在组织中进行双因素身份验证](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”。
   - 提交已验证的域名并确保您组织的个人资料页面上显示“已验证”徽章。 相关信息请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。

  ![发布者验证检查列表](/assets/images/marketplace/publisher-verification-checklist.png)

2. 单击“申请验证”。 {% data variables.product.company_short %} 将检查您的详细信息，并在您的发布者验证完成后通知您。

## 延伸阅读

若要了解发布应用的过程，请参阅“[关于 GitHub Marketplace](/developers/github-marketplace/about-github-marketplace)”。
