---
title: Сведения о написании и форматировании текста на GitHub
intro: GitHub объединяет синтаксис для форматирования текста под названием GitHub Flavored Markdown с несколькими уникальными функциями записи.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About writing & formatting
ms.openlocfilehash: d120c0e1e617314edae5a518eb59271aaa7df917
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009166'
---
[Markdown](http://daringfireball.net/projects/markdown/) — это простой для восприятия и написания синтаксис, позволяющий форматировать обычный текст.

Добавив в него ряд специальных функций, мы получили инструмент {% data variables.product.prodname_dotcom %} Flavored Markdown, который используется для форматирования художественного текста и кода на нашем сайте.

Вы также можете общаться с другими пользователями по запросам на включение внесенных изменений и проблемам с помощью таких функций, как [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [ссылки на проблемы и запросы на включение внесенных изменений](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) и [эмодзи](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Панель инструментов для форматирования текста

Каждое поле комментария в {% data variables.product.product_name %} содержит панель инструментов для форматирования текста, которая позволяет оформить текст, не изучая синтаксис Markdown. Помимо форматирования Markdown, например полужирного и курсивного оформления и создания заголовков, ссылок и списков, на панели инструментов есть специальные функции {% data variables.product.product_name %}, такие как @mentions, списки задач и ссылки на проблемы и запросы на включение внесенных изменений.

{% ifversion fixed-width-font-gfm-fields %}

## Включение шрифтов фиксированной ширины в редакторе

В {% data variables.product.product_name %} в каждом поле комментария можно включить шрифт фиксированной ширины. Каждый символ шрифта фиксированной ширины (моноширинного шрифта) занимает одинаковое расстояние по горизонтали, что упрощает редактирование расширенных структур Markdown, таких как таблицы и фрагменты кода.

![Снимок экрана: поле комментария {% data variables.product.product_name %} с включенными шрифтами фиксированной ширины](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. В разделе "Параметры шрифтов в редакторе Markdown" выберите **Использовать шрифт фиксированной ширины (моноширинный) при редактировании в Markdown**.
  ![Снимок экрана: поле комментария {% data variables.product.product_name %} с включенными шрифтами фиксированной ширины](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Дополнительные материалы

- [Спецификация {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax)
- [Работа с расширенным форматированием](/articles/working-with-advanced-formatting)
- "[Краткое руководство по написанию данных {% variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
