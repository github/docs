---
title: À propos de l’utilisation d’actions dans votre entreprise
intro: '{% data variables.product.product_name %} inclut la plupart des actions de {% data variables.product.prodname_dotcom %} et dispose d’options permettant d’accéder à d’autres actions de {% data variables.product.prodname_dotcom_the_website %} et {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: 2e18b932548aa7ad9b65c090b6a5418762bcb501
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139007'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des actions dans {% data variables.product.product_name %}

Les workflows {% data variables.product.prodname_actions %} peuvent utiliser des _actions_, qui sont des tâches individuelles que vous pouvez combiner pour créer des travaux et personnaliser vos workflows. Vous pouvez soit créer vos propres actions, soit utiliser et personnaliser celles qui sont partagées par la communauté {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %} Vous pouvez limiter vos développeurs dans l’utilisation des actions stockées dans {% data variables.product.product_location %}, ce qui comprend la plupart des actions officielles créées par {% data variables.product.company_short %} ainsi que celles créées par vos développeurs. Sinon, pour permettre à vos développeurs de profiter de l’ensemble de l’écosystème d’actions créées par les chefs de file du secteur et la communauté open source, vous pouvez configurer l’accès aux autres actions à partir de {% data variables.product.prodname_dotcom_the_website %}. 

Nous vous recommandons d’autoriser l’accès automatique à toutes les actions de {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}Cependant, cela implique de la part de {% data variables.product.product_name %} d’établir des connexions sortantes vers {% data variables.product.prodname_dotcom_the_website %}. Si vous ne voulez pas autoriser ces connexions ou que {% else %}Si{% endif %} vous souhaitez pouvoir mieux contrôler les actions qui sont utilisées dans votre entreprise, vous pouvez synchroniser manuellement des actions spécifiques de {% data variables.product.prodname_dotcom_the_website %}.

## Actions groupées officielles de votre instance d’entreprise

{% data reusables.actions.actions-bundled-with-ghes %}

Voici quelques-unes des actions officielles groupées.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Diverses actions `actions/setup-`

Pour voir toutes les actions officielles incluses dans votre instance d’entreprise, accédez à l’organisation `actions` de votre instance : <code>https://<em>HOSTNAME</em>/actions</code>.

Il n’est pas nécessaire de disposer d’une connexion entre {% data variables.product.product_location %} et {% data variables.product.prodname_dotcom_the_website %} pour pouvoir utiliser ces actions.

Chaque action est un dépôt dans l’organisation `actions`, et chaque dépôt d’actions comprend les étiquettes, les branches et les SHA de commit nécessaires dont peuvent se servir vos workflows pour référencer une action. Pour savoir comment mettre à jour les actions groupées officielles, consultez « [Utilisation de la dernière version des actions groupées officielles](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions) ».

{% note %}

**Remarques :** 
- Quand vous utilisez des actions de configuration (par exemple `actions/setup-LANGUAGE`) sur {% data variables.product.product_name %} avec des exécuteurs auto-hébergés, vous pouvez être amené à configurer le cache d’outils sur les exécuteurs qui n’ont pas d’accès à Internet. Pour plus d’informations, consultez « [Configuration du cache d’outils sur les exécuteurs auto-hébergés sans accès à Internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access) ».
- Lorsque {% data variables.product.product_name %} est mis à jour, les actions groupées sont automatiquement remplacées par des versions par défaut dans le package de mise à niveau.

{% endnote %}

## Configuration de l’accès aux actions de {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

L’approche recommandée est celle qui consiste à activer l’accès automatique à toutes les actions de {% data variables.product.prodname_dotcom_the_website %}. Pour cela, utilisez {% data variables.product.prodname_github_connect %} pour intégrer {% data variables.product.product_name %} à {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect) ». 

{% ifversion ghes %} {% note %}

**Remarque :** Avant de pouvoir configurer l’accès aux actions de {% data variables.product.prodname_dotcom_the_website %}, vous devez configurer {% data variables.product.product_location %} pour utiliser {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server) ».


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Sinon, si vous voulez un contrôle plus strict sur les actions qui sont autorisées dans votre entreprise, ou si vous ne voulez pas autoriser les connexions sortantes vers {% data variables.product.prodname_dotcom_the_website %}, vous pouvez télécharger et synchroniser manuellement les actions dans votre instance d’entreprise à l’aide de l’outil `actions-sync`. Pour plus d’informations, consultez « [Synchronisation manuelle des actions de {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom) ».
