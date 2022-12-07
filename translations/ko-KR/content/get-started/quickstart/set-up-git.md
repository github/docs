---
title: Git 설정
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: '{% data variables.product.prodname_dotcom %}의 핵심은 Git이라는 오픈 소스 VCS(버전 제어 시스템)입니다. Git은 컴퓨터에서 로컬로 발생하는 모든 {% data variables.product.prodname_dotcom %} 관련 사항을 담당합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643959'
---
## Git 사용

명령줄에서 Git을 사용하려면 컴퓨터에 Git을 다운로드, 설치 및 구성해야 합니다. 명령줄에서 {% data variables.product.prodname_cli %}를 설치하여 {% data variables.product.prodname_dotcom %}를 사용할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

Git을 로컬에서 사용하되 명령줄은 사용하지 않으려면 [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) 클라이언트를 대신 다운로드하여 설치할 수 있습니다.  자세한 내용은 “[{% data variables.product.prodname_desktop %} 설치 및 구성](/desktop/installing-and-configuring-github-desktop/)”을 참조하세요.

로컬에서 파일을 사용할 필요가 없는 경우 {% data variables.product.product_name %}을 사용하면 브라우저에서 다음을 비롯해 더 많은 Git 관련 작업을 직접 완료할 수 있습니다.

- [리포지토리 만들기](/articles/create-a-repo)
- [리포지토리 포크](/articles/fork-a-repo)
- [파일 관리](/repositories/working-with-files/managing-files)
- [소셜 기능 이용](/articles/be-social)

## Git 설치

1. [최신 버전의 Git을 다운로드하여 설치](https://git-scm.com/downloads)합니다.

   {% note %}
   
   **참고**: Chrome OS 디바이스를 사용하는 경우 추가 설정이 필요합니다.
   
   1. Chrome OS 디바이스의 Google Play 스토어에서 Termux 같은 터미널 에뮬레이터를 설치합니다.
   1. 설치한 터미널 에뮬레이터에서 Git을 설치합니다. 예를 들어 Termux에서 `apt install git`을 입력한 다음 메시지가 표시되면 `y`를 입력합니다. 
   
   {% endnote %}

1. [Git에서 사용자 이름을 설정](/github/getting-started-with-github/setting-your-username-in-git)합니다.
1. [커밋 메일 주소를 설정](/articles/setting-your-commit-email-address)합니다.

## Git에서 {% data variables.product.prodname_dotcom %}으로 인증

Git에서 {% data variables.product.prodname_dotcom %} 리포지토리에 연결하는 경우 HTTPS 또는 SSH를 사용하여 {% data variables.product.product_name %}으로 인증해야 합니다.

{% note %}

**참고:** HTTP 또는 SSH의 경우 {% data variables.product.prodname_cli %}를 사용하여 {% data variables.product.product_name %}에 인증할 수 있습니다. 자세한 내용은 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)를 참조하세요.

{% endnote %}

### HTTPS를 통한 연결(권장)

HTTPS를 사용하여 복제하는 경우 자격 증명 도우미를 사용하여 Git에서 {% data variables.product.prodname_dotcom %} 자격 증명을 캐시할 수 있습니다. 자세한 내용은 "[HTTPS url을 사용하여 복제](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" 및 "[Git에서 {% data variables.product.prodname_dotcom %} 자격 증명 캐싱](/github/getting-started-with-github/caching-your-github-credentials-in-git)"을 참조하세요.

### SSH를 통한 연결

SSH를 사용하여 복제하는 경우 {% data variables.product.product_name %}에서 푸시하거나 가져오는 데 사용하는 각 컴퓨터에 SSH 키를 생성해야 합니다. 자세한 내용은 "[SSH url을 사용하여 복제](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" 및 "[새 SSH 키 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"을 참조하세요.

## 다음 단계

이제 Git 및 {% data variables.product.prodname_dotcom %}이 모두 설정되었습니다. 이제 프로젝트를 사용할 리포지토리를 만들도록 선택할 수 있습니다. 리포지토리에 코드를 저장하면 코드를 백업하고 전 세계에 공유할 수 있습니다. 

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
