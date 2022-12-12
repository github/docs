---
title: Git에서 GitHub 자격 증명 캐싱
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: '[HTTPS를 사용하여 {% data variables.product.product_name %} 리포지토리를 복제](/github/getting-started-with-github/about-remote-repositories)하는 경우 {% data variables.product.prodname_cli %} 또는 GCM(Git Credential Manager)을 사용하여 자격 증명을 기억해두는 것이 좋습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 95c4d00fa00dcb76d23338bf4a443f31a39f09e9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099253'
---
{% tip %}

**팁:** SSH를 사용하여 {% data variables.product.product_name %} 리포지토리를 복제하는 경우 다른 자격 증명을 사용하는 대신 SSH 키를 사용하여 인증할 수 있습니다. SSH 연결을 설정하는 방법에 대한 자세한 내용은 “[SSH 키 생성](/articles/generating-an-ssh-key)”을 참조하세요.

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %}는 Git 작업의 기본 프로토콜로 `HTTPS`가 선택된 경우 자동으로 Git 자격 증명을 저장하고 {% data variables.product.product_name %} 자격 증명으로 Git에 인증할지 묻는 프롬프트에 “예”라고 대답합니다.

1. macOS, Windows 또는 Linux에 {% data variables.product.prodname_cli %}를 [설치](https://github.com/cli/cli#installation)합니다.
2. 명령줄에서 `gh auth login`을 입력하고 프롬프트를 따릅니다.
   - Git 작업의 기본 프로토콜을 묻는 메시지가 표시되면 `HTTPS`를 선택합니다.
   - {% data variables.product.product_name %} 자격 증명으로 Git에 인증할 것인지 묻는 메시지가 표시되면 `Y`를 입력합니다.

{% data variables.product.prodname_cli %}에서 인증하는 방법에 대한 자세한 내용은 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)을 참조하세요.

## Git Credential Manager

GCM([Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager))은 자격 증명을 안전하게 저장하고 HTTPS를 통해 GitHub에 연결하는 또 다른 방법입니다. GCM은 2FA(2단계 인증)를 포함하여 사용자를 대신하여 인증을 관리하므로 [{% 데이터 variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)을(를) 수동으로 만들고 저장할 필요가 없습니다.

{% mac %}

1. [Homebrew](https://brew.sh/)를 사용하여 Git을 설치합니다.
  ```shell
  $ brew install git
  ```

2. Homebrew를 사용하여 GCM을 설치합니다.
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  MacOS의 경우 GCM이 자동으로 Git을 구성하므로 `git config`를 실행할 필요가 없습니다.

{% data reusables.gcm-core.next-time-you-clone %}

성공적으로 인증되면 자격 증명이 macOS 키 집합에 저장되고 HTTPS URL을 복제할 때마다 사용됩니다. 자격 증명을 변경하지 않는 한, Git에서 명령줄에 자격 증명을 다시 입력하도록 요구하지 않습니다.

{% endmac %}

{% windows %}

1. GCM을 포함하는 Git for Windows를 설치합니다. 자세한 내용은 [릴리스 페이지](https://github.com/git-for-windows/git/releases/latest)에서 “[Git for Windows 릴리스](https://github.com/git-for-windows/git/releases/latest)”를 참조하세요.

항상 최신 버전을 설치하는 것이 좋습니다. 최소한 GitHub에 대한 OAuth 지원을 제공하는 첫 번째 버전인 버전 2.29 이상을 설치합니다.

{% data reusables.gcm-core.next-time-you-clone %}

성공적으로 인증되면 자격 증명이 Windows Credential Manager에 저장되고 HTTPS URL을 복제할 때마다 사용됩니다. 자격 증명을 변경하지 않는 한, Git에서 명령줄에 자격 증명을 다시 입력하도록 요구하지 않습니다.

<br>

{% warning %}

**경고:** 이전 버전의 Git for Windows는 Windows용 Git Credential Manager와 함께 제공되었습니다. 이전 제품은 더 이상 지원되지 않으며 OAuth를 통해 GitHub에 연결할 수 없습니다. [최신 버전의 Git for Windows](https://github.com/git-for-windows/git/releases/latest)로 업그레이드하는 것이 좋습니다.

{% endwarning %}

{% warning %}

**경고:** Windows용 자격 증명 관리자에서 잘못되었거나 오래된 자격 증명을 캐시한 경우 Git에서 {% data variables.product.product_name %}에 액세스하지 못합니다. Git에서 자격 증명을 입력하라는 메시지가 표시되도록 캐시된 자격 증명을 초기화하려면 Windows 제어판의 사용자 계정 > 자격 증명 관리자에서 자격 증명 관리자에 액세스합니다. {% data variables.product.product_name %} 항목을 찾아서 삭제합니다. 

{% endwarning %}

{% endwindows %}

{% linux %}

Linux의 경우 Git 및 GCM을 설치한 다음, GCM을 사용하도록 Git을 구성합니다.

1. 배포판의 패키징 시스템에서 Git을 설치합니다. 지침은 실행하는 Linux 버전에 따라 다릅니다.

2. GCM을 설치합니다. [GCM 리포지토리의 지침](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions)을 참조하세요. 지침은 실행하는 Linux 버전에 따라 다릅니다.

3. GCM을 사용하도록 Git을 구성합니다. 선택할 수 있는 백업 저장소가 여러 개 있으므로 GCM 문서를 참조하여 설정을 완료합니다. 자세한 내용은 “[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)”를 참조하세요.

{% data reusables.gcm-core.next-time-you-clone %}

성공적으로 인증되면 자격 증명이 해당 시스템에 저장되고 HTTPS URL을 복제할 때마다 사용됩니다. 자격 증명을 변경하지 않는 한, Git에서 명령줄에 자격 증명을 다시 입력하도록 요구하지 않습니다.

Linux에 자격 증명을 저장하는 방법에 대한 자세한 내용은 Pro Git에서 [자격 증명 스토리지](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)를 참조하세요.

{% endlinux %}

<br>

자세한 내용을 보거나 GCM 관련 이슈를 보고하려면 “[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager)”에서 공식 GCM 문서를 참조하세요.
