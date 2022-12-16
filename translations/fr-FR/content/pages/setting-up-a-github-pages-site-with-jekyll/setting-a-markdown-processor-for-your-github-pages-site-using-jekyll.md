---
title: Définition d’un processeur Markdown pour votre site GitHub Pages avec Jekyll
intro: 'Vous pouvez choisir un processeur Markdown pour déterminer comment Markdown est rendu sur votre site {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku
  - /articles/updating-your-markdown-processor-to-kramdown
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Set Markdown processor
ms.openlocfilehash: 218877ee598afd47352d1e72a2ecb845f901c8b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133035'
---
Les personnes disposant d’autorisations en écriture sur un dépôt peuvent définir le processeur Markdown pour un site {% data variables.product.prodname_pages %}.

{% data variables.product.prodname_pages %} prend en charge deux processeurs Markdown : [kramdown](http://kramdown.gettalong.org/) et le propre processeur Markdown de {% data variables.product.prodname_dotcom %}, qui est utilisé pour restituer [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) dans {% data variables.product.product_name %}. Pour plus d’informations, consultez « [À propos de l’écriture et de la mise en forme sur {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github) ».

Vous pouvez utiliser {% data variables.product.prodname_dotcom %} Flavored Markdown avec l’un ou l’autre processeur, mais seul notre processeur GFM correspond toujours aux résultats que vous voyez sur {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. Dans votre dépôt, accédez au fichier *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Recherchez la ligne qui commence par `markdown:` et remplacez la valeur par `kramdown` ou `GFM`.
  ![Markdown setting in config.yml](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Pour aller plus loin

- [Documentation de kramdown](https://kramdown.gettalong.org/documentation.html)
- [Spécifications de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
