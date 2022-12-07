---
title: GitHub CLI 확장 만들기
intro: '{% data variables.product.prodname_cli %}에 대한 사용자 지정 확장을 만들어 새 {% data variables.product.prodname_cli %} 명령을 다른 사용자와 공유하는 방법을 알아봅니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 1913b2819986fd9e6ef85b9a95b6431f893babe2
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009305'
---
## {% data variables.product.prodname_cli %} 확장 정보

{% data reusables.cli.cli-extensions %} {% data variables.product.prodname_cli %} 확장을 사용하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 확장 사용](/github-cli/github-cli/using-github-cli-extensions)”을 참조하세요.

만드는 각 확장에 대한 리포지토리가 필요합니다. 리포지토리 이름은 `gh-`로 시작해야 합니다. 리포지토리 이름의 나머지는 확장의 이름입니다. 리포지토리의 루트에는 리포지토리와 이름이 같은 실행 파일이 있거나 릴리스에 첨부된 미리 컴파일된 이진 실행 파일이 있어야 합니다.

{% note %}

**참고**: 실행 가능한 스크립트에 의존할 경우, bash는 널리 사용 가능한 인터프리터이므로 bash 스크립트를 사용하는 것이 좋습니다. bash가 아닌 스크립트를 사용할 수 있지만, 이 경우 사용자는 필요한 인터프리터가 설치되어 있어야 확장을 사용할 수 있습니다. 사용자가 인터프리터를 설치할 것에 의존하지 않으려면 미리 컴파일된 확장을 고려하세요.

{% endnote %}

## `gh extension create`를 사용하여 해석된 확장 만들기

{% note %}

**참고**: 인수 없이 `gh extension create`를 실행하면 대화형 마법사가 시작됩니다.

{% endnote %}

이 `gh extension create` 명령을 사용하여 일부 시작 코드가 포함된 bash 스크립트를 포함하여 확장에 대한 프로젝트를 만들 수 있습니다.

1. `gh extension create` 하위 명령을 사용하여 새 확장을 설정합니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다.

    ```shell
    gh extension create EXTENSION-NAME
    ```

1. 출력된 지침에 따라 확장을 마무리하고 필요에 따라 게시합니다.

## `gh extension create`를 사용하여 Go에서 미리 컴파일된 확장 만들기

`--precompiled=go` 인수를 사용하면 Go 스캐폴딩, 워크플로 스캐폴딩, 시작 코드를 포함하여 확장에 대한 Go 기반 프로젝트를 만들 수 있습니다.

1. `gh extension create` 하위 명령을 사용하여 새 확장을 설정합니다. `EXTENSION-NAME`을 확장의 이름으로 바꾸고 `--precompiled=go`를 지정합니다.

    ```shell
    gh extension create --precompiled=go EXTENSION-NAME
    ```

1. 출력된 지침에 따라 확장을 마무리하고 필요에 따라 게시합니다.

## `gh extension create`를 사용하여 Go가 아닌 미리 컴파일된 확장 만들기

`--precompiled=other` 인수를 사용하면 워크플로 스캐폴딩을 포함하여 Go가 아닌 미리 컴파일된 확장에 대한 프로젝트를 만들 수 있습니다.

1. `gh extension create` 하위 명령을 사용하여 새 확장을 설정합니다. `EXTENSION-NAME`을 확장의 이름으로 바꾸고 `--precompiled=other`를 지정합니다.

    ```shell
    gh extension create --precompiled=other EXTENSION-NAME
    ```

1. 선택한 컴파일된 언어로 확장에 대한 몇 가지 초기 코드를 추가합니다.

1. 확장이 자동으로 빌드될 수 있도록 확장 빌드를 위한 코드로 `script/build.sh`를 채웁니다.

1. 출력된 지침에 따라 확장을 마무리하고 필요에 따라 게시합니다.

## 해석된 확장을 수동으로 만들기

