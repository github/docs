---
title: GitHub 계정 시작
intro: '{% data variables.product.prodname_dotcom %}의 개인 계정을 사용하면 리포지토리를 가져오거나 만들고, 다른 사용자와 협업하고, {% data variables.product.prodname_dotcom %} 커뮤니티와 연결할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 7644db01c91c2f96c94e6799c71405c791538c6a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093635'
---
이 가이드에서는 {% data variables.product.company_short %} 계정을 설정하고 협업 및 커뮤니티를 위한 {% data variables.product.product_name %} 기능을 시작하는 방법을 안내합니다.

## 1부: {% data variables.product.prodname_dotcom %} 계정 구성

{% ifversion fpt or ghec %} {% data variables.product.product_name %}로 시작할 때 첫 번째 단계는 계정을 만들고, 요구 사항에 가장 적합한 제품을 선택하고, 메일을 확인하고, 2단계 인증을 설정하고, 프로필을 보는 것입니다.
{% elsif ghes %} {% data variables.product.product_name %}로 시작할 때 첫 번째 단계는 계정에 액세스하고, 2단계 인증을 설정하고, 프로필을 보는 것입니다.
{% elsif ghae %} {% data variables.product.product_name %}로 시작할 때 첫 번째 단계는 계정에 액세스하고 프로필을 보는 것입니다.
{% endif %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}에는 여러 유형의 계정이 있습니다. {% endif %} {% data variables.product.product_name %}을 사용하는 모든 사용자에게 고유한 개인 계정이 있으며, 여러 조직 및 팀에 속할 수 있습니다. 개인 계정은 {% 데이터 variables.location.product_location %}의 ID이며 개인으로 표시됩니다.

{% ifversion fpt or ghec %}
### 1. 계정 만들기
{% 데이터 variables.location.product_location %}에서 계정에 등록하려면 프롬프트로 https://github.com/ 이동하여 따릅니다.

{% data variables.product.prodname_dotcom %} 계정을 안전하게 유지하려면 강력하고 고유한 암호를 사용해야 합니다. 자세한 내용은 “[강력한 암호 만들기](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)”를 참조하세요.

### 2. {% data variables.product.prodname_dotcom %} 제품 선택
{% data variables.product.prodname_free_user %} 또는 {% data variables.product.prodname_pro %}를 선택하여 개인 계정을 위한 다양한 기능에 액세스할 수 있습니다. 처음에 원하는 제품을 잘 모르겠으면 언제든지 업그레이드할 수 있습니다.

모든 {% data variables.product.prodname_dotcom %} 플랜에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 제품](/get-started/learning-about-github/githubs-products)”을 참조하세요.

### 3. 메일 주소 확인
{% data variables.product.product_name %} 플랜의 모든 기능을 사용할 수 있도록 새 계정을 등록한 후 메일 주소를 확인합니다. 자세한 내용은 “[메일 주소 확인](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)”을 참조하세요.
{% endif %}

{% ifversion ghes %}
### 1. 계정 액세스
{% data variables.product.product_name %} 인스턴스의 관리자가 계정을 인증하고 액세스하는 방법을 알려줍니다. 프로세스는 인스턴스에 대해 구성한 인증 모드에 따라 다릅니다.
{% endif %}

{% ifversion ghae %}
### 1. 계정 액세스
{% data variables.product.product_name %}의 엔터프라이즈 소유자가 계정을 설정한 후 메일 알림을 받게 되므로 SAML SSO(Single Sign-On)로 인증하고 계정에 액세스할 수 있습니다.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} 2단계 인증 구성
2FA(2단계 인증)는 웹 사이트나 앱에 로그인할 때 사용되는 추가 보안 계층입니다. 계정의 안전을 위해 2FA를 구성하는 것이 좋습니다. 자세한 내용은 “[2단계 인증 정보](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)”를 참조하세요.
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} {% data variables.product.prodname_dotcom %} 프로필 및 기여 그래프 보기
{% data variables.product.prodname_dotcom %} 프로필은 고정한 리포지토리 및 gist, 공개하도록 선택한 조직 멤버 자격, 수행한 기여, 만든 프로젝트를 통해 작업 스토리를 사람들에게 알립니다. 자세한 내용은 “[프로필 정보](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)” 및 “[프로필에서 기여 보기](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)”를 참조하세요.

