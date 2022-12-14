---
title: Bonnes pratiques pour quitter votre entreprise
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145087325"
---
Avant de quitter votre entreprise, veillez à mettre à jour les informations suivantes dans votre compte personnel :

- Dévérifiez votre adresse e-mail professionnelle en la [supprimant dans vos paramètres de messagerie](/articles/changing-your-primary-email-address). Vous pouvez ensuite la rajouter sans vérification afin de conserver les commits associés liés à votre compte.
- [Changez votre adresse e-mail principale](/articles/changing-your-primary-email-address) en remplaçant votre e-mail d’entreprise par votre e-mail personnel.
{% ifversion fpt or ghec %}
- [Vérifiez votre nouvelle adresse e-mail principale](/articles/verifying-your-email-address).
{% endif %}
- [Modifiez votre nom d’utilisateur GitHub](/articles/changing-your-github-username) pour supprimer toute référence à votre entreprise ou organisation, si nécessaire.

## <a name="leaving-organizations"></a>Quitter une organisation

Si vous avez travaillé avec des dépôts appartenant à une organisation, vous devez [vous supprimer en tant que membre de l’organisation](/articles/removing-yourself-from-an-organization). Notez que si vous êtes le propriétaire de l’organisation, vous devez d’abord [transférer la propriété de l’organisation](/articles/transferring-organization-ownership) à une autre personne.

## <a name="removing-professional-associations-with-personal-repositories"></a>Suppression d’associations professionnelles avec des dépôts personnels

Si vous avez collaboré professionnellement avec une autre personne sur des dépôts qui appartiennent à son compte personnel, vous devez [vous supprimer en tant que collaborateur](/articles/removing-yourself-from-a-collaborator-s-repository) de ces dépôts.

- [Arrêtez la surveillance des dépôts](https://github.com/watching) liés à votre travail. Vous n’aurez plus besoin de recevoir ces notifications.
- [Transférez les dépôts dont vous êtes propriétaire](/articles/how-to-transfer-a-repository) et dont d’autres personnes peuvent avoir besoin pour continuer à travailler après votre départ.
- [Supprimez les duplications qui vous appartiennent](/articles/deleting-a-repository) et qui sont liées au travail que vous faisiez. Ne vous inquiétez pas, la suppression d’une duplication ne supprime pas le dépôt en amont.
- Supprimez les copies locales de vos duplications qui peuvent exister sur votre ordinateur :

```shell
$ rm -rf <em>work_directory</em>
```
