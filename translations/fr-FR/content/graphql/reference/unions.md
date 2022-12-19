---
title: Unions
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
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108405'
---
## À propos des unions

Une [union](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) est un type d’objet représentant de nombreux objets.

Par exemple, un champ marqué comme [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) pourrait être un [`Issue`](/graphql/reference/objects#issue) ou une [`PullRequest`](/graphql/reference/objects#pullrequest), car chacun de ces objets peut se trouver à l’intérieur d’une carte de projet. L’utilisation d’une union au lieu d’un objet offre une certaine flexibilité.

Pour plus d’informations, consultez « [Présentation de GraphQL](/graphql/guides/introduction-to-graphql) ».

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
