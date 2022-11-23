---
title: Navigation dans le code sur GitHub
intro: 'Vous pouvez comprendre les relations dans et entre les dépôts en parcourant le code directement dans {% data variables.product.product_name %}.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 89fc5092468d50484cfcad71824870b6456d9ac7
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164162'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## À propos de la navigation dans du code sur {% data variables.product.prodname_dotcom %}

La navigation dans le code vous permet de lire, naviguer et comprendre le code en affichant et en liant des définitions d’une entité nommée correspondant à une référence à cette entité, ainsi que des références correspondant à la définition d’une entité.

![Affichage de la navigation dans le code](/assets/images/help/repository/code-navigation-popover.png)

La navigation dans le code utilise la bibliothèque open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). Les langues et stratégies de navigation suivantes sont prises en charge :

| Langage   | Navigation dans le code basé sur la recherche | Navigation précise dans le code |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| Rust       | ✅                           |                         |
| TypeScript | ✅                           |                         |


Vous n’avez pas besoin de configurer quoi que ce soit dans votre référentiel pour activer la navigation dans le code. Nous allons extraire automatiquement des informations de navigation de code basées sur la recherche et précises pour ces langages pris en charge dans tous les référentiels et vous pouvez basculer entre les deux approches de navigation de code prises en charge si votre langage de programmation est pris en charge par les deux.

{% data variables.product.prodname_dotcom %} a développé deux approches de navigation de code basées sur la bibliothèque open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) et [`stack-graphs`](https://github.com/github/stack-graphs) :
 - Basée sur la recherche : recherche toutes les définitions et références dans un référentiel pour trouver des entités portant un nom donné
 - Précise : résout les définitions et les références en fonction de l’ensemble de classes, de fonctions et de définitions importées à un point donné dans votre code

Pour en savoir plus sur ces approches, consultez « [Navigation précise et basée sur la recherche](#precise-and-search-based-navigation) ».

Les versions ultérieures ajouteront une *navigation de code précise* pour d’autres langages, qui est une approche de navigation de code qui peut donner des résultats plus précis.

## Accès à la définition d’une fonction ou d’une méthode

Vous pouvez accéder à la définition d’une fonction ou d’une méthode dans le même référentiel en cliquant sur l’appel de fonction ou de méthode dans un fichier.

![Onglet Accéder à la définition](/assets/images/help/repository/jump-to-definition-tab.png)

## Recherche de toutes les références d’une fonction ou d’une méthode

Vous pouvez trouver toutes les références pour une fonction ou une méthode dans le même référentiel en cliquant sur la fonction ou l’appel de méthode dans un fichier, puis en cliquant sur l’onglet **Références**.

![Onglet Rechercher toutes les références](/assets/images/help/repository/find-all-references-tab.png)

## Navigation précise et basée sur la recherche

Certains langages pris en charge par {% data variables.product.prodname_dotcom %} ont accès à une *navigation de code précise*, qui utilise un algorithme (basé sur la bibliothèque open source [`stack-graphs`](https://github.com/github/stack-graphs)) qui résout les définitions et les références basées sur l’ensemble de classes, de fonctions et de définitions importées visibles à un moment donné dans votre code. D’autres langages utilisent la *navigation de code basée sur la recherche*, qui recherche toutes les définitions et références dans un référentiel pour rechercher des entités portant un nom donné. Les deux stratégies sont efficaces pour trouver des résultats et veillent à éviter les résultats inappropriés tels que les commentaires, mais la navigation précise dans le code peut donner des résultats plus précis, en particulier lorsqu’un référentiel contient plusieurs méthodes ou fonctions portant le même nom.

Si vous ne voyez pas les résultats attendus à partir d’une requête de navigation de code précise, vous pouvez cliquer sur le lien « basé sur la recherche » dans la fenêtre contextuelle affichée pour effectuer une navigation basée sur la recherche.

![Lien de navigation dans le code basé sur la recherche](/assets/images/help/repository/search-based-code-navigation-link.png)

Si vos résultats précis semblent inexacts, vous pouvez déposer une demande de support.

## Navigation précise dans le code entre référentiels

La navigation dans le code entre référentiels est disponible pour les langues prises en charge par la navigation précise dans le code et le graphe des dépendances. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ». Avec la navigation dans le code entre référentiels, vous pouvez accéder à la définition de fonctions ou de variables définies dans les dépendances importées par votre projet si cette dépendance est un référentiel hébergé par {% data variables.product.prodname_dotcom %}. La navigation dans le code entre référentiels ne prend pas en charge les demandes de recherche toutes les références pour l’instant.

![Capture d’écran de la navigation dans le code entre référentiels](/assets/images/help/repository/cross-repository-code-navigation.png)

## Résolution des problèmes de navigation dans le code

Si la navigation dans le code est activée pour vous, mais que vous ne voyez pas de liens vers les définitions de fonctions et de méthodes :
- La navigation dans le code fonctionne uniquement pour les branches actives. Envoyez (push) à la branche et réessayez.
- La navigation dans le code fonctionne uniquement pour les référentiels avec moins de 100 000 fichiers.

## Pour aller plus loin
- « [Recherche de code](/github/searching-for-information-on-github/searching-code) »
