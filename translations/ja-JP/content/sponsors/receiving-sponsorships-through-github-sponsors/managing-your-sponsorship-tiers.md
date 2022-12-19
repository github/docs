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
ms.openlocfilehash: 4ff2d3731483075afc23da403e62f1682c6dd6c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139395'
---
## スポンサーシップ層について

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## スポンサーシップ層を追加する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 初めて層を設定する場合は、提案された層の例を確認して、他のオープンソースコントリビューターが {% data variables.product.prodname_sponsors %} をどのように設定しているかを確認することをお勧めします。 層エディタでカスタマイズ可能な、提案されたドラフト層から始めるかどうかを決めます。
   - 提案された層を使用するには、ドラフト層に含める謝礼を選択します。 次に、 **[階層エディターに進む]** をクリックします。
   - ドラフトの提案を使用せずに層を作成するには、 **[この手順をスキップする]** をクリックします。
   ![[この手順をスキップする] オプションと [階層エディターに進む] ボタン](/assets/images/help/sponsors/tier-editor-button.png)
1. 必要に応じて、ドラフト層を編集するには、ドラフト層を見つけて **[編集]** をクリックします。
  ![ドラフト層の横にある [編集] ボタン](/assets/images/help/sponsors/draft-tier-edit.png) {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %}

## スポンサーシップを編集または破棄する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  **注:** 層の説明については、下にスクロールします。

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## スポンサーシップ層にリポジトリを追加する

{% data reusables.sponsors.sponsors-only-repos %}

### スポンサーシップ層へのリポジトリの追加について

リポジトリを階層に追加するには、リポジトリがプライベートで、Organization によって所有されている必要があり、そのリポジトリへの管理者アクセス権が必要になります。

層にリポジトリを追加すると、リポジトリの招待が {% data variables.product.company_short %} から自動的に新しいスポンサーに送信され、スポンサーシップがキャンセルされるとアクセスが削除されます。 

スポンサーシップ層に関連付けられているプライベート リポジトリに招待できるのは、Organization ではなく個人アカウントのみです。

リポジトリにコラボレーターを手動で追加または削除することもでき、{% data variables.product.company_short %} では同期でこれらをオーバーライドしません。 

### スポンサーシップ層に追加されるリポジトリの転送について

スポンサーシップ層に追加されたリポジトリを転送すると、その層を通じてリポジトリにアクセスできるスポンサーが影響を受ける可能性があります。

- スポンサー付きプロファイルがある Organization のものであり、リポジトリが別の Organization に転送される場合、現在のスポンサーは転送されますが、新しいスポンサーは追加されません。 リポジトリの新しい所有者は既存のスポンサーを削除できます。
- スポンサー付きプロファイルが個人アカウントのものであり、リポジトリがある Organization に転送され、新しいリポジトリへの管理者アクセス権がその個人アカウントに与えられている場合は、既存のスポンサーは転送され、新しいスポンサーは引き続きリポジトリに追加されます。
- リポジトリが個人アカウントに転送された場合、すべてのスポンサーが削除され、新しいスポンサーはリポジトリに追加されません。

### スポンサーシップ層にリポジトリを追加する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. **[プライベート リポジトリへのアクセスをスポンサーに許可する]** を選択します。

   ![プライベート リポジトリへのアクセスをスポンサーに許可するチェックボックスのスクリーンショット](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. ドロップダウン メニューを選択し、追加するリポジトリをクリックします。

   ![スポンサー付与するアクセス権の対象のリポジトリを選択するドロップダウン メニューのスクリーンショット](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## カスタム金額の層を有効化する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.enable-custom-amounts %}

## カスタム金額の層を無効化する

**[スポンサー層]** タブの **[カスタムの額の有効化]** オプションを選択解除すると、カスタム金額の層を無効にすることができます。カスタム金額を無効にした場合、すべてのカスタム層は廃止されます。
