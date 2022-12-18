---
title: Affichage et gestion de l’accès SAML d’un membre à votre organisation
intro: 'Vous pouvez afficher et révoquer l’identité liée, les sessions actives et les informations d’identification autorisées d’un membre de l’organisation.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SAML access
ms.openlocfilehash: 5b8dbe15037eabe416a6b0c63df7f893db8445bb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128560'
---
## À propos de l’accès SAML à votre organisation

Quand vous activez l’authentification unique SAML pour votre organisation, chaque membre de celle-ci peut lier son identité externe sur votre fournisseur d’identité (IdP) à son compte existant sur {% data variables.product.product_location %}. Pour accéder aux ressources de votre organisation sur {% data variables.product.product_name %}, le membre doit disposer d’une session SAML active dans son navigateur. Pour accéder aux ressources de votre organisation à l’aide de l’API ou du Git, le membre doit utiliser un jeton d’accès personnel ou une clé SSH dont il a autorisé l’utilisation avec votre organisation.

Vous pouvez afficher et révoquer l’identité liée, les sessions actives et les informations d’identification autorisées de chaque membre sur la même page.

## Visualisation et révocation d’une identité liée

{% data reusables.saml.about-linked-identities %} 

Quand elle est disponible, l’entrée inclut les données SCIM. Pour plus d’informations, consultez « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».

{% warning %}

**Avertissement :** pour les organisations utilisant SCIM :
- La révocation d’une identité utilisateur liée sur {% data variables.product.product_name %} aura également pour effet de supprimer les métadonnées SAML et SCIM. Par conséquent, le fournisseur d’identité ne pourra pas synchroniser ou déprovisionner l’identité utilisateur liée.
- Un administrateur doit révoquer une identité liée via le fournisseur d’identité.
- Pour révoquer une identité liée et lier un autre compte via le fournisseur d’identité, un administrateur peut supprimer et réaffecter l’utilisateur à l’application {% data variables.product.product_name %}. Pour plus d’informations, consultez la documentation de votre fournisseur d’identité.

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## Visualisation et révocation d’une session SAML active

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## Visualisation et révocation d’informations d’identification autorisées

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## Pour aller plus loin

- « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) »{% ifversion ghec %}
- « [Visualisation et gestion de l’accès SAML d’un utilisateur à votre entreprise](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise) »{% endif %}
