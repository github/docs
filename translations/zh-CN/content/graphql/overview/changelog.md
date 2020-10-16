---
title: 变更日志
intro: 'GraphQL 架构变更日志是指最近和即将发生的 GraphQL API 架构变更列表。 其中包括向后兼容变更、架构预览和即将发生的重大变更。'
redirect_from:
  - /v4/changelog
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

重大变更包括会改变现有查询或可能影响客户端运行时行为的变更。 有关重大变更及它们何时发生的列表，请参阅我们的[重大变更日志](/v4/breaking_changes)。

{% for entry in graphql.changelog %}
### {{ entry.date }} 的架构变更

{% for schemaChange in entry.schemaChanges %}
{{ schemaChange.title }}

{% for change in schemaChange.changes %}
* {{ change }}
{% endfor %}
{% endfor %}

{% for previewChange in entry.previewChanges %}
{{ previewChange.title }}

{% for change in previewChange.changes %}
* {{ change }}
{% endfor %}
{% endfor %}

{% for upcomingChange in entry.upcomingChanges %}
{{ upcomingChange.title }}

{% for change in upcomingChange.changes %}
* {{ change }}
{% endfor %}
{% endfor %}

{% endfor %}
