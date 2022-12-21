---
title: Configuration du provisionnement SCIM pour Enterprise Managed Users avec Okta
shortTitle: Set up provisioning with Okta
intro: You can provision new users and manage their membership of your enterprise and teams using Okta as your identity provider.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
- /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 6c143b8ef729ab7343cf14613acf5f528384135c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145102929"
---
## <a name="about-provisioning-with-okta"></a>À propos du provisionnement avec Okta

Vous pouvez utiliser {% data variables.product.prodname_emus %} avec Okta comme fournisseur d’identité pour provisionner de nouveaux comptes, gérer l’appartenance à l’entreprise et gérer les appartenances aux équipes pour les organisations de votre entreprise. Pour plus d’informations sur le provisionnement pour {% data variables.product.prodname_emus %}, consultez « [Configuration du provisionnement SCIM pour Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users) ».

Pour pouvoir configurer le provisionnement avec Okta, vous devez configurer l’authentification unique SAML. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users) ».

Pour configurer le provisionnement avec Okta, vous devez définir le nom de votre entreprise dans l’application {% data variables.product.prodname_emu_idp_application %} et entrer le jeton d’accès personnel de votre utilisateur de configuration. Vous pouvez ensuite commencer le provisionnement des utilisateurs dans Okta.

## <a name="supported-features"></a>Fonctionnalités prises en charge

{% data variables.product.prodname_emus %} prend en charge de nombreuses fonctionnalités de provisionnement d’Okta.

| Fonctionnalité | Description |
| --- | --- |
| Push New Users | Les utilisateurs attribués à l’application {% data variables.product.prodname_emu_idp_application %} dans Okta sont automatiquement créés dans l’entreprise sur {% data variables.product.product_name %}. |
| Push Profile Update | Les mises à jour effectuées sur le profil de l’utilisateur dans Okta seront poussées sur {% data variables.product.product_name %}. |
| Push Groups | Les groupes dans Okta qui sont attribués à l’application {% data variables.product.prodname_emu_idp_application %} comme Push Groups sont automatiquement créés dans l’entreprise sur {% data variables.product.product_name %}. |
| Push User Deactivation | La désattribution de l’utilisateur de l’application {% data variables.product.prodname_emu_idp_application %} dans Okta désactivera l’utilisateur sur {% data variables.product.product_name %}. L’utilisateur ne pourra pas se connecter, mais ses informations seront conservées. |
| Reactivate Users | Les utilisateurs dans Okta dont les comptes Okta sont réactivés et qui sont réattribués à l’application {% data variables.product.prodname_emu_idp_application %} seront activés. |

{% note %}

**Remarque :** {% data variables.product.prodname_emus %} ne prend pas en charge la modification des noms d’utilisateur.

{% endnote %}

## <a name="setting-your-enterprise-name"></a>Définition du nom de votre entreprise

Quand votre {% data variables.product.prodname_emu_enterprise %} a été créée, vous pouvez commencer à configurer le provisionnement en définissant le nom de votre entreprise dans Okta.

1. Accédez à votre application {% data variables.product.prodname_emu_idp_application %} sur Okta.
1. Cliquez sur l’onglet **Sign On**.
1. Pour effectuer des modifications, cliquez sur **Edit**.
1. Sous « Advanced Sign-on Settings », dans la zone de texte « Enterprise Name », tapez le nom de votre entreprise. Par exemple, si vous accédez à votre entreprise à l’adresse `https://github.com/enterprises/octoinc`, le nom de votre entreprise est « octoinc ».
![Capture d’écran du champ Enterprise Name sur Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Pour enregistrer le nom de votre entreprise, cliquez sur **Save**.

## <a name="configuring-provisioning"></a>Configuration du provisionnement

Après avoir défini le nom de votre entreprise, vous pouvez passer à la configuration des paramètres de provisionnement.

Pour configurer le provisionnement, l’utilisateur de configuration avec le nom d’utilisateur **@<em>CODE-COURT</em>_admin** doit fournir un jeton d’accès personnel avec l’étendue **admin:enterprise**. Pour plus d’informations sur la création d’un jeton, consultez « [Création d’un jeton d’accès personnel](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token) ».

1. Accédez à votre application {% data variables.product.prodname_emu_idp_application %} sur Okta.
1. Cliquez sur l'onglet **Configuration**.
1. Dans le menu de paramètres, cliquez sur **Integration**.
1. Pour effectuer des modifications, cliquez sur **Edit**.
1. Sélectionnez **Enable API integration**.
1. Dans le champ « API Token », entrez le jeton d’accès personnel avec l’étendue **admin:enterprise** appartenant à l’utilisateur de configuration.
![Capture d’écran montrant le champ API Token sur Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Cliquez sur **Test API Credentials**. Si le test réussit, un message de vérification s’affiche en haut de l’écran.
1. Pour enregistrer le jeton, cliquez sur **Save**.
1. Dans le menu de paramètres, cliquez sur **To App**.
![Capture d’écran montrant l’élément de menu To App sur Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. À droite de « Provisioning to App », pour autoriser les modifications, cliquez sur **Edit**.
1. Sélectionnez **Enable** pour **Create Users**, **Update User Attributes** et **Deactivate Users**.
![Capture d’écran montrant les options de provisionnement sur Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Pour terminer la configuration du provisionnement, cliquez sur **Save**.

## <a name="assigning-users-and-groups"></a>Affectation d'utilisateurs et de groupes

Après avoir configuré l’authentification unique SAML et le provisionnement, vous pourrez provisionner de nouveaux utilisateurs sur {% data variables.product.prodname_dotcom_the_website %} en attribuant des utilisateurs à l’application {% data variables.product.prodname_emu_idp_application %}. 

{% data reusables.scim.emu-scim-rate-limit %}

Vous pouvez également gérer l’appartenance à l’organisation automatiquement en attribuant des groupes à l’application et en les ajoutant à l’onglet « Push Groups » dans Okta. Si le groupe est correctement provisionné, il pourra se connecter aux équipes des organisations de l’entreprise. Pour plus d’informations sur la gestion des équipes, consultez « [Gestion des appartenances aux équipes avec des groupes de fournisseur d’identité](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups) ».

Quand vous attribuez des utilisateurs, vous pouvez utiliser l’attribut « Rôles » dans l’application {% data variables.product.prodname_emu_idp_application %} pour définir le rôle d’un utilisateur dans votre entreprise sur {% data variables.product.product_name %}. Pour plus d’informations sur les rôles, consultez « [Rôles dans une entreprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

![Capture d’écran montrant les options de rôle pour l’utilisateur provisionné sur Okta](/assets/images/help/enterprises/okta-emu-user-role.png)
