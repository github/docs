---
title: Configuration de l’authentification unique SAML pour votre entreprise à l’aide d’Okta
intro: 'Vous pouvez utiliser l’authentification unique SAML (Security Assertion Markup Language) avec Okta pour gérer automatiquement l’accès à votre compte d’entreprise sur {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108689'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## À propos de SAML avec Okta

Vous pouvez contrôler l’accès à votre compte d’entreprise dans {% data variables.product.product_name %} et d’autres applications web à partir d’une interface centrale en configurant le compte d’entreprise pour utiliser l’authentification unique SAML avec Okta, un fournisseur d’identité (IdP).

L’authentification unique SAML contrôle et sécurise l’accès aux ressources de compte d’entreprise, comme les organisations, les référentiels, les problèmes et les demandes de tirage. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».

{% data reusables.saml.switching-from-org-to-enterprise %} Pour plus d’informations, consultez « [Basculement de votre configuration SAML d’une organisation vers un compte d’entreprise](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account) ».

Vous pouvez également configurer l’authentification unique SAML à l’aide d’Okta pour une organisation qui utilise {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML et de SCIM à l’aide d’Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta) ».

## Ajout de l’application {% data variables.product.prodname_ghe_cloud %} dans Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Accédez à l’application [{% data variables.product.prodname_ghe_cloud %} - Comptes d’entreprise](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) dans l’Okta Integration Network, puis cliquez sur **Ajouter une intégration**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. Si vous le souhaitez, à droite d’« Étiquette d’application », tapez un nom descriptif pour l’application.
1. À droite de « {% data variables.product.prodname_dotcom %} Enterprises », tapez le nom de votre compte d’entreprise. Par exemple, si l’URL de votre compte d’entreprise est `https://github.com/enterprises/octo-corp`, tapez `octo-corp`.
1. Cliquez sur **Done**.

## Activation et test de l’authentification unique SAML

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. À droite de Paramètres, cliquez sur **Modifier**.
1. Sous « Attributs SAML configurés », à droite de « groupes », utilisez le menu déroulant et sélectionnez **Correspond à l’expression régulière**.
1. À droite du menu déroulant, tapez `.*.*`.
1. Cliquez sur **Enregistrer**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Activez SAML pour votre compte d’entreprise à l’aide des informations contenues dans les instructions d’installation. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».
