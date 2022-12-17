---
title: Limitation du trafic réseau à destination de votre entreprise
shortTitle: Restricting network traffic
intro: Vous pouvez utiliser une liste verte d’adresses IP pour restreindre l’accès de votre entreprise aux connexions provenant d’adresses IP spécifiques.
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 67c7067362ac94e5cbc64be4704ba0ec3f6606e0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147682851"
---
## À propos des listes vertes d’adresses IP

Par défaut, les utilisateurs autorisés peuvent accéder à votre entreprise à partir de n’importe quelle adresse IP. Les propriétaires d’entreprise peuvent limiter l’accès aux ressources qui sont la propriété d’organisations d’un compte d’entreprise en configurant une liste verte d’adresses IP spécifiques. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

Vous pouvez aussi configurer des adresses IP autorisées pour une organisation individuelle. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization) ».

Par défaut, les règles du groupe de sécurité réseau (NSG) Azure laissent entrer l’ensemble du trafic sur les ports 22, 80, 443 et 25. Les propriétaires d’entreprise peuvent contacter le {% data variables.contact.github_support %} pour configurer des restrictions d’accès pour votre instance.

Pour des restrictions au niveau de l’instance utilisant des NSG Azure, contactez le {% data variables.contact.github_support %} avec les adresses IP qui doivent être autorisées à accéder à votre instance d’entreprise. Spécifiez des plages d’adresses au format CIDR (Classless Inter-Domain Routing) standard. Le {% data variables.contact.github_support %} configurera les règles de pare-feu adaptées à votre entreprise afin de limiter l’accès réseau via HTTP, SSH, HTTPS et SMTP. Pour plus d’informations, consultez « [Obtention d’aide auprès du {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support) ».

## Ajout d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Autorisation de l’accès par {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Activation des adresses IP autorisées

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Liste verte d’adresses IP », sélectionnez **Activer la liste verte d’adresses IP**.
  ![Case à cocher permettant d’autoriser des adresses IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Cliquez sur **Enregistrer**.

## Modification d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Cliquez sur **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
## Vérification si une adresse IP est autorisée

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

## Suppression d’une adresse IP autorisée

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Utilisation de {% data variables.product.prodname_actions %} avec une liste verte d’adresses IP

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
