---
title: Comprendre GitHub Actions
shortTitle: Understanding GitHub Actions
intro: 'Apprenez les bases de {% data variables.product.prodname_actions %}, y compris les concepts de base et la terminologie essentielle.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: b1e82506da6ede65b5ab93f94ce67dee681f81f1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147763571'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

{% data reusables.actions.about-actions %}  Vous pouvez créer des workflows qui créent et testent chaque demande de tirage (pull request) adressée à votre dépôt, ou déployer des demandes de tirage fusionnées en production.

{% data variables.product.prodname_actions %} dépasse DevOps simplement et vous permet d’exécuter des workflows lorsque d’autres événements se produisent dans votre dépôt. Par exemple, vous pouvez exécuter un workflow pour ajouter automatiquement les étiquettes appropriées chaque fois que quelqu’un crée un problème dans votre dépôt.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} fournit des machines virtuelles Linux, Windows et macOS pour exécuter vos workflows, ou vous pouvez héberger vos propres exécuteurs auto-hébergés dans votre propre centre de données ou infrastructure cloud.

{% elsif ghes or ghae %}

Vous devez héberger vos propres machines virtuelles Linux, Windows ou macOS pour exécuter des workflows pour {% data variables.product.product_location %}. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Pour plus d’informations sur l’introduction de {% data variables.product.prodname_actions %} dans votre entreprise, consultez « [Introduction de {% data variables.product.prodname_actions %} dans votre entreprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise) ».

{% endif %}

## Composants de {% data variables.product.prodname_actions %}

Vous pouvez configurer un _workflow_ {% data variables.product.prodname_actions %} à déclencher quand un _événement_ se produit dans votre dépôt, par exemple l’ouverture d’une demande de tirage (pull request) ou la création d’un problème.  Votre workflow contient un ou plusieurs _travaux_ qui peuvent s’exécuter dans un ordre séquentiel ou en parallèle.  Chaque travail s’exécute au sein de son propre _exécuteur_ de machine virtuelle, ou au sein d’un conteneur, et comporte une ou plusieurs _étapes_ qui exécutent un script que vous définissez ou une _action_, qui est une extension réutilisable qui peut simplifier votre workflow.

![Vue d’ensemble du workflow](/assets/images/help/images/overview-actions-simple.png)

### Workflows

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Vous pouvez référencer un workflow au sein d’un autre workflow. Consultez « [Réutilisation des workflows](/actions/learn-github-actions/reusing-workflows) ».{% endif %}

Pour plus d’informations sur les workflows, consultez « [Utilisation de workflows](/actions/using-workflows) ».

### Événements

Un événement est une activité spécifique dans un dépôt qui déclenche l’exécution d’un workflow. Par exemple, l’activité peut provenir de {% data variables.product.prodname_dotcom %} quand quelqu’un crée une demande de tirage (pull request), ouvre un problème ou pousse (push) un commit vers un dépôt.  Vous pouvez également déclencher une exécution de workflow selon une planification, en [publiant dans une API REST](/rest/reference/repos#create-a-repository-dispatch-event) ou manuellement.

Pour obtenir la liste complète des événements qui peuvent être utilisés pour déclencher des workflows, consultez [Événements déclencheurs de workflows](/actions/reference/events-that-trigger-workflows).

### travaux

Un travail est un ensemble d’_étapes_ dans un workflow qui s’exécutent sur le même exécuteur.  Chaque étape est un script d’interpréteur de commandes qui sera exécuté ou une _action_ qui sera exécutée.  Les étapes sont exécutées dans l’ordre et dépendent les unes des autres.  Comme chaque étape est exécutée sur le même exécuteur, vous pouvez partager des données d’une étape à une autre.  Par exemple, vous pouvez avoir une étape qui génère votre application suivie d’une étape qui teste l’application générée.

Vous pouvez configurer les dépendances d’un travail avec d’autres travaux. Par défaut, les travaux n’ont aucune dépendance et s’exécutent en parallèle entre eux.  Lorsqu’un travail prend une dépendance sur un autre travail, il attend que le travail dépendant se termine avant de pouvoir s’exécuter.  Par exemple, vous pouvez avoir plusieurs travaux de génération pour différentes architectures qui n’ont pas de dépendances, et un travail d’empaquetage dépendant de ces travaux.  Les travaux de génération s’exécutent en parallèle et le travail d’empaquetage s’exécutera quand ils auront fini de s’exécuter.

Pour plus d’informations sur les travaux, consultez « [Utilisation de travaux](/actions/using-jobs) ».

### Actions

Une _action_ est une application personnalisée pour la plateforme {% data variables.product.prodname_actions %} qui effectue une tâche complexe mais fréquemment répétée.  Utilisez une action pour réduire la quantité de code répétitif que vous écrivez dans vos fichiers de workflow.  Une action peut tirer (pull) votre dépôt git à partir de {% data variables.product.prodname_dotcom %}, configurer la chaîne d’outils appropriée pour votre environnement de build ou configurer l’authentification auprès de votre fournisseur de cloud.

Vous pouvez écrire vos propres actions ou trouver des actions à utiliser dans vos workflows dans le {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

Pour plus d’informations, consultez « [Création d’actions](/actions/creating-actions) ».

### Exécuteurs

{% data reusables.actions.about-runners %} Chaque exécuteur peut exécuter un seul travail à la fois. {% ifversion ghes or ghae %} Vous devez héberger vos propres exécuteurs pour {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} fournit les exécuteurs Ubuntu Linux, Microsoft Windows et macOS pour exécuter vos workflows. Chaque exécution de workflow s’exécute sur une machine virtuelle nouvellement provisionnée. {% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} propose également des {% data variables.actions.hosted_runner %}, qui sont disponibles dans des configurations plus grandes. Pour plus d’informations, consultez « [Utilisation des {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners) ». {% endif %}Si vous avez besoin d’un système d’exploitation différent ou d’une configuration matérielle spécifique, vous pouvez héberger vos propres exécuteurs. {% endif %} Pour plus d’informations{% ifversion fpt or ghec %} sur les exécuteurs auto-hébergés{% endif %}, consultez « [Hébergement de vos propres exécuteurs](/actions/hosting-your-own-runners) ».

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Exemples plus complexes
{% data reusables.actions.link-to-example-library %}

## Étapes suivantes

- Pour continuer à découvrir {% data variables.product.prodname_actions %}, consultez « [Recherche et personnalisation d’actions](/actions/learn-github-actions/finding-and-customizing-actions) ».
{% ifversion fpt or ghec or ghes %}
- Pour comprendre le fonctionnement de la facturation pour {% data variables.product.prodname_actions %}, consultez « [À propos de la facturation de {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions) ».
{% endif %}

## Contacter le support

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) »{% endif %}
