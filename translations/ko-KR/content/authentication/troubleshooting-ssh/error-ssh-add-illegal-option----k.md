---
title: '오류: ssh-add: 잘못된 옵션 -- K'
intro: 이 오류는 `ssh-add`의 버전이 macOS 키 집합 통합을 지원하지 않음을 의미하므로 키 집합에 암호를 저장할 수 있습니다.
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088201'
---
Apple 표준 버전의 `ssh-add`에 있는 `-K` 옵션은 ssh-agent에 SSH 키가 추가될 때 키 집합에 암호를 자동으로 저장합니다. 다른 버전의 `ssh-add`를 설치한 경우 `-K`가 지원되지 않을 수 있습니다.

## 문제 해결

ssh-agent에 SSH 프라이빗 키를 추가하기 위해 Apple 버전의 `ssh-add`에 대한 경로를 지정할 수 있습니다.

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**참고:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## 추가 참고 자료

- “[새 SSH 키 생성 및 ssh-agent에 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”
- [SSH-ADD에 대한 Linux 기본 페이지](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- SSH-ADD에 대한 Apple 기본 페이지를 보려면 터미널에서 `man ssh-add`를 실행합니다.
