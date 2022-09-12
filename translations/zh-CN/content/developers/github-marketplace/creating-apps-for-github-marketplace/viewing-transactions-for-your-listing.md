---
title: 查看上架产品的交易
intro: '{% data variables.product.prodname_marketplace %} 交易页面允许您下载和查看 {% data variables.product.prodname_marketplace %} 上架产品的所有交易。 您可以查看 {% data variables.product.prodname_github_app %} 在过去一天（24 小时）、一周、一月或整个上架期间的交易。'
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084981'
---
{% note %}

**注意：** 由于聚合数据需要时间，因此你会注意到显示的日期略有延迟。 选择时间段时，可以在页面顶部看到指标的确切日期。

{% endnote %}


您可以查看或下载交易数据来跟踪订阅活动。 单击“导出 CSV”按钮以下载 `.csv` 文件。 您还可以选择一个时间段在交易页面中查看和搜索。

## 交易数据字段

* **date：** 以 `yyyy-mm-dd` 格式表示的事务日期。
* **app_name：** 应用名称。
* **user_login：** 订阅用户的登录名。
* **user_login：** 订阅用户的 ID。
* **user_type：** GitHub 帐户的类型，`User` 或 `Organization`。
* **：** 三个字母的国家/地区代码。
* **amount_in_cents：** 交易金额（以美分为单位）。 如果该值小于计划金额，则表示用户已升级并按比例分配给新计划。 值为零表示用户已取消其计划。
* **renewal_frequency：** 订阅续订频率，`Monthly` 或 `Yearly`。
* **marketplace_listing_plan_id：** 的 `id`。
* **region：** 帐单邮寄地址中的区域名称。
* **postal_code：** 帐单邮寄地址中的邮政编码值。

![市场见解](/assets/images/marketplace/marketplace_transactions.png)

## 访问 {% data variables.product.prodname_marketplace %} 交易

要访问 {% data variables.product.prodname_marketplace %} 交易：

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. 选择要查看其事务的 {% data variables.product.prodname_github_app %}。
{% data reusables.user-settings.edit_marketplace_listing %}
6. 单击“事务”选项卡。
7. （可选）通过单击 Transactions（交易）页面右上角的 Period（时段）下拉列表选择不同的时间段。
![市场时间段](/assets/images/marketplace/marketplace_insights_time_period.png)
