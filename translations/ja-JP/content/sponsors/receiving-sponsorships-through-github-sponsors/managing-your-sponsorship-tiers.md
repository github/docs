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

## カスタム金額の層を有効化する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

## カスタム金額の層を無効化する

[**Sponsor tiers**] タブの [**Enable custom amounts**] オプションの選択を解除することで、カスタム金額の層を無効化できます。 カスタム金額を無効化すると、すべてのカスタム層が廃止されます。
