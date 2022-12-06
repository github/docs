---
title: Bonnes pratiques relatives à la sécurité des utilisateurs
intro: '{% ifversion ghes %}En dehors des mesures de sécurité qu’un administrateur de site peut implémenter au niveau de l’instance (SSL, isolation de sous-domaine, configuration d’un pare-feu), vos utilisateurs {% else %}Vos utilisateurs {% endif %}peuvent prendre des mesures pour protéger votre entreprise.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
shortTitle: User security best practices
ms.openlocfilehash: 57d19d97a8944ac20d6b90794bcf0cda63fc5bd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331655'
---
{% ifversion ghes %}
## Activer l’authentification à 2 facteurs

L’authentification à 2 facteurs est une méthode de connexion à des sites web et services, nécessitant un deuxième facteur, en plus d’un mot de passe, pour l’authentification. Dans le cas de {% data variables.product.prodname_ghe_server %}, ce deuxième facteur est un code d’authentification à usage unique généré par une application sur le smartphone de l’utilisateur. Nous vous recommandons vivement d’exiger de vos utilisateurs qu’ils activent l’authentification à 2 facteurs sur leurs comptes. Avec l’authentification à 2 facteurs, il faudrait que le mot de passe de l’utilisateur et son smartphone soient compromis pour que le compte soit lui-même compromis.

Pour plus d’informations sur la configuration de l’authentification à 2 facteurs, consultez « [À propos de l’authentification à deux facteurs](/enterprise/user/articles/about-two-factor-authentication) ».
{% endif %}

## Exiger un gestionnaire de mots de passe

Nous vous recommandons vivement d’exiger de vos utilisateurs qu’ils installent et utilisent un gestionnaire de mots de passe (par exemple, [LastPass](https://lastpass.com/) ou [1Password](https://1password.com/)) sur tous les ordinateurs qu’ils utilisent pour se connecter à votre entreprise. Ceci garantit l’utilisation de mots de passe plus forts, beaucoup moins susceptibles d’être compromis ou volés.

## Restreindre l’accès aux équipes et dépôts

Pour limiter la surface d’attaque potentielle en cas de violation de sécurité, nous vous recommandons vivement de donner aux utilisateurs l’accès aux équipes et dépôts dont ils ont absolument besoin pour effectuer leur travail uniquement. Étant donné que les membres disposant du rôle Propriétaire peuvent accéder à toutes les équipes et dépôts de l’organisation, nous vous recommandons vivement de garder cette équipe aussi petite que possible.

Pour plus d’informations sur la configuration des équipes et des autorisations d’équipe, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».
