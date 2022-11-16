---
title: Общедоступная схема
intro: 'Загрузите общедоступную схему для API GraphQL {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069680'
---
Вы можете напрямую [выполнять интроспекцию](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) в API GraphQL.

Кроме того, последнюю версию общедоступной схемы можно скачать здесь:

{% ifversion fpt or ghec %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs.graphql`](/public/schema.docs.graphql)

{% endif %}

{% ifversion ghes %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-enterprise.graphql`](/public/ghes-{{ allVersions[currentVersion].currentRelease }}/schema.docs-enterprise.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}

{% ifversion ghae %}

[{% octicon "desktop-download" aria-label="The desktop download icon" %} `schema.docs-ghae.graphql`](/public/ghae/schema.docs-ghae.graphql) ({{ allVersions[currentVersion].versionTitle }})

{% endif %}
