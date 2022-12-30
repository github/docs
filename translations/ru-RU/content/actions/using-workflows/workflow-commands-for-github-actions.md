---
title: Команды рабочего процесса для GitHub Actions
shortTitle: Workflow commands
intro: При выполнении команд оболочки в рабочем процессе или в коде действия можно использовать команды рабочего процесса.
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b34a96bb62a885031584f3da017fd86b7469a277
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160835'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Общие сведения о командах рабочего процесса

GitHub Actions могут связываться с компьютером выполнения, чтобы задавать переменные среды, выводить значения, используемые другими действиями, добавлять сообщения отладки в журналы выходных данных и выполнять другие задачи.

Большинство команд рабочего процесса используют команду `echo` в определенном формате, остальные вызываются путем записи в файл. Дополнительные сведения см. в разделе [Файлы среды](#environment-files).

### Пример

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Примечание.** В названиях команд рабочего процесса и параметров не учитывается регистр.

{% endnote %}

{% warning %}

**Предупреждение.** Если вы работаете с командной строкой, при использовании команд рабочего процесса не ставьте двойные кавычки (`"`).

{% endwarning %}

## Использование команд рабочего процесса для доступа к возможностям набора средств

В [actions/toolkit](https://github.com/actions/toolkit) содержится ряд функций, которые можно выполнять как команды рабочего процесса. Используйте синтаксис `::`, чтобы выполнить команды рабочего процесса в файле YAML. Затем они отправляются в средство выполнения через `stdout`.

{%- ifversion actions-save-state-set-output-envs %} Например, вместо использования кода для создания заметки об ошибке, как показано ниже:

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### Пример. Создание заметки для ошибки

Вы можете использовать `error` команду в рабочем процессе, чтобы создать ту же заметку об ошибке:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endpowershell %} {%- else %} Например, вместо использования кода для задания выходных данных, как показано ниже:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Пример: задание значения

Можно воспользоваться командой `set-output` в рабочем процессе, чтобы задать то же значение:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

{% endif %}

В следующей таблице перечислены функции набора средств, которые доступны в рабочем процессе:

| Функция набора средств | Аналогичная команда рабочего процесса |
| ----------------- |  ------------- |
| `core.addPath`    | Доступно с помощью файла среды `GITHUB_PATH` |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Доступно с помощью файла среды `GITHUB_ENV` |
| `core.getInput`   | Доступно с помощью переменной среды `INPUT_{NAME}` |
| `core.getState`   | Доступно с помощью переменной среды `STATE_{NAME}` |
| `core.isDebug`    |  Доступно с помощью переменной среды `RUNNER_DEBUG` |
{%- ifversion actions-job-сводки %} | `core.summary` | Доступ к файлам среды `GITHUB_STEP_SUMMARY` | {%- endif %} | `core.saveState`  | {% ifversion actions-save-state-set-output-envs %} Доступно с помощью файла `GITHUB_STATE`среды {% else %}`save-state`{% endif %} | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Используется в качестве ярлыка для `::error` и `exit 1` | | `core.setOutput`  | {% ifversion actions-save-state-set-output-envs %} Доступно с помощью файла `GITHUB_OUTPUT`среды {% else %}`set-output`{% endif %} | |`add-mask`  | `core.setSecret` | | | | `core.startGroup` | `group``core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %} {% else %}
## Задание параметра вывода

Задает параметр вывода действия.

```{:copy}
::set-output name={name}::{value}
```

При необходимости можно также объявить параметры вывода в файле метаданных действия. Дополнительные сведения см. в разделе [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions).

Можно экранировать многостроковые строки для задания выходного параметра, создав переменную среды и используя ее в команде рабочего процесса. Дополнительные сведения см. в разделе [Настройка переменной среды](#setting-an-environment-variable).

### Пример: задание параметра вывода

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %} {% endif %}

## Задание сообщения отладки

Записывает сообщение отладки в журнал. Чтобы просмотреть в журнале сообщения отладки, заданные этой командой, необходимо создать секрет под названием `ACTIONS_STEP_DEBUG` со значением `true`. Дополнительные сведения см. в статье ["Включение ведения журнала отладки"](/actions/managing-workflow-runs/enabling-debug-logging).

```{:copy}
::debug::{message}
```

### Пример: задание сообщения отладки

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

## Задание сообщения уведомления

Создает сообщение уведомления и записывает его в журнал. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Пример: задание сообщения уведомления

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Задание сообщения предупреждения

Создает сообщение предупреждения и записывает его в журнал. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Пример: задание сообщения предупреждения

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Задание сообщения об ошибке

Создает сообщение об ошибке и записывает его в журнал. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Пример: задание сообщения об ошибке

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Группировка строк журнала

Создает группу с возможностью развертывания в журнале. Чтобы создать группу, воспользуйтесь командой `group` и укажите `title`. Любые данные, которые вы введете между командами `group` и `endgroup`, будут вложены в расширяемую запись журнала.

```{:copy}
::group::{title}
::endgroup::
```

### Пример: группировка строк журнала

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![Свертываемая группа в журнале выполнения рабочего процесса](/assets/images/actions-log-group.png)

## Маскирование значения в журнале

```{:copy}
::add-mask::{value}
```

Маскирование значения предотвращает запись строки или переменной в журнал. Каждое замаскированное слово, отделенное пробелом, заменяется символом `*`. Для `value` маски можно использовать переменную среды или строку. Когда вы маскируете значение, оно обрабатывается как секрет и будет скрыто в средстве выполнения. Например, после маскирования значения вы не сможете задать его в качестве выходных данных.

### Пример: маскирование строки

Если вы введете в журнале `"Mona The Octocat"`, вы увидите `"***"`.

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

{% warning %}

**Предупреждение.** Прежде чем выводить секрет в журналы сборки или использовать его в других командах рабочего процесса, необходимо зарегистрировать секрет с помощью add-mask.

{% endwarning %}

### Пример: маскирование переменной среды

Если вы введете в журнале переменную `MY_NAME` или значение `"Mona The Octocat"`, вы увидите `"***"` вместо `"Mona The Octocat"`.

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## Остановка и запуск команд рабочего процесса

Останавливает обработку всех команд рабочего процесса. Эта специальная команда позволяет записывать в журнал любые данные без риска случайно запустить команду рабочего процесса. Например, можно остановить ведение журнала, чтобы вывести целый скрипт с комментариями.

```{:copy}
::stop-commands::{endtoken}
```

Чтобы остановить обработку команд рабочего процесса, передайте `stop-commands` уникальный маркер. Чтобы возобновить обработку команд рабочего процесса, передайте тот же маркер, с помощью которого вы остановили обработку.

{% warning %}

**Предупреждение.** Убедитесь, что используемый маркер создается случайным образом и является уникальным для каждого запуска.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Пример: остановка и запуск команд рабочего процесса

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %} {% else %}
## Отображение выходных данных команд

Включает или отключает отображение команд рабочего процесса. Например, если вы используете в рабочем процессе команду `set-output`, она задаст параметр вывода, но сама команда не будет отображаться в журнале выполнения рабочего процесса. Если включить отображение команд, в журнале появятся команды, например `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

Отображение команд отключено по умолчанию. Однако команда рабочего процесса отображается в журнале, если во время ее обработки возникли ошибки.

Команды `add-mask`, `debug`, `warning` и `error` не поддерживают отображение, поскольку их выходные данные уже выводятся в журнале.

Также можно включить глобальное отображение команд, включив пошаговое ведение журнала отладки с помощью секрета `ACTIONS_STEP_DEBUG`. Дополнительные сведения см. в статье ["Включение ведения журнала отладки"](/actions/managing-workflow-runs/enabling-debug-logging). Напротив, команда рабочего процесса `echo` позволяет включить более детальное отображение команд вместо его включения для каждого рабочего процесса в репозитории.

### Пример: переключение отображения команд

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

В примере выше в журнал записываются следующие строки:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Только вторая команда `set-output` и команда `echo` записываются в журнал, потому что отображение команд было включено во время их выполнения. Параметр вывода задается во всех случаях, даже если он не всегда отображается.
 
{% endif %}

## Отправка значений в предварительные и завершающие действия

{% ifversion actions-save-state-set-output-envs %} Вы можете создать переменные среды для совместного использования действий рабочего процесса `pre:` или `post:` действий, записав в файл , расположенный по адресу `GITHUB_STATE`{% else %}Вы можете использовать `save-state` команду для создания переменных среды для совместного `pre:` использования с действиями рабочего процесса или `post:` {% endif %}. Например, можно создать файл действием `pre:`, передать расположение файла действию `main:`, а затем использовать действие `post:` для удаления файла. Также можно создать файл действием `main:`, передать его расположение действию `post:` и с помощью этого же действия `post:` удалить файл.

Если у вас несколько `pre:` действий или `post:` , доступ к сохраненному значению можно получить только в действии, где {% ifversion actions-save-state-set-output-envs %}оно было записано `GITHUB_STATE`в {% else %}`save-state` использовалось{% endif %}. Дополнительные сведения о действиях типа `post:` см. в статье ["Синтаксис метаданных для {% data variables.product.prodname_actions %}"](/actions/creating-actions/metadata-syntax-for-github-actions#runspost).

{% ifversion actions-save-state-set-output-envs %} Файл `GITHUB_STATE` доступен только в действии{% else %}Команда `save-state` может выполняться только в рамках действия и недоступна для файлов YAML{% endif %}. Сохраненное значение хранится в виде значения среды с префиксом `STATE_`.

{% ifversion actions-save-state-set-output-envs %} В этом примере для записи в `GITHUB_STATE` файл используется JavaScript. Итоговая переменная среды называется `STATE_processID` со значением `12345`:

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} В этом примере для выполнения `save-state` команды используется JavaScript. Итоговая переменная среды называется `STATE_processID` со значением `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

Затем переменная `STATE_processID` становится доступной только скрипту очистки, который выполняется в рамках действия `main`. Этот пример выполняется в `main` и использует JavaScript для отображения значения, назначенного переменной среды `STATE_processID`:

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Файлы среды

Во время выполнения рабочего процесса средство выполнения создает временные файлы, с помощью которых можно совершать определенные действия. Путь к этим файлам предоставляется через переменные среды. Чтобы обеспечить правильную обработку команд, при записи в эти файлы понадобится кодировка UTF-8. В один файл можно записать несколько команд, разделенных новыми строками.

Большинство команд в следующих примерах используют двойные кавычки для повторения строк, которые будут пытаться интерполировать символы, например `$` для имен переменных оболочки. Чтобы всегда использовать литеральные значения в строках с кавычками, можно использовать одинарные кавычки.

{% powershell %}

{% note %}

**Примечание.** В PowerShell версии 5.1 и более ранних (`shell: powershell`) не используется UTF-8 по умолчанию, поэтому необходимо указать кодировку UTF-8. Пример:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

В PowerShell Core версии 6 и более поздних (`shell: pwsh`) используется кодировка UTF-8 по умолчанию. Пример:

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## Указание переменной среды

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- С PowerShell версии 6 и более поздних:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- С PowerShell версии 5.1 и более ранних:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

Можно создать переменную среды, доступную всем последующим шагам в задании рабочего процесса. Для этого необходимо определить или обновить переменную среды и записать ее в файл среды `GITHUB_ENV`. Шаг, на котором переменная среды создается или обновляется, не будет иметь доступа к новому значению, но доступ получат все последующие шаги в задании. Имена переменных среды задаются с учетом регистра и могут содержать знаки препинания. Дополнительные сведения см. в разделе [Переменные среды](/actions/learn-github-actions/environment-variables).

### Пример

{% bash %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### Многострочные строки

В многострочных строках можно использовать разделитель со следующим синтаксисом.

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

{% warning %}

**Предупреждение.** Убедитесь, что используемый разделитель создается случайным образом и является уникальным для каждого запуска. Дополнительные сведения см. в разделе "[Основные сведения о риске вставки данных в скрипты](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)".

{% endwarning %}

#### Пример

В этом примере в качестве разделителя используется `EOF`, а переменной среды `JSON_RESPONSE` задается значение ответа `curl`.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.com >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.com").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}
## Задание параметра вывода

Задает выходной параметр шага. Обратите внимание, что для последующего получения выходного `id` значения необходимо определить шаг .

{% bash %}

```bash{:copy}
echo "{name}={value}" >> $GITHUB_OUTPUT
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{name}=value" >> $env:GITHUB_OUTPUT
```

{% endpowershell %}

### Пример

{% bash %}

В этом примере показано, как задать выходной `SELECTED_COLOR` параметр и получить его позже:

{% raw %}
```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: echo "SELECTED_COLOR=green" >> $GITHUB_OUTPUT
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %} В этом примере показано, как задать выходной `SELECTED_COLOR` параметр и получить его позже:

