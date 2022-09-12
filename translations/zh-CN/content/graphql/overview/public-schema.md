---
title: 公共架构
intro: '下载 {% data variables.product.prodname_dotcom %} GraphQL API 的公共架构。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145065987'
---
可以直接对 GraphQL API [执行自检](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)。

或者，您也可以在此处下载公共架构的最新版本：

{% ifversion fpt or ghec %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% ifversion ghae %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
