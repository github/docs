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
---

## {% data variables.product.prodname_sponsors %} に参加する

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Organizationとして{% data variables.product.prodname_sponsors %} 参加する招待を受け取ったら、以下のステップを実行すればスポンサードOrganizationになることができます。

To join {% data variables.product.prodname_sponsors %} as an individual contributor outside an organization, see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)."

{% data reusables.sponsors.navigate-to-github-sponsors %}
{% data reusables.sponsors.view-eligible-accounts %}
3. Organization の右にある [**Join the waitlist**] をクリックします。
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.accept-legal-terms %}

## スポンサードOrganizationプロフィールを記入する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.meet-the-team %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

## スポンサーシップ層を作成する

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.add-more-tiers %}

## 銀行口座情報をサブミットする

As a sponsored organization, you will receive payouts to a bank account in a supported region. This can be a dedicated bank account for your organization or a personal bank account. You can get a business bank account through services like [Stripe Atlas](https://stripe.com/atlas) or join a fiscal host like [Open Collective](https://opencollective.com/). Organization のために {% data variables.product.prodname_sponsors %} を設定するユーザーも、サポートされている同じ地域に住んでいる必要があります。 {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

Open Collective を使用して Stripe Connect を設定する方法については、Open Collective のドキュメンテーションで「[{% data variables.product.prodname_sponsors %} の設定](https://docs.opencollective.com/help/collectives/github-sponsors)」を参照してください。

## 納税情報をサブミットする

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.settings-tab %}
{% data reusables.sponsors.country-of-residence %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

## {% data variables.product.prodname_dotcom %} アカウントで 2 要素認証 (2FA) を有効にする

Before your organization can become a sponsored organization, you must enable 2FA for your account on {% data variables.product.product_location %}. 詳しい情報については「[2 要素認証の設定](/articles/configuring-two-factor-authentication)」を参照してください。

## {% data variables.product.prodname_dotcom %} に申請をサブミットして承認を求める

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## 参考リンク
- [{% data variables.product.prodname_sponsors %} について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)
- 「[{% data variables.product.prodname_sponsors %} を通じてスポンサーシップを獲得する](/sponsors/receiving-sponsorships-through-github-sponsors)」
