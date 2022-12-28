---
title: Eingabeobjekte
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108518'
---
## Informationen zu Eingabeobjekten

[Eingabeobjekte](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) können als „zusammensetzbare Objekte“ beschrieben werden, da sie einen Satz von Eingabefeldern enthalten, die das Objekt definieren.

Zum Beispiel benötigt [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) ein Feld namens `emails`. Wenn du einen Wert für `emails` angibst, wird `CommitAuthor` in eine Liste von `User`-Objekten umgewandelt, die diese E-Mail-Adresse enthalten. Beachte, dass [Objekte](/graphql/reference/objects) Eingabeobjekte haben **können**, während [Mutationen](/graphql/reference/mutations) Eingabeobjekte **erfordern**.

Weitere Informationen findest du unter „[Informationen zu Mutationen](/graphql/guides/forming-calls-with-graphql#about-mutations)“.

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
