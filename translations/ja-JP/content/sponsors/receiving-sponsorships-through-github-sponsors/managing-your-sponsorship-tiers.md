---
title: スポンサーシップ層を管理する
intro: 新しいスポンサーシップ層の追加や、既存スポンサーシップ層の編集、破棄が可能です。
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
shortTitle: Manage payment tiers
---

## スポンサーシップ層について

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## スポンサーシップ層を追加する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 初めて層を設定する場合は、提案された層の例を確認して、他のオープンソースコントリビューターが {% data variables.product.prodname_sponsors %} をどのように設定しているかを確認することをお勧めします。 層エディタでカスタマイズ可能な、提案されたドラフト層から始めるかどうかを決めます。
   - 提案された層を使用するには、ドラフト層に含める謝礼を選択します。 次に [**Continue to tier editor**] をクリックします。
   - ドラフトの提案を使用せずに層を作成するには、[**Skip this step**] をクリックします。 ![[Skip this step] オプションと [Continue to tier editor] ボタン](/assets/images/help/sponsors/tier-editor-button.png)
1. 必要に応じて、ドラフト層を編集するには、ドラフト層を見つけて [**Edit**] をクリックします。 ![ドラフト層の横にある編集ボタン](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

## スポンサーシップを編集または破棄する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **注釈:** 層の説明についてのアイデアを表示するには、下にスクロールします。

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

## カスタム金額の層を有効化する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

## カスタム金額の層を無効化する

[**Sponsor tiers**] タブの [**Enable custom amounts**] オプションの選択を解除することで、カスタム金額の層を無効化できます。 カスタム金額を無効化すると、すべてのカスタム層が廃止されます。
