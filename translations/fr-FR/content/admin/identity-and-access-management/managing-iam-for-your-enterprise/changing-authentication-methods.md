---
title: Modification des méthodes d’authentification
intro: 'Vous pouvez changer la façon dont {% data variables.product.prodname_ghe_server %} authentifie vos comptes existants à tout moment.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 074c4fe8784d3ea7b8ada6b532e680384571facf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882690'
---
Les comptes d’utilisateur sur {% data variables.product.product_location %} sont conservés lorsque vous modifiez la méthode d’authentification, et les utilisateurs continuent à se connecter au même compte tant que leur nom d’utilisateur ne change pas.

Si la nouvelle méthode d’authentification modifie les noms d’utilisateur, de nouveaux comptes sont créés. En tant qu’administrateur, vous pouvez renommer des utilisateurs via les paramètres d’administration du site ou l’[’API Administration des utilisateurs](/rest/reference/enterprise-admin#update-the-username-for-a-user).

Les autres problèmes que vous devez prendre en compte sont les suivants :

* **Mots de passe :** Si vous passez à l’authentification intégrée pour votre instance, les utilisateurs doivent [définir un mot de passe](/enterprise/user/articles/how-can-i-reset-my-password/) une fois la modification terminée.

* **Administrateurs de site :** Les privilèges d’administration sont [contrôlés par votre fournisseur d’identité lorsque vous utilisez SAML](/enterprise/admin/guides/user-management/using-saml/#saml-attributes) et peuvent être [contrôlés par l’appartenance au groupe lorsque vous utilisez LDAP](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Appartenance à l’équipe :** Seul LDAP vous permet de [contrôler l’appartenance à l’équipe](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) à partir de votre serveur d’annuaire.

* **Suspension d’utilisateur :** Lorsque vous utilisez LDAP pour vous authentifier, l’accès à {% data variables.product.prodname_ghe_server %} peut être contrôlé via des _groupes restreints_. Après avoir basculé vers LDAP, si des groupes restreints sont configurés, les utilisateurs existants qui ne se trouvent pas dans l’un de ces groupes sont suspendus. Une suspension se produit lorsqu’ils se connectent ou lors de la prochaine synchronisation LDAP.

* **Appartenance au groupe :** Lorsque vous utilisez LDAP pour l’authentification, les utilisateurs sont automatiquement [suspendus et rétablis](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) en fonction de l’appartenance à un groupe restreint et de l’état du compte avec Active Directory.

* **Authentification Git :** SAML et CAS prennent uniquement en charge l’authentification Git via HTTP ou HTTPS à l’aide d’un [jeton d’accès personnel](/articles/creating-an-access-token-for-command-line-use). L’authentification par mot de passe via HTTP ou HTTPS n’est pas prise en charge. LDAP prend en charge l’authentification Git par défaut basée sur un mot de passe, mais nous vous recommandons de [désactiver cette méthode](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) et de forcer l’authentification via un jeton d’accès personnel ou une clé SSH.

* **Authentification d’API :** SAML et CAS prennent uniquement en charge l’authentification d’API à l’aide d’un [jeton d’accès personnel](/articles/creating-an-access-token-for-command-line-use). L’authentification de base n’est pas prise en charge.

* **Authentification à 2 facteurs :** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Authentification de secours pour les utilisateurs sans compte sur votre fournisseur d’authentification externe :** Vous pouvez inviter des utilisateurs à s’authentifier sur {% data variables.product.product_location %} sans les ajouter à votre fournisseur d’identité. Pour plus d’informations, consultez « [Autorisation de l’authentification intégrée pour les utilisateurs en dehors de votre fournisseur](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider) ».
