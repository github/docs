---
title: 자동 채점 사용
intro: 과제 리포지토리에서 실행되도록 테스트를 구성하여 학생의 코드 제출에 대한 피드백을 자동으로 제공할 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112148'
---
## 자동 채점 정보

{% data reusables.classroom.about-autograding %}

학생이 과제를 수락한 후 과제 리포지토리로 푸시할 때마다 {% data variables.product.prodname_actions %}는 학생의 최신 코드가 포함된 Linux 환경에서 자동 채점 테스트에 대한 명령을 실행합니다. {% data variables.product.prodname_classroom %}은 {% data variables.product.prodname_actions %}에 필요한 워크플로를 만듭니다. 자동 채점을 사용하기 위해 {% data variables.product.prodname_actions %}의 경험이 필요하지는 않습니다.

테스트 프레임워크를 사용하거나, 사용자 지정 명령을 실행하거나, 입출력 테스트를 작성하거나, 다양한 테스트 방법을 결합할 수 있습니다. 자동 채점을 위한 Linux 환경에는 인기 있는 많은 소프트웨어 도구가 포함됩니다. 자세한 내용은 “[{% data variables.product.company_short %} 호스트된 실행기 사양](/actions/reference/specifications-for-github-hosted-runners#supported-software)”에서 최신 버전의 Ubuntu에 대한 세부 정보를 참조하세요.

{% data variables.product.prodname_classroom %}에서 과제로 이동하여 자동 채점 테스트를 통과하는 학생의 개요를 볼 수 있습니다. 녹색 확인 표시는 학생에 대한 모든 테스트에 통과하고 있음을 의미하며 빨간색 X는 학생에 대한 일부 또는 모든 테스트가 실패하고 있음을 의미합니다. 하나 이상의 테스트에 대해 점수를 부여하는 경우 거품은 과제에 대해 가능한 최대 점수 중 테스트의 점수를 표시합니다.

![자동 채점 결과가 있는 과제 개요](/assets/images/help/classroom/assignment-individual-hero.png)

## 채점 방법

입출력 테스트 및 실행 명령 테스트의 두 가지 채점 방법이 있습니다.

### 입출력 테스트

입출력 테스트는 필요에 따라 설치 명령을 실행한 다음, 테스트 명령에 표준 입력을 제공합니다. {% data variables.product.prodname_classroom %}은 예상 결과를 기준으로 테스트 명령의 출력을 평가합니다.

| 설정 | 설명 |
| :- | :- |
| **테스트 이름** | 로그에서 테스트를 식별하기 위한 테스트의 이름 |
| **설치 명령** | _선택 사항입니다_. 컴파일 또는 설치와 같이 테스트 전에 실행할 명령 |
| **실행 명령** | 테스트를 실행하고 평가를 위한 표준 출력을 생성하는 명령 |
| **입력** | 실행 명령에 대한 표준 입력 |
| **예상 출력** | 실행 명령에서 표준 출력으로 표시하려는 출력 |
| **비교** | 실행 명령의 출력과 예상 출력 간 비교 유형<br/><br/><ul><li>**포함됨:** 예상 출력이 표시될 때 통과<br/>실행 명령의 표준 출력에 있는 위치</li><li>**정확하게 일치**: 예상 출력이 실행 명령의 표준 출력과<br/>완전히 동일할 때 통과</li><li>**Regex**: 예상 출력의 정규식이 실행 명령의<br/>표준 출력과 일치하는 경우 통과</li></ul> |
| **Timeout** | 몇 분 안에 오류가 발생하기 전에 테스트를 실행해야 하는 기간 |
| **Points** | _선택 사항입니다_. 총 점수에 대해 테스트할 가치가 있는 점수 |

### 실행 명령 테스트

실행 명령 테스트는 설치 명령을 실행한 다음, 테스트 명령을 실행합니다. {% data variables.product.prodname_classroom %}은 테스트 명령의 종료 상태를 확인합니다. 종료 코드가 `0`이면 성공이고 다른 종료 코드이면 오류가 발생합니다.

{% data variables.product.prodname_classroom %}은 다양한 프로그래밍 언어의 언어별 실행 명령 테스트에 대한 사전 설정을 제공합니다. 예를 들어, **실행 노드** 테스트는 설치 명령을 `npm install`로 미리 채우고 테스트 명령을 `npm test`로 미리 채웁니다.

| 설정 | 설명 |
| :- | :- |
| **테스트 이름** | 로그에서 테스트를 식별하기 위한 테스트의 이름 |
| **설치 명령** | _선택 사항입니다_. 컴파일 또는 설치와 같이 테스트 전에 실행할 명령 |
| **실행 명령** | 테스트를 실행하고 평가를 위한 종료 코드를 생성하는 명령 |
| **Timeout** | 몇 분 안에 오류가 발생하기 전에 테스트를 실행해야 하는 기간 |
| **Points** | _선택 사항입니다_. 총 점수에 대해 테스트할 가치가 있는 점수 |

## 과제에 대한 자동 채점 테스트 구성

새 과제를 만드는 동안 자동 채점 테스트를 추가할 수 있습니다. {% data reusables.classroom.for-more-information-about-assignment-creation %}

기존 과제에 대한 자동 채점 테스트를 추가, 편집 또는 삭제할 수 있습니다. 클래스룸 UI를 통해 변경된 모든 내용은 기존 학생 리포지토리로 푸시되므로 테스트를 편집할 때 주의해야 합니다.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. 왼쪽 사이드바에서 **채점 및 피드백** 을 클릭합니다.
  ![과제의 기본 사항 왼쪽에 있는 “채점 및 피드백”](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. 자동 채점 테스트를 추가, 편집 또는 삭제합니다.
    - 테스트를 추가하려면 “자동 채점 테스트 추가”에서 **테스트 추가** 드롭다운 메뉴를 선택한 다음, 사용할 채점 방법을 클릭합니다.
       ![“테스트 추가” 드롭다운 메뉴를 사용하여 채점 방법 클릭](/assets/images/help/classroom/autograding-click-grading-method.png) 테스트를 구성한 다음, **테스트 사례 저장** 을 클릭합니다.
       ![자동 채점 테스트에 대한 “테스트 사례 저장” 단추](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - 테스트를 편집하려면 테스트 이름 오른쪽에 있는 {% octicon "pencil" aria-label="The pencil icon" %}을 클릭합니다.
        ![자동 채점 테스트 편집을 위한 연필 아이콘](/assets/images/help/classroom/autograding-click-pencil.png) 테스트를 구성한 다음, **테스트 사례 저장** 을 클릭합니다.
       ![자동 채점 테스트에 대한 “테스트 사례 저장” 단추](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - 테스트를 삭제하려면 테스트 이름 오른쪽에 있는 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
        ![자동 채점 테스트 삭제를 위한 휴지통 아이콘](/assets/images/help/classroom/autograding-click-trash.png)
1. 페이지 아래쪽에서 **과제 업데이트** 를 클릭합니다.
  ![페이지 아래쪽에 있는 “과제 업데이트” 단추](/assets/images/help/classroom/assignments-click-update-assignment.png)

## 자동 채점 테스트의 결과 보기 및 다운로드

### 자동 채점 결과 다운로드

“다운로드” 단추를 통해 학생 자동 채점 점수의 CSV를 다운로드할 수도 있습니다. 이렇게 하면 학생의 리포지토리, 해당 {% data variables.product.prodname_dotcom %} 핸들, 명단 식별자, 제출 타임스탬프, 자동 채점 점수의 링크가 포함된 CSV가 생성되고 다운로드됩니다.

![“점수 다운로드가 강조 표시됨” 및 “리포지토리 다운로드” 추가 옵션을 보여 주는 “다운로드” 단추 선택](/assets/images/help/classroom/download-grades.png)

### 개별 로그 보기
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. 제출 오른쪽에서 **테스트 보기** 를 클릭합니다.
  ![과제 제출에 대한 “테스트 보기” 단추](/assets/images/help/classroom/assignments-click-view-test.png)
1. 테스트 출력을 검토합니다. 자세한 내용은 “[워크플로 실행 로그 사용](/actions/managing-workflow-runs/using-workflow-run-logs)”을 참조하세요.

## 추가 참고 자료

- [{% data variables.product.prodname_actions %} 설명서](/actions)
