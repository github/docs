---
title: 公共架构
intro: '下载 {% data variables.product.prodname_dotcom %} GraphQL API 的公共架构。'
redirect_from:
  - /v4/public_schema
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

您可以直接对 GraphQL API [执行内省](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)。

或者，您也可以在此处下载公共架构的最新版本：

{% if currentVersion == "free-pro-team@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% if currentVersion == "github-ae@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
