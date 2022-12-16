---
title: Ограничение скорости
intro: Используйте REST API для проверки текущего состояния ограничения скорости.
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193416'
---
## Сведения об ограничениях скорости

Вы можете проверить текущее состояние ограничения скорости в любое время. Дополнительные сведения о правилах ограничения скорости см. [в разделе Ресурсы в REST API](/rest/overview/resources-in-the-rest-api#rate-limiting). 

REST API для поиска элементов имеет настраиваемое ограничение скорости, которое отделяется от ограничения скорости, определяющего другие конечные точки REST API. Дополнительные сведения см. в разделе [Поиск](/rest/search). Для API GraphQL также действует настраиваемое ограничение скорости, которое рассчитывается отдельно от ограничения скорости для REST API. Дополнительные сведения см. в разделе [Ограничения ресурсов](/graphql/overview/resource-limitations#rate-limit). По этим причинам ответ API классифицирует ограничение скорости. В разделе `resources`вы увидите объекты, относящиеся к разным категориям:

* Объект `core` предоставляет состояние ограничения скорости для всех ресурсов в REST API, не связанных с поиском.

* Объект `search` предоставляет состояние ограничения скорости для REST API для поиска.

* Объект `graphql` предоставляет состояние ограничения скорости для API GraphQL.

* Объект `integration_manifest` предоставляет состояние ограничения скорости `POST /app-manifests/{code}/conversions` для операции. Дополнительные сведения см. в разделе [Создание приложения GitHub из манифеста](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Дополнительные сведения о заголовках и значениях в ответе ограничения скорости см. в разделе [Ресурсы в REST API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers).
