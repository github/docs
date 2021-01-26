---
title: Bitácora de Cambios
intro: 'La bitácora de cambios del modelo de GraphQL es una lista de cambios recientes y venideros a nuestro modelo de la API de GraphQL. Este incluye cambios compatibles con versiones anteriores, y cambios sustanciales venideros.'
redirect_from:
  - /v4/changelog
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Los cambios sustanciales incluyen aquellos que modificarán las consultas existentes o que podrían afectar el comportamiento del tiempo de ejecución de los clientes. Para un listado de cambios sustanciales y cuándo ocurrirán, consulta nuestra [bitácora de cambios sustanciales](/graphql/overview/breaking-changes).

{% for entry in graphql.changelog %}
### Cambios de modelo para {{ entry.date }}

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
