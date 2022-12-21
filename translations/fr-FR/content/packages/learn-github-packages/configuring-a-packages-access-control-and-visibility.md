---
title: Configuration du contrôle d’accès et de la visibilité d’un package
intro: 'Choisissez qui a un accès en lecture, en écriture ou en tant qu’administrateur à votre image de conteneur et la visibilité de vos images de conteneur sur {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Access control & visibility
ms.openlocfilehash: 8ef541f45fd6568db7c8510bc860d81d504494c5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193056'
---
{% data reusables.package_registry.container-registry-ghes-beta %}{% ifversion packages-registries-v2 %}

Les packages avec des autorisations précises sont limités à un compte d’utilisateur ou d’organisation personnel. Vous pouvez modifier le contrôle d’accès et la visibilité d’un package séparément du dépôt auquel il est connecté (ou lié).

Certains registres prennent uniquement en charge les autorisations limitées au dépôt. Pour obtenir la liste de ces registres, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) ».

{% else %}Un package hérite des autorisations et de la visibilité du dépôt propriétaire du package.{% endif %} Pour plus d’informations sur les autorisations pour les packages, les étendues liées aux packages pour les PAT ou la gestion des autorisations pour vos workflows d’actions, consultez « [À propos des autorisations pour les packages GitHub](/packages/learn-github-packages/about-permissions-for-github-packages) ».

{% ifversion packages-registries-v2 %}

## Visibilité et autorisations d’accès pour les images conteneur

{% data reusables.package_registry.visibility-and-access-permissions %}

{% endif %}

## Configuration de l’accès aux images conteneur pour votre compte personnel

