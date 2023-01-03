---
title: Устранение неполадок GitHub Actions для предприятия
intro: 'Устранение распространенных проблем, возникающих при использовании {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107304'
---
## Проверка работоспособности {% data variables.product.prodname_actions %}

Вы можете проверить работоспособность {% данных variables.product.prodname_actions %} на {% данных variables.location.product_location %} с помощью программы командной `ghe-actions-check` строки. Дополнительные сведения см. в разделах [Служебные программы командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check) и [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

## Настройка локальных средств выполнения при использовании самозаверяющего сертификата для {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Дополнительные сведения см. в разделе [Настройка TLS](/admin/configuration/configuring-tls).

### Установка сертификата на компьютере средства выполнения

Для подключения локального средства выполнения к {% data variables.product.prodname_ghe_server %} с помощью самозаверяющего сертификата необходимо установить сертификат на компьютере средства выполнения, чтобы усилить защиту подключения.

Инструкции по установке сертификата см. в документации по операционной системе средства выполнения.

### Настройка Node.JS для использования сертификата

Большинство действий пишутся на JavaScript и выполняются с помощью Node.js, так что хранилище сертификатов операционной системы не используется. Чтобы локальное приложение средства выполнения использовало сертификат, необходимо задать переменную среды `NODE_EXTRA_CA_CERTS` на компьютере средства выполнения.

Переменную среды можно задать как системную или объявить в файле _ENV_ в каталоге приложения локального средства выполнения.

Пример:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Переменные среды считываются при запуске приложения локального средства выполнения, поэтому перед настройкой или запуском этого приложения необходимо задать переменную среды. При изменении конфигурации сертификата необходимо перезапустить приложение локального средства выполнения.

### Настройка контейнеров Docker для использования сертификата

Если в рабочих процессах используются действия контейнеров Docker или контейнеры служб, возможно, потребуется также установить сертификат в образе Docker в дополнение к описанному выше заданию переменной среды.

## Настройка параметров прокси-сервера HTTP для {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Если эти параметры настроены неправильно, при настройке или изменении конфигурации {% data variables.product.prodname_actions %} могут возникнуть такие ошибки, как `Resource unexpectedly moved to https://<IP_ADDRESS>`.

## Средства выполнения не подключаются к {% data variables.product.prodname_ghe_server %} с новым именем узла

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

Если вы развертываете {% data variables.product.prodname_ghe_server %} в среде с новым именем узла и старое имя узла больше не разрешается в экземпляр, локальные средства выполнения не смогут подключиться к старому имени узла и не будут выполнять задания.

Необходимо обновить конфигурацию локальных средств выполнения, чтобы использовать новое имя узла для {% данных variables.location.product_location %}. Для каждого локального средства выполнения потребуется выполнить одну из описанных ниже процедур.

* В каталоге приложения локального средства выполнения измените файлы `.runner` и `.credentials`, заменив все упоминания старого имени узла новым именем узла, а затем перезапустите приложение локального средства выполнения.
* Удалите средство выполнения из {% data variables.product.prodname_ghe_server %} с помощью пользовательского интерфейса и добавьте его повторно. Дополнительные сведения см. в разделах [Удаление локальных средств выполнения](/actions/hosting-your-own-runners/removing-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

## Зависание заданий, ограничения на использование памяти и загрузку ЦП в {% data variables.product.prodname_actions %}

{% данных variables.product.prodname_actions %} состоит из нескольких служб, работающих на {% данных variables.location.product_location %}. По умолчанию для этих служб настроены ограничения на использование ЦП и памяти по умолчанию, которые подходят для большинства случаев. Однако при активном использовании {% data variables.product.prodname_actions %} может потребоваться настроить эти параметры.

Если вы замечаете, что задания не запускаются (хотя есть бездействующие средства выполнения) или ход выполнения задания не обновляется в пользовательском интерфейсе, возможно, достигнуты ограничения на использование ЦП или памяти.

### 1. Проверка общего использования ЦП и памяти в консоли управления

Откройте консоль управления и используйте панель мониторинга для проверки графиков общего потребления ресурсов ЦП и памяти в разделе "Работоспособность системы". Дополнительные сведения см. в разделе [Доступ к панели мониторинга](/admin/enterprise-management/accessing-the-monitor-dashboard).

Если общее использование ЦП "Работоспособность системы" близко к 100 %, или не осталось свободной памяти, то {% данных variables.location.product_location %} выполняется в емкости и необходимо увеличить масштаб. Дополнительные сведения см. в разделе [Увеличение объема ресурсов ЦП или памяти](/admin/enterprise-management/increasing-cpu-or-memory-resources).

### 2. Проверка использования ЦП и памяти заданиями Nomad в консоли управления

Если общий уровень использования ЦП и памяти в разделе "Работоспособность системы" в порядке, прокрутите страницу панели мониторинга вниз до раздела "Задания Nomad" и просмотрите графики "Процент загрузки ЦП" и "Использование памяти".

Каждый график соответствует одной службе. Для служб {% data variables.product.prodname_actions %} обратите внимание на следующее:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Если какие-либо из служб имеют уровень загрузки ЦП 100 % или близко к этому либо если память почти исчерпана (объем по умолчанию 2 ГБ), то, возможно, необходимо выделить дополнительные ресурсы для этих служб. Запишите службы, для которых достигнут или почти достигнут предел ресурсов.

### 3. Увеличение объема ресурсов, выделенных для служб с исчерпанными ресурсами

1. Войдите в административную оболочку с помощью SSH. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
1. Выполните следующую команду, чтобы узнать, какие ресурсы доступны для выделения:

   ```shell
   nomad node status -self
   ```

   В выходных данных найдите раздел "Выделенные ресурсы". Он имеет следующий вид.

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   Для ЦП и памяти здесь показано, сколько ресурсов выделено для **общего числа** **всех** служб (левое значение) и сколько ресурсов доступно (правое значение). В приведенном выше примере выделено 23 ГиБ памяти из 32 ГиБ. Это значит, что для выделения доступно 9 ГиБ памяти.

   {% warning %}

   **Внимание!** Будьте осторожны: не выделите больше ресурсов, чем доступно всего, иначе службы не запустятся.

   {% endwarning %}
1. Перейдите в каталог `/etc/consul-templates/etc/nomad-jobs/actions`.

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   В этом каталоге есть три файла, которые соответствуют службам {% data variables.product.prodname_actions %}, перечисленным выше:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Для служб, которые требуют корректировки, откройте соответствующий файл и найдите группу `resources`, которая выглядит следующим образом:

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   Для ресурсов ЦП значения указаны в МГц, а для ресурсов памяти — в МБ.

   Например, чтобы увеличить максимальный объем ресурсов в приведенном выше примере до 1 ГГц для ЦП и до 4 ГБ для памяти, измените значения следующим образом:

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. Сохраните и закройте файл.
1. Выполните `ghe-config-apply`, чтобы применить изменения.

    Если при выполнении команды `ghe-config-apply` вы получаете такой результат, как `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, скорее всего, было выделено больше ресурсов ЦП или памяти, чем доступно. В этом случае снова измените файлы конфигурации, уменьшив выделяемый объем ресурсов ЦП или памяти, а затем повторно выполните команду `ghe-config-apply`.
1. После применения конфигурации выполните команду `ghe-actions-check` , чтобы убедиться в том, что службы {% data variables.product.prodname_actions %} работают.

{% ifversion fpt or ghec or ghes %}
## Устранение неполадок при активации существующих рабочих процессов в {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.beta-security-and-version-updates %}

После настройки обновлений {% данных variables.product.prodname_dependabot %} для {% данных variables.location.product_location %}могут возникать сбои при активации существующих рабочих процессов событиями {% variables.product.prodname_dependabot %}.

По умолчанию запуски рабочих процессов {% data variables.product.prodname_actions %}, которые активируются {% data variables.product.prodname_dependabot %} при наступлении событий `push`, `pull_request`, `pull_request_review` или `pull_request_review_comment`, обрабатываются так, как если бы они были открыты из вилки репозитория. Это означает, что в отличие от рабочих процессов, активированных другими субъектами, они получают `GITHUB_TOKEN` только для чтения и не имеют доступа к секретам, которые обычно доступны. Это приводит к сбою любых рабочих процессов, которые пытаются выполнить запись в репозиторий при активации из {% data variables.product.prodname_dependabot %}.

Существует три способа решения этой проблемы.

1. Вы можете изменить рабочие процессы так, чтобы они больше не активировались из {% data variables.product.prodname_dependabot %}, с помощью следующего выражения: `if: github.actor != 'dependabot[bot]'`. Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).
2. Вы можете изменить рабочие процессы так, чтобы использовался двухэтапный процесс с событием `pull_request_target`, которое не имеет таких ограничений. Дополнительные сведения см. в разделе [Автоматизация {% data variables.product.prodname_dependabot %} с помощью {% data variables.product.prodname_actions %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events).
3. Вы можете предоставить рабочим процессам, активируемым из {% data variables.product.prodname_dependabot %}, доступ к секретам и разрешить термину `permissions` увеличивать область `GITHUB_TOKEN` по умолчанию. Дополнительные сведения см. в разделе [Предоставление рабочим процессам, активируемым из {% data variables.product.prodname_dependabot %}, доступа к секретам и повышенному уровню разрешений](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions) ниже.

### Предоставление рабочим процессам, активируемым из {% data variables.product.prodname_dependabot %}, доступа к секретам и повышенному уровню разрешений

1. Войдите в административную оболочку с помощью SSH. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
1. Чтобы удалить ограничения рабочих процессов, активированных {% данных variables.product.prodname_dependabot %} для {% данных variables.location.product_location %}, используйте следующую команду.
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. Примените конфигурацию.
    ```shell
    $ ghe-config-apply
    ```
1. Вернитесь на {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## Устранение неполадок, связанных с пакетными действиями, в {% data variables.product.prodname_actions %}

Если при установке {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_server %} возникает указанная ниже ошибка, можно устранить проблему, установив официальные пакетные действия и начальные рабочие процессы.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

Чтобы установить официальные пакетные действия и начальные рабочие процессы в назначенной организации в {% data variables.product.prodname_ghe_server %}, выполните описанную ниже процедуру.

1. Определите организацию, в которой будут храниться официальные пакетные действия и начальные рабочие процессы. Можно создать новую организацию или использовать существующую. 
    - Сведения о создании организации см. в разделе [Создание организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch). 
    - Советы по выбору имени для организации см. в разделе [Зарезервированные имена](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names). 

1. Войдите в административную оболочку с помощью SSH. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
1. Чтобы назначить организацию в качестве расположения для хранения пакетных действий, используйте команду `ghe-config`, заменив `ORGANIZATION` на имя своей организации.
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    and:
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  Чтобы добавить пакетные действия в организацию, отмените SHA.
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. Примените конфигурацию.
    ```shell
    $ ghe-config-apply
    ```

После выполнения этих действий можно продолжить настройку {% data variables.product.prodname_actions %}, как описано в разделе [Управление разрешениями на доступ для GitHub Actions в организации](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise).

{% endif %}
