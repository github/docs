---
title: À propos de GitHub Pages et Jekyll
intro: 'Jekyll est un générateur de site statique avec une prise en charge intégrée de {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages
  - /articles/search-engine-optimization-for-github-pages
  - /articles/repository-metadata-on-github-pages
  - /articles/atom-rss-feeds-for-github-pages
  - /articles/redirects-on-github-pages
  - /articles/emoji-on-github-pages
  - /articles/mentions-on-github-pages
  - /articles/using-jekyll-plugins-with-github-pages
  - /articles/adding-jekyll-plugins-to-a-github-pages-site
  - /articles/about-github-pages-and-jekyll
  - /github/working-with-github-pages/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: GitHub Pages & Jekyll
ms.openlocfilehash: b0f97750f7fb4999e3b33c768ad2495f4c0b6719
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147648206'
---
## À propos de Jekyll

Jekyll est un générateur de site statique avec une prise en charge intégrée de {% data variables.product.prodname_pages %} et un processus de génération simplifié. Jekyll prend les fichiers Markdown et HTML et crée un site web statique complet en fonction de vos choix de dispositions. Jekyll prend en charge Markdown et Liquid, langage de modèle qui charge du contenu dynamique sur votre site. Pour plus d’informations, consultez [Jekyll](https://jekyllrb.com/).

Jekyll n’est pas officiellement pris en charge pour Windows. Pour plus d’informations, consultez « [Jekyll sur Windows](http://jekyllrb.com/docs/windows/#installation) » dans la documentation de Jekyll.

Nous recommandons d’utiliser Jekyll avec {% data variables.product.prodname_pages %}. Si vous préférez, vous pouvez utiliser d’autres générateurs de sites statiques ou personnaliser votre propre processus de génération en local ou sur un autre serveur. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators) ».

## Configuration de Jekyll dans votre site {% data variables.product.prodname_pages %}

Vous pouvez configurer la plupart des paramètres Jekyll, tels que le thème et les plug-ins de votre site, en modifiant votre fichier *_config.yml*. Pour plus d’informations, consultez « [Configuration](https://jekyllrb.com/docs/configuration/) » dans la documentation de Jekyll.

Certains paramètres de configuration ne peuvent pas être modifiés pour les sites {% data variables.product.prodname_pages %}.

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

Par défaut, Jekyll ne génère pas de fichiers ni de dossiers qui :
- se trouvent dans un dossier appelé `/node_modules` ou `/vendor`
- commencent par `_`, `.` ou `#`
- se terminent par `~`
- sont exclus par le paramètre `exclude` de votre fichier de configuration

Si vous souhaitez que Jekyll traite l’un de ces fichiers, vous pouvez utiliser le paramètre `include` dans votre fichier de configuration.

## En-tête

{% data reusables.pages.about-front-matter %}

Vous pouvez ajouter `site.github` à une publication ou une page pour ajouter des métadonnées de référence de dépôt à votre site. Pour plus d’informations, consultez « [Utilisation de `site.github`](https://jekyll.github.io/github-metadata/site.github/) » dans la documentation sur les métadonnées de Jekyll.

## Thèmes

{% data reusables.pages.add-jekyll-theme %} Pour plus d’informations, consultez « [Thèmes](https://jekyllrb.com/docs/themes/) » dans la documentation de Jekyll.

{% ifversion fpt or ghec %} Vous pouvez ajouter un thème pris en charge à votre site dans {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Thèmes pris en charge](https://pages.github.com/themes/) » sur le site {% data variables.product.prodname_pages %} et « [Ajout d’un thème à votre site {% data variables.product.prodname_pages %} avec Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll) ».

Pour utiliser tout autre thème Jekyll open source hébergé sur {% data variables.product.prodname_dotcom %}, vous pouvez ajouter le thème manuellement.{% else %} Vous pouvez ajouter un thème à votre site manuellement. {% endif %} Pour plus d’informations, consultez{% ifversion fpt or ghec %} [Thèmes hébergés sur {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) et{% else %} « [Thèmes pris en charge](https://pages.github.com/themes/) » sur le site {% data variables.product.prodname_pages %} et{% endif %} « [Ajout d’un thème à votre site {% data variables.product.prodname_pages %} avec Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll) ».

Vous pouvez remplacer les valeurs par défaut de votre thème en modifiant les fichiers du thème. Pour plus d’informations, consultez la documentation de votre thème et « [Remplacement des valeurs par défaut de votre thème](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) » dans la documentation de Jekyll.

## Plug-ins

Vous pouvez télécharger ou créer des plug-ins Jekyll pour étendre les fonctionnalités de Jekyll pour votre site. Par exemple, le plug-in [jemoji](https://github.com/jekyll/jemoji) vous permet d’utiliser l’emoji {% data variables.product.prodname_dotcom %} dans n’importe quelle page de votre site de la même façon que vous le feriez sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Plug-ins](https://jekyllrb.com/docs/plugins/) » dans la documentation de Jekyll.

{% data variables.product.prodname_pages %} utilise des plug-ins qui sont activés par défaut et qui ne peuvent pas être désactivés :
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

Vous pouvez activer des plug-ins supplémentaires en ajoutant la gemme du plug-in au paramètre `plugins` de votre fichier *_config.yml*. Pour plus d’informations, consultez « [Configuration](https://jekyllrb.com/docs/configuration/) » dans la documentation de Jekyll.

Pour obtenir la liste des plug-ins pris en charge, consultez « [Versions des dépendances](https://pages.github.com/versions/) » sur le site {% data variables.product.prodname_pages %}.  Pour plus d’informations sur l’utilisation d’un plug-in spécifique, consultez la documentation du plug-in.

{% tip %}

**Conseil :** Vous pouvez vous assurer d’utiliser la dernière version de tous les plug-ins en gardant à jour la gemme {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez « [Test de votre site GitHub Pages en local avec Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem) » et « [Versions des dépendances](https://pages.github.com/versions/) » sur le site {% data variables.product.prodname_pages %}.

{% endtip %}

{% data variables.product.prodname_pages %} ne peut pas générer de sites avec des plug-ins non pris en charge. Si vous souhaitez utiliser des plug-ins non pris en charge, générez votre site en local, puis poussez les fichiers statiques de votre site vers {% data variables.product.product_name %}.

## Mise en surbrillance de la syntaxe

Pour faciliter la lecture de votre site, les extraits de code sont en couleur sur les sites {% data variables.product.prodname_pages %} de la même façon qu’ils sont en couleur sur {% data variables.product.product_name %}. Pour plus d’informations sur la coloration syntaxique sur {% data variables.product.product_name %}, consultez « [Création et coloration de blocs de code](/articles/creating-and-highlighting-code-blocks) ».

Par défaut, les blocs de code de votre site sont colorés par Jekyll. Jekyll utilise le colorateur [Rouge](https://github.com/jneen/rouge), qui est compatible avec [Pygments](http://pygments.org/). Pygments a été déprécié et n’est pas pris en charge dans Jekyll 4. Si vous spécifiez Pygments dans votre fichier *_config.yml*, Rouge sera utilisé à la place comme solution de repli. Jekyll ne peut pas utiliser d’autres colorateurs de syntaxe et vous obtiendrez un avertissement de génération de page si vous spécifiez un autre colorateur de syntaxe dans votre fichier *_config.yml*. Pour plus d’informations, consultez « [À propos des erreurs de build Jekyll pour les sites {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites) ».

Si vous souhaitez utiliser un autre colorateur, par exemple `highlight.js`, vous devez désactiver la coloration syntaxique de Jekyll en mettant à jour le fichier *_config.yml* de votre projet.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Si votre thème n’inclut pas de CSS pour la coloration syntaxique, vous pouvez générer le CSS de coloration syntaxique de {% data variables.product.prodname_dotcom %} et l’ajouter au fichier `style.css` de votre projet.

```shell
$ rougify style github > style.css
```

## Création de votre site en local

{% data reusables.pages.test-locally %}
