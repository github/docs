---
title: Démarrage rapide pour GitHub Pages
intro: 'Vous pouvez utiliser {% data variables.product.prodname_pages %} pour présenter certains projets open source, héberger un blog ou même partager votre CV. Ce guide vous aidera à vous lancer dans la création de votre prochain site web.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: d82ba5899bb3b98efbd5b69672472ef0d39e2353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147643860'
---
## Introduction

Les pages {% data variables.product.prodname_pages %} sont des pages web publiques hébergées et publiées via {% data variables.product.product_name %}. Le moyen le plus rapide d’être opérationnel est d’utiliser le sélecteur de thème Jekyll pour charger un thème prédéfini. Vous pouvez ensuite modifier le contenu et le style de vos pages {% data variables.product.prodname_pages %}.

Ce guide vous explique les étapes de création d’un site utilisateur sur `username.github.io`.

## Création de votre site web

{% data reusables.repositories.create_new %}
1. Entrez `username.github.io` comme nom du dépôt Remplacez `username` par votre nom d’utilisateur {% data variables.product.prodname_dotcom %}. Par exemple, si votre nom d’utilisateur est `octocat`, le nom du dépôt doit être `octocat.github.io`.
   ![Champ Nom du dépôt](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Sous « Génération et déploiement », sous « Source », sélectionnez **Déployer à partir d’une branche**.
1. Sous « Génération et déploiement », sous « Branche », utilisez le menu déroulant **Aucune** ou **Branche** et sélectionnez une source de publication.

   ![Menu déroulant pour sélectionner une source de publication](/assets/images/help/pages/publishing-source-drop-down.png)
1. Ouvrez éventuellement le fichier `README.md` de votre dépôt. Le fichier `README.md` est l’endroit où vous allez écrire le contenu de votre site. Vous pouvez modifier le fichier ou conserver le contenu par défaut pour l’instant.
1. Accédez à `username.github.io` pour voir votre nouveau site web. **Remarque :** La publication des changements de votre site peut prendre jusqu’à 10 minutes après les avoir poussés vers {% data variables.product.product_name %}.

## Modification du titre et de la description

Par défaut, le titre de votre site est `username.github.io`. Vous pouvez changer le titre en modifiant le fichier `_config.yml` dans votre dépôt. Vous pouvez aussi ajouter une description pour votre site.

1. Cliquez sur l’onglet **Code** de votre dépôt.
1. Dans la liste des fichiers, cliquez pour `_config.yml` ouvrir le fichier.
1. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier le fichier.
1. Le fichier `_config.yml` contient déjà une ligne qui spécifie le thème de votre site. Ajoutez une nouvelle ligne avec `title:` suivi du titre souhaité. Ajoutez une nouvelle ligne avec `description:` suivi de la description souhaitée. Par exemple :

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. Quand vous avez terminé la modification du fichier, cliquez sur **Commiter les modifications**.

## Étapes suivantes

Pour plus d’informations sur l’ajout de pages supplémentaires à votre site, consultez « [Ajout de contenu à votre site GitHub Pages en utilisant Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites) ».

Pour plus d’informations sur la configuration d’un site {% data variables.product.prodname_pages %} avec Jekyll, consultez « [À propos de GitHub Pages et de Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll) ».
