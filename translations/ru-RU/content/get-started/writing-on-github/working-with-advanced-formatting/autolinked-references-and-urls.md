---
title: Автосвязанные ссылки и URL-адреса
intro: 'Ссылки на URL-адреса, проблемы, запросы на вытягивание и фиксации автоматически сокращаются и преобразуются в ссылки.'
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 9df56a50880477e445df09b1e4d01f6d9d10188e
ms.sourcegitcommit: 5beb76e9fdaed2e891ed4a26f75b55c733f6454f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/12/2022
ms.locfileid: '148044308'
---
## URL-адреса

{% data variables.product.product_name %} автоматически создает ссылки из стандартных URL-адресов.

`Visit https://github.com`

![Отображаемый автоматически связанный URL-адрес](/assets/images/help/writing/url-autolink-rendered.png)

Дополнительные сведения о создании ссылок см. в разделе [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax/#links).

## Проблемы и запросы на вытягивание

В беседах на {% data variables.product.product_name %} ссылки на проблемы и запросы на вытягивание автоматически преобразуются в сокращенные.

{% note %}

**Примечание.** Автоматически связанные ссылки не создаются в вики-сайтах или файлах в репозитории.

{% endnote %}

| Тип справочной ссылки | Простая ссылка | Короткая ссылка |
| --- | --- | --- |
| URL-адрес проблемы или запроса на внесение изменений | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` и номер проблемы или запроса на внесение изменений | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` и номер проблемы или запроса на внесение изменений | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` и номер проблемы или запроса на внесение изменений | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` и номер проблемы или запроса на внесение изменений | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} Если вы ссылаетесь на проблему, запрос на вытягивание или обсуждение в списке, ссылка будет разворачиваться для отображения заголовка и состояния. Дополнительную информацию о списках задач см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).
{% endif %}

## Метки
При создании ссылки на URL-адрес метки в Markdown она отображается автоматически. Отображаются только метки из одного репозитория, URL-адреса, которые указывают на метки из других репозиториев, отображаются как обычные [URL-адреса](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls).

Чтобы найти URL-адрес метки, перейдите на страницу меток и щелкните нужную метку. Например, URL-адрес метки "enhancement" в общедоступном [репозитории docs](https://github.com/github/docs/) будет выглядеть следующим образом:

```md
https://github.com/github/docs/labels/enhancement
```
{% note %}

**Примечание:** Если имя метки содержит точку (`.`), метка не будет автоматически отображаться из URL-адреса метки.

{% endnote %}

## Фиксация SHA

Ссылки на хэш SHA фиксации автоматически преобразуются в сокращенные ссылки на фиксацию на {% data variables.product.product_name %}.

| Тип справочной ссылки | Простая ссылка | Короткая ссылка |
| --- | --- | --- |
| URL-адрес фиксации | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## Пользовательские автоматические ссылки на внешние ресурсы

{% data reusables.repositories.autolink-references %}

## Дополнительные материалы

- [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax)
