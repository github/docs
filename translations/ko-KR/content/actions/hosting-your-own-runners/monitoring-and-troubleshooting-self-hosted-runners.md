---
title: 자체 호스팅 실행기 모니터링 및 문제 해결
intro: 자체 호스팅 실행기를 모니터링하여 해당 작업을 보고 일반적인 문제를 진단할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094067'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 자체 호스트 실행기의 상태 확인

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. “실행기”에서 실행기 이름, 레이블 및 상태를 포함하여 등록된 실행기 목록을 볼 수 있습니다.

    상태는 다음 중 하나로 표시될 수 있습니다.

    * **유휴 상태**: 실행기가 {% data variables.product.product_name %}에 연결되어 있으며 작업을 실행할 준비가 되었습니다.
    * **활성**: 실행기에서 현재 작업을 실행하고 있습니다.
    * **오프라인**: 실행기가 {% data variables.product.product_name %}에 연결되어 있지 않습니다. 이는 컴퓨터가 오프라인 상태이거나, 자체 호스트 실행기 애플리케이션이 컴퓨터에서 실행되고 있지 않거나, 자체 호스트 실행기 애플리케이션이 {% data variables.product.product_name %}과(와) 통신할 수 없기 때문일 수 있습니다.

## 네트워크 연결 문제 해결

### 자체 호스트 실행기 네트워크 연결 확인

자체 호스팅 실행기 애플리케이션의 `run` 스크립트를 매개 변수와 함께 `--check` 사용하여 자체 호스팅 실행기에서 {% 데이터 variables.location.product_location %}의 모든 필수 네트워크 서비스에 액세스할 수 있는지 확인할 수 있습니다.

`--check` 이외에 스크립트에 다음 인수 두 개를 제공해야 합니다.

* `--url`: {% data variables.product.company_short %} 리포지토리, 조직 또는 엔터프라이즈에 대한 URL과 함께 제공합니다. 예: `--url https://github.com/octo-org/octo-repo`.
* `--pat` 범위{% ifversion pat-v2%}가 있어야 하는 {% 데이터 variables.product.pat_v1 %}의 값 또는 워크플로 읽기 및 쓰기 액세스 {% endif %}가 있는 {% 데이터 variables.product.pat_v2 %}이(가) 있어야 합니다 `workflow` . 예들 들어 `--pat ghp_abcd1234`입니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.

