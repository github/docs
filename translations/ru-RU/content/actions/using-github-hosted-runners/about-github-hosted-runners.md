---
title: 'О средствах выполнения, размещенных в GitHub'
shortTitle: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} предлагает размещенные виртуальные машины для выполнения рабочих процессов. Виртуальная машина содержит среду инструментов, пакетов и параметров, доступных для использования в {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
ms.openlocfilehash: f44c5bcf8c6cc9c48a2910d2a0d371087debd158
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180688'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор средств выполнения, размещенных на {% data variables.product.prodname_dotcom %}

Средства выполнения — это компьютеры, выполняющие задания в рабочем процессе {% data variables.product.prodname_actions %}. Например, средство выполнения может клонировать репозиторий локально, установить тестовое программное обеспечение, а затем выполнить команды, которые оценивают код. 

{% data variables.product.prodname_dotcom %} предоставляет средства выполнения, которые можно использовать для выполнения заданий или [размещения собственных средств выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners). Каждое средство выполнения, размещенное на {% data variables.product.prodname_dotcom %}, — это новая виртуальная машина, размещенная на {% data variables.product.prodname_dotcom %}, с предварительно установленным приложением средства выполнения и другими средствами. Эта виртуальная машина может работать на Ubuntu Linux, Windows или macOS. Если вы используете средство выполнения, размещенное в {% data variables.product.prodname_dotcom %}, обслуживание и обновление компьютера будет делаться за вас.

{% ifversion not ghes %}

## Использование средства выполнения, размещенного на {% data variables.product.prodname_dotcom %}

Чтобы использовать средство выполнения, размещенное на {% data variables.product.prodname_dotcom %}, создайте задание и используйте `runs-on`, чтобы указать тип средства выполнения, обрабатывающего задание, например `ubuntu-latest`, `windows-latest` или `macos-latest`. Полный список типов средств выполнения см. в разделе [Поддерживаемые средства выполнения и аппаратные ресурсы](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

При запуске задания {% data variables.product.prodname_dotcom %} автоматически подготавливает новую виртуальную машину для этого задания. Все шаги в задании выполняются на виртуальной машине, а значит могут обмениваться информацией через файловую систему средства выполнения. Вы можете запускать рабочие процессы непосредственно на виртуальной машине или в контейнере Docker. По завершении задания виртуальная машина будет автоматически завершена.

На следующей схеме показано, как два задания в рабочем процессе выполняются в двух разных средствах выполнения, размещенных на {% data variables.product.prodname_dotcom %}. 

![Два средства выполнения обрабатывают отдельные задания](/assets/images/help/images/overview-github-hosted-runner.png)

В следующем примере рабочего процесса есть два задания: `Run-npm-on-Ubuntu` и `Run-PSScriptAnalyzer-on-Windows`. При активации этого рабочего процесса {% data variables.product.prodname_dotcom %} подготавливает новую виртуальную машину для каждого задания. 

- Задание `Run-npm-on-Ubuntu` выполняется на виртуальной машине Linux, так как для параметра `runs-on:` в задании указано `ubuntu-latest`. 
- Задание `Run-PSScriptAnalyzer-on-Windows` выполняется на виртуальной машине Windows, так как для параметра `runs-on:` в задании указано `windows-latest`. 

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

Во время выполнения задания журналы и выходные данные можно просмотреть в пользовательском интерфейсе {% data variables.product.prodname_dotcom %}:

![Выходные данные задания в пользовательском интерфейсе Actions](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## Поддерживаемые средства выполнения и аппаратные ресурсы

{% ifversion actions-hosted-runners %}

{% note %}

**Примечание.** {% data variables.product.prodname_dotcom %} также предлагает {% data variables.actions.hosted_runner %}, которые доступны в более крупных конфигурациях. Дополнительные сведения см. в разделе [Спецификации компьютера для {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners#machine-specs-for-larger-runners).  

{% endnote %} {% endif %}

Спецификация оборудования для виртуальных машин Windows и Linux:
- Двухъядерный ЦП (x86_64)
- 7 ГБ ОЗУ
- 14 ГБ пространства SSD

Спецификация оборудования для виртуальных машин macOS:
- Трехъядерный ЦП (x86_64)
- 14 ГБ ОЗУ
- 14 ГБ пространства SSD

{% data reusables.actions.supported-github-runners %}

В журналах рабочих процессов указывается средство выполнения, использовавшееся для запуска задания. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Поддерживаемое программное обеспечение

Программные инструменты, которые включены в средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}, обновляются еженедельно. Процесс обновления занимает несколько дней, а список предустановленного программного обеспечения в ветви `main` обновляется после завершения всего развертывания.

### Предустановленное программное обеспечение

Журналы рабочих процессов включают ссылку на предустановленные инструменты в точном средстве выполнения. Чтобы найти эти сведения в журнале рабочего процесса, разверните раздел `Set up job`. В этом разделе разверните раздел `Runner Image`. Ссылка, следующая за `Included Software`, описывает предустановленные инструменты в средстве выполнения, которое выполняло рабочий процесс.
![Ссылка на установленное программное обеспечение](/assets/images/actions-runner-installed-software-link.png) Дополнительные сведения см. в разделе [Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history).

Общий список включенных инструментов для каждой операционной системы средства выполнения см. по ссылкам ниже.

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md) (не рекомендуется)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

Средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}, включают встроенные инструменты операционной системы по умолчанию в дополнение к пакетам, перечисленным в приведенных выше ссылках. Например, средства выполнения Ubuntu и macOS включают `grep`, `find`, `which` и другие инструменты по умолчанию. 

### Использование предустановленного программного обеспечения

Для взаимодействия с программным обеспечением, установленным в средствах выполнения, рекомендуется использовать действия. Такой подход имеет несколько преимуществ.
- Как правило, действия предоставляют более гибкие функциональные возможности, такие как выбор версий, возможность передачи аргументов и параметры.
- Он гарантирует, что версии инструментов, используемые в рабочем процессе, останутся неизменными независимо от обновлений программного обеспечения.

Если вы хотите запросить какой-либо инструмент, откройте проблему в разделе [actions/runner-images](https://github.com/actions/runner-images). Этот репозиторий также содержит объявления обо всех основных обновлениях программного обеспечения для средств выполнения.

### Установка дополнительного программного обеспечения

Вы можете устанавливать дополнительное программное обеспечение на средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Настройка средств выполнения, размещенных в GitHub](/actions/using-github-hosted-runners/customizing-github-hosted-runners).

## Облачные узлы, используемые средствами выполнения, размещенными в {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} размещает средства выполнения Linux и Windows на виртуальных машинах `Standard_DS2_v2` в Microsoft Azure с установленным приложением средства выполнения {% data variables.product.prodname_actions %}. Приложение средства выполнения, размещенного в {% data variables.product.prodname_dotcom %}является вилкой агента Azure Pipelines. Входящие пакеты ICMP блокируются для всех виртуальных машин Azure, поэтому команды проверки связи или traceroute могут не работать. Дополнительные сведения о ресурсах `Standard_DS2_v2` см. в разделе [Серии Dv2 и DSv2](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series) в документации Microsoft Azure.

{% data variables.product.prodname_dotcom %} размещает средства выполнения macOS в облаке macOS, принадлежащем {% data variables.product.prodname_dotcom %}.

## Непрерывность рабочих процессов

{% data reusables.actions.runner-workflow-continuity %}

Кроме того, если выполнение рабочего процесса успешно поставлено в очередь, но не обработано средством выполнения, размещенным в {% data variables.product.prodname_dotcom %}, в течение 45 минут, запуск рабочего процесса в очереди отменяется.

## Права администратора

Виртуальные машины Linux и macOS работают с использованием `sudo` без пароля. Если необходимо выполнить команды или установить средства, требующие больше привилегий, чем имеется у текущего пользователя, можно использовать `sudo` без необходимости вводить пароль. Дополнительные сведения см. в [руководстве по sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html).

Виртуальные машины Windows настроены для запуска от имени администраторов с отключенной функцией контроля учетных записей (UAC). Дополнительные сведения см. в разделе [Принцип работы контроля учетных записей пользователей](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works) в документации Windows.

## IP-адреса

{% note %}

**Примечание.** Если вы используете список разрешенных IP-адресов для учетной записи вашей организации или предприятия {% data variables.product.prodname_dotcom %}, то не можете использовать средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}. Вместо них вы должны использовать локальные средства выполнения. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Получить список диапазонов IP-адресов, которые используются {% data variables.product.prodname_actions %} для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}, можно с помощью REST API {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в ключе `actions` в ответе конечной точки [Получение метаданных GitHub](/rest/reference/meta#get-github-meta-information).

Средства выполнения Windows и Ubuntu размещаются в Azure и, следовательно, имеют те же диапазоны IP-адресов, что и центры обработки данных Azure. Средства выполнения macOS размещаются в облаке macOS, принадлежащем {% data variables.product.prodname_dotcom %}.

Так как существует много диапазонов IP-адресов для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}, не рекомендуется использовать их в качестве списков разрешенных IP-адресов для внутренних ресурсов.

Список IP-адресов {% data variables.product.prodname_actions %}, возвращаемых API, обновляется раз в неделю. 

## Файловые системы

{% data variables.product.prodname_dotcom %} выполняет действия и команды оболочки в определенных каталогах на виртуальной машине. Пути к файлам на виртуальных машинах не являются статическими. Используйте переменные среды, предоставляемые {% data variables.product.prodname_dotcom %}, для создания путей к файлам в каталогах `home`, `workspace`и `workflow`.

| Каталог | Переменная среды | Описание |
|-----------|----------------------|-------------|
| `home` | `HOME` | Содержит данные, связанные с пользователем. Например, этот каталог может содержать учетные данные из попытки входа. |
| `workspace` | `GITHUB_WORKSPACE` | В этом каталоге выполняются действия и команды оболочки. Действие может изменить содержимое этого каталога, к которому могут обращаться последующие действия. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | Полезные данные `POST` события веб-перехватчика, которое активировало рабочий процесс. {% data variables.product.prodname_dotcom %} перезаписывает их каждый раз при выполнении действия для изоляции содержимого файла между действиями.

Список переменных среды, которые {% data variables.product.prodname_dotcom %} создает для каждого рабочего процесса, см. в разделе [Использование переменных среды](/github/automating-your-workflow-with-github-actions/using-environment-variables).

### Файловая система контейнера Docker

Действия, выполняемые в контейнерах Docker, имеют статические каталоги по пути `/github`. Однако мы настоятельно рекомендуем использовать переменные среды по умолчанию для создания путей к файлам в контейнерах Docker.

{% data variables.product.prodname_dotcom %} резервирует префикс пути `/github` и создает три каталога для действий.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## Дополнительные материалы
- [Управление выставлением счетов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)
- Вы можете использовать стратегию матрицы для выполнения заданий с несколькими образами. Дополнительные сведения см. в разделе [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

{% endif %}
