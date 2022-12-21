---
title: Conversion d’un utilisateur en organisation
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/converting-a-user-into-an-organization
intro: Vous pouvez convertir votre compte personnel en organisation. Cela permet d’obtenir des autorisations plus précises pour les dépôts qui appartiennent à l’organisation.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: User into an organization
ms.openlocfilehash: 8b99bd119a9fa061c025a4fcc299d7ace31d23eb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687095'
---
{% warning %}

**Avertissement** : Avant de convertir un utilisateur en organisation, ayez à l’esprit les points suivants.

* Vous **ne pourrez plus** vous connecter au compte personnel converti.
* Vous **ne pourrez plus** créer ou modifier des gists appartenant au compte personnel converti.
* Une organisation **ne peut pas** être convertie en utilisateur.
* Les clés SSH, les jetons OAuth, le profil de travail, les réactions et les informations utilisateur associées **ne seront pas** transférés vers l’organisation. Cela s’applique uniquement au compte personnel en cours de conversion, et non aux collaborateurs du compte personnel.
* Les commits effectués avec le compte personnel converti **ne seront plus liés** à ce compte. Les commits eux-mêmes **resteront** intacts.
* Les commentaires existants faits avec le compte personnel converti **ne seront plus liés** à ce compte. Les commentaires eux-mêmes **vont** restent intacts, mais seront associés à l’utilisateur `ghost`.
* Toute duplication (fork) de dépôt privé effectuée avec le compte personnel converti sera supprimée.
{% endwarning %}

{% ifversion fpt or ghec or ghes %}
## Conserver votre compte personnel et créer une organisation manuellement

Si vous souhaitez que votre organisation porte le même nom que celui actuellement utilisé pour votre compte personnel, ou si vous souhaitez conserver les informations de votre compte personnel telles quelles, vous devez créer une organisation et transférer vos dépôts vers celle-ci au lieu de convertir votre compte personnel en organisation.

1. Pour conserver le nom de votre compte personnel actuel pour votre usage personnel, [renommez-le](/articles/changing-your-github-username).
2. [Créez une organisation](/articles/creating-a-new-organization-from-scratch) avec le nom d’origine de votre compte personnel.
3. [Transférez vos dépôts](/articles/transferring-a-repository) vers votre nouveau compte d’organisation.{% endif %}

## Convertir automatiquement votre compte personnel en organisation

Vous pouvez également convertir votre compte personnel directement en organisation. La conversion de votre compte :
 - Conserve les dépôts tels quels sans qu’il soit nécessaire de les transférer manuellement vers un autre compte.
 - Invite automatiquement les collaborateurs dans des équipes avec des autorisations équivalentes à celles qu’ils avaient auparavant {% ifversion fpt or ghec %}- Pour les comptes personnels sur {% data variables.product.prodname_pro %}, effectue automatiquement la transition de la facturation vers [la version payante de {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) sans qu’il soit à aucun moment nécessaire de réentrer les informations de paiement, d’ajuster votre période de facturation ou de payer en double{% endif %}

1. Créez un compte personnel, que vous utiliserez pour vous connecter à GitHub et accéder à l’organisation et à vos dépôts après la conversion.
2.  [Quittez toute organisation](/articles/removing-yourself-from-an-organization) qu’a rejoint le compte personnel que vous convertissez.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. Sous « Transformer le compte », cliquez sur **Convertir <username> en organisation**.
    ![Bouton de conversion en organisation](/assets/images/help/settings/convert-to-organization.png)
6. Dans la boîte de dialogue Avertissement de transformation de compte, passez en revue et confirmez la conversion. Notez que les informations contenues dans cette boîte sont identiques à l’avertissement mentionné en haut de cet article.
    ![Avertissement de conversion](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Dans la page « Transformer votre utilisateur en organisation », sous « Choisir un propriétaire d’organisation », choisissez le compte personnel secondaire que vous avez créé dans la section précédente ou un autre utilisateur que vous approuvez pour gérer l’organisation.
    ![Page d’ajout d’un propriétaire d’organisation](/assets/images/help/organizations/organization-add-owner.png)
8. Choisissez l’abonnement de votre nouvelle organisation et entrez vos informations de facturation si vous y êtes invité.
9. Cliquez sur **Créer une organisation**.
10. Connectez-vous au nouveau compte personnel que vous avez créé à l’étape 1, puis utilisez le sélecteur de contexte pour accéder à votre nouvelle organisation.

{% tip %}

**Astuce** : lorsque vous convertissez un compte personnel en organisation, nous ajoutons les collaborateurs des dépôts qui appartiennent au compte à la nouvelle organisation en tant que *collaborateurs externes*. Vous pouvez ensuite inviter des *collaborateurs externes* à devenir membres de votre nouvelle organisation si vous le souhaitez. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators) ».

{% endtip %}

## Pour aller plus loin
- « [Configuration des équipes](/articles/setting-up-teams) » {% ifversion fpt or ghec %}- « [Invitation d’utilisateurs à rejoindre votre organisation](/articles/inviting-users-to-join-your-organization) » {% endif %}
- « [Accès à une organisation](/articles/accessing-an-organization) »
