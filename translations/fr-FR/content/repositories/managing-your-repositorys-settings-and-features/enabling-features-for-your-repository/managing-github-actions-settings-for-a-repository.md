---
title: Gestion des paramètres de GitHub Actions pour un dépôt
intro: 'Vous pouvez désactiver ou configurer {% data variables.product.prodname_actions %} pour un dépôt spécifique.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80bce0a3f43ccac75215bd738922dc5d79868793
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061127'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des autorisations {% data variables.product.prodname_actions %} pour votre dépôt

{% data reusables.actions.disabling-github-actions %} Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez « [À propos de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions) ».

Vous pouvez activer {% data variables.product.prodname_actions %} pour votre dépôt. {% data reusables.actions.enabled-actions-description %} Vous pouvez désactiver complètement {% data variables.product.prodname_actions %} pour votre dépôt. {% data reusables.actions.disabled-actions-description %}

Vous pouvez également activer {% data variables.product.prodname_actions %} dans votre dépôt, mais limiter les actions {% ifversion actions-workflow-policy %}et les workflows réutilisables{% endif %} qu’un workflow peut exécuter.

## Gestion des autorisations {% data variables.product.prodname_actions %} pour votre dépôt

Vous pouvez désactiver {% data variables.product.prodname_actions %} pour un dépôt ou définir une stratégie qui configure les actions{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} qui peuvent être utilisé(e)s dans le dépôt.

{% note %}

