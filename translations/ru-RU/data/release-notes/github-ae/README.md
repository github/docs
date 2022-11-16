---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145115003"
---
# Заметки о выпуске для GitHub AE

Отрисовывается здесь: https://docs.github.com/en/github-ae@latest/admin/release-notes

## Принцип работы

### Файл содержимого заполнителя

Файл содержимого существует в `content/admin/release-notes.md`. Он имеет специальное свойство `layout: release-notes` frontmatter без содержимого Markdown. Источник заметок о выпуске можно получить из данных YAML.

### Источник YAML

Исходные данные для заметок о выпуске находятся в этом каталоге (`data/release-notes/github-ae`).

Имена каталогов соответствуют месяцам. Имена файлов YAML соответствуют данным еженедельного выпуска.

Логическое свойство `currentWeek` должно быть задано в каждом файле YAML. Это свойство одновременно может иметь значение true только для одного файла.

Обратите внимание, что файлы исправлений могут быть нерекомендуемыми по отдельности (т. е. скрытыми на сайте документации) в соответствии с дополнительным свойством `deprecated: true`.

### Обработка ПО промежуточного слоя

Данные YAML обрабатываются и сортируются по `middleware/contextualizers/release-notes.js` и добавляются в объект `context`.

### Макеты

Данные объекта `context` отрисовывается с помощью `components/release-notes`.

Страница заметок о выпуске имеет пользовательский дизайн с использованием CSS в `stylesheets/release-notes.scss`.

### схема

Схема, проверяющая, находятся ли данные YAML в `tests/helpers/schemas/ghae-release-notes-schema.js`. Просмотрите файл схемы, чтобы найти обязательные и необязательные свойства.

Схема выполняется тестом в `tests/linting/lint-files.js`. Если данные не проходят проверку, тест завершится ошибкой.
