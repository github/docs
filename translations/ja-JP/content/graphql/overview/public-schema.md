---
title: パブリックスキーマ
intro: '{% data variables.product.prodname_dotcom %} GraphQL APIのパブリックスキーマをダウンロードしてください。'
redirect_from:
  - /v4/public_schema
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: cb1c990506512c252b488b9d265cf8eb052435e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068375'
---
GraphQL API に対して[イントロスペクションを直接実行](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)できます。

あるいは、こちらから最新バージョンのパブリックスキーマをダウンロードすることもできます。

{% ifversion fpt or ghec %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% ifversion ghae %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
