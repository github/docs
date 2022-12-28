---
title: HTTPS 포트를 통해 SSH 사용
intro: '경우에 따라 방화벽은 SSH 연결을 완전히 허용하지 않습니다.  [자격 증명 캐싱과 함께 HTTPS 복제](/github/getting-started-with-github/caching-your-github-credentials-in-git)를 사용할 수 없는 경우 HTTPS 포트를 통해 만들어진 SSH 연결을 사용하여 복제를 시도할 수 있습니다.  대부분의 방화벽 규칙은 이를 허용해야 하지만 프록시 서버가 방해할 수 있습니다.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190324'
---
{% tip %}

**{% data variables.product.prodname_ghe_server %} 사용자**: 현재 HTTPS 포트를 통해 SSH를 사용하여 {% data variables.product.prodname_ghe_server %}에 액세스할 수는 없습니다.

{% endtip %}

HTTPS 포트를 통한 SSH가 가능한지 테스트하려면 다음 SSH 명령을 실행합니다.

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**참고**: 포트 443의 호스트 이름은 가 아니라 `{% data variables.command_line.backticks %}`입니다`ssh.{% data variables.command_line.backticks %}`.

{% endnote %}

성공했다면 다행입니다. 실패한 경우 [문제 해결 가이드에 따라야](/articles/error-permission-denied-publickey) 할 수 있습니다.

이제 리포지토리를 복제하려면 다음 명령을 실행할 수 있습니다.

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## HTTPS를 통해 SSH 연결 사용

포트 443을 통해 SSH할 `git@ssh.{% data variables.command_line.backticks %}` 수 있는 경우 SSH 설정을 재정의하여 {% data variables.location.product_location %}에 대한 모든 연결이 해당 서버 및 포트를 통해 실행되도록 할 수 있습니다.

SSH 구성 파일에서 이렇게 설정하려면 `~/.ssh/config`에 있는 파일을 편집하여 다음 섹션을 추가합니다.

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

{% data variables.location.product_location %}에 한 번 더 연결하여 이 작업이 작동하는지 테스트할 수 있습니다.

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## 알려진 호스트 업데이트

포트 443으로 전환한 후 GitHub와 처음 상호 작용할 때 호스트가 에서 `known_hosts`발견되지 않았거나 다른 이름으로 발견되었다는 경고 메시지가 나타날 수 있습니다.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

SSH 지문이 GitHub의 게시된 지문 중 하나와 일치한다고 가정하면 이 질문에 "예"라고 대답하는 것이 안전합니다. 지문 목록은 "[Github의 SSH 키 지문"을 참조하세요.](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)
