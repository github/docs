---
title: 変更履歴
intro: GraphQLスキーマの変更履歴は、GraphQL APIスキーマに対する最近及び今後の変更のリストです。 これは後方互換性のある変更、スキーマプレビュー、今後の破壊的変更が含まれます。
redirect_from:
  - /v4/changelog
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

破壊的変更には、既存のクエリを損なったり、クライアントの実行時の振る舞いに影響するかもしれない変更が含まれます。 破壊的変更とそれらが行われる時期のリストについては、[破壊的変更の履歴](/v4/breaking_changes)を参照してください。

{% for entry in graphql.changelog %}
### {{ entry.date }}のスキーマ変更

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
