---
title: Gestion des adresses IP autorisées pour votre organisation
intro: Vous pouvez restreindre l’accès aux ressources privées de votre organisation en configurant une liste d’adresses IP autorisées à se connecter.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184027'
---
## À propos des adresses IP autorisées

Vous pouvez restreindre l’accès aux ressources d’organisation privées en configurant une liste verte pour des adresses IP spécifiques. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**Remarque :** Seules les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent utiliser des listes vertes d’IP. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Si vous configurez une liste verte, vous pouvez également choisir d’y ajouter automatiquement toutes les adresses IP configurées pour les {% data variables.product.prodname_github_apps %} que vous installez dans votre organisation. Le créateur d’une {% data variables.product.prodname_github_app %} peut configurer une liste verte pour son application, en spécifiant les adresses IP autorisées pour l’exécution de l’application. En héritant sa liste verte dans la vôtre, vous évitez les refus de demandes de connexion de l’application. Pour plus d’informations, consultez « [Autorisation de l’accès par les {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps) ».

Vous pouvez également configurer les adresses IP autorisées au niveau du compte d’entreprise. Les entrées figurant dans la liste verte du compte d’entreprise sont héritées par toutes les organisations appartenant à l’entreprise. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise). »

## Ajout d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Activation des adresses IP autorisées

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Sous « Liste verte d’adresses IP », sélectionnez **Activer la liste verte d’adresses IP**.
  ![Case à cocher permettant d’autoriser des adresses IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Cliquez sur **Enregistrer**.

## Autorisation de l’accès par {% data variables.product.prodname_github_apps %}

Si vous utilisez une liste verte, vous pouvez également choisir d’y ajouter automatiquement toutes les adresses IP configurées pour les {% data variables.product.prodname_github_apps %} que vous installez dans votre organisation. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Pour plus d’informations sur la création d’une liste verte pour une {% data variables.product.prodname_github_app %} que vous avez créée, consultez « [Gestion des adresses IP autorisées pour une application GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Sous « Liste verte d’IP », sélectionnez **Activer la configuration de liste verte d’IP pour les applications GitHub installées**.
  ![Case à cocher pour autoriser les adresses IP d’application GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Cliquez sur **Enregistrer**.

## Modification d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Cliquez sur **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Vérification de l’autorisation d’une adresse IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Suppression d’une adresse IP autorisée

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Utilisation de {% data variables.product.prodname_actions %} avec une liste verte d’adresses IP

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
