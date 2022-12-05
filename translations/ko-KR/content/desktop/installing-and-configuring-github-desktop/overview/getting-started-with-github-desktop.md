---
title: GitHub Desktop 시작하기
intro: '컴퓨터에서 직접 프로젝트에 기여할 수 있도록 {% data variables.product.prodname_desktop %}을 설정, 인증 및 구성하는 방법을 알아봅니다.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117319'
---
## 소개
{% data variables.product.prodname_desktop %}은 명령줄 또는 웹 브라우저 대신 GUI를 사용하여 {% data variables.product.prodname_dotcom %}와 상호 작용할 수 있는 애플리케이션입니다. {% data variables.product.prodname_desktop %}은 사용자와 팀이 Git 및 {% data variables.product.prodname_dotcom %}와 함께 모범 사례를 사용하여 협업하도록 권장합니다. {% data variables.product.prodname_desktop %}을 사용하여 변경 내용을 시각적으로 확인하면서 데스크톱에서 대부분의 Git 명령을 완료할 수 있습니다. {% data variables.product.prodname_desktop %}을 사용하여 원격 리포지토리로 푸시, 원격 리포지토리에서 끌어오기 및 원격 리포지토리 복제를 수행하고 커밋 특성 지정 및 끌어오기 요청 만들기와 같은 협업 도구를 사용할 수 있습니다.

이 가이드는 애플리케이션을 설정하고, 계정을 인증하고, 기본 설정을 구성하고, {% data variables.product.prodname_desktop %}을 사용하여 프로젝트를 관리하는 기본 사항을 소개하여 {% data variables.product.prodname_desktop %}을 시작하는 데 도움이 됩니다. 이 가이드를 통해 작업한 후 {% data variables.product.prodname_desktop %}을 사용하여 프로젝트에서 협업하고 원격 리포지토리에 연결할 수 있습니다.

{% data variables.product.prodname_desktop %}을 시작하기 전에 Git 및 {% data variables.product.prodname_dotcom %}에 대해 기본적으로 이해하는 것이 유용할 수 있습니다. 자세한 내용은 다음 문서를 참조하세요.

- "[Git 사용](/github/getting-started-with-github/using-git)"
- "[{% data variables.product.prodname_dotcom %}에 대한 학습](/github/getting-started-with-github/learning-about-github)"
- "[{% data variables.product.prodname_dotcom %} 시작하기](/github/getting-started-with-github)"

{% data variables.product.prodname_desktop %}은 오픈 소스 프로젝트입니다. 로드맵을 보거나, 프로젝트에 기여하거나, 이슈를 열어 피드백 또는 기능 요청을 제공할 수 있습니다. 자세한 내용은 [`desktop/desktop`](https://github.com/desktop/desktop) 리포지토리를 참조하세요.

## 1부: 설치 및 인증
지원되는 모든 운영 체제에 {% data variables.product.prodname_desktop %}을 설치할 수 있습니다. 자세한 내용은 “[지원되는 운영 체제](/desktop/getting-started-with-github-desktop/supported-operating-systems)”를 참조하세요.

{% data variables.product.prodname_desktop %}을 설치하려면 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)에 대한 다운로드 페이지를 방문하세요. 자세한 내용은 “[{% data variables.product.prodname_desktop %} 설치](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)”를 참조하세요.

