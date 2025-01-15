---
title: Public schema
intro: 'Download the public schema for the {% data variables.product.prodname_dotcom %} GraphQL API.'
redirect_from:
  - /v4/public_schema
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - API
---

You can [perform introspection](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) against the GraphQL API directly.

Alternatively, you can download the latest version of the public schema here:

{% ifversion fpt %}

[{% octicon "desktop-download" aria-label="Download" %} `schema.docs.graphql`](/public/fpt/schema.docs.graphql)

{% endif %}

{% ifversion ghec %}

[{% octicon "desktop-download" aria-label="Download" %} `schema.docs.graphql`](/public/ghec/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="Download" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
