---
title: Мониторинг и устранение неполадок в самостоятельно размещенных средствах выполнения
intro: 'Локальные средства выполнения можно отслеживать, чтобы просматривать их действия и выявлять распространенные проблемы.'
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
miniTocMaxHeadingLevel: 3
defaultPlatform: linux
shortTitle: Monitor & troubleshoot
ms.openlocfilehash: 3cc3399ef889e898d172a78425b6b3e59fe60ec4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094068'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Проверка состояния локального средства выполнения тестов

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. В разделе "Средства выполнения" можно просмотреть список зарегистрированных средств выполнения, включая их имена, метки и состояние.

    Состояние может принимать следующие значения.

    * **Бездействие**: средство выполнения тестов подключено к {% data variables.product.product_name %} и готово к выполнению заданий.
    * **Активно**: средство выполнения тестов в настоящее время выполняет задание.
    * **Автономный режим**: средство выполнения тестов не подключено к {% data variables.product.product_name %}. Это может быть связано с тем, что компьютер находится в автономном режиме, приложение локального средства выполнения тестов не запущено на компьютере или приложение локального средства выполнения тестов не может обмениваться данными с {% data variables.product.product_name %}.

## Устранение неполадок сетевого подключения

### Проверка сетевого подключения локального средства выполнения тестов

Вы можете использовать сценарий локального приложения `run` runner с `--check` параметром, чтобы убедиться, что локальный модуль выполнения может получить доступ ко всем необходимым сетевым службам в {% данных variables.location.product_location %}.

В дополнение к `--check` в скрипте необходимо указать два аргумента:

* `--url` с URL-адресом репозитория, организации или предприятия {% data variables.product.company_short %}. Например, `--url https://github.com/octo-org/octo-repo`.
* `--pat` со значением {% данных variables.product.pat_v1 %}, которые должны иметь `workflow` область{% ifversion pat-v2%}, или {% данных variables.product.pat_v2 %} с рабочими процессами с доступом на чтение и запись {% endif %}. Например, `--pat ghp_abcd1234`. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Пример:

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url https://github.com/YOUR-ORG/YOUR-REPO --pat GHP_ABCD1234
```

{% endwindows %}

Скрипт тестирует каждую службу и выводит либо `PASS`, либо `FAIL` для каждой из них. Если не удалось пройти какие-либо проверки, вы можете просмотреть дополнительные сведения о проблеме в файле журнала для проверки. Файлы журнала находятся в каталоге `_diag`, в котором установлено приложение средства выполнения тестов, а путь к файлу журнала для каждой проверки отображается в выходных данных консоли скрипта.

Если не удалось пройти какие-либо проверки, необходимо также убедиться в том, что компьютер локального средства выполнения тестов соответствует всем требованиям для обмена данными. Дополнительные сведения см. в разделе «[Локальные средства выполнения тестов](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements)».

### Отключение проверки сертификата TLS
{% ifversion ghes %} По умолчанию приложение локального средства выполнения тестов проверяет сертификат TLS для {% data variables.product.product_name %}.  Если {% data variables.product.product_name %} имеет самозаверяющий или выпущенный для внутреннего использования сертификат, может потребоваться отключить проверку сертификата TLS для целей тестирования.
{% else %} По умолчанию приложение локального средства выполнения тестов проверяет сертификат TLS для {% data variables.product.product_name %}.  При возникновении проблем с сетью может потребоваться отключить проверку сертификата TLS для целей тестирования.
{% endif %}

Чтобы отключить проверку сертификата TLS в приложении локального средства выполнения тестов, задайте для переменной среды `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` значение `1` перед настройкой и запуском приложения локального средства выполнения тестов.

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

{% warning %}

**Предупреждение**. Не рекомендуется отключать проверку TLS, так как TLS обеспечивает конфиденциальность и целостность данных между приложением локального средства выполнения тестов и {% data variables.product.product_name %}. Рекомендуется установить в хранилище сертификатов операционной системы сертификат {% data variables.product.product_name %} для локального средства выполнения тестов. Для получения инструкций по установке сертификата {% data variables.product.product_name %} обратитесь к своему поставщику операционной системы.

{% endwarning %}

## Просмотр файлов журнала приложений локального средства выполнения тестов

Вы можете отслеживать состояние приложения локального средства выполнения тестов и его действия. Файлы журнала хранятся в каталоге `_diag`, в котором установлено приложение средства выполнения тестов, и при каждом запуске приложения создается новый журнал. Имя файла начинается со слова *Runner_* , за которым следует метка времени в формате UTC, отражающая время запуска приложения.

Подробные журналы выполнения заданий рабочего процесса см. в следующем разделе, содержащем описание файлов *Worker_* .

## Просмотр файла журнала задания

Приложение локального средства выполнения тестов создает подробный файл журнала для каждого обрабатываемого задания. Эти файлы хранятся в каталоге `_diag`, в котором установлено приложение средства выполнения тестов, а имя файла начинается со слова *Worker_* .

{% linux %}

## Проверка службы приложения локального средства выполнения тестов с помощью journalctl

Для локальных средств выполнения тестов на основе Linux, запускающих приложение с помощью службы, можно использовать `journalctl` для отслеживания их действий в реальном времени. В службе на основе systemd по умолчанию используется следующее соглашение об именовании: `actions.runner.<org>-<repo>.<runnerName>.service`. Это имя усекается, если превышает 80 символов, поэтому предпочтительный способ поиска имени службы — проверка файла _.service_. Пример:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Если сделать это не удается из-за того, что служба установлена в другом месте, имя службы можно найти в списке запущенных служб. Например, в большинстве систем Linux можно использовать команду `systemctl`:

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

Можно использовать `journalctl` для мониторинга действий локального средства выполнения тестов в реальном времени:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

В этом примере выходных данных можно посмотреть запуск `runner01`, получить задание с именем `testAction`, а затем отобразить итоговое состояние:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

Чтобы просмотреть конфигурацию`systemd`, можно найти файл службы здесь: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
Если требуется настроить службу приложения локального средства выполнения тестов, не изменяйте этот файл напрямую. Выполните инструкции, описанные в разделе «[Настройка приложения средства выполнения тестов в качестве службы](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)».

{% endlinux %}

{% mac %}

## Проверка службы приложения локального средства выполнения тестов с помощью `launchd`

Для локальных средств выполнения тестов на основе macOS, запускающих приложение как службу, можно использовать `launchctl` для отслеживания их действий в реальном времени. В службе на основе launchd по умолчанию используется следующее соглашение об именовании: `actions.runner.<org>-<repo>.<runnerName>`. Это имя усекается, если превышает 80 символов, поэтому предпочтительный способ поиска имени службы — проверка файла _.service_ в каталоге средства выполнения тестов:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

Скрипт `svc.sh` использует `launchctl`, чтобы проверить, запущено ли приложение. Пример:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

Итоговые выходные данные содержат идентификатор процесса и имя службы приложения `launchd`.

Чтобы просмотреть конфигурацию`launchd`, можно найти файл службы здесь: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
Если требуется настроить службу приложения локального средства выполнения тестов, не изменяйте этот файл напрямую. Выполните инструкции, описанные в разделе «[Настройка приложения средства выполнения тестов в качестве службы](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)».

{% endmac %}

{% windows %}

## Проверка службы приложения локального средства выполнения тестов с помощью PowerShell.

Для локальных средств выполнения тестов на основе Windows, запускающих приложение как службу, можно использовать PowerShell для отслеживания их действий в реальном времени. Служба использует соглашение об именовании `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. Чтобы найти имя службы, можно также проверить файл _.service_ в каталоге средства выполнения тестов:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Состояние средства выполнения тестов можно посмотреть в приложении Windows _Services_ (`services.msc`). PowerShell также можно использовать, чтобы проверить, запущена ли служба:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

