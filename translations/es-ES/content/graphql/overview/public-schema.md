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
  - api
---

Puedes [realizar una introspección](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) contra la API de GraphQL directamente.

Como alternativa, puedes descargar la última versión del modelo público aquí:

{% if currentVersion == "free-pro-team@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% if currentVersion == "github-ae@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
