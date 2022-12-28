---
title: À propos de l’intégration continue
intro: 'Vous pouvez créer des flux d’intégration continue (CI) personnalisés directement dans votre référentiel {% data variables.product.prodname_dotcom %} avec {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: 26b9088133ad561900d06a0c885d6b06b9b55861
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880660'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de l’intégration continue

L’intégration continue (CI) est une pratique logicielle qui nécessite un committing fréquent du code dans un dépôt partagé. La plupart du temps, le fait de commiter le code permet de détecter plus rapidement les erreurs, et réduit la quantité de code dont un développeur a besoin pour le débogage lorsqu’il recherche la source d’une erreur. Les mises à jour fréquentes du code facilitent également la fusion des modifications apportées par différents membres d’une équipe de développement logiciel. Ceci est idéal pour les développeurs, qui peuvent alors passer plus de temps à écrire du code et moins de temps à déboguer des erreurs ou à résoudre les conflits de fusion.

Lorsque vous commitez du code dans votre dépôt, vous pouvez générer et tester le code en continu pour être sûr que le commit ne provoque pas d’erreurs. Vos tests peuvent inclure des linters de code (qui vérifient la mise en forme du style), des vérifications de sécurité, la couverture du code, des tests fonctionnels et d’autres vérifications personnalisées.

La génération et le test de votre code nécessitent un serveur. Vous pouvez générer et tester des mises à jour localement avant de pousser (push) du code vers un dépôt, ou vous pouvez utiliser un serveur d’intégration continue qui recherche les nouveaux commits de code dans un dépôt.

## À propos de l’intégration continue avec {% data variables.product.prodname_actions %}

{% ifversion ghae %}L’intégration continue avec {% data variables.product.prodname_actions %} offre des workflows qui peuvent générer du code dans votre dépôt et exécuter vos tests. Les workflows peuvent s’exécuter sur les exécuteurs que vous hébergez. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ».
{% else %}L’intégration continue avec {% data variables.product.prodname_actions %} offre des workflows qui peuvent générer du code dans votre dépôt et exécuter vos tests. Les workflows peuvent s’exécuter sur des machines virtuelles hébergées dans {% data variables.product.prodname_dotcom %}, ou sur des machines que vous hébergez vous-même. Pour plus d’informations, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners) » et « [À propos des exécuteurs auto-hébergés](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners) ».
{% endif %}

Vous pouvez configurer votre workflow d’intégration continue pour qu’il s’exécute lorsqu’un événement {% data variables.product.prodname_dotcom %} se produit (par exemple, lorsque le nouveau code est poussé vers votre dépôt), lorsqu’un événement externe se produit si vous utilisez le webhook de dispatch du dépôt, ou selon une planification définie.

{% data variables.product.product_name %} exécute vos tests d’intégration continue et fournit les résultats de chaque test dans la demande de tirage (pull request). Vous pouvez donc voir si la modification de votre branche provoque une erreur. Lorsque tous les tests d’intégration continue d’un workflow réussissent, les modifications que vous avez poussées sont prêtes à être examinées ou fusionnées par un membre de l’équipe. Lorsqu’un test échoue, cela peut signifier que l’une de vos modifications a provoqué l’échec.

Lorsque vous configurez l’intégration continue dans votre dépôt, {% data variables.product.product_name %} analyse le code de votre dépôt et recommande des workflows d’intégration continue basés sur le langage et le framework de votre dépôt. Par exemple, si vous utilisez [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} suggère un workflow de démarrage qui installe vos packages Node.js et exécute vos tests. Vous pouvez utiliser le workflow de démarrage d’intégration continue suggéré par {% data variables.product.product_name %}, personnaliser le workflow de démarrage suggéré ou créer votre propre fichier de workflow personnalisé pour exécuter vos tests d’intégration continue.

![Capture d’écran des workflows de démarrage d’intégration continue suggérés](/assets/images/help/repository/ci-with-actions-template-picker.png)

En plus de vous aider à configurer des workflows d’intégration continue pour votre projet, {% data variables.product.prodname_actions %} vous permet de créer des workflows dans le cycle de vie complet de développement logiciel. Par exemple, vous pouvez utiliser des actions pour déployer, empaqueter ou publier votre projet. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_actions %}](/articles/about-github-actions) ».

Pour obtenir la définition des termes courants, consultez « [Concepts fondamentaux concernant {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions) ».

## Workflow de démarrage

{% data variables.product.product_name %} propose des workflows de démarrage d’intégration continue pour divers langages et frameworks.

Parcourez la liste complète des workflows de démarrage d’intégration continue proposés par {% data variables.product.company_short %} dans le dépôt {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) repository{% else %} `actions/starter-workflows` présent dans l’{% data variables.product.product_location %}{% endif %}.

## Pour aller plus loin

{% ifversion fpt or ghec %}
- « [Gestion de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) » {% endif %}
