---
title: Limitation des demandes d’accès aux applications OAuth et GitHub
intro: 'En tant que propriétaire d’organisation, vous pouvez choisir d’autoriser des collaborateurs externes à demander à l’organisation un accès pour des {% data variables.product.prodname_oauth_apps %} et des {% data variables.product.prodname_github_apps %}.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 4ea1bd133dcbabb9e7b3e3cbe65da5ff9c6eabac
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008166'
---
## À propos des demandes d’accès d’intégration

Quand les demandes d’accès d’intégration sont activées, des collaborateurs externes peuvent demander l’accès à l’organisation pour des {% data variables.product.prodname_github_apps %} et des {% data variables.product.prodname_oauth_apps %} qui n’ont pas encore été approuvés par votre organisation. Si vous désactivez les demandes d’accès d’intégration, seuls les membres de l’organisation peuvent demander l’accès à l’organisation pour les {% data variables.product.prodname_github_apps %} et les {% data variables.product.prodname_oauth_apps %} non approuvées. Les collaborateurs externes pourront néanmoins toujours consentir aux {% data variables.product.prodname_github_apps %} et aux {% data variables.product.prodname_oauth_apps %} préapprouvées accédant aux mêmes ressources que celles auxquelles a accès le collaborateur externe qui fait la demande.

Par défaut, les demandes d’accès d’intégration sont activées. Si votre organisation compte un grand nombre de collaborateurs externes, vous pouvez désactiver les demandes d’accès d’intégration afin de réduire le nombre de demandes que vous devez passer en revue. 

## Activation ou désactivation des demandes d’accès d’intégration

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Sous « Demandes d’accès d’intégration », sélectionnez ou désélectionnez **Autoriser les demandes d’intégration provenant de collaborateurs externes**, puis cliquez sur **Enregistrer**.
    ![Capture d’écran du paramètre des demandes d’accès d’intégration](/assets/images/help/organizations/integration-access-requests.png)
