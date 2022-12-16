---
title: Test de votre site GitHub Pages localement avec Jekyll
intro: 'Vous pouvez créer votre site {% data variables.product.prodname_pages %} localement pour en afficher un aperçu et tester les modifications que vous y apportez.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 9db3a964ee38afa191f7fed31cfa032128460f48
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111304'
---
Toute personne disposant d’autorisations en lecture sur un dépôt peut tester un site {% data variables.product.prodname_pages %} localement.

## Prérequis

Avant de pouvoir utiliser Jekyll pour tester un site, vous devez :
  - Installer [Jekyll](https://jekyllrb.com/docs/installation/).
  - Créer un site web Jekyll. Pour plus d’informations, consultez « [Création d’un site {% data variables.product.prodname_pages %} avec Jekyll](/articles/creating-a-github-pages-site-with-jekyll) ».

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Création de votre site en local

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. Exécutez `bundle install`.
3. Exécutez votre site Jekyll localement.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
  {% note %}

  **Remarque :** Si vous avez installé Ruby 3.0 ou ultérieure (ce que vous pouvez avoir si vous avez installé la version par défaut via Homebrew), vous pouvez obtenir une erreur à cette étape. Ceci est dû au fait que ces versions de Ruby ne sont plus fournies avec `webrick` installé.
  
  Pour corriger l’erreur, essayez en exécutant `bundle add webrick`, puis en réexécutant `bundle exec jekyll serve`.
  {% endnote %}

3. Pour voir un aperçu de votre site, dans votre navigateur web, accédez à `http://localhost:4000`.

## Mise à jour de la gemme {% data variables.product.prodname_pages %}

Jekyll est un projet open source actif qui est mis à jour fréquemment. Si la gemme `github-pages` sur votre ordinateur est obsolète avec la gemme `github-pages` sur le serveur {% data variables.product.prodname_pages %}, votre site peut être différent selon s’il est créé localement ou publié sur {% data variables.product.product_name %}. Pour éviter cela, mettez régulièrement à jour la gemme `github-pages` sur votre ordinateur.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Mettez à jour la gemme `github-pages`.
    - Si vous avez installé Bundler, exécutez `bundle update github-pages`.
    - Si Bundler n’est pas installé, exécutez `gem update github-pages`.

## Pour aller plus loin

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) dans la documentation de Jekyll
