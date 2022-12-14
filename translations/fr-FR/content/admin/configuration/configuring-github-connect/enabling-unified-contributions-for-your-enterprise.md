---
title: Activation des contributions unifiées pour votre entreprise
shortTitle: Unified contributions
intro: 'Vous pouvez autoriser les utilisateurs à inclure des décomptes de contributions anonymes pour leur travail au sein de {% data variables.product.product_location %} dans leurs graphes de contribution sur {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
ms.openlocfilehash: af07f30a8f164f6bec3d3c0f44c77181f1e8db7b
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876764'
---
{% data reusables.github-connect.beta %}

## À propos des contributions unifiées

En tant que propriétaire d’entreprise, vous pouvez autoriser les utilisateurs finaux à envoyer des nombres de contributions anonymisées pour leur travail de {% data variables.product.product_location %} vers leur graphe de contributions {% data variables.product.prodname_dotcom_the_website %}.

Après avoir activé les {% data variables.product.prodname_unified_contributions %}, pour permettre aux utilisateurs individuels d’envoyer des nombres de contributions de {% data variables.product.product_location %} vers {% data variables.product.prodname_dotcom_the_website %}, chaque utilisateur doit aussi connecter son compte d’utilisateur sur {% data variables.product.product_name %} avec un compte personnel sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Envoi de contributions d’entreprise à votre profil {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) ».

{% data reusables.github-connect.sync-frequency %}

Si le propriétaire de l’entreprise désactive la fonctionnalité ou que des utilisateurs individuels refusent la connexion, le nombre de contributions de {% data variables.product.product_name %} est supprimé sur {% data variables.product.prodname_dotcom_the_website %}. Si l’utilisateur reconnecte ses profils après les avoir désactivés, le nombre de contributions des 90 derniers jours est restauré.

{% data variables.product.product_name %} envoie **uniquement** le nombre de contributions et la source ({% data variables.product.product_name %}) pour les utilisateurs connectés. Il n’envoie pas d’informations sur la contribution ou sur la façon dont elle a apportée.

## Activation des contributions unifiées

Avant d’activer les {% data variables.product.prodname_unified_contributions %} sur {% data variables.product.product_location %}, vous devez activer {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect) ».

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Connectez-vous à {% data variables.product.product_location %} et à {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Sous « Les utilisateurs peuvent partager les nombres de contributions sur {% data variables.product.prodname_dotcom_the_website %} », cliquez sur **Demander l’accès**.
  ![Option Demander l’accès aux contributions unifiées](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. [Connectez-vous](https://enterprise.github.com/login) au site {% data variables.product.prodname_ghe_server %} pour recevoir d’autres instructions.

Au moment de demander l’accès, il se peut que nous vous redirigions vers le site {% data variables.product.prodname_ghe_server %} pour vérifier vos conditions d’utilisation du service actuelles.
{% endif %}
