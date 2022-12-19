---
title: '오류: 에이전트가 서명 실패를 인정했습니다.'
intro: '드문 경우지만 Linux에서 SSH를 통해 {% data variables.product.product_name %}에 연결하면 `"Agent admitted failure to sign using the key"` 오류가 발생합니다. 이 문제를 해결하려면 다음 단계를 수행합니다.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/troubleshooting-ssh/error-agent-admitted-failure-to-sign
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Agent failure to sign
ms.openlocfilehash: 46817ec184394b93a27cbb796ea59a71f4a63248
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093747'
---
Linux 컴퓨터에서 {% 데이터 variables.location.product_location %}에 SSH를 시도하면 터미널에 다음 메시지가 표시 될 수 있습니다.

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

자세한 내용은 <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>이 이슈 보고서</a>를 참조하세요.

## 해결 방법

`ssh-add`로 SSH 에이전트에 키를 로드하여 이 오류를 해결할 수 있습니다.

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/YOU/.ssh/id_rsa: [tippy tap]
> Identity added: /home/YOU/.ssh/id_rsa (/home/YOU/.ssh/id_rsa)
```

키에 기본 파일 이름(`/.ssh/id_rsa`)이 없으면 경로를 `ssh-add`로 전달해야 합니다.

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/YOU/.ssh/my_other_key: [tappity tap tap]
> Identity added: /home/YOU/.ssh/my_other_key (/home/YOU/.ssh/my_other_key)
```
