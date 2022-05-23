---
title: スポンサーとスポンサーシップを表示する
intro: スポンサーとスポンサーシップについて、詳細情報と分析を表示し、エクスポートすることができます。
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
---

## スポンサーとスポンサーシップについて

現在と過去のスポンサーシップについての分析、スポンサーから受領した支払い、キャンセルなどのイベント、スポンサーシップのスポンサー層の変更を表示できます。 新しいスポンサーシップ、スポンサーシップの変更、スポンサーシップのキャンセルといったアクティビティも確認できます。 アクティビティのリストは、日付でフィルタリングできます。 表示しているアカウントのスポンサーシップデータを CSV または JSON 形式でエクスポートすることもできます。

## About transaction metadata

To track where your sponsorships are coming from, you can use custom URLs with metadata for your {% data variables.product.prodname_sponsors %} profile or checkout page. The metadata will be included in your transaction export in the metadata column. For more information about exporting transaction data, see "[Exporting your sponsorship data](#exporting-your-sponsorship-data)."

Metadata must use the `key=value` format and can be added to the end of these URLs.

- Sponsored account profile: `https://github.com/sponsors/{account}`
- Sponsorship checkout: `https://github.com/sponsors/{account}/sponsorships`

The metadata will persist in the URL as a potential sponsor switches accounts to sponsor with, selects monthly or one-time payments, and chooses a different tier.

### Syntax requirements

Your metadata must meet the following requirements, which do not apply to any other URL parameters that are passed.

- Keys must be prefixed by `metadata_`, such as `metadata_campaign`. In your transaction export, the `metadata_` prefix will be removed from the key.
- Keys and values must only contain alphanumeric values, dashes, or underscores. If non-accepted characters are passed in either keys or values, a 404 error will be presented.
- Whitespaces are not allowed.
- A maximum of **10** key-value pairs are accepted per request. If more are passed, only the first 10 will be saved.
- A maximum of **25** characters per key are accepted. If more than that are passed, only the first 25 will be saved.
- A maximum of **100** characters per value are accepted. If more than that are passed, only the first 100 will be saved.

For example, you can use `https://github.com/sponsors/{account}?metadata_campaign=myblog` to track sponsorships that originate from your blog. `metadata_campaign` is the key and `myblog` is the value. In the metadata column of your transaction export, the key will be listed as `campaign`.

## スポンサーとスポンサーシップを表示する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. あるいは、スポンサーを層によってフィルタリングするには、**Filter（フィルター）**ドロップダウンメニューで、**Active tiers（アクティブな層）**または**Retired tiers（リタイアした層）**をクリックしてから、層を選択します。 ![層によってフィルタリングするドロップダウンメニュー](/assets/images/help/sponsors/filter-drop-down.png)

## 最近のスポンサーシップアクティビティを表示する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}

## スポンサーシップデータをエクスポートする

スポンサーシップのトランザクションは 月単位でエクスポートできます。 {% data variables.product.company_short %} で、選択した月のスポンサーすべてのトランザクションデータがメールでエクスポートされます。 エクスポートが完了したら、別の月のデータをエクスポートできます。 スポンサードアカウントごとに、1 時間に 10 セットまでのデータをエクスポートできます。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}
1. In the top-right, click {% octicon "download" aria-label="The download icon" %} **Export**. ![エクスポートボタン](/assets/images/help/sponsors/export-all.png)
1. エクスポートしたいデータの時間枠と形式を選択し、[**Start export**] をクリックします。 ![データエクスポートのオプション](/assets/images/help/sponsors/export-your-sponsors.png)
