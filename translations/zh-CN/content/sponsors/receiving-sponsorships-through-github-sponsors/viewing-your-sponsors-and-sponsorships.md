---
title: 查看您的赞助者和赞助
intro: 您可以查看和导出有关您的赞助者和赞助的详细信息与分析。
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
shortTitle: 查看赞助者和赞助
---

## 关于赞助者和赞助

您可以查看有关您当前和过去的赞助、从赞助者收到的付款以及事件（例如赞助取消和赞助等级变更）的分析。 您还可以查看新的赞助、赞助变更和赞助取消等活动。 您可以按日期过滤活动列表。 您还可以导出帐户的赞助数据以 CSV 或 JSON 格式查看。

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

## 查看您的赞助者和赞助

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. （可选）要按等级过滤赞助者，请使用 **Filter（过滤）**下拉菜单，单击 **Active tiers（活动等级）**或 **Retired tiers（已撤销等级）**，然后选择一个等级。 ![按等级过滤的下拉菜单](/assets/images/help/sponsors/filter-drop-down.png)

## 查看最近的赞助活动

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.activity-tab %}

## 导出赞助数据

您可以按月导出赞助事务。 {% data variables.product.company_short %} 将向您发送一封电子邮件，其中包含您所选月份所有赞助者的事务数据。 导出完成后，您可以导出另一个月的数据。 对于您的任何被赞助帐户，您每小时最多可以导出 10 组数据。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.activity-tab %}
1. 单击 {% octicon "download" aria-label="The download icon" %} **Export（导出）**。 ![导出按钮](/assets/images/help/sponsors/export-all.png)
1. 选择您想导出的数据的时间范围和格式，然后单击 **Start export（开始导出）**。 ![数据导出选项](/assets/images/help/sponsors/export-your-sponsors.png)
