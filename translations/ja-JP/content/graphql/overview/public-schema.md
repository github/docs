---
title: パブリックスキーマ
intro: '{% data variables.product.prodname_dotcom %} GraphQL APIのパブリックスキーマをダウンロードしてください。'
redirect_from:
  - /v4/public_schema
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

GraphQL APIに対しては、直接[イントロスペクションを行え](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)ます。

あるいは、こちらから最新バージョンのパブリックスキーマをダウンロードすることもできます。

{% ifversion fpt %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %}`schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% ifversion ghae %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
