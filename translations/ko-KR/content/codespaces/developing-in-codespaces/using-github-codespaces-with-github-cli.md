---
title: GitHub CLI에서 GitHub Codespaces 사용
shortTitle: GitHub CLI
intro: '`gh`{% data variables.product.product_name %} 명령줄 인터페이스를 사용하여 명령줄에서 직접 {% data variables.product.prodname_github_codespaces %}를 사용할 수 있습니다.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163499'
---
## {% data variables.product.prodname_cli %} 정보 

{% data reusables.cli.about-cli %} 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

{% data variables.product.prodname_cli %}에서 {% data variables.product.prodname_github_codespaces %}을 사용하여 다음을 수행할 수 있습니다.
  - [모든 codespace 나열](#list-all-of-your-codespaces)
  - [새 codespace 만들기](#create-a-new-codespace)
  - [codespace 중지](#stop-a-codespace)
  - [codespace 삭제](#delete-a-codespace)
  - [codespace 이름 바꾸기](#rename-a-codespace)
  - [codespace로 SSH](#ssh-into-a-codespace)
  - [{% data variables.product.prodname_vscode %}에서 codespace 열기](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [JupyterLab에서 Codespace 열기](#open-a-codespace-in-jupyterlab)
  - [codespace 간 파일 복사](#copy-a-file-tofrom-a-codespace)
  - [codespace의 포트 수정](#modify-ports-in-a-codespace)
  - [액세스 codespace 로그](#access-codespace-logs)
  - [원격 리소스 액세스](#access-remote-resources)
  - [codespace의 컴퓨터 유형 변경](#change-the-machine-type-of-a-codespace)

## {% data variables.product.prodname_cli %} 설치

{% data reusables.cli.cli-installation %}
 
## {% data variables.product.prodname_cli %} 사용

`gh auth login`을 아직 수행하지 않은 경우 실행하여 {% data variables.product.prodname_dotcom %} 계정으로 인증합니다. 

를 사용하여 {% data variables.product.prodname_github_codespaces %}를 사용 `gh` 하려면 또는 해당 별칭을 입력 `gh codespace SUBCOMMAND` 합니다 `gh cs SUBCOMMAND`.

{% data variables.product.prodname_github_codespaces %} 작업을 하는 데 사용할 수 있는 일련의 명령의 예로 다음을 수행할 수 있습니다. 

* 현재 codespace를 나열하여 특정 리포지토리에 대한 codespace가 있는지 확인합니다.<br>
  `gh codespace list`
* 필요한 리포지토리 분기에 대한 새 codespace를 만듭니다.<br>
  `gh codespace create -r github/docs -b main`
* 새 codespace로 SSH합니다.<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* 로컬 머신에 포트를 전달합니다.<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## {% data variables.product.prodname_github_codespaces %}에 대한 `gh` 명령

아래 섹션에서는 사용 가능한 각 작업에 대한 예제 명령을 제공합니다.

각 명령에 사용 가능한 모든 옵션에 대한 세부 정보를 포함하여 {% data variables.product.prodname_github_codespaces %}에 대한 `gh` 명령의 전체 참조는 “[gh codespace](https://cli.github.com/manual/gh_codespace)”에 대한 {% data variables.product.prodname_cli %} 온라인 도움말을 참조하세요. 또는 명령줄에서 일반적인 도움말을 사용 `gh codespace --help` 하거나 `gh codespace SUBCOMMAND --help` 특정 하위 명령에 대한 도움말을 사용합니다.

{% note %}

**참고**: 많은 명령과 함께 사용되는 `-c CODESPACE_NAME` 플래그는 선택 사항입니다. 생략하면 선택할 수 있는 codespace 목록이 표시됩니다.

{% endnote %}

### 모든 codespace 나열

```shell
gh codespace list
```

목록에는 다른 `gh codespace` 명령에서 사용할 수 있는 각 codespace의 고유한 이름이 포함됩니다.

codespace의 분기 이름 끝에 있는 별표는 해당 codespace에 커밋되지 않거나 게시되지 않은 변경 내용이 있음을 나타냅니다.

### 새 codespace 만들기

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

### codespace 중지

```shell
gh codespace stop -c CODESPACE-NAME
```

자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 심층 분석](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)”을 참조하세요.

### codespace 삭제

```shell
gh codespace delete -c CODESPACE-NAME
```

자세한 내용은 “[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace)”를 참조하세요.

### codespace 이름 바꾸기

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

자세한 내용은 "[codespace 이름 바꾸기"를 참조하세요](/codespaces/customizing-your-codespace/renaming-a-codespace).

### codespace로 SSH

원격 codespace 머신에서 명령을 실행하려면 터미널에서 codespace로 SSH할 수 있습니다.

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**참고**: {% data reusables.codespaces.ssh-server-installed %}

<br>파일 및 기본 컨테이너 이미지에 `devcontainer.json` 대한 자세한 내용은 "[개발 컨테이너 소개"를 참조하세요.](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)

{% endnote %}

{% data variables.product.prodname_github_codespaces %}은(는) 원활한 인증 환경을 위해 생성 시 GitHub SSH 키를 codespace에 복사합니다. SSH 키에 대한 암호를 입력하라는 메시지가 표시될 수 있으며, 그 후에는 원격 codespace 머신에서 명령 프롬프트를 받게 됩니다.

SSH 키가 없는 경우 “[새 SSH 키를 생성하고 ssh-agent에 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”의 지침을 따릅니다.

### {% data variables.product.prodname_vscode %}에서 codespace 열기

```shell
gh codespace code -c CODESPACE-NAME
```

로컬 컴퓨터에 {% data variables.product.prodname_vscode_shortname %}이(가) 설치되어 있어야 합니다. 자세한 내용은 "[{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"을 참조하세요.

### JupyterLab에서 Codespace 열기

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### codespace 간 파일 복사

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

파일 또는 디렉터리 이름에 접두사 `remote:`를 사용하여 codespace에 있음을 나타냅니다. UNIX `cp` 명령과 마찬가지로 첫 번째 인수는 원본을 지정하고 마지막 인수는 대상을 지정합니다. 대상이 디렉터리인 경우 여러 원본을 지정할 수 있습니다. 원본이 디렉터리인 경우 `-r`(재귀) 플래그를 사용합니다.

codespace의 파일 및 디렉터리 위치는 원격 사용자의 홈 디렉터리를 기준으로 합니다.

#### 예제

* 로컬 머신에서 codespace의 `$HOME` 디렉터리로 파일을 복사합니다.

   `gh codespace cp myfile.txt remote:`

* codespace에서 리포지토리가 체크 아웃된 디렉터리에 파일을 복사합니다.

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* codespace에서 로컬 머신의 현재 디렉터리로 파일을 복사합니다.

   `gh codespace cp remote:myfile.txt .`

* 세 개의 로컬 파일을 codespace의 `$HOME/temp` 디렉터리에 복사합니다.

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* codespace에서 로컬 머신의 현재 작업 디렉터리로 세 개의 파일을 복사합니다.

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* 로컬 디렉터리를 codespace의 `$HOME` 디렉터리에 복사합니다.

   `gh codespace cp -r mydir remote:`

* 디렉터리를 codespace에서 로컬 머신으로 복사하여 디렉터리 이름을 변경합니다.

   `gh codespace cp -r remote:mydir mydir-localcopy`

사용할 수 있는 추가 플래그를 포함하여 `gh codespace cp` 명령에 대한 자세한 내용은 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_codespace_cp)를 참조하세요.

### codespace의 포트 수정

codespace의 포트를 로컬 포트로 전달할 수 있습니다. 프로세스가 실행되는 동안 포트는 전달된 상태로 유지됩니다. 포트 전달을 중지하려면 <kbd>Control</kbd>+<kbd>C</kbd>를 누릅니다.

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

전달된 포트의 세부 정보를 보려면 `gh codespace ports`를 입력 한 다음 codespace를 선택합니다.

전달된 포트의 표시 유형을 설정할 수 있습니다. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

하나의 명령을 사용하여 여러 포트에 대한 표시 유형을 설정할 수 있습니다. 예를 들면 다음과 같습니다.

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.

### 액세스 codespace 로그

codespace에 대한 생성 로그를 볼 수 있습니다. 이 명령을 입력하면 SSH 키에 대한 암호를 입력하라는 메시지가 표시됩니다.

```shell
gh codespace logs -c CODESPACE-NAME
```

만들기 로그에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 로그](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)”를 참조하세요.

### 원격 리소스 액세스 
{% data variables.product.prodname_cli %} 확장을 사용하여 codespace와 로컬 컴퓨터 간에 브리지를 만들 수 있으며, codespace는 컴퓨터에서 액세스할 수 있는 원격 리소스에 액세스할 수 있습니다. 확장 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 사용을 통한 원격 리소스 액세스”](https://github.com/github/gh-net#codespaces-network-bridge)를 참조하세요.

{% note %}

**참고**: {% data variables.product.prodname_cli %} 확장은 현재 베타로 제공되며 변경될 수 있습니다. 

{% endnote %}

### codespace의 컴퓨터 유형 변경

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

자세한 내용은 "[codespace의 컴퓨터 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)"의 "{% data variables.product.prodname_cli %}" 탭을 참조하세요.
