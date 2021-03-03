---
title: 新しい購入や無料トライアルの処理
intro: '顧客が有料プラン、無料のトライアル、あるいは{% data variables.product.prodname_marketplace %}アプリケーションの無料バージョンを購入した場合、`purchased`アクションが付いた[`marketplace_purchase`イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) webhookを受信することになり、それによって購入フローが開始されます。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
versions:
  free-pro-team: '*'
---



{% warning %}

If you offer a {% data variables.product.prodname_github_app %} in {% data variables.product.prodname_marketplace %}, your app must identify users following the OAuth authorization flow. You don't need to set up a separate {% data variables.product.prodname_oauth_app %} to support this flow. See "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for more information.

{% endwarning %}

### ステップ 1. 最初の購入とwebhookイベント

{% data variables.product.prodname_marketplace %}アプリケーションを購入する前に、顧客は[リストプラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)を選択します。 顧客は、アプリケーションの購入を自分の個人アカウントから行うのか、あるいはOrganizationアカウントから行うのかも選択します。

**Complete order and begin installation（注文を完了してインストールを開始）**をクリックすることで、顧客は購入を完了します。

{% data variables.product.product_name %} then sends the [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) webhook with the `purchased` action to your app.

`marketplace_purchase` webhookから`effective_date`と`marketplace_purchase`を読み取り、顧客が購入したプラン、支払いサイクルの開始時点、次の支払いサイクルの開始時点を判断してください。

アプリケーションが無料トライアルを提供しているなら、webhookから`marketplace_purchase[on_free_trial]`属性を読んでください。 この値が`true`なら、アプリケーションは無料トライアルの開始日(`effective_date`)と、無料トライアルの終了日(`free_trial_ends_on`)を追跡しなければなりません。 アプリケーションのUIに無料トライアルの残日数を表示するのには、`free_trial_ends_on`の日付を使ってください。 これはバナーか、[支払いUI](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui)のいずれでも行えます。 無料トライアルの終了前のキャンセルの処理方法を学ぶには、「[プランのキャンセルの処理](/developers/github-marketplace/handling-plan-cancellations)」を参照してください。 無料トライアルの終了時点での無料トライアルから有料プランへの移行方法を知るには、「[プランの変更の処理](/developers/github-marketplace/handling-plan-changes)」を参照してください。

`marketplace_purchase`イベントペイロードの例については「[{% data variables.product.prodname_marketplace %} webhookイベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を参照してください。

### ステップ 2. インストール

If your app is a {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} prompts the customer to select which repositories the app can access when they purchase it. {% data variables.product.product_name %} then installs the app on the account the customer selected  and grants access to the selected repositories.

At this point, if you specified a **Setup URL** in your {% data variables.product.prodname_github_app %} settings, {% data variables.product.product_name %} will redirect the customer to that URL. If you do not specify a setup URL, you will not be able to handle purchases of your {% data variables.product.prodname_github_app %}.

{% note %}

**Note:** The **Setup URL** is described as optional in {% data variables.product.prodname_github_app %} settings, but it is a required field if you want to offer your app in {% data variables.product.prodname_marketplace %}.

{% endnote %}

If your app is an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} does not install it anywhere. Instead, {% data variables.product.product_name %} redirects the customer to the **Installation URL** you specified in your [{% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

When a customer purchases an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} redirects the customer to the URL you choose (either Setup URL or Installation URL) and the URL includes the customer's selected pricing plan as a query parameter: `marketplace_listing_plan_id`.

### ステップ 3. 認可

顧客がアプリケーションを購入したら、顧客をOAuthの認可フローに送らなければなりません。

* If your app is a {% data variables.product.prodname_github_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Setup URL**. Follow the steps in "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

* If your app is an {% data variables.product.prodname_oauth_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Installation URL**. Follow the steps in "[Authorizing {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)."

どちらの種類のアプリケーションでも、最初のステップは顧客をhttps://github.com/login/oauth/authorizeにリダイレクトさせることです。

顧客が認可を完了すると、アプリケーションは顧客のOAuthアクセストークンを受け取ります。 このトークンは、次のステップで必要になります。

{% note %}

**ノート:** 顧客を無料トライアルで認可する場合は、有料プランの場合と同じアクセス権を付与してください。  それらの顧客は、無料の期間が終了したら有料プランに移行させます。

{% endnote %}

### ステップ 4. 顧客アカウントのプロビジョニング

アプリケーションは、すべての新規購入に対して顧客アカウントをプロビジョニングしなければなりません。 [ステップ3 認可](#step-3-authorization)で受け取った顧客のアクセストークンを使い、 「[認証されたユーザのサブスクリプションのリスト](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)」エンドポイントを呼び出してください。 レスポンスには顧客の`account`情報が含まれ、その顧客が無料トライアルを利用しているかが示されます（`on_free_trial`）。 この情報を使って、セットアップとプロビジョニングを完了させてください。

{% data reusables.marketplace.marketplace-double-purchases %}

購入がOrganizationのためのものであり、ユーザごとであるなら、顧客に対して購入されたアプリケーションにアクセスできるOrganizationのメンバーの選択を求めることができます。

Organizationのメンバーがアプリケーションへのアクセスを受け取る方法は、カスタマイズできます。 いくつかの例を挙げましょう。

**定額料金:** Organizationに対して定額料金での購入が行われたなら、アプリケーションはAPI経由で[Organizationの全メンバーを取得](/rest/reference/orgs#list-organization-members)して、Organizationの管理者に対してどのメンバーがインテグレーター側で有料ユーザとなるかの選択を求めることができます。

**ユニット単位の料金:** ユニットシートごとにプロビジョニングする方法の1つは、ユーザがアプリケーションにログインしたときにシートを使用できるようにすることです。 顧客がシートカウントの閾値に達した場合、アプリケーションはユーザに対して{% data variables.product.prodname_marketplace %}を通じてアップグレードする必要があることを警告できます。
