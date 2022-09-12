---
title: Consultas
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 2e4f855c4140193b2d814b937341665e13a535de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496528'
---
## Acerca de las consultas

Cada modelo de GraphQL tiene un tipo de raíz tanto para consultas como para mutaciones. El [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define las operaciones de GraphQL que recuperan datos del servidor.

Para obtener más información, consulte "[Acerca de las consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

{% note %}

**Nota:** En el caso de las solicitudes de {% data variables.product.prodname_github_app %} [de usuario a servidor](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests), deberá usar consultas diferentes para incidencias y solicitudes de incoporación de cambios. Por ejemplo, use los filtros `is:issue` o `is:pull-request` y sus equivalentes. Utilizar la conexión `search` para devolver una combinación de propuestas y solicitudes de cambios en una sola consulta dará como resultado un conjunto de nodos vacío.

{% endnote %}

<!-- Content after this section is automatically generated -->
