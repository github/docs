---
title: Affichage de l’utilisation des licences pour GitHub Enterprise
intro: 'Vous pouvez afficher l’utilisation des licences pour votre entreprise sur {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 7f3c3c6e65928601d01ac17139928af6ceedf354
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572615'
---
## À propos de l’utilisation des licences pour {% data variables.product.prodname_enterprise %}

Vous pouvez voir l’utilisation des licences de {% data variables.product.product_name %} sur {% data variables.product.product_location %}.

Si vous utilisez à la fois {% data variables.product.prodname_ghe_cloud %} et {% data variables.product.prodname_ghe_server %}, et que vous synchronisez l’utilisation des licences entre les produits, vous pouvez voir l’utilisation des licences sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations sur la synchronisation des licences, consultez « [Synchronisation de l’utilisation de licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ».

{% ifversion ghes %}

Pour plus d’informations sur l’affichage de l’utilisation des licences sur {% data variables.product.prodname_dotcom_the_website %} et identifier le moment de la dernière synchronisation des licences, consultez « [Affichage de l’utilisation des licences pour {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

Vous pouvez également utiliser l’API REST pour retourner les données de licences consommées et l’état du travail de synchronisation des licences. Pour plus d’informations, consultez « [Administration de GitHub Enterprise](/enterprise-cloud@latest/rest/enterprise-admin/license) » dans la documentation de l’API REST.

Pour en savoir plus sur les données de licence associées à votre compte d’entreprise et sur le nombre de sièges utilisateur consommés, consultez « [Résolution des problèmes d’utilisation des licences pour GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise) ».


## Affichage de l’utilisation des licences sur {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Vous pouvez afficher l’utilisation des licences pour votre entreprise et télécharger un fichier avec des détails sur les licences. Si vous ne voyez pas les nombres de licences attendus dans ce rapport, il est possible que l’adresse e-mail de l’abonné attribuée {% data variables.product.prodname_vs %} et l’adresse e-mail {% data variables.product.prodname_dotcom_the_website %} ne soient pas exactement les mêmes. Pour plus d’informations, consultez « [Résolution des problèmes d’utilisation des licences pour GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise) ».

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Dans la barre latérale gauche, cliquez sur **Gestion des licences Enterprise**.
  ![Onglet « Gestion des licences Enterprise » dans la barre latérale des paramètres du compte d’entreprise](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Passez en revue votre licence {% data variables.product.prodname_enterprise %} actuelle ainsi que les licences utilisateur consommées et disponibles.
    - Pour télécharger le rapport de licence consommé en tant que fichier CSV, en haut à droite, cliquez sur {% octicon "download" aria-label="The download icon" %}. Pour plus d’informations sur la révision des données de ce rapport, consultez « [Résolution des problèmes d’utilisation des licences pour GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise) ».
    - Si votre licence inclut {% data variables.product.prodname_GH_advanced_security %}, vous pouvez passer en revue votre utilisation totale des postes. Pour plus d’informations, consultez « [Affichage de votre utilisation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage) ».

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Passez en revue votre licence {% data variables.product.prodname_enterprise %} actuelle ainsi que les licences utilisateur consommées et disponibles.{% ifversion ghes %}
    - Pour télécharger le rapport de licence consommé en tant que fichier JSON, en haut à droite, sous « Liens rapides », choisissez **Exporter l’utilisation des licences**. Pour plus d’informations sur la révision des données de ce rapport, consultez « [Résolution des problèmes d’utilisation des licences pour GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise) ».
    - Si votre licence inclut {% data variables.product.prodname_GH_advanced_security %}, vous pouvez passer en revue l’utilisation totale de vos postes ainsi qu’une répartition par organisation des commiteurs. Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/advanced-security) ».{% endif %}

{% endif %} {% ifversion ghec %}
## Affichage de la dernière date de synchronisation de licence

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Dans la barre latérale gauche, cliquez sur **Gestion des licences Enterprise**.
  ![Onglet « Gestion des licences Enterprise » dans la barre latérale des paramètres du compte d’entreprise](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Pour identifier le moment où la dernière synchronisation de licence s’est produite, sous « Instances de serveur d’entreprise », observez les timestamps en regard de l’utilisation chargée ou des événements synchronisés.
   - « Utilisation du serveur chargée » indique que l’utilisation des licences entre les environnements a été mise à jour manuellement lorsqu’un fichier de licence {% data variables.product.prodname_ghe_server %} a été chargé.
   - « Utilisation du serveur {% data variables.product.prodname_github_connect %} synchronisée » indique que l’utilisation des licences entre les environnements a été automatiquement mise à jour.
   - « Utilisation du serveur {% data variables.product.prodname_github_connect %} synchronisée » indique que {% data variables.product.prodname_github_connect %} est configuré, mais que l’utilisation des licences entre les environnements n’a jamais été mise à jour avec succès.

{% endif %}
