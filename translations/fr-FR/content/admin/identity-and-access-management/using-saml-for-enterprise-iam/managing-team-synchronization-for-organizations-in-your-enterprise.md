---
title: Gestion de la synchronisation d’équipe pour les organisations de votre entreprise
intro: 'Vous pouvez activer la synchronisation des équipes entre Azure AD et {% data variables.product.product_name %} pour permettre aux organisations appartenant à votre compte d’entreprise de gérer les membres de l’équipe par le biais de groupes de fournisseurs d’identité.'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076934'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## À propos de la synchronisation d’équipe pour les comptes d’entreprise

Si vous utilisez SAML au niveau entreprise avec Azure AD comme fournisseur d’identité, vous pouvez activer la synchronisation d’équipe pour votre compte d’entreprise afin de permettre aux propriétaires d’organisation et aux responsables de l’équipe de synchroniser les équipes dans les organisations détenues par vos comptes d’entreprise avec des groupes d’IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Vous pouvez également configurer et gérer la synchronisation d’équipe pour une organisation individuelle. Pour plus d’informations, consultez « [Gestion de la synchronisation des équipes pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) ».

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Prérequis

Vous ou votre administrateur Azure AD devez être un administrateur général ou un administrateur de rôle privilégié dans Azure AD.
 
Vous devez appliquer l’authentification unique SAML pour les organisations de votre compte d’entreprise avec votre fournisseur d’identité pris en charge. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».

Vous devez vous authentifier auprès de votre compte d’entreprise à l’aide de l’authentification unique SAML et du fournisseur d’identité pris en charge. Pour plus d’informations, consultez « [Authentification avec l’authentification unique SAML](/articles/authenticating-with-saml-single-sign-on) ».

## Gestion de la synchronisation d’équipe pour Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. Passez en revue les détails du locataire IdP que vous souhaitez connecter à votre compte d’entreprise, puis cliquez sur **Approuver**.
  ![Demande en attente pour activer la synchronisation d’équipe sur un locataire IdP spécifique avec l’option d’approbation ou d’annulation de la demande](/assets/images/help/teams/approve-team-synchronization.png)
8. Pour désactiver la synchronisation d’équipe, cliquez sur **Désactiver la synchronisation d’équipe**.
  ![Désactiver la synchronisation d’équipe](/assets/images/help/teams/disable-team-synchronization.png)
