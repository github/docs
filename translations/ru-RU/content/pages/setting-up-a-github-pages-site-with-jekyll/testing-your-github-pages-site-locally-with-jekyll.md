---
title: Локальное тестирование сайта GitHub Pages с помощью Jekyll
intro: 'Вы можете создать сайт {% data variables.product.prodname_pages %} локально для предварительного просмотра и тестирования изменений сайта.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 9db3a964ee38afa191f7fed31cfa032128460f48
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111310'
---
Тестировать сайт {% data variables.product.prodname_pages %} локально может любой пользователь с разрешениями на чтение для репозитория.

## Предварительные требования

Прежде чем тестировать сайт с помощью Jekyll, необходимо выполнить следующие действия:
  - Установить [Jekyll](https://jekyllrb.com/docs/installation/).
  - Создать сайт Jekyll. Дополнительные сведения см. в разделе [Создание сайта {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/creating-a-github-pages-site-with-jekyll).

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Локальное создание сайта

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. Выполните команду `bundle install`.
3. Запустите сайт Jekyll локально.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
  {% note %}

  **Примечание:** Если вы установили Ruby 3.0 или более поздней версии (возможно, если вы установили версию по умолчанию с помощью Homebrew), на этом шаге может возникнуть ошибка. Это связано с тем, что эти версии Ruby больше не поставляются с `webrick` установленными.
  
  Чтобы устранить эту ошибку, попробуйте запустить `bundle add webrick`, а затем повторно запустите `bundle exec jekyll serve`.
  {% endnote %}

3. Чтобы выполнить предварительный просмотр сайта в веб-браузере, перейдите по адресу `http://localhost:4000`.

## Обновление пакета {% data variables.product.prodname_pages %}

Jekyll — это активный проект с открытым кодом, который регулярно обновляется. Если версия пакета `github-pages` на компьютере устарела относительно версии пакета `github-pages` на сервере {% data variables.product.prodname_pages %}, создаваемый локально сайт может выглядеть не так, как при публикации в {% data variables.product.product_name %}. Чтобы избежать этого, регулярно обновляйте пакет `github-pages` на компьютере.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Обновите пакет `github-pages`.
    - Если установлено средство увязки, выполните команду `bundle update github-pages`.
    - Если средство увязки не установлено, выполните команду `gem update github-pages`.

## Дополнительные материалы

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) в документации по Jekyll
