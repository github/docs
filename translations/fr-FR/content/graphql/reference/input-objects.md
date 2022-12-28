---
title: Objet d’entrée
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108517'
---
## À propos des objets d’entrée

Les [objets d’entrée](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) peuvent être décrits comme des « objets composables », car ils incluent un ensemble de champs d’entrée qui définissent l’objet.

Par exemple, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) prend un champ appelé `emails`. Fournir une valeur pour `emails` transforme `CommitAuthor` en liste d’objets `User` contenant cette adresse e-mail. Notez que les [objets](/graphql/reference/objects) **ont la possibilité** d’avoir des objets d’entrée, tandis que les [mutations](/graphql/reference/mutations) **exigent** des objets d’entrée.

Pour plus d’informations, consultez « [À propos des mutations](/graphql/guides/forming-calls-with-graphql#about-mutations) ».

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
