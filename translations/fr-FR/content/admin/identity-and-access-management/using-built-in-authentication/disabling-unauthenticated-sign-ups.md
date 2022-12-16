---
title: Désactivation des inscriptions non authentifiées
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: 'Si vous utilisez l’authentification intégrée pour {% data variables.product.product_location %}, vous pouvez empêcher les personnes non authentifiées de créer des comptes d’utilisateur sur votre instance.'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
ms.openlocfilehash: 063da3aa1e73501d05251e40d7afcb271833afaf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065384'
---
## À propos des inscriptions non authentifiées

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} YVous pouvez désactiver les inscriptions non authentifiées et exiger une invitation pour créer un compte d’utilisateur sur votre instance.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Désactivation des inscriptions non authentifiées

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Désélectionnez **Activer l’inscription**.
![Case à cocher Activer l’inscription](/assets/images/enterprise/management-console/enable-sign-up.png) {% data reusables.enterprise_management_console.save-settings %}
