---
title: Réactivation d’un ancien membre de votre organisation
intro: 'Les propriétaires d’organisation peuvent {% ifversion fpt or ghec %}inviter d’anciens membres de l’organisation à rejoindre{% else %}ajouter d’anciens membres à{% endif%} votre organisation et déterminer s’il convient de restaurer les anciens rôle, autorisations d’accès, duplications (fork) et paramètres de la personne.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101478'
---
## À propos du rétablissement de membres

Quand un utilisateur est supprimé de votre organisation de l’une des manières suivantes, les paramètres et les privilèges d’accès de l’utilisateur sont conservés pendant trois mois. 

- Vous avez supprimé manuellement l’utilisateur de votre organisation. Pour plus d’informations, consultez « [Suppression d’un membre de votre organisation](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) ».{% ifversion not ghae %}
- L’utilisateur a été supprimé de votre organisation, car vous avez exigé que les membres et les collaborateurs externes activent l’authentification à deux facteurs (2FA). Pour plus d’informations, consultez « [Exiger l’authentification à deux facteurs dans votre organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization) ».{% endif %}{% ifversion fpt or ghec %}
- L’utilisateur a été supprimé de votre organisation, car vous avez activé l’authentification unique SAML. Pour plus d’informations, consultez « [Activation de l’authentification unique SAML pour votre organisation](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}
- Vous avez converti un membre de l’organisation en collaborateur externe. Pour plus d’informations, consultez « [Conversion d’un membre de l’organisation en collaborateur externe](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator) ».

Vous pouvez restaurer les privilèges de l’utilisateur si vous le {% ifversion fpt or ghec %}réinvitez{% else %}rajoutez{% endif %} à l’organisation dans ce délai.

{% note %}

**Remarque :** {% data reusables.saml.removed-users-can-rejoin %} Vous n’avez pas besoin d’inviter ces utilisateurs à rejoindre l’organisation. Au lieu de cela, l’utilisateur peut se connecter à son compte personnel, accéder à l’organisation et cliquer sur la bannière pour s’authentifier avec l’authentification unique SAML.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Lorsque vous rétablissez un ancien membre de l’organisation, vous pouvez restaurer :
 - Le rôle de l’utilisateur dans l’organisation
 - Les duplications privées des dépôts appartenant à l’organisation
 - L’appartenance aux équipes de l’organisation
 - L’accès et les autorisations précédents pour les dépôts de l’organisation
 - Les étoiles pour les dépôts de l’organisation
 - Les affectations de problème dans l’organisation
 - Les abonnements aux dépôts (paramètres de notification pour observer, ne pas observer ou ignorer l’activité d’un dépôt)

{% ifversion ghes %} Si un membre de l’organisation avait été supprimé de l’organisation parce qu’il n’utilisait pas l’authentification à deux facteurs et que votre organisation exige toujours que les membres utilisent l’authentification à deux facteurs, l’ancien membre est tenu d’activer ce type d’authentification pour que son appartenance puisse être rétablie.
{% endif %}

{% ifversion fpt or ghec %} Si votre organisation a souscrit un abonnement payant par utilisateur, il doit rester au moins une licence inutilisée disponible pour qu’un ancien membre de l’organisation puisse être rétabli. Pour plus d’informations, consultez « [À propos des tarifs par utilisateur](/articles/about-per-user-pricing) ». {% data reusables.organizations.org-invite-scim %} {% endif %}

## Réactivation d’un ancien membre de votre organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. Choisissez de restaurer les privilèges précédents de cette personne dans l’organisation en cliquant sur **Inviter et rétablir**, ou supprimez ses privilèges précédents et définissez de nouvelles autorisations d’accès en cliquant sur **Inviter et repartir de zéro**.
  ![Choisir de restaurer ou non les informations](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Choisissez de restaurer les privilèges précédents de cette personne dans l’organisation en cliquant sur **Ajouter et rétablir**, ou supprimez ses privilèges précédents et définissez de nouvelles autorisations d’accès en cliquant sur **Ajouter et repartir de zéro**.
  ![Choisir de restaurer ou non les privilèges](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Si vous avez supprimé les privilèges précédents pour un ancien membre de l’organisation, choisissez un rôle pour l’utilisateur, et ajoutez-le à des équipes s’il y a lieu, puis cliquez sur **Envoyer une invitation**.
  ![Options de rôle et d’équipe, et bouton Envoyer une invitation](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Si vous avez supprimé les privilèges précédents pour un ancien membre de l’organisation, choisissez un rôle pour l’utilisateur, et ajoutez-le à des équipes s’il y a lieu, puis cliquez sur **Ajouter un membre**.
  ![Options de rôle et d’équipe, et bouton Ajouter un membre](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Pour aller plus loin

- « [Conversion d’un membre de l’organisation en collaborateur externe](/articles/converting-an-organization-member-to-an-outside-collaborator) »
