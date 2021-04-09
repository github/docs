---
title: 重大变更
intro: '了解最近和即将发生的 {% data variables.product.prodname_dotcom %} GraphQL API 重大变更。'
redirect_from:
  - /v4/breaking_changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### 关于重大变更

重大变更是指可能需要集成商采取行动的任何变更。 我们将这些变更分为两类：

  - **重大：**会改变 GraphQL API 的现有查询的变更。 例如，删除字段就是重大变更。
  - **危险：**不会改变现有查询，但会影响客户端运行时的行为的变更。 添加枚举值就是一个危险变更示例。

我们努力为集成商提供稳定的 API。 当某项新功能还处于演进阶段时，我们将在[架构预览](/graphql/overview/schema-previews)模式下发布此功能。

我们将在更改 GraphQL 架构前至少三个月宣布即将发生的重大变更，以便给集成商预留进行必要调整的时间。 变更在季度第一天（1 月 1 日、4 月 1 日、7 月 1 日或 10 月 1 日）生效。 例如，如果我们在 1 月 15 日宣布变更，将在 7 月 1 日执行。

{% for date in graphql.upcomingChangesForCurrentVersion %}
### 安排在 {{ date[0] }} 进行变更

{% for change in date[1] %}
<ul>
<li><span class="border rounded-1 m-1 p-1 {% if change.criticality == 'breaking' %}border-red bg-red-light{% else %}border-purple bg-purple-light{% endif %}">{% if change.criticality == 'breaking' %}Breaking{% else %}Dangerous{% endif %}</span> 将对 <code>{{ change.location }}</code> 进行变更。.

<p><b>描述：</b> {{ change.description }}</p>

<p><b>原因：</b> {{ change.reason }}</p>
</li>
</ul>

{% endfor %}
{% endfor %}
