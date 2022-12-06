---
title: Fusion de plusieurs comptes personnels
intro: 'Si vous avez des comptes distincts pour l’utilisation professionnelle et personnelle, vous pouvez fusionner les comptes.'
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/merging-multiple-personal-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Merge multiple accounts
ms.openlocfilehash: 39198c8fdd0078321774eac4180f84a2b039d25e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687168'
---
{% tip %}

{% ifversion ghec %}

**Astuce :** Les {% data variables.product.prodname_emus %} permettent à une entreprise de provisionner des comptes personnels uniques pour ses membres par le biais d’un fournisseur d’identité (IdP). Pour plus d’informations, consultez « [À propos des utilisateurs d’entreprise managés](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users) ». Pour d’autres cas d’usage, nous vous recommandons d’utiliser un seul compte personnel pour gérer à la fois les dépôts personnels et professionnels.

{% else %}

**Conseil :** Nous vous recommandons d’utiliser un seul compte personnel pour gérer à la fois les dépôts personnels et professionnels. 

{% endif %}

{% endtip %}

{% warning %}

**Avertissement :** 
- Les autorisations d’accès à l’organisation et au dépôt ne sont pas transmissibles entre les comptes. Si le compte que vous souhaitez supprimer dispose d’une autorisation d’accès existante, un propriétaire d’organisation ou un administrateur de dépôt doit inviter le compte que vous souhaitez conserver.
- Les commits créés avec une adresse e-mail `noreply` fournie par GitHub ne peuvent pas être transférés d’un compte à un autre. Si le compte que vous souhaitez supprimer a utilisé l’option **Laisser mon adresse e-mail privée**, il n’est pas possible de transférer les commits créés par le compte que vous supprimez vers le compte que vous souhaitez conserver.

{% endwarning %}

1. [Transférez tous les dépôts](/articles/how-to-transfer-a-repository) du compte que vous souhaitez supprimer vers le compte que vous souhaitez conserver. Les problèmes, les demandes de tirage et les wikis sont également transférés. Vérifiez que les dépôts existent sur le compte que vous souhaitez conserver.
2. [Mettez à jour les URL distantes](/github/getting-started-with-github/managing-remote-repositories) dans tous les clones locaux des dépôts qui ont été déplacés.
3. [Supprimez le compte](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account) que vous ne souhaitez plus utiliser.
4. Pour attribuer des commits passés au nouveau compte, ajoutez l’adresse e-mail que vous avez utilisée pour créer les commits au compte que vous conservez. Pour plus d’informations, consultez « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account) ».

## Pour aller plus loin

- « [Types de comptes {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts) »
