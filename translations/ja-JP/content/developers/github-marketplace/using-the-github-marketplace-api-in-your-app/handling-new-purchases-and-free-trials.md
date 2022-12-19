---
title: 新しい購入や無料トライアルの処理
intro: 'お客様が有料プラン、無料試用版、または {% data variables.product.prodname_marketplace %} アプリの無料バージョンを購入すると、`purchased` アクションを含む [`marketplace_purchase` イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) Webhook を受け取り、購入フローが開始されます。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089624'
---
{% warning %}

{% data variables.product.prodname_marketplace %}で{% data variables.product.prodname_github_app %}を提供している場合、アプリケーションはOAuthの認可フローに従ってユーザを識別しなければなりません。 このフローをサポートするために、別の{% data variables.product.prodname_oauth_app %}を設定する必要はありません。 詳細については、「[{% data variables.product.prodname_github_apps %} のユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

{% endwarning %}

## 手順 1. 最初の購入とwebhookイベント

顧客は {% data variables.product.prodname_marketplace %} アプリを購入する前に、[登録情報プラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)を選択します。 顧客は、アプリケーションの購入を自分の個人アカウントから行うのか、あるいはOrganizationアカウントから行うのかも選択します。

**[注文を完了してインストール開始]** をクリックすることで、顧客は購入を完了します。

{% data variables.product.product_name %} は続いて、[`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) webhook を `purchased` アクションでアプリに送信します。

`marketplace_purchase` webhook からの `effective_date` および `marketplace_purchase` オブジェクトを読み取って、顧客が購入したプラン、請求サイクルの開始時期、および次の請求サイクルの開始時期を特定します。

アプリで無料試用版が提供されている場合は、webhook から `marketplace_purchase[on_free_trial]` 属性を読み取ってください。 値が `true` である場合、アプリは無料試用版の開始日 (`effective_date`) と無料試用版の終了日 (`free_trial_ends_on`) を追跡する必要があります。 アプリケーションの UI に無料トライアルの残日数を表示するのには、`free_trial_ends_on` の日付を使ってください。 これは、バナーか[支払い UI](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui) のどちらかで行うことができます。 無料試用版が終了する前にキャンセルを処理する方法については、「[プランのキャンセルの処理](/developers/github-marketplace/handling-plan-cancellations)」を参照してください。 無料試用版の有効期限が切れたときに無料試用版を有料プランに移行する方法については、「[プラン変更の処理](/developers/github-marketplace/handling-plan-changes)」を参照してください。

`marketplace_purchase` イベント ペイロードの例については、[{% data variables.product.prodname_marketplace %} Webhook イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)に関する記事を参照してください。

## 手順 2. インストール

アプリケーションが{% data variables.product.prodname_github_app %}なら、{% data variables.product.product_name %}は顧客に対してアプリケーションの購入時にそのアプリケーションがアクセスできるリポジトリの選択を求めます。 そして{% data variables.product.product_name %}は、顧客が選択したアカウントにそのアプリケーションをインストールし、選択されたリポジトリへのアクセスを許可します。

この時点で、{% data variables.product.prodname_github_app %}の設定で **Setup URL** を指定している場合、{% data variables.product.product_name %} は顧客をその URL へリダイレクトさせます。 Setup URLを指定していない場合、{% data variables.product.prodname_github_app %}の購入を処理することはできません

{% note %}

**注:** **Setup URL** は、{% data variables.product.prodname_github_app %} の設定中でオプションとされていますが、アプリケーションを {% data variables.product.prodname_marketplace %} で提供したい場合には必須のフィールドです。

{% endnote %}

アプリケーションが{% data variables.product.prodname_oauth_app %}である場合、 {% data variables.product.product_name %}はそれをどこにもインストールしません。 代わりに、{% data variables.product.product_name %} により、[{% data variables.product.prodname_marketplace %} の一覧](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls)で指定した **Installation URL** に顧客はリダイレクトされます。

顧客が {% data variables.product.prodname_oauth_app %} を購入すると、{% data variables.product.product_name %} によって顧客は選択された URL (Setup URL または Installation URL) にリダイレクトされ、その URL には顧客が選択した価格プランがクエリ パラメータの `marketplace_listing_plan_id` として含まれます。

## 手順 3. 承認

顧客がアプリケーションを購入したら、顧客をOAuthの認可フローに送らなければなりません。

* アプリケーションが {% data variables.product.prodname_github_app %} である場合、{% data variables.product.product_name %} が顧客を **Setup URL** にリダイレクトした後すぐに認可フローを始めます。 「[{% data variables.product.prodname_github_apps %} のユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」の手順に従います。

* アプリケーションが {% data variables.product.prodname_oauth_app %} である場合、{% data variables.product.product_name %} が顧客を **Installation URL** にリダイレクトした後すぐに認可フローを始めます。 [{% data variables.product.prodname_oauth_apps %} の認可](/apps/building-oauth-apps/authorizing-oauth-apps/)に関するページの手順に従います。

どちらの種類のアプリでも、最初の手順は顧客を [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize) にリダイレクトすることです。

顧客が認可を完了すると、アプリケーションは顧客のOAuthアクセストークンを受け取ります。 このトークンは、次のステップで必要になります。

{% note %}

**注:** 顧客を無料トライアルで認可する場合は、有料プランの場合と同じアクセス権を付与してください。  それらの顧客は、無料の期間が終了したら有料プランに移行させます。

{% endnote %}

## 手順 4. 顧客アカウントのプロビジョニング

アプリケーションは、すべての新規購入に対して顧客アカウントをプロビジョニングしなければなりません。 「[手順 3. 承認](#step-3-authorization)」で顧客に対して受け取ったアクセス トークンを使用して、"[認証されたユーザーのサブスクリプションの一覧表示](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)" エンドポイントを呼び出します。 応答には顧客の `account` 情報が含まれ、無料試用版 (`on_free_trial`) に含まれているかどうかが示されます。 この情報を使って、セットアップとプロビジョニングを完了させてください。

{% data reusables.marketplace.marketplace-double-purchases %}

購入がOrganizationのためのものであり、ユーザごとであるなら、顧客に対して購入されたアプリケーションにアクセスできるOrganizationのメンバーの選択を求めることができます。

Organizationのメンバーがアプリケーションへのアクセスを受け取る方法は、カスタマイズできます。 いくつかの推奨事項を次に示します。

**定額料金:** Organization に対して定額料金での購入が行われたなら、アプリケーションは API 経由で [Organization の全メンバーを取得](/rest/reference/orgs#list-organization-members)して、Organization の管理者に対してどのメンバーがインテグレーター側で有料ユーザとなるかの選択を求めることができます。

**ユニット単位の料金:** ユニット シートごとにプロビジョニングする方法の 1 つは、ユーザーがアプリケーションにログインしたときにシートを使用できるようにすることです。 顧客がシートカウントの閾値に達した場合、アプリケーションはユーザに対して{% data variables.product.prodname_marketplace %}を通じてアップグレードする必要があることを警告できます。
