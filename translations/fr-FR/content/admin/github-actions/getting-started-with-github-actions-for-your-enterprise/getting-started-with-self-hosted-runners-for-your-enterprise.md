---
title: Bien démarrer avec les exécuteurs auto-hébergés pour votre entreprise
shortTitle: Self-hosted runners
intro: 'Vous pouvez configurer une machine d’exécuteur pour votre entreprise afin que vos développeurs puissent commencer à automatiser les workflows avec {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106620'
---
## À propos des exécuteurs auto-hébergés pour {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) ».

Avec {% data variables.product.prodname_actions %}, les développeurs peuvent écrire et combiner des tâches individuelles appelées actions pour créer des workflows personnalisés. {% ifversion ghes or ghae %}Pour activer {% data variables.product.prodname_actions %} pour {% ifversion ghae %}votre entreprise{% elsif ghes %} {% data variables.location.product_location %}{% endif %}, vous devez héberger au moins un ordinateur pour l’exécution des travaux.{% endif %} {% ifversion ghec %} Vous pouvez héberger votre propre ordinateur exécuteur pour exécuter les travaux, et cet{% elsif ghes or ghae %}Cet{% endif %} ordinateur s’appelle un exécuteur auto-hébergé. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}Tous les exécuteurs{% elsif ghes or ghae %}Les exécuteurs auto-hébergés{% endif %} peuvent exécuter Linux, Windows ou macOS. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ».

{% ifversion ghec %}

Vous pouvez aussi utiliser des ordinateurs exécuteurs hébergés par {% data variables.product.company_short %}. Les exécuteurs hébergés par {% data variables.product.company_short %} ne sont pas traités dans ce guide. Pour plus d’informations, consultez « [À propos des exécuteurs hébergés par {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners) ».

{% endif %}

Ce guide vous montre comment appliquer une approche de gestion centralisée des exécuteurs auto-hébergés pour {% data variables.product.prodname_actions %} dans votre entreprise. Dans ce guide, vous allez effectuer les tâches suivantes.

1. Configurer une stratégie limitée pour restreindre les actions{% ifversion actions-workflow-policy %} et les workflows réutilisables{% endif %} qui peuvent s’exécuter dans votre entreprise
1. Déployer un exécuteur auto-hébergé pour votre entreprise
1. Créer un groupe pour gérer l’accès aux exécuteurs accessibles à votre entreprise
1. Éventuellement, limiter un peu plus les dépôts qui peuvent utiliser l’exécuteur
1. Éventuellement, créer des outils personnalisés pour mettre automatiquement à l’échelle vos exécuteurs auto-hébergés

Vous trouverez aussi des informations supplémentaires sur la façon de superviser et de sécuriser vos exécuteurs auto-hébergés,{% ifversion ghes or ghae %} d’accéder aux actions de {% data variables.product.prodname_dotcom_the_website %},{% endif %} et de personnaliser les logiciels sur vos ordinateurs exécuteurs.

À l’issue de ce guide, les {% ifversion ghec or ghae %}membres de votre entreprise{% elsif ghes %}utilisateurs de {% data variables.location.product_location %}{% endif %} pourront exécuter des travaux de workflow à partir de {% data variables.product.prodname_actions %} sur un ordinateur exécuteur auto-hébergé.

## Prérequis

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Votre entreprise doit être propriétaire d’au moins une organisation. Pour plus d’informations, consultez « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) » et « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

## 1. Configurer des stratégies pour {% data variables.product.prodname_actions %}