Si vous disposez d’autorisations d’administrateur sur une image conteneur appartenant à un compte personnel, vous pouvez attribuer des rôles de lecture, d’écriture ou d’administrateur à d’autres utilisateurs. Pour plus d’informations sur ces rôles d’autorisations, consultez « [Visibilité et autorisations d’accès pour les images conteneur](#visibility-and-access-permissions-for-container-images) ».

Si votre package est privé ou interne et appartient à une organisation, vous pouvez uniquement accorder l’accès à d’autres membres ou équipes de l’organisation.

{% data reusables.package_registry.package-settings-option %}
1. Dans la page des paramètres du package, cliquez sur **Inviter des équipes ou des personnes** et entrez le nom, le nom d’utilisateur ou l’e-mail de la personne à laquelle vous souhaitez accorder l’accès. Il est impossible d’accorder à des équipes l’accès à une image conteneur appartenant à un compte personnel.
  ![Bouton d’invitation d’accès au conteneur](/assets/images/help/package-registry/container-access-invite.png)
1. En regard du nom d’utilisateur ou de l’équipe, utilisez le menu déroulant « Rôle » pour sélectionner un niveau d’autorisation souhaité.
  ![Options d’accès au conteneur](/assets/images/help/package-registry/container-access-control-options.png)

L’accès est automatiquement accordé aux utilisateurs sélectionnés qui n’ont pas besoin d’accepter d’abord une invitation.

## Configuration de l’accès aux images conteneur pour une organisation

Si vous disposez d’autorisations d’administrateur sur une image conteneur appartenant à une organisation, vous pouvez attribuer des rôles de lecture, d’écriture ou d’administrateur à d’autres utilisateurs et équipes. Pour plus d’informations sur ces rôles d’autorisations, consultez « [Visibilité et autorisations d’accès pour les images conteneur](#visibility-and-access-permissions-for-container-images) ».

Si votre package est privé ou interne et appartient à une organisation, vous pouvez uniquement accorder l’accès à d’autres membres ou équipes de l’organisation.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. Dans la page des paramètres du package, cliquez sur **Inviter des équipes ou des personnes** et entrez le nom, le nom d’utilisateur ou l’e-mail de la personne à laquelle vous souhaitez accorder l’accès. Vous pouvez également entrer un nom d’équipe de l’organisation pour accorder l’accès à tous les membres de l’équipe.
  ![Bouton d’invitation d’accès au conteneur](/assets/images/help/package-registry/container-access-invite.png)
1. En regard du nom d’utilisateur ou de l’équipe, utilisez le menu déroulant « Rôle » pour sélectionner un niveau d’autorisation souhaité.
  ![Options d’accès au conteneur](/assets/images/help/package-registry/container-access-control-options.png)

L’accès est automatiquement accordé aux équipes ou utilisateurs sélectionnés qui n’ont pas besoin d’accepter d’abord une invitation.

## Héritage de l’accès pour une image conteneur à partir d’un dépôt

Pour simplifier la gestion des packages via les workflows {% data variables.product.prodname_actions %}, vous pouvez permettre à une image conteneur d’hériter des autorisations d’accès d’un dépôt par défaut.

Si vous héritez des autorisations d’accès du dépôt où les workflows de votre package sont stockés, vous pouvez ajuster l’accès à votre package via les autorisations du dépôt.

Une fois qu’un dépôt est synchronisé, vous ne pouvez pas accéder aux paramètres d’accès précis du package. Pour personnaliser les autorisations du package via les paramètres d’accès du package précis, vous devez d’abord supprimer le dépôt synchronisé.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
2. Sous « Source de dépôt », sélectionnez **Hériter de l’accès à partir du dépôt (recommandé)** .
  ![Case à cocher Hériter de l’accès à partir du dépôt](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## Garantie de l’accès du workflow à votre package

Pour vous assurer qu’un workflow {% data variables.product.prodname_actions %} a accès à votre package, vous devez accorder un accès explicite au dépôt où le workflow est stocké.

Le dépôt spécifié n’a pas besoin d’être le dépôt où le code source du package est conservé. Vous pouvez accorder à un workflow dans plusieurs dépôts l’accès à un package.

{% note %}

**Remarque :** La synchronisation de votre image conteneur avec un dépôt via l’option de menu **Accès à Actions** est différente de la connexion de votre conteneur à un dépôt. Pour plus d’informations sur la liaison d’un dépôt à votre conteneur, consultez « [Connexion d’un dépôt à un package](/packages/learn-github-packages/connecting-a-repository-to-a-package) ».

{% endnote %}

### Accès à {% data variables.product.prodname_actions %} pour les images conteneur appartenant à un compte d’utilisateur 

{% data reusables.package_registry.package-settings-option %}
1. Dans la barre latérale de gauche, cliquez sur **Accès à Actions**.
  ![Option « Accès à Actions » dans le menu de gauche](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Pour vous assurer que votre workflow a accès à votre package de conteneur, vous devez ajouter le dépôt où le workflow est stocké. Cliquez sur **Ajouter un dépôt** et recherchez le dépôt que vous souhaitez ajouter.
   ![Bouton « Ajouter un dépôt »](/assets/images/help/package-registry/add-repository-button.png)
3. En utilisant le menu déroulant « Rôle », sélectionnez le niveau d’accès par défaut à votre image conteneur que vous aimeriez accorder au dépôt.
  ![Niveaux d’accès d’autorisation à donner aux dépôts](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Pour personnaliser davantage l’accès à votre image conteneur, consultez « [Configuration de l’accès aux images conteneur pour votre compte personnel](#configuring-access-to-container-images-for-your-personal-account) ».

### Accès à {% data variables.product.prodname_actions %} pour les images conteneur appartenant à une organisation 

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. Dans la barre latérale de gauche, cliquez sur **Accès à Actions**.
  ![Option « Accès à Actions » dans le menu de gauche](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Cliquez sur **Ajouter un dépôt** et recherchez le dépôt que vous souhaitez ajouter.
   ![Bouton « Ajouter un dépôt »](/assets/images/help/package-registry/add-repository-button.png)
3. En utilisant le menu déroulant « Rôle », sélectionnez le niveau d’accès par défaut à votre image conteneur que vous aimeriez accorder aux membres du dépôt. Les collaborateurs externes ne seront pas inclus.
  ![Niveaux d’accès d’autorisation à donner aux dépôts](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Pour personnaliser davantage l’accès à votre image conteneur, consultez « [Configuration de l’accès aux images conteneur pour une organisation](#configuring-access-to-container-images-for-an-organization) ».

{% ifversion fpt or ghec %}
## Garantie de l’accès des {% data variables.product.prodname_github_codespaces %} à votre package

Par défaut, un codespace peut accéder de façon fluide à certains packages dans les registres qui prennent en charge les autorisations granulaires, notamment les packages publiés dans le même dépôt avec l’option **Hériter de l’accès** sélectionnée. Pour obtenir la liste des registres {% data variables.product.prodname_registry %} qui prennent en charge les autorisations granulaires et l’accès fluide aux {% data variables.product.prodname_github_codespaces %}, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages) ».

Sinon, pour vous assurer qu’un espace de code a accès à votre package, vous devez accorder l’accès au dépôt dans lequel l’espace de code est lancé.

Le dépôt spécifié n’a pas besoin d’être le dépôt où le code source du package est conservé. Vous pouvez accorder à des espaces de code dans plusieurs dépôts l’accès à un package.

Une fois que vous avez sélectionné le package que vous souhaitez partager avec des espaces de code dans un dépôt, vous pouvez accorder l’accès à ce dépôt.

1. Dans la barre latérale de droite, cliquez sur **Paramètres du package**.

   ![Option « Paramètres du package » dans le menu de droite](/assets/images/help/package-registry/package-settings.png)
   
2. Sous « Gérer l’accès des espaces de code », cliquez sur **Ajouter un dépôt**.

   ![Bouton « Ajouter un dépôt »](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. Recherchez le dépôt que vous souhaitez ajouter.

   ![Bouton « Ajouter un dépôt »](/assets/images/help/package-registry/manage-codespaces-access-search.png)
   
4. Répétez cette opération pour tous les dépôts supplémentaires auxquels vous souhaitez autoriser l’accès.

5. Si les espaces de code d’un dépôt n’ont plus besoin d’accéder à une image, vous pouvez supprimer l’accès.

   ![Bouton « Supprimer le dépôt »](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## Configuration de la visibilité des images conteneur pour votre compte personnel

Lorsque vous publiez un package pour la première fois, la visibilité par défaut est privée et vous seul pouvez voir le package. Vous pouvez modifier l’accès d’une image conteneur privée ou publique en changeant les paramètres d’accès.

Un package public est accessible anonymement sans authentification. Une fois que vous avez rendu votre package public, il ne peut plus redevenir privé.

{% data reusables.package_registry.package-settings-option %}
5. Sous « Zone de danger », choisissez un paramètre de visibilité :
    - Pour rendre l’image conteneur visible par tout le monde, cliquez sur **Rendre public**.
    {% warning %}

    **Avertissement :** Une fois que vous avez rendu un package public, il ne peut plus redevenir privé.

    {% endwarning %}
    - Pour rendre l’image conteneur visible par une sélection personnalisée de personnes, cliquez sur **Rendre privé**.
  ![Options de visibilité des conteneurs](/assets/images/help/package-registry/container-visibility-option.png)

## Visibilité de la création de conteneurs pour les membres de l’organisation

Vous pouvez choisir la visibilité des conteneurs que les membres de l’organisation peuvent publier par défaut.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Sur la gauche, cliquez sur **Packages**.
6. Sous « Création de conteneur », choisissez si vous souhaitez activer la création d’images conteneur publiques, privées ou internes.
    - Pour permettre aux membres de l’organisation de créer des images conteneur publiques, cliquez sur **Public**.
    - Pour permettre aux membres de l’organisation de créer des images conteneur privées qui ne sont visibles que par d’autres membres de l’organisation, cliquez sur **Privé**. Vous pouvez personnaliser davantage la visibilité des images conteneur privées.
    - Pour permettre aux membres de l’organisation de créer des images conteneur internes visibles par tous les membres de l’organisation, cliquez sur **Interne**. Si l’organisation appartient à une entreprise, les images conteneur sont visibles par tous les membres de l’entreprise.
    ![Options de visibilité pour les images conteneur publiées par les membres de l’organisation](/assets/images/help/package-registry/container-creation-org-settings.png)

## Configuration de la visibilité des images conteneur pour une organisation

Lorsque vous publiez un package pour la première fois, la visibilité par défaut est privée et vous seul pouvez voir le package. Vous pouvez accorder aux utilisateurs ou aux équipes différents rôles d’accès pour votre image conteneur via les paramètres d’accès.

Un package public est accessible anonymement sans authentification. Une fois que vous avez rendu votre package public, il ne peut plus redevenir privé.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Sous « Zone de danger », choisissez un paramètre de visibilité :
    - Pour rendre l’image conteneur visible par tout le monde, cliquez sur **Rendre public**.
    {% warning %}

    **Avertissement :** Une fois que vous avez rendu un package public, il ne peut plus redevenir privé.

    {% endwarning %}
    - Pour rendre l’image conteneur visible par une sélection personnalisée de personnes, cliquez sur **Rendre privé**.
  ![Options de visibilité des conteneurs](/assets/images/help/package-registry/container-visibility-option.png)
