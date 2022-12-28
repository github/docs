---
title: Поддержка SARIF для проверки кода
shortTitle: SARIF support
intro: 'Чтобы отобразить результаты стороннего средства статического анализа в вашем репозитории в {% data variables.product.prodname_dotcom %}, необходимо хранить результаты в файле SARIF, поддерживающем конкретное подмножество схемы JSON SARIF 2.1.0 для {% data variables.product.prodname_code_scanning %}. Если вы используете подсистему статического анализа {% data variables.product.prodname_codeql %}, результаты будут автоматически отображаться в репозитории на сайте {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
ms.openlocfilehash: 98d0e4620d240c3e1863aaee6f57a5834c86018b
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162794'
---
{% data reusables.code-scanning.beta %}

## Сведения о поддержке SARIF

SARIF (Static Analysis Results Interchange Format) — это [стандарт OASIS](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html), определяющий формат выходного файла. Стандарт SARIF упрощает совместное использование результатов средств статического анализа. {% data variables.product.prodname_code_scanning_capc %} поддерживает подмножество схемы JSON для SARIF 2.1.0.

Чтобы передать файл SARIF из сторонней подсистемы статического анализа кода, необходимо убедиться, что отправленные файлы используют SARIF версии 2.1.0. {% data variables.product.prodname_dotcom %} анализирует файл SARIF и отображает оповещения, используя результаты из репозитория в рамках работы с {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в статье [Передача файла SARIF в {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github). Дополнительные сведения о схеме JSON для SARIF 2.1.0 см. в документации по [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json).

Если вы используете {% data variables.product.prodname_actions %} с {% data variables.code-scanning.codeql_workflow %}{% ifversion codeql-runner-supported %}, используя {% data variables.code-scanning.codeql_runner %},{% endif %} или {% data variables.product.prodname_codeql_cli %}, результаты {% data variables.product.prodname_code_scanning %} будут автоматически использовать поддерживаемую часть SARIF 2.1.0. Дополнительные сведения см. в [разделах Настройка {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository){% ifversion codeql-runner-supported %}, [Выполнение {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system),{% endif %} или [Установка CodeQL CLI в системе CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

Можно передать несколько файлов SARIF для одной и той же фиксации и отобразить данные из каждого файла в виде результатов {% data variables.product.prodname_code_scanning %}. При передаче нескольких файлов SARIF для фиксации необходимо указать категорию для каждого анализа. Способ указания категории зависит от метода анализа:
- Используя {% data variables.product.prodname_codeql_cli %} напрямую, при создании файлов SARIF передайте аргумент `--sarif-category` для команды `codeql database analyze`. Дополнительные сведения см. в разделе [Настройка CodeQL CLI в системе CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli).
- Используя {% data variables.product.prodname_actions %} с `codeql-action/analyze`, категория задается автоматически из имени рабочего процесса и любых переменных матрицы (обычно это `language`). Ее можно переопределить, указав входные данные `category` для действия, что полезно при анализе разных разделов монорепозитория в одном рабочем процессе.
- Используя {% data variables.product.prodname_actions %} для передачи результатов из других средств статического анализа, вам необходимо указать входные данные `category`, если вы передаете несколько файлов результатов для одного и того же средства в одном рабочем процессе. Дополнительные сведения см. в разделе [Передача анализа {% data variables.product.prodname_code_scanning %} с помощью {% data variables.product.prodname_actions %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions).
- Если вы не используете ни один из этих подходов, то вам необходимо указать уникальный `runAutomationDetails.id` в каждом файле SARIF для передачи. Дополнительные сведения об этом свойстве см. далее в разделе [Объект `runAutomationDetails`](#runautomationdetails-object).

При передаче второго файла SARIF для фиксации с той же категорией и из того же средства более ранние результаты перезаписываются. Однако при попытке передать несколько файлов SARIF для одного и того же средства и категории в одном запуске рабочего процесса {% data variables.product.prodname_actions %} будет определена неправильная настройка и выполнение завершится ошибкой.

Для вывода оповещений {% data variables.product.prodname_dotcom %} использует свойства в файле SARIF. Например, `shortDescription` и `fullDescription` отображаются в верхней части оповещения {% data variables.product.prodname_code_scanning %}. `location` позволяет {% data variables.product.prodname_dotcom %} отображать заметки в файле кода. Дополнительные сведения см. в статье [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Если вы не знакомы с SARIF и хотите узнать больше, ознакомьтесь репозиторием [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) корпорации Майкрософт.

## Предоставление данных для отслеживания оповещений {% data variables.product.prodname_code_scanning %} в разных запусках

При каждой отправке результатов новой проверки кода эти результаты обрабатываются, а в репозиторий добавляются предупреждения. Чтобы предотвратить дублирование оповещений для одной и той же проблемы, {% data variables.product.prodname_code_scanning %} использует отпечатки, позволяющие сопоставлять результаты различных запусков. Поэтому оповещения появляются только один раз в последнем запуске выбранной ветви. Это позволяет сопоставлять оповещения с правильной строкой кода при редактировании файлов. Для `ruleID` результата должен быть одинаковым в разных анализах.
 
### Отчеты о согласованных пути к файлам

Путь к файлу должен быть согласованным во всех запусках, чтобы обеспечить вычисление стабильного отпечатка пальца. Если пути к файлам отличаются для одного и того же результата, при каждом анализе создается новое оповещение, а старое будет закрыто. Это приведет к созданию нескольких оповещений для одного и того же результата.

### Включение данных для создания отпечатков пальцев

{% data variables.product.prodname_dotcom %} использует свойство `partialFingerprints` в стандарте OASIS, чтобы определить логическую идентичность двух результатов. Дополнительные сведения см. в записи [свойства partialFingerprints](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611) в документации по OASIS.

Файлы SARIF, созданные {% data variables.code-scanning.codeql_workflow %}, {% ifversion codeql-runner-supported %}с помощью {% data variables.code-scanning.codeql_runner %}, {% endif %} или с помощью {% data variables.product.prodname_codeql_cli %}, включают данные отпечатков пальцев. Если вы отправили файл SARIF с помощью действия `upload-sarif`, но эти данные отсутствуют, {% data variables.product.prodname_dotcom %} пытается заполнить поле `partialFingerprints` из исходных файлов. Дополнительные сведения об отправке результатов см. в статье [Передача файла SARIF в {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions).

Если вы отправляете файл SARIF без данных отпечатков с помощью конечной точки API `/code-scanning/sarifs`, оповещения {% data variables.product.prodname_code_scanning %} будут обрабатываться и отображаться, но пользователи могут видеть повторяющиеся оповещения. Чтобы избежать появления повторяющихся оповещений, следует вычислить данные отпечатка и заполнить свойство `partialFingerprints` перед отправкой файла SARIF. Вы можете найти скрипт, в котором действие `upload-sarif` использует полезную отправную точку: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Дополнительные сведения об API см. в разделе [Передача анализа в виде данных SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data).

## Общие сведения о правилах и результатах

Файлы SARIF поддерживают как правила, так и результаты. Информация, хранящаяся в этих элементах, аналогична, но предназначена для разных целей.

- Правила — это массив объектов `reportingDescriptor`, включенных в объект `toolComponent`. Здесь хранятся сведения о правилах, выполняемых во время анализа. Информация в этих объектах должна изменяться редко, обычно при обновлении средства.

- Результаты хранятся в виде ряда объектов `result` в `results` в объекте `run`. Каждый объект `result` содержит сведения об одном оповещении в базе кода. В объекте `results` можно ссылаться на правило, которое обнаружило оповещение.

Сравнивая файлы SARIF, созданные путем анализа разных баз кода, с одним и тем же средством и правилами, вы должны увидеть различия в результатах анализа, но не в правилах.

## Указание корневого каталога для исходных файлов

{% data variables.product.prodname_code_scanning_capc %} интерпретирует результаты, сообщаемые с относительными путями, как относительно корня проанализированного репозитория. Если результат содержит абсолютный URI, URI преобразуется в относительный URI. Затем относительный URI можно сопоставить с файлом, зафиксированным в репозитории.

Корневой каталог источника можно указать для преобразования из абсолютных в относительные URI одним из следующих способов.

- [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) входные данные для `github/codeql-action/analyze` действия
- `checkout_uri` параметр для конечной точки API отправки SARIF. Дополнительные сведения см. в разделе ["{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data)" в документации по REST API.
- [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) свойство в ФАЙЛЕ SARIF

При указании корня источника любое расположение артефакта, указанное с помощью абсолютного URI, должно использовать ту же схему URI. При наличии несоответствия между схемой URI для корня источника и одним или несколькими абсолютными URI отправка отклоняется.

Например, SARIF-файл отправляется с помощью корневого `file:///github/workspace`каталога источника . 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

Файл успешно отправлен, так как оба абсолютных URI используют ту же схему URI, что и корень источника.

## Проверка файла SARIF

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Вы можете проверить совместимость файла SARIF с {% data variables.product.prodname_code_scanning %}, протестировав его в соответствии с правилами приема данных {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. на странице [проверяющего элемента управления SARIF Microsoft](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Поддерживаемые свойства выходного файла SARIF

При использовании подсистемы анализа кода, отличной от {% data variables.product.prodname_codeql %}, можно проверить поддерживаемые свойства SARIF, чтобы оптимизировать способ отображения результатов анализа в {% data variables.product.prodname_dotcom %}.

{% note %}

**Примечание:** Необходимо указать явное значение для любого свойства, помеченного как "required". Пустая строка не поддерживается для обязательных свойств.

{% endnote %}

Любой допустимый выходной файл SARIF 2.1.0 можно отправить, но {% data variables.product.prodname_code_scanning %} будет использовать только указанные ниже поддерживаемые свойства.

### Объект `sarifLog`.

| Имя | Описание |
|----|----|
|  `$schema` | **Обязательный.** Универсальный код ресурса (URI) схемы JSON для SARIF версии 2.1.0. Например, `https://json.schemastore.org/sarif-2.1.0.json`. |
| `version` | **Обязательный.** {% data variables.product.prodname_code_scanning_capc %} поддерживает только SARIF версии `2.1.0`.
| `runs[]` | **Обязательный.** Файл SARIF содержит массив из одного или нескольких запусков. Каждый запуск представляет собой один запуск средства анализа. Дополнительные сведения о `run` см. в разделе [Объект `run`](#run-object).

### Объект `run`.

{% data variables.product.prodname_code_scanning_capc %} использует объект `run` для фильтрации результатов по средству и предоставлению сведений об источнике результата. Объект `run` содержит объект компонента средства `tool.driver`, содержащий сведения о средстве, которое создало результаты. Каждый объект `run` может содержать только результаты для одного средства анализа.

| Имя | Описание |
|----|----|
| `tool.driver` | **Обязательный.** Объект `toolComponent`, описывающий средство анализа. Дополнительные сведения см. в разделе [Объект `toolComponent`](#toolcomponent-object). |
| `tool.extensions[]` | **Необязательный элемент.** Массив объектов `toolComponent`, представляющих все подключаемые модули или расширения, используемые средством во время анализа. Дополнительные сведения см. в разделе [Объект `toolComponent`](#toolcomponent-object). |
| `invocation.workingDirectory.uri` | **Необязательный элемент.** Это поле используется только в том случае, если `checkout_uri` (только API отправки SARIF) или `checkout_path` (только {% data variables.product.prodname_actions %} не предоставляется. Значение используется для преобразования абсолютных URI, используемых в объектах, в [`physicalLocation`](#physicallocation-object) относительные URI. Дополнительные сведения см. в разделе [Указание корневого каталога для исходных файлов](#specifying-the-root-for-source-files).|
| `results[]` | **Обязательный.** Результаты средства анализа. {% data variables.product.prodname_code_scanning_capc %} отображает результаты в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Объект `result`](#result-object).

### Объект `toolComponent`.

| Имя | Описание |
|----|----|
| `name` | **Обязательный.** Имя средства анализа. {% data variables.product.prodname_code_scanning_capc %} отображает имя в {% data variables.product.prodname_dotcom %}, чтобы можно было фильтровать результаты по средству. |
| `version` | **Необязательный элемент.** Версия средства анализа. {% data variables.product.prodname_code_scanning_capc %} использует номер версии для отслеживания изменения результатов вследствие изменения версии средства, а не изменения анализируемого кода. Если файл SARIF содержит поле `semanticVersion`, {% data variables.product.prodname_code_scanning %} не использует `version`. |
| `semanticVersion` | **Необязательный элемент.** Версия средства анализа, заданная форматом Семантического версионирования 2.0. {% data variables.product.prodname_code_scanning_capc %} использует номер версии для отслеживания изменения результатов вследствие изменения версии средства, а не изменения анализируемого кода. Если файл SARIF содержит поле `semanticVersion`, {% data variables.product.prodname_code_scanning %} не использует `version`. Дополнительные сведения см. на сайте по [Семантическому версионированию 2.0.0](https://semver.org/) в документации. |
| `rules[]` | **Обязательный.** Массив объектов `reportingDescriptor`, представляющих правила. Средство анализа использует правила для поиска проблем в анализируемом коде. Дополнительные сведения см. в разделе [Объект `reportingDescriptor`](#reportingdescriptor-object). |

### Объект `reportingDescriptor`.

Здесь хранятся сведения о правилах, выполняемых во время анализа. Информация в этих объектах должна изменяться редко, обычно при обновлении средства. Дополнительные сведения см. в разделе [Общие сведения о правилах и результатах](#understanding-rules-and-results) выше.

| Имя | Описание |
|----|----|
| `id` |  **Обязательный.** Уникальный идентификатор правила. `id` ссылается на другие части файла SARIF, а {% data variables.product.prodname_code_scanning %} может его использовать для отображения URL-адресов в {% data variables.product.prodname_dotcom %}. |
| `name` | **Необязательный элемент.** Имя правила. {% data variables.product.prodname_code_scanning_capc %} отображает имя, чтобы можно было фильтровать результаты по правилу в {% data variables.product.prodname_dotcom %}. |
| `shortDescription.text` | **Обязательный.** Краткое описание правила. {% data variables.product.prodname_code_scanning_capc %} отображает краткое описание в {% data variables.product.prodname_dotcom %} рядом с соответствующими результатами.
| `fullDescription.text` | **Обязательный.** Описание правила. {% data variables.product.prodname_code_scanning_capc %} отображает полное описание в {% data variables.product.prodname_dotcom %} рядом с соответствующими результатами. Максимальное количество знаков — 1000.
| `defaultConfiguration.level` | **Необязательный элемент.** Уровень серьезности правила по умолчанию. {% data variables.product.prodname_code_scanning_capc %} использует уровни серьезности, чтобы помочь вам понять, насколько важен результат для данного правила. Это значение можно переопределить атрибутом `level` в объекте `result`. Дополнительные сведения см. в разделе [Объект `result`](#result-object). Значение по умолчанию: `warning`.
| `help.text` | **Обязательный.** Документация по правилу с использованием текстового формата. {% data variables.product.prodname_code_scanning_capc %} отображает эту справочную документацию рядом с соответствующими результатами.
| `help.markdown` | **Рекомендуется.** Документация по правилу с использованием формата Markdown. {% data variables.product.prodname_code_scanning_capc %} отображает эту справочную документацию рядом с соответствующими результатами. Если объект `help.markdown` доступен, то отображается вместо `help.text`.
| `properties.tags[]` | **Необязательный элемент.** Массив строк. {% data variables.product.prodname_code_scanning_capc %} использует `tags`, чтобы можно было фильтровать результаты в {% data variables.product.prodname_dotcom %}. Например, можно отфильтровать все результаты с тегом `security`.
| `properties.precision` | **Рекомендуется.** Строка, показывающая, как часто результаты, указанные этим правилом, являются истинными. Например, если правило имеет известный высокий ложноположительный коэффициент, то точность должна быть `low`. {% data variables.product.prodname_code_scanning_capc %} упорядочивает результаты по точности в {% data variables.product.prodname_dotcom %}, чтобы сначала отображались результаты с наивысшим `level` и наибольшей `precision`. Это может быть `very-high`, `high`, `medium` или `low`. 
| `properties.problem.severity` | **Рекомендуется.** Строка, указывающая уровень серьезности любых оповещений, созданных запросом, не связанным с безопасностью. Со свойством `properties.precision` определяет, отображаются ли результаты по умолчанию в {% data variables.product.prodname_dotcom %} так, чтобы сначала отображались результаты с наивысшим значением `problem.severity` и наибольшей `precision`. Это может быть `error`, `warning` или `recommendation`.
| `properties.security-severity` | **Рекомендуется.** Строка, представляющая оценку, указывающую уровень серьезности (в диапазоне от 0,0 до 10,0) для запросов безопасности (`@tags` содержит `security`). Со свойством `properties.precision` определяет, отображаются ли результаты по умолчанию в {% data variables.product.prodname_dotcom %} так, чтобы сначала отображались результаты с наивысшим значением `security-severity` и наибольшей `precision`. {% data variables.product.prodname_code_scanning_capc %} преобразует числовые оценки следующим образом: больше 9,0 — `critical`, от 7,0 до 8,9 — `high`, от 4,0 до 6,9 — `medium` и 3,9 или меньше — `low`. 

### Объект `result`.

Каждый объект `result` содержит сведения об одном оповещении в базе кода. В объекте `results` можно ссылаться на правило, которое обнаружило оповещение. Дополнительные сведения см. в разделе [Общие сведения о правилах и результатах](#understanding-rules-and-results) выше.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Имя | Описание |
|----|----|
| `ruleId`| **Необязательный элемент.** Уникальный идентификатор правила (`reportingDescriptor.id`). Дополнительные сведения см. в разделе [Объект `reportingDescriptor`](#reportingdescriptor-object). {% data variables.product.prodname_code_scanning_capc %} использует идентификатор правила, чтобы фильтровать результаты по правилу в {% data variables.product.prodname_dotcom %}.
| `ruleIndex`| **Необязательный элемент.** Индекс связанного правила (объект `reportingDescriptor`) в массиве `rules` компонента средства. Дополнительные сведения см. в разделе [Объект `run`](#run-object). Допустимый диапазон для этого свойства от 0 до 2^63 – 1.
| `rule`| **Необязательный элемент.** Ссылка, используемая для поиска правила (дескриптора отчетности) для этого результата. Дополнительные сведения см. в разделе [Объект `reportingDescriptor`](#reportingdescriptor-object).
| `level`| **Необязательный элемент.** Серьезность результата. Этот уровень переопределяет серьезность по умолчанию, определенную правилом. {% data variables.product.prodname_code_scanning_capc %} использует уровень, чтобы фильтровать результаты по серьезности в {% data variables.product.prodname_dotcom %}.
| `message.text`| **Обязательный.** Сообщение, которое описывает результат. {% data variables.product.prodname_code_scanning_capc %} отображает текст сообщения в качестве заголовка результата. Если видимое пространство ограничено, отображается только первое предложение сообщения.
| `locations[]`| **Обязательный.** Набор расположений, в которых был обнаружен результат ( не более 10). Следует включить только одно расположение, если проблему не получается исправить только внесением изменений в каждом указанном расположении. **Примечание.** Для отображения результата требуется по крайней мере одно расположение для {% data variables.product.prodname_code_scanning %}. {% data variables.product.prodname_code_scanning_capc %} будет использовать это свойство, чтобы определить, какой файл добавлять в заметки к результату. Используется только первое значение этого массива. Все остальные значения не учитываются.
| `partialFingerprints`| **Обязательный.** Набор строк, используемых для отслеживания уникального идентификатора результата. {% data variables.product.prodname_code_scanning_capc %} использует `partialFingerprints`, чтобы точно определить, какие результаты одинаковые в фиксациях и ветвях. {% data variables.product.prodname_code_scanning_capc %} попытается использовать `partialFingerprints`, если они существуют. Если вы отправляете сторонние файлы SARIF с помощью `upload-action`, то для вас действие создаст `partialFingerprints` (если их нет в файле SARIF). Дополнительные сведения см. в разделе [Предоставление данных для отслеживания оповещений сканирования кода во время выполнения](#providing-data-to-track-code-scanning-alerts-across-runs).  **Примечание.** {% data variables.product.prodname_code_scanning_capc %} использует только `primaryLocationLineHash`.
| `codeFlows[].threadFlows[].locations[]`| **Необязательный элемент.** Массив объектов `location` для объекта `threadFlow`, который описывает ход выполнения программы через поток выполнения. Объект `codeFlow` описывает шаблон выполнения кода для обнаружения результата. Если потоки кода предоставлены, {% data variables.product.prodname_code_scanning %} развернет потоки кода в {% data variables.product.prodname_dotcom %} для соответствующего результата. Дополнительные сведения см. в разделе [Объект `location`](#location-object).
| `relatedLocations[]`| Набор расположений, относящихся к этому результату. {% data variables.product.prodname_code_scanning_capc %} будет ссылаться на связанные расположения при их внедрении в результирующее сообщение. Дополнительные сведения см. в разделе [Объект `location`](#location-object).

### Объект `location`.

Расположение в артефакте программирования, например файл в репозитории или файл, созданный во время сборки.

| Имя | Описание |
|----|----|
| `location.id` | **Необязательный элемент.** Уникальный идентификатор, отличающий это расположение от всех остальных расположений в одном объекте результата. Допустимый диапазон для этого свойства от 0 до 2^63 – 1.
| `location.physicalLocation` | **Обязательный.** Идентифицирует артефакт и регион. Более подробную информацию см. в разделе [`physicalLocation`](#physicallocation-object).
| `location.message.text` | **Необязательный элемент.** Сообщение, соответствующее расположению.

### Объект `physicalLocation`.

| Имя | Описание |
|----|----|
| `artifactLocation.uri`| **Обязательный.** Универсальный код ресурса (URI), указывающий расположение артефакта, обычно это файл в репозитории или созданный во время сборки. Для достижения наилучших результатов рекомендуется использовать относительный путь из корня анализируемого репозитория GitHub. Например, `src/main.js`. Дополнительные сведения об URI артефактов см. [в разделе Указание корневого каталога для исходных файлов](#specifying-the-root-for-source-files).|
| `region.startLine` | **Обязательный.** Номер строки первого символа в регионе.
| `region.startColumn` | **Обязательный.** Номер столбца первого символа в регионе.
| `region.endLine` | **Обязательный.** Номер строки последнего символа в регионе.
| `region.endColumn` | **Обязательный.** Номер столбца символа, следующего за концом региона.

### Объект `runAutomationDetails`.

Объект `runAutomationDetails` содержит сведения, указывающие идентификатор выполнения.

{% note %}

**Примечание.** `runAutomationDetails` является объектом SARIF версии 2.1.0. Если вы используете {% data variables.product.prodname_codeql_cli %}, можно указать используемую версию SARIF. Эквивалентным объектом для `runAutomationDetails` является `<run>.automationId` для SARIF версии 1 и `<run>.automationLogicalId` для SARIF версии 2.

{% endnote %}

| Имя | Описание |
|----|----|
| `id`| **Необязательный элемент.** Строка, идентифицирующая категорию анализа и идентификатор выполнения. Используйте, если вы хотите передать несколько файлов SARIF для одного и того же средства и фиксации, но для разных языков или различных частей кода. |

Использование объекта `runAutomationDetails` не является обязательным.

Поле `id` может включать категорию анализа и идентификатор выполнения. Мы не используем элемент идентификатора выполнения в поле `id`, но сохраняем его.

Используйте эту категорию для различения нескольких анализов для одного и того же средства или фиксации, но для разных языков или различных элементов кода. Используйте идентификатор выполнения, чтобы определить конкретный запуск анализа, например дату запуска анализа.

`id` интерпретируется как `category/run-id`. Если `id` содержит косую черту (`/`), то вся строка является `run_id`, а `category` будет пустой. В противном случае `category` является все, что находится в строке до последней косой черты, а все, что после нее — `run_id`.

| `id` | категория | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _нет `run-id`_
| my-analysis for tool1 | _нет категории_ | my-analysis for tool1

- Выполнение с `id` для my-analysis/tool1/2021-02-01 относится к категории my-analysis/tool1. Предположительно, это запуск от 2 февраля 2021 г.
- Выполнение с `id` для my-analysis/tool1/ относится к категории my-analysis/tool1, но не отличается от других выполнений в этой категории.
- Выполнение, `id` которого является my-analysis for tool1, имеет уникальный идентификатор, но не может быть выводимым для принадлежности к какой-либо категории.

Дополнительные сведения об объекте `runAutomationDetails` и поле `id` см. в разделе [Объект runAutomationDetails](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479) в документации по OASIS.

Обратите внимание, что остальные поддерживаемые поля не учитываются.

## Примеры выходных файлов SARIF

В этих примерах выходных файлов SARIF отображаются поддерживаемые свойства и примеры значений.

### Пример с минимальными обязательными свойствами

Этот выходной файл SARIF содержит примеры значений для отображения минимальных обязательных свойств для результатов {% data variables.product.prodname_code_scanning %} для нормальной работы. Если удалить какие-либо свойства, опустить значения или использовать пустую строку, эти данные не будут отображаться правильно или синхронизироваться с {% data variables.product.prodname_dotcom %}. 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
                 "id" : "java/unsafe-deserialization",
                 "kind" : "path-problem",
                 "name" : "...",
                 "problem.severity" : "error",
                 "security-severity" : "9.8",
               }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### Пример, показывающий все поддерживаемые свойства SARIF

Этот выходной файл SARIF содержит примеры значений для отображения всех поддерживаемых свойств SARIF для {% data variables.product.prodname_code_scanning %}.

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": {
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```

