---
title: Utilisation de workflows de démarrage
intro: '{% data variables.product.product_name %} fournit des workflows de démarrage pour divers langages et outils.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: 7159ce204b89287f86846cf79001657682f6d18d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146179838'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des workflows de démarrage

{% data variables.product.product_name %} propose des workflows de démarrage pour divers langages et outils. Lorsque vous configurez des workflows dans votre dépôt, {% data variables.product.product_name %} analyse le code de votre dépôt et recommande des workflows basés sur le langage et le framework de votre dépôt. Par exemple, si vous utilisez [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} suggère un workflow de démarrage qui installe vos packages Node.js et exécute vos tests.{% ifversion actions-starter-template-ui %} Vous pouvez utiliser les fonctionnalités de recherche et de filtrage pour rechercher les workflows de démarrage pertinents.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

Vous pouvez aussi créer votre propre workflow de démarrage pour le partager avec votre organisation. Ces workflows de démarrage s’affichent en même temps que les workflows de démarrage fournis par {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Création de workflows de démarrage pour votre organisation](/actions/learn-github-actions/creating-starter-workflows-for-your-organization) ».

## Utilisation de workflows de démarrage

Toute personne disposant d’une autorisation en écriture sur un dépôt peut configurer des workflows de démarrage de {% data variables.product.prodname_actions %} pour CI/CD ou d’autres automatisations.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Si vous disposez déjà d’un workflow dans votre dépôt, cliquez sur **Nouveau workflow**.
1. La page « {% ifversion actions-starter-template-ui %}Choisir un workflow{% else %}Choisir un modèle de workflow{% endif %} » présente une sélection de workflows de démarrage recommandés. Recherchez le workflow de démarrage que vous souhaitez utiliser, puis cliquez sur {% ifversion actions-starter-template-ui %}**Configurer**{% else %}**Configurer ce workflow**{% endif %}.{% ifversion actions-starter-template-ui %} Pour trouver plus facilement le workflow de démarrage souhaité, vous pouvez effectuer une recherche par mots clés ou filtrer les résultats par catégorie.{% endif %}

   {% ifversion actions-starter-template-ui %}![Configurer ce workflow](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Configurer ce workflow](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. Si le workflow de démarrage contient des commentaires détaillant des étapes de configuration supplémentaires, suivez ces étapes. Il existe des guides pour la plupart des workflows de démarrage. Pour plus d’informations, consultez les [guides {% data variables.product.prodname_actions %}](/actions/guides).
1. Certains workflows de démarrage utilisent des secrets. Par exemple, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Si le workflow de démarrage utilise un secret, stockez la valeur décrite dans le nom du secret comme secret dans votre dépôt. Pour plus d’informations, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».
1. Si vous le souhaitez, apportez des modifications supplémentaires. Par exemple, vous pouvez modifier la valeur de `on` pour changer le moment d’exécution du workflow.
1. Cliquez sur **Commencer le commit**.
1. Écrivez un message de commit et décidez s’il faut effectuer le commit directement dans la branche par défaut ou ouvrir une demande de tirage (pull request).

## Pour aller plus loin

- « [À propos de l’intégration continue](/articles/about-continuous-integration) »
- « [Gestion des exécutions de workflow](/actions/managing-workflow-runs) »
- « [À propos du monitoring et de la résolution des problèmes](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting) »
- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) » {% ifversion fpt or ghec %}
- « [Gestion de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) » {% endif %}
