---
title: Ajout d’un thème à votre site GitHub Pages avec Jekyll
intro: Vous pouvez personnaliser votre site Jekyll en ajoutant et en personnalisant un thème.
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add theme to Pages site
ms.openlocfilehash: 33969695e96aa0629b2811e2742ca3093e58139a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147644794'
---
Les personnes disposant d’autorisations en écriture sur un dépôt peuvent ajouter un thème à un site {% data variables.product.prodname_pages %} avec Jekyll.

{% data reusables.pages.test-locally %}

## Ajout d’un thème

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
2. Accédez à *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Ajoutez une nouvelle ligne au fichier pour le nom du thème.
   - Pour utiliser un thème pris en charge, tapez `theme: THEME-NAME`, en remplaçant _THEME-NAME_ par le nom du thème tel qu’il apparaît dans le README du dépôt du thème. Pour obtenir la liste des thèmes pris en charge, consultez « [Thèmes pris en charge](https://pages.github.com/themes/) » sur le site {% data variables.product.prodname_pages %}.
   ![Thème pris en charge dans le fichier de configuration](/assets/images/help/pages/add-theme-to-config-file.png)
   - Pour utiliser n’importe quel autre thème Jekyll hébergé sur {% data variables.product.prodname_dotcom %}, tapez `remote_theme: THEME-NAME`, en remplaçant THEME-NAME par le nom du thème tel qu’il apparaît dans le README du dépôt du thème.
   ![Thème non pris en charge dans le fichier de configuration](/assets/images/help/pages/add-remote-theme-to-config-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Personnalisation du CSS de votre thème

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
1. Créez un fichier appelé _/assets/css/style.scss_.
2. Ajoutez le contenu suivant au début du fichier :
  ```scss
  ---
  ---

  @import "{% raw %}{{ site.theme }}{% endraw %}";
  ```
3. Ajoutez n’importe quel CSS ou Sass personnalisé (y compris les importations) de votre choix juste en dessous de la ligne `@import`.

## Personnalisation de la disposition HTML de votre thème

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. Sur {% data variables.product.prodname_dotcom %}, accédez au dépôt source de votre thème. Par exemple, le dépôt source pour Minima est https://github.com/jekyll/minima.
2. Dans le dossier *_layouts*, accédez au fichier _default.html_ de votre thème.
3. Copiez le contenu du fichier.
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
6. Créez un fichier appelé *_layouts/default.html*.
7. Collez le contenu de disposition par défaut que vous avez copié précédemment.
8. Personnalisez la disposition comme vous le souhaitez.

## Pour aller plus loin

- « [Création de fichiers](/articles/creating-new-files) »
