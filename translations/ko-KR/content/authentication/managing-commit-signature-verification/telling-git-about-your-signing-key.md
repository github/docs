---
title: 서명 키에 대해 Git에 알리기
intro: '로컬로 커밋에 서명하려면 사용하려는 GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} 또는 X.509 키가 있음을 Git에 알려야 합니다.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: d70911bdf3ff5de93537f7c9acb1374a4f2c90e3
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179951'
---
{% mac %}

## GPG 키에 대해 Git에 알리기

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 커밋자 ID 및 계정과 연결된 확인된 전자 메일 주소와 일치하는 GPG 키를 사용하는 경우 커밋 서명 및 태그 서명을 시작할 수 있습니다.

{% note %}

커밋자 ID와 일치하는 GPG 키가 없는 경우 메일을 기존 키와 연결해야 합니다. 자세한 내용은 “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”을 참조하세요.

{% endnote %}

여러 GPG 키가 있는 경우 사용할 GPG 키를 Git에 알려야 합니다.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. GPG 도구 모음을 사용하지 않는 경우 `zsh` 셸에서 다음 명령을 실행하여 `.zshrc`파일(있는 경우)에 또는 `.zprofile` 파일에 GPG 키를 추가합니다.
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  또는 `bash` 셸을 사용하는 경우 다음 명령을 실행합니다.
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. 필요에 따라 필요한 경우 PIN 또는 암호를 입력하라는 메시지를 표시하려면 `pinentry-mac`을 설치합니다. 예를 들어 [Homebrew](https://brew.sh/) 사용하여 다음을 수행합니다.
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## GPG 키에 대해 Git에 알리기

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 커밋자 ID 및 계정과 연결된 확인된 전자 메일 주소와 일치하는 GPG 키를 사용하는 경우 커밋 서명 및 태그 서명을 시작할 수 있습니다.

{% note %}

커밋자 ID와 일치하는 GPG 키가 없는 경우 메일을 기존 키와 연결해야 합니다. 자세한 내용은 “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”을 참조하세요.

{% endnote %}

여러 GPG 키가 있는 경우 사용할 GPG 키를 Git에 알려야 합니다.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## GPG 키에 대해 Git에 알리기

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 커밋자 ID 및 계정과 연결된 확인된 전자 메일 주소와 일치하는 GPG 키를 사용하는 경우 커밋 서명 및 태그 서명을 시작할 수 있습니다.

{% note %}

커밋자 ID와 일치하는 GPG 키가 없는 경우 메일을 기존 키와 연결해야 합니다. 자세한 내용은 “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”을 참조하세요.

{% endnote %}

여러 GPG 키가 있는 경우 사용할 GPG 키를 Git에 알려야 합니다.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. `.bashrc` 시작 파일에 GPG 키를 추가하려면 다음 명령을 실행합니다.
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Git에 SSH 키에 대해 알리기

기존 SSH 키를 사용하여 커밋 및 태그에 서명하거나 서명을 위해 특별히 새 키를 생성할 수 있습니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## 추가 정보

- “[GitHub 계정에 새 SSH 키를 추가합니다](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”.
- “[커밋 서명](/articles/signing-commits)”
- “[태그 서명](/articles/signing-tags)”
