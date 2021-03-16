---
title: Registro de alterações
intro: 'O registro de alterações do GraphQL é uma lista de alterações recentes e futuras no nosso esquema da API do GraphQL. Ele inclui alterações compatíveis com versões anteriores, pré-visualizações de esquema, bem como as próximas alterações significativas.'
redirect_from:
  - /v4/changelog
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

As alterações significativas incluem alterações que modificarão as consultas existentes ou podem afetar o comportamento do tempo de execução dos clientes. Para obter uma lista de alterações significativas e quando ocorrerão, consulte o nosso [registro de alterações significativas](/graphql/overview/breaking-changes).

{% for entry in graphql.changelog %}
### Alterações de esquema para {{ entry.date }}

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
