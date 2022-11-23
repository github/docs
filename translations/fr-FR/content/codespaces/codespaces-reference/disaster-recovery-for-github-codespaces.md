---
title: Reprise d’activité pour GitHub Codespaces
intro: 'Cet article fournit des conseils pour un scénario de reprise d’activité, dans lequel une région entière connaît une panne en raison d’une catastrophe naturelle majeure ou d’une interruption de service importante.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: Disaster recovery
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
ms.openlocfilehash: 9b892d6a24332e01174c819e2e88a91d1cdf9d65
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158812'
---
Nous travaillons dur pour garantir que {% data variables.product.prodname_github_codespaces %} est toujours disponible pour vous. Toutefois, des forces indépendantes de notre volonté ont parfois un impact sur le service, susceptible d’entraîner des interruptions de service non planifiées.

Bien que les scénarios de récupération d’urgence soient rares, nous vous recommandons de vous préparer à la possibilité d’une panne d’une région entière. Si une région entière est confrontée à une interruption de service, les copies localement redondantes de vos données sont temporairement indisponibles.

L’aide suivante fournit des options sur la façon de gérer les interruptions de service dans toute la région où votre codespace est déployé.

{% note %}

**Remarque :** vous pouvez réduire l’impact potentiel des pannes à l’échelle du service en effectuant souvent un envoi (push) à des dépôts distants.

{% endnote %}

## Option 1 : Créer un codespace dans une autre région

Dans le cas d’une panne régionale, nous vous suggérons de recréer votre codespace dans une région non affectée pour continuer à travailler. Ce nouveau codespace inclura toutes les modifications apportées jusqu’à votre dernier envoi (push) à {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur la définition manuelle d’une autre région, consultez « [Définition de votre région par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces) ».

Vous pouvez optimiser le temps de récupération en configurant un `devcontainer.json` dans le dépôt du projet, qui vous permet de définir les outils, runtimes, infrastructures, paramètres d’éditeur, extensions et autres configurations nécessaires pour restaurer automatiquement l’environnement de développement. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project) ».

## Option 2 : Attendre la récupération

Dans ce cas, aucune action n’est requise de votre part. Soyez assuré que nous travaillons assidûment à la restauration de la disponibilité du service. 

Vous pouvez vérifier l’état actuel du service sur le [tableau de bord État](https://www.githubstatus.com/).

## Option 3 : Cloner le dépôt localement ou le modifier dans le navigateur

Bien que {% data variables.product.prodname_github_codespaces %} offre l’avantage d’un environnement de développement préconfiguré, votre code source doit toujours être accessible via le dépôt hébergé sur {% data variables.product.prodname_dotcom_the_website %}. En cas de panne de {% data variables.product.prodname_github_codespaces %}, vous pouvez toujours cloner le dépôt localement ou modifier des fichiers dans l’éditeur du navigateur {% data variables.product.company_short %}. Pour plus d’informations, consultez « [Modification des fichiers](/repositories/working-with-files/managing-files/editing-files) ».

Si cette option ne configure pas un environnement de développement pour vous, elle vous permet d’apporter des modifications à votre code source en fonction des besoins pendant que vous attendez la résolution de l’interruption de service.

## Option 4 : Utiliser l’extension Dev Containers et Docker pour un environnement conteneurisé local

Si votre dépôt contient un `devcontainer.json`, envisagez d’utiliser l’[extension Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) dans {% data variables.product.prodname_vscode %} pour générer un build et l’attacher à un conteneur de développement local pour votre dépôt. Le temps de configuration de cette option varie en fonction de vos spécifications locales et de la complexité de la configuration de votre conteneur de développement. Pour plus d’informations, consultez « [Développement à l’intérieur d’un conteneur](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Remarque :** assurez-vous que votre configuration locale répond aux [exigences minimales](https://code.visualstudio.com/docs/remote/containers#_system-requirements) avant de tenter cette option.

{% endnote %}
