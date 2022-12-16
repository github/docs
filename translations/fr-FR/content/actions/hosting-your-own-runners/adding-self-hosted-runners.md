---
title: Ajout d’exécuteurs auto-hébergés
intro: 'Vous pouvez ajouter un exécuteur auto-hébergé à un dépôt, à une organisation ou à une entreprise.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108557'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Vous pouvez ajouter un exécuteur auto-hébergé à un dépôt, à une organisation ou à une entreprise.

Si vous êtes administrateur d’entreprise ou d’organisation, vous pouvez ajouter vos exécuteurs auto-hébergés au niveau de l’organisation ou de l’entreprise. Cette approche rend l’exécuteur disponible pour plusieurs dépôts dans votre organisation ou votre entreprise, et vous permet également de gérer vos exécuteurs en un emplacement unique.

Pour obtenir des informations sur les systèmes d’exploitation pris en charge pour les exécuteurs auto-hébergés ou l’utilisation d’exécuteurs auto-hébergés avec un serveur proxy, consultez « [À propos des exécuteurs auto-hébergés](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners) ».

{% ifversion not ghae %} {% warning %}

**Avertissement :** {% data reusables.actions.self-hosted-runner-security %}

Pour plus d’informations, consultez « [About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) ».

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

Vous pouvez configurer l’automatisation pour mettre à l’échelle le nombre d’exécuteurs auto-hébergés. Pour plus d’informations, consultez « [Mise à l’échelle automatique avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners) ».

{% endif %}

## Prérequis

{% data reusables.actions.self-hosted-runners-prerequisites %}

## Ajout d’un exécuteur auto-hébergé dans un dépôt

Vous pouvez ajouter des exécuteurs auto-hébergés dans un dépôt individuel. Pour ajouter un exécuteur auto-hébergé dans un dépôt utilisateur, vous devez être propriétaire du dépôt. Pour un dépôt d’organisation, vous devez être propriétaire de l’organisation ou disposer d’un accès administrateur au dépôt. Pour obtenir des informations sur la façon d’ajouter un exécuteur auto-hébergé avec l’API REST, consultez « [Exécuteurs auto-hébergés](/rest/reference/actions#self-hosted-runners) ».

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Cliquez sur **Nouvel exécuteur auto-hébergé**.
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Sous {% ifversion ghes or ghae or ghec %}« Exécuteurs »{% else %}« Exécuteurs auto-hébergés »{% endif %}, cliquez sur **Ajouter un exécuteur**.
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Pour plus d’informations, consultez « [Supervision et résolution des problèmes liés aux exécuteurs auto-hébergés](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners) ».

## Ajout d’un exécuteur auto-hébergé dans une organisation

Vous pouvez ajouter des exécuteurs auto-hébergés au niveau de l’organisation, où ils peuvent être utilisés pour traiter des travaux pour plusieurs dépôts de l’organisation. Pour ajouter un exécuteur auto-hébergé dans une organisation, vous devez être propriétaire de l’organisation. Pour obtenir des informations sur la façon d’ajouter un exécuteur auto-hébergé avec l’API REST, consultez « [Exécuteurs auto-hébergés](/rest/reference/actions#self-hosted-runners) ».

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %}1. Cliquez sur **Nouvel exécuteur**, puis sur **Nouvel exécuteur auto-hébergé**.{% else %}1. Cliquez sur **Nouvel exécuteur**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. Sous {% ifversion ghes or ghae %}« Exécuteurs », cliquez sur **Ajouter nouveau**, puis sur **Nouvel exécuteur**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Pour plus d’informations, consultez « [Supervision et résolution des problèmes liés aux exécuteurs auto-hébergés](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners) ».

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## Ajout d’un exécuteur auto-hébergé dans une entreprise

{% ifversion fpt %}Si vous utilisez {% data variables.product.prodname_ghe_cloud %}, vous{% elsif ghec or ghes or ghae %}Vous{% endif %} pouvez ajouter des exécuteurs auto-hébergés dans une entreprise, où ils peuvent être affectés à plusieurs organisations. Les administrateurs des organisations peuvent ensuite contrôler les dépôts qui peuvent l’utiliser. {% ifversion fpt %}Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise).{% endif %}

{% ifversion ghec or ghes or ghae %} Les nouveaux exécuteurs sont affectés au groupe par défaut. Vous pouvez modifier le groupe de l’exécuteur une fois que vous avez inscrit l’exécuteur. Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group) ».

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

Pour ajouter un exécuteur auto-hébergé dans une entreprise, vous devez être propriétaire de l’entreprise. Pour obtenir des informations sur la façon d’ajouter un exécuteur auto-hébergé avec l’API REST, consultez les points de terminaison de l’entreprise dans l’[API REST {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

Pour plus d’informations, consultez « [Supervision et résolution des problèmes liés aux exécuteurs auto-hébergés](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners) ».

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Rendre des exécuteurs d’entreprise disponibles pour des dépôts

Par défaut, les exécuteurs figurant dans le groupe d’exécuteurs auto-hébergés « Par défaut » d’une entreprise sont disponibles pour toutes les organisations de l’entreprise, mais ne sont pas disponibles pour tous les dépôts dans chaque organisation.

Pour rendre un groupe d’exécuteurs auto-hébergés au niveau de l’entreprise disponibles pour un dépôt d’une organisation, vous pouvez être amené à modifier les paramètres hérités de l’organisation pour le groupe d’exécuteurs afin de rendre disponibles les exécuteurs pour les dépôts de l’organisation.

Pour plus d’informations sur la modification des paramètres d’accès aux groupes d’exécuteurs, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés à l’aide de groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Pour aller plus loin

- « [Bien démarrer avec les exécuteurs auto-hébergés pour votre entreprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise) »

{% endif %}
