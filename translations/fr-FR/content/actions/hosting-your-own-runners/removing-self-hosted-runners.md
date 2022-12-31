---
title: Suppression d’exécuteurs auto-hébergés
intro: 'Vous pouvez supprimer définitivement un exécuteur autohébergé d’un dépôt{% ifversion fpt %} ou d’une organisation{% elsif ghec or ghes or gahe %}, d’une organisation ou d’une entreprise{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
ms.openlocfilehash: d47a2e348f2d1a79342934e70115314d9e62f6f0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086685'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Suppression d’un exécuteur d’un dépôt

{% note %}

**Remarque :** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Pour supprimer un exécuteur auto-hébergé d’un dépôt utilisateur, vous devez être propriétaire du dépôt. Pour un dépôt d’organisation, vous devez être propriétaire de l’organisation ou disposer d’un accès administrateur au dépôt. Nous vous recommandons également d’avoir accès à la machine de l’exécuteur auto-hébergé. Pour obtenir des informations sur la façon de supprimer un exécuteur auto-hébergé avec l’API REST, consultez « [Exécuteurs auto-hébergés](/rest/reference/actions#self-hosted-runners) ».

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Suppression d’un exécuteur d’une organisation

{% note %}

**Remarque :** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Pour supprimer un exécuteur auto-hébergé d’une organisation, vous devez être propriétaire de l’organisation. Nous vous recommandons également d’avoir accès à la machine de l’exécuteur auto-hébergé. Pour obtenir des informations sur la façon de supprimer un exécuteur auto-hébergé avec l’API REST, consultez « [Exécuteurs auto-hébergés](/rest/reference/actions#self-hosted-runners) ».

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghes > 3.3 or ghec %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghes < 3.4 or ghae %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Suppression d’un exécuteur d’une entreprise

{% ifversion fpt %} Si vous utilisez {% data variables.product.prodname_ghe_cloud %}, vous pouvez également supprimer des exécuteurs d’une entreprise. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %} {% ifversion ghec or ghes or ghae %} {% note %}

**Remarque :** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Pour supprimer un exécuteur auto-hébergé d’une entreprise, vous devez être propriétaire de l’entreprise. Nous vous recommandons également d’avoir accès à la machine de l’exécuteur auto-hébergé. Pour obtenir des informations sur la façon de supprimer un exécuteur auto-hébergé avec l’API REST, consultez les points de terminaison de l’entreprise dans l’[API REST {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %} {% endif %}
