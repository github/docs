---
title: リストに対する価格プランの設定
intro: 'When you list your app on {% data variables.product.prodname_marketplace %}, you can choose to provide your app as a free service or sell your app. アプリケーションを販売することを計画するなら、様々な機能レベルに対して異なる価格プランを作成できます。'
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

### About setting pricing plans

If you want to sell an app on {% data variables.product.prodname_marketplace %}, you need to request verification when you publish the listing for your app. During the verification process, an onboarding expert checks the organization's identity and security settings. The onboarding expert will also take the organization through financial onboarding. For more information, see: "[Requirements for listing an app on {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)."

{% data reusables.marketplace.app-transfer-to-org-for-verification %} For information on how to do this, see: "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)."

{% data variables.product.prodname_marketplace %} offers several different types of pricing plan. For detailed information, see "[Pricing plans for {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)."

### About saving pricing plans

You can save pricing plans in a draft or published state. If you haven't submitted your {% data variables.product.prodname_marketplace %} listing for approval, a published plan will function in the same way as a draft plan until your listing is approved and shown on {% data variables.product.prodname_marketplace %}. Draft plans allow you to create and save new pricing plans without making them available on your {% data variables.product.prodname_marketplace %} listing page. Once you publish a pricing plan on a published listing, it's available for customers to purchase immediately. 最大で10の価格プランを公開できます。

For guidelines on billing customers, see "[Billing customers](/developers/github-marketplace/billing-customers)."

### 価格プランの作成

{% data variables.product.prodname_marketplace %}リストの価格プランを作成するには、[{% data variables.product.prodname_marketplace %}リストページ](https://github.com/marketplace/manage)の左のサイドバーで**Plans and pricing（プラント価格）**をクリックしてください。 For more information, see "[Creating a draft {% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)."

**New draft plan（新規ドラフトプラン）**をクリックすると、価格プランをカスタマイズできるフォームが表示されます。 価格プランを作成するには、以下のフィールドを設定しなければなりません。

- **Plan name** - Your pricing plan's name will appear on your {% data variables.product.prodname_marketplace %} app's landing page. You can customize the name of your pricing plan to align with the plan's resources, the size of the company that will use the plan, or anything you'd like.

- **Pricing models** - There are three types of pricing plan: free, flat-rate, and per-unit. All plans require you to process new purchase and cancellation events from the marketplace API. In addition, for paid plans:

  - You must set a price for both monthly and yearly subscriptions in US dollars.
  - Your app must process plan change events.
  - You must request verification to publish a listing with a paid plan.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  For detailed information, see "[Pricing plans for {% data variables.product.prodname_marketplace %} apps](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)" and "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

- **Available for** - {% data variables.product.prodname_marketplace %} pricing plans can apply to **Personal and organization accounts**, **Personal accounts only**, or **Organization accounts only**. たとえば、価格プランがユニット単位であり、複数のシートを提供するなら、個人アカウントからOrganization内の人にシートを割り当てる方法はないので、**Organization accounts only（Organizationアカウントのみ）**が選択できるでしょう。

- **Short description** - Write a brief summary of the details of the pricing plan. この説明には、そのプランが意図している顧客の種類や、プランに含まれるリソースなどが含まれることがあります。

- **Bullets** - You can write up to four bullets that include more details about your pricing plan. この箇条書きでは、アプリケーションのユースケースを含めたり、プランに含まれるリソースや機能に関するさらなる詳細をリストしたりすることができます。

{% data reusables.marketplace.free-plan-note %}

### {% data variables.product.prodname_marketplace %}リストの価格プランの変更

If a pricing plan for your {% data variables.product.prodname_marketplace %} listing is no longer needed, or if you need to adjust pricing details, you can remove it.

![価格プランを削除するボタン](/assets/images/marketplace/marketplace_remove_this_plan.png)

Once you publish a pricing plan for an app that is already listed in {% data variables.product.prodname_marketplace %}, you can't make changes to the plan. Instead, you'll need to remove the pricing plan and create a new plan. 削除された価格プランを購入済みの顧客は、オプトアウトして新しい価格プランに移行するまでは、そのプランを使い続けます。 価格プランの詳細については、「[{% data variables.product.prodname_marketplace %}の価格プラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)」を参照してください。

価格プランを削除すると、ユーザはそのプランを使ってアプリケーションを購入することはできなくなります。 削除されたプランの既存ユーザは、プランのサブスクリプションをキャンセルするまではそのプランに留まり続けます。

{% note %}

**ノート:** {% data variables.product.product_name %}は、削除された価格プランからユーザを削除することはできません。 削除された価格プランから新しい価格プランへ、アップグレードもしくはダウングレードするようユーザに促すキャンペーンを実行できます。

{% endnote %}

価格プランを取り下げることなくGitHub Marketplaceの無料トライアルを無効化することはできますが、そうすると将来的にそのプランの無料トライアルを開始できなくなります。 価格プランに対する無料トライアルを無効にすることにした場合、サインアップ済みのユーザは無料トライアルを最後まで利用できます。

価格プランを終了した後には、削除した価格プランと同じ名前で新しい価格プランを作成できます。 たとえば、「Pro」価格プランがあるものの、定額料金を変更する必要がある場合、その「Pro」価格プランを削除し、更新された価格で新しい「Pro」価格プランを作成できます。 ユーザは、すぐに新しい価格プランで購入できるようになります。
