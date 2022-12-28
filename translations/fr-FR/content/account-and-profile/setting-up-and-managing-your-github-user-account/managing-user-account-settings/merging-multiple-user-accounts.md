---
title: Fusion de plusieurs comptes d’utilisateur
intro: If you have separate accounts for work and personal use, you can merge the accounts.
redirect_from:
- /articles/can-i-merge-two-accounts
- /articles/keeping-work-and-personal-repositories-separate
- /articles/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Merge multiple personal accounts
ms.openlocfilehash: 128a6c99f8a6208150067bb2c3668557b184c255
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086154"
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
3. [Supprimez le compte](/articles/deleting-your-user-account) que vous ne souhaitez plus utiliser.
4. Pour attribuer des commits passés au nouveau compte, ajoutez l’adresse e-mail que vous avez utilisée pour créer les commits au compte que vous conservez. Pour plus d’informations, consultez « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account) ».

## <a name="further-reading"></a>Pour aller plus loin

- « [Types de comptes {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts) »