## 2부: {% data variables.product.product_name %} 도구 및 프로세스 사용
{% data variables.product.product_name %}를 최대한 활용하려면 Git을 설정해야 합니다. Git은 컴퓨터에서 로컬로 발생하는 모든 {% data variables.product.prodname_dotcom %} 관련 사항을 담당합니다. {% data variables.product.product_name %}에서 효과적으로 협업하기 위해 {% data variables.product.prodname_dotcom %} Flavored Markdown을 사용하여 이슈 및 끌어오기 요청을 작성합니다.

### 1. Git 학습
{% data variables.product.prodname_dotcom %}의 공동 개발 방식에서 핵심은 다른 사용자가 Git을 사용하여 보고, 가져오고, 업데이트할 수 있도록 로컬 리포지토리에서 {% data variables.product.product_name %}로 커밋을 게시하는 것입니다. Git에 대한 자세한 내용은 “[Git 안내서](https://guides.github.com/introduction/git-handbook/)” 가이드를 참조하세요. {% data variables.product.product_name %}에서 Git을 사용하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 흐름](/get-started/quickstart/github-flow)”을 참조하세요.
### 2. Git 설정
명령줄, IDE 또는 텍스트 편집기를 통해 컴퓨터에서 Git을 로컬로 사용하려는 경우 Git을 설치하고 설정해야 합니다. 자세한 내용은 “[Git 설정](/get-started/quickstart/set-up-git)”을 참조하세요.

시각적 인터페이스를 사용하려는 경우 {% data variables.product.prodname_desktop %}을 다운로드하여 사용할 수 있습니다. {% data variables.product.prodname_desktop %}은 Git과 패키징되어 있으므로 Git을 별도로 설치할 필요가 없습니다. 자세한 내용은 “[{% data variables.product.prodname_desktop %} 시작](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)”을 참조하세요.

Git을 설치한 후에는 사용자 고유의 리포지토리 또는 다른 사용자의 포크에 관계없이 로컬 컴퓨터에서 {% data variables.product.product_name %} 리포지토리에 연결할 수 있습니다. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 리포지토리에 연결하는 경우 HTTPS 또는 SSH를 사용하여 {% 데이터 variables.product.product_name %}로 인증해야 합니다. 자세한 내용은 “[원격 리포지토리 정보](/get-started/getting-started-with-git/about-remote-repositories)”를 참조하세요.

### 3. {% data variables.product.product_name %}를 조작하는 방법 선택
모든 사용자에게 {% data variables.product.prodname_dotcom %}를 조작하기 위한 고유한 워크플로가 있습니다. 사용하는 인터페이스 및 메서드는 기본 설정 및 요구 사항에 가장 적합한 항목에 따라 다릅니다.

각 메서드로 {% data variables.product.product_name %}에 인증하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)”를 참조하세요.

| **메서드**  | **설명** | **사용 사례** |
| ------------- | ------------- | ------------- |
| {% data variables.product.prodname_dotcom_the_website %}로 이동 | 로컬에서 파일을 사용할 필요가 없는 경우 {% data variables.product.product_name %}를 사용하면 리포지토리 만들기 및 포크에서 파일 편집 및 끌어오기 요청 열기에 이르기까지 대부분의 Git 관련 작업을 브라우저에서 직접 완료할 수 있습니다.| 이 메서드는 시각적 인터페이스를 원하고 로컬에서 작업할 필요가 없는 빠르고 간단한 변경을 수행해야 하는 경우에 유용합니다. |
| {% data variables.product.prodname_desktop %} | {% data variables.product.prodname_desktop %}은 명령줄의 텍스트 명령 대신 시각적 인터페이스를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 워크플로를 확장하고 간소화합니다. {% data variables.product.prodname_desktop %}을 시작하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_desktop %} 시작](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)”을 참조하세요. | 이 메서드는 로컬에서 파일을 사용해야 하거나 사용하려고 하지만 시각적 인터페이스를 통해 Git을 사용하고 {% data variables.product.product_name %}를 조작하려는 경우에 가장 적합합니다. |
| IDE 또는 텍스트 편집기  | [{% 데이터 variables.product.prodname_vscode %}](https://code.visualstudio.com/)과 같은 기본 텍스트 편집기를 설정하여 Git을 사용하여 파일을 열고 편집하고, 확장을 사용하고, 프로젝트 구조를 볼 수 있습니다. 자세한 내용은 “[Git과 텍스트 편집기 연결](/github/using-git/associating-text-editors-with-git)”을 참조하세요. | 텍스트 편집기 또는 IDE를 사용하면 편집기에서 명령줄에 직접 액세스할 수 있는 경우가 많기 때문에 더 복잡한 파일 및 프로젝트로 작업하고 모든 항목을 한 곳에 배치하려는 경우에 편리합니다. |
| {% data variables.product.prodname_cli %}가 있거나 없는 명령줄 | Git을 사용하고 {% data variables.product.product_name %}를 조작하는 방법을 가장 세부적으로 제어하고 사용자 지정하기 위해 명령줄을 사용할 수 있습니다. Git 명령을 사용하는 방법에 대한 자세한 내용은 “[Git 참고 자료](/github/getting-started-with-github/quickstart/git-cheatsheet)”를 참조하세요.<br/><br/> {% data variables.product.prodname_cli %}는 모든 작업을 한 곳에서 수행할 수 있도록 끌어오기 요청, 이슈, {% data variables.product.prodname_actions %}, 기타 {% data variables.product.prodname_dotcom %} 기능을 터미널로 가져오는, 설치 가능한 별도의 명령줄 도구입니다. 자세한 내용은 “[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)”를 참조하세요. | 이미 명령줄에서 작업 중이므로 컨텍스트를 전환할 필요가 없거나 명령줄 사용에 더 익숙한 경우에 가장 편리합니다. |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %}에는 {% data variables.product.product_name %}를 조작하는 데 사용할 수 있는 REST API 및 GraphQL API가 있습니다. 자세한 내용은 “[API 시작](/github/extending-github/getting-started-with-the-api)”을 참조하세요. | {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API는 공통 작업을 자동화하거나, 데이터를 백업하거나, {% data variables.product.prodname_dotcom %}를 확장하는 통합을 만들려는 경우에 가장 도움이 됩니다. |
### 4. {% data variables.product.product_name %}에서 쓰기
이슈 및 끌어오기 요청에서 커뮤니케이션을 명확하고 체계적으로 만들기 위해 읽고 쓰기 쉬운 구문을 몇 가지 사용자 지정 기능과 결합하는 {% data variables.product.prodname_dotcom %} Flavored Markdown을 서식 지정에 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 쓰기 및 서식 지정 정보](/github/writing-on-github/about-writing-and-formatting-on-github)”를 참조하세요.

