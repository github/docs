---
title: Promotion ou rétrogradation d’un administrateur de site
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'Les administrateurs de site peuvent promouvoir n’importe quel compte d’utilisateur normal en administrateur de site, mais aussi rétrograder d’autres administrateurs de site en utilisateurs normaux.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 19daa56cf7d750d69495a6ff52655784411f56ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331695'
---
{% tip %}

**Remarque :** Si [la synchronisation LDAP est activée](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) et que l’attribut `Administrators group` est défini au moment de la [configuration de l’accès LDAP pour les utilisateurs](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), ces utilisateurs ont automatiquement un accès administrateur de site à votre instance. Dans ce cas, vous ne pouvez pas promouvoir manuellement des utilisateurs à l’aide des étapes ci-dessous. Vous devez les ajouter au groupe d’administrateurs LDAP.

{% endtip %}

Pour plus d’informations sur la promotion d’un utilisateur comme propriétaire d’organisation, consultez la section `ghe-org-admin-promote` de « [Utilitaires de ligne de commande](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote) ».

## Promotion d’un utilisateur à partir des paramètres d’entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. Dans le coin supérieur droit de la page, cliquez sur **Ajouter un propriétaire**.
  ![Bouton permettant d’ajouter un administrateur](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. Dans le champ de recherche, tapez le nom de l’utilisateur, puis cliquez sur **Ajouter**.
  ![Champ de recherche pour ajouter un administrateur](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## Rétrogradation d’un administrateur de site à partir des paramètres d’entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Dans le coin supérieur gauche de la page, dans le champ de recherche « Rechercher un administrateur », tapez le nom d’utilisateur de la personne à rétrograder.
  ![Champ de recherche pour rechercher un administrateur](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. Dans les résultats de la recherche, recherchez le nom d’utilisateur de la personne que vous souhaitez rétrograder, puis utilisez le menu déroulant {% octicon "gear" %} et sélectionnez **Supprimer le propriétaire**.
  ![Option pour supprimer un propriétaire de l’entreprise](/assets/images/help/business-accounts/demote-admin-button.png)

## Promotion d’un utilisateur à partir de la ligne de commande

1. [Connectez-vous avec SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) à votre appliance.
2. Exécutez [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) avec le nom d’utilisateur de l’utilisateur à promouvoir.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

## Rétrogradation d’un administrateur de site à partir de la ligne de commande

1. [Connectez-vous avec SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) à votre appliance.
2. Exécutez [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) avec le nom d’utilisateur de l’utilisateur à rétrograder.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
