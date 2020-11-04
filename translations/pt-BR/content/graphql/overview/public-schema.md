---
title: Esquema público
intro: 'Faça o download do esquema público para a API do GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/public_schema
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Você pode [realizar a introspecção](/v4/guides/intro-to-graphql/#discovering-the-graphql-api) com base na API do GraphQL diretamente.

Como alternativa, você pode fazer o download da versão mais recente do esquema público aqui:

{% if currentVersion == "free-pro-team@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% if currentVersion == "github-ae@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
