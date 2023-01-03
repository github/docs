---
title: Création d’un site GitHub Pages avec Jekyll
intro: 'Vous pouvez utiliser Jekyll pour créer un site {% data variables.product.prodname_pages %} dans un dépôt nouveau ou existant.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 409b2d1e21f89471e7ad92f790bc7ac67e903a62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133056'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Prérequis

Avant de pouvoir utiliser Jekyll pour créer un site {% data variables.product.prodname_pages %}, vous devez installer Jekyll et Git. Pour plus d’informations, consultez [Installation](https://jekyllrb.com/docs/installation/) dans la documentation de Jekyll et « [Configurer Git](/articles/set-up-git) ».

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Création d’un dépôt pour votre site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## Création de votre site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Si vous n’avez pas encore de copie locale de votre dépôt, accédez à l’emplacement où vous souhaitez stocker les fichiers sources de votre site, en remplaçant _PARENT-FOLDER_ par le dossier qui contiendra le dossier pour votre dépôt.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. Si vous ne l’avez pas déjà fait, initialisez un dépôt Git local, en remplaçant _REPOSITORY-NAME_ par le nom de votre dépôt.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Changez de répertoire dans le dépôt.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} Par exemple, si vous avez choisi de publier votre site à partir du dossier `docs` de la branche par défaut, créez et changez de répertoire dans le dossier `docs`.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 Si vous avez choisi de publier votre site à partir de la branche `gh-pages`, créez et extrayez la branche `gh-pages`.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. Pour créer un site Jekyll, utilisez la commande `jekyll new` :
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Ouvrez le Gemfile créé par Jekyll.
1. Ajoutez « # » au début de la ligne qui commence par `gem "jekyll"` pour commenter cette ligne.
1. Ajoutez la gemme `github-pages` en modifiant la ligne commençant par `# gem "github-pages"`. Remplacez cette ligne par :

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Remplacez _GITHUB-PAGES-VERSION_ par la dernière version prise en charge de la gemme `github-pages`. Vous trouverez cette version ici : « [Versions de dépendances](https://pages.github.com/versions/) ».

   La bonne version de Jekyll est installée en tant que dépendance de la gemme `github-pages`.
1. Enregistrez et fermez le Gemfile.
1. À partir de la ligne de commande, exécutez `bundle install`.
1. Si vous le souhaitez, apportez toutes les modifications nécessaires au fichier `_config.yml`. C’est nécessaire pour les chemins relatifs lorsque le dépôt est hébergé dans un sous-répertoire.  Pour plus d’informations, consultez « [Division d’un sous-dossier en nouveau dépôt](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository) ».
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. Si vous le souhaitez, testez votre site localement. Pour plus d’informations, consultez « [Test de votre site {% data variables.product.prodname_pages %} localement avec Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll) ».
1. Ajoutez et commitez votre travail.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. Ajoutez votre dépôt dans {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} en tant que dépôt distant, en remplaçant {% ifversion ghes or ghae %}_HOSTNAME_ par le nom d’hôte de votre entreprise,{% endif %} _USER_ par le compte propriétaire du dépôt{% ifversion ghes or ghae %},{% endif %} et _REPOSITORY_ par le nom du dépôt.
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
1. Envoyez le dépôt à {% data variables.product.product_name %}, en remplaçant _BRANCH_ par le nom de la branche sur laquelle vous travaillez.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Étapes suivantes

Pour ajouter une nouvelle page ou publier sur votre site, consultez « [Ajout de contenu à votre site {% data variables.product.prodname_pages %} avec Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll) ».

{% data reusables.pages.add-jekyll-theme %} Pour plus d’informations, consultez « [Ajout d’un thème à votre site {% data variables.product.prodname_pages %} avec Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll) ».
