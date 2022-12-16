---
title: Создание сайта GitHub Pages
intro: 'Вы можете создать сайт {% data variables.product.prodname_pages %} в новом или существующем репозитории.'
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
ms.openlocfilehash: 83f953ac5c5c109abd5f63fd595642e4fd139113
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/27/2022
ms.locfileid: '147428359'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## <a name="creating-a-repository-for-your-site"></a>Создание репозитория для сайта

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## <a name="creating-your-site"></a>Создание сайта

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. Создайте файл записи для сайта. В качестве файла записи для вашего сайта {% data variables.product.prodname_pages %} будет искать файл в формате `index.html`, `index.md` или `README.md`.

   {% ifversion pages-custom-workflow %}Если ваш источник публикации — это ветвь и папка, файл записи должен находиться на верхнем уровне исходной папки в исходной ветви. Например, если вашим источником публикации является папка `/docs` в ветви `main`, файл записи должен располагаться в папке `/docs` в ветви под названием `main`.

   Если источник публикации — это рабочий процесс {% data variables.product.prodname_actions %}, развертываемый артефакт должен содержать файл записи на верхнем уровне. Вместо добавления файла записи в репозиторий можно создать его с помощью рабочего процесса {% data variables.product.prodname_actions %} во время запуска.{% else %} Файл записи должен находиться на верхнем уровне выбранного источника публикации. Например, если источником публикации является папка `/docs` в ветви `main`, файл записи должен располагаться в папке `/docs` в ветви под названием `main`.{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## <a name="next-steps"></a>Дальнейшие действия

Можно добавить дополнительные страницы на сайт, создав новые файлы. Каждый файл будет доступен на сайте в той же структуре каталога, что и источник публикации. Например, если источником публикации для сайта проекта является ветвь `gh-pages`, а вы создаете новый файл с именем `/about/contact-us.md` в ветви `gh-pages`, файл будет доступен по адресу {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

Можно также добавить тему для настройки внешнего вида сайта. Дополнительные сведения см. в разделе {% ifversion fpt or ghec %}[Добавление темы на сайт {% data variables.product.prodname_pages %} с помощью средства выбора темы](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}[Добавление темы на сайт {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}.

Чтобы настроить сайт еще лучше, можно использовать Jekyll, генератор статических сайтов со встроенной поддержкой {% data variables.product.prodname_pages %}. Дополнительную информацию см. в разделе [Сведения о {% data variables.product.prodname_pages %} и Jekyll](/articles/about-github-pages-and-jekyll).

## <a name="further-reading"></a>Дополнительные материалы

- [Устранение ошибок сборки Jekyll для сайтов {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
- [Создание и удаление ветвей в репозитории](/articles/creating-and-deleting-branches-within-your-repository)
- [Создание файлов](/articles/creating-new-files)
