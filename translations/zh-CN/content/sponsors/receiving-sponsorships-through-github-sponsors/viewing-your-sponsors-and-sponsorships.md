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

## 关于交易元数据

要跟踪您的赞助来源，您可以使用自定义网址以及 {% data variables.product.prodname_sponsors %} 个人资料或结账页面的元数据。 元数据将包含在您的交易导出的元数据列中。 有关导出交易数据的更多信息，请参阅“[导出赞助数据](#exporting-your-sponsorship-data)”。

元数据必须使用 `key=value` 格式，并且可以添加到这些 URL 的末尾。

- 赞助的帐户配置文件：`https://github.com/sponsors/{account}`
- 赞助的检出：`https://github.com/sponsors/{account}/sponsorships`

元数据将保留在 URL 中，因为潜在的发起人将帐户切换为赞助者，选择每月或一次性付款，并选择其他层。

### 语法要求

您的元数据必须满足以下要求，这些要求不适用于传递的任何其他 URL 参数。

- 密钥必须以 `metadata_` 为前缀，例如 `metadata_campaign`。 在交易导出中， `metadata_` 前缀将从密钥中删除。
- 键和值只能包含字母数字值、短划线或下划线。 如果在键或值中传递不接受的字符，则将显示 404 错误。
- 不允许使用空格。
- 每个请求最多接受 **10** 个键值对。 如果传递较多，仅保存前 10 个。
- 每个键最多接受 **25** 个字符。 如果超过此值，则仅保存前 25 个。
- 每个值最多接受 **100** 个字符。 如果超过此值，则仅保存前 100 个。

例如，您可以使用 `https://github.com/sponsors/{account}？metadata_campaign=myblog` 来跟踪源自您博客的赞助。 `metdata_activity` 是键，`myblog` 是值。 在交易导出的元数据列中，密钥将列为 `campaign`。

## 查看您的赞助者和赞助

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. （可选）要按等级过滤赞助者，请使用 **Filter（过滤）**下拉菜单，单击 **Active tiers（活动等级）**或 **Retired tiers（已撤销等级）**，然后选择一个等级。 ![按等级过滤的下拉菜单](/assets/images/help/sponsors/filter-drop-down.png)

## 查看最近的赞助活动

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}

## 导出赞助数据

您可以按月导出赞助事务。 {% data variables.product.company_short %} 将向您发送一封电子邮件，其中包含您所选月份所有赞助者的事务数据。 导出完成后，您可以导出另一个月的数据。 对于您的任何被赞助帐户，您每小时最多可以导出 10 组数据。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}
1. 在右上角，单击 {% octicon "download" aria-label="The download icon" %} **Export（导出）**。 ![导出按钮](/assets/images/help/sponsors/export-all.png)
1. 选择您想导出的数据的时间范围和格式，然后单击 **Start export（开始导出）**。 ![数据导出选项](/assets/images/help/sponsors/export-your-sponsors.png)
