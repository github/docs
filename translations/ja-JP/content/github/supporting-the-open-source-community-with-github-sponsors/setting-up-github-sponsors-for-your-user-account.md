---
title: ユーザアカウントに GitHub スポンサーを設定する
intro: 'スポンサード開発者になるには、{% data variables.product.prodname_sponsors %} に参加し、スポンサード開発者プロフィールに必要事項をすべて記入し、スポンサーシップ層を作成し、銀行口座情報と納税フォームをサブミットし、{% data variables.product.prodname_dotcom %} アカウントで 2 要素認証を有効にします。'
redirect_from:
  - /articles/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_sponsors %} に参加する

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

To join {% data variables.product.prodname_sponsors %} as an organization, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)."

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Organization のオーナーの場合は、適格なアカウントが複数あります。 [**View your eligible accounts**] をクリックして、アカウントのリストからユーザ アカウントを見つけます。
3. [**Join the waitlist**] をクリックします。
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.accept-legal-terms %}

サポートされている地域で銀行口座をお持ちであれば、{% data variables.product.prodname_dotcom %} は 2 週間以内に申請をレビューします。

### スポンサード開発者プロフィールを記入する

{% data variables.product.prodname_dotcom %} で申請がレビューされたら、ユーザがあなたのスポンサーになれるようにスポンサード開発者プロフィールを設定できます。

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

### スポンサーシップ層を作成する

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.add-more-tiers %}

### 銀行口座情報をサブミットする

サポートされている地域にお住まいの場合は、次の手順に従って Stripe Connect アカウントを作成し、銀行口座情報をサブミットできます。 Your region of residence and the region of your bank account must match. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

サポートされていない地域にお住まいで、{% data variables.product.prodname_sponsors %} のベータに参加が許可された場合は、ACH 送金または電信で支払いを受けられるように、銀行口座情報を指定する手順が、メールで届きます。

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

### 納税情報をサブミットする

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.settings-tab %}
{% data reusables.sponsors.country-of-residence %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

### {% data variables.product.prodname_dotcom %} アカウントで 2 要素認証 (2FA) を有効にする

スポンサード開発者になるには、{% data variables.product.product_name %} アカウントで 2FA を有効にする必要があります。 詳しい情報については「[2 要素認証の設定](/articles/configuring-two-factor-authentication)」を参照してください。

### {% data variables.product.prodname_dotcom %} に申請をサブミットして承認を求める

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
4. [**Request approval**] をクリックします。 ![[Request approval] ボタン](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
