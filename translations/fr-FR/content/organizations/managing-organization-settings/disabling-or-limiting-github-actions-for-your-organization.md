---
title: Désactivation ou limitation de la fonctionnalité GitHub Actions pour votre organisation
intro: 'Les propriétaires d’organisation peuvent désactiver, activer et limiter GitHub Actions pour une organisation.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b72b1e412906b1a2ec7520a9c939d5adefee7dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064681'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des autorisations {% data variables.product.prodname_actions %} de votre organisation

{% data reusables.actions.disabling-github-actions %} Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez « [À propos de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions) ».

Vous pouvez activer {% data variables.product.prodname_actions %} pour tous les référentiels de votre organisation. {% data reusables.actions.enabled-actions-description %} Vous pouvez désactiver {% data variables.product.prodname_actions %} pour tous les référentiels de votre organisation. {% data reusables.actions.disabled-actions-description %}

Vous pouvez également activer {% data variables.product.prodname_actions %} pour tous les référentiels de votre organisation, mais limiter les actions {% ifversion actions-workflow-policy %}et les workflows réutilisables{% endif %} qu’un workflow peut exécuter.

## Gestion des autorisations {% data variables.product.prodname_actions %} de votre organisation

Vous pouvez choisir de désactiver {% data variables.product.prodname_actions %} pour tous les référentiels de votre organisation, ou de n’autoriser que certains référentiels. Vous pouvez également limiter l’utilisation des actions publiques{% ifversion actions-workflow-policy %} et des workflows réutilisables{% endif %} afin que les utilisateurs ne puissent utiliser que les actions locales {% ifversion actions-workflow-policy %}et les workflows réutilisables{% endif %} disponibles dans votre {% ifversion ghec or ghes or ghae %}entreprise{% else %}organisation{% endif %}.

{% note %}

**Remarque :** vous ne pourrez peut-être pas gérer ces paramètres si votre organisation est gérée par une entreprise qui dispose d’une stratégie de remplacement. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise) ».

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Sous « Stratégies », sélectionnez une option.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Définir la stratégie d’actions de cette organisation](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![Définir la stratégie d’actions de cette organisation](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. Cliquez sur **Enregistrer**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Sous « Stratégies », sélectionnez {% data reusables.actions.policy-label-for-select-actions-workflows %} et ajoutez vos actions requises{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} à la liste.

   {% ifversion actions-workflow-policy %} ![Ajouter des actions et des workflows réutilisables à la liste verte](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Ajouter des actions à la liste verte](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![Ajouter des actions à la liste verte](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. Cliquez sur **Enregistrer**.

{% ifversion fpt or ghec %}
## Configuration de l’approbation requise pour les workflows provenant de duplications (forks) publiques

{% data reusables.actions.workflow-run-approve-public-fork %}

Vous pouvez configurer ce comportement pour une organisation en suivant la procédure ci-dessous. La modification de ce paramètre remplace la configuration définie au niveau de l’entreprise.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Activation des workflows pour les duplications de référentiel privé

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Si une stratégie est désactivée pour une entreprise, elle ne peut pas être activée pour des organisations.{% endif %} Si une stratégie est désactivée pour une organisation, elle ne peut pas être activée pour des référentiels. Si une organisation active une stratégie, celle-ci peut être désactivée pour des référentiels individuels.

{% data reusables.actions.private-repository-forks-options %}

### Configuration de la stratégie de duplication privée d’une organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## Définition des autorisations `GITHUB_TOKEN` de votre organisation

{% data reusables.actions.workflow-permissions-intro %}

Vous pouvez définir les autorisations `GITHUB_TOKEN` par défaut dans les paramètres de votre organisation ou de vos référentiels. Si vous sélectionnez une option restrictive comme option par défaut dans les paramètres de votre organisation, la même option est sélectionnée dans les paramètres des référentiels de votre organisation, et l’option permissive est désactivée. Si votre organisation appartient à un compte {% data variables.product.prodname_enterprise %} et qu’une option par défaut plus restrictive a été sélectionnée dans les paramètres d’entreprise, vous ne pouvez pas sélectionner l’option par défaut plus permissive dans les paramètres de votre organisation.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuration des autorisations `GITHUB_TOKEN` par défaut

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} Par défaut, lorsque vous créez une organisation, `GITHUB_TOKEN` ne dispose que d’un accès en lecture pour l’étendue `contents`.
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Sous « Autorisations liées aux workflows », spécifiez si vous souhaitez que `GITHUB_TOKEN` ait un accès en lecture et écriture pour toutes les étendues ou simplement un accès en lecture pour l’étendue `contents`.

   ![Définir les autorisations GITHUB_TOKEN de cette organisation](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Cliquez sur **Enregistrer** pour appliquer les paramètres.

{% ifversion allow-actions-to-approve-pr %}
### Empêcher {% data variables.product.prodname_actions %} {% ifversion allow-actions-to-approve-pr-with-ent-repo %}de créer ou {% endif %}d’approuver des demandes de tirage

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Par défaut, lorsque vous créez une organisation, les workflows ne sont pas autorisés à {% ifversion allow-actions-to-approve-pr-with-ent-repo %}créer ou {% endif %}approuver des demandes de tirage.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Sous « Autorisations liées aux workflows », utilisez le paramètre **Autoriser GitHub Actions à {% ifversion allow-actions-to-approve-pr-with-ent-repo %}créer et {% endif %}approuver des demandes de tirage** pour déterminer si `GITHUB_TOKEN` peut {% ifversion allow-actions-to-approve-pr-with-ent-repo %}créer et {% endif %}approuver des demandes de tirage.

   ![Définir l’autorisation d’approbation de demande de tirage GITHUB_TOKEN de cette organisation](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Cliquez sur **Enregistrer** pour appliquer les paramètres.

{% endif %}
