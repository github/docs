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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496521'
---
## Sobre consultas

Cada esquema de GraphQL tem um tipo de raiz para consultas e mutações. O [tipo de consulta](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define as operações do GraphQL que recuperam os dados do servidor.

Para obter mais informações, confira "[Sobre as consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

{% note %}

**Observação:** para as solicitações [de usuário para servidor](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) do {% data variables.product.prodname_github_app %}, você deve usar consultas separadas para problemas e solicitações de pull. Por exemplo, use os filtros `is:issue` ou `is:pull-request` e os equivalentes. O uso da conexão `search` para retornar uma combinação de problemas e solicitações de pull em uma só consulta resultará em um conjunto vazio de nós.

{% endnote %}

<!-- Content after this section is automatically generated -->
