---
title: 起草应用程序上架信息
intro: '当您创建 {% data variables.product.prodname_marketplace %} 上架信息时，GitHub 将其保存为草稿模式，直到您提交应用程序以供审批。 您的上架信息向客户显示如何使用您的应用程序。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084969'
---
## 创建新的 {% data variables.product.prodname_marketplace %} 上架信息草稿

您只能为公共应用程序创建上架信息草稿。 在创建上架信息草稿之前，请阅读以下有关在 {% data variables.product.prodname_marketplace %} 上架信息中编写和配置设置的指南：

* [编写 {% data variables.product.prodname_marketplace %} 上架信息说明](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [设置 {% data variables.product.prodname_marketplace %} 上架信息的定价计划](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [配置 {% data variables.product.prodname_marketplace %} Webhook](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

要创建 {% data variables.product.prodname_marketplace %} 上架信息：

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. 在左侧边栏中，单击“OAuth 应用”或“GitHub 应用”，具体取决于要添加到 {% data variables.product.prodname_marketplace %} 的应用 。

  {% note %}

  注意：还可以通过导航至 https://github.com/marketplace/new 、查看可用的应用并单击“创建上架信息草稿”来添加上架信息 。

  {% endnote %}

  ![应用程序类型选择](/assets/images/settings/apps_choose_app.png)

4. 选择您想添加到 {% data variables.product.prodname_marketplace %} 的应用程序。
![选择在 {% data variables.product.prodname_marketplace %} 中上架的应用](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. 创建新的上架草稿后，您将看到在完成 {% data variables.product.prodname_marketplace %} 上架信息之前需要访问的部分的概览。
![GitHub 市场上架信息](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

注意：在上架信息的“联系人信息”部分，建议使用个人电子邮件地址，而不是像 support@domain.com 这样的团体电子邮件地址。 GitHub 将使用这些电子邮件地址与您联系，以告知可能影响您的上架产品的 {% data variables.product.prodname_marketplace %} 更新、新功能发布、营销机会、付款以及会议和赞助信息。

{% endnote %}

## 编辑您的上架信息

创建 {% data variables.product.prodname_marketplace %} 上架信息草稿后，您可以随时回来修改上架信息。 如果您的应用程序已获批准并且在 {% data variables.product.prodname_marketplace %} 中，您可以编辑上架产品的信息和图像，但无法更改现有的已发布定价计划。 请参阅“[设置 {% data variables.product.prodname_marketplace %} 上架信息的定价计划](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)”。

## 提交应用程序

完成 {% data variables.product.prodname_marketplace %} 上架信息后，便可以在“概述”页中提交上架信息以供审查。 你需要阅读并接受“[{% data variables.product.prodname_marketplace %} 开发者协议](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/)”，然后才可以单击“提交审查”。 提交应用程序以供审查后，上架专家将与您联系，提供有关上架流程的其他信息。

## 删除 {% data variables.product.prodname_marketplace %} 上架信息

如果您不想再在 {% data variables.product.prodname_marketplace %} 中上架应用程序，请联系 {% data variables.contact.contact_support %} 删除您的上架信息。