1. 확장에 대해 `gh-EXTENSION-NAME`이라는 로컬 디렉터리를 만듭니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다. 예: `gh-whoami`.

1. 만든 디렉터리에서, 디렉터리와 이름과 동일한 실행 파일을 추가합니다.

  {% note %}

  **참고:** 파일이 실행 파일인지 확인하세요. Unix에서는 명령줄에서 `chmod +x file_name`을 실행하여 `file_name`을 실행 파일로 만들 수 있습니다. Windows에서 `git init -b main`, `git add file_name`, `git update-index --chmod=+x file_name`을 차례로 실행할 수 있습니다.

  {% endnote %}

1. 실행 파일에 스크립트를 작성합니다. 예를 들면 다음과 같습니다.

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. 디렉터리에서 확장을 로컬 확장으로 설치합니다.

   ```shell
   gh extension install .
   ```

1. 확장이 작동하는지 확인합니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다. 예: `whoami`.

   ```shell
   gh EXTENSION-NAME
   ```

1. 디렉터리에서 확장을 게시할 리포지토리를 만듭니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-EXTENSION-NAME --source=. --public --push
   ```

1. 필요에 따라 다른 사용자가 확장을 검색할 수 있도록 리포지토리 토픽 `gh-extension`을 추가합니다. 그러면 확장이 [`gh-extension` 토픽 페이지](https://github.com/topics/gh-extension)에 표시됩니다. 리포지토리 토픽을 추가하는 방법에 대한 자세한 내용은 “[토픽을 사용하여 리포지토리 분류](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)”를 참조하세요.

## 해석된 {% data variables.product.prodname_cli %} 확장을 작성하기 위한 팁

### 인수 및 플래그 처리

`gh my-extension-name` 명령 다음에 오는 모든 명령줄 인수는 확장 스크립트에 전달됩니다. bash 스크립트에서 `$1`, `$2` 등을 사용하여 인수를 참조할 수 있습니다. 인수를 사용하여 사용자 입력을 가져오거나 스크립트의 동작을 수정할 수 있습니다.

예를 들어 이 스크립트는 여러 플래그를 처리합니다. `-h` 또는 `--help` 플래그와 함께 호출될 경우 스크립트는 실행을 계속하는 대신 도움말 텍스트를 출력합니다. `--name` 플래그와 함께 호출될 경우 스크립트는 플래그 뒤의 다음 값을 `name_arg`로 설정합니다. `--verbose` 플래그와 함께 호출될 경우 스크립트는 다른 인사말을 출력합니다.

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### 비대화형 모드에서 핵심 명령 호출

일부 {% data variables.product.prodname_cli %} 핵심 명령은 사용자에게 입력하라는 메시지를 표시합니다. 이러한 명령을 사용하여 스크립팅할 때 프롬프트가 종종 바람직하지 않습니다. 프롬프트가 표시되지 않도록 하려면 인수를 통해 필요한 정보를 명시적으로 제공합니다.

예를 들어 프로그래밍 방식으로 이슈를 만들려면 제목과 본문을 지정합니다.

```shell
gh issue create --title "My Title" --body "Issue description"
```

### 프로그래밍 방식으로 데이터 가져오기

많은 핵심 명령은 프로그래밍 방식으로 데이터를 가져오기 위한 `--json` 플래그를 지원합니다. 예를 들어 끌어오기 요청의 수, 제목, 병합 가능성 상태를 나열하는 JSON 개체를 반환하려면 다음을 수행합니다.

```shell
gh pr list --json number,title,mergeStateStatus
```

GitHub에서 특정 데이터를 가져오는 핵심 명령이 없는 경우 [`gh api`](https://cli.github.com/manual/gh_api) 명령을 사용하여 GitHub API에 액세스할 수 있습니다. 예를 들어 현재 사용자에 대한 정보를 가져오려면 다음을 수행합니다.

```shell
gh api user
```

JSON 데이터를 출력하는 모든 명령에는 해당 데이터를 스크립트에서 즉시 사용할 수 있는 것으로 필터링하는 옵션도 있습니다. 예를 들어 현재 사용자의 이름을 가져오려면 다음을 수행합니다.

```shell
gh api user --jq '.name'
```

자세한 내용은 [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting)를 참조하세요.

## 미리 컴파일된 확장을 수동으로 만들기

1. 확장에 대해 `gh-EXTENSION-NAME`이라는 로컬 디렉터리를 만듭니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다. 예: `gh-whoami`.

1. 만든 디렉터리에서 일부 소스 코드를 추가합니다. 예를 들면 다음과 같습니다.

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. 디렉터리에서 확장을 로컬 확장으로 설치합니다.

    ```shell
    gh extension install .
    ```

1. 코드를 빌드합니다. 예를 들어 Go를 사용하여 `YOUR-USERNAME`을 GitHub 사용자 이름으로 바꿉니다.

    ```shell
    go mod init github.com/YOUR-USERNAME/gh-whoami
    go mod tidy
    go build
    ```

1. 확장이 작동하는지 확인합니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다. 예: `whoami`.

    ```shell
    gh EXTENSION-NAME
    ```

1. 디렉터리에서 확장을 게시할 리포지토리를 만듭니다. `EXTENSION-NAME`를 확장의 이름으로 바꿉니다.

  {% note %}

  **참고:** 컴파일 단계에서 생성된 이진을 버전 제어에 커밋하지 않도록 주의하세요.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-EXTENSION-NAME" >> .gitignore
    git add main.go go.* .gitignore && git commit -m 'Initial commit'
    gh repo create "gh-EXTENSION-NAME"
    ```