**Remarque :** Vous ne pourrez peut-être pas gérer ces paramètres si votre organisation a une stratégie de substitution ou est gérée par une entreprise qui a remplacé la stratégie. Pour plus d’informations, consultez « [Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) » ou « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise) ».

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Sous « Autorisations d’Actions », sélectionnez une option.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Définir la stratégie d’actions pour ce dépôt](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![Définir la stratégie d’actions pour ce dépôt](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. Cliquez sur **Enregistrer**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Sous « Autorisations d’Actions », sélectionnez {% data reusables.actions.policy-label-for-select-actions-workflows %} et ajoutez vos actions requises à la liste.

   {% ifversion actions-workflow-policy%} ![Ajouter des actions et des workflows réutilisables à la liste verte](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Ajouter des actions à la liste verte](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![Ajouter des actions à la liste verte](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. Cliquez sur **Enregistrer**.

{% ifversion fpt or ghec %}
## Contrôle des modifications entre les duplications (fork) et les workflows dans les dépôts publics

{% data reusables.actions.workflow-run-approve-public-fork %}

Vous pouvez configurer ce comportement pour un dépôt à l’aide de la procédure ci-dessous. La modification de ce paramètre remplace le jeu de configuration défini au niveau de l’organisation ou de l’entreprise.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## Activation des workflows pour les duplications de dépôts privés

{% data reusables.actions.private-repository-forks-overview %}

Si une stratégie est désactivée pour une {% ifversion ghec or ghae or ghes %}entreprise ou{% endif %} organisation, elle ne peut pas être activée pour un dépôt.

{% data reusables.actions.private-repository-forks-options %}

### Configuration de la stratégie de duplication pour un dépôt privé

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## Définition des autorisations du `GITHUB_TOKEN` pour votre dépôt

{% data reusables.actions.workflow-permissions-intro %}

Les autorisations par défaut peuvent également être configurées dans les paramètres de l’organisation. Si votre dépôt appartient à une organisation et qu’une option par défaut plus restrictive a été sélectionnée dans les paramètres de l’organisation, la même option est sélectionnée dans les paramètres de votre dépôt et l’option permissive est désactivée.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuration des autorisations `GITHUB_TOKEN` par défaut

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} Par défaut, quand vous créez un dépôt dans votre compte personnel, `GITHUB_TOKEN` ne dispose que d’un accès en lecture pour l’étendue `contents`. Si vous créez un dépôt dans une organisation, le paramètre est hérité de ce qui est configuré dans les paramètres de l’organisation.
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Sous « Autorisations de workflow », spécifiez si vous souhaitez que `GITHUB_TOKEN` ait un accès en lecture et en écriture pour toutes les étendues, ou juste un accès en lecture pour l’étendue `contents`.

   ![Définir les autorisations GITHUB_TOKEN pour ce dépôt](/assets/images/help/settings/actions-workflow-permissions-repository{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)

1. Cliquez sur **Enregistrer** pour appliquer les paramètres.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Empêcher {% data variables.product.prodname_actions %} de créer ou d’approuver des demandes de tirage

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Par défaut, lorsque vous créez un dépôt dans votre compte personnel, les workflows ne sont pas autorisés à créer ou à approuver des demandes de tirage. Si vous créez un dépôt dans une organisation, le paramètre est hérité de ce qui est configuré dans les paramètres de l’organisation.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Sous « Autorisations de workflow », utilisez le paramètre **Autoriser GitHub Actions à créer et à approuver des demandes de tirage** pour configurer si `GITHUB_TOKEN` peut créer et approuver des demandes de tirage.

   ![Définir les autorisations GITHUB_TOKEN pour ce dépôt](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Cliquez sur **Enregistrer** pour appliquer les paramètres.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Autorisation de l’accès aux composants dans un dépôt interne

Les membres de votre entreprise peuvent utiliser des dépôts internes pour travailler sur des projets sans partager publiquement les informations. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories) ».

Vous pouvez utiliser les étapes ci-dessous pour configurer si les {% ifversion internal-actions%}actions et {% endif %}workflows dans un dépôt interne sont accessibles à partir de l’extérieur du dépôt.{% ifversion internal-actions %} Pour plus d’informations, consultez « [Partage d’actions et de workflows avec votre entreprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise) ». Vous pouvez également utiliser l’API REST pour définir ou obtenir des détails sur le niveau d’accès. Pour plus d’informations, consultez « [Obtenir le niveau d’accès pour les workflows en dehors du dépôt](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository) » et « [Définir le niveau d’accès pour les workflows en dehors du dépôt](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository) ».{% endif %}

1. Sur {% data variables.product.prodname_dotcom %}, accédez à la page principale du dépôt interne.
1. Sous le nom de votre dépôt, cliquez sur {% octicon "gear" aria-label="The gear icon" %} **Paramètres**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Sous **Access**, choisissez l’un des paramètres d’accès :

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Définir l’accès aux composants Actions](/assets/images/help/settings/actions-access-settings.png){% else %}![Définir l’accès aux composants Actions](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Non accessible** : les workflows dans d’autres dépôts ne peuvent pas accéder à ce dépôt.
   * **Accessible à partir de dépôts dans l’organisation « NOM ORGANISATION »**  : {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Les workflows dans d’autres dépôts qui font partie de l’organisation « NOM ORGANISATION » peuvent accéder aux actions et aux workflows dans ce dépôt. L’accès est autorisé uniquement à partir de dépôts privés ou internes.{% else %}Les workflows dans d’autres dépôts peuvent utiliser des workflows dans ce dépôt s’ils font partie de la même organisation et que leur visibilité est privée ou interne.{% endif %}
   * **Accessible à partir de dépôts dans l’entreprise « NOM ENTREPRISE »**  : {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Les workflows dans d’autres dépôts qui font partie de l’entreprise « NOM ENTREPRISE » peuvent accéder aux actions et aux workflows dans ce dépôt. L’accès est autorisé uniquement à partir de dépôts privés ou internes.{% else %}Les workflows dans d’autres dépôts peuvent utiliser des workflows dans ce dépôt s’ils font partie de la même entreprise et que leur visibilité est privée ou interne.{% endif %}
1. Cliquez sur **Enregistrer** pour appliquer les paramètres.
{% endif %}

## Configuration de la durée de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} dans votre dépôt

Vous pouvez configurer la durée de conservation des artefacts et journaux {% data variables.product.prodname_actions %} dans votre dépôt.

{% data reusables.actions.about-artifact-log-retention %}

Vous pouvez également définir une durée de conservation personnalisée pour un artefact spécifique créé par un workflow. Pour plus d’informations, consultez « [Définition de la durée de conservation d’un artefact](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact) ».

## Définition de la durée de conservation d’un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Configuration du stockage de cache pour un dépôt

{% data reusables.actions.cache-default-size %} Toutefois, ces tailles par défaut peuvent être différentes si un propriétaire d’entreprise les a modifiées. {% data reusables.actions.cache-eviction-process %}

Vous pouvez définir une taille totale de stockage du cache pour votre dépôt allant jusqu’à la taille maximale autorisée par le paramètre de stratégie d’entreprise.

Les paramètres du dépôt pour le stockage du cache {% data variables.product.prodname_actions %} ne peuvent actuellement être modifiés qu’à l’aide de l’API REST :

* Pour afficher la limite actuelle de stockage du cache pour un dépôt, consultez « [Obtenir la stratégie d’utilisation du cache GitHub Actions pour un dépôt](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository) ».
* Pour changer la limite de stockage du cache pour un dépôt, consultez « [Définir la stratégie d’utilisation du cache GitHub Actions pour un dépôt](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository) ».

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
