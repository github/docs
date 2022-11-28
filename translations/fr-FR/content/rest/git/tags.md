---
title: Étiquettes Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'L’API Étiquettes Git vous permet de lire et d’écrire des objets d’étiquette dans votre base de données Git sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d0ba994be564467d3b84744e6618417b927828aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131399'
---
## À propos de l’API Étiquettes Git

Une étiquette Git est similaire à une [référence Git](/rest/reference/git#refs), mais la validation Git vers laquelle elle pointe ne change jamais. Les étiquettes Git sont utiles lorsque vous souhaitez pointer vers des mises en production spécifiques. Ces points de terminaison vous permettent de lire et d’écrire des [objets étiquettes](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) dans votre base de données Git sur {% data variables.product.product_name %}. L’API Étiquettes Git prend uniquement en charge les [objets étiquettes annotées](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), et non les étiquettes légères.
