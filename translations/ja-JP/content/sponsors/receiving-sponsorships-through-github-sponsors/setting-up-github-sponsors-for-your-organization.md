---
title: Organization の GitHub スポンサーシップを設定する
intro: 'Organizationが{% data variables.product.prodname_sponsors %}に参加すると、作業に対する報酬を得られます。'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Sponsors profile
  - Open Source
shortTitle: Set up for organization
ms.openlocfilehash: d7de813453d379ae898cc26d9579e06710aab26d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164471'
---
## {% data variables.product.prodname_sponsors %} に参加する

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Organizationとして{% data variables.product.prodname_sponsors %}
参加する招待を受け取ったら、以下のステップを実行すればスポンサードOrganizationになることができます。

Organization 外の個人の共同作成者として {% data variables.product.prodname_sponsors %} に参加する方法については、「[個人アカウントの {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)」を参照してください。

{% data reusables.sponsors.navigate-to-github-sponsors %} {% data reusables.sponsors.view-eligible-accounts %}
3. Organization の右側にある **[待機リストに参加]** をクリックします。
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

## スポンサードOrganizationプロフィールを記入する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.meet-the-team %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## スポンサーシップ層を作成する

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## 銀行口座情報をサブミットする

スポンサー付き Organization は、サポートされているリージョンの銀行口座で支払いを受けます。 この場合、Organization の専用銀行口座か個人の銀行口座を指定できます。 [Stripe Atlas](https://stripe.com/atlas) のようなサービスを通じて事業用の銀行口座を取得したり、[Open Collective](https://opencollective.com/) のような会計ホストに参加したりすることができます。 Organization のために {% data variables.product.prodname_sponsors %} を設定するユーザーも、サポートされている同じ地域に住んでいる必要があります。 {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

Open Collective を使用した Stripe Connect の設定に関する詳しい情報については、Open Collective Docs で「[{% data variables.product.prodname_sponsors %} を設定する](https://docs.opencollective.com/help/collectives/github-sponsors)」を参照してください。

## 納税情報をサブミットする

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## {% data variables.product.prodname_dotcom %} アカウントで 2 要素認証 (2FA) を有効にする

自分の Organization をスポンサー付き Organization にするには、{% data variables.product.product_location %} の自分のアカウントで 2FA を有効にする必要があります。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」を参照してください。

## {% data variables.product.prodname_dotcom %} に申請をサブミットして承認を求める

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## 参考資料

- 「[{% data variables.product.prodname_sponsors %} について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」
- 「[{% data variables.product.prodname_sponsors %} スポンサーを通じてスポンサーシップを獲得する](/sponsors/receiving-sponsorships-through-github-sponsors)」
