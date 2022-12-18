---
title: 원격 리포지토리 정보
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'GitHub의 공동 개발 방식에서 핵심은 로컬 리포지토리에서 {% data variables.product.product_name %}로 커밋을 게시하여 다른 사용자가 보고, 가져오고, 업데이트하도록 하는 것입니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130892'
---
## 원격 리포지토리 정보

원격 URL은 Git에서 “코드가 저장된 위치”를 나타내는 효율적인 방법입니다. 해당 URL은 GitHub, 다른 사용자의 포크 또는 완전히 다른 서버의 리포지토리일 수 있습니다.

다음 두 가지 유형의 URL 주소로만 푸시할 수 있습니다.

* HTTPS URL(예: `https://{% data variables.command_line.backticks %}/user/repo.git`)
* SSH URL(예: `git@{% data variables.command_line.backticks %}:user/repo.git`)

Git은 원격 URL을 이름과 연결하며, 기본 원격을 일반적으로 `origin`이라고 합니다.

## 원격 리포지토리 만들기

`git remote add` 명령을 사용하여 원격 URL을 이름과 일치시킬 수 있습니다.
예를 들어 명령줄에서 다음을 입력합니다.

```shell
git remote add origin &lt;REMOTE_URL>
```

이렇게 하면 이름 `origin`이 `REMOTE_URL`과 연결됩니다.

`git remote set-url` 명령을 사용하여 [원격의 URL을 변경](/get-started/getting-started-with-git/managing-remote-repositories)할 수 있습니다.

## 원격 리포지토리의 URL 선택

{% data variables.location.product_location %}에서 사용할 수 있는 리포지토리를 복제하는 방법에는 여러 가지가 있습니다.

계정에 로그인하는 동안 리포지토리를 볼 때, 리포지토리 세부 정보 아래에서 프로젝트를 컴퓨터에 복제하는 데 사용할 수 있는 URL을 확인할 수 있습니다.

원격 URL을 설정하거나 변경하는 방법에 대한 자세한 내용은 “[원격 리포지토리 관리](/get-started/getting-started-with-git/managing-remote-repositories)”를 참조하세요.

## HTTPS URL을 사용하여 복제

`https://` 복제 URL은 표시 유형에 관계없이 모든 리포지토리에서 사용할 수 있습니다. `https://` 복제 URL은 방화벽 또는 프록시 뒤에 있는 경우에도 작동합니다.

명령줄에서 HTTPS URL을 사용하여 원격 리포지토리에 `git clone`, `git fetch`, `git pull` 또는 `git push`하는 경우 Git에서 {% data variables.product.product_name %} 사용자 이름 및 암호를 묻는 메시지를 표시합니다. {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**팁**:
- {% data variables.product.prodname_dotcom %}와 통신할 때마다 Git에서 {% data variables.product.prodname_dotcom %} 자격 증명을 저장하도록 자격 증명 도우미를 사용할 수 있습니다. 자세한 내용은 “[Git에서 {% data variables.product.prodname_dotcom %} 자격 증명 캐싱](/github/getting-started-with-github/caching-your-github-credentials-in-git)”을 참조하세요.
- 명령줄에서 {% data variables.product.product_name %}에 인증하지 않고 리포지토리를 복제하려면 {% data variables.product.prodname_desktop %}을 대신 사용하여 복제할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_dotcom %} Desktop으로 리포지토리 복제](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”를 참조하세요.

{% endtip %}

 {% ifversion fpt or ghec %} SSH를 사용하려고 하지만 포트 22를 통해 연결할 수 없는 경우 HTTPS 포트를 통해 SSH를 사용할 수 있습니다. 자세한 내용은 “[HTTPS 포트를 통해 SSH 사용](/github/authenticating-to-github/using-ssh-over-the-https-port)”을 참조하세요.{% endif %}

## SSH URL을 사용하여 복제

SSH URL은 보안 프로토콜인 SSH를 통해 Git 리포지토리에 대한 액세스를 제공합니다. 이러한 URL을 사용하려면 컴퓨터에서 SSH 키페어를 생성하고 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 계정에 **공개** 키를 추가해야 합니다. 자세한 내용은 “[SSH를 사용하여 {% data variables.product.prodname_dotcom %}에 연결](/github/authenticating-to-github/connecting-to-github-with-ssh)”을 참조하세요.

SSH URL을 사용하여 원격 리포지토리에 `git clone`, `git fetch`, `git pull` 또는 `git push`하는 경우 암호를 입력하라는 메시지가 표시되며 SSH 키 암호를 제공해야 합니다. 자세한 내용은 “[SSH 키 암호 사용](/github/authenticating-to-github/working-with-ssh-key-passphrases)”을 참조하세요.

{% ifversion fpt or ghec %}SAML SSO(Single Sign-On)를 사용하는 조직에 액세스하는 경우 인증하기 전에 SSH 키에 조직 액세스 권한을 부여해야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서{% else %}에서 “[SAML Single Sign-On을 사용한 인증 정보](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)” 및 “[SAML Single Sign-On에 사용할 SSH 키 권한 부여](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}”를 참조하세요.{% endif %}{% endif %}

{% tip %}

**팁**: SSH URL을 사용하여 리포지토리를 컴퓨터에 복제하거나 프로덕션 서버에 코드를 안전하게 배포할 수 있습니다. 서버에서 키를 관리할 필요가 없도록 배포 스크립트에서 SSH 에이전트 전달을 사용할 수도 있습니다. 자세한 내용은 “[SSH 에이전트 전달 사용](/developers/overview/using-ssh-agent-forwarding)”을 참조하세요.

{% endtip %}

## {% data variables.product.prodname_cli %}를 사용하여 복제

{% data variables.product.prodname_cli %}를 설치하여 터미널에서 {% data variables.product.product_name %} 워크플로를 사용할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

{% ifversion not ghae %}
## Subversion을 사용하여 복제

[Subversion](https://subversion.apache.org/) 클라이언트를 사용하여 {% data variables.product.prodname_dotcom %}의 모든 리포지토리에 액세스할 수도 있습니다. Subversion은 Git과 다른 기능 집합을 제공합니다. 자세한 내용은 “[Subversion과 Git 간의 차이점은 무엇인가요?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)”를 참조하세요.

Subversion 클라이언트에서 {% data variables.product.prodname_dotcom %}의 리포지토리에 액세스할 수도 있습니다. 자세한 내용은 “[Subversion 클라이언트 지원](/github/importing-your-projects-to-github/support-for-subversion-clients)”을 참조하세요.
{% endif %}
