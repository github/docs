---
title: Autorisation d’authentification intégrée pour les utilisateurs extérieurs à votre fournisseur
intro: 'Vous pouvez configurer une authentification de secours pour autoriser l’authentification intégrée des personnes qui n’ont pas de compte sur votre fournisseur d’authentification CAS, LDAP ou SAML.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064433'
---
## À propos de l’authentification intégrée pour les utilisateurs extérieurs à votre fournisseur

Par défaut, lorsque vous activez l’authentification externe pour {% data variables.product.product_name %}, l’authentification intégrée est désactivée pour votre instance. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication) ».

Si vous ne parvenez pas à ajouter des comptes spécifiques à votre fournisseur d’authentification externe, tels que des comptes pour sous-traitants ou utilisateurs de machine, vous pouvez configurer une authentification de secours. Une authentification de secours permet une authentification intégrée pour des utilisateurs externes, ainsi que d’accéder à un compte de secours si votre fournisseur d’authentification est indisponible.

Si vous configurez une authentification intégrée et qu’une personne s’authentifie avec succès via SAML ou CAS, cette personne n’aura plus la possibilité de s’authentifier avec un nom d’utilisateur et un mot de passe. Si un utilisateur s’authentifie avec succès via LDAP, les informations d’identification ne sont plus considérées comme internes.

{% warning %}

**Avertissement :** si vous désactivez l’authentification intégrée, vous devez suspendre individuellement chaque utilisateur qui ne devrait plus avoir accès à l’instance. Pour plus d’informations, consultez « [Suspension et réhabilitation d’utilisateurs](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) ».

{% endwarning %}

## Configuration d’authentification intégrée pour les utilisateurs extérieurs à votre fournisseur

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Sélectionnez votre fournisseur d’identité.
  ![Option Sélectionner le fournisseur d’identité](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Sélectionnez **Autoriser la création de comptes avec authentification intégrée**.
  ![Option Sélectionner une authentification intégrée](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lisez l’avertissement, puis cliquez sur **OK**.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Invitation d’utilisateurs extérieurs à votre fournisseur à s’authentifier auprès de votre instance

Quand un utilisateur accepte l’invitation, il peut utiliser son nom d’utilisateur et son mot de passe pour se connecter, au lieu de se connecter via le fournisseur d’identité.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Pour aller plus loin

- « [Utilisation du site d’administration centrale pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-cas-for-enterprise-iam) »
- « [Utilisation du protocole LDAP pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-ldap-for-enterprise-iam) »
- « [Utilisation de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam) »