{% data variables.product.prodname_desktop %}을 설치한 후 {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에서 계정으로 애플리케이션을 인증할 수 있습니다. 인증을 통해 {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에서 원격 리포지토리에 연결할 수 있습니다.

{% mac %}

1. {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에 인증하려면 계정이 필요합니다. 계정을 만드는 방법에 대한 자세한 내용은 “[새 {% data variables.product.prodname_dotcom %} 계정에 가입](/github/getting-started-with-github/signing-up-for-a-new-github-account)”을 참조하거나 {% data variables.product.prodname_enterprise %} 사이트 관리자에게 문의하세요.

2. {% data variables.product.prodname_desktop %} 드롭다운 메뉴에서 **Preferences**(기본 설정)를 클릭합니다. Preferences(기본 설정) 창에서 **Accounts**(계정)를 클릭하고 단계에 따라 로그인합니다. 인증에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 인증](/desktop/getting-started-with-github-desktop/authenticating-to-github)”을 참조하세요.
  ![GitHub의 로그인 단추](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에 인증하려면 계정이 필요합니다. 계정을 만드는 방법에 대한 자세한 내용은 “[새 {% data variables.product.prodname_dotcom %} 계정에 가입](/github/getting-started-with-github/signing-up-for-a-new-github-account)”을 참조하거나 {% data variables.product.prodname_enterprise %} 사이트 관리자에게 문의하세요.

2. File(파일) 드롭다운 메뉴에서 **Options**(옵션)를 클릭합니다. Options(옵션) 창에서 **Accounts**(계정)를 클릭하고 단계에 따라 로그인합니다. 인증에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 인증](/desktop/getting-started-with-github-desktop/authenticating-to-github)”을 참조하세요.
  ![GitHub의 로그인 단추](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## 2부: {% data variables.product.prodname_desktop %} 구성 및 사용자 지정
{% data variables.product.prodname_desktop %}을 설치한 후 요구 사항에 가장 적합하도록 앱을 구성하고 사용자 지정할 수 있습니다.

{% mac %}

{% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에서 계정을 연결하거나 제거하고, 기본 텍스트 편집기 또는 셸을 선택하고, Git 구성을 편집하고, {% data variables.product.prodname_desktop %}의 모양을 변경하고, 시스템 대화 상자를 사용자 지정하고, {% data variables.product.prodname_desktop %} 기본 설정 창에서 개인정보 보호 기본 설정을 설정할 수 있습니다. 자세한 내용은 “[기본 설정 구성](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”을 참조하세요.

  ![기본 설정 창의 기본 설정](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

{% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에서 계정을 연결하거나 제거하고, 기본 텍스트 편집기 또는 셸을 선택하고, Git 구성을 편집하고, {% data variables.product.prodname_desktop %}의 모양을 변경하고, 시스템 대화 상자를 사용자 지정하고, {% data variables.product.prodname_desktop %} 옵션 창에서 개인정보 보호 기본 설정을 설정할 수 있습니다. 자세한 내용은 “[기본 설정 구성](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”을 참조하세요.

  ![옵션 창의 기본 설정](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## 3부: {% data variables.product.prodname_desktop %}을 사용하여 프로젝트에 기여
앱을 설치, 인증 및 구성한 후 {% data variables.product.prodname_desktop %}을 사용할 준비가 되었습니다. 리포지토리를 만들거나 추가하거나 복제하고 {% data variables.product.prodname_desktop %}을 사용하여 리포지토리에 대한 기여도를 관리할 수 있습니다.

### 리포지토리 만들기, 추가 및 복제
File(파일) 메뉴를 선택하고 **New repository...** (새 리포지토리...)를 클릭하여 새 리포지토리를 만들 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_desktop %}을 사용하여 첫 번째 리포지토리 만들기](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)”를 참조하세요.

파일 메뉴를 선택하고 **로컬 리포지토리 추가...** 를 클릭하여 로컬 컴퓨터에서 리포지토리를 추가할 수 있습니다. 자세한 내용은 "[로컬 컴퓨터에서 {% data variables.product.prodname_desktop %}에 리포지토리 추가](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)"를 참조하세요.

File(파일) 메뉴를 선택하고 **Clone Repository...** (리포지토리 복제...)를 클릭하여 {% data variables.product.prodname_dotcom %}에서 리포지토리를 복제할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_desktop %}에서 리포지토리 복제 및 포크](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)”를 참조하세요.

{% mac %}

  ![리포지토리 만들기, 추가 및 복제를 위한 파일 메뉴 옵션](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![리포지토리 만들기, 추가 및 복제를 위한 파일 메뉴 옵션](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### 분기에서 변경
{% data variables.product.prodname_desktop %}을 사용하여 프로젝트의 분기를 만들 수 있습니다. 분기는 리포지토리의 다른 분기에서 개발 작업을 격리하므로 변경 내용을 안전하게 실험할 수 있습니다. 자세한 내용은 “[분기 관리](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)”를 참조하세요.

  ![새 분기 단추](/assets/images/help/desktop/new-branch-button-mac.png)

분기를 변경한 후 {% data variables.product.prodname_desktop %}에서 검토하고 커밋을 수행하여 변경 내용을 추적할 수 있습니다. 자세한 내용은 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)”를 참조하세요.

  ![커밋 보기 및 수행](/assets/images/help/desktop/commit-button.png)

변경 내용에 원격으로 액세스하거나 다른 사람과 공유하려는 경우 {% data variables.product.prodname_dotcom %}에 커밋을 푸시할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 변경 내용 푸시](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)”를 참조하세요.

### {% data variables.product.prodname_desktop %}을 사용하여 협업
{% data variables.product.prodname_desktop %}을 사용하여 이슈 또는 끌어오기 요청을 만들어 다른 사람과 프로젝트에서 협업할 수 있습니다. 이슈는 아이디어를 추적하고 프로젝트에 대한 가능한 변경 내용을 논의하는 데 도움이 됩니다. 끌어오기 요청을 사용하면 제안된 변경 내용을 다른 사용자와 공유하고, 피드백을 받고, 변경 내용을 프로젝트에 병합할 수 있습니다. 자세한 내용은 “[이슈 또는 끌어오기 요청 만들기](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)”를 참조하세요.

{% data variables.product.prodname_desktop %}에서 사용자 고유의 끌어오기 요청 또는 협력자의 끌어오기 요청을 볼 수 있습니다. {% data variables.product.prodname_desktop %}에서 끌어오기 요청을 보면 기본 텍스트 편집기에서 프로젝트의 파일 및 리포지토리를 열어 제안된 변경 내용을 확인하고 추가 변경을 수행할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_desktop %}에서 끌어오기 요청 보기](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)”를 참조하세요.

### 로컬 리포지토리를 동기화 상태로 유지
로컬 리포지토리를 변경하거나 다른 사람이 원격 리포지토리를 변경하는 경우 프로젝트의 로컬 복사본을 원격 리포지토리와 동기화해야 합니다. {% data variables.product.prodname_desktop %}은 커밋을 푸시하고 끌어와서 프로젝트의 로컬 복사본을 원격 버전과 동기화 상태로 유지할 수 있습니다. 자세한 내용은 “[분기 동기화](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)”를 참조하세요.

## 추가 참고 자료
- “[{% data variables.product.prodname_desktop %} 설치 및 인증](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)”
- “[{% data variables.product.prodname_desktop %}을 사용하여 기여 및 협업](/desktop/contributing-and-collaborating-using-github-desktop)”
