---
title: Invitation de collaborateurs à un dépôt personnel
intro: 'Vous pouvez {% ifversion fpt or ghec %}inviter des utilisateurs à devenir des{% else %}ajouter des utilisateurs en tant que{% endif %} collaborateurs de votre dépôt personnel.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator
  - /articles/adding-collaborators-to-a-personal-repository
  - /articles/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Invite collaborators
ms.openlocfilehash: b8cf147e94d4dd0a76d0bebcb07a58d03d7cbc9e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165042'
---
Les dépôts appartenant à une organisation peuvent accorder un accès plus précis. Pour plus d’informations, consultez « [Autorisations d’accès sur {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github) ».

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

Si vous êtes membre d’une {% data variables.product.prodname_emu_enterprise %}, vous pouvez uniquement inviter d’autres membres de votre entreprise à collaborer avec vous. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Remarque :** {% data variables.product.company_short %} limite le nombre de personnes qui peuvent être invitées à un dépôt durant une période de 24 heures. Si vous dépassez cette limite, attendez 24 heures ou créez une organisation pour collaborer avec plus de personnes.

{% endnote %}

{% endif %}

1. Demandez le nom d’utilisateur de la personne que vous invitez en tant que collaborateur.{% ifversion fpt or ghec %} Si elle n’a pas encore de nom d’utilisateur, elle peut s’inscrire à {% data variables.product.prodname_dotcom %} Pour plus d’informations, consultez « [Ouverture d’un nouveau compte {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account) ».{% endif %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%} {% data reusables.repositories.click-collaborators-teams %}
1. Cliquez sur **Invite a collaborator**.
  ![Bouton « Invite a collaborator »](/assets/images/help/repository/invite-a-collaborator-button.png)
2. Dans le champ de recherche, commencez à taper le nom de la personne que vous souhaitez inviter, puis cliquez sur un nom dans la liste des correspondances.
  ![Champ de recherche pour taper le nom d’une personne à inviter au dépôt](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Cliquez sur **Add NOM to DÉPÔT**.
    ![Bouton pour ajouter un collaborateur](/assets/images/help/repository/add-collaborator-user-repo.png) {% else %}
5. Dans la barre latérale gauche, cliquez sur **Collaborateurs**.
![Barre latérale des paramètres du dépôt avec Collaborateurs mis en surbrillance](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Sous « Collaborateurs », commencez à taper le nom d’utilisateur du collaborateur.
7. Sélectionnez le nom d’utilisateur du collaborateur dans le menu déroulant.
   ![Menu déroulant avec liste de collaborateurs](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Cliquez sur **Ajouter un collaborateur**.
   ![Bouton « Ajouter un collaborateur »](/assets/images/help/repository/repo-settings-collab-add.png) {% endif %} {% ifversion fpt or ghec %}
9. L’utilisateur recevra un e-mail l’invitant au dépôt. Une fois l’invitation acceptée, il aura accès à votre dépôt.
{% endif %}

## Pour aller plus loin

- « [Niveaux d’autorisation pour un dépôt de compte personnel](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) »
- « [Suppression d’un collaborateur d’un dépôt personnel](/articles/removing-a-collaborator-from-a-personal-repository) »
- « [Vous supprimer en tant que collaborateur d’un dépôt](/articles/removing-yourself-from-a-collaborator-s-repository) »
- « [Organisation de membres en équipes](/organizations/organizing-members-into-teams) »
