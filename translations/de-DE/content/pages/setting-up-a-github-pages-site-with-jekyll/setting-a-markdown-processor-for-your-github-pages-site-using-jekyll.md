---
title: Markdown-Prozessor für deine GitHub Pages-Website mit Jekyll festlegen
intro: 'Mit einem Markdown-Prozessor legst du fest, wie Markdown auf deiner {% data variables.product.prodname_pages %}-Website gerendert wird.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133034'
---
Personen mit Schreibberechtigungen für ein Repository können den Markdown-Prozessor für eine {% data variables.product.prodname_pages %}-Website festlegen.

{% data variables.product.prodname_pages %} unterstützt zwei Markdownprozessoren: [kramdown](http://kramdown.gettalong.org/) und den eigenen Markdownprozessor von {% data variables.product.prodname_dotcom %}, der zum Rendern von [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) in {% data variables.product.product_name %} verwendet wird. Weitere Informationen findest du unter [Informationen zum Schreiben und Formatieren in {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).

Du kannst {% data variables.product.prodname_dotcom %} Flavored Markdown für beide Prozessoren verwenden, wobei jedoch nur der GFM-Prozessor die Ergebnisse exakt wie in {% data variables.product.product_name %} darstellt.

{% data reusables.pages.navigate-site-repo %}
2. Navigiere in deinem Repository zur Datei *config.yml*.
{% data reusables.repositories.edit-file %}
4. Suche die Zeile, die mit `markdown:` beginnt, und ändere den Wert in `kramdown` oder `GFM`.
  ![Markdowneinstellung in config.yml](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Weitere Informationsquellen

- [Dokumentation zu kramdown](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
