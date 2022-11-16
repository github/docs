---
title: Синтаксис для форм проблем
intro: 'Для форм проблем можно определять различные типы входных данных, проверки, уполномоченных по умолчанию и метки по умолчанию.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 7e147868ce370b57c6a7437bc81f7b554f50443b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092329'
---
{% data reusables.community.issue-forms-beta %}

## Сведения о синтаксисе YAML для форм проблем

Вы можете создать пользовательские формы проблем, добавляя YAML-файлы определения форм в папку `/.github/ISSUE_TEMPLATE` репозитория. {% data reusables.actions.learn-more-about-yaml %} Для форм проблем можно определять различные типы входных данных, проверки, уполномоченных по умолчанию и метки по умолчанию.

Когда участник заполняет форму проблемы, его ответы преобразуются в markdown и добавляются в текст проблемы. Участники могут изменять свои проблемы, созданные с помощью форм проблем, а другие пользователи могут взаимодействовать с такими проблемами так же, как с созданными другими способами.

Формы проблем не поддерживаются для запросов на вытягивание. Вы можете создавать шаблоны запросов на вытягивание в репозиториях для использования участниками совместной работы. Дополнительные сведения см. в статье [Создание шаблона запроса на вытягивание для репозитория](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

В этом примере файл конфигурации YAML определяет форму проблемы для сообщения об ошибке с использованием нескольких входных полей.

{% data reusables.community.issue-forms-sample %}

## Общий синтаксис

Все файлы конфигурации для форм проблем должны начинаться с пар "ключ-значение" `name`, `description` и `body`.

```YAML{:copy}
name:
description:
body:
```

Для каждой формы проблемы можно задать следующие ключи верхнего уровня.

| Ключ | Описание | Обязательно | Тип |
| :-- | :-- | :-- | :-- | :-- |
| `name` | Имя шаблона формы проблемы. Должно отличаться от имен остальных шаблонов, включая шаблоны Markdown. | Обязательно | Строка |
| `description` | Описание шаблона формы проблемы, которое отображается в интерфейсе выбора шаблона. | Обязательно | Строка |
| `body` | Определение типов входных данных в форме. | Обязательно | Array |
| `assignees` | Пользователи, которые будут автоматически назначены проблемам, созданным с помощью этого шаблона. | Необязательно | Массив или строка с разделителями-запятыми |
| `labels` | Метки, которые будут автоматически добавляться к проблемам, созданным с помощью этого шаблона. | Необязательно | Массив или строка с разделителями-запятыми |
| `title` | Заголовок по умолчанию, который будет предварительно заполнен в форме отправки проблемы. | Необязательно | Строка |

Доступные типы входных данных для `body` и их синтаксис см. в разделе [Синтаксис для схемы формы {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).

## Преобразование шаблона проблемы Markdown в шаблон формы проблемы YAML

В репозитории можно использовать шаблоны проблем Markdown и YAML. Если вы хотите преобразовать шаблон проблемы Markdown в шаблон формы проблемы YAML, необходимо создать файл YAML для определения формы проблемы. Вы можете вручную транспонировать существующий шаблон проблемы Markdown в форму проблемы YAML. Дополнительные сведения см. в разделе [Настройка шаблонов проблем для репозитория](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms).

Если вы хотите использовать то же имя файла для формы проблемы YAML, при фиксации нового файла в репозитории необходимо удалить шаблон проблемы Markdown.

Ниже приведен пример шаблона проблемы Markdown и соответствующего шаблона формы проблемы YAML.

### Шаблон проблемы Markdown

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? References? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### Шаблон формы проблемы YAML

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS:
        - Node:
        - npm:
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## Дополнительные материалы

- [YAML](https://yaml.org/)
- [Распространенные ошибки проверки при создании форм проблем](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
