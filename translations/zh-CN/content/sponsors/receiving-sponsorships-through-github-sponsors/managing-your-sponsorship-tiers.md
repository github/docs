---
title: 管理赞助等级
intro: 您可以添加新的赞助等级，也可以编辑或撤销现有等级。
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: 管理付款等级
---

## 关于赞助等级

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## 添加等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 如果您是第一次设置等级，我们建议您查看建议的等级示例，看看其他一些开源贡献者是如何设置 {% data variables.product.prodname_sponsors %} 的。 决定是否要从一些建议的草稿层开始，您可以在等级编辑器中自定义这些等级。
   - 要使用建议的等级，请选择你想要包含在草稿等级或等级中的奖励。 然后点击 **Continue to tier editor（继续进入等级编辑器）**。
   - 要创建等级而不使用任何建议草案，请单击 **Skip this step（跳过此步骤）**。 !["跳过此步骤" 选项和 "继续进入等级编辑器" 按钮](/assets/images/help/sponsors/tier-editor-button.png)
1. （可选）要编辑草稿级，找到草稿级并点击 **Edit（编辑）**。 ![草稿等级旁边的编辑按钮](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

## 编辑或撤销等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **注意：** 要查看等级描述的想法，请向下滚动。

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

## Adding a repository to a sponsorship tier

{% data reusables.sponsors.sponsors-only-repos %}

### About adding repositories to a sponsorship tier

To add a repository to a tier, the repository must be private and owned by an organization, and you must have admin access to the repository.

When you add a repository to a tier, {% data variables.product.company_short %} will automatically send repository invitations to new sponsors and remove access when a sponsorship is cancelled.

Only personal accounts, not organizations, can be invited to private repositories associated with a sponsorship tier.

You can also manually add or remove collaborators to the repository, and {% data variables.product.company_short %} will not override these in the sync.

### About transfers for repositories that are added to sponsorship tiers

If you transfer a repository that has been added to a sponsorship tier, sponsors who have access to the repository through the tier may be affected.

- If the sponsored profile is for an organization and the repository is transferred to a different organization, current sponsors will be transferred, but new sponsors will not be added. The new owner of the repository can remove existing sponsors.
- If the sponsored profile is for a personal account, the repository is transferred to an organization, and the personal account has admin access to the new repository, existing sponsors will be transferred, and new sponsors will continue to be added to the repository.
- If the repository is transferred to a personal account, all sponsors will be removed and new sponsors will not be added to the repository.

### Adding a repository a sponsorship tier

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
1. Select **Grant sponsors access to a private repository**.

   ![Screenshot of checkbox to grant sponsors access to a private repository](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Select the dropdown menu and click the repository you want to add.

   ![Screenshot of dropdown menu to choose the repository to grant sponsors access to](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## 启用具有自定义金额的等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

## 禁用具有自定义金额的等级

您可以通过在 **Sponsor tiers（赞助者等级）**选项卡中取消选择 **Enable custom amounts（启用自定义金额）**选项来禁用具有自定义金额的等级。 如果您禁用自定义金额，所有自定义等级都将退出。
