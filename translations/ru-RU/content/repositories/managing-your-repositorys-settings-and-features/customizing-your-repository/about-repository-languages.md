---
title: Сведения о языках репозитория
intro: 'Файлы и каталоги в репозитории определяют языки, составляющие репозиторий. Вы можете просмотреть языки репозитория, чтобы получить краткое представление о репозитории.'
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 5ae844d133a09829220f16e90759dabd0b7b0ab3
ms.sourcegitcommit: e8df903f8f79fab07197d39685782476c3d272b8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/06/2022
ms.locfileid: '148011135'
---
{% data variables.product.product_name %} использует [библиотеку Linguist](https://github.com/github/linguist) с открытым кодом для определения языков файлов с целью выделения синтаксиса и формирования статистики репозитория. Статистика языка будет обновляться после отправки изменений в ветвь по умолчанию.

Некоторые файлы трудно определить, а иногда проекты содержат больше файлов библиотек и поставщиков, чем файлов основного кода. Если вы получаете неправильные результаты, обратитесь к [руководству по устранению неполадок](https://github.com/github/linguist/blob/master/docs/troubleshooting.md) Linguist. Обратите внимание, что Linguist работает только для репозиториев с менее чем 100 000 файлов. 

## Языки разметки

Языки разметки визуализируются в HTML и отображаются в коде с помощью [библиотеки разметки](https://github.com/github/markup) с открытым кодом. Сейчас мы не добавляем поддержку новых языков разметки в {% data variables.product.product_name %}. Однако мы активно поддерживаем текущие языки разметки. Если возникла проблема, [создайте отчет об ошибке](https://github.com/github/markup/issues/new).
