---
title: Выражения
shortTitle: Expressions
intro: Выражения можно оценивать в рабочих процессах и действиях.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 1e88b76358bfb9ff7d3e9c9d965cc6b76e829bb2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098855'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о выражениях

С помощью выражений можно программно задавать переменные среды в файлах рабочих процессов и контекстах доступа. Выражение представляет собой сочетание литералов, ссылок на контекст и функций, которые соединяются с помощью операторов. Дополнительные сведения о контекстах см. в разделе [Контексты](/actions/learn-github-actions/contexts).

Выражения обычно используются с условным оператором `if` в файле рабочего процесса для определения того, следует ли выполнять шаг или нет. Если выражение в условии `if` равно `true`, шаг выполняется.

Чтобы в {% data variables.product.prodname_dotcom %} выражение вычислялось, а не считалось строкой, необходимо использовать особый синтаксис.

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Дополнительные сведения об условных выражениях `if` см. в разделе «[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)».

{% data reusables.actions.context-injection-warning %}

#### Пример выражения в условном операторе `if`

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Пример настройки переменной среды

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Литералы

В выражении можно использовать типы данных `boolean`, `null`, `number` и `string`.

| Тип данных | Литерал |
|-----------|---------------|
| `boolean` | `true` или `false` |
| `null`    | `null` |
| `number`  | Любой числовой формат, поддерживаемый JSON. |
| `string`  | Заключать строки в скобки `{% raw %}${{{% endraw %}` и `{% raw %}}}{% endraw %}` необязательно. Однако если вы решите это сделать, используйте одинарные кавычки (`'`) вокруг строки. Чтобы использовать литерал в виде одинарной кавычки, экранируйте его с помощью дополнительной одинарной кавычки (`''`). Если заключить такой литерал в двойные кавычки (`"`), возникнет ошибка. |

#### Пример

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## Операторы

| Оператор    | Описание |
| ---         | ---         |
| `( )`       | Логическое группирование |
| `[ ]`       | Индекс
| `.`         | Разыменование свойства |
| `!`         | Not |
| `<`         | Меньше чем |
| `<=`        | Меньше или равно |
| `>`         | Больше чем |
| `>=`        | Больше или равно |
| `==`        | Равно |
| `!=`        | Не равно |
| `&&`        | And |
|  <code>\|\|</code> | либо |

{% data variables.product.prodname_dotcom %} выполняет нестрогое сравнение.

* Если типы не совпадают, {% data variables.product.prodname_dotcom %} приводит их к числовому типу. Для этого в {% data variables.product.prodname_dotcom %} используются следующие преобразования:

  | Тип    | Результат |
  | ---     | ---    |
  | NULL    | `0` |
  | Логическое значение | `true` возвращает `1` <br /> `false` возвращает `0` |
  | Строка  | Преобразуется в любой допустимый числовой формат JSON, в противном случае дает значение `NaN`. <br /> Примечание. Для пустой строки возвращается `0`. |
  | Array   | `NaN` |
  | Объект  | `NaN` |
