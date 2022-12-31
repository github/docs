---
title: Suppression et restauration d’un package
intro: Découvrez comment supprimer ou restaurer un package.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 57f90bb6dbcda759e90444a40c7deef84d907b9c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193072'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Prise en charge de la suppression et de la restauration de package sur {% data variables.product.prodname_dotcom %}

Sur {% data variables.product.prodname_dotcom %}, si vous disposez de l’accès requis, vous pouvez supprimer :
- un package privé entier
- un package public entier s’il n’y a pas plus de 5 000 téléchargements d’une version du package
- une version spécifique d’un package privé
- une version spécifique d’un package public si la version du package n’a pas plus de 5 000 téléchargements

{% note %}

**Remarque :**
- Vous ne pouvez pas supprimer un package public si une version de celui-ci compte plus de 5 000 téléchargements. Dans ce scénario, contactez le [Support GitHub](https://support.github.com/contact?tags=docs-packages) pour obtenir une aide supplémentaire.
- Lorsque vous supprimez des packages publics, sachez que cela risque de perturber des projets qui dépendent de votre package.

{% endnote %}

Sur {% data variables.product.prodname_dotcom %}, vous pouvez également restaurer un package entier ou une version package si :
- Vous restaurez le package dans les 30 jours suivant sa suppression.
- Le même espace de noms de package est toujours disponible et n’est pas utilisé pour un nouveau package.

## Prise en charge de l’API Packages

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion fpt or ghec %}

Vous pouvez utiliser l’API REST pour gérer vos packages. Pour plus d’informations, consultez l’« [API {% data variables.product.prodname_registry %}](/rest/reference/packages) ».

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## Autorisations requises pour supprimer ou restaurer un package

{% ifversion packages-registries-v2 %} Avec les registres qui prennent en charge les autorisations granulaires, vous pouvez choisir d’autoriser que les packages soient limités à un utilisateur ou à une organisation, ou liés à un dépôt.

Pour supprimer un package qui a des autorisations granulaires distinctes d’un dépôt, comme les images conteneur stockées dans {% ifversion ghes %}`https://containers.HOSTNAME/OWNER/PACKAGE-NAME`{% else %}`https://ghcr.io/OWNER/PACKAGE-NAME`{% endif %}{% ifversion packages-npm-v2 %} ou les packages stockés dans `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`{% endif %}, vous devez avoir un accès administrateur au package. Pour plus d’informations, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages) ».

Pour les packages qui héritent de leurs autorisations d’accès à partir de dépôts, vous pouvez supprimer un package si vous disposez d’autorisations d’administrateur sur le dépôt.

Certains registres prennent **uniquement** en charge les packages limités au dépôt. Pour obtenir la liste de ces registres, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) ».

{% else %}

Vous pouvez supprimer un package si vous avez des autorisations d’administrateur sur le dépôt dans lequel le package est publié.

{% endif %}

## Suppression d’une version de package

### Suppression d’une version d’un package {% ifversion packages-registries-v2 %}limité au dépôt {% endif %}sur {% data variables.product.prodname_dotcom %}

Pour supprimer une version d’un package {% ifversion packages-registries-v2 %}limité au dépôt {% endif %}, vous devez avoir des autorisations d’administrateur sur le dépôt propriétaire du package. Pour plus d’informations, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. Sur la gauche, cliquez sur **Gérer les versions**.
5. À droite de la version à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sélectionnez **Supprimer la version**.
  ![Bouton Supprimer la version du package](/assets/images/help/package-registry/delete-container-package-version.png)
