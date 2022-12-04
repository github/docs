---
title: Gestion de GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'Vous pouvez activer {% data variables.product.prodname_github_connect %} pour accéder à des fonctionnalités et des workflows supplémentaires pour {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160648'
---
{% data reusables.github-connect.beta %}

## À propos de {% data variables.product.prodname_github_connect %}

Vous pouvez accéder à des fonctionnalités et workflows supplémentaires pour {% data variables.location.product_location %} en activant {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) ».

Lorsque vous activez {% data variables.product.prodname_github_connect %}, vous configurez une connexion entre {% data variables.location.product_location %} et un compte d’entreprise ou d’organisation sur {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

L’activation de {% data variables.product.prodname_github_connect %} a pour effet de créer une {% data variables.product.prodname_github_app %} dont est propriétaire le compte d’organisation ou d’entreprise sur {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} utilise les informations d’identification de l’{% data variables.product.prodname_github_app %} pour adresser des demandes à {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} stocke les informations d’identification de l’{% data variables.product.prodname_github_app %}. Les informations d’identification suivantes sont répliquées sur tous les nœuds d’un environnement à haute disponibilité ou de cluster, et sont stockées dans toutes les sauvegardes, y compris les instantanés créés par {% data variables.product.prodname_enterprise_backup_utilities %}.
- Un jeton d’authentification, qui est valide pendant une heure
- Une clé privée, qui sert à générer un nouveau jeton d’authentification {% endif %}

## Prérequis

Pour utiliser {% data variables.product.prodname_github_connect %}, vous devez disposer d’un compte d’organisation ou d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} qui utilise {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_ghe_cloud %} est peut-être déjà inclus dans votre plan. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %} Si votre compte d’organisation ou d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} utilise des listes vertes d’adresses IP, vous devez ajouter l’adresse IP ou le réseau de {% data variables.location.product_location %} à votre liste verte d’adresses IP sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) » et « [Application de stratégies pour les paramètres de sécurité de votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.

Pour configurer une connexion, la configuration de votre proxy doit autoriser la connexion à `github.com`, `api.github.com` et `uploads.github.com`. Pour plus d’informations, consultez [Configuration d’un serveur proxy web sortant](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server) ».
{% endif %}

## Activation de {% data variables.product.prodname_github_connect %}

Les propriétaires d’une entreprise qui sont aussi les propriétaires d’un compte d’organisation ou d’entreprise qui utilise {% data variables.product.prodname_ghe_cloud %} peuvent activer {% data variables.product.prodname_github_connect %}.

Si vous connectez {% data variables.location.product_location %} à une organisation sur {% data variables.product.prodname_ghe_cloud %} qui n’est pas la propriété d’un compte d’entreprise, vous devez vous connecter à {% data variables.product.prodname_dotcom_the_website %} en tant que propriétaire de l’organisation.

Si vous connectez {% data variables.location.product_location %} à une organisation sur {% data variables.product.prodname_ghe_cloud %} qui est la propriété d’un compte d’entreprise ou à un compte d’entreprise proprement dit, vous devez vous connecter à {% data variables.product.prodname_dotcom_the_website %} en tant que propriétaire de l’entreprise.

{% ifversion ghes %}
1. Connectez-vous à {% data variables.location.product_location %} et à {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Connectez-vous à {% data variables.location.product_location %} et à {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Sous « {% data variables.product.prodname_github_connect %} n’est pas encore activé », cliquez sur **Activer {% data variables.product.prodname_github_connect %}** . En cliquant sur **Activer {% data variables.product.prodname_github_connect %}** , vous acceptez les « <a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">Conditions {% data variables.product.prodname_dotcom %} pour les produits et fonctionnalités supplémentaires</a> ».
{% ifversion ghes %} ![Bouton Activer GitHub Connect](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![Bouton Activer GitHub Connect](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. À côté du compte d’entreprise ou de l’organisation que vous souhaitez connecter, cliquez **Connexion**.
  ![Bouton Connexion en regard d’un compte d’entreprise ou d’une entreprise](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Désactivation de {% data variables.product.prodname_github_connect %}

Les propriétaires d’entreprise peuvent désactiver {% data variables.product.prodname_github_connect %}.

Quand vous vous déconnectez de {% data variables.product.prodname_ghe_cloud %}, l’{% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} est supprimée de votre compte d’entreprise ou de votre organisation et les informations d’identification stockées dans {% data variables.location.product_location %} sont supprimées.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Près du compte d’entreprise ou de l’organisation à déconnecter, cliquez sur **Désactiver {% data variables.product.prodname_github_connect %}** .
{% ifversion ghes %} ![Bouton Désactiver GitHub Connect en regard d’un compte d’entreprise ou d’un nom d’organisation](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Lisez les informations à propos de la déconnexion et cliquez sur **Désactiver {% data variables.product.prodname_github_connect %}** .
  ![Boîte de dialogue modale contenant des informations d’avertissement sur la déconnexion et un bouton de confirmation](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![Bouton Désactiver GitHub Connect en regard d’un compte d’entreprise ou d’un nom d’organisation](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Lisez les informations à propos de la déconnexion et cliquez sur **Désactiver {% data variables.product.prodname_github_connect %}** .
  ![Boîte de dialogue modale contenant des informations d’avertissement sur la déconnexion et un bouton de confirmation](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
