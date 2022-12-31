---
title: Schnittstellen
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108515'
---
## Informationen zu Schnittstellen

[Schnittstellen](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) dienen als übergeordnete Objekte, von denen andere Objekte erben können.

Beispielsweise ist [`Lockable`](/graphql/reference/interfaces#lockable) eine Schnittstelle, da die beiden Objekte [`Issue`](/graphql/reference/objects#issue) und [`PullRequest`](/graphql/reference/objects#pullrequest) gesperrt werden können. Eine Schnittstelle verfügt über eine eigene Liste benannter Felder, die von den implementierenden Objekten gemeinsam genutzt werden.

Weitere Informationen findest du unter [Implementierung](/graphql/guides/introduction-to-graphql#implementation).

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