{% data variables.product.prodname_learning %}의 “[Markdown을 사용하여 통신](https://github.com/skills/communicate-using-markdown)” 과정을 통해 {% data variables.product.prodname_dotcom %} Flavored Markdown에 대해 알아볼 수 있습니다.

### 5. {% data variables.product.product_name %}에서 검색
통합 검색을 사용하면 {% data variables.product.product_name %}의 여러 리포지토리, 사용자, 코드 줄에서 원하는 항목을 찾을 수 있습니다. 모든 {% data variables.product.product_name %}에서 전역적으로 검색하거나 검색 범위를 특정 리포지토리 또는 조직으로 제한할 수 있습니다. {% data variables.product.product_name %}에서 수행할 수 있는 검색 유형에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색 정보](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

검색 구문을 사용하면 한정자로 쿼리를 생성하여 검색할 항목을 지정할 수 있습니다. 검색에서 사용할 검색 구문에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색](/github/searching-for-information-on-github/searching-on-github)”을 참조하세요.

### 6. {% data variables.product.product_name %}의 파일 관리
{% data variables.product.product_name %}를 사용하면 고유한 리포지토리 또는 쓰기 권한이 있는 모든 리포지토리에서 파일을 만들고, 편집, 이동, 삭제할 수 있습니다. 파일의 변경 내용 기록을 한 줄씩 추적할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 파일 관리](/github/managing-files-in-a-repository/managing-files-on-github)”를 참조하세요.

## 3부: {% data variables.product.product_name %}에서 협업
인원수에 관계없이 여러 사용자가 {% data variables.product.product_name %}의 리포지토리에서 함께 작업할 수 있습니다. 설정을 구성하고, 프로젝트 보드를 만들고, 알림을 관리하여 효과적인 협업을 장려할 수 있습니다.

### 1. 리포지토리 작업

#### 리포지토리 만들기
리포지토리는 프로젝트 폴더와 같습니다. 개인 계정에 포함될 수 있는 퍼블릭 및 프라이빗 리포지토리 수에는 제한이 없습니다. 리포지토리에는 폴더 및 파일, 이미지, 비디오, 스프레드시트, 데이터 세트, 리포지토리 내 모든 파일의 수정 기록이 포함될 수 있습니다. 자세한 내용은 “[리포지토리 정보](/github/creating-cloning-and-archiving-repositories/about-repositories)”를 참조하세요.

새 리포지토리를 만들 때 사용자가 프로젝트에 대해 알 수 있도록 추가 정보 파일을 사용하여 리포지토리를 초기화해야 합니다. 자세한 내용은 “[새 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)”를 참조하세요.

