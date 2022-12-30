---
title: '오류: 키가 이미 사용 중임'
intro: '이 오류는 이미 다른 계정 또는 리포지토리에 추가된 [키를 추가](/articles/adding-a-new-ssh-key-to-your-github-account) 하려고 할 때 발생합니다.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: ac5bf63d3c7763bb3df38f031a4e79a31d4f572c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094211'
---
## 키가 사용된 위치 찾기

키가 이미 사용된 위치를 확인하려면 터미널을 열고 `ssh` 명령을 입력합니다. `-i` 플래그를 사용하여 확인하려는 키의 경로를 제공합니다.

```shell
$ ssh -T -ai ~/.ssh/id_rsa git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.location.product_location %} using a specific ssh key
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

응답의 *사용자 이름은* {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정입니다. 응답이 “username/repo”와 같이 표시되면 키가 [배포 키](/guides/managing-deploy-keys#deploy-keys)로 리포지토리에 연결된 것입니다.


SSH가 명령줄에 제공된 키만 사용하도록 하려면 `-o`를 사용하여 `IdentitiesOnly=yes` 옵션을 추가합니다.

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i ~/.ssh/id_rsa git@{% data variables.command_line.codeblock %}
```

## 문제 해결

이 문제를 해결하려면 먼저 다른 계정 또는 리포지토리에서 키를 제거한 다음 [계정에 추가](/articles/adding-a-new-ssh-key-to-your-github-account)합니다.

키를 전송할 수 있는 권한이 없고 사용자에게 연락할 수 없는 경우 키 쌍을 제거하고 [새 키 쌍을 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)합니다.

## 키 배포

키가 한 리포지토리에 배포 키로 연결되면 다른 리포지토리에서 사용할 수 없습니다.  배포 키를 설정하는 동안 이 오류가 발생하는 경우 “[배포 키 관리](/guides/managing-deploy-keys)”를 참조하세요.
