---
title: 管理赞助等级
intro: 您可以添加新的赞助等级，也可以编辑或撤销现有等级。
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
---

### 关于赞助等级

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

### 添加等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 如果您是第一次设置等级，我们建议您查看建议的等级示例，看看其他一些开源贡献者是如何设置 {% data variables.product.prodname_sponsors %} 的。 决定是否要从一些建议的草稿层开始，您可以在等级编辑器中自定义这些等级。
   - 要使用建议的等级，请选择你想要包含在草稿等级或等级中的奖励。 然后点击 **Continue to tier editor（继续进入等级编辑器）**。
   - 要创建等级而不使用任何建议草案，请单击 **Skip this step（跳过此步骤）**。 !["跳过此步骤" 选项和 "继续进入等级编辑器" 按钮](/assets/images/help/sponsors/tier-editor-button.png)
1. （可选）要编辑草稿级，找到草稿级并点击 **Edit（编辑）**。 ![草稿等级旁边的编辑按钮](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

### 编辑或撤销等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **注意：** 要查看等级描述的想法，请向下滚动。

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

### 启用具有自定义金额的等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

### 禁用具有自定义金额的等级

您可以通过在 **Sponsor tiers（赞助者等级）**选项卡中取消选择 **Enable custom amounts（启用自定义金额）**选项来禁用具有自定义金额的等级。 如果您禁用自定义金额，所有自定义等级都将退出。