PowerShell можно использовать для проверки недавних действий локального средства выполнения тестов. В этом примере выходных данных можно посмотреть запуск приложения, получить задание с именем `testAction`, а затем отобразить итоговое состояние:

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

{% endwindows %}

## Мониторинг процесса автоматического обновления

Рекомендуется регулярно проверять процесс автоматического обновления, так как локальное средство выполнения тестов не сможет обработать задания, если он опустится ниже определенного порогового значения версии. Приложение локального средства выполнения тестов обновляется автоматически, однако обратите внимание, что этот процесс не включает обновления операционной системы или другого программного обеспечения; требуется отдельное управление этими обновлениями.

Действия обновления можно просмотреть в файлах журнала *Runner_* . Пример:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

Кроме того, дополнительные сведения представлены в файлах журнала _SelfUpdate_, расположенных в каталоге `_diag`, где установлено приложение средства выполнения тестов.

{% linux %}

## Устранение неполадок контейнеров в локальных средствах выполнения тестов

### Проверка установки платформы Docker

Если для выполнения заданий требуются контейнеры, то необходимо использовать локальное средство выполнения тестов на основе Linux и установить Docker. Убедитесь, что в локальном средстве выполнения тестов установлена платформа Docker и что служба запущена.

Для проверки состояния службы можно использовать `systemctl`:

```shell
$ sudo systemctl is-active docker.service
active
```

Если платформа Docker не установлена, зависимые действия будут завершаться сбоем со следующими ошибками:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Проверка разрешений Docker

Если задание завершается сбоем со следующей ошибкой:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Убедитесь, что учетной записи службы локального средства выполнения тестов предоставлено разрешение на использование службы Docker. Чтобы определить эту учетную запись, проверьте конфигурацию локального средства выполнения тестов в `systemd`. Например:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## Разрешение модулей выполнения, которые находятся в автономном режиме после обновления {% данных variables.location.product_location %}

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

Если средства выполнения находятся в автономном режиме по этой причине, обновите их вручную. Дополнительные сведения см. в инструкциях по установке [последнего выпуска](https://github.com/actions/runner/releases/latest) в репозитории actions/runner.
{% endif %}

### Проверка того, какой модуль Docker установлен в средстве выполнения

Если сборка завершается сбоем со следующей ошибкой:

```shell
Error: Input required and not supplied: java-version
```

Проверьте, какой модуль Docker установлен на локальном средстве выполнения. Чтобы передать входные данные действия в контейнер Docker, средство выполнения использует переменные среды, которые могут содержать дефисы в составе их имен. Действие может не получить входные данные, если подсистема Docker не является двоичным исполняемым файлом, а является оболочкой оболочки или ссылкой (например, подсистема Docker, установленная в Linux с помощью `snap`). Чтобы устранить эту ошибку, настройте локальное средство выполнения для использования другого обработчика Docker. 

Чтобы проверить, установлен ли модуль Docker, используйте `snap``which` команду. В следующем примере подсистема Docker была установлена с помощью `snap`:

```shell
$ which docker
/snap/bin/docker
```
