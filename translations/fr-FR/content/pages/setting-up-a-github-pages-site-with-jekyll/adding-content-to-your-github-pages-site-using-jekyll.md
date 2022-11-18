---
title: Ajout d’un thème à votre site GitHub Pages avec Jekyll
intro: 'Vous pouvez ajouter une nouvelle page ou publier sur votre site Jekyll sur {% data variables.product.prodname_pages %}.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add content to Pages site
ms.openlocfilehash: 90bd0d067837364eb2767739da286da7906399c0
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145134212'
---
Les personnes disposant d’autorisations d’écriture pour un référentiel peuvent ajouter du contenu à un site {% data variables.product.prodname_pages %} à l’aide de Jekyll.

## À propos du contenu dans les sites Jekyll

Avant de pouvoir ajouter du contenu à un site Jekyll sur {% data variables.product.prodname_pages %}, vous devez créer un site Jekyll. Pour plus d’informations, consultez « [Création d’un site {% data variables.product.prodname_pages %} avec Jekyll](/articles/creating-a-github-pages-site-with-jekyll) ».

Les principaux types de contenu pour les sites Jekyll sont des pages et des publications. Une page est destinée au contenu autonome qui n’est pas associé à une date spécifique, comme une page « À propos ». Le site Jekyll par défaut contient un fichier appelé `about.md`, qui s’affiche en tant que page sur votre site à l’adresse `YOUR-SITE-URL/about`. Vous pouvez modifier le contenu de ce fichier pour personnaliser votre page « À propos », et vous pouvez utiliser la page « À propos » comme modèle pour créer de nouvelles pages. Pour plus d’informations, consultez « [Pages](https://jekyllrb.com/docs/pages/) » dans la documentation de Jekyll.

Une publication est un billet de blog. Le site Jekyll par défaut contient un répertoire nommé `_posts` qui contient un fichier de publication par défaut. Vous pouvez modifier le contenu de cette publication et l’utiliser comme modèle pour en créer de nouvelles. Pour plus d’informations, consultez « [Publications](https://jekyllrb.com/docs/posts/) » dans la documentation de Jekyll.

Votre thème inclut les dispositions, les includes et les feuilles de style par défaut qui s’appliqueront automatiquement aux nouvelles pages et publications de votre site, mais vous pouvez remplacer n’importe laquelle de ces valeurs par défaut. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %} et Jekyll](/articles/about-github-pages-and-jekyll#themes) ».

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

## Ajout d’une nouvelle page à votre site

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. À la racine de votre source de publication, créez un fichier pour votre page appelé _PAGE-NAME.md_, en remplaçant _PAGE-NAME_ par un nom de fichier explicite pour la page.
4. Ajoutez le frontmatter YAML suivant en haut du fichier, en remplaçant _PAGE TITLE_ par le titre de la page et _URL-PATH_ par un chemin d’accès souhaité pour l’URL de la page. Par exemple, si l’URL de base de votre site est `https://octocat.github.io` et que votre _URL-PATH_ est `/about/contact/`, votre page se trouve à l’emplacement `https://octocat.github.io/about/contact`.
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. Sous le frontmatter, ajoutez du contenu pour votre page.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

## Ajout d’une nouvelle publication à votre site

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. Accédez au répertoire `_posts`.
4. Créez un fichier appelé _YYYY-MM-DD-NAME-OF-POST.md_, en remplaçant _YYYY-MM-DD_ par la date de votre publication et _NAME-OF-POST_ par le nom de votre publication.
4. Ajoutez le frontmatter YAML suivant en haut du fichier, en remplaçant _POST TITLE_ par le titre de la publication, _YYYY-MM-DD hh:mm:ss -0000_ par la date et l’heure de la publication, et _CATEGORY-1_ et _CATEGORY-2_ par autant de catégories que vous le souhaitez pour votre publication.
  ```shell
  layout: post
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. Sous le frontmatter, ajoutez du contenu pour votre publication.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

Votre publication devrait maintenant être disponible sur votre site ! Si l’URL de base de votre site est `https://octocat.github.io`, votre nouvelle publication se trouve à l’adresse `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

## Étapes suivantes

{% data reusables.pages.add-jekyll-theme %} Pour plus d’informations, consultez « [Ajout d’un thème à votre site {% data variables.product.prodname_pages %} avec Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll) ».
