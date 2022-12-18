---
title: Visualisation et gestion de l’accès SAML d’un utilisateur à votre entreprise
intro: 'Vous pouvez afficher et révoquer l’identité liée, les sessions actives et les informations d’identification autorisées d’un membre de l’entreprise.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
ms.openlocfilehash: 25c706f5aff79f65adf4968546a9a8123794f583
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104701'
---
## À propos de l’accès SAML à votre compte d’entreprise

Quand vous activez l’authentification unique SAML pour votre compte d’entreprise, chaque membre de l’entreprise peut lier son identité externe sur votre fournisseur d’identité (IdP) à son compte existant sur {% data variables.product.product_location %}. {% data reusables.saml.about-saml-access-enterprise-account %}

Si votre entreprise utilise {% data variables.product.prodname_emus %}, vos membres utilisent des comptes provisionnés par le biais de votre fournisseur d’identité. Les {% data variables.product.prodname_managed_users_caps %} n’utilisent pas leur compte d’utilisateur existant sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».

## Visualisation et révocation d’une identité liée

{% data reusables.saml.about-linked-identities %}

Si votre entreprise utilise {% data variables.product.prodname_emus %}, vous ne pourrez pas déprovisionner ou supprimer des comptes d’utilisateur de l’entreprise sur {% data variables.product.product_name %}. Toutes les modifications que vous devez apporter aux {% data variables.product.prodname_managed_users %} de votre entreprise doivent être effectuées par le biais de votre fournisseur d’identité.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## Visualisation et révocation d’une session SAML active

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## Visualisation et révocation d’informations d’identification autorisées

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## Pour aller plus loin

- « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) »
