---
title: Входные объекты
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 10a84ad425b0c8b871b1c64f09bef4d8cf33d007
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109153'
---
## Сведения о входных объектах

[Входные объекты](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) можно описать как составные, так как они включают набор входных полей, определяющих объект.

Например, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) принимает поле с именем `emails`. Предоставление значения для `emails` преобразует `CommitAuthor` в список объектов `User`, содержащих этот адрес электронной почты. Обратите внимание, что [объекты](/graphql/reference/objects) **могут** иметь входные объекты, тогда как [изменения](/graphql/reference/mutations) **требуют** их наличия.

Дополнительные сведения см. в разделе [Сведения об изменениях](/graphql/guides/forming-calls-with-graphql#about-mutations).

{% данных reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
