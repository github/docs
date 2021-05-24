---
title: Modelo público
intro: 'Descarga el modelo público para la API de GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/public_schema
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

Puedes [realizar una introspección](/v4/guides/intro-to-graphql/#discovering-the-graphql-api) contra la API de GraphQL directamente.

Como alternativa, puedes descargar la última versión del modelo público aquí:

{% if currentVersion == "free-pro-team@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% else %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/{{ currentVersion }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
