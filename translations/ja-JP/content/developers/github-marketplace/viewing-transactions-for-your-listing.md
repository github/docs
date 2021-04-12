---
title: リストの取引の表示
intro: '{% data variables.product.prodname_marketplace %}の取引ページでは、{% data variables.product.prodname_marketplace %}リストのすべての取引をダウンロードしたり表示したりできます。 You can view transactions for the past day (24 hours), week, month, or for the entire duration of time that your {% data variables.product.prodname_github_app %} has been listed.'
redirect_from:
  - /marketplace/github-marketplace-transactions
versions:
  free-pro-team: '*'
topics:
  - marketplace
---



{% note %}

**ノート:** データの集計には時間がかかるので、表示される日付には若干の遅れが生じます。 期間を選択すると、ページの上部にそのメトリクスの正確な日付が表示されます。

{% endnote %}


サブスクリプションのアクティビティを追跡するために、取引のデータを表示したりダウンロードしたりできます。 **Export CSV（CSVのエクスポート）**ボタンをクリックして、`.csv`ファイルをダウンロードしてください。 取引ページ内で表示したり検索したりする期間を選択することもできます。

### 取引のデータフィールド

* **date:** `yyyy-mm-dd`という形式の取引の日付。
* **app_name:** アプリケーションの名前。
* **user_login:** サブスクリプションを持つユーザのログイン。
* **user_id:** サブスクリプションを持つユーザのID。
* **user_type:** GitHubアカウントの種類。`User`もしくは`Organization`。
* **country:** 3文字の国コード。
* **amount_in_cents:** セント単位での取引の額。 値がプランの額を下回っている場合は、ユーザがアップグレードをして新しいプランが日割りになっています。 値がゼロになっている場合は、ユーザがプランをキャンセルしたことを示します。
* **renewal_frequency:** サブスクリプションの更新の頻度で、`Monthly`もしくは`Yearly`です。
* **marketplace_listing_plan_id:** サブスクリプションプランの`id`です。

![Marketplace insights](/assets/images/marketplace/marketplace_transactions.png)

### {% data variables.product.prodname_marketplace %}の取引へのアクセス

{% data variables.product.prodname_marketplace %}の取引にアクセスするには以下のようにしてください。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. 取引を表示させたい{% data variables.product.prodname_github_app %}を選択してください。
{% data reusables.user-settings.edit_marketplace_listing %}
6. **Transactions（取引）**タブをクリックしてください。
7. 取引ページの右上にあるPeriod（期間）ドロップダウンをクリックして、異なる期間を選択することもできます。 ![Marketplaceの期間](/assets/images/marketplace/marketplace_insights_time_period.png)
