---
title: GitHub CLI에서 Codespaces 사용
shortTitle: GitHub CLI
intro: '`gh`{% data variables.product.product_name %} 명령줄 인터페이스를 사용하여 명령줄에서 직접 {% data variables.product.prodname_github_codespaces %}를 사용할 수 있습니다.'
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
- Codespaces
- CLI
- Developer
ms.openlocfilehash: 3ad93a4c72d2f2fedc526b3593ad4a39597e8fc3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145179791"
---
## <a name="about--data-variablesproductprodname_cli-"></a>{% data variables.product.prodname_cli %} 정보 

{% data reusables.cli.about-cli %} 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

{% data variables.product.prodname_cli %}에서 {% data variables.product.prodname_codespaces %}을(를) 사용하여 다음을 수행할 수 있습니다.
- [codespace 나열](#list-all-of-your-codespaces)
- [codespace 만들기](#create-a-new-codespace)
- [codespace 중지](#stop-a-codespace)
- [codespace 삭제](#delete-a-codespace)
- [codespace로 SSH](#ssh-into-a-codespace)
- [{% data variables.product.prodname_vscode %}에서 codespace 열기](#open-a-codespace-in-visual-studio-code)
- [JupyterLab에서 Codespace 열기](#open-a-codespace-in-jupyterlab)
- [codespace 간 파일 복사](#copy-a-file-tofrom-a-codespace)
- [codespace의 포트 수정](#modify-ports-in-a-codespace)
- [액세스 codespace 로그](#access-codespace-logs)

## <a name="installing--data-variablesproductprodname_cli-"></a>{% data variables.product.prodname_cli %} 설치

{% data reusables.cli.cli-installation %}
 
## <a name="using--data-variablesproductprodname_cli-"></a>{% data variables.product.prodname_cli %} 사용

`gh auth login`을 아직 수행하지 않은 경우 실행하여 {% data variables.product.prodname_dotcom %} 계정으로 인증합니다. 

`gh`를 사용하여 {% data variables.product.prodname_codespaces %} 작업을 하려면 `gh codespace <COMMAND>` 또는 해당 별칭 `gh cs <COMMAND>`를 입력합니다.

{% data variables.product.prodname_github_codespaces %} 작업을 하는 데 사용할 수 있는 일련의 명령의 예로 다음을 수행할 수 있습니다. 

* 현재 codespace를 나열하여 특정 리포지토리에 대한 codespace가 있는지 확인합니다.<br>
  `gh codespace list`
* 필요한 리포지토리 분기에 대한 새 codespace를 만듭니다.<br>
  `gh codespace create -r github/docs -b main`
* 새 codespace로 SSH합니다.<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* 로컬 머신에 포트를 전달합니다.<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## <a name="gh-commands-for--data-variablesproductprodname_github_codespaces-"></a>{% data variables.product.prodname_github_codespaces %}에 대한 `gh` 명령

아래 섹션에서는 사용 가능한 각 작업에 대한 예제 명령을 제공합니다.

각 명령에 사용 가능한 모든 옵션에 대한 세부 정보를 포함하여 {% data variables.product.prodname_github_codespaces %}에 대한 `gh` 명령의 전체 참조는 “[gh codespace](https://cli.github.com/manual/gh_codespace)”에 대한 {% data variables.product.prodname_cli %} 온라인 도움말을 참조하세요. 또는 명령줄에 `gh codespace [<SUBCOMMAND>...] --help`를 사용합니다.

{% note %}

**참고**: 많은 명령과 함께 사용되는 `-c <em>codespace-name</em>` 플래그는 선택 사항입니다. 생략하면 선택할 수 있는 codespace 목록이 표시됩니다.

{% endnote %}

### <a name="list-all-of-your-codespaces"></a>모든 codespace 나열

```shell
gh codespace list
```

목록에는 다른 `gh codespace` 명령에서 사용할 수 있는 각 codespace의 고유한 이름이 포함됩니다.

### <a name="create-a-new-codespace"></a>새 codespace 만들기

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

자세한 내용은 “[codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace)”를 참조하세요.

### <a name="stop-a-codespace"></a>codespace 중지

```shell
gh codespace stop -c <em>codespace-name</em>
```

자세한 내용은 “[Codespaces에 대한 심층 분석](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)”을 참조하세요.

### <a name="delete-a-codespace"></a>codespace 삭제

```shell
gh codespace delete -c <em>codespace-name</em>
```

자세한 내용은 “[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace)”를 참조하세요.

### <a name="ssh-into-a-codespace"></a>codespace로 SSH

원격 codespace 머신에서 명령을 실행하려면 터미널에서 codespace로 SSH할 수 있습니다.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %}은(는) 원활한 인증 환경을 위해 생성 시 GitHub SSH 키를 codespace에 복사합니다. SSH 키에 대한 암호를 입력하라는 메시지가 표시될 수 있으며, 그 후에는 원격 codespace 머신에서 명령 프롬프트를 받게 됩니다.

SSH 키가 없는 경우 “[새 SSH 키를 생성하고 ssh-agent에 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”의 지침을 따릅니다.

### <a name="open-a-codespace-in--data-variablesproductprodname_vscode-"></a>{% data variables.product.prodname_vscode %}에서 codespace 열기

```shell
gh codespace code -c <em>codespace-name</em>
```

자세한 내용은 “[{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_codespaces %} 사용](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code)”을 참조하세요.

### <a name="open-a-codespace-in-jupyterlab"></a>JupyterLab에서 Codespace 열기

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### <a name="copy-a-file-tofrom-a-codespace"></a>codespace 간 파일 복사

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

파일 또는 디렉터리 이름에 접두사 `remote:`를 사용하여 codespace에 있음을 나타냅니다. UNIX `cp` 명령과 마찬가지로 첫 번째 인수는 원본을 지정하고 마지막 인수는 대상을 지정합니다. 대상이 디렉터리인 경우 여러 원본을 지정할 수 있습니다. 원본이 디렉터리인 경우 `-r`(재귀) 플래그를 사용합니다.

codespace의 파일 및 디렉터리 위치는 원격 사용자의 홈 디렉터리를 기준으로 합니다.

#### <a name="examples"></a>예제

* 로컬 머신에서 codespace의 `$HOME` 디렉터리로 파일을 복사합니다.

   `gh codespace cp myfile.txt remote:`

* codespace에서 리포지토리가 체크 아웃된 디렉터리에 파일을 복사합니다.

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

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

### <a name="modify-ports-in-a-codespace"></a>codespace의 포트 수정

codespace의 포트를 로컬 포트로 전달할 수 있습니다. 프로세스가 실행되는 동안 포트는 전달된 상태로 유지됩니다. 포트 전달을 중지하려면 <kbd>Control</kbd>+<kbd>C</kbd>를 누릅니다.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

전달된 포트의 세부 정보를 보려면 `gh codespace ports`를 입력 한 다음 codespace를 선택합니다.

전달된 포트의 표시 유형을 설정할 수 있습니다. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

하나의 명령을 사용하여 여러 포트에 대한 표시 유형을 설정할 수 있습니다. 예를 들면 다음과 같습니다.

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.

### <a name="access-codespace-logs"></a>액세스 codespace 로그

codespace에 대한 생성 로그를 볼 수 있습니다. 이 명령을 입력하면 SSH 키에 대한 암호를 입력하라는 메시지가 표시됩니다.

```shell
gh codespace logs -c <em>codespace-name</em>
```

생성 로그에 대한 자세한 내용은 “[Codespaces 로그](/codespaces/troubleshooting/codespaces-logs#creation-logs)”를 참조하세요.
