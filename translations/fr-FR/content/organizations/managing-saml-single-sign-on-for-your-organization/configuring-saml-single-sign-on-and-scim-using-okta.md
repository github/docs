---
title: Configuration de l’authentification unique SAML et de SCIM à l’aide d’Okta
intro: 'Vous pouvez utiliser l’authentification unique (SSO) SAML (Security Assertion Markup Language) et SCIM (System for Cross-domain Identity Management) avec Okta pour gérer automatiquement l’accès à votre organisation sur {% data variables.location.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: c1b6ab48122c97cb1f805399430cc181ed3f30d1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192736'
---
## À propos de SAML et de SCIM avec Okta

Vous pouvez contrôler l’accès à votre organisation sur {% data variables.location.product_location %} et d’autres applications web à partir d’une interface centrale en configurant l’organisation de manière à ce qu’elle utilise l’authentification unique SAML et SCIM avec Okta, un fournisseur d’identité (IdP).

{% data reusables.saml.ghec-only %}

L’authentification unique SAML contrôle et sécurise l’accès aux ressources de l’organisation, comme les référentiels, les problèmes et les demandes de tirage (pull requests). SCIM ajoute, gère et supprime automatiquement l’accès des membres à votre organisation sur {% data variables.location.product_location %} lorsque vous apportez des modifications dans Okta. Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) » et « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».

Une fois que vous avez activé SCIM, les fonctionnalités d’approvisionnement suivantes sont disponibles pour tous les utilisateurs auxquels vous attribuez votre application {% data variables.product.prodname_ghe_cloud %} dans Okta.

| Fonctionnalité | Description |
| --- | --- |
| Push New Users | Lorsque vous créez un utilisateur dans Okta, celui-ci reçoit un e-mail l’invitant à rejoindre votre organisation sur {% data variables.location.product_location %}. |
| Push User Deactivation | Lorsque vous désactivez un utilisateur dans Okta, Okta supprime celui-ci de votre organisation sur {% data variables.location.product_location %}. |
| Pousser (push) les mises à jour de profil | Lorsque vous mettez à jour le profil d’un utilisateur dans Okta, Okta met à jour les métadonnées relatives à l’appartenance de l’utilisateur à votre organisation sur {% data variables.location.product_location %}. |
| Reactivate Users | Lorsque vous réactivez un utilisateur dans Okta, Okta lui envoie un e-mail l’invitant à rejoindre votre organisation sur {% data variables.location.product_location %}. |

Vous pouvez également configurer l’authentification unique SAML pour une entreprise à l’aide d’Okta. SCIM pour les comptes d’entreprise n’est disponible qu’avec Enterprise Managed Users. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise à l’aide d’Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta) » et « [Configuration de l’approvisionnement SCIM pour Enterprise Managed Users avec Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) ».

## Configuration de SAML dans Okta

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {% data reusables.saml.okta-add-ghec-org-integration %}
1. Remplissez le formulaire en fournissant le nom de votre organisation sur {% data variables.product.prodname_dotcom %} et un nom unique pour votre application OAuth App Integration.
{% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Activez et testez l’authentification unique SAML sur {% data variables.product.prodname_dotcom %} à l’aide de l’URL de connexion, de l’URL de l’émetteur et des certificats publics fournis dans le guide « Configuration de SAML 2.0 ». Pour plus d’informations, consultez « [Activation et test de l’authentification unique SAML pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization) ».

## Configuration de l’approvisionnement des accès avec SCIM dans Okta

{% data reusables.scim.dedicated-configuration-account %}

1. Connectez-vous à {% data variables.product.prodname_dotcom_the_website %} à l’aide d’un compte propriétaire d’organisation et, si possible, réservé à la configuration de SCIM.
1. Pour créer une session SAML active pour votre organisation, accédez à `https://github.com/orgs/ORGANIZATION-NAME/sso`. Pour plus d’informations, consultez « [À propos de l’authentification avec l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso) ».
1. Accédez à Okta.
{% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.okta-applications-click-ghec-application-label %} {% data reusables.saml.okta-provisioning-tab %} {% data reusables.saml.okta-configure-api-integration %} {% data reusables.saml.okta-enable-api-integration %}
1. Cliquez sur **Authentification avec {% data variables.product.prodname_ghe_cloud %} - Organisation**.
1. À droite du nom de votre organisation, cliquez sur **Accorder**.

  ![Bouton « Accorder » autorisant l’intégration SCIM Okta à accéder à l’organisation](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. Cliquez sur **Autoriser OktaOAN**.
{% data reusables.saml.okta-save-provisioning %} {% data reusables.saml.okta-edit-provisioning %}

## Pour aller plus loin

- « [Configuration de l’authentification unique SAML pour votre compte d’entreprise à l’aide d’Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta) »
- [Présentation de SAML](https://developer.okta.com/docs/concepts/saml/) dans la documentation Okta
- [Présentation de SCIM](https://developer.okta.com/docs/concepts/scim/) dans la documentation Okta
