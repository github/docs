---
title: Добавление содержимого на сайт GitHub Pages с помощью Jekyll
intro: 'Можно добавить новую страницу или сделать публикацию на сайте Jekyll в {% data variables.product.prodname_pages %}.'
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
ms.openlocfilehash: 030e4e7877c091ef3c05acb62bee37b455d5ce6b
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009843'
---
Люди с разрешениями на запись в репозитории могут добавлять содержимое на сайт {% data variables.product.prodname_pages %} с помощью Jekyll.

## О содержимом на сайтах Jekyll

Прежде чем добавлять содержимое на сайт Jekyll в {% data variables.product.prodname_pages %}, необходимо создать сайт Jekyll. Дополнительные сведения см. в разделе [Создание сайта {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/creating-a-github-pages-site-with-jekyll).

Основными типами содержимого для сайтов Jekyll являются страницы и записи. Страница предназначена для автономного содержимого, которое не связано с определенной датой, как, например, страница "Сведения". Сайт Jekyll по умолчанию содержит файл с именем `about.md`, который отображается как страница на вашем сайте в `YOUR-SITE-URL/about`. Вы можете изменять содержимое этого файла, чтобы персонализировать страницу "Сведения", а также использовать страницу "Сведения" в качестве шаблона для создания новых страниц. Дополнительные сведения см. в разделе [Страницы](https://jekyllrb.com/docs/pages/) в документации Jekyll.

Запись — это запись блога. Сайт Jekyll по умолчанию содержит каталог с именем `_posts`, в котором находится файл записи по умолчанию. Вы можете изменять содержимое этой записи и использовать запись по умолчанию в качестве шаблона для создания новых записей. Дополнительные сведения см. в разделе [Записи](https://jekyllrb.com/docs/posts/) в документации Jekyll.

Тема включает макеты по умолчанию, включаемые объекты и таблицы стилей, которые будут автоматически применяться к новым страницам и записям на сайте, но вы можете переопределить любой из этих стандартных объектов. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_pages %} и Jekyll](/articles/about-github-pages-and-jekyll#themes).

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

## Добавление на сайт новой страницы

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. В корне источника публикации создайте новый файл для страницы с именем _PAGE-NAME.md_, заменив _PAGE-NAME_ понятным именем файла для страницы.
4. Добавьте следующий заглавный блок YAML в начало файла, заменив _PAGE TITLE_ заголовком страницы, а _URL-PATH_ путем для URL-адреса страницы. Например, если базовый URL-адрес сайта — `https://octocat.github.io`, а ваш _URL-PATH_ — `/about/contact/`, страница будет находиться по адресу `https://octocat.github.io/about/contact`.
  ```shell
  layout: page
  title: "PAGE-TITLE"
  permalink: /URL-PATH
  ```
5. Под заглавным блоком добавьте содержимое для страницы.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

## Добавление на сайт новой записи

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. Перейдите к каталогу `_posts`.
4. Создайте новый файл с именем _YYYY-MM-DD-NAME-OF-POST.md_, заменив _YYYY-MM-DD_ датой записи, а _NAME-OF-POST_ — названием записи.
4. Добавьте следующий заглавный блок YAML в начало файла, заменив _POST TITLE_ на заголовок записи, _YYYY-MM-DD hh:mm:ss -0000_ на дату и время записи, а _CATEGORY-1_ и _CATEGORY-2_ — на нужное количество категорий для вашей записи.
  ```shell
  layout: post
  title: "POST-TITLE"
  date: YYYY-MM-DD hh:mm:ss -0000
  categories: CATEGORY-1 CATEGORY-2
  ```
5. Под заглавным блоком добавьте содержимое для записи.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

Теперь ваша запись должна появиться на вашем сайте! Если базовый URL-адрес вашего сайта — `https://octocat.github.io`, новая публикация будет размещена по адресу `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

## Дальнейшие действия

{% data reusables.pages.add-jekyll-theme %} Дополнительные сведения см. в разделе [Добавление темы на сайт {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).
