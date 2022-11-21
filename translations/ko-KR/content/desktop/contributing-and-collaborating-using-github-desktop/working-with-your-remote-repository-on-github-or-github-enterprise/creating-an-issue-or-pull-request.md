---
title: 문제 또는 끌어오기 요청 만들기
intro: 문제 또는 끌어오기 요청을 만들어 리포지토리에 대한 변경을 제안하고 공동 작업할 수 있습니다.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117479'
---
## 문제 및 끌어오기 요청 정보

문제를 사용하여 프로젝트에 중요한 아이디어, 버그, 작업 및 기타 정보를 추적할 수 있습니다. {% data variables.product.prodname_desktop %}을(를) 사용하여 프로젝트 리포지토리에서 문제를 만들 수 있습니다. 문제에 대한 자세한 내용은 “[문제 정보](/github/managing-your-work-on-github/about-issues)”를 참조하세요.

분기를 만들고 프로젝트의 파일을 변경한 후 끌어오기 요청을 만들 수 있습니다. 끌어오기 요청을 사용하면 변경 내용을 프로젝트에 병합하기 전에 변경 내용을 제안, 토론 및 반복할 수 있습니다. {% data variables.product.prodname_desktop %}을(를) 사용하여 프로젝트 리포지토리에서 끌어오기 요청을 만들 수 있습니다. 끌어오기 요청에 대한 자세한 내용은 “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”를 참조하세요.

## 필수 조건

끌어오기 요청을 만들기 전에 {% data variables.product.prodname_dotcom %}의 분기에 변경 내용을 푸시해야 합니다.
- 로컬 분기에서 변경 내용을 저장하고 커밋합니다. 자세한 내용은 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)”를 참조하세요.
- 로컬 커밋을 원격 리포지토리에 푸시합니다. 자세한 내용은 “[GitHub 변경 내용 푸시](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)”를 참조하세요.
- 현재 분기를 {% data variables.product.prodname_dotcom %}에 게시합니다. 자세한 내용은 “[분기 관리](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)”를 참조하세요.

## 문제 만들기

{% mac %}

1. 메뉴 모음에서 **리포지토리** 드롭다운 메뉴를 사용하고 **{% data variables.product.prodname_dotcom %}에서 문제 만들기** 를 클릭합니다.
    ![분기 메뉴의 리포지토리 값](/assets/images/help/desktop/create-issue-mac.png)
2. {% data variables.product.prodname_dotcom %}에서 **시작** 을 클릭하여 문제 템플릿을 열거나 **빈 문제 열기** 를 클릭합니다.
    ![새 문제 옵션 만들기](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. 메뉴 모음에서 **리포지토리** 드롭다운 메뉴를 사용하고 **{% data variables.product.prodname_dotcom %}에서 문제 만들기** 를 클릭합니다.
    ![분기 메뉴의 리포지토리 값](/assets/images/help/desktop/create-issue-windows.png)
2. {% data variables.product.prodname_dotcom %}에서 **시작** 을 클릭하여 문제 템플릿을 열거나 **빈 문제 열기** 를 클릭합니다.
    ![새 문제 옵션 만들기](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**참고**: 현재 리포지토리에서 문제 템플릿을 사용할 수 없는 경우 {% data variables.product.prodname_desktop %}은(는) {% data variables.product.prodname_dotcom %}의 빈 문제로 안내합니다.

{% endnote %}

## 끌어오기 요청 만들기

{% mac %}

1. 끌어오기 요청을 만들려는 분기로 전환합니다. 자세한 내용은 “[분기 간 전환](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”을 참조하세요.
2. **끌어오기 요청 만들기** 를 클릭합니다. {% data variables.product.prodname_desktop %}이 기본 브라우저를 열어 {% data variables.product.prodname_dotcom %}로 이동합니다.
  ![끌어오기 요청 만들기 단추](/assets/images/help/desktop/mac-create-pull-request.png)
4. {% data variables.product.prodname_dotcom %}에서 **베이스:** 드롭다운 메뉴의 분기가 변경 내용을 병합하려는 분기인지 확인합니다. **비교:** 드롭다운 메뉴의 분기가 변경한 토픽 분기인지 확인합니다.
  ![베이스 및 비교 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. 끌어오기 요청을 만들려는 분기로 전환합니다. 자세한 내용은 “[분기 간 전환](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”을 참조하세요.
2. **끌어오기 요청 만들기** 를 클릭합니다. {% data variables.product.prodname_desktop %}이 기본 브라우저를 열어 {% data variables.product.prodname_dotcom %}로 이동합니다.
  ![끌어오기 요청 만들기 단추](/assets/images/help/desktop/windows-create-pull-request.png)
3. {% data variables.product.prodname_dotcom %}에서 **베이스:** 드롭다운 메뉴의 분기가 변경 내용을 병합하려는 분기인지 확인합니다. **비교:** 드롭다운 메뉴의 분기가 변경한 토픽 분기인지 확인합니다.
  ![베이스 및 비교 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## 추가 참고 자료
- “[분기](/github/getting-started-with-github/github-glossary#issue)” - {% data variables.product.prodname_dotcom %} 용어 설명
- “[끌어오기 요청](/github/getting-started-with-github/github-glossary#pull-request)” - {% data variables.product.prodname_dotcom %} 용어 설명
- “[베이스 분기](/github/getting-started-with-github/github-glossary#base-branch)” - {% data variables.product.prodname_dotcom %} 용어 설명
- “[토픽 분기](/github/getting-started-with-github/github-glossary#topic-branch)” - {% data variables.product.prodname_dotcom %} 용어 설명
