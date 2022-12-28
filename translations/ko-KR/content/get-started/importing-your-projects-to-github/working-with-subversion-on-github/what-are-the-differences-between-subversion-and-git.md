---
title: Subversion과 Git 간의 차이점은 무엇인가요?
intro: SVN(Subversion) 리포지토리는 Git 리포지토리와 비슷하지만 프로젝트의 아키텍처와 관련하여 몇 가지 차이점이 있습니다.
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
ms.openlocfilehash: cbe328bf3d2fbf3a603f6eef1559715ad48ca7fe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135735'
---
## 디렉터리 구조

프로젝트 내 커밋의 각 ‘참조’ 또는 레이블이 지정된 스냅샷은 특정 하위 디렉터리(예: `trunk`, `branches`, `tags`) 내에 구성됩니다. 예를 들어 두 가지 기능을 개발 중인 SVN 프로젝트는 다음과 같을 수 있습니다.

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

SVN 워크플로는 다음과 같습니다.

* `trunk` 디렉터리는 프로젝트의 안정적인 최신 릴리스를 나타냅니다.
* 활성 기능 작업은 `branches` 아래의 하위 디렉터리 내에서 개발됩니다.
* 기능이 완료되면 기능 디렉터리가 `trunk`에 병합되고 제거됩니다.

Git 프로젝트도 단일 디렉터리 내에 저장됩니다. 그러나 Git은 특수한 *.git* 디렉터리에 저장하여 해당 참조의 세부 정보를 가립니다. 예를 들어 두 가지 기능을 개발 중인 Git 프로젝트는 다음과 같을 수 있습니다.

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Git 워크플로는 다음과 같습니다.

* Git 리포지토리는 모든 분기 및 태그의 전체 기록을 *.git* 디렉터리 내에 저장합니다.
* The latest stable release is contained within the <code>master</code> branch.
* 활성 기능 작업은 별도의 분기에서 개발됩니다.
* When a feature is finished, the feature branch is merged into <code>master</code> and deleted.

SVN과 달리 Git에서는 디렉터리 구조가 동일하게 유지되지만 파일 내용은 분기에 따라 변경됩니다.

## 하위 프로젝트 포함

‘하위 프로젝트’는 주요 프로젝트 외부에서 개발 및 관리되는 프로젝트입니다. 일반적으로 코드를 직접 유지 관리할 필요 없이 하위 프로젝트를 가져와서 프로젝트에 일부 기능을 추가합니다. 하위 프로젝트가 업데이트될 때마다 프로젝트와 동기화하여 모든 항목을 최신 상태로 유지할 수 있습니다.

SVN에서는 하위 프로젝트를 ‘SVN 외부’라고 합니다. Git에서는 ‘Git 하위 모듈’이라고 합니다. 개념적으로 유사하지만 Git 하위 모듈은 자동으로 최신 상태로 유지되지 않습니다. 새 버전을 프로젝트로 가져오도록 명시적으로 요청해야 합니다.

자세한 내용은 Git 설명서에서 “[Git 도구 하위 모듈](https://git-scm.com/book/en/Git-Tools-Submodules)”을 참조하세요.

## 기록 보존

SVN은 프로젝트의 기록이 변경되지 않는다고 가정하도록 구성되었습니다. Git에서는 [`git rebase`](/github/getting-started-with-github/about-git-rebase)와 같은 도구를 사용하여 이전 커밋과 변경 내용을 수정할 수 있습니다.

{% tip %}

[GitHub는 Subversion 클라이언트를 지원](/articles/support-for-subversion-clients)하므로 동일한 프로젝트에서 Git과 SVN을 둘 다 사용하는 경우 예기치 않은 결과가 발생할 수 있습니다. Git의 커밋 기록을 조작한 경우 동일한 커밋이 항상 SVN의 기록 내에 유지됩니다. 일부 중요한 데이터를 실수로 커밋한 경우 [Git의 기록에서 해당 데이터를 제거하는 데 도움이 되는 문서](/articles/removing-sensitive-data-from-a-repository)가 있습니다.

{% endtip %}

## 추가 참고 자료

- “[GitHub에서 지원되는 Subversion 속성](/articles/subversion-properties-supported-by-github)”
- [_Git SCM_ 설명서의 “분기 및 병합”](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- “[GitHub로 소스 코드 가져오기](/articles/importing-source-code-to-github)”
- “[소스 코드 마이그레이션 도구](/articles/source-code-migration-tools)”
