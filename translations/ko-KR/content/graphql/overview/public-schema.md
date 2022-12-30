---
title: 공용 스키마
intro: '{% data variables.product.prodname_dotcom %} GraphQL API에 대한 공용 스키마를 다운로드합니다.'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068377'
---
GraphQL API에 대해 직접 [내적 검사를 수행](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)할 수 있습니다.

또는 여기에서 최신 버전의 공용 스키마를 다운로드할 수 있습니다.

{% ifversion fpt or ghec %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% ifversion ghae %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
