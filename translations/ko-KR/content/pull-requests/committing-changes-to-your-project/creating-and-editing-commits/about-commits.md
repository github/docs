---
title: 커밋 정보
intro: 의미 있는 변경의 작은 그룹을 커밋으로 저장할 수 있습니다.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410525'
---
## 커밋 정보

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %} 커밋하려는 리포지토리에 필수 커밋 승인이 사용하도록 설정되어 있고 웹 인터페이스를 통해 커밋하는 경우 커밋 프로세스 중에 승인을 원활하게 진행할 수 있습니다. 자세한 내용은 “[리포지토리의 커밋 승인 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)”를 참조하세요. {% endif %}

협업하는 커밋에 공동 작성자를 추가할 수 있습니다. 자세한 내용은 “[여러 작성자와 함께 커밋 만들기](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)”를 참조하세요.

{% ifversion fpt or ghec %} 조직을 대신하여 커밋을 만들 수도 있습니다. 자세한 내용은 “[조직을 대신하여 커밋 만들기](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)”를 참조하세요.{% endif %}

다시 지정을 사용하면 일련의 커밋을 변경할 수 있으며 타임라인에서 커밋 순서를 수정할 수 있습니다. 자세한 내용은 “[Git 다시 지정 정보](/github/getting-started-with-github/about-git-rebase)”를 참조하세요.

## 커밋 분기 및 태그 레이블 정보

커밋 페이지의 커밋 아래에 있는 레이블을 살펴봄으로써 커밋이 있는 분기를 확인할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. 커밋 메시지 링크를 클릭하여 커밋으로 이동합니다.
   ![커밋 메시지 링크가 강조된 커밋의 스크린샷](/assets/images/help/commits/commit-message-link.png)
2. 커밋이 어떤 분기에 있는지 알아보려면 커밋 메시지 아래의 레이블을 확인합니다.
   ![커밋 분기 표시기가 강조 표시된 커밋의 스크린샷](/assets/images/help/commits/commit-branch-indicator.png)

커밋이 기본 분기(`main`)에 없는 경우 레이블에는 커밋이 포함된 분기가 표시됩니다. 커밋이 병합되지 않은 끌어오기 요청의 일부인 경우 링크를 클릭하여 끌어오기 요청으로 이동할 수 있습니다.

커밋이 기본 분기에 있으면 커밋을 포함하는 모든 태그가 표시되고 기본 분기가 나열된 유일한 분기가 됩니다. 태그에 대한 자세한 내용은 Git 설명서의 “[Git 기본 사항 - 태그 지정](https://git-scm.com/book/en/v2/Git-Basics-Tagging)”을 참조하세요.

![커밋 태그가 강조된 커밋의 스크린샷](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## 파일 트리 사용

파일 트리를 사용하여 커밋의 파일을 탐색할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. 커밋 메시지 링크를 클릭하여 커밋으로 이동합니다.
   ![커밋 메시지 링크가 강조된 커밋의 스크린샷](/assets/images/help/commits/commit-message-link.png)
1. 해당 파일의 Diff를 보려면 파일 트리에서 파일을 클릭합니다. 파일 트리가 숨겨져 있으면 {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %}을 클릭하여 파일 트리를 표시합니다.

  {% note %}

  **참고**: 화면 너비가 너무 좁거나 커밋에 파일이 하나만 포함되어 있으면 파일 트리가 표시되지 않습니다.

  {% endnote %}
  
  ![변경된 파일 필터링 검색 상자 및 강조된 파일 트리의 스크린샷](/assets/images/help/repository/file-tree.png)
1. 파일 경로를 기준으로 필터링하려면 **변경된 파일 필터링** 검색 상자에 파일 경로의 일부 또는 전체를 입력합니다.

{% endif %}

## 추가 참고 자료
- {% data variables.product.prodname_desktop %}의 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)”
