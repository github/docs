---
title: Vue d’ensemble de GitHub Codespaces
shortTitle: Overview
intro: 'Ce guide présente {% data variables.product.prodname_github_codespaces %}, et fournit des détails sur son fonctionnement ainsi que sur son utilisation.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164322'
---
## Qu’est-ce qu’un codespace ?

Un codespace est un environnement de développement hébergé dans le cloud. Vous pouvez personnaliser votre projet pour {% data variables.product.prodname_github_codespaces %} en commitant des [fichiers de configuration](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) dans votre dépôt (souvent appelé configuration sous forme de code), ce qui crée une configuration de codespace reproductible pour tous les utilisateurs de votre projet.

Chaque codespace s’exécute sur une machine virtuelle hébergée par {% data variables.product.prodname_dotcom %}. Vous pouvez choisir le type de machine que vous souhaitez utiliser, en fonction des ressources dont vous avez besoin. Différents types de machines sont disponibles, à commencer par un processeur 2 cœurs, 4 Go de RAM et 32 Go de stockage. 

Vous pouvez vous connecter à vos codespaces à partir de votre navigateur, de {% data variables.product.prodname_vscode %}, de l’application JetBrains Gateway ou en utilisant l’{% data variables.product.prodname_cli %}.

![Diagramme montrant le fonctionnement des {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-diagram.png)

## Utilisation de {% data variables.product.prodname_github_codespaces %}

Pour commencer à développer en utilisant des ressources de calcul cloud, vous pouvez créer un codespace à partir d’un modèle, ou d’une branche ou d’un commit de votre dépôt. Lorsque vous créez un codespace à partir d’un modèle, vous pouvez commencer à partir d’un modèle vide ou choisir un modèle adapté au travail que vous faites.

{% data reusables.codespaces.links-to-get-started %}

### Utilisation de codespaces appartenant à votre compte personnel

Tous les comptes {% data variables.product.prodname_dotcom_the_website %} personnels ont un quota mensuel d’utilisation gratuite de {% data variables.product.prodname_github_codespaces %} inclus dans le plan Gratuit ou Pro. Vous pouvez commencer à utiliser {% data variables.product.prodname_github_codespaces %} sur votre compte personnel sans modifier de paramètres ni fournir de détails de paiement.

Vous pouvez créer et utiliser un codespace pour n’importe quel dépôt que vous pouvez cloner. Vous pouvez également utiliser un modèle pour créer des codespaces qui ne sont pas initialement associés à un dépôt. Si vous créez un codespace à partir d’un dépôt appartenant à l’organisation, l’utilisation du codespace est facturée à l’organisation (si l’organisation est configurée pour cela) ou à votre compte personnel. Les codespaces créés à partir de modèles sont toujours facturés sur votre compte personnel. 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### Utilisation de codespaces appartenant à l’organisation

Les propriétaires d’organisation peuvent activer l’utilisation de {% data variables.product.prodname_github_codespaces %}, facturables au compte d’organisation ou d’entreprise. Cela s’applique aux codespaces créés à partir de dépôts appartenant à l’organisation. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) ». Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_github_codespaces %} sur votre compte d’organisation ou d’entreprise. Pour plus d’informations, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces) ».

Si l’utilisation d’un codespace est facturée à une organisation ou à une entreprise, vous le verrez lors de la création du codespace. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ». Les codespaces facturés à une organisation, ou à son entreprise parente, appartiennent à l’organisation et peuvent être supprimés par un propriétaire d’organisation. Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization) ». 

### Personnalisation de {% data variables.product.prodname_github_codespaces %}

Pour personnaliser les runtimes et outils dans votre codespace, vous pouvez créer une ou plusieurs configurations de conteneur de développement pour votre dépôt. L’ajout de configurations de conteneur de développement à votre dépôt vous permet de définir un choix de différents environnements de développement adapté au travail que vont effectuer les utilisateurs dans votre dépôt. 

Si vous créez un codespace à partir d’un dépôt sans configuration de conteneur de développement, {% data variables.product.prodname_github_codespaces %} clone votre dépôt dans un environnement avec l’image du codespace par défaut qui inclut de nombreux outils, langages et environnements d’exécution. Si vous créez un codespace à partir d’un modèle, vous pouvez commencer par une première configuration en plus de l’image par défaut. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

Vous pouvez personnaliser les aspects de votre environnement de codespace à l’aide d’un dépôt [dotfiles](https://dotfiles.github.io/tutorials/) public. Vous pouvez utiliser des dotfiles pour définir des alias et des préférences d’interpréteur de commandes, ou pour installer vos préférences personnelles concernant les outils que vous souhaitez utiliser. Si vous utilisez {% data variables.product.prodname_github_codespaces %} dans le navigateur ou dans {% data variables.product.prodname_vscode %}, vous pouvez utiliser [Synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync) pour donner à votre éditeur de codespace les mêmes paramètres, raccourcis clavier, extraits de code et extensions que vous avez configurés dans votre installation locale de {% data variables.product.prodname_vscode %}. 

Pour plus d’informations, consultez « [Personnalisation de votre codespace](/codespaces/customizing-your-codespace) ».

## Facturation de {% data variables.product.prodname_codespaces %}

Pour plus d’informations sur les prix, le stockage et l’utilisation de {% data variables.product.prodname_github_codespaces %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Pour plus d’informations sur la façon dont les propriétaires de l’organisation et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_github_codespaces %} dans une organisation, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces) ».