#### 리포지토리 복제
{% data variables.product.product_name %}의 기존 리포지토리를 로컬 컴퓨터에 복제하면 더 쉽게 파일을 추가 또는 제거하거나, 병합 충돌을 해결하거나, 복잡한 커밋을 수행할 수 있습니다. 리포지토리를 복제하면 프로젝트의 모든 파일 및 폴더 버전을 포함하여 해당 시점에 {% data variables.product.prodname_dotcom %}에 있던 모든 리포지토리 데이터의 전체 복사본을 가져옵니다. 자세한 내용은 “[리포지토리 복제](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)”를 참조하세요.

#### 리포지토리 포크
포크는 관리하는 리포지토리 복사본으로, 프로젝트 소유자에게 끌어오기 요청을 제출하지 않는 한 변경 내용이 원래 리포지토리에 영향을 주지 않습니다. 가장 일반적으로, 포크는 다른 사용자의 프로젝트에 대한 변경 내용을 제안하거나 다른 사용자의 프로젝트를 고유한 아이디어의 시작점으로 활용하는 데 사용됩니다. 자세한 내용은 “[포크 사용](/github/collaborating-with-pull-requests/working-with-forks)”을 참조하세요.
### 2. 프로젝트 가져오기
{% data variables.product.product_name %}로 이동하려는 기존 프로젝트가 있는 경우 {% data variables.product.prodname_dotcom %} 가져오기, 명령줄 또는 외부 마이그레이션 도구를 사용하여 프로젝트를 가져올 수 있습니다. 자세한 내용은 “[소스 코드를 {% data variables.product.prodname_dotcom %}로 가져오기](/github/importing-your-projects-to-github/importing-source-code-to-github)”를 참조하세요.

### 3. 협력자 및 권한 관리
리포지토리의 이슈, 끌어오기 요청, 프로젝트 보드를 사용하여 다른 사용자와 프로젝트를 협업할 수 있습니다. 리포지토리 설정의 **협력자** 탭에서 다른 사용자를 협력자로 리포지토리에 초대할 수 있습니다. 자세한 내용은 “[개인 리포지토리에 협력자 초대](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)”를 참조하세요.

개인 계정에서 만든 리포지토리의 소유자가 되며 리포지토리를 완전히 제어할 수 있습니다. 협력자는 리포지토리에 대한 쓰기 권한을 가지며 수행할 권한이 있는 작업이 제한됩니다. 자세한 내용은 “[사용자 계정 리포지토리의 권한 수준](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)”을 참조하세요.

### 4. 리포지토리 설정 관리
리포지토리 소유자는 리포지토리의 표시 유형, 토픽, 소셜 미디어 미리 보기를 포함하여 여러 설정을 구성할 수 있습니다. 자세한 내용은 “[리포지토리 설정 관리](/github/administering-a-repository/managing-repository-settings)”를 참조하세요.

### 5. 정상적인 기여를 위한 프로젝트 설정
{% ifversion fpt or ghec %} 리포지토리의 협력자를 장려하려면 사용자가 프로젝트를 사용하고, 기여하고, 전파하도록 장려하는 커뮤니티가 필요합니다. 자세한 내용은 오픈 소스 가이드에서 “[환영하는 커뮤니티 만들기](https://opensource.guide/building-community/)”를 참조하세요.

기여 지침, 사용 규정, 라이선스와 같은 파일을 리포지토리에 추가하면 협력자가 의미 있고 유용한 기여를 보다 쉽게 수행할 수 있는 환경을 만들 수 있습니다. 자세한 내용은 “[정상적인 기여를 위한 프로젝트 설정](/communities/setting-up-your-project-for-healthy-contributions)”을 참조하세요.
{% endif %} {% ifversion ghes or ghae %} 기여 지침, 사용 규정, 지원 리소스와 같은 파일을 리포지토리에 추가하면 협력자가 의미 있고 유용한 기여를 보다 쉽게 수행할 수 있는 환경을 만들 수 있습니다. 자세한 내용은 “[정상적인 기여를 위한 프로젝트 설정](/communities/setting-up-your-project-for-healthy-contributions)”을 참조하세요.
{% endif %}

### 6. GitHub 이슈 및 프로젝트 보드 사용
GitHub 이슈를 사용하여 이슈 및 끌어오기 요청으로 작업을 구성하고 프로젝트 보드를 통해 워크플로를 관리할 수 있습니다. 자세한 내용은 “[이슈 정보](/issues/tracking-your-work-with-issues/about-issues)” 및 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요.

### 7. 알림 관리
알림은 구독하거나 참여한 {% data variables.product.prodname_dotcom %}의 활동에 대한 업데이트를 제공합니다. 대화에 더 이상 관심이 없는 경우 구독을 취소하거나 시청을 해제하거나 나중에 받게 될 알림 유형을 사용자 지정할 수 있습니다. 자세한 내용은 “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”를 참조하세요.

### 8. {% data variables.product.prodname_pages %} 작업
{% 데이터 variables.product.prodname_pages %}을(를) 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 리포지토리에서 직접 웹 사이트를 만들고 호스트할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages)”를 참조하세요.

