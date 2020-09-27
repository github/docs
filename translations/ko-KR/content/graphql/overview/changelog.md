---
title: Changelog
intro: 'The GraphQL schema changelog is a list of recent and upcoming changes to our GraphQL API schema. It includes backwards-compatible changes, schema previews, and upcoming breaking changes.'
redirect_from:
  - /v4/changelog
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Breaking changes include changes that will break existing queries or could affect the runtime behavior of clients. For a list of breaking changes and when they will occur, see our [breaking changes log](/v4/breaking_changes).

{% for entry in graphql.changelog %}
### Schema Changes for {{ entry.date }}

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
