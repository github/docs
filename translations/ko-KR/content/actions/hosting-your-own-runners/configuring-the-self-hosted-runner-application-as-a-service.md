---
title: 자체 호스팅 실행기 애플리케이션을 서비스로 구성
shortTitle: Run the runner app as a service
intro: 컴퓨터가 시작될 때 실행기 애플리케이션을 자동으로 시작하도록 자체 호스팅 실행기 애플리케이션을 서비스로 구성할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009557'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. 현재 실행 중인 경우 자체 호스팅 실행기 애플리케이션을 중지합니다. {% endcapture %} {% capture service_non_windows_intro_shell %}실행기 컴퓨터에서 자체 호스팅 실행기 애플리케이션을 설치한 디렉터리에서 셸을 엽니다. 아래 명령을 사용하여 자체 호스팅 실행기 서비스 설치 및 관리{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**참고:** 자체 호스팅 실행기 애플리케이션을 서비스로 구성하려면 {% data variables.product.product_name %}에 실행기를 추가해야 합니다. 자세한 내용은 “[자체 호스트된 실행기 추가](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)”를 참조하세요.

{% endnote %} {% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

`systemd`를 사용하는 Linux 시스템의 경우 실행기를 성공적으로 추가한 후 만든 `svc.sh` 스크립트를 사용하여 애플리케이션을 서비스로 사용하여 설치하고 관리할 수 있습니다.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**참고:** 자체 호스팅 실행기 애플리케이션을 Windows의 서비스로 구성하는 것은 애플리케이션 구성 프로세스의 일부입니다. 자체 호스팅 실행기 애플리케이션을 이미 구성했지만 서비스로 구성하지 않은 경우 {% data variables.product.prodname_dotcom %}에서 실행기를 제거하고 애플리케이션을 다시 구성해야 합니다. 애플리케이션을 다시 구성할 때 애플리케이션을 서비스로 구성하는 옵션을 선택합니다.

자세한 내용은 “[자체 호스팅 실행기 제거](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)” 및 “[자체 호스팅 실행기 추가](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)”를 참조하세요.

{% endnote %}

Windows **Services** 애플리케이션에서 실행기 서비스를 관리하거나 PowerShell을 사용하여 아래 명령을 실행할 수 있습니다.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## 서비스 설치

{{ service_first_step }}
1. 다음 명령을 사용하여 서비스를 설치합니다.

   ```shell
   sudo ./svc.sh install
   ```

1. 또는 이 명령은 선택적 `user` 인수를 사용하여 서비스를 다른 사용자로 설치합니다.

  ```shell
  ./svc.sh install USERNAME
  ```

{% endlinux %}

{% mac %}

## 서비스 설치

{{ service_first_step }}
1. 다음 명령을 사용하여 서비스를 설치합니다.

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## 서비스 시작

다음 명령을 사용하여 서비스를 시작합니다.

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

## 서비스 상태를 확인합니다.

다음 명령을 사용하여 서비스의 상태를 확인합니다.

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

 자체 호스팅 실행기의 상태를 보는 방법에 대한 자세한 내용은 “[자체 호스팅 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”을 참조하세요.

## 서비스 중지

다음 명령을 사용하여 서비스를 중지합니다.

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

## 서비스 제거

1. 현재 실행 중인 경우 서비스를 중지합니다.
1. 다음 명령을 사용하여 서비스를 제거합니다.

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

## 자체 호스팅 실행기 서비스 사용자 지정

위의 기본 `systemd` 서비스 구성을 사용하지 않으려면 사용자 지정된 서비스를 만들거나 원하는 서비스 메커니즘을 사용할 수 있습니다. `actions-runner/bin/actions.runner.service.template`의 `serviced` 템플릿을 참조로 사용하는 것이 좋습니다. 사용자 지정된 서비스를 사용하는 경우 `runsvc.sh` 진입점을 사용하여 자체 호스팅 실행기 서비스를 항상 호출해야 합니다.

{% endlinux %}

{% mac %}

## 자체 호스팅 실행기 서비스 사용자 지정

위의 기본 launchd 서비스 구성을 사용하지 않으려면 사용자 지정된 서비스를 만들거나 원하는 서비스 메커니즘을 사용할 수 있습니다. `actions-runner/bin/actions.runner.plist.template`의 `plist` 템플릿을 참조로 사용하는 것이 좋습니다. 사용자 지정된 서비스를 사용하는 경우 `runsvc.sh` 진입점을 사용하여 자체 호스팅 실행기 서비스를 항상 호출해야 합니다.

{% endmac %}
