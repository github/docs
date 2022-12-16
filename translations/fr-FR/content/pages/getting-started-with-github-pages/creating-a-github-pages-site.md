---
title: Création d’un site GitHub Pages
intro: 'Vous pouvez créer un site {% data variables.product.prodname_pages %} dans un dépôt nouveau ou existant.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 45e7dead10f3f54b5c18d63352a037d04d49cb98
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147643948'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Création d’un dépôt pour votre site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## Création de votre site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. Créez le fichier d’entrée pour votre site. {% data variables.product.prodname_pages %} recherche un fichier `index.html`, `index.md` ou `README.md` comme fichier d’entrée pour votre site.

   {% ifversion pages-custom-workflow %} Si votre source de publication est une branche et un dossier, le fichier d’entrée doit être au niveau supérieur du dossier source sur la branche source. Par exemple, si votre source de publication est le dossier `/docs` de la branche `main`, votre fichier d’entrée doit se trouver dans le dossier `/docs` sur une branche appelée `main`.

   Si votre source de publication est un workflow {% data variables.product.prodname_actions %}, l’artefact que vous déployez doit inclure le fichier d’entrée au niveau supérieur de l’artefact. Au lieu d’ajouter le fichier d’entrée à votre dépôt, vous pouvez choisir que votre workflow {% data variables.product.prodname_actions %} génère votre fichier d’entrée lorsqu’il s’exécute. {% else %} Le fichier d’entrée doit être au niveau supérieur de la source de publication que vous avez choisie. Par exemple, si votre source de publication est le dossier `/docs` de la branche `main`, votre fichier d’entrée doit se trouver dans le dossier `/docs` sur une branche appelée `main`.{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Étapes suivantes

Vous pouvez ajouter d’autres pages à votre site en créant davantage de fichiers. Chaque fichier sera disponible sur votre site dans la même structure de répertoire que celle de votre source de publication. Par exemple, si la source de publication de votre site de projet est la branche `gh-pages` et que vous créez un fichier appelé `/about/contact-us.md` sur la branche `gh-pages`, le fichier sera disponible dans {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

Vous pouvez également ajouter un thème pour personnaliser l’apparence de votre site. Pour plus d’informations, consultez « [Ajout d’un thème à votre site {% data variables.product.prodname_pages %} en utilisant Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll) ».

Pour personnaliser davantage votre site, vous pouvez utiliser Jekyll, un générateur de site statique avec prise en charge intégrée de {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %} et Jekyll](/articles/about-github-pages-and-jekyll) ».

## Pour aller plus loin

- « [Résolution des erreurs de build Jekyll pour les sites {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites) »
- « [Création et suppression de branches dans votre dépôt](/articles/creating-and-deleting-branches-within-your-repository) »
- « [Création de fichiers](/articles/creating-new-files) »
