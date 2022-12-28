---
title: Объединения
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 13c5fdf292a58d73b93ff13a9de8840456d16d75
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108985'
---
## Сведения об объединениях

[Объединение](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) — это тип объекта, представляющий множество объектов.

Например, поле, помеченное как [`ProjectCardItem`](/graphql/reference/unions#projectcarditem), может быть объектом [`Issue`](/graphql/reference/objects#issue) или [`PullRequest`](/graphql/reference/objects#pullrequest), так как каждый из этих объектов может находиться в карточке проекта. Использование объединения вместо объекта повышает гибкость.

Дополнительные сведения см. в разделе [Общие сведения о GraphQL](/graphql/guides/introduction-to-graphql).

{% данных reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
