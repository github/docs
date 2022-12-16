---
title: GitHub CLI 참조
intro: '터미널 또는 {% data variables.product.prodname_cli %} 설명서에서 모든 {% data variables.product.prodname_cli %} 명령을 볼 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: reference
ms.openlocfilehash: 1da9b2ffe79af2c432a4dfc79f944f8656663733
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068545'
---
모든 최상위 {% data variables.product.prodname_cli %} 명령을 보려면 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh)를 참조하거나 인수 없이 `gh`를 호출합니다.

```shell
gh
```

특정 그룹의 모든 명령을 나열하려면 인수 없이 최상위 명령을 사용합니다. 예를 들어 [리포지토리를 관리하기 위한 명령](https://cli.github.com/manual/gh_repo)을 나열하려면 다음을 수행합니다.

```shell
gh repo
```

{% data variables.product.prodname_cli %}와 함께 사용할 수 있는 환경 변수를 보려면 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_help_environment)를 참조하거나 `environment` 명령을 사용합니다.

```shell
gh environment
```

{% data variables.product.prodname_cli %}와 함께 사용할 수 있는 구성 설정을 보려면 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_config)를 참조하거나 `config` 명령을 사용합니다.

```shell
gh config
```
