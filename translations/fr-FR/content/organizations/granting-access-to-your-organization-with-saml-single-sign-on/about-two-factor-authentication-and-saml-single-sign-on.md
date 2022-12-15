---
title: À propos de l’authentification à deux facteurs et de l’authentification unique SAML
intro: Les administrateurs d’organisations peuvent activer l’authentification unique SAML et l’authentification à deux facteurs pour ajouter des mesures d’authentification supplémentaires pour les membres de leur organisation.
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
ms.openlocfilehash: 1dc8eff35906a5f2c59f097d3bf53482547bd1f5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128564'
---
L’authentification à deux facteurs (2FA) fournit une authentification de base pour les membres de l’organisation. En activant 2FA, les administrateurs d’organisation limitent la probabilité de compromission du compte d’un membre sur {% data variables.product.product_location %}. Pour plus d’informations 2FA, consultez « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) ».

Pour ajouter des mesures d’authentification, les administrateurs d’organisation peuvent également [activer l’authentification unique (SSO) SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) afin que les membres de l’organisation puissent l’utiliser pour accéder à une organisation. Pour plus d’informations sur SSO SAML, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) ».

Si 2FA et SSO SAML sont toutes deux activées, les membres de l’organisation doivent effectuer les opérations suivantes :
- Utiliser 2FA pour se connecter à leur compte sur {% data variables.product.product_location %}
- Utiliser l’authentification unique pour accéder à l’organisation
- Utiliser un jeton autorisé pour l’accès à l’API ou à Git, et utiliser l’authentification unique pour autoriser le jeton

## Pour aller plus loin

- « [Application de l’authentification unique SAML pour votre organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) »