Tout d’abord, activez {% data variables.product.prodname_actions %} pour toutes les organisations et configurez une stratégie de restriction pour les actions{% ifversion actions-workflow-policy %} et les workflows réutilisables{% endif %} qui peuvent s’exécuter {% ifversion ghec or ghae%}dans votre entreprise sur {% data variables.product.product_name %}{% elsif ghes %}sur {% data variables.location.product_location %}{% endif %}. Les propriétaires d’organisation ont la possibilité de restreindre davantage ces stratégies pour chaque organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Sous « Stratégies », sélectionnez **Activer pour toutes les organisations**.
   
   ![Capture d’écran de la stratégie « Activer pour toutes les organisations » pour {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Sélectionnez {% data reusables.actions.policy-label-for-select-actions-workflows %} et **Autoriser les actions créées par GitHub** pour autoriser les actions locales{% ifversion actions-workflow-policy %}, les workflows réutilisables{% endif %} et les actions créées par {% data variables.product.company_short %}.

   {% ifversion actions-workflow-policy %} ![Capture d’écran de « Autoriser les actions sélectionnées » et « Autoriser les actions créées par {% data variables.product.company_short %} » pour {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %} ![Capture d’écran de « Autoriser certaines actions » et « Autoriser les actions créées par {% data variables.product.company_short %} » pour {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png) {%- endif %}
1. Cliquez sur **Enregistrer**.

Vous pouvez configurer des stratégies supplémentaires pour limiter les actions accessibles aux {% ifversion ghec or ghae %}membres de l’entreprise{% elsif ghes %}utilisateurs de {% data variables.location.product_location %}{% endif %}. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run) ».

## 2. Déployer l’exécuteur auto-hébergé pour votre entreprise

Maintenant, ajoutez un exécuteur auto-hébergé à votre entreprise. {% data variables.product.product_name %} vous guidera tout au long de l’installation des logiciels nécessaires sur l’ordinateur exécuteur. Après avoir déployé l’exécuteur, vous pouvez vérifier la connectivité entre l’ordinateur exécuteur et {%ifversion ghec or ghae %}votre entreprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %}.

### Ajout de l’exécuteur auto-hébergé

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Gérer l’accès à l’exécuteur auto-hébergé en utilisant un groupe

Vous pouvez créer un groupe d’exécuteurs pour gérer l’accès à l’exécuteur que vous avez ajouté à votre entreprise. Le groupe vous permettra de choisir les organisations qui peuvent exécuter des travaux de {% data variables.product.prodname_actions %} sur l’exécuteur.

{% data variables.product.product_name %} ajoute tous les nouveaux exécuteurs à un groupe. Les exécuteurs peuvent appartenir à un seul groupe à la fois. Par défaut, {% data variables.product.product_name %} ajoute de nouveaux exécuteurs au groupe « Par défaut ».

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Pour choisir une stratégie pour l’accès des organisations, sous « Accès des organisations », sélectionnez la liste déroulante **Accès des organisations**, puis cliquez sur **Organisations sélectionnées**.
1. À droite de la liste déroulante contenant la stratégie d’accès des organisations, cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.
1. Sélectionnez les organisations auxquelles vous voulez accorder l’accès au groupe d’exécuteurs.
{%- ifversion ghec or ghes %}
1. Si vous souhaitez autoriser les dépôts publics des organisations sélectionnées à utiliser les exécuteurs du groupe, sélectionnez **Autoriser les dépôts publics**.

   {% warning %}

   **Avertissement** :

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) ».

   {% endwarning %} {%- endif %} {% data reusables.actions.create-runner-group %} {%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. Cliquez sur l’onglet « Exécuteurs ».
1. Dans la liste des exécuteurs, cliquez sur l’exécuteur que vous avez déployé dans la section précédente.
1. Cliquez sur **Modifier**.
1. Cliquez sur **Groupes d’exécuteurs {% octicon "gear" aria-label="The Gear icon" %}** .
1. Dans la liste des groupes d’exécuteurs, cliquez sur le nom du groupe que vous avez créé précédemment.
1. Cliquez sur **Enregistrer** pour déplacer l’exécuteur vers le groupe.
{%- elsif ghes < 3.4 or ghae %}
1. À droite de « Par défaut », cliquez sur le nombre d’exécuteurs du groupe pour afficher les exécuteurs.
1. Sélectionnez l’exécuteur que vous avez déployé.
1. À droite de « Groupes d’exécuteurs », sélectionnez la liste déroulante **Déplacer vers le groupe**, puis cliquez sur le groupe que vous avez créé précédemment.
{%- endif %}

Vous avez maintenant déployé un exécuteur auto-hébergé qui peut exécuter des travaux de {% data variables.product.prodname_actions %} dans les organisations que vous avez spécifiées.

## 4. Restreindre davantage l’accès à l’exécuteur auto-hébergé

Les propriétaires d’organisations peuvent s’ils le souhaitent restreindre davantage la stratégie d’accès du groupe d’exécuteurs que vous avez créé. Par exemple, un propriétaire d’organisation peut décider d’autoriser seulement certains dépôts de l’organisation à utiliser le groupe d’exécuteurs.

Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés en utilisant des groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».

## 5. Mettre automatiquement à l’échelle vos exécuteurs auto-hébergés

Vous pouvez éventuellement créer des outils personnalisés pour mettre automatiquement à l’échelle les exécuteurs auto-hébergés pour {% ifversion ghec or ghae %}votre entreprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %}. Par exemple, vos outils peuvent répondre aux événements de webhook de {% data variables.location.product_location %} pour mettre automatiquement à l’échelle un cluster d’ordinateurs exécuteurs. Pour plus d’informations, consultez « [Mise à l’échelle automatique avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners) ».

## Étapes suivantes

- Vous pouvez superviser les exécuteurs auto-hébergés et résoudre les problèmes courants. Pour plus d’informations, consultez « [Supervision et résolution des problèmes liés aux exécuteurs auto-hébergés](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners) ».

- {% data variables.product.company_short %} vous recommande d’examiner les considérations de sécurité pour les ordinateurs exécuteurs auto-hébergés. Pour plus d’informations, consultez « [Renforcement de la sécurité pour {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners) ».

- {% ifversion ghec %}Si vous utilisez {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}, vous{% elsif ghes or ghae %}Vous{% endif %} pouvez synchroniser manuellement les dépôts sur {% data variables.product.prodname_dotcom_the_website %} contenant des actions avec votre entreprise sur {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}{% endif %}. Vous pouvez aussi autoriser les membres de votre entreprise à accéder automatiquement aux actions de {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}. Pour plus d'informations, consultez les documents suivants.

   {%- ifversion ghes or ghae %}
   - « [Synchronisation manuelle des actions de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) »
   - « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) » {%- elsif ghec %}
   - « Synchronisation manuelle des actions de {% data variables.product.prodname_dotcom_the_website %} » dans la documentation de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) ou [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - « Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %} » dans la documentation de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) ou [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) {%- endif %}

- Vous pouvez personnaliser les logiciels disponibles sur vos ordinateurs exécuteurs auto-hébergés ou configurer vos exécuteurs pour qu’ils exécutent des logiciels similaires aux exécuteurs hébergés par {% data variables.product.company_short %}{% ifversion ghes or ghae %} accessibles aux clients utilisant {% data variables.product.prodname_dotcom_the_website %}{% endif %}. Les logiciels sur lesquels reposent les ordinateurs exécuteurs pour {% data variables.product.prodname_actions %} sont open source. Pour plus d’informations, consultez les dépôts [`actions/runner`](https://github.com/actions/runner) et [`actions/runner-images`](https://github.com/actions/runner-images).

## Pour aller plus loin

- « [Configuration de l’application d’exécuteur auto-hébergé en tant que service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service) »
- « [Utilisation d’exécuteurs auto-hébergés dans un workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow) »
