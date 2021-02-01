---
title: リストに対する価格プランの設定
intro: 'アプリケーションを{% data variables.product.prodname_marketplace %}上でリストする際に、アプリケーションを無料のサービスとして提供するか、アプリケーションを販売するかを選択できます。 アプリケーションを販売することを計画するなら、様々な機能レベルに対して異なる価格プランを作成できます。'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
versions:
  free-pro-team: '*'
---

### 価格プランの設定について

アプリケーションを{% data variables.product.prodname_marketplace %}で販売したい場合は、アプリケーションのリストを公開する際に検証をリクエストしなければなりません。 検証プロセスの過程で、オンボーディングの専門家がOrganizationのアイデンティティとセキュリティの設定をチェックします。 オンボーディングの専門家は、Organizationに財務的なオンボーディングも受けさせます。 詳しい情報については、「[{% data variables.product.prodname_marketplace %}にアプリケーションをリストするための要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)」を参照してください。

{% data reusables.marketplace.app-transfer-to-org-for-verification %} これを行う方法については「[公開のためのリストのサブミット](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)」を参照してください。

{% data variables.product.prodname_marketplace %}は、いくつかの種類の価格プランを提供します。 詳細にな情報については「[{% data variables.product.prodname_marketplace %}の価格プラン](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)」を参照してください。

### 価格プランの保存について

価格プランは、ドラフトもしくは公開状態で保存できます。 {% data variables.product.prodname_marketplace %}リストを承認のためにサブミットしていないなら、リストが承認されるまでは公開されたプランはドラフトのプランと同じように機能し、{% data variables.product.prodname_marketplace %}上に表示されます。 ドラフトプランを利用すると、新しい価格プランを{% data variables.product.prodname_marketplace %}リストページ上で利用できるようにすることなく作成し、保存できます。 公開リスト上で価格プランを公開すると、顧客はすぐにそれを利用して購入できるようになります。 最大で10の価格プランを公開できます。

顧客への課金のガイドラインについては、「[顧客への課金](/developers/github-marketplace/billing-customers)」を参照してください。

### 価格プランの作成

{% data variables.product.prodname_marketplace %}リストの価格プランを作成するには、[{% data variables.product.prodname_marketplace %}リストページ](https://github.com/marketplace/manage)の左のサイドバーで**Plans and pricing（プランと価格）**をクリックしてください。 詳しい情報については「[ドラフトの{% data variables.product.prodname_marketplace %}リストの作成](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)」を参照してください。

**New draft plan（新規ドラフトプラン）**をクリックすると、価格プランをカスタマイズできるフォームが表示されます。 価格プランを作成するには、以下のフィールドを設定しなければなりません。

- **Plan name（プラン名）** - プラン名は、{% data variables.product.prodname_marketplace %}アプリケーションのランディングページに表示されます。 価格名はカスタマイズして、プランのリソース、そのプランを利用する企業の規模、あるいはその他好きなことにあわせることができます。

- **Pricing models（価格モデル）** - 価格モデルには、無料、定額、ユニット単位の3種類があります。 すべてのプランで、Marketplace APIからの新規の購入とキャンセルの処理が必要になります。 加えて、有料プランでは以下が必要です。

  - 月単位及び年単位でのサブスクリプションの価格を米ドルで設定しなければなりません。
  - アプリケーションはプランの変更イベントを処理しなければなりません。
  - 有料プランを持つリストを公開するには、検証をリクエストしなければなりません。
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  詳細な情報については、「[{% data variables.product.prodname_marketplace %}アプリケーションの価格プラン](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)」及び「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

- **Available for（利用対象）** - {% data variables.product.prodname_marketplace %}の価格プランは、**個人及びOrganizationアカウント**、**個人アカウントのみ**、**Organizationアカウントのみ**のいずれかにできます。 たとえば、価格プランがユニット単位であり、複数のシートを提供するなら、個人アカウントからOrganization内の人にシートを割り当てる方法はないので、**Organization accounts only（Organizationアカウントのみ）**が選択できるでしょう。

- **Short description（簡単な説明）** - 価格プランの詳細の簡単な要約を書いてください。 この説明には、そのプランが意図している顧客の種類や、プランに含まれるリソースなどが含まれることがあります。

- **Bullets（箇条書き）** - 価格プランに関する詳細を含む箇条書きを、最大で4項目書くことができます。 この箇条書きでは、アプリケーションのユースケースを含めたり、プランに含まれるリソースや機能に関するさらなる詳細をリストしたりすることができます。

{% data reusables.marketplace.free-plan-note %}

### {% data variables.product.prodname_marketplace %}リストの価格プランの変更

{% data variables.product.prodname_marketplace %}のリストのための価格プランが必要なくなったり、プランの詳細を調整する必要が生じた場合、そのプランを削除できます。

![価格プランを削除するボタン](/assets/images/marketplace/marketplace_remove_this_plan.png)

{% data variables.product.prodname_marketplace %}にリスト済みのアプリケーションの価格プランを公開すると、そのプランは変更できなくなります。 その代わりに、その価格プランを削除して、新しいプランを作成しなければなりません。 削除された価格プランを購入済みの顧客は、オプトアウトして新しい価格プランに移行するまでは、そのプランを使い続けます。 価格プランの詳細については、「[{% data variables.product.prodname_marketplace %}の価格プラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)」を参照してください。

価格プランを削除すると、ユーザはそのプランを使ってアプリケーションを購入することはできなくなります。 削除されたプランの既存ユーザは、プランのサブスクリプションをキャンセルするまではそのプランに留まり続けます。

{% note %}

**ノート:** {% data variables.product.product_name %}は、削除された価格プランからユーザを削除することはできません。 削除された価格プランから新しい価格プランへ、アップグレードもしくはダウングレードするようユーザに促すキャンペーンを実行できます。

{% endnote %}

価格プランを取り下げることなくGitHub Marketplaceの無料トライアルを無効化することはできますが、そうすると将来的にそのプランの無料トライアルを開始できなくなります。 価格プランに対する無料トライアルを無効にすることにした場合、サインアップ済みのユーザは無料トライアルを最後まで利用できます。

価格プランを終了した後には、削除した価格プランと同じ名前で新しい価格プランを作成できます。 たとえば、「Pro」価格プランがあるものの、定額料金を変更する必要がある場合、その「Pro」価格プランを削除し、更新された価格で新しい「Pro」価格プランを作成できます。 ユーザは、すぐに新しい価格プランで購入できるようになります。
