---
title: Bonnes pratiques pour quitter votre entreprise
intro: Si vous utilisez votre compte sur {% data variables.product.product_name %} à des fins personnelles et professionnelles, il existe quelques éléments à garder à l’esprit lorsque vous quittez votre entreprise ou votre organisation.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: e7de0fa01082731ae54e988ed49310b5ce6afbea
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 08/02/2022
ms.locfileid: "147444644"
---
Avant de quitter votre entreprise, veillez à mettre à jour les informations suivantes dans votre compte personnel :

- Dévérifiez votre adresse e-mail professionnelle en la [supprimant dans vos paramètres de messagerie](/articles/changing-your-primary-email-address). Vous pouvez ensuite la rajouter sans vérification afin de conserver les commits associés liés à votre compte.
- [Changez votre adresse e-mail principale](/articles/changing-your-primary-email-address) en remplaçant votre e-mail d’entreprise par votre e-mail personnel.
- [Vérifiez votre nouvelle adresse e-mail principale](/articles/verifying-your-email-address).
- [Modifiez votre nom d’utilisateur GitHub](/articles/changing-your-github-username) pour supprimer toute référence à votre entreprise ou organisation, si nécessaire.
- Si vous avez activé l’authentification à deux facteurs (2FA) pour votre compte personnel, vérifiez que vous (et non votre entreprise) contrôlez la méthode d’authentification 2FA que vous avez configurée. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) ».

## <a name="leaving-organizations"></a>Quitter une organisation

Si vous avez travaillé avec des dépôts appartenant à une organisation, vous devez [vous supprimer en tant que membre de l’organisation](/articles/removing-yourself-from-an-organization). Notez que si vous êtes le propriétaire de l’organisation, vous devez d’abord [transférer la propriété de l’organisation](/articles/transferring-organization-ownership) à une autre personne.

À moins que vous utilisiez un {% data variables.product.prodname_managed_user %}, vous pouvez toujours accéder à votre compte personnel même après avoir quitté l’organisation. Pour plus d’informations sur {% data variables.product.prodname_emus %}, consultez « [À propos d’{% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}

## <a name="removing-professional-associations-with-personal-repositories"></a>Suppression d’associations professionnelles avec des dépôts personnels

Si vous avez collaboré professionnellement avec une autre personne sur des référentiels qui appartiennent à son compte personnel, vous devez [vous supprimer en tant que collaborateur](/articles/removing-yourself-from-a-collaborator-s-repository) de ces référentiels.

- [Arrêtez la surveillance des dépôts](https://github.com/watching) liés à votre travail. Vous n’aurez plus besoin de recevoir ces notifications.
- [Transférez les dépôts dont vous êtes propriétaire](/articles/how-to-transfer-a-repository) et dont d’autres personnes peuvent avoir besoin pour continuer à travailler après votre départ.
- [Supprimez les duplications qui vous appartiennent](/articles/deleting-a-repository) et qui sont liées au travail que vous faisiez. Ne vous inquiétez pas, la suppression d’une duplication ne supprime pas le dépôt en amont.
- Supprimez les copies locales de vos duplications qui peuvent exister sur votre ordinateur :

```shell
$ rm -rf <em>work_directory</em>
```
