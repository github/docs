---
title: Configuration de l’authentification intégrée
intro: 'Quand vous utilisez la méthode d’authentification par défaut, tous les détails d’authentification sont stockés sur {% data variables.product.product_location %}.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
ms.openlocfilehash: 6fbcd68efc953b5a32139a6907975e6918976860
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717812'
---
## À propos de l’authentification intégrée

Par défaut, {% data variables.product.product_name %} utilise un authentification intégrée. Chaque personne crée un compte d’utilisateur sur {% data variables.product.product_location %} à partir d’une invitation ou en s’inscrivant, puis s’authentifie avec les informations d’identification du compte pour accéder à votre instance. Votre instance {% data variables.product.product_name %} stocke les informations d’authentification du compte.

Vous pouvez empêcher les personnes non authentifiées de créer de nouveaux comptes d’utilisateur sur votre instance. Pour plus d’informations, consultez « [Désactivation des inscriptions non authentifiées](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups) ».

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Configuration de l’authentification intégrée

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Sélectionnez **Authentification intégrée**.
![Sélectionner l’option Authentification intégrée](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Création de votre compte

Une fois votre instance créée, vous devez créer votre propre compte d’administrateur.

1. Dans la page « Créer un compte d’administrateur » à l’adresse `http(s)://[hostname]/join`, choisissez votre nom d’utilisateur, votre mot de passe et votre adresse e-mail, puis cliquez sur **Créer un compte**.
![Créer un compte administrateur](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## Étapes suivantes

<a name="inviting-users"></a>

Après avoir configuré l’authentification intégrée et créé votre compte d’administration, vous pouvez inviter des personnes à créer des comptes et à utiliser votre instance. Pour plus d’informations, consultez « [Invitation de personnes à utiliser votre instance](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance) ».

## Pour aller plus loin

- « [Configuration de la messagerie pour les notifications](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications) »
