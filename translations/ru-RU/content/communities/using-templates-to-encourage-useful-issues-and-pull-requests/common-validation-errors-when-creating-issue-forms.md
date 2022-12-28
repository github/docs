---
title: Распространенные ошибки проверки при создании форм проблем
intro: 'Некоторые из этих распространенных ошибок проверки могут возникать при создании, сохранении или просмотре форм проблем.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 54451186fe7fcbc40945dc6a0b2ee2d757924c1b
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: '145861072'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## <a name="required-top-level-key-name-is-missing"></a>Отсутствует обязательный ключ верхнего уровня `name`

Шаблон не содержит поля `name`, то есть не ясно, как должен называться шаблон проблемы при предоставлении пользователям списка вариантов.

### <a name="example"></a>Пример

```yaml
description: "Thank you for reporting a bug!"
...
```

Эту ошибку можно исправить путем добавления ключа `name`.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## <a name="key-must-be-a-string"></a>Значение `key` должно быть строкой

Это сообщение об ошибке означает, что был предоставлен разрешенный ключ, но его значение невозможно проанализировать, так как тип данных не поддерживается.

### <a name="example"></a>Пример

Приведенное ниже описание `description` анализируется как логическое значение, хотя должно быть строкой.

```yaml
name: "Bug report"
description: true
...
```

Эту ошибку можно исправить, указав строковое значение. Для успешного анализа строки может требоваться заключать в двойные кавычки. Например, в двойные кавычки должны быть заключены строки, содержащие `'`.

```yaml
name: "Bug report"
description: "true"
...
```

Если в поле ожидается строка, также не допускаются пустые строки или строки, состоящие только из пробелов.

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

Эту ошибку можно исправить, изменив значение на непустую строку. Если поле не является обязательным, следует удалить пару "ключ-значение".

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## <a name="input-is-not-a-permitted-key"></a>`input` не является допустимым ключом

На верхнем уровне шаблона предоставлен непредвиденный ключ. Дополнительные сведения о поддерживаемых ключах верхнего уровня см. в разделе [Синтаксис форм проблем](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax).

### <a name="example"></a>Пример

```yaml
name: "Bug report"
hello: world
...
```

Эту ошибку можно устранить путем удаления лишних ключей.

```yaml
name: "Bug report"
...
```

## <a name="forbidden-keys"></a>Запрещенные ключи

YAML анализирует некоторые строки как значения типа `Boolean`. Чтобы избежать этого, мы явно запретили использовать следующие ключи:

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

Эту ошибку можно устранить путем удаления запрещенных ключей.

## <a name="body-must-contain-at-least-one-non-markdown-field"></a>Текст должен содержать по крайней мере одно поле, отличное от markdown

Формы проблем должны принимать данные, введенные пользователем, поэтому хотя бы одно из полей должно быть полем для ввода данных. Элемент `markdown` содержит статический текст, поэтому массив `body` не может содержать только элементы `markdown`.

### <a name="example"></a>Пример

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

Эту ошибку можно исправить путем добавления элементов, отличных от markdown, которые принимают введенные пользователем данные.

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## <a name="body-must-have-unique-ids"></a>Текст должен содержать уникальные идентификаторы

При использовании атрибутов `id` для различения нескольких элементов каждый атрибут `id` должен быть уникальным.

### <a name="example"></a>Пример

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

Эту ошибку можно исправить, изменив `id` одного из полей ввода так, чтобы каждое поле `input` имело уникальный атрибут `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## <a name="body-must-have-unique-labels"></a>Текст должен содержать уникальные метки

При наличии нескольких элементов `body`, которые принимают введенные пользователем данные, атрибут `label` каждого поля ввода должен быть уникальным.

### <a name="example"></a>Пример

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

Эту ошибку можно исправить, изменив атрибут `label` одного из полей ввода так, чтобы все `label` были уникальными.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

Поля ввода также можно различать по атрибуту `id`. Если требуются повторяющиеся атрибуты `label`, можно указать по крайней мере один `id` для различения двух элементов с одинаковыми метками.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

Атрибуты `id` не отображаются в тексте проблемы. Если поля в итоговой проблеме должны различаться, следует использовать уникальные атрибуты `label`.


## <a name="labels-are-too-similar"></a>Метки слишком похожи

В результате обработки схожих меток могут получаться одинаковые ссылки. Если для поля `input` не указан атрибут `id`, для создания ссылки на поле `input` используется атрибут `label`. Для этого `label` обрабатывается с помощью метода [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) Rails. В некоторых случаях в результате обработки двух разных меток может получаться одна и та же параметризованная строка.

### <a name="example"></a>Пример

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

Эту ошибку можно исправить путем добавления по крайней мере одного отличительного буквенно-цифрового символа, `-` или `_` к одной из конфликтующих меток.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

Ошибку также можно исправить, назначив одной из конфликтующих меток уникальный `id`.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## <a name="checkboxes-must-have-unique-labels"></a>Флажки должны иметь уникальные метки

При наличии элемента `checkboxes` каждая из его вложенных меток должна быть уникальной как среди одноуровневых элементов, так и среди других входных элементов.

### <a name="example"></a>Пример

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Эту ошибку можно исправить, изменив атрибут `label` одного из входных элементов.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

Кроме того, можно предоставить `id` для конфликтующих элементов верхнего уровня. Вложенные элементы флажков не поддерживают атрибут `id`.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Атрибуты `id` не отображаются в тексте проблемы. Если поля в итоговой проблеме должны различаться, следует использовать уникальные атрибуты `label`.

## <a name="bodyi-required-key-type-is-missing"></a>Body[i]: отсутствует обязательный ключ type

Каждый блок текста должен иметь ключ `type`.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это отсчитываемый от нуля индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Эту ошибку можно исправить, добавив ключ `type` с допустимым типом входных данных в качестве значения. Доступные типы входных данных для `body` и их синтаксис см. в разделе [Синтаксис для схемы формы {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-x-is-not-a-valid-input-type"></a>Body[i]: `x` не является допустимым типом входных данных

Один из блоков текста содержит значение типа, которое не является одним из [разрешенных типов](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Эту ошибку можно исправить, изменив `x` на один из допустимых типов.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-required-attribute-key-value-is-missing"></a>Body[i]: отсутствует обязательный ключ атрибута `value`

Не предоставлен один из обязательных атрибутов `value`. Эта ошибка возникает, если в блоке нет ключа `attributes` или нет ключа `value` в ключе `attributes`.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

Ошибку в этом примере можно исправить, добавив ключ `value` в ключе `attributes` во втором элементе `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## <a name="bodyi-label-must-be-a-string"></a>Body[i]: метка должна быть строкой

