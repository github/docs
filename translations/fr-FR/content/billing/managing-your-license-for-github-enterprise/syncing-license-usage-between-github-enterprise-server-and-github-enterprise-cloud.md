---
title: Synchronisation de l’utilisation des licences entre GitHub Enterprise Server et GitHub Enterprise Cloud
intro: 'Vous pouvez synchroniser l’utilisation des licences à partir de {% data variables.product.prodname_ghe_server %} vers {% data variables.product.prodname_ghe_cloud %} pour afficher l’utilisation de toutes les licences dans votre entreprise à un seul endroit et vous assurer que les personnes disposant de comptes dans les deux environnements n’utilisent qu’une seule licence utilisateur.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572591'
---
## À propos de la synchronisation de l’utilisation des licences

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

Pour vous assurer que les détails des licences affichés sur {% data variables.product.prodname_dotcom_the_website %} sont à jour, vous pouvez synchroniser l’utilisation des licences entre les environnements automatiquement, en utilisant {% data variables.product.prodname_github_connect %}. Pour plus d’informations sur {% data variables.product.prodname_github_connect %}, consultez « [À propos de {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %} » dans la documentation {% data variables.product.prodname_ghe_server %}.{% elsif ghes %} ».{% endif %}

Si vous ne souhaitez pas activer {% data variables.product.prodname_github_connect %}, vous pouvez synchroniser manuellement l’utilisation des licences en chargeant un fichier à partir depuis {% data variables.product.prodname_ghe_server %} sur {% data variables.product.prodname_dotcom_the_website %}.

Quand vous synchronisez l’utilisation de la licence, seuls l’ID utilisateur et les adresses e-mail de chaque compte d’utilisateur sur {% data variables.product.prodname_ghe_server %} sont transmis à {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Synchronisation automatique de l’utilisation des licences

Vous pouvez utiliser {% data variables.product.prodname_github_connect %} pour synchroniser automatiquement le nombre de licences utilisateur et leur utilisation entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %} chaque semaine. Pour plus d’informations, consultez « [Activation de la synchronisation automatique des licences utilisateur pour votre entreprise]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %} » dans la documentation {% data variables.product.prodname_ghe_server %}.{% elsif ghes %} ».{% endif %}

{% ifversion ghec or ghes > 3.4 %} Une fois que vous avez activé {% data variables.product.prodname_github_connect %}, les données de licence sont automatiquement synchronisées chaque semaine. Vous pouvez également synchroniser manuellement vos données de licence à tout moment, en déclenchant un travail de synchronisation de licences.

### Déclenchement d’un travail de synchronisation de licences

1. Connectez-vous à votre instance {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Sous « Synchronisation de licence », cliquez sur {% octicon "sync" aria-label="The Sync icon" %} **Synchroniser maintenant**.
  ![Capture d’écran du bouton « Synchroniser maintenant » dans la section Synchronisation de licences](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Chargement manuel de l’utilisation des licences serveur GitHub Enterprise

Vous pouvez télécharger un fichier JSON à partir de {% data variables.product.prodname_ghe_server %} et charger le fichier sur {% data variables.product.prodname_ghe_cloud %} pour synchroniser manuellement l’utilisation des licences utilisateur entre les deux déploiements.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. Sous « Liens rapides », pour télécharger un fichier contenant votre utilisation actuelle des licences sur {% data variables.product.prodname_ghe_server %}, cliquez sur **Exporter l’utilisation des licences**.
  ![Lien Exporter l’utilisation des licences](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. Sous « instances Enterprise Server », cliquez sur **Ajouter l’utilisation du serveur**.
  ![Lien de chargement de l’utilisation des instances GitHub Enterprise Server](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Chargez le fichier JSON que vous avez téléchargé à partir de {% data variables.product.prodname_ghe_server %}.
  ![Glisser-déposer ou sélectionner un fichier à charger](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
