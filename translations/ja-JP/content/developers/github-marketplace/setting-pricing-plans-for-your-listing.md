---
title: リストに対する価格プランの設定
intro: '[アプリケーションを{% data variables.product.prodname_marketplace %}上でリストする](/marketplace/listing-on-github-marketplace/)際に、アプリケーションを無料のサービスとして提供するか、アプリケーションを販売するかを選択できます。 アプリケーションを販売することを計画するなら、様々な機能レベルに対して異なる価格プランを作成できます。'
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



### 価格プランの作成

{% data variables.product.prodname_marketplace %}が提供する価格プランの種類について学ぶには、「[{% data variables.product.prodname_marketplace %}の価格プラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)」を参照してください。 有益な支払いのガイドラインが「[アプリケーションの販売](/marketplace/selling-your-app/)」にもあります。

価格プランは、ドラフトまたは公開状態にできます。 {% data variables.product.prodname_marketplace %}のリストを承認のためにサブミットしていない場合、公開されたリストはアプリケーションが承認され、{% data variables.product.prodname_marketplace %}上でリストされるまではドラフトのリストと同様に機能します。 ドラフトのリストを利用すると、{% data variables.product.prodname_marketplace %}リストページで利用できるようにすることなく、新しい価格プランを作成して保存できます。 価格プランを公開すると、すぐに顧客が購入できるようになります。 最大で10の価格プランを公開できます。

{% data variables.product.prodname_marketplace %}リストの価格プランを作成するには、[{% data variables.product.prodname_marketplace %}リストページ](https://github.com/marketplace/manage)の左のサイドバーで**Plans and pricing（プラント価格）**をクリックしてください。 まだ{% data variables.product.prodname_marketplace %}リストを作成していないなら、「[ドラフトの{% data variables.product.prodname_marketplace %}リストの作成](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)」を読んで、作成方法を学んでください。

**New draft plan（新規ドラフトプラン）**をクリックすると、価格プランをカスタマイズできるフォームが表示されます。 価格プランを作成するには、以下のフィールドを設定しなければなりません。

#### Plan name（プラン名）

価格プランの名前は{% data variables.product.prodname_marketplace %}アプリケーションのランディングページに表示されます。 プランのリソース、プランを利用する企業の規模、あるいは好きなもの何にでもあわせて価格プランの名前をカスタマイズできます。

#### Pricing models（価格モデル）

##### Free plans（無料プラン）

{% data reusables.marketplace.free-apps-encouraged %} 無料プランでも、[新規購入](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)や[キャンセル](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/)の支払いフローを処理する必要があります。 詳細については「[支払いフロー](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)」を参照してください。

##### Flat-rate plans（定額プラン）

定額プランを使うと、顧客に対して定額でサービスを提供できます。 {% data reusables.marketplace.marketplace-pricing-free-trials %}

定額料金では、米ドルで月額及び年額のサブスクリプションに対して 価格を設定しなければなりません。

##### Per-unit plans（ユニット単位プラン）

ユニット単位での価格を利用すると、ユニットごとにアプリケーションを提供できます。 たとえば、ユニットには人、シート、ユーザが使えます。 ユニットの名前を提供し、月額及び年額のサブスクリプションを米ドルで 設定しなければなりません。

#### Available for（利用の対象）

{% data variables.product.prodname_marketplace %}の価格プランは、**Personal and organization accounts（個人及びOrganizationのアカウント）**、**Personal accounts only（個人アカウントのみ）**、**Organization accounts only（Organizationアカウントのみ）**のいずれかに適用できます。 たとえば、価格プランがユニット単位であり、複数のシートを提供するなら、個人アカウントからOrganization内の人にシートを割り当てる方法はないので、**Organization accounts only（Organizationアカウントのみ）**が選択できるでしょう。

#### Short description（短い説明）

価格プランの詳細に関する簡単な概要を書いてください。 この説明には、そのプランが意図している顧客の種類や、プランに含まれるリソースなどが含まれることがあります。

#### Bullets（箇条書き）

最大で4項目の箇条書きをして、価格プランに関する詳細を含めることができます。 この箇条書きでは、アプリケーションのユースケースを含めたり、プランに含まれるリソースや機能に関するさらなる詳細をリストしたりすることができます。

### {% data variables.product.prodname_marketplace %}リストの価格プランの変更

{% data variables.product.prodname_marketplace %}プランの価格プランが不要になった場合、あるいは価格の細部を調整する必要が生じた場合、その価格プランを削除できます。

![Button to remove your pricing plan](/assets/images/marketplace/marketplace_remove_this_plan.png)

{% data variables.product.prodname_marketplace %}にリスト済みのアプリケーションの価格プランを公開すると、そのプランは変更できなくなります。 その代わりに、その価格プランを削除しなければなりません。 削除された価格プランを購入済みの顧客は、オプトアウトして新しい価格プランに移行するまでは、そのプランを使い続けます。 価格プランの詳細については、「[{% data variables.product.prodname_marketplace %}の価格プラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)」を参照してください。

価格プランを削除すると、ユーザはそのプランを使ってアプリケーションを購入することはできなくなります。 削除されたプランの既存ユーザは、プランのサブスクリプションをキャンセルするまではそのプランに留まり続けます。

{% note %}

**ノート:** {% data variables.product.product_name %}は、削除された価格プランからユーザを削除することはできません。 削除された価格プランから新しい価格プランへ、アップグレードもしくはダウングレードするようユーザに促すキャンペーンを実行できます。

{% endnote %}

価格プランを取り下げることなくGitHub Marketplaceの無料トライアルを無効化することはできますが、そうすると将来的にそのプランの無料トライアルを開始できなくなります。 価格プランに対する無料トライアルを無効にすることにした場合、サインアップ済みのユーザは無料トライアルを最後まで利用できます。

価格プランを終了した後には、削除した価格プランと同じ名前で新しい価格プランを作成できます。 たとえば、「Pro」価格プランがあるものの、定額料金を変更する必要がある場合、その「Pro」価格プランを削除し、更新された価格で新しい「Pro」価格プランを作成できます。 ユーザは、すぐに新しい価格プランで購入できるようになります。
