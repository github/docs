---
title: Gestion des bots et des comptes de service avec l’authentification unique SAML
intro: Les organisations qui ont activé l’authentification unique SAML peuvent conserver l’accès pour les bots et les comptes de service.
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128561'
---
Pour conserver l’accès pour les bots et les comptes de service, les administrateurs d’organisation peuvent [activer](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), mais **pas**[imposer](/articles/enforcing-saml-single-sign-on-for-your-organization) l’authentification unique SAML pour leur organisation. Si vous devez imposer l’authentification unique SAML pour votre organisation, vous pouvez créer une identité externe pour le bot ou le compte de service avec votre fournisseur d’identité.

{% warning %}

**Remarque :** Si vous imposez l’authentification unique SAML pour votre organisation et que **vous n’avez pas** d’identités externes configurées pour les bots et les comptes de service avec votre fournisseur d’identité, ils seront supprimés de votre organisation.

{% endwarning %}

## Pour aller plus loin

- « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) »
