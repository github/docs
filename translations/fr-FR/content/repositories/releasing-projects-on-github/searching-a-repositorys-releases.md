---
title: Recherche dans les mises en production d’un dépôt
intro: 'Vous pouvez utiliser des mots clés, des étiquettes et d’autres qualificateurs pour rechercher des versions particulières dans un référentiel.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108684'
---
## Recherche de mises en production dans un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Pour rechercher dans les mises en production du dépôt, dans le champ de recherche en haut de la page Mises en production, tapez votre requête, puis appuyez sur **Entrée**.
![Champ de recherche de mises en production](/assets/images/help/releases/search-releases.png)

## Syntaxe de recherche pour la recherche de mises en production dans un dépôt

Vous pouvez entrer du texte dans votre requête de recherche, qui sera mis en correspondance avec le titre, le corps et l’étiquette des mises en production du dépôt. Vous pouvez également combiner les qualificateurs suivants pour cibler des mises en production spécifiques.

| Qualificateur        | Exemple
| ------------- | -------------
| `draft:true` | **draft:true** correspond uniquement aux mises en production à l’état de brouillon.
| `draft:false` | **draft:false** correspond uniquement aux mises en production publiées.
| `prerelease:true` | **prerelease:true** correspond uniquement aux préversions.
| `prerelease:false` | **prerelease:false** correspond uniquement aux mises en production qui ne sont pas des préversions.
| <code>tag:<em>TAG</em></code> | **tag:v1** correspond à une mise en production avec l’étiquette v1 et toutes les versions mineures ou correctives de v1, telles que v1.0, v1.2 et v1.2.5.
| <code>created:<em>DATE</em></code> | **created:2021** correspond aux mises en production créées en 2021. Vous pouvez également fournir des plages de dates. Pour plus d’informations, consultez « [Compréhension de la syntaxe de recherche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates) ».
