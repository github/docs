---
title: Rétablissement de l’accès d’un ancien collaborateur externe à votre organisation
intro: Vous pouvez rétablir les autorisations d’accès d’un ancien collaborateur externe pour les dépôts d’organisation, les duplications (fork) et les paramètres.
redirect_from:
- /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
- /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
- /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178902"
---
Quand l’accès d’un collaborateur externe aux dépôts privés de votre organisation est supprimé, les privilèges d’accès et les paramètres de l’utilisateur restent enregistrés pendant trois mois. Vous pouvez restaurer les privilèges de l’utilisateur si vous le {% ifversion fpt or ghec %}réinvitez{% else %}rajoutez{% endif %} à l’organisation dans ce délai.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Quand vous réintégrez un ancien collaborateur externe, vous pouvez restaurer :
 - L’ancien accès de l’utilisateur aux dépôts de l’organisation
 - Les duplications privées des dépôts appartenant à l’organisation
 - L’appartenance aux équipes de l’organisation
 - L’accès et les autorisations précédents pour les dépôts de l’organisation
 - Les étoiles pour les dépôts de l’organisation
 - Les affectations de problème dans l’organisation
 - Les abonnements aux dépôts (paramètres de notification pour observer, ne pas observer ou ignorer l’activité d’un dépôt)

{% tip %}

**Conseils** :

 - Seuls les propriétaires d’organisation peuvent rétablir l’accès des collaborateurs extérieurs à une organisation.{% ifversion prevent-org-admin-add-outside-collaborator %} Les propriétaires d’entreprise peuvent restreindre davantage la possibilité de rétablir l’accès des collaborateurs extérieurs aux propriétaires d’entreprise uniquement.{% endif %} Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».
 - Le flux de réintégration d’un membre sur {% data variables.product.product_location %} peut utiliser le terme « membre » pour décrire la réintégration d’un collaborateur externe, mais si vous réintégrez cette personne et que vous conservez ses privilèges précédents, elle aura seulement ses [autorisations de collaborateur externe](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators) précédentes.{% ifversion fpt or ghec %}
 - Si votre organisation a souscrit un abonnement payant par utilisateur, il doit rester au moins une licence inutilisée disponible pour pouvoir inviter un nouveau membre à rejoindre l’organisation ou pour réintégrer un ancien membre de l’organisation. Pour plus d’informations, consultez « [À propos des tarifs par utilisateur](/articles/about-per-user-pricing) ».{% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. Choisissez de restaurer les privilèges précédents du collaborateur externe dans l’organisation en cliquant sur **Inviter et réintégrer**, ou effacez ses privilèges précédents et définissez de nouvelles autorisations d’accès en cliquant sur **Inviter et repartir à zéro**.

  {% warning %}

  **Avertissement :** Si vous voulez promouvoir le collaborateur extérieur en membre de votre organisation, choisissez **Inviter et repartir à zéro**, puis choisissez un nouveau rôle pour cette personne. Notez cependant que pour cette personne, les duplications privées des dépôts de votre organisation seront perdues si vous choisissez de repartir à zéro. Pour faire de l’ancien collaborateur externe un membre de votre organisation *et* conserver ses duplications privées, choisissez à la place **Inviter et réintégrer**. Une fois que cette personne accepte l’invitation, vous pouvez la convertir en membre de l’organisation [en l’invitant à rejoindre l’organisation en tant que membre](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Choisir de restaurer ou non les paramètres](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Choisissez de restaurer les privilèges précédents du collaborateur externe dans l’organisation en cliquant sur **Ajouter et réintégrer**, ou effacez ses privilèges précédents et définissez de nouvelles autorisations d’accès en cliquant sur **Ajouter et repartir à zéro**.

  {% warning %}

  **Avertissement :** Si vous voulez promouvoir le collaborateur extérieur en membre de votre organisation, choisissez **Ajouter et repartir à zéro**, puis choisissez un nouveau rôle pour cette personne. Notez cependant que pour cette personne, les duplications privées des dépôts de votre organisation seront perdues si vous choisissez de repartir à zéro. Pour faire de l’ancien collaborateur externe un membre de votre organisation *et* conserver ses duplications privées, choisissez à la place **Ajouter et réintégrer**. Ensuite, vous pouvez le convertir en membre de l’organisation [en l’ajoutant à l’organisation en tant que membre](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Choisir de restaurer ou non les paramètres](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Si vous avez effacé les privilèges précédents pour un ancien collaborateur externe, choisissez un rôle pour l’utilisateur et ajoutez-le éventuellement à certaines équipes, puis cliquez sur **Envoyer une invitation**.
  ![Options de rôle et d’équipe, et bouton Envoyer une invitation](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Si vous avez effacé les privilèges précédents pour un ancien collaborateur externe, choisissez un rôle pour l’utilisateur et ajoutez-le éventuellement à certaines équipes, puis cliquez sur **Ajouter un membre**.
  ![Options de rôle et d’équipe, bouton Ajouter un membre](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. La personne invitée va recevoir un e-mail l’invitant à rejoindre l’organisation. Elle devra accepter l’invitation avant de devenir collaborateur externe dans l’organisation. {% data reusables.organizations.cancel_org_invite %} {% endif %}

## En savoir plus

- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
