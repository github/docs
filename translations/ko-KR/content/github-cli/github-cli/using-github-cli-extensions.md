---
title: GitHub CLI 확장 사용
intro: '다른 {% data variables.product.prodname_cli %} 사용자가 작성한 사용자 지정 확장을 사용하는 방법을 알아봅니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: bd7a637b98cba071befd4a30ee1e450acdb70c39
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009217'
---
## {% data variables.product.prodname_cli %} 확장 정보

{% note %}

**참고:** {% data variables.product.product_name %} 및 {% data variables.product.prodname_cli %} 외부의 확장은 {% data variables.product.product_name %}에 의해 인증되지 않으며 별도의 서비스 약관, 개인정보처리방침, 지원 설명서의 적용을 받습니다. 타사 확장을 사용할 때 위험을 완화하려면 확장을 설치하거나 업데이트하기 전에 확장의 소스 코드를 감사하세요.

{% endnote %}

{% data reusables.cli.cli-extensions %} {% data variables.product.prodname_cli %} 확장을 만드는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 확장 만들기](/github-cli/github-cli/creating-github-cli-extensions)”를 참조하세요.

확장은 로컬에 설치되며 사용자로 범위가 지정됩니다. 따라서 다른 컴퓨터에서 {% data variables.product.prodname_cli %}에 액세스하거나 다른 사용자가 동일한 컴퓨터에서 {% data variables.product.prodname_cli %}에 액세스하는 경우 확장을 사용할 수 없습니다.

## 확장 찾기

[`gh-extension` 토픽으로 리포지토리](https://github.com/topics/gh-extension)를 검색하여 확장을 찾을 수 있습니다.

## 확장 설치

확장을 설치하려면 `extensions install` 하위 명령을 사용합니다. `repo` 매개 변수를 확장의 리포지토리로 바꿉니다. 전체 URL(예: `https://github.com/octocat/gh-whoami`) 또는 소유자 및 리포지토리(예: `octocat/gh-whoami`)를 사용할 수 있습니다.

소유자 및 리포지토리가 사용되는 경우 `gh`는 현재 `gh`가 인증된 호스트 이름을 사용하여 확장을 설치합니다. 전체 URL 형식은 다른 호스트에서 확장을 설치할 때 유용합니다. 예를 들어 {% data variables.product.prodname_ghe_server %}의 사용자는 전체 리포지토리 URL을 사용하여 {% data variables.product.prodname_dotcom_the_website %} 또는 다른 호스트에서 확장을 설치해야 합니다.

현재 디렉터리에서 개발 중인 확장을 설치하려면 `.`를 `repo` 매개 변수의 값으로 사용합니다.

```shell
gh extension install REPO
```

동일한 이름의 확장이 이미 설치된 경우 명령이 실패합니다. 예를 들어, `octocat/gh-whoami`를 설치한 경우 `hubot/gh-whoami`를 설치하기 전에 제거해야 합니다.

## 설치된 확장 보기

설치된 모든 확장을 보려면 `extensions list` 하위 명령을 사용합니다. 출력에서는 또한 사용 가능한 업데이트가 있는 확장을 파악할 수 있습니다.

```shell
gh extension list
```

## 확장 업데이트

확장을 업데이트하려면 `extensions upgrade` 하위 명령을 사용합니다. `extension` 매개 변수를 확장의 이름으로 바꿉니다.

```shell
gh extension upgrade EXTENSION
```

설치된 모든 확장을 업데이트하려면 `--all` 플래그를 사용합니다.

```shell
gh extension upgrade --all
```

## 확장 제거

확장을 업데이트하려면 `extensions remove` 하위 명령을 사용합니다. `extension` 매개 변수를 확장의 이름으로 바꿉니다.

```shell
gh extension remove EXTENSION
```
