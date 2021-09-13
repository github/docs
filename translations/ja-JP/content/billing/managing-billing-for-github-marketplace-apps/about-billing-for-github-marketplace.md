---
title: GitHub Marketplaceの支払いについて
intro: '{% data variables.product.prodname_marketplace %}に有料のアプリケーションをインストールした場合、アカウントの既存の支払日、支払い方法、領収書はプランと共有されます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-marketplace
  - /articles/about-billing-for-github-marketplace
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-marketplace
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
versions:
  free-pro-team: '*'
type: overview
topics:
  - Marketplace
---

{% data variables.product.prodname_marketplace %}には、無料及び有料の価格プランのアプリケーションが含まれます。 アプリケーションを購入してインストールした後、アップグレード、ダウングレード、キャンセルはいつでもできます。

{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

### {% data variables.product.prodname_marketplace %}での購入に関する支払い方法と支払いサイクル

{% data variables.product.prodname_dotcom %}に対してすべての有料プランは同じ支払い方法になります。

個人アカウントあるいは Organization で支払い方法が指定されていない場合、アプリケーションの有料プランを選択すると以下のようになります:
- その日が支払日になります。
- アプリケーションをインストールしたい個人アカウントあるいは Organization に、支払い方法を追加しなければなりません。
- 支払い方法に対して、プランの全額が課金されます。
- 領収書は、個人アカウントあるいは Organization のプライマリメールアドレスあるいは支払い請求先メールアドレスに送られます。

個人アカウントあるいは Organization で支払い方法が指定されている場合、アプリケーションの有料プランを選択すると以下のようになります:
- その支払い方法に対して、次の請求日までの残り時間に基づいて比例配分額がすぐに請求されます。
- アプリケーションに対する月次あるいは年間の支払日は、アカウントあるいは Organization の通常の支払日と同じになります。
- 次の支払日には、領収リストに有料の {% data variables.product.prodname_dotcom %} プランとアプリケーションのプランへの課金が記載されます。

無料のトライアルを持つ有料プランを選択した場合、以下のようになります:
- アプリケーションをインストールしたい個人アカウントあるいは Organization に、既存の支払い方法があるか、新たに支払い方法を追加しなければなりません。
- 他に有料プランを持っていないなら、14 日の無料トライアルの終わりにプランの全額が課金されます。
- 他の有料プランを持っているなら、14 日の無料トライアルが終了すると、ファイル上の支払い方法に対して次の支払日までの時間に応じて比例配分された額が即座に課金されます。
- 他の有料プランを持っているなら、次の支払日に有料の {% data variables.product.prodname_dotcom %} プランとアプリケーションのプランへの課金が領収リストに記載されます。

### 単位を入力する必要があるプランの制限

単位を入力する必要があるプラン (たとえばユーザごとに課金されるプラン) を選択しており、支払いをしている単位を超えた場合、インテグレーターはアプリケーションをアップグレードするまでアクセスを無効化することがあります。 詳しい情報については「<[{% data variables.product.prodname_marketplace %} アプリケーションの支払いプランをアップグレードする](/articles/upgrading-the-billing-plan-for-a-github-marketplace-app)」を参照してください。

### {% data variables.product.prodname_marketplace %} アプリケーションをダウングレードする

アプリケーションのプランを安価なプランへとダウングレードする場合、あるいはアプリケーションの有料プランをキャンセルする場合、課金は現在の支払いサイクルの終わりまで有効になります。 プランは次の支払日に新しいプランに移行されます。

Free プランのアプリケーションをキャンセルした場合、そのプランはすぐに終了し、アプリケーションにはアクセスできなくなります。

{% data reusables.marketplace.downgrade-marketplace-only %}

有料プランの無料トライアルをキャンセルした場合、プランは即座にキャンセルされ、アプリケーションにはアクセスできなくなります。 詳細は「[{% data variables.product.prodname_marketplace %} アプリケーションをキャンセルする](/articles/canceling-a-github-marketplace-app)」を参照してください。

### 参考リンク

- [{% data variables.product.prodname_marketplace %}について](/articles/about-github-marketplace)
- [{% data variables.product.prodname_marketplace %}でのアプリケーションの購入とインストール](/articles/purchasing-and-installing-apps-in-github-marketplace)
- [{% data variables.product.prodname_marketplace %}のサポート](/articles/github-marketplace-support)
