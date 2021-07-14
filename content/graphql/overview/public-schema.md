---
title: Public schema
intro: 'Download the public schema for the {% data variables.product.prodname_dotcom %} GraphQL API.'
redirect_from:
  - /v4/public_schema
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

You can [perform introspection](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) against the GraphQL API directly.

Alternatively, you can download the latest version of the public schema here:

{% ifversion fpt %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% ifversion ghae %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
