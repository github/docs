---
title: 公共架构
intro: '下载 {% data variables.product.prodname_dotcom %} GraphQL API 的公共架构。'
redirect_from:
  - /v4/public_schema
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以直接对 GraphQL API [执行内省](/v4/guides/intro-to-graphql/#discovering-the-graphql-api)。

或者，您也可以在此处下载公共架构的最新版本：

{% if currentVersion == "free-pro-team@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% else %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/{{ currentVersion }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
