---
title: 配置 web 挂钩以通知您计划更改
intro: '[创建草稿 {% data variables.product.prodname_marketplace %} 列表](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)后，可以配置 Webhook，用于在客户帐户计划发生更改时通知你。 配置 Webhook 后，可以[处理应用中的 `marketplace_purchase` 事件类型](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)。'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084971'
---
{% data variables.product.prodname_marketplace %} 事件 web 挂钩只能在应用程序的 {% data variables.product.prodname_marketplace %} 上架页面中进行设置。 可在[应用程序的开发人员设置页面](https://github.com/settings/developers)中配置所有其他事件。 如果尚未创建 {% data variables.product.prodname_marketplace %} 上架信息，请阅读“[创建 {% data variables.product.prodname_marketplace %} 上架信息草稿](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)”了解方法。

## 创建 Webhook

若要为 {% data variables.product.prodname_marketplace %} 上架信息创建 Webhook，请在 [{% data variables.product.prodname_marketplace %} 上架页面](https://github.com/marketplace/manage)的左边栏中，单击“Webhook”。 您将看到配置 web 挂钩所需的以下 web 挂钩配置选项：

### 有效负载 URL

{% data reusables.webhooks.payload_url %}

### 内容类型

{% data reusables.webhooks.content_type %} GitHub 建议使用 `application/json` 内容类型。

### 机密

{% data reusables.webhooks.secret %}

### 活动

默认情况下，web 挂钩交付为“Active（激活）”。 您可以通过取消选择“Active（激活）”来选择在开发过程中禁用 web 挂钩交付。 如果您禁用了 web 挂钩交付，则在提交应用程序以供审查之前需要选择“Active（激活）”。

## 查看 web 挂钩交付

配置 {% data variables.product.prodname_marketplace %} Webhook 后，可在应用程序的 [{% data variables.product.prodname_marketplace %} 上架信息](https://github.com/marketplace/manage)的 Webhook 页面中检查 `POST` 请求有效负载。 GitHub 不会重新发送失败的递送尝试。 确保您的应用程序可以接收 GitHub 发送的所有 web 挂钩有效负载。

![检查最近的 {% data variables.product.prodname_marketplace %} web 挂钩交付](/assets/images/marketplace/marketplace_webhook_deliveries.png)