{% ifversion discussions %}
### 9. {% data variables.product.prodname_discussions %} 사용
리포지토리에서 {% data variables.product.prodname_discussions %}를 사용하도록 설정하여 프로젝트 관련 커뮤니티를 빌드할 수 있습니다. 유지 관리자, 기여자, 방문자는 토론을 사용하여 공지 사항을 공유하고, 질문과 대답을 하고, 목표에 관한 대화에 참여할 수 있습니다. 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.
{% endif %}
## 4부: {% data variables.product.product_name %}에서 작업 사용자 지정 및 자동화

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. {% data variables.product.prodname_marketplace %} 사용
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 사용
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} {% data variables.product.prodname_actions %} 빌드
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} {% data variables.product.prodname_registry %} 게시 및 관리 
{% data reusables.getting-started.packages %}

## 5부: {% data variables.product.product_name %}에서 안전하게 빌드
{% data variables.product.product_name %}에는 리포지토리에서 코드와 비밀을 안전하게 유지하는 데 도움이 되는 다양한 보안 기능이 있습니다. 모든 리포지토리에서 사용할 수 있는 기능도 있지만, 퍼블릭 리포지토리 및 {% data variables.product.prodname_GH_advanced_security %} 라이선스가 있는 리포지토리에만 사용할 수 있는 기능도 있습니다. {% data variables.product.product_name %} 보안 기능에 대한 개요는 “[{% data variables.product.prodname_dotcom %} 보안 기능](/code-security/getting-started/github-security-features)”을 참조하세요.

### 1. 리포지토리 보안 유지
리포지토리 관리자는 리포지토리 보안 설정을 구성하여 리포지토리를 보호할 수 있습니다. 여기에는 리포지토리에 대한 액세스 관리, 보안 정책 설정, 종속성 관리가 포함됩니다. 퍼블릭 리포지토리 및 {% data variables.product.prodname_GH_advanced_security %}를 사용할 수 있는 조직이 소유한 프라이빗 리포지토리의 경우 코드 및 비밀 검사를 구성하여 취약성을 자동으로 식별하고 토큰과 키가 공개되지 않도록 할 수도 있습니다. 

리포지토리를 보호하기 위해 수행할 수 있는 단계에 대한 자세한 내용은 “[리포지토리 보안 유지](/code-security/getting-started/securing-your-repository)”을 참조하세요.

{% ifversion fpt or ghec %}
### 2. 종속성 관리
안전한 빌드의 상당 부분은 프로젝트의 종속성을 유지 관리하여 종속된 모든 패키지와 애플리케이션이 업데이트되고 안전하게 유지되도록 하는 것입니다. 리포지토리의 종속성 그래프를 살펴보고, Dependabot을 통해 끌어오기 요청을 자동으로 생성하여 종속성을 최신 상태로 유지하고, 취약한 종속성에 대한 Dependabot 경고 및 보안 업데이트를 수신하여 {% data variables.product.product_name %}에 대한 리포지토리 종속성을 관리할 수 있습니다. 

자세한 내용은 “[소프트웨어 공급망 보안 유지](/code-security/supply-chain-security)”를 참조하세요.
{% endif %}

## 6부: {% data variables.product.prodname_dotcom %} 커뮤니티 참여

{% data reusables.getting-started.participating-in-community %}

### 1. 오픈 소스 프로젝트에 기여
{% data reusables.getting-started.open-source-projects %}

### 2. {% data variables.product.prodname_gcf %} 조작
{% data reusables.support.ask-and-answer-forum %}

### 3. {% data variables.product.prodname_docs %}에서 {% data variables.product.product_name %}에 대해 읽기

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. {% data variables.product.prodname_learning %}을 사용하여 학습
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. 오픈 소스 커뮤니티 지원
{% data reusables.getting-started.sponsors %}

### 6. {% data variables.contact.github_support %}에 문의
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## 추가 참고 자료
- “[{% data variables.product.prodname_team %} 시작](/get-started/onboarding/getting-started-with-github-team)” {% endif %} {% endif %}
