---
title: Public schema
intro: 'Download the public schema for the {% data variables.product.prodname_dotcom %} GraphQL API.'
redirect_from:
  - /v4/public_schema
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

You can [perform introspection](/v4/guides/intro-to-graphql/#discovering-the-graphql-api) against the GraphQL API directly.

Alternatively, you can download the latest version of the public schema here:

{% if currentVersion == "free-pro-team@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% if currentVersion == "github-ae@latest" %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
