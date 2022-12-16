---
title: Configuration d’une source de publication pour votre site GitHub Pages
intro: '{% ifversion pages-custom-workflow %}Vous pouvez configurer votre site {% data variables.product.prodname_pages %} à publier quand des changements sont poussés vers une branche spécifique, ou vous pouvez écrire un workflow {% data variables.product.prodname_actions %} pour publier votre site.{% else%}Si vous utilisez la source de publication par défaut pour votre site {% data variables.product.prodname_pages %}, celui-ci est publié automatiquement. Vous pouvez également choisir de publier votre site à partir d’une autre branche ou d’un autre dossier.{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529638'
---
## À propos des sources de publication

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Publication à partir d’une branche

1. Assurez-vous que la branche que vous souhaitez utiliser comme source de publication existe déjà dans votre dépôt.
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. Sous « Génération et déploiement », sous « Source », sélectionnez **Déployer à partir d’une branche**.
1. Sous « Génération et déploiement », sous « Branche », utilisez le menu déroulant **Aucune** ou **Branche** et sélectionnez une source de publication.

   ![Menu déroulant pour sélectionner une source de publication](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. Sous « {% data variables.product.prodname_pages %} », utilisez le menu déroulant **Aucune** ou **Branche**, puis sélectionnez une source de publication.
  ![Menu déroulant pour sélectionner une source de publication](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. Si vous le souhaitez, utilisez le menu déroulant afin de sélectionner un dossier pour votre source de publication.
  ![Menu déroulant pour sélectionner un dossier pour la publication de la source](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Cliquez sur **Enregistrer**.
  ![Bouton pour enregistrer les modifications apportées aux paramètres de source de publication](/assets/images/help/pages/publishing-source-save.png)

### Résolution des problèmes de publication à partir d’une branche

{% data reusables.pages.admin-must-push %}

Si vous choisissez le dossier `docs` sur n’importe quelle branche comme source de publication, supprimez ultérieurement le dossier `/docs` de cette branche dans votre référentiel, votre site ne sera pas généré et vous recevrez un message d’erreur de génération de page en raison d’un dossier `/docs` manquant. Pour plus d’informations, consultez « [Résolution des erreurs de build Jekyll pour les sites {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder) ».

{% ifversion build-pages-with-actions %}

Votre site{% data variables.product.prodname_pages %} sera toujours déployé avec une exécution d’un workflow {% data variables.product.prodname_actions %}, même si vous avez configuré votre site {% data variables.product.prodname_pages %} pour être créé à l’aide d’un autre outil CI. La plupart des workflows CI externes se « déploient » sur GitHub Pages en validant la sortie de build sur la branche `gh-pages` du référentiel, et incluent généralement un fichier `.nojekyll`. Lorsque cela se produit, le workflow {% data variables.product.prodname_actions %} détecte l’état que la branche n’a pas besoin d’une étape de build et exécute uniquement les étapes nécessaires pour déployer le site sur les serveurs {% data variables.product.prodname_pages %}.

Pour rechercher des erreurs potentielles avec la génération ou le déploiement, vous pouvez vérifier l’exécution du workflow pour votre site {% data variables.product.prodname_pages %} en examinant les exécutions de workflow de votre référentiel. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) ». Pour plus d’informations sur la réexécutation du workflow en cas d’erreur, consultez « [Réexécution de workflows et de travaux](/actions/managing-workflow-runs/re-running-workflows-and-jobs) ».

{% endif %}

{% ifversion pages-custom-workflow %}

## Publication avec un workflow {% data variables.product.prodname_actions %} personnalisé

{% data reusables.pages.pages-custom-workflow-beta %}

Pour configurer votre site à publier avec {% data variables.product.prodname_actions %} :

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Sous « Génération et déploiement », sous « Source », sélectionnez **GitHub Actions**.
1. {% data variables.product.product_name %} propose plusieurs workflows de démarrage. Si vous disposez déjà d’un workflow pour publier votre site, vous pouvez ignorer cette étape. Sinon, choisissez l’une des options permettant de créer un workflow {% data variables.product.prodname_actions %}. Pour plus d’informations sur la création de votre workflow personnalisé, consultez « [Création d’un workflow {% data variables.product.prodname_actions %} personnalisé pour publier votre site](#creating-a-custom-github-actions-workflow-to-publish-your-site) ».

   {% data variables.product.prodname_pages %} n’associe pas de workflow spécifique aux paramètres {% data variables.product.prodname_pages %}. Toutefois, les paramètres {% data variables.product.prodname_pages %} sont liés à l’exécution du workflow qui a déployé votre site le plus récemment.

### Création d’un workflow {% data variables.product.prodname_actions %} personnalisé pour publier votre site

Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez « [Actions](/actions) ».

Lorsque vous configurez votre site à publier avec {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} propose des workflows de démarrage pour des scénarios de publication courants. Le flux général d’un workflow est le suivant :

1. Se déclencher chaque fois qu’il y a une poussée vers la branche par défaut du dépôt ou chaque fois qu’une demande de tirage qui cible la branche par défaut est ouverte, rouverte ou mise à jour.
1. Utiliser l’action [`actions/checkout`](https://github.com/actions/checkout) pour extraire le contenu du dépôt.
1. Si votre site le demande, générer les fichiers de sites statiques.
1. Utiliser l’action [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) pour charger les fichiers statiques en tant qu’artefact.
1. Si le workflow a été déclenché par une poussée vers la branche par défaut, utilisez l’action [`actions/deploy-pages`](https://github.com/actions/deploy-pages) pour déployer l’artefact. Cette étape est ignorée si le workflow a été déclenché par une demande de tirage.

Les workflows de démarrage utilisent un environnement de déploiement appelé `github-pages`. Si votre dépôt n’inclut pas déjà un environnement appelé `github-pages`, l’environnement est créé automatiquement. Nous vous recommandons d’ajouter une règle de protection de l’environnement afin que seule la branche par défaut puisse être déployée sur cet environnement. Pour plus d’informations, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/targeting-different-environments/using-environments-for-deployment) ».

{% note %}

**Remarque** : Un fichier `CNAME` dans votre fichier de dépôt n’ajoute ni ne supprime automatiquement un domaine personnalisé. Au lieu de cela, vous devez configurer le domaine personnalisé via vos paramètres de dépôt ou via l’API. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site GitHub Pages](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) » et la [documentation de référence de l’API Pages](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Résolution des problèmes de publication avec un workflow {% data variables.product.prodname_actions %} personnalisé

Pour obtenir des informations sur la résolution des problèmes liés à votre workflow {% data variables.product.prodname_actions %}, consultez « [À propos de la supervision et de la résolution des problèmes](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting) ».

{% endif %}
