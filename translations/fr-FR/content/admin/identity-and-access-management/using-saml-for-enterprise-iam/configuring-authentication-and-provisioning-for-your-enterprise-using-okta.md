---
title: Configuration de l’authentification et du provisionnement pour votre entreprise à l’aide d’Okta
shortTitle: Configure with Okta
intro: 'Vous pouvez utiliser Okta comme fournisseur d’identité (IdP) pour gérer de manière centralisée l’authentification et le provisionnement d’utilisateurs pour {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 62a1436fcedc4d90f767d0c612e70810132aff58
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192672'
---
{% data reusables.saml.okta-ae-sso-beta %}

## À propos de l’authentification et du provisionnement d’utilisateurs avec Okta

Vous pouvez utiliser Okta en tant que fournisseur d’identité pour {% data variables.product.product_name %}, ce qui permet à vos utilisateurs Okta de se connecter à {% data variables.product.product_name %} avec leurs informations d’identification Okta.

Pour utiliser Okta en tant que fournisseur d’identité pour {% data variables.product.product_name %}, vous pouvez ajouter l’application {% data variables.product.product_name %} à Okta, configurer Okta en tant que fournisseur d’identité dans {% data variables.product.product_name %} et provisionner l’accès pour vos utilisateurs et groupes Okta.

{% data reusables.saml.idp-saml-and-scim-explanation %}
- « [Mappage de groupes Okta aux équipes](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams) »

Une fois que vous avez activé SCIM, les fonctionnalités de provisionnement suivantes sont disponibles pour tous les utilisateurs auxquels vous attribuez votre application {% data variables.product.product_name %} dans Okta.

{% data reusables.scim.ghes-beta-note %}

Les fonctionnalités de provisionnement suivantes sont disponibles pour tous les utilisateurs Okta que vous affectez à votre application {% data variables.product.product_name %}.

| Fonctionnalité | Description |
| --- | --- |
| Push New Users | Quand vous créez un nouvel utilisateur dans Okta, l’utilisateur est ajouté à {% data variables.product.product_name %}. |
| Push User Deactivation | Quand vous désactivez un utilisateur dans Okta, cela suspend l’utilisateur de votre entreprise sur {% data variables.product.product_name %}. |
| Pousser (push) les mises à jour de profil | Quand vous mettez à jour le profil d’un utilisateur dans Okta, cela met à jour les métadonnées de l’appartenance de l’utilisateur à votre entreprise sur {% data variables.product.product_name %}. |
| Reactivate Users | Quand vous réactivez un utilisateur dans Okta, cela annule la suspension de l’utilisateur de votre entreprise sur {% data variables.product.product_name %}. |

Pour plus d’informations sur la gestion des identités et des accès pour votre entreprise sur {% data variables.location.product_location %}, consultez « [Gestion des identités et des accès pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise) ».

## Prérequis

- Pour configurer l’authentification et le provisionnement d’utilisateurs pour {% data variables.product.product_name %} avec Okta, vous devez avoir un compte et un locataire Okta.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Ajout de l’application {% data variables.product.product_name %} dans Okta


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. Dans le champ de recherche, tapez « GitHub AE », puis cliquez sur **GitHub AE** dans les résultats.

  ![« Résultat de la recherche »](/assets/images/help/saml/okta-ae-search.png)
