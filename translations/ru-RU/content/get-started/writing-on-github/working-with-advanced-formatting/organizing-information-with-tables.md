---
title: Организация информации с помощью таблиц
intro: 'Можно создать таблицы, чтобы упорядочить информацию в комментариях, проблемах, запросах на вытягивание и на вики-сайтах.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069832'
---
## Создание таблицы

Вы можете создавать таблицы с вертикальной чертой `|` и дефисами `-`. Дефисы используются, чтобы создать для каждого столбца заголовок. Вертикальные черты разделяют столбцы. Необходимо включить пустую строку перед таблицей, чтобы она правильно преобразовалась для просмотра.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![Преобразованная для просмотра таблица](/assets/images/help/writing/table-basic-rendered.png)

Вертикальные черты на обоих концах таблицы не являются обязательными.

Ячейки могут различаться по ширине и не обязательно должны быть идеально выровнены внутри столбцов. В каждом столбце строки заголовка должно быть не менее трех дефисов.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![Преобразованная для просмотра таблица с различной шириной ячеек](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Форматирование содержимого в таблице

В таблице можно использовать [форматирование](/articles/basic-writing-and-formatting-syntax), например ссылки, встроенные блоки кода и оформление текста:

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Преобразованная для просмотра таблица с форматированным текстом](/assets/images/help/writing/table-inline-formatting-rendered.png)

Текст можно выровнять по левому, правому краю или по центру столбца, включив двоеточия `:` слева, справа или с обеих сторон от дефисов в строке заголовка.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Преобразованная для просмотра таблица с выравниванием текста по левому, правому краях и по центру](/assets/images/help/writing/table-aligned-text-rendered.png)

Чтобы включить вертикальную черту `|` ​​в качестве содержимого в вашу ячейку, используйте `\` перед вертикальной чертой:

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Преобразованная для просмотра таблица с экранированной вертикальной чертой](/assets/images/help/writing/table-escaped-character-rendered.png)

## Дополнительные материалы

- [Спецификация {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax)
