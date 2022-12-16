---
title: Recherche dans les duplications
intro: 'Par défaut, les [duplications (forks)](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ne sont pas affichées dans les résultats de recherche. Vous pouvez choisir de les inclure dans les recherches de dépôt et dans les recherches de code si elles répondent à certains critères.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785789'
---
Pour afficher les duplications (forks) dans les résultats de [recherche dans le dépôt](/search-github/searching-on-github/searching-for-repositories), ajoutez `fork:true` ou `fork:only` à votre requête.

Les duplications sont uniquement indexées pour la [recherche dans le code](/search-github/searching-on-github/searching-code) quand elles ont plus d’étoiles que le dépôt parent. Vous ne pouvez pas effectuer une recherche dans le code dans une duplication qui a moins d’étoiles que son parent. Pour afficher les duplications qui ont plus d’étoiles que leur dépôt parent dans les résultats de la recherche dans le code, ajoutez `fork:true` ou `fork:only` à votre requête.

Le qualificateur `fork:true` recherche tous les résultats correspondant à votre requête de recherche, y compris les duplications. Le qualificateur `fork:only` recherche _uniquement_ les duplications qui correspondent à votre requête de recherche.

| Qualificateur  | Exemple
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) correspond à tous les dépôts contenant le mot « github », y compris les duplications.
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) correspond au code contenant le mot « android » écrit en Java, à la fois dans les duplications et les dépôts standard.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) correspond à toutes les duplications de dépôt contenant le mot « github ».
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) correspond aux dépôts contenant plus de 500 duplications et retourne uniquement ceux qui sont des duplications.

## Pour aller plus loin

- « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) »
- « [À propos de la recherche sur GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github) »
