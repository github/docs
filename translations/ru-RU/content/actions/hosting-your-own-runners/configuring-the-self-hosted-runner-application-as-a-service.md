---
title: Настройка приложения локального средства выполнения как службы
shortTitle: Run the runner app as a service
intro: 'Вы можете настроить локальное средство выполнения в качестве службы, чтобы автоматически запускать его при запуске компьютера.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
ms.openlocfilehash: 264a668616624e216be0d7bc60f8633c24ebc249
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010052'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Остановите приложение локального средства выполнения, если в данный момент оно запущено.{% endcapture %} {% capture service_non_windows_intro_shell %}На компьютере средства выполнения откройте оболочку в каталоге, где установлено приложение локального средства выполнения. Используйте приведенные ниже команды, чтобы установить службу локального средства выполнения и управлять ею. {% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**Примечание.** Добавьте средство выполнения в {% data variables.product.product_name %}, прежде чем настроить приложение локального средства выполнения в качестве службы. Дополнительные сведения см. в разделе [Добавление локальных средств выполнения](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners).

{% endnote %} {% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

Для систем Linux, использующих `systemd`, можно воспользоваться скриптом `svc.sh`, который создан после успешного добавления средства выполнения, для установки приложения в качестве службы и управления им.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Примечание.** Настройка приложения локального средства выполнения в качестве службы в Windows является частью процесса настройки приложения. Если вы уже настроили приложение локального средства выполнения, но не в качестве службы, необходимо удалить средство выполнения из {% data variables.product.prodname_dotcom %} и повторно настроить приложение. При повторной настройке приложения выберите параметр настройки приложения как службы.

Дополнительные сведения см. в разделах [Удаление локальных средств выполнения](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners).

{% endnote %}

Вы можете управлять службой средства выполнения в приложении **Службы** Windows или использовать PowerShell для выполнения приведенных ниже команд.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## Установка службы

{{ service_first_step }}
1. Установите службу с помощью следующей команды:

   ```shell
   sudo ./svc.sh install
   ```

1. Эта команда принимает необязательный аргумент `user` для установки службы в качестве другого пользователя.

  ```shell
  ./svc.sh install USERNAME
  ```

{% endlinux %}

{% mac %}

## Установка службы

{{ service_first_step }}
1. Установите службу с помощью следующей команды:

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## Запуск службы

Запустите службу с помощью следующей команды:

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %} {% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh start
```
{% endmac %}

## Проверка состояния службы

Проверьте состояние службы с помощью следующей команды:

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %} {% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh status
```
{% endmac %}

 Дополнительные сведения о просмотре состояния локального средства выполнения см. в разделе [Мониторинг и устранение неполадок локальных средств выполнения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

## Остановка службы

Остановите службу с помощью следующей команды:

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %} {% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh stop
```
{% endmac %}

## Удаление службы

1. Остановите службу, если она работает в данный момент.
1. Удалите службу с помощью следующей команды:

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}  {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}  {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## Настройка службы локального средства выполнения

Если вы не хотите использовать указанную выше конфигурацию службы `systemd` по умолчанию, можно создать настраиваемую службу или использовать любой предпочитаемый механизм службы. Рассмотрите возможность использования шаблона `serviced` в `actions-runner/bin/actions.runner.service.template` качестве справки. Если вы используете настроенную службу, служба локального средства выполнения всегда должна вызываться с помощью точки входа `runsvc.sh`.

{% endlinux %}

{% mac %}

## Настройка службы локального средства выполнения

Если вы не хотите использовать указанную выше конфигурацию службы launchd по умолчанию, можно создать настраиваемую службу или использовать любой предпочитаемый механизм службы. Рассмотрите возможность использования шаблона `plist` в `actions-runner/bin/actions.runner.plist.template` качестве справки. Если вы используете настроенную службу, служба локального средства выполнения всегда должна вызываться с помощью точки входа `runsvc.sh`.

{% endmac %}
