---
title: 查看上架产品的指标
intro: '{% data variables.product.prodname_marketplace %} Insights 页面显示 {% data variables.product.prodname_github_app %} 的指标。 您可以使用这些指标来跟踪 {% data variables.product.prodname_github_app %} 的表现，并就价格、计划、免费试用以及如何看待营销活动的效果做出更明智的决定。'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084983'
---
您可以查看 {% data variables.product.prodname_github_app %} 在过去一天（24 小时）、一周、一月或整个上架期间的指标。

{% note %}

**注意：** 由于聚合数据需要时间，因此你会注意到显示的日期略有延迟。 选择时间段时，可以在页面顶部看到指标的确切日期。

{% endnote %}

## 性能指标

Insights 页面显示选定时段的以下性能指标：

* 订阅值：订阅的可能总收入（美元）。 此值表示在没有计划或免费试用被取消并且所有信用交易都成功的情况下的可能收入。 订阅价值包括计划在选定时段内的全部价值，从免费试用开始计算，即使在该时段内没有任何财务交易。 订阅价值还包括选定时段内升级计划的全部价值，但不包括按比例分配的金额。 若要查看和下载单个交易，请参阅“[GitHub 市场交易](/marketplace/github-marketplace-transactions/)”。
* 访客数：查看过 GitHub 应用上架信息页面的人数。 此数字包括已登录和已注销的访客。
* 网页浏览量：GitHub 应用上架信息页面获得的浏览次数。 单个访问者可以生成多个页面视图。

{% note %}

注意：估计的订阅价值可能远远高于在此期间处理的交易。 

{% endnote %}

### 转化性能

* 登陆页面的绝对访客数：查看过 GitHub 应用的登录页面的人数。
* 结账页面的绝对访客数：查看过 GitHub 应用的结账页面的人数。
* 结账页面产生的新订阅数：付费订阅、免费试用和免费订阅的总数。 有关每种类型订阅的具体数量，请参阅“订阅总数的细分”。

![市场见解](/assets/images/marketplace/marketplace_insights.png)

要访问 {% data variables.product.prodname_marketplace %} Insights：

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. 选择要查看其 Insights 的 {% data variables.product.prodname_github_app %}。
{% data reusables.user-settings.edit_marketplace_listing %}
6. 单击“见解”选项卡。
7. （可选）通过单击 Insights 页面右上角的 Period（时段）下拉列表选择不同的时间段。
![市场时间段](/assets/images/marketplace/marketplace_insights_time_period.png)
