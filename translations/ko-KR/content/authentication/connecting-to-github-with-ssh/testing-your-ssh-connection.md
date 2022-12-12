---
title: SSH 연결 테스트
intro: 'SSH 키를 설정하고 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 추가한 후 연결을 테스트할 수 있습니다.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 27a5d2b45ccad880ca94a1fffd3dd524ac867520
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094035'
---
SSH 연결을 테스트하기 전에 다음을 수행해야 합니다.
- [기존 SSH 키 확인](/articles/checking-for-existing-ssh-keys)
- [새 SSH 키 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [GitHub 계정에 새 SSH 키 추가](/articles/adding-a-new-ssh-key-to-your-github-account)

연결을 테스트할 때 이전에 만든 SSH 키 암호를 사용하여 이 작업을 인증해야 합니다. SSH 키 암호를 사용하는 방법에 대한 자세한 내용은 “[SSH 키 암호 사용](/articles/working-with-ssh-key-passphrases)”을 참조하세요.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 다음을 입력합니다.
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  다음과 같은 경고가 표시될 수 있습니다.

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. 표시되는 메시지의 지문이 {% ifversion fpt or ghec %}[{% data variables.product.prodname_dotcom %}의 공개 키 지문](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %}엔터프라이즈의 공개 키 지문{% endif %}과 일치하는지 확인합니다. 일치하는 경우 `yes`를 다음을 입력합니다.
  ```shell
  > Hi USERNAME! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  다음과 같은 오류 메시지가 나타날 수 있습니다.
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  이는 특정 Linux 배포판의 알려진 문제입니다. 자세한 내용은 [“오류: 에이전트에서 서명 실패를 인정했습니다](/articles/error-agent-admitted-failure-to-sign)”를 참조하세요.

  {% endlinux %}

   {% note %}

   **참고:** 원격 명령은 코드 1을 사용하여 종료되어야 합니다.

   {% endnote %}

4. 결과 메시지에 사용자 이름이 포함되어 있는지 확인합니다. “permission denied”(사용 권한 거부됨) 메시지가 표시되면 [“오류: 사용 권한 거부됨(publickey)”](/articles/error-permission-denied-publickey)을 참조하세요.
