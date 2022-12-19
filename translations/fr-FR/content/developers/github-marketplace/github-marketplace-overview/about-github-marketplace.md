---
title: À propos de GitHub Marketplace
intro: 'Découvrez {% data variables.product.prodname_marketplace %} où vous pouvez partager vos applications et actions publiquement avec tous les utilisateurs {% data variables.product.product_name %}.'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086376'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) vous connecte à des développeurs désireux d’étendre et d’améliorer leurs workflows {% data variables.product.prodname_dotcom %}. Vous pouvez répertorier les outils gratuits et payants destinés à l’usage des développeurs dans {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} offre aux développeurs deux types d’outils, {% data variables.product.prodname_actions %} et Applications, chacun nécessitant différentes étapes pour son ajout à {% data variables.product.prodname_marketplace %}.

## GitHub Actions

{% data reusables.actions.actions-not-verified %}

Pour en savoir plus sur la publication de {% data variables.product.prodname_actions %} dans {% data variables.product.prodname_marketplace %}, consultez « [Publication d’actions sur la Place de marché GitHub](/actions/creating-actions/publishing-actions-in-github-marketplace) ».

## Applications

Toute personne peut partager ses applications avec d’autres utilisateurs gratuitement sur {% data variables.product.prodname_marketplace %}, mais seules des organisations peuvent vendre des applications leur appartenant. 

Pour publier des plans payants pour votre application et afficher un badge de la Place de marché, vous devez suivre le processus de vérification de l’éditeur. Pour plus d’informations, consultez « [Demande de vérification d’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) » ou « [Conditions requises pour le référencement d’une application](/developers/github-marketplace/requirements-for-listing-an-app) ».

Une fois que l’organisation répond aux exigences, une personne disposant d’autorisations de propriétaire dans l’organisation peut publier des plans payants pour n’importe laquelle de ses applications. Chaque application avec un plan payant passe également par un processus d’intégration financière pour permettre les paiements.

Pour publier des applications avec des plans gratuits, il vous suffit de remplir les conditions générales requises pour référencer toute application. Pour plus d’informations, consultez « [Conditions requises pour tous les référencements sur la Place de marché GitHub](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings) ».

### Vous débutez avec les applications ?

Si vous vous intéressez à la création d’applications pour {% data variables.product.prodname_marketplace %} mais débutez avec {% data variables.product.prodname_github_apps %} ou {% data variables.product.prodname_oauth_apps %}, consultez « [Génération d’{% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) » ou « [Génération d’{% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps) ».

### {% data variables.product.prodname_github_apps %} et {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}, bien que vous puissiez répertorier OAuth et {% data variables.product.prodname_github_apps %} dans {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Différences entre {% data variables.product.prodname_github_apps %} et {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/) » et « [Migration de {% data variables.product.prodname_oauth_apps %} vers {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/) ».

## Vue d’ensemble de la publication d’une application sur {% data variables.product.prodname_marketplace %}

Une fois que vous avez fini de créer votre application, vous pouvez la partager avec d’autres utilisateurs en la publiant sur{% data variables.product.prodname_marketplace %}. En résumé, le processus est le suivant :

1. Révisez attentivement votre application pour vous assurer qu’elle se comportera comme prévu dans d’autres dépôts et qu’elle respecte les directives en matière de meilleures pratiques. Pour plus d’informations, consultez « [Meilleures pratiques de sécurité pour les applications](/developers/github-marketplace/security-best-practices-for-apps) » et « [Configuration requise pour la description d’une application](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience) ».

1. Ajoutez des événements de webhook à l’application pour suivre les demandes de facturation des utilisateurs. Pour plus d’informations sur l’API {% data variables.product.prodname_marketplace %}, les événements de webhook et les demandes de facturation, consultez « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

1. Créez un brouillon de référencement {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Créez un brouillon de référencement](/developers/github-marketplace/drafting-a-listing-for-your-app) ».

1. Ajoutez un plan tarifaire. Pour plus d’informations, consultez « [Définition des plans tarifaires pour votre référencement](/developers/github-marketplace/setting-pricing-plans-for-your-listing) ».

1. Lisez et acceptez les conditions du « [Contrat de développeur {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement). »

1. Soumettez votre référencement pour publication dans {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Soumission de votre référencement pour publication](/developers/github-marketplace/submitting-your-listing-for-publication) ».

## Visualisation des performances de votre application

Vous pouvez accéder à des métriques et transactions de votre référencement. Pour plus d'informations, consultez les pages suivantes :

- « [Affichage des métriques de votre référencement](/developers/github-marketplace/viewing-metrics-for-your-listing) »
- « [Affichage des transactions de votre référencement](/developers/github-marketplace/viewing-transactions-for-your-listing) »

## Contact du support 

Si vous avez des questions sur {% data variables.product.prodname_marketplace %}, contactez directement {% data variables.contact.contact_support %}.
