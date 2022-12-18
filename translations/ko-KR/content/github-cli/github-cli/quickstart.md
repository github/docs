---
title: GitHub CLI 빠른 시작
intro: '{% data variables.product.prodname_cli %} 사용을 시작하여 명령줄에서 {% data variables.product.company_short %} 작업을 합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
ms.openlocfilehash: 4d944c10c03ab054032d9bd27834b507efa3826f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094259'
---
## {% data variables.product.prodname_cli %} 정보

{% data reusables.cli.about-cli %}

## 시작

1. macOS, Windows 또는 Linux에 {% data variables.product.prodname_cli %}를 [설치](https://github.com/cli/cli#installation)합니다.
1. 명령줄에서 {% data variables.product.company_short %}에 인증합니다.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %} {% 데이터 variables.location.product_location %}에 인증하려면 플래그를 `--hostname` 사용합니다.

  ```shell
  gh auth login --hostname HOSTNAME
  ```

  {% endif %}
1. 명령줄에서 {% data variables.product.company_short %} 작업을 시작합니다. 예를 들어 `gh issue status` 또는 `gh issue list --assignee @me`로 작업할 이슈를 찾습니다. `gh pr create`로 끌어오기 요청을 만듭니다. `gh pr checkout`, `gh pr diff`, `gh pr review`로 끌어오기 요청을 검토합니다.

## 다음 단계

- 텍스트 편집기를 여는 명령에 사용할 텍스트 편집기를 {% data variables.product.prodname_cli %}에 알립니다. 예를 들어 기본 설정 텍스트 편집기를 {% data variables.product.prodname_vscode %}로 설정하려면 `gh config set editor "code -w"`를 입력합니다. 자세한 내용은 [`gh config set`](https://cli.github.com/manual/gh_config_set)를 참조하세요.

- 일반적으로 실행하는 명령에 대한 별칭을 정의합니다. 예를 들어 `gh alias set prd "pr create --draft"`를 실행할 경우, 초안 끌어오기 요청을 빠르게 열려면 `gh prd`를 실행할 수 있습니다. 자세한 내용은 [`gh alias`](https://cli.github.com/manual/gh_alias)를 참조하세요.

- {% data variables.product.prodname_cli %} 확장을 사용하여 사용자 지정 명령을 만들거나 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_cli %} 확장 사용](/github-cli/github-cli/using-github-cli-extensions)” 및 “[{% data variables.product.prodname_cli %} 확장 만들기](/github-cli/github-cli/creating-github-cli-extensions)”를 참조하세요.

- {% data variables.product.prodname_cli %}로 실행할 수 있는 모든 명령에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 참조](/github-cli/github-cli/github-cli-reference)”를 참조하세요.
