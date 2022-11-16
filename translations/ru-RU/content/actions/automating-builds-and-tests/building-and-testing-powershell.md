---
title: Создание и тестирование для PowerShell
intro: Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования проекта PowerShell.
redirect_from:
  - /actions/guides/building-and-testing-powershell
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
authors:
  - potatoqualitee
type: tutorial
topics:
  - CI
  - PowerShell
shortTitle: Build & test PowerShell
ms.openlocfilehash: 572c2ee17c948f44a8f8e4006d3729498269a215
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180218'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве описано использование PowerShell для CI. Здесь описано, как использовать Pester, устанавливать зависимости, тестировать модуль и выполнять публикацию в коллекции PowerShell.

Размещенные в {% data variables.product.prodname_dotcom %} средства выполнения имеют кэш инструментов с предварительно установленным программным обеспечением, включающим в себя PowerShell и Pester. 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %}Полный список актуального программного обеспечения и предварительно установленных версий PowerShell и Pester см. в разделе [Спецификации для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Предварительные требования

Требуются знания YAML и синтаксиса {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Рекомендуется иметь базовое представление о PowerShell и Pester. Дополнительные сведения см. в разделе:
- [Начало работы с PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Добавление рабочего процесса для Pester

Чтобы автоматизировать тестирование с помощью PowerShell и Pester, можно добавить рабочий процесс, который запускается при каждой отправке изменения в репозиторий. В следующем примере `Test-Path` используется для проверки наличия файла `resultsfile.log`.

Этот пример файла рабочего процесса необходимо добавить в каталог `.github/workflows/` репозитория:

```yaml
name: Test PowerShell on Ubuntu
on: push

jobs:
  pester-test:
    name: Pester test
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Perform a Pester test from the command-line
        shell: pwsh
        run: Test-Path resultsfile.log | Should -Be $true
      - name: Perform a Pester test from the Tests.ps1 file
        shell: pwsh
        run: |
          Invoke-Pester Unit.Tests.ps1 -Passthru
```

* `shell: pwsh` — настраивает задание для использования PowerShell при выполнении команд `run`.
* `run: Test-Path resultsfile.log` — проверяет, присутствует ли файл `resultsfile.log` в корневом каталоге репозитория.
* `Should -Be $true` — использует Pester для определения ожидаемого результата. Если получен непредвиденный результат, {% data variables.product.prodname_actions %} помечает этот тест как неудачный. Пример:

  
  ![Неудачный тест Pester](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` — использует Pester для выполнения тестов, определенных в файле `Unit.Tests.ps1`. Например, чтобы выполнить тест, аналогичны описанному выше, `Unit.Tests.ps1` будет содержать следующее:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## Расположения модулей PowerShell

В приведенной ниже таблице описаны расположения расположений для разных модулей PowerShell в каждом размещенном в {% data variables.product.prodname_dotcom %} средстве выполнения.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**Системные модули PowerShell** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**Модули надстроек PowerShell**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**Устанавливаемые пользователем модули**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## Установка зависимостей

Для размещенных в {% data variables.product.prodname_dotcom %} средств выполнения установлены PowerShell 7 и Pester. Вы можете использовать `Install-Module` для установки дополнительных зависимостей из коллекции PowerShell перед созданием и тестированием кода.

{% note %}

**Примечание**. Предварительно установленные пакеты (например, Pester), используемые размещенными в {% data variables.product.prodname_dotcom %} средствами выполнения, регулярно обновляются и могут вносить существенные изменения. Поэтому рекомендуется всегда указывать необходимые версии пакетов, используя `Install-Module` с `-MaximumVersion`.

{% endnote %}

{% ifversion actions-caching %}Можно также кэшировать зависимости, чтобы ускорить рабочий процесс. Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

Например, следующее задание устанавливает модули `SqlServer` и `PSScriptAnalyzer`:

```yaml
jobs:
  install-dependencies:
    name: Install dependencies
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install from PSGallery
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module SqlServer, PSScriptAnalyzer
```

{% note %}

**Примечание**. По умолчанию никакие репозитории не являются доверенными для PowerShell. При установке модулей из коллекции PowerShell необходимо явно задать для политики установки `PSGallery` значение `Trusted`.

{% endnote %}

{% ifversion actions-caching %}

### Кэширование зависимостей

Зависимости PowerShell можно кэшировать с помощью уникального ключа, что позволяет восстановить зависимости для будущих рабочих процессов посредством действия [`cache`](https://github.com/marketplace/actions/cache). Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

PowerShell кэширует свои зависимости в разных расположениях в зависимости от операционной системы средства выполнения. Например, расположение `path`, используемое в следующем примере Ubuntu, будет отличаться от расположения в операционной системе Windows.

```yaml
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Setup PowerShell module cache
    id: cacher
    uses: {% data reusables.actions.action-cache %}
    with:
      path: "~/.local/share/powershell/Modules"
      key: {% raw %}${{ runner.os }}-SqlServer-PSScriptAnalyzer{% endraw %}
  - name: Install required PowerShell modules
    if: steps.cacher.outputs.cache-hit != 'true'
    shell: pwsh
    run: |
      Set-PSRepository PSGallery -InstallationPolicy Trusted
      Install-Module SqlServer, PSScriptAnalyzer -ErrorAction Stop
```

{% endif %}

## Тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде.

### Использование PSScriptAnalyzer для анализа кода

В следующем примере выполняется установка `PSScriptAnalyzer` и его использование для анализа кода всех файлов `ps1` в репозитории. Дополнительные сведения см. в разделе [PSScriptAnalyzer на сайте GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

```yaml
  lint-with-PSScriptAnalyzer:
    name: Install and run PSScriptAnalyzer
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Lint with PSScriptAnalyzer
        shell: pwsh
        run: |
          Invoke-ScriptAnalyzer -Path *.ps1 -Recurse -Outvariable issues
          $errors   = $issues.Where({$_.Severity -eq 'Error'})
          $warnings = $issues.Where({$_.Severity -eq 'Warning'})
          if ($errors) {
              Write-Error "There were $($errors.Count) errors and $($warnings.Count) warnings total." -ErrorAction Stop
          } else {
              Write-Output "There were $($errors.Count) errors and $($warnings.Count) warnings total."
          }
```

## Упаковка данных рабочего процесса в виде артефактов

Вы можете отправить артефакты для просмотра после завершения рабочего процесса. Например, может потребоваться сохранить файлы журналов, основные дампы, результаты теста или снимки экрана. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

В следующем примере показано, как использовать действие `upload-artifact` для архивации результатов теста, полученных из `Invoke-Pester`. Дополнительные сведения см. в описании [действия `upload-artifact`](https://github.com/actions/upload-artifact).

```yaml
name: Upload artifact from Ubuntu

on: [push]

jobs:
  upload-pester-results:
    name: Run Pester and upload results
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Test with Pester
        shell: pwsh
        run: Invoke-Pester Unit.Tests.ps1 -Passthru | Export-CliXml -Path Unit.Tests.xml
      - name: Upload test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: ubuntu-Unit-Tests
          path: Unit.Tests.xml
    if: {% raw %}${{ always() }}{% endraw %}
```

Функция `always()` настраивает задание для продолжения обработки даже при наличии сбоев тестов. Дополнительные сведения см. в описании [always](/actions/reference/context-and-expression-syntax-for-github-actions#always).

## Публикация в коллекции PowerShell

Вы можете настроить рабочий процесс для публикации модуля PowerShell в коллекции PowerShell после прохождения тестов CI. Вы можете использовать секреты для хранения любых маркеров или учетных данных, необходимых для публикации пакета. Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

В следующем примере создается пакет, и используется `Publish-Module` для его публикации в коллекции PowerShell:

```yaml
name: Publish PowerShell Module

on:
  release:
    types: [created]

jobs:
  publish-to-gallery:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build and publish
        env:
          NUGET_KEY: {% raw %}${{ secrets.NUGET_KEY }}{% endraw %}
        shell: pwsh
        run: |
          ./build.ps1 -Path /tmp/samplemodule
          Publish-Module -Path /tmp/samplemodule -NuGetApiKey $env:NUGET_KEY -Verbose
```
