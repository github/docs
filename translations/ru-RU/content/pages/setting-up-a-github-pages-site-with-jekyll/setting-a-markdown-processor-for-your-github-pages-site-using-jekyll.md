---
title: Настройка обработчика Markdown для сайта GitHub Pages с помощью Jekyll
intro: 'Вы можете выбрать обработчик Markdown, чтобы определить способ отрисовки Markdown на сайте {% data variables.product.prodname_pages %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137857'
---
Пользователи с разрешениями на запись для репозитория могут задать обработчик Markdown для сайта {% data variables.product.prodname_pages %}.

{% data variables.product.prodname_pages %} поддерживает два обработчика Markdown: [kramdown](http://kramdown.gettalong.org/) и собственный обработчик Markdown {% data variables.product.prodname_dotcom %}, который используется для отрисовки [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сведения о написании и форматировании в {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).

{% data variables.product.prodname_dotcom %} Flavored Markdown поддерживает оба обработчика, но полное соответствие результатам, отображаемым в {% data variables.product.product_name %}, обеспечивает только наш обработчик GFM.

{% data reusables.pages.navigate-site-repo %}
2. В репозитории перейдите к файлу *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Найдите строку, начинающуюся с `markdown:`, и измените значение с `kramdown` на `GFM`.
  ![Настройка Markdown в файле config.yml](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Дополнительные материалы

- [Документация по kramdown](https://kramdown.gettalong.org/documentation.html)
- [Спецификация {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
