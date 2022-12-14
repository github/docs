---
title: Application de stratégies pour GitHub Actions dans votre entreprise
intro: 'Vous pouvez appliquer des stratégies pour {% data variables.product.prodname_actions %} au sein des organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
ms.openlocfilehash: 21b2cfa73ef84ba6635f05b9fc25bb48df2b87cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147400337'
---
{% data reusables.actions.enterprise-beta %}

## À propos des stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise

{% data variables.product.prodname_actions %} permet aux membres de votre entreprise d’automatiser les workflows de développement sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Comprendre {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions) ».

{% ifversion ghes %}Si vous activez {% data variables.product.prodname_actions %}, toute{% else %}Toute{% endif %} organisation sur {% data variables.product.product_location %} peut utiliser {% data variables.product.prodname_actions %}. Vous pouvez appliquer des stratégies pour contrôler la façon dont les membres de votre entreprise sur {% data variables.product.product_name %} utilisent {% data variables.product.prodname_actions %}. Par défaut, les propriétaires d’organisation peuvent gérer la façon dont les membres utilisent {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) ».

## Application d’une stratégie pour restreindre l’utilisation de {% data variables.product.prodname_actions %} dans votre entreprise

Vous pouvez choisir de désactiver {% data variables.product.prodname_actions %} pour toutes les organisations de votre entreprise ou d’autoriser uniquement des organisations spécifiques. Vous pouvez également limiter l’utilisation des actions publiques {% ifversion actions-workflow-policy %}et des workflows réutilisables{% endif %}, afin que les utilisateurs ne puissent utiliser que des actions locales {% ifversion actions-workflow-policy %}et des workflows réutilisables{% endif %} qui existent dans votre entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Sous « Stratégies », sélectionnez vos options.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **Remarque :** pour autoriser l’accès aux actions publiques{% ifversion actions-workflow-policy %}et workflows réutilisables {% endif %}, vous devez d’abord configurer {% data variables.product.product_location %} pour qu’il se connecte à {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Activer l’accès automatique aux actions GitHub.com à l’aide de GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect) ».

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![Activer, désactiver ou limiter les actions pour ce compte d’entreprise](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Activer, désactiver ou limiter les actions pour ce compte d’entreprise](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. Cliquez sur **Enregistrer**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Sous « Stratégies », sélectionnez {% data reusables.actions.policy-label-for-select-actions-workflows %} et ajoutez vos actions requises{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} à la liste.
   {% ifversion actions-workflow-policy %} ![Ajouter des actions et des workflows réutilisables à la liste verte](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![Ajouter des actions à la liste verte](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![Ajouter des actions à la liste verte](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## Application d’une stratégie pour la conservation des artefacts et des journaux dans votre entreprise

{% data variables.product.prodname_actions %} peut stocker des artefacts et des fichiers journaux. Pour plus d’informations, consultez « [Téléchargement d’artefacts de workflow](/actions/managing-workflow-runs/downloading-workflow-artifacts) ».

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Application d’une stratégie pour les demandes de tirage (pull request) de duplication (fork) dans votre entreprise

Vous pouvez appliquer des stratégies pour contrôler le comportement de {% data variables.product.prodname_actions %} pour {% data variables.product.product_location %} quand les membres de votre entreprise{% ifversion ghec %} ou des collaborateurs externes{% endif %} exécutent des workflows à partir de duplications.

{% ifversion ghec %}

### Application d’une stratégie pour l’approbation des demandes de tirage de collaborateurs externes

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Application d’une stratégie pour les demandes de tirage de duplication dans des dépôts privés

{% data reusables.actions.private-repository-forks-overview %}

Si une stratégie est activée pour une entreprise, elle peut être désactivée de manière sélective dans des organisations ou dépôts individuels. Si une stratégie est désactivée pour une entreprise, les organisations ou dépôts individuels ne peuvent pas l’activer.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Application d’une stratégie pour les autorisations de workflow dans votre entreprise

{% data reusables.actions.workflow-permissions-intro %}

Vous pouvez définir les autorisations par défaut pour `GITHUB_TOKEN` dans les paramètres de votre entreprise, de vos organisations ou de vos dépôts. Si vous choisissez un option restreinte comme option par défaut dans les paramètres de votre entreprise, ceci empêche de choisir un paramètre plus permissif dans les paramètres de l’organisation ou du dépôt.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuration des autorisations `GITHUB_TOKEN` par défaut

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} Par défaut, lorsque vous créez une entreprise, `GITHUB_TOKEN` ne dispose que d’un accès en lecture pour l’étendue `contents`.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Sous Autorisations de workflow, spécifiez si vous souhaitez que le `GITHUB_TOKEN` ait un accès en lecture et écriture pour toutes les étendues ou simplement un accès en lecture pour l’étendue `contents`.

   ![Définir les autorisations de GITHUB_TOKEN pour cette entreprise](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. Cliquez sur **Enregistrer** pour appliquer les paramètres.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Empêcher {% data variables.product.prodname_actions %} de créer ou d’approuver des demandes de tirage

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Par défaut, lorsque vous créez une entreprise, les workflows ne sont pas autorisés à créer ou approuver des demandes de tirage.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Sous « Autorisations de workflow », utilisez le paramètre **Autoriser GitHub Actions à créer et à approuver des demandes de tirage** pour configurer si `GITHUB_TOKEN` peut créer et approuver des demandes de tirage.

   ![Définir les autorisations de GITHUB_TOKEN pour cette entreprise](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Cliquez sur **Enregistrer** pour appliquer les paramètres.

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## Application d’une stratégie pour le stockage de cache dans votre entreprise

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

Toutefois, vous pouvez définir une stratégie d’entreprise pour personnaliser la taille totale par défaut du cache pour chaque dépôt, ainsi que la taille totale maximale du cache autorisée pour un dépôt. Par exemple, vous pourriez souhaiter que la taille totale par défaut du cache pour chaque dépôt soit de 5 Go, tout en permettant aux administrateurs du dépôt de configurer une taille totale de cache jusqu’à 15 Go si nécessaire.

Les personnes disposant d’un accès administrateur à un dépôt peuvent définir une taille totale de cache pour leur dépôt jusqu’à la taille maximale de cache autorisée par le paramètre de stratégie d’entreprise.

Les paramètres de stratégie pour le stockage du cache {% data variables.product.prodname_actions %} ne peuvent actuellement être modifiés qu’à l’aide de l’API REST :

* Pour afficher les paramètres de stratégie d’entreprise actuels, consultez « [Obtenir une stratégie d’utilisation du cache GitHub Actions pour une entreprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise) ».
* Pour modifier les paramètres de stratégie d’entreprise, consultez « [Obtenir une stratégie d’utilisation du cache GitHub Actions pour une entreprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise) ».

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