1. Cliquez sur **Add**.

  ![« Ajouter l’application GitHub AE »](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. Pour « URL de base », tapez l’URL de votre entreprise sur {% data variables.product.product_name %}.

  ![« Configurer l’URL de base »](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. Cliquez sur **Done**.
{%- elsif scim-for-ghes %}
1. Dans le champ de recherche, tapez « GitHub Enterprise Server », puis cliquez sur **GitHub Enterprise Server** dans les résultats.
1. Cliquez sur **Add**.
1. Pour « URL de base », tapez l’URL de {% data variables.location.product_location %}.
1. Cliquez sur **Done**.
{% endif %}

## Activation de l’authentification unique SAML pour {% data variables.product.product_name %}

Pour activer l’authentification unique (SSO) pour {% data variables.product.product_name %}, vous devez configurer {% data variables.product.product_name %} pour utiliser l’URL d’authentification, l’URL de l’émetteur et le certificat public fourni par Okta. Vous trouverez ces détails dans l’application Okta pour {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Notez les détails « URL de connexion », « Émetteur » et « Certificat public ». 
1. Utilisez les détails pour activer l’authentification unique SAML pour votre entreprise sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. Utilisez les détails pour activer l’authentification unique SAML pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».
{%- endif %}

{% note %}

**Remarque :** Pour tester votre configuration SAML à partir de {% data variables.product.product_name %}, votre compte d’utilisateur Okta doit être affecté à l’application {% data variables.product.product_name %}.

{% endnote %}

## Activation de l’intégration d’API

L’application Okta utilise l’API REST pour {% data variables.product.product_name %} pour le provisionnement SCIM. Vous pouvez activer et tester l’accès à l’API en configurant Okta avec un {% data variables.product.pat_generic %} pour {% data variables.product.product_name %}.

1. Dans {% data variables.product.product_name %}, générez un {% data variables.product.pat_v1 %} avec l’étendue `admin:enterprise`. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Cliquez sur **Configurer l’intégration d’API**.

1. Sélectionnez **Enable API integration**.

  ![Activer l’intégration d’API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. Pour « Jeton d’API », tapez le {% data variables.product.pat_generic %} {% data variables.product.product_name %} que vous avez généré précédemment.

1. Cliquez sur **Test API Credentials**. 

{% note %}

**Remarque :** Si vous voyez `Error authenticating: No results for users returned`, assurez-vous d’avoir activé l’authentification unique pour {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Activation de l’authentification unique SAML pour {% data variables.product.product_name %}](#enabling-saml-sso-for-github-ae) ».

{% endnote %}

## Configuration des paramètres de provisionnement SCIM

Cette procédure montre comment configurer les paramètres SCIM pour le provisionnement Okta. Ces paramètres définissent les fonctionnalités qui seront utilisées lors du provisionnement automatique des comptes d’utilisateur Okta sur {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Sous « Paramètres », cliquez sur **Vers l’application**.

  ![Paramètres « Vers l’application »](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. À droite de « Provisionnement vers l’application », cliquez sur **Modifier**.
1. À droite de « Créer des utilisateurs », sélectionnez **Activer**.
1. À droite de « Mettre à jour les attributs utilisateur », sélectionnez **Activer**.
1. À droite de « Désactiver les utilisateurs », sélectionnez **Activer**.
1. Cliquez sur **Enregistrer**.

## Autoriser les utilisateurs et groupes Okta à accéder à {% data variables.product.product_name %}

Vous pouvez provisionner l’accès à {% data variables.product.product_name %} pour vos utilisateurs Okta individuels ou pour des groupes entiers.

### Provisionnement de l’accès pour les utilisateurs Okta

Pour que vos utilisateurs Okta puissent utiliser leurs informations d’identification pour se connecter à {% data variables.product.product_name %}, vous devez affecter les utilisateurs à l’application Okta pour {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. Cliquez sur **Affectations**.

  ![Onglet Attributions](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Sélectionnez le menu déroulant Affecter et cliquez sur **Affecter aux personnes**.

  ![Bouton « Affecter aux personnes »](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. À droite du compte d’utilisateur requis, cliquez sur **Affecter**.

  ![Liste des utilisateurs](/assets/images/help/saml/okta-ae-assign-user.png)

1. À droite de « Rôle », cliquez sur un rôle pour l’utilisateur, puis cliquez sur **Enregistrer et revenir**.

  ![Sélection de rôle](/assets/images/help/saml/okta-ae-assign-role.png)

1. Cliquez sur **Done**.

{% ifversion ghae %}
### Provisionnement de l’accès pour les groupes Okta

Vous pouvez mapper votre groupe Okta à une équipe dans {% data variables.product.product_name %}. Les membres du groupe Okta deviennent alors automatiquement membres de l’équipe {% data variables.product.product_name %} mappée. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
{% endif %}

## Pour aller plus loin

- [Présentation de SAML](https://developer.okta.com/docs/concepts/saml/) dans la documentation Okta
- [Présentation de SCIM](https://developer.okta.com/docs/concepts/scim/) dans la documentation Okta
