---
title: Interfaces
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108516'
---
## À propos des interfaces

Les [interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) servent d’objets parents dont d’autres objets peuvent hériter.

Par exemple, [`Lockable`](/graphql/reference/interfaces#lockable) est une interface, car les objets [`Issue`](/graphql/reference/objects#issue) et [`PullRequest`](/graphql/reference/objects#pullrequest) peuvent tous deux être verrouillés. Une interface possède sa propre liste de champs nommés qui sont partagés par l’implémentation d'objets.

Pour plus d’informations, consultez « [Implémentation](/graphql/guides/introduction-to-graphql#implementation) ».

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
