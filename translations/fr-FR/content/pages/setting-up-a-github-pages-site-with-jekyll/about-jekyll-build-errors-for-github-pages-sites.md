---
title: À propos des erreurs de build Jekyll pour les sites GitHub Pages
intro: 'Si Jekyll rencontre une erreur lors de la génération de votre site {% data variables.product.prodname_pages %} en local ou sur {% data variables.product.product_name %}, vous recevez un message d’erreur avec davantage d’informations.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648238'
---
## À propos des erreurs de build Jekyll

{% ifversion pages-custom-workflow %}Si vous publiez à partir d’une branche, parfois{% else %}Parfois,{% endif %} {% data variables.product.prodname_pages %} ne tente pas de générer votre site après que vous avez poussé vos changements vers la source de publication de votre site.{% ifversion fpt or ghec %}
- La personne qui a poussé les changements n’a pas vérifié son adresse e-mail. Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) ».{% endif %}
- Vous poussez avec une clé de déploiement. Si vous souhaitez automatiser les poussées vers le dépôt de votre site, vous pouvez configurer un utilisateur d’ordinateur à la place. Pour plus d’informations, consultez « [Gestion des clés de déploiement](/developers/overview/managing-deploy-keys#machine-users) ».
- Vous utilisez un service CI qui n’est pas configuré pour générer votre source de publication. Par exemple, Travis CI ne génère pas la branche `gh-pages`, sauf si vous ajoutez la branche à une liste sécurisée. Pour plus d’informations, consultez « [Personnalisation de la build](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches) » sur Travis CI ou la documentation de votre service CI.

{% note %}

**Remarque :** La publication des changements de votre site peut prendre jusqu’à 10 minutes après les avoir poussés vers {% data variables.product.product_name %}.

{% endnote %}

{% ifversion build-pages-with-actions %} Si Jekyll tente de générer votre site et rencontre une erreur, vous recevez un message d’erreur de build.
{% else %} Si Jekyll tente de générer votre site et rencontre une erreur, vous recevez un message d’erreur de build. Il existe deux principaux types de messages d’erreur de build Jekyll.
- Un message « Avertissement de génération de page » signifie que votre build s’est terminée correctement, mais que vous devrez peut-être apporter des changements pour éviter des problèmes à venir.
- Un message « Échec de génération de page » signifie que votre build a échoué. Si Jekyll est en mesure de détecter une raison de l’échec, un message d’erreur descriptif s’affiche.
{% endif %}

Pour plus d’informations sur la résolution des erreurs de build, consultez « [Résolution des erreurs de build Jekyll pour les sites {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites) ».

{% ifversion build-pages-with-actions %}
## Affichage des messages d’erreur de build Jekyll avec {% data variables.product.prodname_actions %}

Par défaut, votre site {% data variables.product.prodname_pages %} est généré et déployé avec l’exécution d’un workflow {% data variables.product.prodname_actions %}, sauf si vous avez configuré votre site {% data variables.product.prodname_pages %} pour utiliser un autre outil CI. Pour rechercher des erreurs de build potentielles, vous pouvez vérifier l’exécution du workflow pour votre site {% data variables.product.prodname_pages %} en examinant les exécutions de workflow de votre dépôt. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) ».  Pour plus d’informations sur la réexécutation du workflow en cas d’erreur, consultez « [Réexécution de workflows et de travaux](/actions/managing-workflow-runs/re-running-workflows-and-jobs) ».
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## Affichage des échecs de build de votre dépôt dans {% data variables.product.product_name %}

Vous pouvez voir les échecs de build (mais pas les avertissements de build) pour votre site dans {% data variables.product.product_name %} sous l’onglet **Paramètres** du dépôt de votre site.
{% endif %}

## Affichage des messages d’erreur de build Jekyll en local

Nous vous recommandons de tester votre site en local, ce qui vous permet de voir les messages d’erreur de build sur la ligne de commande et de corriger les échecs de build avant de pousser les changements vers {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Test de votre site {% data variables.product.prodname_pages %} localement avec Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll) ».

## Affichage des messages d’erreur de build Jekyll dans votre demande de tirage

{% ifversion pages-custom-workflow %}Si vous publiez à partir d’une branche, quand{% else %}Quand{% endif %} vous créez une demande de tirage pour mettre à jour votre source de publication sur {% data variables.product.product_name %}, vous pouvez voir des messages d’erreur de build sous l’onglet **Vérifications** de la demande de tirage. Pour plus d’informations, consultez « [À propos des vérifications d’état](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) ».

{% ifversion pages-custom-workflow %} Si vous publiez avec un workflow {% data variables.product.prodname_actions %} personnalisé afin de voir les messages d’erreur de build dans votre demande de tirage, vous devez configurer votre workflow pour qu’il s’exécute sur le déclencheur `pull_request`. Lorsque vous effectuez cette opération, nous vous recommandons d’ignorer les étapes de déploiement si le workflow a été déclenché par l’événement `pull_request`. Cela vous permet de voir les erreurs de build sans déployer les modifications de votre demande de tirage sur votre site. Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows#pull_request) » et « [Expressions](/actions/learn-github-actions/expressions) ».{% endif %}

## Affichage des erreurs de build Jekyll par e-mail

{% ifversion pages-custom-workflow %}Si vous publiez à partir d’une branche, quand{% else %}Quand{% endif %} vous poussez des changements vers votre source de publication sur {% data variables.product.product_name %}, {% data variables.product.prodname_pages %} tente de générer votre site. Si la build échoue, vous recevez un e-mail dans votre adresse e-mail principale. {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %} Si vous publiez avec un workflow {% data variables.product.prodname_actions %} personnalisé afin de recevoir les e-mails sur les erreurs de build dans votre demande de tirage, vous devez configurer votre workflow pour qu’il s’exécute sur le déclencheur `pull_request`. Lorsque vous effectuez cette opération, nous vous recommandons d’ignorer les étapes de déploiement si le workflow a été déclenché par l’événement `pull_request`. Cela vous permet de voir les erreurs de build sans déployer les modifications de votre demande de tirage sur votre site. Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows#pull_request) » et « [Expressions](/actions/learn-github-actions/expressions) ».{% endif %}

## Affichage des messages d’erreur de build Jekyll dans votre demande de tirage avec un service CI tiers

Vous pouvez configurer un service tiers, tel que [Travis CI](https://travis-ci.org/), pour afficher les messages d’erreur après chaque commit.

1. Si ce n’est déjà fait, ajoutez un fichier appelé _Gemfile_ à la racine de votre source de publication, avec le contenu suivant :
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Configurez le dépôt de votre site pour le service de test de votre choix. Par exemple, pour utiliser [Travis CI](https://travis-ci.org/), ajoutez un fichier appelé _.travis.yml_ à la racine de votre source de publication, avec le contenu suivant :
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Vous devrez peut-être activer votre dépôt avec le service de test tiers. Pour plus d’informations, consultez la documentation de votre service de test.
