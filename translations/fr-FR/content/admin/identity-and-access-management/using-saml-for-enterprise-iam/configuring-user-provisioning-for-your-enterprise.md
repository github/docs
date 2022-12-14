---
title: Configuration du provisionnement d’utilisateurs pour votre entreprise
shortTitle: Configure user provisioning
intro: Vous pouvez configurer SCIM (System for Cross-domain Identity Management) pour votre entreprise, qui provisionne automatiquement les comptes d’utilisateurs sur {% data variables.product.product_location %} quand vous affectez l’application pour {% data variables.product.product_location %} à un utilisateur sur votre fournisseur d’identité (IDP).
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c76cf3a3245b272fc61db68470e7a34796a89e42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145102914"
---
## À propos du provisionnement d’utilisateurs pour votre entreprise

{% data reusables.saml.ae-uses-saml-sso %} Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise) ».

Vous pouvez configurer le provisionnement d’utilisateurs avec SCIM pour créer ou suspendre automatiquement des comptes d’utilisateur et accorder l’accès à {% data variables.product.product_name %} quand vous affectez l’application ou annulez son affectation sur votre fournisseur d’identité. Pour plus d’informations sur SCIM, consultez [System for Cross-domain Identity Management : Protocole (RFC 7644)](https://tools.ietf.org/html/rfc7644) sur le site web de l’IETF.

Si vous ne configurez pas le provisionnement d’utilisateurs avec SCIM, votre fournisseur d’identité ne communique pas automatiquement avec {% data variables.product.product_name %} vous affectez l’application ou annulez son affectation à un utilisateur. Sans SCIM, {% data variables.product.product_name %} crée un compte d’utilisateur à l’aide du provisionnement juste-à-temps (JIT) SAML la première fois que quelqu’un accède à {% data variables.product.product_name %} et se connecte en s’authentifiant via votre fournisseur d’identité.

La configuration du provisionnement permet à votre fournisseur d’identité de communiquer avec {% data variables.product.product_location %} quand vous affectez l’application ou annulez son affectation pour {% data variables.product.product_name %} à un utilisateur sur votre fournisseur d’identité. Quand vous affectez l’application, votre fournisseur d’identité invite {% data variables.product.product_location %} à créer un compte et à envoyer un e-mail d’intégration à l’utilisateur. Quand vous annulez l’affectation de l’application, votre fournisseur d’identité communique avec {% data variables.product.product_name %} pour invalider toutes les sessions SAML et désactiver le compte du membre.

Pour configurer le provisionnement pour votre entreprise, vous devez activer le provisionnement sur {% data variables.product.product_name %}, puis installer et configurer une application de provisionnement sur votre fournisseur d’identité.

L’application de provisionnement sur votre fournisseur d’identité communique avec {% data variables.product.product_name %} via notre API SCIM pour entreprises. Pour plus d’informations, consultez « [Administration de GitHub Enterprise](/rest/reference/enterprise-admin#scim) » dans la documentation de l’API REST {% data variables.product.prodname_dotcom %}.

## Fournisseurs d’identité pris en charge

Les fournisseurs d’identité suivants sont pris en charge pour l’authentification unique avec {% data variables.product.prodname_ghe_managed %} :

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Pour les fournisseurs d’identité qui prennent en charge le mappage d’équipe, vous pouvez affecter l’application ou annuler son affectation pour {% data variables.product.product_name %} aux groupes d’utilisateurs de votre fournisseur d’identité. Ces groupes sont ensuite disponibles pour que les propriétaires d’organisation et les responsables d’équipe dans {% data variables.product.product_location %} les mappent aux équipes {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».

## Prérequis

Pour provisionner et déprovisionner automatiquement l’accès à {% data variables.product.product_location %} à partir de votre fournisseur d’identité, vous devez d’abord configurer l’authentification unique SAML quand vous initialisez {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae) ».

Vous devez disposer d’un accès administratif sur votre fournisseur d’identité pour configurer l’application pour le provisionnement d’utilisateurs pour {% data variables.product.product_name %}.

## Activation du provisionnement d’utilisateurs pour votre entreprise

1. Une fois connecté à {% data variables.product.product_location %} en tant que propriétaire d’entreprise, créez un jeton d’accès personnel avec l’étendue **admin:enterprise**. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».
  {% note %}

  **Remarques**:
    - Pour créer le jeton d’accès personnel, nous vous recommandons d’utiliser le compte pour le premier propriétaire d’entreprise que vous avez créé lors de l’initialisation. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae) ».
    - Vous aurez besoin de ce jeton d’accès personnel pour configurer l’application pour SCIM sur votre fournisseur d’identité. Stockez le jeton en toute sécurité dans un gestionnaire de mots de passe jusqu’à ce que vous ayez besoin du jeton plus loin dans ces instructions.

  {% endnote %} {% warning %}

  **Avertissement** : Si le compte d’utilisateur du propriétaire d’entreprise qui crée le jeton d’accès personnel est désactivé ou déprovisionné, votre fournisseur d’identité ne provisionne et ne déprovisionne plus automatiquement les comptes d’utilisateur de votre entreprise. Un autre propriétaire d’entreprise doit créer un nouveau jeton d’accès personnel et reconfigurer le provisionnement sur le fournisseur d’identité.

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Provisionnement d’utilisateurs SCIM », sélectionnez **Exiger le provisionnement d’utilisateurs SCIM**.
  ![Case à cocher pour « Exiger le provisionnement d’utilisateurs SCIM » dans les paramètres de sécurité d’entreprise](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Cliquez sur **Enregistrer**.
  ![Bouton Enregistrer sous « Exiger le provisionnement d’utilisateurs SCIM » dans les paramètres de sécurité d’entreprise](/assets/images/help/enterprises/settings-scim-save.png)
1. Configurez le provisionnement d’utilisateurs dans l’application pour {% data variables.product.product_name %} sur votre fournisseur d’identité.

  Les fournisseurs d’identité suivants fournissent de la documentation sur la configuration du provisionnement pour {% data variables.product.product_name %}. Si votre fournisseur d’identité n’est pas listé, contactez votre fournisseur d’identité pour demander la prise en charge pour {% data variables.product.product_name %}.

  | Fournisseur d’identité | Plus d’informations |
  | :- | :- |
  | Azure AD | [Tutoriel : Configurer {% data variables.product.prodname_ghe_managed %} pour le provisionnement automatique d’utilisateurs](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) dans Microsoft Docs. Pour configurer Azure AD pour {% data variables.product.prodname_ghe_managed %}, consultez « [Configuration de l’authentification et du provisionnement pour votre entreprise à l’aide d’Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad) ».|
| Okta | (bêta) Pour configurer Okta pour {% data variables.product.prodname_ghe_managed %}, consultez « [Configuration de l’authentification et du provisionnement pour votre entreprise à l’aide d’Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta) ».|

  L’application sur votre fournisseur d’identité nécessite deux valeurs pour provisionner ou déprovisionner des comptes d’utilisateur sur {% data variables.product.product_location %}.

  | Valeur | Autres noms | Description | Exemple |
  | :- | :- | :- | :- |
  | URL | URL de locataire | URL de l’API de provisionnement SCIM pour votre entreprise sur {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Secret partagé | Jeton d’accès personnel, jeton secret | Jeton pour l’application sur votre fournisseur d’identité pour effectuer des tâches de provisionnement au nom d’un propriétaire d’entreprise | Jeton d’accès personnel que vous avez créé à l’étape 1 |
