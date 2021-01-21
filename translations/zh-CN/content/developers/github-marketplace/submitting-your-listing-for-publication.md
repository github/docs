---
title: 提交要发布的上架信息
intro: '您可以提交上架产品以供 {% data variables.product.prodname_dotcom %} 社区使用。'
redirect_from:
  - /marketplace/listing-on-github-marketplace/submitting-your-listing-for-review
  - /developers/github-marketplace/submitting-your-listing-for-review
versions:
  free-pro-team: '*'
---



完成应用程序的上架信息后，您将会看到两个按钮，允许您请求在验证或不验证的情况下发布上架产品。 如果您在上架信息中发布了任何付费定价计划，则“发布而不验证”的 **Request（请求）**按钮将被禁用。

![未经验证和已验证请求按钮](/assets/images/marketplace/marketplace-request-button.png)

{% data reusables.marketplace.launch-with-free %}

提交上架信息以供审查后，上架专家将联系您，要求您提供更多信息。

有关创建和提交上架信息的流程概述，请参阅“[关于 {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/about-github-marketplace#publishing-an-app-to-github-marketplace)”。

### 请求验证发布的前提条件

请求验证上架信息之前，您需要将 {% data variables.product.prodname_marketplace %} 帐单流程和 web 挂钩集成到应用程序中。 更多信息请参阅“[在应用程序中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

如果已满足上架要求并且已集成 {% data variables.product.prodname_marketplace %} API，请继续提交您的上架信息。 更多信息请参阅“[上架应用程序的要求](/developers/github-marketplace/requirements-for-listing-an-app)”。

{% data reusables.marketplace.app-transfer-to-org-for-verification %} 有关如何执行此操作的信息，请参阅下面的“[在提交之前将应用程序转让给组织](#transferring-an-app-to-an-organization-before-you-submit)”。

### 在提交之前将应用程序转让给组织

无法出售由用户帐户拥有的应用程序。 您需要将应用程序转让给已成为经验证创建者的组织，或者可请求验证应用程序上架信息的组织。 更多信息请参阅：

1. “[从头开始创建组织](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)”

1. “[转让 GitHub 应用程序的所有权](/developers/apps/transferring-ownership-of-a-github-app)”或“[转让 OAuth 应用程序的所有权](/developers/apps/transferring-ownership-of-an-oauth-app)”
