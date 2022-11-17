---
title: Comparaison des validations
intro: 'Vous pouvez comparer l’état de votre dépôt entre les branches, les étiquettes, les commits, les duplications (fork) et les dates.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132521'
---
Pour comparer différentes versions de votre référentiel, ajoutez `/compare` au chemin d’accès de votre référentiel.

Nous allons démontrer le pouvoir de la comparaison en examinant la page de comparaison pour [une duplication du référentiel Linguist](https://github.com/octocat/linguist), situé à l’adresse [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Chaque vue de comparaison du référentiel contient deux menus déroulants : `base` et `compare`.

`base` doit être considéré comme point de départ de votre comparaison et `compare` comme point de terminaison. Lors d’une comparaison, vous pouvez modifier vos points `base` et `compare` en cliquant sur **Modifier**.

## Comparaison des branches

L’utilisation la plus courante de la comparaison consiste à comparer des branches, comme lorsque vous démarrez une nouvelle demande de tirage. Vous êtes systématiquement redirigé vers la vue de comparaison de branches lors du démarrage [d’une nouvelle demande de tirage](/articles/creating-a-pull-request).

Pour comparer les branches, vous pouvez sélectionner un nom de branche dans le menu déroulant `compare` situé en haut de la page.

Voici un exemple de comparaison [ entre deux branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Comparaison des balises

La comparaison des balises de version affiche les modifications apportées à votre référentiel depuis la dernière version. Pour plus d’informations, consultez « [Comparaison des versions](/github/administering-a-repository/comparing-releases) ».

Pour comparer les balises, vous pouvez sélectionner un nom de balise dans le menu déroulant `compare` situé en haut de la page.

Voici un exemple de comparaison [ entre deux balises](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

## Comparaison des validations

Vous pouvez également comparer deux validations arbitraires dans votre référentiel ou ses duplications sur {% data variables.product.prodname_dotcom %} dans une comparaison des différences à deux points.

Pour comparer rapidement et directement deux validations ou ID d’objet Git (OID) dans une comparaison de différences à deux points sur {% data variables.product.prodname_dotcom %}, modifiez l’URL de la page « Comparaison des modifications » de votre référentiel.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Pour en savoir plus sur les autres options de comparaison, consultez « [Comparaisons des différences à deux points et à trois points](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons) ».

## Comparaison entre les duplications

Vous pouvez comparer votre référentiel de base et n’importe quel référentiel dupliqué. Il s’agit de l’affichage présenté lorsqu’un utilisateur effectue une demande de tirage pour un projet.

Pour comparer des branches sur différents référentiels, faites précéder les noms des branches de noms d'utilisateurs. Par exemple, en spécifiant `octocat:main` pour `base` et `octo-org:main` pour `compare`, vous pouvez comparer la branche `main` des référentiels appartenant respectivement à `octocat` et `octo-org`.

Voici un exemple de comparaison [ entre deux référentiels ](https://github.com/github/linguist/compare/master...octocat:master).

## Comparaisons entre les validations

En guise de raccourci, Git utilise la notation `^` pour indiquer « une validation avant ».

Vous pouvez utiliser cette notation pour comparer une seule validation ou branche à ses prédécesseurs immédiats. Par exemple, `96d29b7^^^^^` indique cinq validations avant `96d29b7`, car il y a cinq marques `^`. Entrer `96d29b7^^^^^` dans la branche `base` et `96d29b7` dans la branche `compare` permet de comparer les cinq validations effectuées avant `96d29b7` avec la validation `96d29b7`.

Voici un exemple de [comparaison utilisant la notation `^`](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

## Pour aller plus loin

- « [Changement de la branche de base d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request) »
