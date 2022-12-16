---
title: Создание сайта GitHub Pages с помощью Jekyll
intro: 'Вы можете использовать Jekyll, чтобы создать сайт {% data variables.product.prodname_pages %} в новом или существующем репозитории.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 3624c1902d1c3392db37fdb467c55189b9e2539e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094652'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Предварительные требования

Прежде чем использовать Jekyll для создания сайта {% data variables.product.prodname_pages %}, необходимо установить Jekyll и Git. Дополнительные сведения см. в разделах [Установка](https://jekyllrb.com/docs/installation/) в документации по Jekyll и [Настройка Git](/articles/set-up-git).

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Создание репозитория для сайта

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## Создание сайта

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Если у вас еще нет локальной копии репозитория, перейдите к расположению, где вы хотите хранить исходные файлы сайта, заменив _PARENT-FOLDER_ папкой, в которой должна содержаться папка для репозитория.
  ```shell
  $ cd PARENT-FOLDER
  ```
1. Если это еще не сделано, инициализируйте локальный репозиторий Git, заменив _REPOSITORY-NAME_ именем вашего репозитория.
  ```shell
  $ git init REPOSITORY-NAME
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Измените каталоги на репозиторий.
  ```shell
  $ cd REPOSITORY-NAME
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} Например, если вы решили опубликовать свой сайт из папки `docs` в ветви по умолчанию, создайте и измените каталоги на папку `docs`.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 Если вы решили опубликовать свой сайт из ветви `gh-pages`, создайте и проверьте ветвь `gh-pages`.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf .
 # Removes the contents from your default branch from the working directory
 ```
1. Чтобы создать новый сайт Jekyll, используйте команду `jekyll new`:
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Откройте файл Gemfile, созданный Jekyll.
1. Добавьте "#" в начало строки, которая начинается с `gem "jekyll"`, чтобы закомментировать эту строку.
1. Добавьте зависимость `github-pages`, изменив строку, начинающуюся с `# gem "github-pages"`. Измените эту строку следующим образом:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Замените _GITHUB-PAGES-VERSION_ последней поддерживаемой версией зависимости `github-pages`. Эту версию можно найти здесь: [Версии зависимостей](https://pages.github.com/versions/).

   Правильная версия Jekyll будет установлена в качестве зависимости gem `github-pages`.
1. Сохраните и закройте Gemfile.
1. Выполните из командной строки команду `bundle install`.
1. При необходимости внесите нужные изменения в файл `_config.yml`. Это требуется для относительных путей, когда репозиторий размещается в подкаталоге.  Дополнительные сведения см. в разделе [Разделение вложенной папки в новый репозиторий](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository).
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. При желании протестируйте сайт локально. Дополнительные сведения см. в разделе [Локальное тестирование сайта {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll).
1. Добавьте и зафиксируйте свою работу.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. Добавьте репозиторий в {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} в качестве удаленного, замена {% ifversion ghes или ghae %}_HOSTNAME_ именем узла вашего предприятия,{% endif %} _USER_ с учетной записью, которая владеет репозиторием{% ifversion ghes или ghae %},{% endif %} и _REPOSITORY именем репозитория_ .
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/USER/REPOSITORY.git
{% else %}
$ git remote add origin https://HOSTNAME/USER/REPOSITORY.git
{% endif %}
```
1. Отправьте репозиторий в {% data variables.product.product_name %}, заменив _BRANCH_ именем ветви, в которой вы работаете.
   ```shell
   $ git push -u origin BRANCH
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Дальнейшие действия

О добавлении на сайт новой страницы или публикации см. в разделе [Добавление содержимого на сайт {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll).

{% data reusables.pages.add-jekyll-theme %} Дополнительные сведения см. в разделе [Добавление темы на сайт {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).
