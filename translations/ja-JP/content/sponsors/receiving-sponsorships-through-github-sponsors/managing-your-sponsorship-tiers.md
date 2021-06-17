---
title: スポンサーシップ層を管理する
intro: 新しいスポンサーシップ層の追加や、既存スポンサーシップ層の編集、破棄が可能です。
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

### スポンサーシップ層について

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

### スポンサーシップ層を追加する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 初めて層を設定する場合は、提案された層の例を確認して、他のオープンソースコントリビューターが {% data variables.product.prodname_sponsors %} をどのように設定しているかを確認することをお勧めします。 Decide whether you want to start with some suggested draft tiers, which you can customize in the tier editor.
   - To use a suggested tier, select the rewards you'd like to include in your draft tier or tiers. Then, click **Continue to tier editor**.
   - To create tiers without using with any of the draft suggestions, click **Skip this step**. !["Skip this step" option and "Continue to tier editor" button](/assets/images/help/sponsors/tier-editor-button.png)
1. Optionally, to edit a draft tier, find the draft tier and click **Edit**. ![Edit button next to draft tier](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

### スポンサーシップを編集または破棄する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **Note:** To see ideas of tier descriptions, scroll down.

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

### カスタム金額の層を有効化する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

### カスタム金額の層を無効化する

[**Sponsor tiers**] タブの [**Enable custom amounts**] オプションの選択を解除することで、カスタム金額の層を無効化できます。 カスタム金額を無効化すると、すべてのカスタム層が廃止されます。
