---
title: アプリケーションのリストのドラフト
intro: '{% data variables.product.prodname_marketplace %}のリストを作成すると、GitHubは承認のためにアプリケーションがサブミットされるまで、そのリストをドラフトモードで保存します。 このリストは、顧客に対してアプリケーションがどのように使えるのかを示します。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace/
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace/
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace/
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing/
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing/
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---
### 新しいドラフトの{% data variables.product.prodname_marketplace %}リストの作成

パブリックなアプリケーションについては、ドラフトのリストだけが作成できます。 ドラフトのリストを作成する前に、{% data variables.product.prodname_marketplace %}リストの設定を書いて構成するための以下のガイドラインを読んでください。

* [{% data variables.product.prodname_marketplace %}リストの説明を書く](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [{% data variables.product.prodname_marketplace %} webhookの設定](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

{% data variables.product.prodname_marketplace %}のリストを作成するには、以下のようにします。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. 左のサイドバーで、{% data variables.product.prodname_marketplace %}に追加しようとしているアプリケーションに応じて、**OAuth Apps**もしくは**GitHub Apps**をクリックしてください。

  {% note %}

  **ノート**: https://github.com/marketplace/new にアクセスし、利用可能なアプリケーションを見て、**Create draft listing（ドラフトのリストの作成）**をクリックしても、リストを追加できます。

  {% endnote %}

  ![アプリケーションの種類の選択](/assets/images/settings/apps_choose_app.png)

4. 追加したいアプリケーションを選択してください。

{% data variables.product.prodname_marketplace %}.
![{% data variables.product.prodname_marketplace %}リストのアプリケーションの選択](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.edit_marketplace_listing %}
5. 新しいドラフトのリストを作成すると、{% data variables.product.prodname_marketplace %}のリストの完成前にアクセスしておかなければならないセクションの概要が表示されます。 ![GitHub Marketplaceのリスト](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**ノート:** リストの"Contact info（連絡先の情報）"セクションでは、support@domain.comというようなグループメールアドレスよりは、個人のメールアドレスを使うことをおすすめします。 GitHubはこれらのメールアドレスを、リストに影響するかもしれない{% data variables.product.prodname_marketplace %}のアップデート、新機能、マーケティングの機会、支払い、カンファレンスやスポンサーシップに関する情報などに関する連絡に使用します。

{% endnote %}

### リストの編集

{% data variables.product.prodname_marketplace %}のドラフトリストを作成した後は、いつでもリスト内の情報を変更するために戻ってくることができます。 アプリケーションが検証済みで{% data variables.product.prodname_marketplace %}にあるなら、リスト中の情報や画像を編集することはできますが、公開された既存の価格プランを変更することはできません。 「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。

### アプリケーションのサブミット

{% data variables.product.prodname_marketplace %}リストが完成したら、**Overview（概要）**ページからレビューのためにリストをサブミットできます。 「[{% data variables.product.prodname_marketplace %}の開発者契約](/articles/github-marketplace-developer-agreement/)」を読んで同意しなければなりません。続いて**Submit for review（レビューのためにサブミット）**をクリックできます。 レビューのためにアプリケーションをサブミットした後、のオンボーディングの専門家から、オンボーディングのプロセスに関する追加情報と併せて連絡が来ます。

### {% data variables.product.prodname_marketplace %}リストの削除

アプリケーションを{% data variables.product.prodname_marketplace %}のリストに載せたくなくなったなら、リストを削除するために{% data variables.contact.contact_support %}に連絡してください。
