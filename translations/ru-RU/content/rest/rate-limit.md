---
title: Ограничение скорости
intro: API ограничения скорости позволяет проверить текущее состояние ограничения скорости для разных REST API.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081051'
---
## Сведения об API ограничения скорости

В обзорной документации по REST API описываются [правила ограничения скорости](/rest/overview/resources-in-the-rest-api#rate-limiting). Вы можете в любой момент проверить текущее состояние ограничения скорости с помощью описываемого ниже API ограничения скорости.

### Общие сведения о состоянии ограничения скорости

Для API поиска [ограничение скорости настраивается](/rest/reference/search#rate-limit) отдельно от ограничения скорости, применяемого к остальной части REST API. Для API GraphQL также действует [настраиваемое ограничение скорости](/graphql/overview/resource-limitations#rate-limit), которое рассчитывается отдельно от ограничения скорости для REST API.

По этим причинам ограничение скорости классифицируется ответом API ограничения скорости. В разделе `resources` представлены четыре объекта:

* Объект `core` предоставляет состояние ограничения скорости для всех ресурсов в REST API, не связанных с поиском.

* Объект `search` предоставляет состояние ограничения скорости для [API поиска](/rest/reference/search).

* Объект `graphql` предоставляет состояние ограничения скорости для [API GraphQL](/graphql).

* Объект `integration_manifest` предоставляет состояние ограничения скорости для конечной точки [преобразования кода манифеста приложения GitHub](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Дополнительные сведения о заголовках и значениях в ответе ограничения скорости см. в разделе [Ресурсы в REST API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers).
