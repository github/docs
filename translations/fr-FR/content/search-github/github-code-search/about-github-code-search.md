---
title: À propos de GitHub Code Search (bêta)
intro: 'Vous pouvez rechercher du code, naviguer parmi celui-ci et comprendre son contenu sur GitHub avec la nouvelle recherche de code (bêta).'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159756'
---
{% note %}

**Remarque :** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## À propos de la nouvelle recherche de code (bêta)

La nouvelle recherche de code (bêta) vous permet de rechercher du code, de naviguer parmi celui-ci et de comprendre son contenu, qu’il s’agisse de votre propre code, du code de votre équipe ou du code de la communauté open source, le tout à partir de {% data variables.product.prodname_dotcom_the_website %}. Ce moteur de recherche est conçu pour être scalable. Il prend en charge le code ainsi que la recherche de code sur GitHub à l’aide d’expressions régulières, d’opérations booléennes, de qualificateurs spécialisés et de la recherche de symboles. Pour plus d’informations sur la syntaxe de la nouvelle recherche de code (bêta), consultez « [Présentation de la syntaxe de GitHub Code Search (bêta)](/search-github/github-code-search/understanding-github-code-search-syntax) ».

En plus du nouveau moteur de recherche de code, la recherche de code (bêta) comprend de nouvelles fonctionnalités dans l’interface de recherche sur {% data variables.product.prodname_dotcom_the_website %}, par exemple les suggestions, les complétions et l’enregistrement de vos recherches. La nouvelle interface de recherche vous permet de trouver plus rapidement et plus facilement ce que vous cherchez. Pour plus d’informations, consultez « [Utilisation de GitHub Code Search (bêta)](/search-github/github-code-search/using-github-code-search) ».

{% data reusables.search.non-code-search-explanation %}

La nouvelle recherche de code (bêta) est étroitement intégrée à un mode Code repensé (bêta) sur {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-view-link %}

Pour accéder à la nouvelle recherche de code (bêta) ainsi qu’au nouveau mode Code, vous pouvez vous inscrire sur la [liste d’attente](https://github.com/features/code-search-code-view/signup). 

## Activation et désactivation de la nouvelle recherche de code et du nouveau mode Code (bêta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Limites

Nous avons indexé de nombreux dépôts publics pour la nouvelle recherche de code (bêta), et nous continuons à en indexer d’autres. De plus, les dépôts privés des utilisateurs GitHub de la bêta sont indexés et peuvent faire l’objet de recherches par les participants à la bêta qui ont déjà accès à ces dépôts privés sur GitHub.com. Toutefois, les très grands dépôts ne sont peut-être pas indexés pour le moment, et la totalité du code n’est pas indexée. 

Les limitations actuelles du code indexé sont les suivantes :
   - Le code faisant l’objet de Vendoring et le code généré sont exclus (tel que cela a été déterminé par [Enry](https://github.com/go-enry/go-enry))
   - Les fichiers vides et les fichiers de plus de 350 Kio sont exclus
   - Seuls les fichiers dont le codage correspond au format UTF-8 sont inclus
   - Les très grands dépôts ne peuvent pas être indexés

Nous prenons en charge uniquement la recherche de code dans la branche par défaut d’un dépôt.

Les résultats des recherches effectuées avec la nouvelle recherche de code (bêta) sont limités à 100 résultats (10 pages). Le tri des résultats de la recherche de code n’est pas pris en charge. Cette limitation s’applique uniquement à la recherche de code basée sur la nouvelle recherche de code (bêta). Elle ne s’applique pas aux autres types de recherche.

La nouvelle recherche de code (bêta) prend en charge la recherche de définitions de symboles dans le code, par exemple les définitions de fonctions ou de classes, à l’aide du qualificateur `symbol:`. Toutefois, notez que le qualificateur `symbol:` recherche uniquement les définitions et non les références. De plus, tous les types de symbole et tous les langages ne sont pas encore complètement pris en charge. Pour obtenir la liste des langages pris en charge, consultez « [Qualificateur de symbole](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier) ».

## Commentaires et support

Vous pouvez voir et partager des commentaires sur la nouvelle recherche de code (bêta) dans notre [forum de discussion](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).
