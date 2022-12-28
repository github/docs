---
title: Configuration du provisionnement SCIM pour Enterprise Managed Users
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104897"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>À propos du provisionnement pour {% data variables.product.prodname_emus %}

Vous devez configurer le provisionnement pour {% data variables.product.prodname_emus %} afin de créer, gérer et désactiver des comptes d’utilisateur pour vos membres d’entreprise. Quand vous configurez le provisionnement pour {% data variables.product.prodname_emus %}, les utilisateurs attribués à l’{% data variables.product.prodname_emu_idp_application %} dans votre fournisseur d’identité sont provisionnés comme nouveaux comptes d’utilisateur sur {% data variables.product.prodname_dotcom %} avec SCIM et les utilisateurs sont ajoutés à votre entreprise. 

Quand vous mettez à jour les informations associées à l’identité d’un utilisateur sur votre IdP, celui-ci met à jour le compte d’utilisateur sur GitHub.com. Quand vous annulez l’attribution de l’utilisateur à l’application {% data variables.product.prodname_emu_idp_application %} ou que vous désactivez un compte d’utilisateur sur votre IdP, votre IdP communique avec {% data variables.product.prodname_dotcom %} pour invalider toutes les sessions SAML et désactiver le compte du membre. Les informations du compte désactivé sont conservées et le nom d’utilisateur est remplacé par un hachage du nom d’utilisateur d’origine avec le code court en suffixe. Si vous réattribuez un utilisateur à l’application {% data variables.product.prodname_emu_idp_application %} ou réactivez son compte sur votre IdP, le compte de l’{% data variables.product.prodname_managed_user %} sur {% data variables.product.prodname_dotcom %} sera réactivé et le nom d’utilisateur sera restauré.

Les groupes de votre IdP peuvent être utilisés pour la gestion de l’appartenance aux équipes dans les organisations de votre entreprise, ce qui vous permet de configurer l’accès aux dépôts et les autorisations correspondantes par le biais de votre IdP. Pour plus d’informations, consultez « [Gestion des appartenances aux équipes avec les groupes d’un fournisseur d’identité](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups) ».

## <a name="prerequisites"></a>Prérequis

Pour pouvoir configurer le provisionnement pour {% data variables.product.prodname_emus %}, vous devez configurer l’authentification unique SAML. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users) ».

## <a name="creating-a-personal-access-token"></a>Création d’un jeton d’accès personnel

Pour configurer le provisionnement pour votre {% data variables.product.prodname_emu_enterprise %}, vous avez besoin d’un jeton d’accès personnel avec l’étendue **admin:enterprise** appartenant à l’utilisateur de configuration.

{% warning %}

**Avertissement :** Si le jeton expire ou si un utilisateur provisionné crée le jeton, le provisionnement SCIM peut cesser de fonctionner de manière inattendue. Veillez à créer le jeton en étant connecté comme utilisateur de configuration et à ce que l’expiration du jeton soit définie sur « Pas d’expiration ».

{% endwarning %}

1. Connectez-vous à {% data variables.product.prodname_dotcom_the_website %} comme utilisateur de configuration de votre nouvelle entreprise avec le nom d’utilisateur **@<em>CODE-COURT</em>_admin**.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. Sous **Note**, donnez à votre jeton un nom descriptif.
   ![Capture d’écran montrant le nom du jeton](/assets/images/help/enterprises/emu-pat-name.png)
1. Sélectionnez le menu déroulant **Expiration**, puis cliquez sur **Pas d’expiration**.
   ![Capture d’écran montrant l’expiration du jeton définie sur Pas d’expiration](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Sélectionnez l’étendue **admin:enterprise**.
   ![Capture d’écran montrant l’étendue admin:enterprise](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Cliquez sur **Générer un jeton**.
   ![Bouton Générer un jeton](/assets/images/help/settings/generate_token.png)
1. Pour copier le jeton dans le Presse-papiers, cliquez sur {% octicon "paste" aria-label="The copy icon" %}.
   ![Jeton nouvellement créé](/assets/images/help/settings/personal_access_tokens.png)
2. Pour enregistrer le jeton en vue d’une utilisation ultérieure, stockez le nouveau jeton de manière sécurisée dans un gestionnaire de mots de passe.

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>Configuration du provisionnement pour {% data variables.product.prodname_emus %}

Après avoir créé votre jeton d’accès personnel et l’avoir stocké de manière sécurisée, vous pouvez configurer le provisionnement sur votre fournisseur d’identité.

{% data reusables.scim.emu-scim-rate-limit %}

Pour configurer Azure Active Directory afin de provisionner des utilisateurs pour votre {% data variables.product.prodname_emu_enterprise %}, consultez [Tutoriel : Configurer GitHub Enterprise Managed User pour le provisionnement automatique d’utilisateurs](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) dans la documentation Azure AD.

Pour configurer Okta afin de provisionner des utilisateurs pour votre {% data variables.product.prodname_emu_enterprise %}, consultez « [Configuration du provisionnement SCIM pour Enterprise Managed Users avec Okta](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) ».

