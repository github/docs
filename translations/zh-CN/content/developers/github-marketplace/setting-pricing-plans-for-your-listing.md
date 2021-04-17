---
title: 为上架产品设置定价计划
intro: '在 {% data variables.product.prodname_marketplace %} 中上架应用程序时，您可以选择免费提供或有偿出售您的应用程序。 如果打算出售应用程序，您可以为不同的功能等级创建不同的定价计划。'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
versions:
  free-pro-team: '*'
topics:
  - marketplace
---

### 关于设置定价计划

{% data variables.product.prodname_marketplace %} 提供几种不同类型的定价计划。 更多信息请参阅“[{% data variables.product.prodname_marketplace %} 的定价计划](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)”。

要为应用程序提供付费计划，该应用程序必须由已完成发布者验证流程并满足特定条件的组织所拥有。 更多信息请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”和“[在 {% data variables.product.prodname_marketplace %} 中上架应用程序的要求](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)”。

如果含有付费计划的应用程序已发布，并且您是经验证的发布者，则您可以在 Marketplace 应用程序上架设置中的“Edit a pricing plan（编辑定价计划）”页面发布新的付费计划。

![发布此计划按钮](/assets/images/marketplace/publish-this-plan-button.png)

如果您的应用已经在付费计划中发布，但您不是验证的发布者，则您可以发布新的付费计划，直到您成为验证的发布者。 有关成为验证的发布者的更多信息，请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”。

### 关于保存定价计划

您可以将定价计划保存为草稿或已发布状态。 如果尚未提交 {% data variables.product.prodname_marketplace %} 上架信息以供审批，则已发布的计划与计划草案的运作方式相同，直到您的上架信息得到批准并显示在 {% data variables.product.prodname_marketplace %} 上。 计划草案允许您创建和保存新的定价计划，而无需在您的 {% data variables.product.prodname_marketplace %} 上架页面上提供它们。 一旦您在已发布的上架信息中发布定价计划，它就可以立即供客户购买。 您最多可以发布 10 个定价计划。

有关向客户计费的指南，请参阅“[向客户计费](/developers/github-marketplace/billing-customers)”。

### 创建定价计划

要为 {% data variables.product.prodname_marketplace %} 上架信息创建定价计划，请在 [{% data variables.product.prodname_marketplace %} 上架页面](https://github.com/marketplace/manage)的左边栏中单击 **Plans and pricing（计划和定价）**。 更多信息请参阅“[创建 {% data variables.product.prodname_marketplace %} 上架信息草稿](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)”。

单击 **New draft plan（新建计划草稿）**时，您将会看到一个用于自定义定价计划的表单。 您需要配置以下字段以创建定价计划：

- **Plan name（计划名称）** - 定价计划的名称将显示在 {% data variables.product.prodname_marketplace %} 应用程序的登录页面上。 您可以自定义定价计划的名称，使其与计划的资源、将使用该计划的公司规模或任何您想要的内容保持一致。

- **Pricing models（定价模式）** - 有三种类型的定价计划：免费、统一定价和每单位定价。 所有计划都要求通过 Marketplace API 处理新购买和取消事件。 此外，对于付费计划：

  - 您必须以美元设置每月和每年订阅价格。
  - 您的应用程序必须处理计划更改事件。
  - 您必须请求验证才能发布包含付费计划的上架产品。
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  更多信息请参阅“[{% data variables.product.prodname_marketplace %} 应用程序的定价计划](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)”和“[在应用程序中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

- **Available for（适用对象）** - {% data variables.product.prodname_marketplace %} 定价计划可以适用于 **Personal and organization accounts（个人和组织帐户）**、**Personal accounts only（仅个人帐户）**或 **Organization accounts only（仅组织帐户）**。 例如，如果您的定价计划为每单位定价并提供多个席位，则您将选择 **Organization accounts only（仅组织帐户）**，因为无法从个人帐户为组织中的人员分配席位。

- **Short description（简要说明）** - 编写有关定价计划细节的简短摘要。 说明可包括计划的目标客户类型或所包含的资源。

- **Bullets（项目符号）** - 您最多可以编写四个项目符号，其中包括有关定价计划的更多细节。 项目符号可包括应用程序的用例，或列出有关计划中包含的资源或功能的更多详细信息。

{% data reusables.marketplace.free-plan-note %}

### 创建 {% data variables.product.prodname_marketplace %} 上架产品的定价计划

如果不再需要 {% data variables.product.prodname_marketplace %} 上架产品的定价计划，或者需要调整定价细节，您可以删除它。

![删除定价计划的按钮](/assets/images/marketplace/marketplace_remove_this_plan.png)

为 {% data variables.product.prodname_marketplace %} 中已上架的应用程序发布定价计划后，就无法对该计划进行更改。 您需要删除该定价计划，然后创建一个新计划。 已经购买已删除定价计划的客户将继续使用它，直到他们选择退出并转到新的定价计划。 有关定价计划的更多信息，请参阅“[{% data variables.product.prodname_marketplace %} 定价计划](/marketplace/selling-your-app/github-marketplace-pricing-plans/)”。

您删除定价计划后，用户将无法使用该计划购买您的应用程序。 使用已删除定价计划的现有用户将继续使用该计划，直到他们取消其计划订阅。

{% note %}

**注：**{% data variables.product.product_name %} 不能从已删除的定价计划中删除用户。 您可以推出一个活动，鼓励用户从已删除的定价计划升级或降级到新的定价计划。

{% endnote %}

您可以禁用 GitHub Marketplace 免费试用而不撤销定价计划，但这会阻止您在未来为该计划启动免费试用。 如果您选择禁用定价计划的免费试用，则已注册的用户仍可以完成其免费试用。

撤销定价计划后，您可以创建与已删除的定价计划同名的新定价计划。 例如，如果您有一个 "Pro" 定价计划，但需要更改统一价格，您可以删除该 "Pro" 定价计划，然后使用更新后的价格创建新的 "Pro" 定价计划。 用户将能够立即购买新的定价计划。

如果您不是经过验证的发布者，则无法更改应用的定价计划。 有关成为验证的发布者的更多信息，请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”。