예를 들면 다음과 같습니다.

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url https://github.com/YOUR-ORG/YOUR-REPO --pat GHP_ABCD1234
```

{% endwindows %}

스크립트는 각 서비스를 테스트하고 각 서비스에 대해 `PASS` 또는 `FAIL`을 출력합니다. 실패한 검사가 있는 경우 해당 검사에 대한 로그 파일에서 문제에 관한 자세한 내용을 볼 수 있습니다. 로그 파일은 실행기 애플리케이션을 설치한 `_diag` 디렉터리에 있으며 각 검사에 대한 로그 파일의 경로는 스크립트의 콘솔 출력에 표시됩니다.

실패한 검사가 있는 경우 자체 호스트 실행기 컴퓨터가 모든 통신 요구 사항을 충족하는지 확인해야 합니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements)”를 참조하세요.

### TLS 인증서 확인 사용 안 함
{% ifversion ghes %} 기본적으로 자체 호스트 실행기 애플리케이션은 {% data variables.product.product_name %}에 대한 TLS 인증서를 확인합니다.  {% data variables.product.product_name %}에 자체 서명되거나 내부적으로 발급된 인증서가 있는 경우 테스트 목적으로 TLS 인증서 확인을 사용하지 않도록 설정할 수 있습니다.
{% else %}기본적으로 자체 호스트 실행기 애플리케이션은 {% data variables.product.product_name %}에 대한 TLS 인증서를 확인합니다.  네트워크 문제가 발생하는 경우 테스트 목적으로 TLS 인증서 확인을 사용하지 않도록 설정할 수 있습니다.
{% endif %}

자체 호스트 실행기 애플리케이션에서 TLS 인증 확인을 사용하지 않도록 설정하려면 자체 호스트 실행기 애플리케이션을 구성하고 실행하기 전에 `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` 환경 변수를 `1`로 설정합니다.

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

{% warning %}

**경고**: TLS는 자체 호스트 실행기 애플리케이션과 {% data variables.product.product_name %} 간에 개인 정보 및 데이터 무결성을 제공하기 때문에 TLS 확인을 사용하지 않도록 설정하는 것이 좋습니다. 자체 호스팅 실행기를 위해 운영 체제 인증서 저장소에 {% data variables.product.product_name %} 인증서를 설치하는 것이 좋습니다. {% data variables.product.product_name %} 인증서를 설치하는 방법에 대한 지침은 운영 체제 공급업체에 문의하세요.

{% endwarning %}

## 자체 호스트 실행기 애플리케이션 로그 파일 검토

자체 호스트 실행기 애플리케이션의 상태 및 해당 활동을 모니터링할 수 있습니다. 로그 파일은 실행기 애플리케이션을 설치한 `_diag` 디렉터리에 보관되며 애플리케이션이 시작될 때마다 새 로그가 생성됩니다. 파일 이름은 *Runner_* 로 시작하며 뒤에는 애플리케이션이 시작된 시점의 UTC 타임스탬프가 붙습니다.

워크플로 작업 실행에 대한 자세한 로그는 *Worker_* 파일을 설명하는 다음 섹션을 참조하세요.

## 작업의 로그 파일 검토

자체 호스트 실행기 애플리케이션은 처리하는 각 작업에 대한 자세한 로그 파일을 생성합니다. 이러한 파일은 실행기 애플리케이션을 설치한 `_diag` 디렉터리에 저장되며 파일 이름은 *Worker_* 로 시작합니다.

{% linux %}

## journalctl을 사용하여 자체 호스트 실행기 응용 프로그램 서비스를 확인합니다

서비스를 사용하여 애플리케이션을 실행하는 Linux 기반 자체 호스트 실행기의 경우 `journalctl`을 사용하여 실시간 활동을 모니터링할 수 있습니다. 기본 시스템 기반 서비스는 명명 규칙 `actions.runner.<org>-<repo>.<runnerName>.service`를 사용합니다. 이 이름은 80자를 초과하면 잘리므로 서비스 이름을 찾는 기본 방법은 _.service_ 파일을 확인하는 것입니다. 예를 들면 다음과 같습니다.

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

서비스가 다른 곳에 설치되어 이름을 찾지 못하면 실행 중인 서비스 목록에서 서비스 이름을 찾을 수 있습니다. 예를 들어 대부분의 Linux 시스템에서 다음 `systemctl` 명령을 사용할 수 있습니다.

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

`journalctl`를 사용하여 자체 호스트 실행기의 실시간 활동을 모니터링할 수 있습니다.

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

이 예제 출력에서는 `runner01` 시작을 확인하고, `testAction`이라고 이름이 지정된 작업을 받은 다음 결과 상태를 표시할 수 있습니다.

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

`systemd` 구성을 보려면 여기 `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`에서 서비스 파일을 찾을 수 있습니다.
자체 호스트 실행기 애플리케이션 서비스를 사용자 지정하려면 이 파일을 직접 수정하지 마세요. “[자체 호스트 실행기 애플리케이션을 서비스로 구성](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)”에 설명된 지침을 따르세요.

{% endlinux %}

{% mac %}

## `launchd`를 사용하여 자체 호스트 실행기 애플리케이션 서비스를 확인합니다.

애플리케이션을 서비스로 실행하는 macOS 기반 자체 호스트 실행기의 경우 `launchctl`을 사용하여 실시간 활동을 모니터링할 수 있습니다. 기본 launchd 기반 서비스는 명명 규칙 `actions.runner.<org>-<repo>.<runnerName>`을 사용합니다. 이 이름은 80자를 초과하면 잘리므로 서비스 이름을 찾는 기본 방법은 실행기 디렉터리에서 _.service_ 파일을 확인하는 것입니다.

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

`svc.sh` 스크립트는 `launchctl`을 사용하여 애플리케이션이 실행 중인지 여부를 확인합니다. 예를 들면 다음과 같습니다.

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

결과 출력에는 프로세스 ID와 애플리케이션의 `launchd` 서비스 이름이 포함됩니다.

`launchd` 구성을 보려면 여기 `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`에서 서비스 파일을 찾을 수 있습니다.
자체 호스트 실행기 애플리케이션 서비스를 사용자 지정하려면 이 파일을 직접 수정하지 마세요. “[자체 호스트 실행기 애플리케이션을 서비스로 구성](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)”에 설명된 지침을 따르세요.

{% endmac %}

{% windows %}

## PowerShell을 사용하여 자체 호스트 실행기 응용 프로그램 서비스를 확인합니다

애플리케이션을 서비스로 실행하는 Windows 기반 자체 호스트 실행기의 경우 을 사용하여 실시간 활동을 모니터링할 수 있습니다. 서비스는 명명 규칙 `GitHub Actions Runner (<org>-<repo>.<runnerName>)`을 사용합니다. 또한 실행기 디렉터리에서 _.service_ 파일을 확인하여 서비스 이름을 찾을 수도 있습니다.

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Windows _Services_ 애플리케이션(`services.msc`)에서 실행기의 상태를 볼 수 있습니다. PowerShell을 사용하여 서비스가 실행 중인지 확인할 수도 있습니다.

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

PowerShell을 사용하여 자체 호스트 실행기의 최근 활동을 확인할 수 있습니다. 이 예제 출력에서는 애플리케이션 시작을 확인하고, `testAction`이라고 이름이 지정된 작업을 받은 다음 결과 상태를 표시할 수 있습니다.

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

## 자동 업데이트 프로세스 모니터링

자체 호스트 실행기는 특정 버전 임계값보다 낮은 경우 작업을 처리할 수 없기 때문에 자동 업데이트 프로세스를 정기적으로 확인하는 것이 좋습니다. 자체 호스트 실행기 애플리케이션은 자동으로 업데이트되지만 이 프로세스에는 운영 체제 또는 기타 소프트웨어에 대한 업데이트가 포함되지 않기 때문에 해당 업데이트는 별도로 관리해야 합니다.

*Runner_* 로그 파일에서 업데이트 활동을 볼 수 있습니다. 예를 들면 다음과 같습니다.

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

또한 실행기 애플리케이션을 설치한 `_diag` 디렉터리에 있는 _SelfUpdate_ 로그 파일에서 자세한 정보를 찾을 수 있습니다.

{% linux %}

## 자체 호스트 실행기에서 컨테이너 문제 해결

### Docker의 설치 여부 확인

작업에 컨테이너가 필요한 경우 자체 호스트 실행기는 Linux 기반이어야 하며 Docker가 설치되어 있어야 합니다. 자체 호스트 실행기에서 Docker가 설치되어 있고 서비스가 실행 중인지 확인합니다.

`systemctl`을 사용하여 서비스 상태를 확인할 수 있습니다.

```shell
$ sudo systemctl is-active docker.service
active
```

Docker가 설치되어 있지 않으면 다음 오류와 함께 종속 작업에 실패합니다.

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Docker 권한 확인

다음 오류로 인해 작업에 실패한 경우:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

자체 호스트 실행기의 서비스 계정에 Docker 서비스를 사용할 수 있는 권한이 있는지 확인합니다. `systemd`에서 자체 호스트 실행기의 구성을 확인하여 이 계정을 식별할 수 있습니다. 예를 들면 다음과 같습니다.

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## {% 데이터 variables.location.product_location %}을(를) 업그레이드한 후 오프라인 상태인 실행기 해결

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

이러한 이유로 실행기가 오프라인 상태인 경우 실행기를 수동으로 업데이트합니다. 자세한 내용은 작업/실행기 리포지토리에서 [최신 릴리스](https://github.com/actions/runner/releases/latest)에 대한 설치 지침을 참조하세요.
{% endif %}

### 실행기에서 설치된 Docker 엔진 확인

다음 오류와 함께 빌드가 실패하는 경우:

```shell
Error: Input required and not supplied: java-version
```

자체 호스팅 실행기에서 설치된 Docker 엔진을 확인합니다. 실행기는 작업의 입력을 Docker 컨테이너에 전달하기 위해 대시를 이름의 일부로 포함할 수 있는 환경 변수를 사용합니다. Docker 엔진이 이진 실행 파일이 아니라 대신 셸 래퍼 또는 링크(예: Linux에 `snap`설치된 Docker 엔진)인 경우 작업은 입력을 가져올 수 없습니다. 이 오류를 해결하려면 다른 Docker 엔진을 사용하도록 자체 호스팅 실행기를 구성합니다. 

Docker 엔진이 설치 `snap`되어 있는지 확인하려면 명령을 사용합니다 `which` . 다음 예제에서는 다음을 사용하여 `snap`Docker 엔진을 설치했습니다.

```shell
$ which docker
/snap/bin/docker
```
