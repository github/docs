---
title: Utilisation de CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'Si vous utilisez le service CAS (Central Authentication Service) afin de centraliser l’accès à plusieurs applications web, vous pouvez intégrer {% data variables.product.product_name %} en configurant l’authentification CAS pour votre instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 4bd9c8baf32ab09c593a251ca4f1cb698e075501
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884276'
---
## À propos de l’authentification CAS pour {% data variables.product.product_name %}

CAS est un protocole d’authentification unique (SSO) qui centralise l’authentification sur plusieurs applications web. Pour plus d’informations, consultez « [Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service) » sur Wikipédia.

Après avoir configuré CAS, les personnes qui utilisent {% data variables.product.product_location %} doivent utiliser un jeton d’accès personnel pour authentifier l’API ou les demandes Git via HTTP(S). Les informations d’identification CAS ne peuvent pas être utilisées pour authentifier ces demandes. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

Si vous configurez CAS, une personne disposant d’un compte sur votre fournisseur d’identité ne consomme pas de licence utilisateur tant que la personne ne se connecte pas à {% data variables.product.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Considérations relatives aux noms d’utilisateur avec CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour une authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

## Attributs CAS

Les attributs suivants sont disponibles.

| Nom de l’attribut           | Type     | Description |
|--------------------------|----------|-------------|
| `username`               | Obligatoire | Nom d’utilisateur {% data variables.product.prodname_ghe_server %}. |

## Configuration de CAS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Sélectionnez **CAS**.

   ![Capture d’écran de la sélection de CAS pour l’authentification](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Capture d’écran de l’option d’authentification intégrée de secours pour CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. Dans le champ **URL du serveur**, tapez l’URL complète de votre serveur CAS. Si votre serveur CAS utilise un certificat qui ne peut pas être validé par {% data variables.product.prodname_ghe_server %}, vous pouvez utiliser la commande `ghe-ssl-ca-certificate-install` pour l’installer en tant que certificat approuvé. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install) ».
