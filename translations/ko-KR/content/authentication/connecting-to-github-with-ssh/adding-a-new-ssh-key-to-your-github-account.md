---
title: GitHub 계정에 새 SSH 키 추가
intro: '{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 새(또는 기존) SSH 키를 사용하도록 계정을 구성하려면 계정에 키를 추가해야 합니다.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: 184abcd90c659f2154291f79d212dbafe11d0ed9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093755'
---
## 계정에 GPG 키 추가 정보

{% data reusables.ssh.about-ssh %} 자세한 내용은 “[SSH 정보](/authentication/connecting-to-github-with-ssh/about-ssh)”를 참조하세요.

{% ifversion ssh-commit-verification %} SSH를 사용하여 커밋 및 태그에 서명할 수도 있습니다. 커밋 서명에 대한 자세한 내용은 “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”를 참조하세요.{% endif %}

SSH 키 쌍을 생성한 후 계정에 대한 SSH 액세스를 사용하도록 설정하려면 {% ifversion fpt 또는 ghec 또는 ghes %}{% 데이터 variables.location.product_location %}{% elsif ghae %}{% 데이터 variables.product.product_name %}{% endif %}에 공개 키를 추가해야 합니다.

## 필수 구성 요소

{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 새 SSH 키를 추가하기 전에 다음 단계를 완료합니다.

1. 기존 SSH 키를 확인합니다. 자세한 내용은 “[기존 SSH 키 확인](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)”을 참조하세요.
1. 새 SSH 키를 생성하고 컴퓨터의 SSH 에이전트에 추가합니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.

## 계정에 새 SSH 키 추가

{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 새 SSH 인증 키를 추가한 후 SSH를 사용하도록 로컬 리포지토리를 다시 구성할 수 있습니다. 자세한 내용은 "[원격 URL을 HTTPS에서 SSH로 전환](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)"을 참조하세요.

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. **새 SSH 키** 또는 **SSH 키 추가** 를 클릭합니다.
{% ifversion ssh-commit-verification %} ![SSH 키 단추](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png) {% else %} ![SSH 키 단추](/assets/images/help/settings/ssh-add-ssh-key.png) {% endif %}
5. "제목" 필드에 새 키에 대한 설명이 포함된 레이블을 추가합니다. 예를 들어 개인용 노트북을 사용하는 경우 이 키를 “Personal laptop”이라고 부를 수 있습니다.
{% ifversion ssh-commit-verification %}
6. 인증 또는 서명 중 키 유형 하나를 선택합니다. 커밋 서명에 대한 자세한 내용은 “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”를 참조하세요.
{% endif %}
7. 키를 "키" 필드에 붙여넣습니다.
{% ifversion ssh-commit-verification %} ![키 필드](/assets/images/help/settings/ssh-key-paste-with-type.png) {% else %} ![키 필드](/assets/images/help/settings/ssh-key-paste.png) {% endif %}
8. **SSH 키 추가** 를 클릭합니다.
  ![키 추가 단추](/assets/images/help/settings/ssh-add-key.png){% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}를 사용하여 계정에 SSH 키를 추가하려면 먼저 {% data variables.product.prodname_cli %}에서 인증을 받아야 합니다. 자세한 내용은 {% data variables.product.prodname_cli %} 설명서의 “[`gh auth login`](https://cli.github.com/manual/gh_auth_login)”을 참조하세요.

{% ifversion ssh-commit-verification %}현재, {% data variables.product.prodname_cli %}는 SSH 인증 키를 추가하는 데에만 사용할 수 있습니다. SSH 서명 키는 추가할 수 없습니다.{% endif %}

GitHub 계정에 SSH 인증 키를 추가하려면 공개 키를 지정하는 `ssh-key add` 하위 명령을 사용합니다.

```shell
gh ssh-key add KEY-FILE
```

새 키의 제목을 포함하려면 `-t` 또는 `--title` 플래그를 사용합니다.

```shell
gh ssh-key add KEY-FILE --title "personal laptop"
```

"[새 SSH 키 생성](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"의 지침에 따라 SSH 키를 생성한 경우 이 명령을 사용하여 계정에 키를 추가할 수 있습니다.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## 추가 참고 자료

- "[SAML Single Sign-On에 사용할 SSH 키 권한 부여](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)" {% endif %}
