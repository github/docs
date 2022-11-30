---
title: À propos de SCIM pour les organisations
intro: 'Avec SCIM (System for Cross-domain Identity Management), les administrateurs peuvent automatiser l’échange d’informations d’identité utilisateur entre les systèmes.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066597'
---
## À propos de SCIM pour les organisations

Si votre organisation utilise l’[authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on), vous pouvez implémenter SCIM pour ajouter, gérer et supprimer l’accès des membres de l’organisation à {% data variables.product.product_name %}. Par exemple, un administrateur peut déprovisionner un membre d’une organisation en utilisant SCIM et supprimer automatiquement le membre de l’organisation.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Si vous utilisez l’authentification unique SAML sans implémenter SCIM, vous n’aurez pas de déprovisionnement automatique. Quand les sessions des membres d’une organisation expirent après la suppression de leur accès auprès du fournisseur d’identité, elles ne sont pas supprimées automatiquement de l’organisation. Les jetons autorisés accordent l’accès à l’organisation même après l’expiration de leurs sessions. Si SCIM n’est pas utilisé, pour supprimer entièrement l’accès d’un membre, un propriétaire de l’organisation doit supprimer l’accès du membre dans le fournisseur d’identité et supprimer manuellement le membre de l’organisation sur {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Fournisseurs d’identité pris en charge

Ces fournisseurs d’identité sont compatibles avec l’API SCIM {% data variables.product.product_name %} pour les organisations. Pour plus d’informations, consultez [SCIM](/rest/scim) dans la documentation de l’API {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

## À propos de la configuration SCIM pour les organisations

{% data reusables.scim.dedicated-configuration-account %}

Avant d’autoriser {% data variables.product.prodname_oauth_app %}, vous devez avoir une session SAML active. Pour plus d’informations, consultez « [À propos de l’authentification avec l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso) ».

{% note %}

**Remarque :** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## Pour aller plus loin

- « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization) »
