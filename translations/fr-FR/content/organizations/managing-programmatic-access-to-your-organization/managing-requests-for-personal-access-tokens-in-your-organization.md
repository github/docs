---
title: Gestion des demandes de jetons d’accès personnels dans votre organisation
intro: 'Les propriétaires d’organisation peuvent approuver ou refuser les {% data variables.product.pat_v2 %} qui demandent l’accès à leur organisation.'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: ea2f01436ca4649cae5310b14070625c5947922e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107402'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## À propos des demandes de {% data variables.product.pat_v2 %}

Quand des membres d’organisation créent un {% data variables.product.pat_v2 %} pour accéder aux ressources appartenant à l’organisation, si l’organisation exige une approbation pour les {% data variables.product.pat_v2 %}, un propriétaire de l’organisation doit approuver le jeton avant qu’il puisse être utilisé pour accéder aux ressources qui ne sont pas publiques. Pour plus d’informations, consultez « [Définition d’une stratégie {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».

{% data variables.product.company_short %} informe les propriétaires d’organisation avec un e-mail quotidien de toutes les {% data variables.product.pat_v2 %} en attente d’approbation. Quand un jeton est refusé ou approuvé, l’utilisateur qui a créé le jeton reçoit une notification par e-mail.

{% note %}

**Remarque** : Seuls les {% data variables.product.pat_v2 %}, et non pas les {% data variables.product.pat_v1_plural %}, sont soumis à approbation. À moins que l’organisation ait restreint l’accès des {% data variables.product.pat_v1_plural %}, un {% data variables.product.pat_v1 %} peut accéder aux ressources de l’organisation sans approbation préalable. Pour plus d’informations, consultez « [Définition d’une stratégie {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».

{% endnote %}

## Gestion des demandes de {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Demandes en attente**. Si des jetons sont en attente d’approbation pour votre organisation, ils s’affichent.
1. Cliquez sur le nom du jeton que vous voulez approuver ou refuser.
1. Passez en revue l’accès et les autorisations demandés par le jeton.
1. Pour accorder au jeton l’accès à l’organisation, cliquez sur **Approuver**. Pour refuser au jeton l’accès à l’organisation, cliquez sur **Refuser**.
1. Si vous avez refusé la demande, dans la zone de confirmation, entrez si vous le souhaitez la raison pour laquelle vous avez refusé le jeton. Cette raison sera partagée dans la notification envoyée au propriétaire du jeton. Ensuite, cliquez sur **Refuser**.

Vous pouvez aussi approuver ou refuser plusieurs jetons à la fois :

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Demandes en attente**. Si des jetons sont en attente d’approbation pour votre organisation, ils s’affichent.
1. Si vous le souhaitez, utilisez les menus déroulants **Propriétaire** et **Dépôt** pour filtrer les demandes selon le membre qui fait la demande.
1. Sélectionnez chaque jeton que vous voulez approuver ou rejeter.
1. Sélectionnez le menu déroulant **Demande sélectionnée...** , puis cliquez sur **Approuver...** ou sur **Refuser...** .
