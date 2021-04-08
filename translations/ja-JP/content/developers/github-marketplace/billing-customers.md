---
title: 顧客への課金
intro: '{% data variables.product.prodname_marketplace %}上のアプリケーションは、GitHubの課金ガイドラインと、推奨サービスのサポートを遵守しなければなりません。 弊社のガイドラインに従うことで、顧客は予想外のことなく支払いプロセスを進んで行きやすくなります。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace/
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace/
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
versions:
  free-pro-team: '*'
topics:
  - marketplace
---



### 支払いを理解する

顧客は、アプリケーションの購入時に月次あるいは年次の支払いサイクルを選択できます。 顧客が行う支払いサイクルとプランの選択に対するすべての変更は、`marketplace_purchase`イベントを発生させます。 `marketplace_purchase` webhookのペイロードを参照すれば、顧客がどの支払いサイクルを選択したのか、そして次の支払日がいつ始まるのか（`effective_date`）を知ることができます。 webhookのペイロードに関する情報については、「[{% data variables.product.prodname_marketplace %} APIのwebhookイベント](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)」を参照してください。

### アプリケーションのUIにおける支払いサービスの提供

アプリケーションのWebサイトからは、顧客が以下のアクションを行えなければなりません。
- 顧客は、個人とOrganizationのアカウントで別々に{% data variables.product.prodname_marketplace %}のプランを変更したり、キャンセルしたりできなければなりません。
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

### アップグレード、ダウングレード、キャンセルのための支払いサービス

明確で一貫性のある支払いプロセスを保つために、アップグレード、ダウングレード、キャンセルについて以下のガイドラインに従ってください。 {% data variables.product.prodname_marketplace %}の購入イベントに関する詳細な指示については、「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

`marketplace_purchase` webhookの`effective_date`キーを使えば、プランの変更がいつ生じるのかを確認し、定期的に[プランのアカウントのリスト](/rest/reference/apps#list-accounts-for-a-plan)を同期できます。

#### アップグレード

顧客が価格プランをアップグレードしたり、月次から年次へ支払いサイクルを変更したりした場合、その変更をすぐに有効にしなければなりません。 新しいプランに対して日割引を適用し、支払いサイクルを変更しなければなりません。

{% data reusables.marketplace.marketplace-failed-purchase-event %}

アプリケーションでのアップグレード及びダウングレードワークフローの構築に関する情報については、「[プラン変更の処理](/developers/github-marketplace/handling-plan-changes)」を参照してください。

#### ダウングレードとキャンセル

ダウングレードは、顧客がFreeプランから有料プランに移行し、現在のプランよりも低コストなプランを選択するか、支払いサイクルを年次から月次に変更した場合に生じます。 ダウングレードもしくはキャンセルが生じた場合、返金は必要ありません。 その代わりに、現在のプランは現在の支払いサイクルの最終日まで有効です。 顧客の次の支払いサイクルの開始時点で、新しいプランが有効になると、`marketplace_purchase`イベントが送信されます。

顧客がプランをキャンセルした場合、以下を行わなければなりません。
- Freeプランがある場合には、自動的にFreeプランにダウングレードします。

  {% data reusables.marketplace.cancellation-clarification %}
- 顧客が後でプランを継続したくなった場合には、GitHubを通じてプランをアップグレードできるようにします。

アプリケーションでのキャンセルのワークフローの構築に関する情報については、「[プランのキャンセルの処理](/developers/github-marketplace/handling-plan-cancellations)」を参照してください。
