---
title: Редактирование содержимого вики-сайта
intro: Вы можете добавлять изображения и ссылки на содержимое в вики-сайте и использовать некоторые поддерживаемые форматы MediaWiki.
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578943'
---
## Добавление ссылок

Вы можете создавать ссылки на вики-сайтах с помощью стандартной разметки, поддерживаемой страницей, или с помощью синтаксиса MediaWiki. Пример:

- Если страницы отрисовываются с помощью Markdown, используется синтаксис ссылок `[Link Text](full-URL-of-wiki-page)`.
- При использовании синтаксиса MediaWiki синтаксис ссылок следующий: `[[nameofwikipage|Link Text]]`.

## Добавление изображений

На вики-сайтах могут отображаться изображения в форматах PNG, JPEG и GIF.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. На боковой панели вики-сайта перейдите на страницу, которую нужно изменить, и нажмите кнопку **Изменить**.
4. На панели инструментов вики-сайта нажмите кнопку **Изображение**.
   ![Кнопка добавления изображения на вики-сайт](/assets/images/help/wiki/wiki_add_image.png)
5. В диалоговом окне "Вставка изображения" введите URL-адрес изображения и замещающий текст (который используется поисковыми системами и средствами чтения с экрана).
6. Нажмите кнопку **ОК**.

### Ссылки на изображения в репозитории

Вы можете добавить ссылку на изображение в репозитории на {% data variables.product.product_name %}, скопировав URL-адрес в браузере и использовав его в качестве пути к изображению. Например, так можно внедрить изображение на вики-сайт с помощью Markdown:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## Добавление математических выражений и диаграмм{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## Поддерживаемые форматы MediaWiki

Независимо от того, на каком языке разметки написана вики-страница, некоторые элементы синтаксиса MediaWiki будут доступны всегда.
- Ссылки ([кроме AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Горизонтальные (разделительные) линии посредством `---`
- Сокращенные символьные обозначения (например, `&delta;` или `&euro;`)

По соображениям безопасности и производительности некоторые элементы синтаксиса не поддерживаются.
- [Трансклюзия](https://www.mediawiki.org/wiki/Transclusion)
- Списки определений
- Indentation;
- Оглавление
