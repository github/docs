---
title: 升级 GitHub 订阅
intro: '您可以随时升级任何类型 {% data variables.product.product_name %} 帐户的订阅。'
redirect_from:
  - /articles/upgrading-your-personal-account-s-billing-plan/
  - /articles/upgrading-your-personal-account/
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal/
  - /articles/500-error-while-upgrading/
  - /articles/upgrading-your-organization-s-billing-plan/
  - /articles/changing-your-organization-billing-plan/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal/
  - /articles/upgrading-your-organization-account/
  - /articles/switching-from-per-repository-to-per-user-pricing/
  - /articles/adding-seats-to-your-organization/
  - /articles/upgrading-your-github-billing-plan/
  - /articles/upgrading-your-github-subscription
versions:
  free-pro-team: '*'
---

### 升级个人帐户的订阅

您可以将个人帐户从 {% data variables.product.prodname_free_user %} 升级到 {% data variables.product.prodname_pro %}，以获得私有仓库中的高级代码审查工具。 {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
4. Next to "
{% data variables.product.prodname_free_user %}", click **Upgrade**.
  ![升级按钮](/assets/images/help/billing/settings_billing_user_upgrade.png)
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

### 升级组织的订阅

您可以将组织从 {% data variables.product.prodname_free_team %} 升级到 {% data variables.product.prodname_team %}，以访问团队的高级协作和管理工具，也可以将组织升级到 {% data variables.product.prodname_ghe_cloud %} 以使用更多的安全性、合规性和部署控件。 {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

#### 使用 {% data variables.product.prodname_ghe_cloud %} 的组织的后续步骤

如果您已将组织升级到 {% data variables.product.prodname_ghe_cloud %}，便可设置组织的身份和访问管理。 更多信息请参阅“[管理组织的 SAML 单点登录](/articles/managing-saml-single-sign-on-for-your-organization)”。

如果想要将企业帐户与 {% data variables.product.prodname_ghe_cloud %} 一起使用，请联系 {% data variables.contact.contact_enterprise_sales %}。 更多信息请参阅“[关于企业帐户](/articles/about-enterprise-accounts)”。

### 将席位添加到您的组织

如果希望其他用户能够访问您 {% data variables.product.prodname_team %} 组织的私有仓库，您可以随时购买更多席位。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### 将组织从按仓库定价切换为按用户定价

{% data reusables.dotcom_billing.switch-legacy-billing %} 更多信息请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. 在计划名称的右侧，使用 **Edit（编辑）**下拉菜单，然后选择 **Edit plan（编辑计划）**。 ![编辑下拉菜单](/assets/images/help/billing/per-user-upgrade-button.png)
6. 在“Advanced tools for teams（团队的高级工具）”右侧，单击 **Upgrade now（立即升级）**。 ![立即升级按钮](/assets/images/help/billing/per-user-upgrade-now-button.png)
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

### 升级时对 500 错误进行故障排除

{% data reusables.dotcom_billing.500-error %}

### 延伸阅读

- “[{% data variables.product.prodname_dotcom %} 的产品](/articles/github-s-products)”
- "[升级或降级对结算过程有何影响？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- “[关于 {% data variables.product.prodname_dotcom %} 的计费](/articles/about-billing-on-github)”
