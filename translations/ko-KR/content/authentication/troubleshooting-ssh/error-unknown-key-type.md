---
title: '오류: 알 수 없는 키 유형'
intro: '이 오류는 사용한 SSH 키 형식이 인식되지 않거나 SSH 클라이언트에서 지원하지 않음을 의미합니다. '
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065900'
---
## `unknown key type` 오류 정보

새 SSH 키를 생성할 때 SSH 클라이언트가 지정된 키 유형을 지원하지 않는 경우 `unknown key type` 오류가 표시될 수 있습니다.{% mac %}macOS에서 문제를 해결하기 위해 SSH 클라이언트를 업데이트하거나 새 SSH 클라이언트를 설치할 수 있습니다.

## 필수 조건

Homebrew가 설치되어 있어야 합니다. 자세한 내용은 Homebrew 설명서에서 [설치 가이드](https://docs.brew.sh/Installation)를 참조하세요.

## 문제 해결

{% warning %}

**경고:** OpenSSH를 설치하면 컴퓨터에서 Apple 키 집합에 저장된 암호를 검색할 수 없습니다. SSH를 사용하여 {% data variables.product.prodname_dotcom %} 또는 다른 웹 서비스에 인증할 때마다 암호를 입력하거나 하드웨어 보안 키를 조작해야 합니다.

OpenSSH를 제거하면 키 집합에 저장된 암호를 다시 검색할 수 있습니다. 터미널에서 `brew uninstall openssh` 명령을 입력하여 OpenSSH를 제거할 수 있습니다.

{% endwarning %}

1. 터미널을 엽니다.
2. `brew install openssh` 명령을 입력합니다.
3. 터미널을 종료했다가 다시 시작합니다.
4. 새 SSH 키를 다시 생성하는 절차를 시도합니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)”를 참조하세요.

{% endmac %}{% linux %}Linux에서 문제를 해결하려면 Linux 배포용 패키지 관리자를 사용하여 새 버전의 OpenSSH를 설치하거나 원본에서 새 버전을 컴파일합니다. 다른 버전의 OpenSSH를 설치하는 경우 다른 애플리케이션에서 SSH를 통해 인증하는 기능이 영향을 받을 수 있습니다. 자세한 내용은 배포 설명서를 검토하세요.{% endlinux %}