1. 미리 컴파일된 확장을 다른 사용자와 공유하기 위한 릴리스를 만듭니다. 지원하려는 각 플랫폼에 대해 컴파일하여 각 이진을 릴리스에 자산으로 첨부합니다. 릴리스에 첨부된 이진 실행 파일은 명명 규칙을 따라야 하며 OS-ARCHITECTURE\[EXTENSION\] 접미사가 있어야 합니다.

  예를 들어, Windows 64비트용으로 컴파일된 `whoami`라는 확장의 이름은 `gh-whoami-windows-amd64.exe`이고 Linux 32비트용으로 컴파일된 동일한 확장의 이름은 `gh-whoami-linux-386`입니다. `gh`에서 인식하는 OS 및 아키텍처 조합의 전체 목록을 보려면 [이 소스 코드](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696)를 참조하세요.

  {% note %}

  **참고:** 확장이 Windows에서 제대로 실행되려면 해당 자산 파일에 `.exe` 확장명이 있어야 합니다. 다른 운영 체제에는 확장이 필요하지 않습니다.

  {% endnote %}

  명령줄에서 릴리스를 만들 수 있습니다. 예를 들어:

  ```shell
  git tag v1.0.0
  git push origin v1.0.0
  GOOS=windows GOARCH=amd64 go build -o gh-EXTENSION-NAME-windows-amd64.exe
  GOOS=linux GOARCH=amd64 go build -o gh-EXTENSION-NAME-linux-amd64
  GOOS=darwin GOARCH=amd64 go build -o gh-EXTENSION-NAME-darwin-amd64
  gh release create v1.0.0 ./*amd64*

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."


## Tips for writing precompiled {% data variables.product.prodname_cli %} extensions

### Automating releases

Consider adding the [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) action to a workflow in your project. This action will automatically produce cross-compiled Go binaries for your extension and supplies build scaffolding for non-Go precompiled extensions.

### Using {% data variables.product.prodname_cli %} features from Go-based extensions

Consider using [go-gh](https://github.com/cli/go-gh), a Go library that exposes pieces of `gh` functionality for use in extensions.

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).