В блоке `attributes` значение имеет неправильный тип данных.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

Приведенная ниже метка `label` анализируется как логическое значение, хотя должна быть строкой.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

Эту ошибку можно исправить, предоставив строковое значение для `label`. Если вы хотите использовать значение `label`, которое может анализироваться как логическое, целочисленное или десятичное, его следует заключить в кавычки. Например, используйте `"true"` или `"1.3"` вместо `true` или `1.3`.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

Если в атрибуте ожидается строка, пустые строки или строки, состоящие только из пробелов, не допускаются. Например, запрещено значение `""` или `"     "`.

Если атрибут является обязательным, значением должна быть непустая строка. Если поле не является обязательным, следует удалить пару "ключ-значение".

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## <a name="bodyi-id-can-only-contain-numbers-letters---_&quot;></a>Body[i]: `id` может содержать только цифры, буквы, символы &quot;-&quot; и &quot;_"

Атрибуты `id` могут содержать только буквы, цифры, символы `-` и `_`. В атрибуте `id` шаблона не может быть недопустимых символов, например пробелов.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

Эту ошибку можно исправить, удалив пробелы и другие недопустимые символы из значений `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## <a name="bodyi-x-is-not-a-permitted-key"></a>Body[i]: `x` не является допустимым ключом

На том же уровне отступа, что и у атрибутов `type` и `attributes`, предоставлен непредвиденный ключ `x`.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Эту ошибку можно исправить, удалив лишние ключи и оставив только ключи `type`, `attributes` и `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-label-contains-forbidden-word"></a>Body[i]: `label` содержит запрещенное слово

Чтобы свести к минимуму риск публикации конфиденциальной информации и учетных данных в проблемах на GitHub, некоторые слова, часто используемые злоумышленниками, не допускаются в метках `label` элементов ввода или textarea.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

Эту ошибку можно исправить, удалив такие слова, как "пароль", из всех полей `label`.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## <a name="bodyi-x-is-not-a-permitted-attribute"></a>Body[i]: `x` не является допустимым атрибутом

В блоке `attributes` предоставлен недопустимый ключ.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

Эту ошибку можно исправить, удалив лишние ключи и оставив только допустимые атрибуты.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## <a name="bodyi-options-must-be-unique"></a>Body[i]: элементы `options` должны быть уникальными

Для типов входных данных "флажок" и "раскрывающийся список" элементы в массиве `options` должны быть уникальными.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

Эту ошибку можно исправить, убрав повторяющиеся элементы в массиве `options`.

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## <a name="bodyi-options-must-not-include-the-reserved-word-none"></a>Body[i]: в `options` не должно быть зарезервированного слова none

None — это зарезервированное слово в наборе `options`, которое служит для указания отсутствия выбора, если выбор элемента в `dropdown` не обязателен.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

Эту ошибку можно исправить, удалив none из списка вариантов. Если нужно, чтобы участник мог указать, что ему не нравится ни один из видов пирогов, можно дополнительно удалить проверку `required`.

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

В этом примере None добавляется автоматически в качестве доступного для выбора варианта.

## <a name="bodyi-options-must-not-include-booleans-please-wrap-values-such-as-yes-and-true-in-quotes"></a>Body[i]: массив `options` не должен содержать логических значений. Заключите такие значения, как yes (да) и true (истина), в кавычки

Некоторые английские слова интерпретируются средством синтаксического анализа YAML как логические значения, если они не заключены в кавычки. В массиве `options` раскрывающегося списка все элементы должны быть строками, а не логическими значениями.

Сообщения об ошибках, связанных с `body`, начинаются с элемента `body[i]`, где `i` — это индекс блока текста, содержащего ошибку. Например, `body[0]` означает, что ошибка вызвана первым блоком в списке `body`.

### <a name="example"></a>Пример

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

Эту ошибку можно исправить, заключив каждый соответствующий вариант в кавычки, чтобы он не интерпретировался как логическое значение.

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## <a name="further-reading"></a>Дополнительные материалы

- [YAML](https://yaml.org/)
- [Синтаксис для форм проблем](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
