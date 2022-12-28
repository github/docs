---
title: Affichage de packages
intro: Vous pouvez voir des détails sur les packages publiés dans un dépôt et affiner les résultats par organisation ou utilisateur.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192840'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## À propos des vues de packages

Votre capacité à afficher un package dépend de plusieurs facteurs. Par défaut, vous pouvez afficher tous les packages que vous avez publiés.

{% ifversion packages-registries-v2 %} Les packages limités au dépôt héritent de leurs autorisations et de leur visibilité du dépôt auquel ils appartiennent. Certains registres prennent **uniquement** en charge les packages limités au dépôt. Pour obtenir la liste de ces registres, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) ».

D’autres registres vous offrent l’option d’autorisations granulaires et de paramètres de visibilité qui peuvent être personnalisés pour chaque package appartenant à un compte d’utilisateur ou d’organisation personnel. Vous pouvez choisir d’utiliser des autorisations granulaires ou de connecter le package à un dépôt et d’hériter des autorisations de ce dernier. Pour plus d’informations, consultez « [Connexion d’un dépôt à un package](/packages/learn-github-packages/connecting-a-repository-to-a-package) » et « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) ».

{% else %}

Les packages héritent des autorisations et de la visibilité du dépôt sur lequel ils sont hébergés. Pour plus d’informations, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages) ».

{% endif %}

{% data reusables.package_registry.package-page-info %}

## Affichage des packages d’un dépôt

Vous pouvez trouver et afficher un package situé dans un dépôt particulier.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Affichage des packages d’une organisation

Vous pouvez trouver et afficher un package situé dans les dépôts d’une organisation à laquelle vous appartenez.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Sous le nom de votre organisation, cliquez sur {% octicon "package" aria-label="The package icon" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

## Affichage de vos packages

Vous pouvez trouver et afficher tout package que vous avez publié dans toutes les organisations et tous les dépôts. 

{% data reusables.profile.access_profile %}
2. En haut de la page de profil, dans la navigation principale, cliquez sur **Packages**.
  ![Onglet Projet](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## Pour aller plus loin

- « [Recherche de packages](/search-github/searching-on-github/searching-for-packages) »
