---
title: Application de stratégies de gestion des dépôts dans votre entreprise
intro: Vous pouvez appliquer des stratégies pour la gestion des référentiels au sein des organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation.
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
ms.openlocfilehash: 10b34ef1d0049ca68e1b0ec655f9d6351c06d396
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192640'
---
## À propos des stratégies de gestion des dépôts dans votre entreprise

Vous pouvez appliquer des stratégies pour contrôler la façon dont les membres de votre entreprise sur {% data variables.product.product_name %} gèrent les dépôts. Vous pouvez également autoriser les propriétaires d’organisation à gérer des stratégies pour la gestion des dépôts. Pour plus d’informations, consultez « [Création et gestion de dépôts](/repositories/creating-and-managing-repositories) » et « [Organisations et équipes](/organizations) ».

{% ifversion ghes or ghae %}

## Configuration de la visibilité par défaut des nouveaux dépôts

Chaque fois qu’une personne crée un dépôt dans votre entreprise, elle doit choisir une visibilité pour le dépôt. Quand vous configurez un paramètre de visibilité par défaut pour l’entreprise, vous choisissez la visibilité sélectionnée par défaut. Pour plus d’informations sur la visibilité des dépôts, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

Si un propriétaire d’entreprise interdit aux membres de créer certains types de dépôts, les membres ne pourront pas créer ce type de dépôt, même si le paramètre de visibilité par défaut est défini sur ce type. Pour plus d’informations, consultez « [Application d’une stratégie pour la création de dépôt](#enforcing-a-policy-for-repository-creation) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Sous « Visibilité des dépôts par défaut », utilisez le menu déroulant et sélectionnez une visibilité par défaut.
  ![Menu déroulant pour choisir la visibilité des dépôts par défaut pour votre entreprise](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Application d’une stratégie pour les autorisations de dépôt de base

Dans toutes les organisations appartenant à votre entreprise, vous pouvez définir un niveau d’autorisation de dépôt de base (Aucun, Lire, Écrire ou Administrer) pour les membres d’organisation ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. Sous « Autorisations de base », passez en revue les informations sur la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Sous « Autorisions de base », utilisez le menu déroulant pour choisir une stratégie.
  ![Menu déroulant avec les options de stratégie d’autorisations de dépôt](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## Application d’une stratégie pour la création de dépôt

Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les membres à créer des dépôts, autoriser uniquement les propriétaires d’organisation à créer des dépôts ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation. 

Si vous autorisez les membres à créer des dépôts dans vos organisations, vous pouvez choisir les types de dépôts (publics, privés et internes) que les membres peuvent créer.

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %}Si votre entreprise utilise {% data variables.product.prodname_emus %}, vous{% else %}Vous{% endif %} pouvez également empêcher les utilisateurs de créer des dépôts appartenant à leurs comptes d’utilisateur.
{% endif %}

{% data reusables.repositories.internal-repo-default %} Pour plus d’informations sur les dépôts internes, consultez « [Création d’un dépôt interne](/articles/creating-an-internal-repository) ».

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. Sous « Création de dépôt », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %}{% ifversion enterprise-namespace-repo-setting %}
1. {% ifversion ghec %}Si votre entreprise utilise {% data variables.product.prodname_emus %} et que vous souhaitez {% endif %}empêcher les membres d’entreprise de créer des dépôts appartenant à leurs comptes d’utilisateur, vous pouvez également sélectionner **Bloquer la création de dépôts d’espaces de noms utilisateur**.
  ![Capture d’écran montrant la liste des options désactivées de la stratégie de duplication (fork)](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png){% endif %}

## Application d’une stratégie pour la duplication (fork) de dépôts privés ou internes
Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les utilisateurs ayant accès à un dépôt privé ou interne à dupliquer le dépôt, ne jamais autoriser la duplication de dépôts privés ou internes, ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% ifversion org-owners-limit-forks-creation %} Les personnes disposant d’autorisations d’administrateur peuvent définir une stratégie de duplication plus précise. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) ».
{% endif %}

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**Remarque :** Si {% ifversion ghec %}votre entreprise utilise {% data variables.product.prodname_emus %} et {% endif %}votre stratégie « Création de dépôt » empêche les membres d’entreprise de créer des dépôts appartenant à leurs comptes d’utilisateur, les membres ne sont pas autorisés à dupliquer un dépôt dans leurs comptes d’utilisateur, quelle que soit votre stratégie « Duplication de dépôt ».

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. Sous « Duplication de dépôt », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
2. Sous « Duplication de dépôt », utilisez le menu déroulant et choisissez une stratégie.

  ![Menu déroulant avec les options de stratégie de duplication de dépôt](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. Si la duplication est activée, vous pouvez spécifier l’emplacement où les utilisateurs sont autorisés à dupliquer des référentiels. Passez en revue les informations sur la modification du paramètre et choisissez une stratégie.

    ![Capture d’écran montrant la liste des options de la stratégie de duplication (fork) de dépôt](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## Application d’une stratégie pour inviter des collaborateurs{% ifversion ghec %} externes{% endif %} à des dépôts

Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les membres à inviter des collaborateurs{% ifversion ghec %} extérieurs{% endif %} dans les dépôts, à restreindre les invitations {% ifversion ghec %}des collaborateurs extérieurs {% endif %}aux propriétaires d’organisation{% ifversion prevent-org-admin-add-outside-collaborator %}, à restreindre les invitations {% ifversion ghec %}des collaborateurs extérieurs {% endif %}aux propriétaires d’entreprise{% endif %} ou à autoriser les propriétaires d’organisation à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. Sous « Invitation {% ifversion ghec %}de collaborateurs externes{% elsif ghes or ghae %}à des dépôts{% endif %} », passez en revue les informations sur la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Sous « Invitation {% ifversion ghec %}de collaborateurs externes{% elsif ghes or ghae %}à des dépôts{% endif %} », utilisez le menu déroulant et choisissez une stratégie.

  {% ifversion ghec %} ![Menu déroulant avec les options de stratégie d’invitation de collaborateur externe](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![Menu déroulant avec les options de stratégie d’invitation](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## Application d’une stratégie pour le nom de branche par défaut

Dans toutes les organisations appartenant à votre entreprise, vous pouvez définir le nom de branche par défaut pour tous les nouveaux dépôts créés par des membres. Vous pouvez appliquer ce nom de branche par défaut pour toutes les organisations ou autoriser les organisations à en définir un individuellement.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. Sous l’onglet **Stratégies de dépôt**, sous « Nom de branche par défaut », entrez le nom de branche par défaut pour tous les nouveaux dépôts.
    ![Zone de texte pour entrer le nom de branche par défaut](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Si vous le souhaitez, pour appliquer le nom de branche par défaut pour toutes les organisations de l’entreprise, sélectionnez **Appliquer pour l’ensemble de cette entreprise**.
    ![Case à cocher pour l’application](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Cliquez sur **Update**.
    ![Bouton Mettre à jour](/assets/images/help/business-accounts/default-branch-name-update.png)

## Application d’une stratégie pour la modification de la visibilité d’un dépôt

Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les membres disposant d’un accès administrateur à modifier la visibilité d’un dépôt, autoriser uniquement les propriétaires d’organisation à modifier la visibilité d’un dépôt ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation. Quand vous empêchez les membres de modifier la visibilité des dépôts, seuls les propriétaires d’entreprise peuvent la modifier.

Si un propriétaire d’entreprise a autorisé uniquement les propriétaires d’organisation à créer des dépôts, les membres ne pourront pas modifier la visibilité d’un dépôt. Si un propriétaire d’entreprise a autorisé les membres à créer des dépôts privés uniquement, les membres pourront modifier la visibilité d’un dépôt pour la définir comme privée uniquement. Pour plus d’informations, consultez « [Application d’une stratégie pour la création de dépôt](#enforcing-a-policy-for-repository-creation) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. Sous « Modification de la visibilité d’un dépôt », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Sous « Modification de la visibilité d’un dépôt », utilisez le menu déroulant et choisissez une stratégie.
   ![Menu déroulant avec les options de stratégie de visibilité d’un dépôt](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## Application d’une stratégie pour la suppression et le transfert de dépôt

Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les membres ayant des autorisations d’administration à supprimer ou transférer un dépôt, autoriser uniquement les propriétaires d’organisation à supprimer ou transférer un dépôt ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. Sous « Suppression et transfert de dépôt », passez en revue les informations sur la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Application d’une stratégie pour la suppression de problèmes

Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les membres disposant d’un accès administrateur à supprimer les problèmes dans un dépôt, autoriser uniquement les propriétaires d’organisation à supprimer des problèmes ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. Sous l’onglet **Stratégies de dépôt**, sous « Suppression de problèmes dans un dépôt », passez en revue les informations sur la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Sous « Suppression de problèmes dans un dépôt », utilisez le menu déroulant et choisissez une stratégie.

  ![Menu déroulant avec les options de stratégie de suppression de problèmes](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Application d’une stratégie pour les limites de poussées (push) Git

Pour que la taille de vos dépôts reste gérable et pour prévenir les problèmes de performances, vous pouvez configurer une limite de taille de fichier pour les dépôts de votre entreprise.

Par défaut, quand vous appliquez des limites de chargement de dépôt, les utilisateurs ne peuvent pas ajouter ou mettre à jour des fichiers de plus de 100 Mo.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Sous « Limite de chargement de dépôt », utilisez le menu déroulant et cliquez sur une taille d’objet maximale.
![Menu déroulant avec les options de taille d’objet maximale](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Si vous le souhaitez, pour appliquer une limite de chargement maximale pour tous les dépôts de votre entreprise, sélectionnez **Appliquer à tous les dépôts**
![Option pour appliquer une taille d’objet maximale à tous les dépôts](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

{% ifversion profile-name-enterprise-setting %}

## Application d’une stratégie pour l’affichage des noms de membres dans vos dépôts

Dans toutes les organisations appartenant à votre entreprise, vous pouvez autoriser les membres à voir le nom du profil de l’auteur du commentaire, en plus de leur nom d’utilisateur, dans les problèmes et les demandes de tirage des dépôts publics et internes.

![Nom de profil du commentateur affiché dans le commentaire](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**Remarque :** Lorsque cette stratégie est appliquée à tous les dépôts de l’entreprise, elle remplace le paramètre d’organisation pour les dépôts privés. Pour plus d’informations, consultez « [Gestion de l’affichage des noms de membres dans votre organisation](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization) ».

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Sous « Autoriser les membres à voir le nom du profil de l’auteur du commentaire dans les dépôts publics et internes », sélectionnez le menu déroulant et cliquez sur une stratégie.
![Capture d’écran de la page Options avec le menu déroulant des stratégies mis en évidence](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. Si vous le souhaitez, pour appliquer l’affichage des noms de profil pour tous les dépôts de votre entreprise, sélectionnez **Appliquer pour tous les dépôts sur l’instance**.
![Capture d’écran de l’option « Appliquer pour tous les dépôts » mise en évidence](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## Configuration de l’éditeur de conflit de fusion pour les demandes de tirage (pull request) entre dépôts

En exigeant des utilisateurs qu’ils résolvent les conflits de fusion localement sur leur ordinateur, vous pouvez éviter qu’ils écrivent accidentellement sur un dépôt en amont à partir d’une duplication.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Sous « Éditeur de conflit pour les demandes de tirage entre dépôts », utilisez le menu déroulant, puis cliquez sur **Désactivé**.
 ![Menu déroulant avec l’option permettant de désactiver l’éditeur de conflit de fusion](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configuration des poussées forcées

Chaque dépôt hérite d’un paramètre de poussée forcée par défaut à partir des paramètres du compte d’utilisateur ou de l’organisation propriétaire du dépôt. Chaque organisation et chaque compte d’utilisateur héritent d’un paramètre de poussée forcée par défaut à partir du paramètre de poussée forcée pour l’entreprise. Si vous modifiez le paramètre de poussée forcée pour l’entreprise, la stratégie s’applique à tous les dépôts appartenant à un utilisateur ou à une organisation.

### Blocage des poussées forcées sur tous les dépôts

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Sous « Poussées forcées », utilisez le menu déroulant, puis cliquez sur **Autoriser**, **Bloquer** ou **Bloquer sur la branche par défaut**.
![Liste déroulante Poussées forcées](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Si vous le souhaitez, sélectionnez **Appliquer à tous les dépôts**. Ceci remplacera les paramètres de poussée forcée au niveau de l’organisation et du dépôt.

### Blocage des poussées forcées sur un dépôt spécifique

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Sélectionnez **Bloquer** ou **Bloquer sur la branche par défaut** sous **Poussée et tirage**.
   ![Bloquer les poussées forcées](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Blocage des poussées forcées sur des dépôts appartenant à un compte d’utilisateur ou à une organisation

Les dépôts héritent des paramètres de poussée forcée de l’organisation ou du compte d’utilisateur auquel ils appartiennent. Les organisations et comptes d’utilisateur héritent, quant à eux, des paramètres de poussée forcée pour l’entreprise.

Vous pouvez remplacer les paramètres hérités par défaut en configurant les paramètres d’un compte d’utilisateur ou d’une organisation.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Sous « Paramètres par défaut du dépôt », dans la section « Poussées forcées », sélectionnez
    - **Bloquer** pour bloquer les poussées forcées sur toutes les branches
    - **Bloquer sur la branche par défaut** pour bloquer les poussées forcées uniquement sur la branche par défaut
  ![Bloquer les poussées forcées](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Si vous le souhaitez, sélectionnez **Appliquer à tous les dépôts** pour remplacer les paramètres spécifiques aux dépôts. Notez que ceci **ne remplace pas** une stratégie à l’échelle de l’entreprise.
   ![Bloquer les poussées forcées](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configuration de l’accès en lecture Git anonyme

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Si vous avez [activé le mode privé](/enterprise/admin/configuration/enabling-private-mode) pour {% data variables.location.product_location %}, vous pouvez autoriser les administrateurs de dépôts à activer l’accès en lecture Git anonyme aux dépôts publics.

L’activation de l’accès en lecture Git anonyme permet aux utilisateurs de contourner l’authentification pour les outils personnalisés utilisés dans le cadre de votre entreprise. Quand un administrateur de dépôt ou vous-même activez ce paramètre d’accès pour un dépôt, les opérations Git non authentifiées (et toute personne ayant un accès réseau à {% data variables.product.product_name %}) ont un accès en lecture au dépôt sans authentification.

L’accès en lecture Git anonyme est désactivé par défaut. {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %} Lorsque vous passez à {% data variables.product.product_name %} 3.6 ou ultérieur, l’accès en lecture Git anonyme est automatiquement désactivé au niveau de l’application et les connexions `git://` sur le port 9418 retournent l’erreur suivante.

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

{% ifversion ghes > 3.5 %}

Si vous souhaitez prendre en charge le protocole Git non authentifié dans votre environnement, vous devez réactiver manuellement la fonctionnalité. Exécutez les commandes suivantes après votre mise à niveau :

```ShellSession
$ sudo ghe-config app.gitauth.git-protocol true
$ sudo ghe-config-apply
```

{% endif %}

L’accès en lecture Git anonyme sera entièrement supprimé dans une version ultérieure de {% data variables.product.prodname_ghe_server %}. {% data variables.product.company_short %} recommande d’utiliser SSH au lieu du protocole Git. Pour plus d’informations sur ce changement, consultez [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% endif %}



Si nécessaire, vous pouvez empêcher les administrateurs de dépôt de modifier les paramètres d’accès Git anonyme pour les dépôts de votre entreprise en verrouillant les paramètres d’accès du dépôt. Quand vous verrouillez le paramètre d’accès en lecture Git d’un dépôt, seul un administrateur de site peut le modifier.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Définition de l’accès en lecture Git anonyme pour tous les dépôts

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. Sous « Accès en lecture Git anonyme », utilisez le menu déroulant et cliquez sur **Activé**.
![Menu déroulant Accès en lecture Git anonyme avec les options de menu « Activé » et « Désactivé »](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Si vous le souhaitez, pour empêcher les administrateurs de dépôt de modifier les paramètres d’accès en lecture Git anonyme pour tous les dépôts de votre entreprise, sélectionnez **Empêcher les administrateurs de dépôt de modifier l’accès en lecture Git anonyme**.
![Cochez la case pour empêcher les administrateurs de dépôt de modifier les paramètres d’accès en lecture Git anonyme pour tous les dépôts de votre entreprise](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Définition de l’accès en lecture Git anonyme pour un dépôt spécifique

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Sous « Zone danger », en regard de « Activer l’accès en lecture Git anonyme », cliquez sur **Activer**.
![Bouton « Activer » sous « Activer l’accès en lecture Git anonyme » dans la zone de danger des paramètres d’administrateur de site d’un dépôt](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Passez en revue les modifications. Pour confirmer, cliquez sur **Oui, activer l’accès en lecture Git anonyme.** 
![Confirmation du paramètre d’accès en lecture Git anonyme dans la fenêtre contextuelle](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Si vous le souhaitez, pour empêcher les administrateurs de dépôt de modifier ce paramètre pour ce dépôt, sélectionnez **Empêcher les administrateurs de dépôt de modifier l’accès en lecture Git anonyme**.
![Cochez la case pour empêcher les administrateurs de dépôt de modifier l’accès en lecture Git anonyme pour ce dépôt](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
