---
title: 创建企业帐户
intro: '如果您当前在单个组织中使用 {% data variables.product.prodname_ghe_cloud %} ，则可以创建企业帐户来集中管理多个组织。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573399'
---
## 关于企业帐户创建

{% data variables.product.prodname_ghe_cloud %} 包括创建企业帐户的选项，该选项支持多个组织之间的协作，并为管理员提供单一的可见性和管理点。 有关详细信息，请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。

{% data reusables.enterprise.create-an-enterprise-account %} 如果您通过发票付款，则可以在 {% data variables.product.prodname_dotcom %} 上自行创建企业帐户。 如果没有，可[联系我们的销售团队](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)为你创建一个企业帐户。

企业帐户包含在 {% data variables.product.prodname_ghe_cloud %} 中。 创建企业帐户不会导致账单上产生额外费用。

在 {% data variables.product.product_name %} 上创建拥有现有组织的企业帐户时，组织的资源仍可供同一 URL 的成员访问。 将组织添加到企业帐户后，以下更改将应用于组织。

- 现有组织将自动归企业帐户所有。
- {% data variables.product.company_short %} 将按该企业拥有的所有组织内的使用情况向企业帐户收费。 组织的当前帐单详细信息（包括组织的帐单电子邮件地址）将成为新企业帐户的帐单详细信息。 有关详细信息，请参阅“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。
- 组织的所有当前所有者都将成为企业帐户的所有者，并且组织的所有当前帐单管理员都将成为新企业帐户的帐单管理员。 有关详细信息，请参阅[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)。

有关将组织添加到企业后应用于该组织的更改的详细信息，请参阅“[将组织添加到企业](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)”。

## 在 {% data variables.product.prodname_dotcom %} 上创建企业帐户

要创建企业帐户，你的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。

如果按发票付款，可直接通过 {% data variables.product.prodname_dotcom %} 创建企业帐户。 如果当前未按发票付款，可[联系我们的销售团队](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)为你创建企业帐户。


{% data reusables.organizations.billing-settings %}
1. 单击“升级到企业帐户”。

   ![“升级到企业帐户”按钮的屏幕截图](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. 在“Enterprise name（企业名称）”下，键入企业帐户的名称。

   ![“企业名称”字段的屏幕截图](/assets/images/help/business-accounts/enterprise-name-field.png)
1. 在“Enterprise URL slug（企业 URL 辅助信息域）”下，键入企业帐户的辅助信息。 此数据辅助信息将在企业的 URL 中使用。 例如，如果选择 `octo-enterprise`，则企业 URL 将为 `https://github.com/enterprises/octo-enterprise`。

   ![“企业 URL 数据域”字段的屏幕截图](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. 单击“确认并升级”。

   ![“确认并升级”按钮的屏幕截图](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. 阅读警告，然后单击“创建企业帐户”。

   ![“创建企业帐户”按钮的屏幕截图](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## 后续步骤

创建企业帐户后，我们建议详细了解企业帐户的工作原理以及配置设置和策略。 有关详细信息，请遵循“[开始使用企业帐户](/admin/guides#get-started-with-your-enterprise-account)”学习路径。
