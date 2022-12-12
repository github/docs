---
title: Интерфейсы
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: a6fed36ccd70557b8d88904f83840a7afacdfacb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109148'
---
## Сведения об интерфейсах

[Интерфейсы](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) служат родительскими объектами, от которых могут наследоваться другие объекты.

Например, [`Lockable`](/graphql/reference/interfaces#lockable) — это интерфейс, так как и объект [`Issue`](/graphql/reference/objects#issue), и объект [`PullRequest`](/graphql/reference/objects#pullrequest) могут быть заблокированы. Интерфейс имеет собственный список именованных полей, которые совместно используются реализациями объектов.

Дополнительные сведения см. в разделе [Реализация](/graphql/guides/introduction-to-graphql#implementation).

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
