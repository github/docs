---
title: GitHub プランをダウングレードする
intro: 'どのタイプの {% data variables.product.product_name %} アカウントのプランもいつでもダウングレードできます。'
redirect_from:
  - /articles/downgrading-your-personal-account-s-billing-plan/
  - /articles/how-do-i-cancel-my-account/
  - /articles/downgrading-a-user-account-to-free/
  - /articles/removing-paid-seats-from-your-organization/
  - /articles/downgrading-your-organization-s-paid-seats/
  - /articles/downgrading-your-organization-s-billing-plan/
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free/
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free/
  - /articles/downgrading-your-organization-to-free/
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan/
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan/
  - /articles/downgrading-your-github-billing-plan/
  - /articles/downgrading-your-github-subscription
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### {% data variables.product.product_name %}プランのダウングレード

ユーザアカウントまたはOrganizationのプランをダウングレードした場合、価格とアカウント機能の変更は次の請求日から有効になります。 有料のユーザアカウントまたはOrganizationのプランを変更しても、他の有料{% data variables.product.prodname_dotcom %} 機能のプランや支払いには影響しません。 詳細は「[アップグレードやダウングレードは支払い処理にどのように影響しますか?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)」を参照してください。

### ユーザアカウントのプランをダウングレードする

ユーザアカウントを{% data variables.product.prodname_pro %}から{% data variables.product.prodname_free_user %}にダウングレードした場合、プライベートリポジトリでの高度なコードレビューツールにはアクセスできなくなります。 {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
4. ** Edit（編集）**ドロップダウンを使い、**Downgrade to Free{Freeへのダウングレード）**をクリックしてください。 ![Downgrade to free button](/assets/images/help/billing/downgrade-to-free.png)
5. 次回の請求日にユーザアカウントがアクセスできなくなる機能に関する情報を読み、[**I understand. Continue with downgrade**] をクリックします。 ![[Continue with downgrade] ボタン](/assets/images/help/billing/continue-with-downgrade.png)

プライベートリポジトリに {% data variables.product.prodname_pages %} サイトを公開し、カスタムドメインを追加した場合、ドメイン乗っ取りのリスクを回避するため、{% data variables.product.prodname_pro %} から {% data variables.product.prodname_free_user %} にダウングレードする前に DNS レコードを削除または更新します。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。

### Organizationのプランをダウングレードする

{% data reusables.dotcom_billing.org-billing-perms %}

Organizationを{% data variables.product.prodname_team %}から{% data variables.product.prodname_free_team %}にダウングレードした場合、そのアカウントはチームの高度なコラボレーションおよび管理ツールにはアクセスできなくなります。

Organizationを{% data variables.product.prodname_ghe_cloud %}から{% data variables.product.prodname_team %}または{% data variables.product.prodname_free_team %}にダウングレードした場合、そのアカウントは高度なセキュリティ、コンプライアンス、およびデプロイメントコントロールにアクセスできなくなります。 {% data reusables.gated-features.more-info %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
6. [**Edit**] ドロップダウンで、必要なダウングレード オプションをクリックします。 ![[Downgrade] ボタン](/assets/images/help/billing/downgrade-option-button.png)
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}

### 従来のリポジトリ単位の支払いを使用しているOrganizationのプランをダウングレードする

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %}詳しい情報については、「[Organization をリポジトリごとからユーザごとに切り替える](/github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. [Subscriptions] の下にある [Edit] ドロップダウンメニューから [**Edit plan**] をクリックします。 ![[Edit Plan] ドロップダウン](/assets/images/help/billing/edit-plan-dropdown.png)
1. [Billing/Plans] で、変更する必要があるプランの横にある [**Downgrade**] をクリックします。 ![[Downgrade] ボタン](/assets/images/help/billing/downgrade-plan-option-button.png)
1. アカウントをダウングレードする理由を入力し、[**Downgrade plan**] をクリックします。 ![ダウングレードの理由を入力するテキストボックスと [Downgrade] ボタン](/assets/images/help/billing/downgrade-plan-button.png)

### Organization から有料シートを削除する

Organization が使用する有料シート数を減らすには、Organization からメンバーを削除するか、メンバーを外部コラボレーターに変更してアクセス権をパブリックリポジトリに限定する方法があります。 詳しい情報については、以下を参照してください。
- "[Organization からメンバーを削除する](/articles/removing-a-member-from-your-organization)"
- [Organizatin のメンバーを外部のコラボレータに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
6. ** Edit（編集）**ドロップダウンを使い、**Remove seats（シートの削除）**をクリックしてください。 ![[Remove Seats] ドロップダウン](/assets/images/help/billing/remove-seats-dropdown.png)
1. [Remove seats] の下でダウングレードするシート数を選択します。 ![[Remove Seats] オプション](/assets/images/help/billing/remove-seats-amount.png)
1. 次回請求日の新しい支払いに関する情報を確認し、[**Remove seats**] をクリックします。 ![[Remove Seats] ボタン](/assets/images/help/billing/remove-seats-button.png)

### 参考リンク

- "[{% data variables.product.prodname_dotcom %}の製品](/articles/github-s-products)"
- [アップグレードあるいはダウングレードの支払いプロセスへの影響は？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- 「[{% data variables.product.prodname_dotcom %} の支払いについて](/articles/about-billing-on-github)」
- 「[支払い方法を削除する](/articles/removing-a-payment-method)」
- [ユーザごとの価格付けについて](/articles/about-per-user-pricing)
