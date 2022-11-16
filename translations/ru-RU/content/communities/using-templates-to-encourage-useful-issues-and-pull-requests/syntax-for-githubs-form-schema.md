---
title: Синтаксис для схемы формы GitHub
intro: 'Для настройки форм для поддерживаемых возможностей можно использовать схему формы {% data variables.product.company_short %}.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
ms.openlocfilehash: f5910f3cfdeeb148dc92ee537de4c26551a02f26
ms.sourcegitcommit: ab0ae13cc28587f0302181d58a9519d88c7c1ef9
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/21/2022
ms.locfileid: '148101712'
---
{% note %}

**Примечание.** Схема формы {% data variables.product.company_short %} в настоящее время находится в бета-версии и подлежит изменению.

{% endnote %}

## Сведения о схеме формы {% data variables.product.company_short %}

Для настройки форм для поддерживаемых возможностей можно использовать схему формы {% data variables.product.company_short %}. Дополнительные сведения см. в разделе [Настройка шаблонов проблем для репозитория](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms).

Форма — это набор элементов для запроса данных, введенных пользователем. Вы можете настроить форму, создав определение формы YAML, которое представляет собой массив элементов формы. Каждый элемент формы представляет собой набор пар "ключ-значение", определяющих тип элемента, свойства элемента и ограничения, которые необходимо применить к элементу. Для некоторых ключей значением является другой набор пар "ключ-значение".

Например, следующее определение формы включает четыре элемента формы: текстовую область для предоставления операционной системы пользователя, раскрывающееся меню для выбора версии программного обеспечения, запущенной пользователем, флажок для подтверждения правил поведения и Markdown, который благодарит пользователя за завершение формы.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## Ключи

Для каждого элемента формы можно задать следующие ключи.

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | Тип элемента, который требуется определить. | Обязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `id` | Идентификатор элемента, за исключением случаев, когда для `type` задано значение `markdown`. {% data reusables.form-schema.id-must-be-unique %} Если он указан, то `id` является каноническим идентификатором поля в параметре запроса URL-адреса, который предварительно заполняется. | Необязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `attributes` | Набор пар "ключ-значение", определяющих свойства элемента.  | Обязательно | Карта | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | Набор пар "ключ-значение", устанавливающих ограничения для элемента. | Необязательно | Карта | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

Вы можете выбрать из следующих элементов формы. Для каждого типа существуют уникальные атрибуты и проверки.

| Тип | Описание |
| ---- | ----------- |
| [`markdown`](#markdown) | Текст Markdown, который отображается в форме, чтобы предоставить пользователю дополнительный контекст, но который **не отправляется**. |
| [`textarea`](#textarea) | Многострочное текстовое поле. |
| [`input`](#input) | Текстовое поле с одной строкой. |
| [`dropdown`](#dropdown) | Раскрывающееся меню. |
| [`checkboxes`](#checkboxes) | Набор флажков. |

### `markdown`

Элемент `markdown` можно использовать для отображения Markdown в форме, которая предоставляет пользователю дополнительный контекст, но которая не отправляется.

#### Атрибуты

{% data reusables.form-schema.attributes-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | Текст, преобразованный для просмотра. Поддерживается форматирование Markdown. | Обязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**Советы.** Обработка YAML будет рассматривать хэш-символ как комментарий. Чтобы вставить заголовки Markdown, заключите текст в кавычки.

Для многострочного текста с можно использовать оператор канала.

{% endtip %}

#### Пример

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

Элемент `textarea` можно использовать для добавления в форму многострочного текстового поля. Участники также могут вкладывать файлы в поля `textarea`.

#### Атрибуты

{% data reusables.form-schema.attributes-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Краткое описание ожидаемых данных, введенных пользователем, которые также отображаются в форме. | Обязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Описание текстовой области для предоставления контекста или руководства, которое отображается в форме. | Необязательно | Строка | Пустая строка | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Полупрозрачный заполнитель, который преобразует текстовую область для просмотра при отсутствии значения. | Необязательно | Строка | Пустая строка | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Текст, предварительно заполненный в текстовой области. | Необязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | Если указано значение, отправленный текст будет отформатирован в блок кода. Если указан этот ключ, текстовая область не будет расширяться для вложений файлов или редактирования Markdown. | Необязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | Языки, известные {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. [в файле YAML для языков](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Проверки

{% data reusables.form-schema.validations-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Пример

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

Элемент `input` можно использовать для добавления в форму текстового поля с одной строкой.

#### Атрибуты

{% data reusables.form-schema.attributes-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Краткое описание ожидаемых данных, введенных пользователем, которые также отображаются в форме. | Обязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Описание поля для предоставления контекста или руководства, которое отображается в форме. | Необязательно | Строка | Пустая строка | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Полупрозрачный заполнитель, который отображается в поле при пустом значении. | Необязательно | Строка | Пустая строка | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Текст, предварительно заполненный в поле. | Необязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Проверки

{% data reusables.form-schema.validations-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Пример

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

Элемент `dropdown` можно использовать для добавления раскрывающегося меню в форму.

#### Атрибуты

{% data reusables.form-schema.attributes-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Краткое описание ожидаемых данных, введенных пользователем, которые отображаются в форме. | Обязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Описание раскрывающегося списка для предоставления дополнительного контекста или руководства, которое отображается в форме. | Необязательно | Строка | Пустая строка | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | Определяет, может ли пользователь выбрать несколько вариантов. | Необязательно | Логическое | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Массив вариантов, которые может выбрать пользователь. Не может быть пустым, а все варианты должны быть уникальными. | Обязательно | Массив строк | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Проверки

{% data reusables.form-schema.validations-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Пример

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

Элемент `checkboxes` можно использовать для добавления набора флажков в форму.

#### Атрибуты

{% data reusables.form-schema.attributes-intro %}

| Ключ | Описание | Обязательно | Тип | По умолчанию | Допустимые значения |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Краткое описание ожидаемых данных, введенных пользователем, которые отображаются в форме. | Обязательно | Строка | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Описание набора флажков, отображаемых в форме. Поддерживает форматирование Markdown. | Необязательно | Строка | Пустая строка | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Массив флажков, которые может выбрать пользователь. Сведения о синтаксисе см. далее. | Обязательно | Array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %} {% data reusables.form-schema.required-key %}

#### Пример

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## Дополнительные материалы

- [YAML](https://yaml.org)
