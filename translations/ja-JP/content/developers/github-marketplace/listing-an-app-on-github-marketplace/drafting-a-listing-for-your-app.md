---
title: アプリケーションのリストのドラフト
intro: '{% data variables.product.prodname_marketplace %}のリストを作成すると、GitHubは承認のためにアプリケーションがサブミットされるまで、そのリストをドラフトモードで保存します。 このリストは、顧客に対してアプリケーションがどのように使えるのかを示します。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089695'
---
## 新しいドラフトの{% data variables.product.prodname_marketplace %}リストの作成

パブリックなアプリケーションについては、ドラフトのリストだけが作成できます。 ドラフトのリストを作成する前に、{% data variables.product.prodname_marketplace %}リストの設定を書いて構成するための以下のガイドラインを読んでください。

* [{% data variables.product.prodname_marketplace %} リストの説明を書く](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [{% data variables.product.prodname_marketplace %} リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [{% data variables.product.prodname_marketplace %} Webhook の構成](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

{% data variables.product.prodname_marketplace %}のリストを作成するには、以下のようにします。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. 左側のサイドバーで、{% data variables.product.prodname_marketplace %}. に追加するアプリに応じて、 **[OAuth アプリ]** または **[GitHub App]** をクリックします。

  {% note %}

  **注**: https://github.com/marketplace/new に移動し、使用可能なアプリを表示し、 **[下書きリストの作成]** をクリックして、リストを追加することもできます。

  {% endnote %}

  ![アプリケーションの種類の選択](/assets/images/settings/apps_choose_app.png)

4. {% data variables.product.prodname_marketplace %}に追加するアプリケーションを選択します。
![{% data variables.product.prodname_marketplace %} リストのアプリの選択](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. 新しいドラフトのリストを作成すると、{% data variables.product.prodname_marketplace %}のリストの完成前にアクセスしておかなければならないセクションの概要が表示されます。
![GitHub Marketplace のリスト](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**注:** リストの [連絡先情報] セクションでは、support@domain.com のようなグループ メール アドレスよりも、個人のメール アドレスを使うことをお勧めします。 GitHubはこれらのメールアドレスを、リストに影響するかもしれない{% data variables.product.prodname_marketplace %}のアップデート、新機能、マーケティングの機会、支払い、カンファレンスやスポンサーシップに関する情報などに関する連絡に使用します。

{% endnote %}

## リストの編集

{% data variables.product.prodname_marketplace %}のドラフトリストを作成した後は、いつでもリスト内の情報を変更するために戻ってくることができます。 アプリケーションが検証済みで{% data variables.product.prodname_marketplace %}にあるなら、リスト中の情報や画像を編集することはできますが、公開された既存の価格プランを変更することはできません。 「[{% data variables.product.prodname_marketplace %} リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。

## アプリケーションのサブミット

{% data variables.product.prodname_marketplace %} のリストが完成したら、 **[概要]** ページからレビューのためにリストを送信できます。 「[{% data variables.product.prodname_marketplace %} 開発者契約](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/)」を読んで同意する必要があります。その後、レビューのために **[送信]** をクリックできます。 レビューのためにアプリケーションをサブミットした後、のオンボーディングの専門家から、オンボーディングのプロセスに関する追加情報と併せて連絡が来ます。

## {% data variables.product.prodname_marketplace %}リストの削除

アプリケーションを{% data variables.product.prodname_marketplace %}のリストに載せたくなくなったなら、リストを削除するために{% data variables.contact.contact_support %}に連絡してください。
