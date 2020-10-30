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

{% data variables.product.prodname_marketplace %}でGitHub Appを提供している場合、アプリケーションはOAuthの認可フローに従ってユーザを識別しなければなりません。 このフローをサポートするために、個別のOAuth Appをセットアップする必要はありません。 詳しい情報については「[GitHub Appのユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

{% endwarning %}

### ステップ 1. 最初の購入とwebhookイベント

{% data variables.product.prodname_marketplace %}アプリケーションを購入する前に、顧客は[リストプラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)を選択します。 顧客は、アプリケーションの購入を自分の個人アカウントから行うのか、あるいはOrganizationアカウントから行うのかも選択します。

**Complete order and begin installation（注文を完了してインストールを開始）**をクリックすることで、顧客は購入を完了します。

そうすると、GitHubは[`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) webhookに`purchased`アクションを付けてアプリケーションに送信します。

Read the `effective_date` and `marketplace_purchase` object from the `marketplace_purchase` webhook to determine which plan the customer purchased, when the billing cycle starts, and when the next billing cycle begins.

If your app offers a free trial, read the `marketplace_purchase[on_free_trial]` attribute from the webhook. If the value is `true`, your app will need to track the free trial start date (`effective_date`) and the date the free trial ends (`free_trial_ends_on`). Use the `free_trial_ends_on` date to display the remaining days left in a free trial in your app's UI. You can do this in either a banner or in your [billing UI](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). To learn how to handle cancellations before a free trial ends, see "[Cancelling plans](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/)." See "[Upgrading and downgrading plans](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/)" to find out how to transition a free trial to a paid plan when a free trial expires.

See "[{% data variables.product.prodname_marketplace %} webhook events](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" for an example of the `marketplace_purchase` event payload.

### ステップ 2. インストール

If your app is a GitHub App, GitHub prompts the customer to select which repositories the app can access when they purchase it. GitHub then installs the app on the account the customer selected  and grants access to the selected repositories.

At this point, if you specified a **Setup URL** in your GitHub App settings, Github will redirect the customer to that URL. If you do not specify a setup URL, you will not be able to handle purchases of your GitHub App.

{% note %}

**Note:** The **Setup URL** is described as optional in GitHub App settings, but it is a required field if you want to offer your app in {% data variables.product.prodname_marketplace %}.

{% endnote %}

If your app is an OAuth App, GitHub does not install it anywhere. Instead, GitHub redirects the customer to the **Installation URL** you specified in your [{% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

When a customer purchases an OAuth App, GitHub redirects the customer to the URL you choose (either Setup URL or Installation URL) and the URL includes the customer's selected pricing plan as a query parameter: `marketplace_listing_plan_id`.

### ステップ 3. 承認

When a customer purchases your app, you must send the customer through the OAuth authorization flow:

* If your app is a GitHub App, begin the authorization flow as soon as GitHub redirects the customer to the **Setup URL**. Follow the steps in "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

* If your app is an OAuth App, begin the authorization flow as soon as GitHub redirects the customer to the **Installation URL**. Follow the steps in "[Authorizing OAuth Apps](/apps/building-oauth-apps/authorizing-oauth-apps/)."

For either type of app, the first step is to redirect the customer to https://github.com/login/oauth/authorize.

After the customer completes the authorization, your app receives an OAuth access token for the customer. You'll need this token for the next step.

{% note %}

**Note:** When authorizing a customer on a free trial, grant them the same access they would have on the paid plan.  You'll move them to the paid plan after the trial period ends.

{% endnote %}

### ステップ 4. Provisioning customer accounts

Your app must provision a customer account for all new purchases. Using the access token you received for the customer in [Step 3. Authorization](#step-3-authorization), call the "[List subscriptions for the authenticated user](/v3/apps/marketplace/#list-subscriptions-for-the-authenticated-user)" endpoint. The response will include the customer's `account` information and show whether they are on a free trial (`on_free_trial`). Use this information to complete setup and provisioning.

{% data reusables.marketplace.marketplace-double-purchases %}

If the purchase is for an organization and per-user, you can prompt the customer to choose which organization members will have access to the purchased app.

You can customize the way that organization members receive access to your app. Here are a few suggestions:

**Flat-rate pricing:** If the purchase is made for an organization using flat-rate pricing, your app can [get all the organization’s members](/v3/orgs/members/#list-organization-members) via the API and prompt the organization admin to choose which members will have paid users on the integrator side.

**Per-unit pricing:** One method of provisioning per-unit seats is to allow users to occupy a seat as they log in to the app. Once the customer hits the seat count threshold, your app can alert the user that they need to upgrade through {% data variables.product.prodname_marketplace %}.
