---
title: 降级 GitHub 订阅
intro: '您可以随时降级任何类型 {% data variables.product.product_name %} 帐户的订阅。'
redirect_from:
  - /articles/downgrading-your-personal-account-s-billing-plan/
  - /articles/how-do-i-cancel-my-account/
  - /articles/downgrading-a-user-account-to-free/
  - /articles/removing-paid-seats-from-your-organization/
  - /articles/downgrading-your-organization-s-paid-seats/
  - /articles/downgrading-your-organization-s-billing-plan/
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free/
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free/
  - /articles/downgrading-your-organization-to-free/
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan/
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan/
  - /articles/downgrading-your-github-billing-plan/
  - /articles/downgrading-your-github-subscription
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### 降级您的 {% data variables.product.product_name %} 订阅

降级用户帐户或组织的订阅时，定价和帐户功能更改将在下一个帐单日期生效。 对付费用户帐户或组织订阅的更改不影响其他付费 {% data variables.product.prodname_dotcom %} 功能的订阅或付款。 更多信息请参阅“[升级或降低对结算过程有何影响？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”

### 降级用户帐户的订阅

如果您将您的用户帐户从 {% data variables.product.prodname_pro %} 降级为 {% data variables.product.prodname_free_user %}，该帐户将失去对私有仓库中高级代码审查工具的访问权限。 {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
4. 使用 **Edit（编辑）**下拉菜单并单击 **Downgrade to Free（降级到免费 ）**。 ![降级到免费按钮](/assets/images/help/billing/downgrade-to-free.png)
5. 阅读有关信息，了解您的用户帐户在下一个结算日期将不再拥有访问权限的功能，然后单击 **I understand. Continue with downgrade（我明白。继续降级）**。 ![继续降级按钮](/assets/images/help/billing/continue-with-downgrade.png)

如果您在私有仓库中发布了 {% data variables.product.prodname_pages %} 站点，并添加了自定义域，在从 {% data variables.product.prodname_pro %} 降级至 {% data variables.product.prodname_free_user %} 前，请删除或更新您的 DNS 记录，以避免域接管的风险。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)。

### 降级组织的订阅

{% data reusables.dotcom_billing.org-billing-perms %}

如果将您的组织从 {% data variables.product.prodname_team %} 降级到 {% data variables.product.prodname_free_team %}，该帐户将失去对团队高级协作和管理工具的访问权限。

如果将您的组织从 {% data variables.product.prodname_ghe_cloud %} 降级到 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_free_team %}，该帐户将失去对高级安全性、合规性和部署控件的访问权限。 {% data reusables.gated-features.more-info %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
6. 使用 **Edit（编辑）**下拉菜单，单击您想要的降级选项。 ![降级按钮](/assets/images/help/billing/downgrade-option-button.png)
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}

### 降级采用传统的按仓库定价模式的组织订阅

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} 更多信息请参阅“[将组织从按仓库定价切换为按用户定价](/github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. 在“Subscriptions（订阅）”下，选择“Edit（编辑）”下拉菜单，然后单击 **Edit plan（编辑计划）**。 ![编辑计划下拉菜单](/assets/images/help/billing/edit-plan-dropdown.png)
1. 在“Billing/Plans（计费/计划）”下您要更改的计划旁边，单击 **Downgrade（降级）**。 ![降级按钮](/assets/images/help/billing/downgrade-plan-option-button.png)
1. 输入要降级帐户的原因，然后单击 **Downgrade plan（降级计划）**。 ![降级原因文本框和降级按钮](/assets/images/help/billing/downgrade-plan-button.png)

### 从组织删除付费席位

要减少组织使用的付费席位数，您可以从组织中删除成员，或将成员转换为外部协作者并仅给予他们公共仓库的访问权限。 更多信息请参阅：
- “[从组织中删除成员](/articles/removing-a-member-from-your-organization)”
- "[将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
6. 使用 **Edit（编辑）**下拉菜单并单击 **Remove seats（删除席位）**。 ![删除席位下拉菜单](/assets/images/help/billing/remove-seats-dropdown.png)
1. 在“Remove seats”（删除席位）下，选择要降级的席位数。 ![删除席位选项](/assets/images/help/billing/remove-seats-amount.png)
1. 审查有关在下一个结算日期执行新付款方式的信息，然后单击 **Remove seats（删除席位）**。 ![删除席位按钮](/assets/images/help/billing/remove-seats-button.png)

### 延伸阅读

- “[{% data variables.product.prodname_dotcom %} 的产品](/articles/github-s-products)”
- "[升级或降级对结算过程有何影响？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- “[关于 {% data variables.product.prodname_dotcom %} 的计费](/articles/about-billing-on-github)”
- “[删除付款方式](/articles/removing-a-payment-method)”
- “[关于每用户定价](/articles/about-per-user-pricing)”
