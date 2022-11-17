---
ms.openlocfilehash: a43b7fac5396fcbdb1b7d9ec241af9879de7b2b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145115019"
---
# Заметки о выпуске сервера GitHub Enterprise

Отрисовывается здесь: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Принцип работы

### Файл содержимого заполнителя

Файл содержимого существует в `content/admin/release-notes.md`. Он имеет специальное свойство `layout: release-notes` frontmatter без содержимого Markdown. Источник заметок о выпуске можно получить из данных YAML.

### Источник YAML

Исходные данные для заметок о выпуске находятся в этом каталоге (`data/release-notes/enterprise-server`).

Имена каталогов содержат номер выпуска GHES (с дефисом вместо точки).

Файлы YAML в каждом каталоге именуются по номеру исправления. Некоторые имена файлов исправлений могут заканчиваться `-rc<num>.yml`, это означает, что это релиз-кандидат. Для файла релиз-кандидата также требуется `release_candidate: true` в данных YAML.

Заметки о выпуске нерекомендуемых версий GHES (см `lib/enterprise-server-releases.js`) **не** удаляются с сайта, и всегда будут отображаться вместе с текущими поддерживаемыми версиями.

Обратите внимание, что файлы исправлений могут быть нерекомендуемыми по отдельности (т. е. скрытыми на сайте документации) с указанием необязательного свойства `deprecated: true`.

### Обработка ПО промежуточного слоя

Данные YAML обрабатываются и сортируются по `middleware/contextualizers/release-notes.js` и добавляются в объект `context`.

### Макеты

Данные объекта `context` отрисовывается с помощью `components/release-notes`.

Страница заметок о выпуске имеет пользовательский дизайн с использованием CSS в `stylesheets/release-notes.scss`.

### схема

Схема, проверяющая, находятся ли данные YAML в `tests/helpers/schemas/ghes-release-notes-schema.js`. Просмотрите файл схемы, чтобы найти обязательные и необязательные свойства.

Схема выполняется тестом в `tests/linting/lint-files.js`. Если данные не проходят проверку, тест завершится ошибкой.