6. Pour confirmer la suppression, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, supprimer cette version**.
  ![Bouton Confirmer la suppression du package](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### Suppression d’une version d’un package {% ifversion packages-registries-v2 %}limité au dépôt{% endif %} avec GraphQL

{% data reusables.package_registry.about-graphql-support %}{% ifversion fpt or ghec %} Pour plus d’informations sur l’utilisation de l’API REST à la place, consultez « l’[API {% data variables.product.prodname_registry %}](/rest/reference/packages) ».{% endif %}

Utilisez la mutation `deletePackageVersion` dans l’API GraphQL. Vous devez utiliser un {% data variables.product.pat_v1 %} avec les étendues `read:packages`, `delete:packages` et `repo`. Pour plus d’informations sur les {% data variables.product.pat_v1_plural %}, consultez « [À propos de {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages) ».

L’exemple suivant montre comment supprimer une version de package à l’aide d’un `packageVersionId` de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Pour trouver tous les packages privés que vous avez publiés sur {% data variables.product.prodname_registry %}, ainsi que les ID de version des packages, vous pouvez utiliser la connexion `packages` via l’objet `repository`. Vous aurez besoin d’un {% data variables.product.pat_v1 %} avec les étendues `read:packages` et `repo`. Pour plus d’informations, consultez la connexion [`packages`](/graphql/reference/objects#repository) ou l’interface [`PackageOwner`](/graphql/reference/interfaces#packageowner).

Pour plus d’informations sur la mutation `deletePackageVersion`, consultez «[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion) ».

Vous ne pouvez pas supprimer directement un package entier à l’aide de l’API GraphQL mais, si vous supprimez chaque version d’un package, le package n’apparaîtra plus sur {% data variables.product.product_name %}.

{% endif %}

{% ifversion fpt or ghec %}
### Suppression d’une version d’un package de portée d’utilisateur sur {% data variables.product.prodname_dotcom %}

Pour supprimer une version spécifique d’un package de portée d’utilisateur sur {% data variables.product.prodname_dotcom %}, par exemple, pour une image Docker sur `ghcr.io`, procédez comme suit. Pour supprimer un package entier, consultez « [Suppression d’un package entier de portée d’utilisateur sur {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github) ».

Pour voir qui peut supprimer une version de package, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. Sur la gauche, cliquez sur **Gérer les versions**.
5. À droite de la version à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sélectionnez **Supprimer la version**.
  ![Bouton Supprimer la version du package](/assets/images/help/package-registry/delete-container-package-version.png)
6. Pour confirmer la suppression, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, supprimer cette version**.
  ![Bouton Confirmer la suppression du package](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Suppression d’une version d’un package de portée d’organisation sur {% data variables.product.prodname_dotcom %}

Pour supprimer une version spécifique d’un package de portée d’organisation sur {% data variables.product.prodname_dotcom %}, par exemple, pour une image Docker sur `ghcr.io`, procédez comme suit.
Pour supprimer un package entier, consultez « [Suppression d’un package entier de portée d’organisation sur {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github) ».

Pour voir qui peut supprimer une version de package, consultez « [Autorisations requises pour supprimer ou restaurer un package](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Sur la gauche, cliquez sur **Gérer les versions**.
5. À droite de la version à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sélectionnez **Supprimer la version**.
  ![Bouton Supprimer la version du package](/assets/images/help/package-registry/delete-container-package-version.png)
6. Pour confirmer la suppression, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, supprimer cette version**.
  ![Bouton Confirmer la suppression de la version du package](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## Suppression d’un package entier

### Suppression d’un package entier de portée de dépôt sur {% data variables.product.prodname_dotcom %}

Pour supprimer un package étendu à un dépôt entier, vous devez disposer d’autorisations d’administrateur sur le dépôt propriétaire du package. Pour plus d’informations, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. Sous « Zone de danger », cliquez sur **Supprimer ce package**.
5. Pour confirmer, révisez le message de confirmation, entrez le nom de votre package, puis cliquez sur **Je comprends, supprimer ce package.** 
  ![Bouton Confirmer la suppression du package](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### Suppression d’un package entier de portée d’utilisateur sur {% data variables.product.prodname_dotcom %}

Pour voir qui peut supprimer un package, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. Sur la gauche, cliquez sur **Options**.
  ![Option de menu « Options »](/assets/images/help/package-registry/options-for-container-settings.png)
6. Sous « Zone de danger », cliquez sur **Supprimer ce package**.
  ![Bouton Supprimer la version du package](/assets/images/help/package-registry/delete-container-package-button.png)
6. Pour confirmer la suppression, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, supprimer cet package**.
  ![Bouton Confirmer la suppression de la version du package](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Suppression d’un package entier de portée d’organisation sur {% data variables.product.prodname_dotcom %}

Pour voir qui peut supprimer un package, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Sur la gauche, cliquez sur **Options**.
  ![Option de menu « Options »](/assets/images/help/package-registry/options-for-container-settings.png)
6. Sous « Zone de danger », cliquez sur **Supprimer ce package**.
  ![Bouton Supprimer le package](/assets/images/help/package-registry/delete-container-package-button.png)
6. Pour confirmer la suppression, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, supprimer cet package**.
  ![Bouton Confirmer la suppression du package](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## Restauration de packages

Vous pouvez restaurer un package ou une version supprimés si :
- Vous restaurez le package dans les 30 jours suivant sa suppression.
- Les mêmes espace de noms et version de package sont toujours disponibles et ne sont pas réutilisés pour un nouveau package.

Par exemple, si vous avez un package RubyGems supprimé nommé `octo-package` dont la portée était étendue au dépôt `octo-repo-owner/octo-repo`, vous ne pouvez le restaurer que si l’espace de noms du package `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` est toujours disponible, et si 30 jours ne se sont pas encore écoulés.

{% ifversion fpt or ghec %} Pour restaurer un package supprimé, vous devez également répondre à l’une des exigences d’autorisation suivantes :
  - Pour les packages de portée de dépôt : vous disposez d’autorisations d’administration sur le dépôt propriétaire du package supprimé.{% ifversion fpt or ghec %}
  - Pour les packages de portée de compte d’utilisateur : votre compte personnel est propriétaire du package supprimé.
  - Pour les packages de portée d’organisation : vous disposez d’autorisations d’administration sur le package supprimé dans l’organisation propriétaire du package.{% endif %} {% endif %}

{% ifversion ghae or ghes %} Pour supprimer un package, vous devez également disposer d’autorisations d’administrateur sur le dépôt propriétaire du package supprimé.
{% endif %}

Pour plus d’informations, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

Une fois le package restauré, il utilise le même espace de noms qu’auparavant. Si le même espace de noms de package n’est pas disponible, vous ne pourrez pas restaurer votre package. Dans ce scénario, pour pouvoir restaurer le package supprimé, vous devez au préalable supprimer le nouveau package qui utilise l’espace de noms du package supprimé.

### Restauration d’un package dans une organisation

 Vous pouvez restaurer un package supprimé via les paramètres de votre compte d’organisation, si le package se trouvait dans un dépôt appartenant à l’organisation{% ifversion fpt or ghec %} ou avait des autorisations granulaires, et si sa portée était étendue à votre compte d’organisation{% endif %}.

Pour voir qui peut restaurer un package dans une organisation, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. Sur la gauche, cliquez sur **Packages**.
4. Sous « Packages supprimés », en regard du package que vous souhaitez restaurer, cliquez sur **Restaurer**.
  ![Bouton Restaurer](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Pour confirmer, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, restaurer ce package**.
  ![Bouton de confirmation Restaurer le package](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### Restauration d’un package de portée de compte d’utilisateur

Vous pouvez restaurer un package supprimé via les paramètres de votre compte personnel, si le package se trouvait dans l’un de vos dépôts, ou si sa portée était étendue à votre compte personnel. Pour plus d’informations, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

{% data reusables.user-settings.access_settings %}
2. Sur la gauche, cliquez sur **Packages**.
4. Sous « Packages supprimés », en regard du package que vous souhaitez restaurer, cliquez sur **Restaurer**.
  ![Bouton Restaurer](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Pour confirmer, tapez le nom du package, puis cliquez sur **Je comprends les conséquences, restaurer ce package**.
  ![Bouton de confirmation Restaurer le package](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### Restauration d’une version de package

Vous pouvez restaurer une version de package à partir de la page d’accueil de votre package. Pour voir qui peut restaurer un package, consultez « [Autorisations requises](#required-permissions-to-delete-or-restore-a-package) ».

1. Accédez à la page d’accueil de votre package.
2. Sur la droite, cliquez sur **Paramètres du package**.
2. Sur la gauche, cliquez sur **Gérer les versions**.
3. En haut à droite, utilisez le menu déroulant « Versions », puis sélectionnez **Supprimé**.
  ![Menu déroulant Versions montrant l’option supprimée](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. En regard de la version de package supprimée que vous souhaitez restaurer, cliquez sur **Restaurer**.
  ![Option Restaurer en regard d’une version de package supprimée](/assets/images/help/package-registry/restore-package-version.png)
5. Pour confirmer, cliquez sur **Je comprends les conséquences, restaurer cette version.** 
  ![Confirmer la restauration de la version du package](/assets/images/help/package-registry/confirm-package-version-restoration.png)
