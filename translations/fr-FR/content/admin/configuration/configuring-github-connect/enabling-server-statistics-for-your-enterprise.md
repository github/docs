---
title: Activation des statistiques de serveur pour votre entreprise
intro: 'Vous pouvez analyser vos propres données agrégées de {% data variables.product.prodname_ghe_server %} et nous aider à améliorer les produits {% data variables.product.company_short %} en activant {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191869'
---
## À propos de {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} collecte les données d’utilisation agrégées à partir de {% data variables.location.product_location %}, que vous pouvez utiliser pour mieux anticiper les besoins de votre organisation, comprendre comment votre équipe travaille et montrer la valeur que vous tirez de {% data variables.product.prodname_ghe_server %}. 

{% data variables.product.prodname_server_statistics %} collecte uniquement certaines métriques d’agrégation sur les référentiels, les problèmes, les demandes de tirage et d’autres fonctionnalités. Le contenu {% data variables.product.prodname_dotcom %} comme le code, les problèmes, les commentaires ou le contenu de la demande de tirage, n’est pas collecté. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics) ».

En activant {% data variables.product.prodname_server_statistics %}, vous contribuez également à améliorer {% data variables.product.company_short %}. Les données agrégées que vous fournirez nous aident à comprendre comment nos clients utilisent {% data variables.product.prodname_dotcom %}, et à prendre des décisions plus éclairées pour nos produits, et en fin de compte vous bénéficier.

## Enabling {% data variables.product.prodname_server_statistics %}

Avant de pouvoir activer {% data variables.product.prodname_server_statistics %}, vous devez d’abord connecter votre instance {% data variables.product.prodname_ghe_server %} à {% data variables.product.prodname_dotcom_the_website %} via {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Connexion de {% data variables.product.prodname_ghe_server %} à {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud) ».

Vous pouvez désactiver {% data variables.product.prodname_server_statistics %} à partir de {% data variables.product.prodname_ghe_server %} à tout moment.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. Sous « Partager les statistiques du serveur avec GitHub.com », sélectionnez le menu déroulant, puis cliquez sur **Activé** ou **Désactivé**.
  ![Capture d’écran du menu déroulant {% data variables.product.prodname_server_statistics %} avec des options désactivées ou activées](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
