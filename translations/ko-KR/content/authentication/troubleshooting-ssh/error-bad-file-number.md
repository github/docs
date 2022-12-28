---
title: '오류: 잘못된 파일 번호'
intro: '이 오류는 일반적으로 서버에 연결할 수 없음을 의미하며, 방화벽 및 프록시 서버로 인해 발생하는 경우가 많습니다.'
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
  - /github/authenticating-to-github/troubleshooting-ssh/error-bad-file-number
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 10a0035281f7afd4297193100bc5f48aa65afac9
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009100'
---
원격 Git 명령 또는 SSH를 실행하는 경우 연결 시간이 초과될 수 있습니다.

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

## 문제 해결

### HTTPS 사용

종종 가장 간단한 솔루션은 SSH를 완전히 피하는 것입니다. 대부분의 방화벽 및 프록시는 문제없이 HTTPS 트래픽을 허용합니다. 이를 활용하려면 사용 중인 [원격 URL](/github/getting-started-with-github/about-remote-repositories)을 변경하세요.

```shell
$ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPO-NAME.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

### 다른 네트워크에서 테스트

컴퓨터를 방화벽이 없는 다른 네트워크에 연결할 수 있는 경우 {% data variables.product.product_name %}에 대한 SSH 연결을 테스트해 볼 수 있습니다. 모든 것이 정상적으로 작동하는 경우 네트워크 관리자에게 문의하여 {% data variables.product.product_name %}에 대한 SSH 연결이 성공할 수 있도록 방화벽 설정을 변경하는 데 도움을 요청하세요.

{% ifversion fpt or ghec %}

### HTTPS 포트를 통해 SSH 사용

HTTPS를 사용이 옵션이 아니며 방화벽 관리자가 SSH 연결 허용을 거부하는 경우 대신 [HTTPS 포트를 통해 SSH](/articles/using-ssh-over-the-https-port)를 사용해 볼 수 있습니다.

{% endif %}

{% ifversion fpt or ghec %}

## 추가 참고 자료

- “[연결 문제 해결](/articles/troubleshooting-connectivity-problems)”

{% endif %}
