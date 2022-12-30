---
title: Activation de la synchronisation automatique des licences utilisateur pour votre entreprise
intro: 'Vous pouvez gérer l’utilisation des licences dans vos environnements {% data variables.product.prodname_enterprise %} en synchronisant automatiquement les licences utilisateur de {% data variables.product.product_location %} vers {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: eb0216dcdb629e96ef83de2eea8a7d7b6660a171
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145910558'
---
## À propos de la synchronisation automatique des licences

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect) ».

Si vous activez la synchronisation automatique des licences utilisateur pour votre entreprise, {% data variables.product.prodname_github_connect %} synchronise automatiquement l’utilisation des licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %} de façon hebdomadaire.{% ifversion ghes > 3.4 %} Vous pouvez également synchroniser vos données de licence à tout moment en dehors de la synchronisation hebdomadaire automatique, en déclenchant manuellement un travail de synchronisation de licences. Pour plus d’informations, consultez « [Déclenchement d’un travail de synchronisation de licences](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job) ». {% endif %}

Si vous utilisez plusieurs instances de {% data variables.product.prodname_ghe_server %}, vous pouvez activer la synchronisation automatique des licences entre chacune d’elles et un même compte d’organisation ou d’entreprise sur {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

Vous pouvez aussi charger manuellement les informations de licence utilisateur {% data variables.product.prodname_ghe_server %} sur {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Synchronisation de l’utilisation de licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ».

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Activation de la synchronisation des licences

Avant d’activer la synchronisation des licences sur {% data variables.product.product_location %}, vous devez activer {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Sous « Le serveur peut synchroniser le nombre et l’utilisation de licences utilisateur », utilisez le menu déroulant et sélectionnez **Activé**.
  ![Menu déroulant permettant d’activer la synchronisation automatique des licences utilisateur](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