```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: |
            "SELECTED_COLOR=green" >> $env:GITHUB_OUTPUT
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %} {% endif %}

{% ifversion actions-job-summaries %}

## Добавление сводки по заданию

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Для каждого задания можно задать пользовательский Markdown, который будет отображаться на странице сводок о выполнении рабочего процесса. С помощью сводок по заданиям можно отображать и группировать уникальное содержимое, например сводки по результатам тестов, чтобы при просмотре результатов выполнения рабочего процесса пользователю не приходилось открывать журналы для получения важной информации, такой как сбои.

Сводки по заданиям поддерживают [Markdown для {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/), и содержимое Markdown можно добавить в файл среды `GITHUB_STEP_SUMMARY` для каждого шага. `GITHUB_STEP_SUMMARY` является уникальным для каждого шага задания. Дополнительные сведения о файлах для каждого шага, на которые ссылается `GITHUB_STEP_SUMMARY`, см. в разделе ["Файлы среды"](#environment-files).

При завершении задания сводки по всем шагам группируются в единую сводку по заданию и отображаются на странице сводок о выполнении рабочего процесса. Если сводки создаются несколькими заданиями, они сортируются по времени завершения задания.

### Пример

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Пример сводки Markdown](/assets/images/actions-job-summary-simple-example.png)

### Многострочное содержимое Markdown

Для поддержки многострочного содержимого Markdown можно использовать `>>`, чтобы непрерывно добавлять содержимое на текущем шаге. С каждой операцией добавления автоматически вставляется символ новой строки.

#### Пример

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Перезапись сводок по заданиям

Для очистки всего содержимого на текущем шаге можно использовать `>`, чтобы перезаписать ранее добавленное содержимое.

#### Пример

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Удаление сводок по заданиям

Чтобы окончательно удалить сводку по текущему шагу, можно удалить файл, на который ссылается `GITHUB_STEP_SUMMARY`.

#### Пример

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

После завершения шага сводки по заданиям отправляются, и последующие шаги не могут изменить ранее отправленное содержимое Markdown. В сводках автоматически маскируются все секреты, которые могли в них случайно попасть. Если сводка по заданию содержит конфиденциальную информацию, которую необходимо удалить, можно удалить запуск рабочего процесса, чтобы удалить все его сводки. Дополнительные сведения см. в статье ["Удаление запуска рабочего процесса"](/actions/managing-workflow-runs/deleting-a-workflow-run).

### Разделение и ограничения шагов

Сводки по заданиям разделяются между шагами, а размер каждого шага не может превышать 1 МиБ. Разделение между шагами применяется для того, чтобы потенциально поврежденный Markdown одного шага не мог прервать вывод Markdown последующих шагов. Если для шага добавлено более 1 МиБ содержимого, отправка завершится сбоем и будет создана заметка об ошибке. Сбои отправки для сводок по заданиям не влияют на общее состояние шага или задания. Для каждого задания отображается не более 20 пошаговых сводок.

{% endif %}

## Добавление системного пути

Добавляет каталог к системной переменной `PATH` и автоматически открывает к ней доступ всем последующим действиям в текущем задании, кроме выполняемого в настоящий момент действия. Чтобы просмотреть определенные на текущий момент пути для задания, можно использовать `echo "$PATH"` в шаге или действии.

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### Пример

{% bash %}

В этом примере показывается, как добавить пользовательский каталог `$HOME/.local/bin` в `PATH`:

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

В этом примере показывается, как добавить пользовательский каталог `$env:HOMEPATH/.local/bin` в `PATH`:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
