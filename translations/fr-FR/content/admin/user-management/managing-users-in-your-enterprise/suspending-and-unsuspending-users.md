---
title: Suspension et réhabilitation d’utilisateurs
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'Si un utilisateur s’en va ou se déplace vers une autre partie de l’entreprise, vous devez supprimer ou modifier sa capacité à accéder à {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: d888678438f62fb585dac1cab4905ff02d8eb824
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331903'
---
Si des employés quittent l’entreprise, vous pouvez suspendre leurs comptes{% data variables.product.prodname_ghe_server %} pour libérer des licences utilisateur dans votre licence {% data variables.product.prodname_enterprise %} tout en conservant les problèmes, commentaires, dépôts, Gists et autres données qu’ils ont créés. Les utilisateurs suspendus ne peuvent pas se connecter à votre instance et ne peuvent pas pousser (push) ni tirer (pull) du code.

Quand vous suspendez un utilisateur, la modification prend effet immédiatement sans notification pour l’utilisateur. Si l’utilisateur tente pousser du code sur un dépôt ou d’en tirer, il reçoit cette erreur :

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Avant de suspendre des administrateurs de site, vous devez les rétrograder en utilisateurs standard. Pour plus d’informations, consultez « [Promotion ou rétrogradation d’un administrateur de site](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator) ».

{% tip %}

**Remarque :** Si [la synchronisation LDAP est activée](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) pour {% data variables.product.product_location %}, les utilisateurs sont automatiquement suspendus quand ils sont supprimés du serveur d’annuaire LDAP. Quand la synchronisation LDAP est activée pour votre instance, les méthodes de suspension d’utilisateur standard sont désactivées.

{% endtip %}

## Suspension d’un utilisateur à partir du tableau de bord d’administrateur d’utilisateur

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Sous « Suspension de compte », dans la Zone de danger rouge, cliquez sur **Suspendre**.
![Bouton Suspendre](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Indiquez le motif de suspension de l’utilisateur.
![Motif de suspension](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## Réhabilitation d’un utilisateur à partir du tableau de bord d’administrateur d’utilisateur

Comme la suspension, la réhabilitation d’un utilisateur prend effet immédiatement. L’utilisateur n’est pas averti.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Dans la barre latérale gauche, cliquez sur **Utilisateurs suspendus**.
![Onglet Utilisateurs suspendus](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Cliquez sur le nom du compte d’utilisateur que vous souhaitez réhabiliter.
![Utilisateur suspendu](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Sous « Suspension de compte », dans la Zone de danger rouge, cliquez sur **Réhabiliter**.
![Bouton Réhabiliter](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Indiquez le motif de réhabilitation de l’utilisateur.
![Motif de réhabilitation](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## Suspension d’un utilisateur à partir de la ligne de commande

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Exécutez la commande [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend) avec le nom de l’utilisateur à suspendre.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

## Création d’un message personnalisé pour les utilisateurs suspendus

Vous pouvez créer un message personnalisé que les utilisateurs suspendus verront quand ils essaieront de se connecter.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. Cliquez sur **Ajouter un message**.
![Ajouter un message](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Tapez votre message dans la zone **Message pour l’utilisateur suspendu**. Vous pouvez taper Markdown ou utiliser la barre d’outils Markdown pour appliquer un style à votre message.
![Message pour l’utilisateur suspendu](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Cliquez sur le bouton **Aperçu** sous le champ **Message pour l’utilisateur suspendu** pour voir le message affiché.
![bouton Aperçu](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Vérifiez le message affiché.
![Message affiché pour l’utilisateur suspendu](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## Réhabilitation d’un utilisateur à partir de la ligne de commande

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Exécutez la commande [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) avec le nom de l’utilisateur à réhabiliter.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

## Pour aller plus loin
- « [Suspendre un utilisateur](/rest/reference/enterprise-admin#suspend-a-user) »
