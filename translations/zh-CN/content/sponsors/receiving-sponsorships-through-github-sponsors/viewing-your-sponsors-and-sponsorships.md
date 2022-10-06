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
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130240'
---
## 关于赞助者和赞助

您可以查看有关您当前和过去的赞助、从赞助者收到的付款以及事件（例如赞助取消和赞助等级变更）的分析。 您还可以查看新的赞助、赞助变更和赞助取消等活动。 您可以按日期过滤活动列表。 您还可以导出帐户的赞助数据以 CSV 或 JSON 格式查看。

## 关于交易元数据

要跟踪您的赞助来源，您可以使用自定义网址以及 {% data variables.product.prodname_sponsors %} 个人资料或结账页面的元数据。 元数据将包含在您的交易导出的元数据列中。 有关导出事务数据的详细信息，请参阅“[导出赞助数据](#exporting-your-sponsorship-data)”。

元数据必须使用 `key=value` 格式，并可以添加到这些 URL 的末尾。

- 赞助的帐户配置文件：`https://github.com/sponsors/{account}`
- 赞助签出：`https://github.com/sponsors/{account}/sponsorships`

元数据将保留在 URL 中，因为潜在的发起人将帐户切换为赞助者，选择每月或一次性付款，并选择其他层。

### 语法要求

您的元数据必须满足以下要求，这些要求不适用于传递的任何其他 URL 参数。

- 键必须以 `metadata_` 为前缀，例如 `metadata_campaign`。 在事务导出中，`metadata_` 前缀将从键中删除。
- 键和值只能包含字母数字值、短划线或下划线。 如果在键或值中传递不接受的字符，则将显示 404 错误。
- 不允许使用空格。
- 每个请求最多接受 10 个键值对。 如果传递较多，仅保存前 10 个。
- 每个键最多接受 25 个字符。 如果超过此值，则仅保存前 25 个。
- 每个值最多接受 100 个字符。 如果超过此值，则仅保存前 100 个。

例如，可使用 `https://github.com/sponsors/{account}?metadata_campaign=myblog` 跟踪源自博客的赞助。 `metadata_campaign` 是键，而 `myblog` 是值。 在事务导出的元数据列中，键将列为 `campaign`。

## 查看您的赞助者和赞助

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. （可选）若要按层级筛选赞助商，请使用“筛选器”下拉菜单，单击“活动层”或“停用层”，然后选择一个层  。
  ![按层级筛选的下拉菜单](/assets/images/help/sponsors/filter-drop-down.png)

## 查看最近的赞助活动

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## 导出赞助数据

您可以按月导出赞助事务。 {% data variables.product.company_short %} 将向您发送一封电子邮件，其中包含您所选月份所有赞助者的事务数据。 导出完成后，您可以导出另一个月的数据。 对于您的任何被赞助帐户，您每小时最多可以导出 10 组数据。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. 在右上角，单击“{% octicon "download" aria-label="The download icon" %} 导出”。
  ![“导出”按钮](/assets/images/help/sponsors/export-all.png)
1. 选择要导出的数据的时间范围和格式，然后单击“开始导出”。
  ![数据导出选项](/assets/images/help/sponsors/export-your-sponsors.png)
