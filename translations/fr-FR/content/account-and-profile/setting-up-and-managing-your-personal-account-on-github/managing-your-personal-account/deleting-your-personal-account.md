---
title: Suppression de votre compte personnel
intro: 'Vous pouvez supprimer votre compte personnel sur {% data variables.product.product_location %} à tout moment.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
ms.openlocfilehash: c26ae9af0266defeaa7d0e15afc22b2edee2b7d2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147687181'
---
## À propos de la suppression de votre compte personnel

La suppression de votre compte personnel supprime tous les référentiels, les duplications (forks) de référentiels privés, les wikis, les problèmes, les demandes de tirage (pull requests) et les pages appartenant à votre compte. {% ifversion fpt or ghec %}Les problèmes et les demandes de tirage que vous avez créés, ainsi que les commentaires que vous avez effectués dans les dépôts détenus par d’autres utilisateurs, ne seront pas supprimés. Vos ressources et vos commentaires seront associés à [l’utilisateur fantôme](https://github.com/ghost).{% else %}Les problèmes et les demandes de tirage que vous avez créés, ainsi que les commentaires que vous avez effectués dans les dépôts détenus par d’autres utilisateurs, ne seront pas supprimés.{% endif %}

{% ifversion ghec %}

{% note %}

**Remarque**: Si votre entreprise gère votre compte et que vous vous connectez à {% data variables.product.product_location %} via le fournisseur d’identité de votre entreprise, vous ne pouvez pas supprimer votre compte. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users) ».

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Lorsque vous supprimez votre compte, nous cessons de vous le facturer. L’adresse e-mail associée au compte devient disponible pour une utilisation avec un autre compte sur {% data variables.product.product_location %}. Après 90 jours, le nom du compte devient également utilisable par toute autre personne avec un nouveau compte. {% endif %}

Si vous êtes le seul propriétaire d’une organisation, vous devez transférer la propriété à une autre personne ou supprimer l’organisation avant de pouvoir supprimer votre compte personnel. S’il existe d’autres propriétaires dans l’organisation, vous devez vous supprimer de l’organisation avant de pouvoir supprimer votre compte personnel.

Pour plus d'informations, consultez les articles suivants.

- « [Transfert de propriété d’une organisation](/articles/transferring-organization-ownership) »
- « [Suppression d’un compte d’organisation](/articles/deleting-an-organization-account) »
- « [Vous supprimer vous-même d’une organisation](/articles/removing-yourself-from-an-organization/) »

## Sauvegarder les données de votre compte

Avant de supprimer votre compte personnel, effectuez une copie de tous les référentiels, duplications privées, wikis, problèmes et demandes de tirage appartenant à votre compte. Pour plus d’informations, consultez « [Sauvegarde d’un dépôt](/repositories/archiving-a-github-repository/backing-up-a-repository) ».

{% warning %}

**Avertissement** : Une fois votre compte personnel supprimé, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}un propriétaire d’entreprise{% endif %} ne pourra pas restaurer votre contenu.

{% endwarning %}

## Supprimer votre compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. En bas de la page Paramètres du compte, sous « Supprimer le compte », cliquez sur **Supprimer votre compte**. Avant de pouvoir supprimer votre compte personnel :
    - Si vous êtes le seul propriétaire de l’organisation, vous devez transférer la propriété à une autre personne ou supprimer votre organisation.
    - S’il existe d’autres propriétaires d’organisation dans l’organisation, vous devez vous supprimer de l’organisation.
   ![Bouton de suppression de compte](/assets/images/help/settings/settings-account-delete.png)
4. Dans la boîte de dialogue « Vérifiez que vous êtes certain de vouloir faire cela », effectuez les étapes pour confirmer que vous comprenez ce qui se produit lorsque votre compte est supprimé : ![Boîte de dialogue de confirmation de suppression du compte](/assets/images/help/settings/settings-account-deleteconfirm.png){% ifversion fpt or ghec %}- Rappelez-vous que tous les dépôts, duplications de dépôts privés, wikis, problèmes, demandes de tirage et sites {% data variables.product.prodname_pages %} appartenant à votre compte seront supprimés, que votre facturation cessera immédiatement, et que votre nom d’utilisateur pourra être utilisé par n’importe qui sur {% data variables.product.product_name %} après 90 jours.
  {% else %}- Rappelez-vous que tous les dépôts, duplications de dépôts privés, wikis, problèmes, demandes de tirage et pages appartenant à votre compte seront supprimés, et que votre nom d’utilisateur pourra être utilisé sur {% data variables.product.product_name %} après 90 jours.
  {% endif %}- Dans le premier champ, tapez votre nom d’utilisateur ou e-mail {% data variables.product.product_name %}.
    - Dans le deuxième champ, tapez l’expression de l’invite.
