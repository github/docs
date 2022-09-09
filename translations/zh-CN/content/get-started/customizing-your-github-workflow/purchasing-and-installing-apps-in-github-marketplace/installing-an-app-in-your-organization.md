---
title: 在组织中安装应用程序
intro: '您可以从 {% data variables.product.prodname_marketplace %} 安装要在组织中使用的应用程序。'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install app organization
ms.openlocfilehash: bf64ee38839197262852d07c024c72a0742d0e6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099763'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

如果选择付费计划，则要使用组织现有的支付方式，在组织的当前结算日期支付应用程序订阅。

{% data reusables.marketplace.free-trials %}

## 在组织中安装 {% data variables.product.prodname_github_app %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. 如果应用需要访问存储库，请决定是让应用有权访问所有存储库还是某些存储库，然后选择“所有存储库”或“仅所选存储库” 。
  ![单选按钮，其中包含用于在所有存储库或某些存储库上安装应用的选项](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png) {% data reusables.marketplace.select-installation-repos %} {% data reusables.marketplace.review-app-perms-install %}

## 在组织中安装 {% data variables.product.prodname_oauth_app %}

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. 检查有关应用对个人帐户、组织和数据访问权限的信息，然后单击“授权应用程序”。

## 延伸阅读

- [更新组织的付款方式](/articles/updating-your-organization-s-payment-method)
- [在个人帐户中安装应用](/articles/installing-an-app-in-your-personal-account)
