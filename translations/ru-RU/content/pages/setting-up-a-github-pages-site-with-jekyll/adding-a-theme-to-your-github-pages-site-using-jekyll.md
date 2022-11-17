---
title: Добавление темы на сайт GitHub Pages с помощью Jekyll
intro: 'Вы можете персонализировать свой сайт Jekyll, добавив и настроив тему оформления.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147644798'
---
Пользователи с разрешениями на запись в репозитории могут добавить тему на сайт {% data variables.product.prodname_pages %} с помощью Jekyll.

{% data reusables.pages.test-locally %}

## Добавление темы

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
2. Перейдите к *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Добавьте в файл новую строку для имени темы.
   - Чтобы использовать поддерживаемую тему, введите `theme: THEME-NAME`, заменив _THEME-NAME_ именем темы, как показано в файле README репозитория темы. Полный список поддерживаемых тем см. в разделе [Поддерживаемые темы](https://pages.github.com/themes/) на сайте {% data variables.product.prodname_pages %}.
   ![Поддерживаемая тема в файле конфигурации](/assets/images/help/pages/add-theme-to-config-file.png)
   - Чтобы использовать любую другую тему Jekyll, размещенную на {% data variables.product.prodname_dotcom %}, введите `remote_theme: THEME-NAME`, заменив THEME-NAME именем темы, как показано в файле README репозитория темы.
   ![Неподдерживаемая тема в файле конфигурации](/assets/images/help/pages/add-remote-theme-to-config-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Настройка CSS-темы

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
1. Создайте файл под именем _/assets/css/style.scss_.
2. Добавьте следующее содержимое в верхнюю часть файла:
  ```scss
  ---
  ---

  @import "{% raw %}{{ site.theme }}{% endraw %}";
  ```
3. Добавьте любые пользовательские CSS или Sass (включая импорты) сразу после строки `@import`.

## Настройка макета HTML-темы

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. Перейдите к исходному репозиторию вашей темы в {% data variables.product.prodname_dotcom %}. Например, исходный репозиторий для темы Minima — https://github.com/jekyll/minima.
2. В папке *_layouts* перейдите к файлу _default.html_ вашей темы.
3. Скопируйте содержимое файла.
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
6. Создайте файл с именем *_layouts/default.html*.
7. Вставьте скопированное ранее содержимое макета по умолчанию.
8. Настройте макет как вам нужно.

## Дополнительные материалы

- [Создание файлов](/articles/creating-new-files)
