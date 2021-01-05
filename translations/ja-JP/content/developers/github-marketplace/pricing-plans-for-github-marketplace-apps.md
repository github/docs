---
title: GitHub Marketplaceアプリケーションの価格プラン
intro: '価格プランを利用して、様々なレベルのサービスやリソースと共にアプリケーションを提供できます。 {% data variables.product.prodname_marketplace %}のリストでは、最大で10個の価格プランを提供できます。'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
versions:
  free-pro-team: '*'
---



{% data variables.product.prodname_marketplace %} pricing plans can be free, flat rate, or per-unit. Prices are set, displayed, and processed in US dollars. Paid plans are restricted to verified listings.

Customers purchase your app using a payment method attached to their {% data variables.product.product_name %} account, without having to leave {% data variables.product.prodname_dotcom_the_website %}. You don't have to write code to perform billing transactions, but you will have to handle events from the {% data variables.product.prodname_marketplace %} API. For more information, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

{% data variables.product.prodname_marketplace %}上でリストしているアプリケーションが複数のプランのオプションを持っているなら、対応する価格プランをセットアップできます。 たとえばアプリケーションが2つのプランの選択肢としてオープンソースプランとプロプランを持っているなら、オープンソースプランに対して無料価格プランを、そしてプロプランに対して定額料金プランをセットアップできます。 それぞれの{% data variables.product.prodname_marketplace %}リストには、リストされたすべてのプランに対して年間及び月間の価格がなければなりません。

価格プランの作成方法に関する詳しい情報については「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。

{% data reusables.marketplace.free-plan-note %}

### 価格プランの種類

#### Free pricing plans

{% data reusables.marketplace.free-apps-encouraged %}

Free plans are completely free for users. 無料プランをセットアップした場合、アプリケーションを利用するために無料プランを選択したユーザに課金することはできません。 リストでは無料と有料のプランをどちらも作成できます。

All apps need to handle events for new purchases and cancellations. Apps that only have free plans do not need to handle events for free trials, upgrades, and downgrades. For more information, see: "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

If you add a paid plan to an app that you've already listed in {% data variables.product.prodname_marketplace %} as a free service, you'll need to request verification for the app and go through financial onboarding.

#### Paid pricing plans

There are two types of paid pricing plan:

- Flat rate pricing plans charge a set fee on a monthly and yearly basis.

- Per-unit pricing plans charge a set fee on either a monthly or yearly basis for a unit that you specify. 「ユニット」には好きなもの（たとえばユーザ、シート、あるいは人）を指定できます。

You may also want to offer free trials. These provide free, 14-day trials of OAuth or GitHub Apps to customers. When you set up a Marketplace pricing plan, you can select the option to provide a free trial for flat-rate or per-unit pricing plans.

### 無料トライアル

Customers can start a free trial for any paid plan on a Marketplace listing that includes free trials. However, customers cannot create more than one free trial per marketplace product.

無料トライアルの期間は固定の14日間です。 顧客はトライアル期間の終了の4日前（無料トライアルの11日目）に、プランがアップグレードされるという通知を受け取ります。 顧客は、キャンセルしないかぎり、無料トライアルの終わりにトライアルを行っていたプランに自動的に登録されます。

For more information, see: "[Handling new purchases and free trials](/developers/github-marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)."

{% note %}

**ノート:** GitHubは、キャンセルされたトライアルのすべてのプライベートな顧客データが、キャンセルイベントの受け付け開始から30日以内に削除されるものと期待します。

{% endnote %}
