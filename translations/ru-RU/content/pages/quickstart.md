---
title: Краткое руководство по GitHub Pages
intro: 'Вы можете использовать {% data variables.product.prodname_pages %}, чтобы продемонстрировать проекты с открытым кодом, вести блог или даже поделиться своим резюме. Это руководство поможет вам приступить к созданию вашего нового веб-сайта.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: a6cf4a2f00237206a3c15083797aa12c832cf32c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: '145140265'
---
## <a name="introduction"></a>Введение

{% data variables.product.prodname_pages %} — это общедоступные веб-страницы, размещенные и опубликованные с помощью {% data variables.product.product_name %}. Самым быстрым способом получения и запуска является использование средства выбора тем Jekyll для загрузки предварительно созданной темы. Затем можно изменить содержимое и стиль данных для {% data variables.product.prodname_pages %}.

В этом руководстве вы узнаете, как создать сайт пользователя в `username.github.io`.

## <a name="creating-your-website"></a>Создание веб-сайта

{% data reusables.repositories.create_new %}
1. Введите `username.github.io` в качестве имени репозитория. Замените `username` именем пользователя {% data variables.product.prodname_dotcom %}. Например, если имя пользователя — `octocat`, именем репозитория должно быть `octocat.github.io`.
   ![Поле для имени репозитория](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Нажмите **Выбрать тему**.
   ![Кнопка выбора темы](/assets/images/help/pages/choose-theme.png)
2. Откроется средство выбора тем. Просмотрите доступные темы и нажмите **Выбрать тему**, чтобы выбрать тему. Вы можете легко изменить тему позже, поэтому если вы не уверены, просто выберите любую.
   ![Варианты тем и кнопка "Выбрать тему"](/assets/images/help/pages/select-theme.png)
3. После выбора темы файл репозитория `README.md` откроется в редакторе файлов. В файл `README.md` будет записываться содержимое сайта. Вы можете изменить его или пока что сохранить его содержимое.
4. После редактирования файла нажмите **Зафиксировать изменения**.
5. Посетите `username.github.io`, чтобы просмотреть новый веб-сайт. **Примечание.** Публикация изменений на сайте может занять до 20 минут после передачи изменений в {% data variables.product.product_name %}.

## <a name="changing-the-title-and-description"></a>Изменение заголовка и описания

По умолчанию сайт имеет заголовок `username.github.io`. Вы можете изменить заголовок путем изменения файла `_config.yml` в репозитории. Можно также добавить описание вашего сайта.

1. В репозитории нажмите вкладку **Код**.
1. В списке файлов нажмите `_config.yml`, чтобы открыть файл.
1. Щелкните {% octicon "pencil" aria-label="The edit icon" %}, чтобы изменить файл.
1. Файл `_config.yml` уже содержит строку, в которой указана тема для сайта. Добавьте новую строку с `title:` и нужным заголовком. Добавьте новую строку с `description:` и нужным описанием. Пример:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. После редактирования файла нажмите **Зафиксировать изменения**.

## <a name="next-steps"></a>Next Steps

Дополнительные сведения о добавлении дополнительных страниц на сайт см. в статье [Добавление содержимого на сайт GitHub Pages с помощью Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites).

Дополнительные сведения о настройке сайта {% data variables.product.prodname_pages %} с помощью Jekyll см. в статье [Сведения о GitHub Pages и Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).
