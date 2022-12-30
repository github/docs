---
title: GitHub Codespaces에 대한 GPG 확인 문제 해결
shortTitle: GPG verification
intro: 이 문서에서는 codespaces에서 커밋 서명과 관련된 오류에 대한 문제 해결 조언을 제공합니다.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167117'
---
GPG 확인을 사용하도록 설정하면 {% data variables.product.prodname_github_codespaces %}이(가) 선택한 리포지토리에서 만든 codespaces에서 커밋에 자동으로 서명합니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 GPG 확인 관리"를 참조하세요](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% data variables.product.prodname_github_codespaces %}이(가) 커밋에 서명하지 못하면 다음과 같은 오류가 발생할 수 있습니다.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

다음과 같은 경우 이 오류가 발생할 수 있습니다. 

- GPG 확인을 사용하지 않도록 설정했으며 기존 codespace에서 서명되지 않은 일반 커밋을 만들려고 합니다.
- GPG 확인을 사용하도록 설정했지만 {% data variables.product.prodname_github_codespaces %}이(가) 커밋에 서명하는 데 필요한 Git 구성을 재정의했습니다(예: {% data variables.product.prodname_github_codespaces %}을 Git 구성 파일이 포함된 dotfiles 리포지토리와 연결).

## GPG 확인을 사용하지 않도록 설정 한 후 오류

GPG 확인을 사용하도록 설정하면 {% data variables.product.prodname_github_codespaces %}은 기본적으로 codespaces에서 만드는 모든 커밋에 서명합니다. Git 구성 값을 로 설정 `commit.gpgsign` 하여 이 작업을 수행합니다 `true`.

GPG 확인을 사용하지 않도록 설정하고 기존 codespace에서 작업하는 경우 이 값은 여전히 로 `true`설정됩니다. 즉, {% data variables.product.prodname_github_codespaces %}은(는) 커밋에 서명하려고 하지만 GPG 확인 설정을 사용하지 않도록 설정했기 때문에 서명할 수 없습니다.

codespace에서 일반 서명되지 않은 커밋을 계속하려면 터미널에 다음 명령을 입력하여 의 `false` 기본값으로 다시 설정합니다`commit.gpgsign`.

```Shell{:copy}
git config --unset commit.gpgsign
```

구성에서 값이 올바르게 제거되었는지 확인하려면 를 입력 `git config --list`하면 됩니다. 목록에 값 `commit.gpgsign` 이 표시되지 않아야 합니다.

## 충돌하는 구성으로 인한 오류

커밋에 자동으로 서명하기 위해 {% data variables.product.prodname_github_codespaces %}은 codespace에서 특정 Git 구성 값을 설정합니다. {% data variables.product.prodname_github_codespaces %}로 설정된 값을 재정의하는 경우 커밋에 서명하지 못할 수 있습니다. 

{% data variables.product.prodname_github_codespaces %}을(를) Git 구성 파일이 포함된 dotfiles 리포지토리와 연결한 경우 실수로 이러한 값을 재정의할 수 있습니다. {% data variables.product.prodname_github_codespaces %}와 함께 dotfiles를 사용하는 방법에 대한 자세한 내용은 "[계정에 대한 {% data variables.product.prodname_github_codespaces %} 개인 설정"을 참조하세요](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles).

### 충돌하는 구성 확인

GPG를 사용하여 커밋에 서명하기 위해 {% data variables.product.prodname_github_codespaces %}는 시스템 수준에서 다음 Git 구성 값을 자동으로 설정합니다.

| 구성 설정 | 필수 값 |
| --------------------- | -------------- |
| `user.name` | {% data variables.product.prodname_dotcom %} 프로필에 설정된 전체 이름과 일치해야 합니다. |
| `credential.helper` | `/.codespaces/bin/gitcredential_github.sh`로 설정해야 합니다. |
| `gpg.program` | `/.codespaces/bin/gh-gpgsign`로 설정해야 합니다. |

이러한 값이 codespace에서 올바르게 설정되었는지 확인하려면 명령을 사용할 `git config --list --show-origin` 수 있습니다. {% data variables.product.prodname_github_codespaces %}은(는) 시스템 수준에서 이 구성을 설정하므로 필요한 구성 설정은 에서 `/usr/local/etc/gitconfig`와야 합니다.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

위에 나열된 값 외에도 codespaces에 사용된 dotfile에 다음 값이 포함된 경우 오류가 발생할 수 있습니다.

- `user.signingkey` Git 구성 값
- `commit.gpgsign` Git 구성 값
- 수동 집합 `GITHUB_TOKEN`

### 충돌하는 구성 제거

{% data variables.product.prodname_github_codespaces %}에 대한 자동 GPG 확인을 사용하도록 설정하려면 codespaces에 사용되는 dotfile에서 충돌하는 구성을 제거해야 합니다.

예를 들어 로컬 컴퓨터의 전역 `.gitconfig` 파일에 값이 포함되어 `gpg.program` 있고 {% data variables.product.prodname_github_codespaces %}와 연결된 dotfiles 리포지토리에 이 파일을 푸시한 경우 이 파일에서 제거하고 `gpg.program` 로컬 컴퓨터의 시스템 수준에서 설정하는 것이 좋습니다.

{% note %}

**참고:** dotfiles 리포지토리에 대한 변경 내용은 사용자가 만든 새 codespace에 적용되지만 기존 codespace에는 적용되지 않습니다.

{% endnote %}

1. 로컬 컴퓨터에서 터미널을 엽니다.
2. (Mac/Linux) 또는 `C:\Users\YOUR-USER\.gitconfig` (Windows)에서 `~/.gitconfig` 충돌하는 값을 제거하려면 명령을 사용합니다`git config --global --unset`.

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. {% data variables.product.prodname_dotcom %}에서 변경 내용을 dotfiles 리포지토리에 푸시합니다.
4. 필요에 따라 로컬 구성을 유지하려면 dotfiles 리포지토리에 푸시하지 않는 Git 구성 파일에서 값을 다시 설정합니다. 

   예를 들어 플래그를 `--system` 사용하여 에서 시스템 수준 파일 `PATH/etc/gitconfig`의 구성을 설정할 수 있습니다. 여기서 `PATH` 은 시스템에 Git이 설치된 디렉터리입니다.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

또는 dotfiles 리포지토리에 과 같은 `install.sh`인식된 파일에 설치 스크립트가 포함된 경우 환경 변수를 사용하여 `$CODESPACES` codespace에 없을 때만 설정하는 `gpg.program` 등의 조건부 논리를 추가할 수 있습니다. 다음 예제 `-z "$CODESPACES"` 에서는 codespace에 없는 경우 를 반환 `true` 합니다.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## 추가 참고 자료
- “[커밋 서명 확인 정보](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”
- [`git config`](https://git-scm.com/docs/git-config) 공식 Git 설명서에서
