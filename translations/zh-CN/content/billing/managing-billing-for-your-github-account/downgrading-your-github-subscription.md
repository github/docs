---
title: 降级 GitHub 订阅
intro: '您可以随时降级 {% data variables.product.product_location %} 上任何类型的帐户的订阅。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: b709c94090c1f79bfd8e16cc7df2c943d64b5aa7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084489'
---
## 降级您的 {% data variables.product.product_name %} 订阅

降级个人帐户或组织的订阅时，定价和帐户功能更改将在下一个帐单日期生效。 对付费个人帐户或组织订阅的更改不影响其他付费 {% data variables.product.prodname_dotcom %} 功能的订阅或付款。 有关详细信息，请参阅“[升级或降级如何影响计费流程？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”。

## 降级个人帐户的订阅

如果将你的个人帐户从 {% data variables.product.prodname_pro %} 降级为 {% data variables.product.prodname_free_user %}，该帐户将失去对专用存储库中高级代码评审工具的访问权限。 {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. 在“当前计划”下，使用“编辑”下拉列表，然后单击“降级为免费” 。
  ![“降级为免费”按钮](/assets/images/help/billing/downgrade-to-free.png)
5. 阅读有关个人帐户在下一个计费日期将无法再使用的功能的信息，然后单击“我了解，继续降级”。
  ![“继续降级”按钮](/assets/images/help/billing/continue-with-downgrade.png)

如果您在私有仓库中发布了 {% data variables.product.prodname_pages %} 站点，并添加了自定义域，在从 {% data variables.product.prodname_pro %} 降级至 {% data variables.product.prodname_free_user %} 前，请删除或更新您的 DNS 记录，以避免域接管的风险。 有关详细信息，请参阅“[为你的 {% data variables.product.prodname_pages %} 站点管理自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。

## 降级组织的订阅

{% data reusables.dotcom_billing.org-billing-perms %}

如果将您的组织从 {% data variables.product.prodname_team %} 降级到 {% data variables.product.prodname_free_team %}，该帐户将失去对团队高级协作和管理工具的访问权限。

如果将您的组织从 {% data variables.product.prodname_ghe_cloud %} 降级到 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_free_team %}，该帐户将失去对高级安全性、合规性和部署控件的访问权限。 {% data reusables.gated-features.more-info %}


{% note %}

注意：如果你目前正在试用 {% data variables.product.prodname_ghe_cloud %}，并且在试用结束前没有购买 {% data variables.product.prodname_enterprise %}，你的组织将自动降级为 {% data variables.product.prodname_free_team %} 或 {% data variables.product.prodname_team %}。 有关详细信息，请参阅“[设置试用版 {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)”。

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. 在“当前计划”下，使用“修改”下拉菜单并单击所需的降级选项。
  ![“降级”按钮](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## 降级采用传统的按仓库定价模式的组织订阅

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} 有关详细信息，请参阅“[将组织从每存储库定价切换到每用户定价](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)”。

{% data reusables.organizations.billing-settings %}
5. 在“订阅”下，选择“编辑”下拉菜单，然后单击“编辑计划”。
    ![“编辑计划”下拉菜单](/assets/images/help/billing/edit-plan-dropdown.png)
1. 在“账单/计划”下，单击要更改的计划旁边的“降级”。
    ![降级按钮](/assets/images/help/billing/downgrade-plan-option-button.png)
1. 输入降级帐户的原因，然后单击“降级计划”。
    ![降级原因文本框和降级按钮](/assets/images/help/billing/downgrade-plan-button.png)

## 从组织删除付费席位

要减少组织使用的付费席位数，您可以从组织中删除成员，或将成员转换为外部协作者并仅给予他们公共仓库的访问权限。 有关详细信息，请参阅：
- [从组织中删除成员](/articles/removing-a-member-from-your-organization)
- [将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)
- [管理个人对组织存储库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)

{% data reusables.organizations.billing-settings %}
1. 在“当前计划”下，使用“编辑”下拉列表，然后单击“删除席位” 。
  ![“删除席位”下拉菜单](/assets/images/help/billing/remove-seats-dropdown.png)
1. 在“Remove seats”（删除席位）下，选择要降级的席位数。
  ![“删除席位”选项](/assets/images/help/billing/remove-seats-amount.png)
1. 查看有关下一个计费日期的新付款的信息，然后单击“删除席位”。
  ![“删除席位”按钮](/assets/images/help/billing/remove-seats-button.png)

## 延伸阅读

- “[{% data variables.product.prodname_dotcom %} 的产品](/articles/github-s-products)”
- “[升级或降级如何影响计费过程？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”
- “[关于 {% data variables.product.prodname_dotcom %} 的计费](/articles/about-billing-on-github)”。
- [关于每用户定价](/articles/about-per-user-pricing)
