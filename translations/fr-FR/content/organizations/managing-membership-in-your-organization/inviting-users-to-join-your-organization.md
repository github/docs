---
title: Inviter des utilisateurs à rejoindre votre organisation
intro: 'Vous pouvez inviter toute personne à devenir membre de votre organisation en utilisant son nom d’utilisateur ou son adresse e-mail pour {% data variables.product.product_location %}.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: f0b5d1c41fc5f348077a77d29ac4be309c1cad0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101482'
---
## À propos des invitations d’organisation

Si votre organisation a souscrit un abonnement payant par utilisateur, il doit rester au moins une licence inutilisée disponible pour pouvoir inviter un nouveau membre à rejoindre l’organisation ou rétablir un ancien membre de l’organisation. Pour plus d’informations, consultez « [À propos des tarifs par utilisateur](/articles/about-per-user-pricing) ». 

{% data reusables.organizations.org-invite-scim %}

Si votre organisation exige que les membres utilisent l’authentification à deux facteurs, les utilisateurs que vous invitez sont tenus d’activer l’authentification à deux facteurs avant de pouvoir accepter l’invitation. Pour plus d’informations, consultez « [Exiger l’authentification à deux facteurs dans votre organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization) » et « [Sécurisation de votre compte avec l’authentification à deux facteurs (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa) ».

{% ifversion fpt %}Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent{% else %}Vous pouvez{% endif %} implémenter SCIM pour ajouter, gérer et supprimer l’accès de membres de l’organisation à {% data variables.product.prodname_dotcom_the_website %} par le biais d’un fournisseur d’identité (IdP). Pour plus d’informations, consultez « [À propos de SCIM pour les organisations](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}

## Inviter un utilisateur à rejoindre votre organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## Pour aller plus loin
- « [Ajout de membres d’une organisation à une équipe](/articles/adding-organization-members-to-a-team) »
