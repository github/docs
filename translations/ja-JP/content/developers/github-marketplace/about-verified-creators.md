---
title: 検証済みの作者について
intro: 'アプリケーションを{% data variables.product.prodname_marketplace %}で販売したいOrganizationは、検証プロセスに従う必要があります。 検証プロセスでは、身元確認や支払いプロセスの確認を行います。'
versions:
  free-pro-team: '*'
---

### 検証済みの作者について

検証済みの作者とは、{% data variables.product.company_short %}が確認したOrganizationのことです。 誰でも他のユーザと{% data variables.product.prodname_marketplace %}でアプリケーションを共有できますが、アプリケーションを販売できるのは{% data variables.product.company_short %}に検証されたOrganizationのみです。 Organizationに関する詳細な情報については、「[Organizationについてorganizations](/github/setting-up-and-managing-organizations-and-teams/about-organizations)」を参照してください。

検証プロセスは、ユーザの保護を目的としています。 このプロセスでは、販売者の身元、{% data variables.product.product_name %} Organization が安全に設定されていること、サポートのために連絡が取れることなどを確認します。

検証確認に合格すると、そのOrganizationが{% data variables.product.prodname_marketplace %}で掲載するすべてのアプリケーションに検証済みの作者バッジ{% octicon "verified" aria-label="Verified creator badge" %}が表示されます。 この状態になると、Organizationは有料プランを任意のアプリケーションに追加できます。 有料プランのある各アプリケーションについては、支払いの処理が正しく設定されていることを確認するため、財務オンボーディングプロセスも実施します。

![検証済み作者のバッジ](/assets/images/marketplace/marketplace_verified_creator_badges_apps.png)

検証済みの作者バッジの他に、未検証および検証済みのアプリケーションのバッジも表示されます。 これらのアプリケーションは、以前の方法を用いて、個々のアプリケーションを検証して公開されたものです。

![検証済みの緑と未検証の灰色のバッジ](/assets/images/marketplace/marketplace_verified_badges.png)

使用するアプリケーションの探し方に関する情報については、「[{% data variables.product.prodname_marketplace %}の検索](/github/searching-for-information-on-github/searching-github-marketplace)」を参照してください。

### 検証プロセスについて

アプリケーションの1つのリストに関する検証を初めてリクエストすると、検証プロセスが始まります。  オンボーディングの専門家が、プロセスを案内してくれます。 これには以下のチェックが含まれます。

- プロフィール情報 - 基本的なプロフィール情報が正しく適切に展開されていること。
- セキュリティ - Organizationが2要素認証を有効化していること。
- 検証ドメイン - OrganizationがサイトのURLのドメインを検証していること。
- 購入webhookイベント - イベントがアプリケーションによって正しく処理されること。

Organizationが検証されると、アプリケーションは検証済み作者のバッジ付きで表示されます。 これで、アプリケーションに有料プランを提供できるようになります。

{% data variables.product.prodname_marketplace %}でアプリケーションをリストするための要件に関する情報については、「[{% data variables.product.prodname_marketplace %}上にアプリケーションをリストするための要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)」を参照してください。

{% data reusables.marketplace.app-transfer-to-org-for-verification %} これを行う方法については「[公開のためのリストのサブミット](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)」を参照してください。

{% note %}

**ノート:** アプリケーションのためのこの検証プロセスは、個々のアプリケーションが検証された以前のプロセスを置き換えます。 現在のプロセスは、Actionsのための検証プロセスに似ています。 旧プロセスの下で検証されたアプリケションを持っている場合、それらはこの変更には影響されません。 {% data variables.product.prodname_marketplace %}チームは、Organizationベースの検証への移行方法の詳細について、お客様に連絡します。

{% endnote %}