* Сравнение одного значения `NaN` с другим `NaN` не дает `true`. Дополнительные сведения см. в разделе [о свойствах NaN в Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
* При сравнении строк в {% data variables.product.prodname_dotcom %} регистр не учитывается.
* Объект и массив считаются равными, только если это один экземпляр.

## Функции

В {% data variables.product.prodname_dotcom %} предлагается набор встроенных функций, которые можно использовать в выражениях. Чтобы выполнить сравнение, некоторые функции приводят значения к строковому типу. Для этого в {% data variables.product.prodname_dotcom %} используются следующие преобразования:

| Тип    | Результат |
| ---     | ---    |
| NULL    | `''` |
| Логическое значение | `'true'` или `'false'` |
| Number  | Десятичный формат, экспоненциальная запись для больших чисел |
| Array   | Массивы не преобразуются в строку |
| Объект  | Объекты не преобразуются в строку |

### contains

`contains( search, item )`

Возвращает `true`, если `search` содержит `item`. Если `search` является массивом, эта функция возвращает значение `true`, когда `item` является элементом в массиве. Если `search` является строкой, эта функция возвращает значение `true`, когда `item` является подстрокой `search`. В этой функции регистр не учитывается. Приводит значения к строковому типу.

#### Пример использования строки

`contains('Hello world', 'llo')` возвращает `true`.

#### Пример использования фильтра объектов

`contains(github.event.issue.labels.*.name, 'bug')` возвращает `true`, если проблема, связанная с событием, имеет метку "bug" (ошибка).

Дополнительные сведения см. в разделе [Фильтры объектов](#object-filters).

#### Пример сопоставления массива строк

Вместо записи `github.event_name == "push" || github.event_name == "pull_request"` можно использовать `contains()` с `fromJson()`, чтобы проверить, содержит ли массив строк `item`.

Например, `contains(fromJson('["push", "pull_request"]'), github.event_name)` возвращает `true`, если `github.event_name` имеет значение "push" или "pull_request".

### startsWith

`startsWith( searchString, searchValue )`

Возвращает значение `true`, когда `searchString` начинается с `searchValue`. В этой функции регистр не учитывается. Приводит значения к строковому типу.

#### Пример

`startsWith('Hello world', 'He')` возвращает `true`.

### endsWith

`endsWith( searchString, searchValue )`

Возвращает значение `true`, если `searchString` заканчивается на `searchValue`. В этой функции регистр не учитывается. Приводит значения к строковому типу.

#### Пример

`endsWith('Hello world', 'ld')` возвращает `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Заменяет значения в строке `string` на значение переменной `replaceValueN`. Переменные в `string` указываются с помощью синтаксиса `{N}`, где `N` является целым числом. Необходимо указать хотя бы одно значение `replaceValue` и `string`. Максимальное количество переменных (`replaceValueN`) не ограничивается. Чтобы указать фигурную скобку, экранируйте ее еще одной фигурной скобкой.

#### Пример

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Возвращает «Hello Mona the Octocat».

#### Пример экранирования фигурных скобок

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Возвращает «{Hello Mona the Octocat!}».

### join

`join( array, optionalSeparator )`

Значением `array` может быть массив или строка. Все значения в `array` сцепляются в строку. Между сцепленными значениями вставляется разделитель `optionalSeparator`. Если он не указан, используется разделитель по умолчанию — `,`. Приводит значения к строковому типу.

#### Пример

`join(github.event.issue.labels.*.name, ', ')` может вернуть «bug, help wanted» (ошибка, требуется помощь)

### toJSON

`toJSON(value)`

Возвращает значение `value` в правильном формате JSON. С помощью этой функции можно отлаживать данные, предоставленные в контекстах.

#### Пример

`toJSON(job)` может вернуть `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Возвращает объект JSON или тип данных JSON для `value`. С помощью этой функции можно представить объект JSON в виде вычисляемого выражения или преобразовать переменные среды из строки.

#### Пример возврата объекта JSON

Этот рабочий процесс задает матрицу JSON в одном задании и передает ее следующему заданию с помощью выходных данных и функции `fromJSON`.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "matrix={\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
{%- endif %}{% raw %}
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### Пример возврата типа данных JSON

Этот рабочий процесс с помощью функции `fromJSON` преобразует переменные среды из строки в логическое значение или целое число.

{% raw %}
```yaml
name: print
on: push
env:
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - continue-on-error: ${{ fromJSON(env.continue) }}
        timeout-minutes: ${{ fromJSON(env.time) }}
        run: echo ...
```
{% endraw %}

### hashFiles

`hashFiles(path)`

Возвращает один хэш для набора файлов по шаблону пути `path`. Вы можете указать один шаблон `path` или несколько шаблонов `path`, разделенных запятыми. Путь `path` указывается относительно каталога `GITHUB_WORKSPACE` и может включать только файлы внутри `GITHUB_WORKSPACE`. Эта функция вычисляет отдельный хэш SHA-256 для каждого подходящего файла, а затем с помощью этих хэшей вычисляет окончательный хэш SHA-256 для набора файлов. Если по шаблону `path` файлы отсутствуют, функция возвращает пустую строку. Дополнительные сведения о SHA-256 см. в разделе «[SHA-2](https://en.wikipedia.org/wiki/SHA-2)».

Для сопоставления с именами файлов можно использовать подстановочные знаки. В Windows при сопоставлении по шаблону регистр не учитывается. Дополнительные сведения о поддерживаемых подстановочных знаках см. в разделе «[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)».

#### Пример с одним шаблоном

Соответствует любому файлу `package-lock.json` в репозитории.

`hashFiles('**/package-lock.json')`

#### Пример с несколькими шаблонами

Создает хэш для всех файлов `package-lock.json` и `Gemfile.lock` в репозитории.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt или ghes > 3.3 или ghae > 3.3 или ghec %}
## Функции проверки состояния

Следующие функции проверки состояния можно использовать в качестве выражений в условных операторах `if`. Если не включить ни одну из этих функций, применяется проверка состояния по умолчанию `success()`. Дополнительные сведения об условных операторах `if` см. в разделе «[Синтаксис рабочего процесса для GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)» и «[Синтаксис метаданных для составных действий GitHub](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)».
{% else %}
## Функции проверки
В качестве выражений в условных операторах `if` можно использовать следующие функции проверки состояния. Если не включить ни одну из этих функций, применяется проверка состояния по умолчанию `success()`. Дополнительные сведения об условных операторах `if` см. в разделе «[Синтаксис рабочего процесса для GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)».
{% endif %}

### Успешное завершение

Возвращает значение `true`, если ни один из предыдущих шагов не завершился сбоем или не был отменен.

#### Пример

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

Задает принудительное выполнение шага при любых обстоятельствах и возвращает значение `true` даже при отмене. Задание или шаг не выполняются, если выполнению задачи мешает критический сбой. Например, если не удалось получить источники.

#### Пример

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Возвращает значение `true`, если рабочий процесс был отменен.

#### Пример

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### ошибка

Возвращает значение `true`, если любой предыдущий шаг задания завершается сбоем. При наличии цепочки зависимых заданий, функция `failure()` возвращает значение `true`, если сбоем завершается любое предыдущее задание.

#### Пример

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### сбой с условиями

Вы можете включить дополнительные условия для шага, выполняемого после сбоя, но необходимо по-прежнему включить `failure()` для переопределения проверки состояния по умолчанию для `success()`, которая автоматически применяется к условиям `if`, не содержащим функцию проверки состояния.

##### Пример

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Фильтры объектов

С помощью записи `*` можно применить фильтр и подобрать соответствующие элементы из коллекции.

Например, рассмотрим массив объектов с именем `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

Фильтр `fruits.*.name` возвращает массив `[ "apple", "orange", "pear" ]`.

Синтаксис `*` также можно использовать для объекта. Например, допустим, у вас есть объект с именем `vegetables`.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

Применение фильтра `vegetables.*.ediblePortions` может дать следующий результат:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

В объектах значения не являются упорядоченными, поэтому в выходных данных какой-то определенный порядок не гарантируется.
