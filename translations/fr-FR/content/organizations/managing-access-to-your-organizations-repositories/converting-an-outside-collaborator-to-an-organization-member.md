---
title: Conversion d’un collaborateur externe en membre de l’organisation
intro: Si vous souhaitez donner à un collaborateur externe sur les référentiels de votre organisation des autorisations plus larges au sein de votre organisation, vous pouvez {% ifversion fpt or ghec %}l’inviter à devenir membre de{% else %}le faire devenir membre de{% endif %} l’organisation.
redirect_from:
- /articles/converting-an-outside-collaborator-to-an-organization-member
- /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.
topics:
- Organizations
- Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: bac55802407b46344c807798e4d8eade5f608e01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128504"
---
{% ifversion fpt or ghec %} Si votre organisation a souscrit un abonnement payant par utilisateur, une licence inutilisée disponible est nécessaire pour pouvoir inviter un nouveau membre à rejoindre l’organisation ou rétablir un ancien membre de l’organisation. Pour plus d’informations, consultez « [À propos des tarifs par utilisateur](/articles/about-per-user-pricing) ». {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %} Si votre organisation [exige que les membres utilisent l’authentification à deux facteurs](/articles/requiring-two-factor-authentication-in-your-organization), les utilisateurs {% ifversion fpt or ghec %}que vous invitez doivent [activer l’authentification à deux facteurs](/articles/securing-your-account-with-two-factor-authentication-2fa) pour pouvoir accepter l’invitation.{% else %}doivent [activer l’authentification à deux facteurs](/articles/securing-your-account-with-two-factor-authentication-2fa) pour que vous puissiez les ajouter à l’organisation.{% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. À droite du nom du collaborateur extérieur que vous souhaitez convertir en membre, utilisez le menu déroulant {% octicon "gear" aria-label="The gear icon" %} et cliquez sur **Inviter dans l’organisation**.![Inviter des collaborateurs externes dans l’organisation](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) {% else %}
5. À droite du nom du collaborateur externe que vous souhaitez convertir en membre, cliquez sur **Inviter dans l’organisation**.![Inviter des collaborateurs externes dans l’organisation](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Pour aller plus loin

- « [Conversion d’un membre de l’organisation en collaborateur externe](/articles/converting-an-organization-member-to-an-outside-collaborator) »
