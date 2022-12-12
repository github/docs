---
title: 자동 채점 결과 보기
intro: 과제에 대한 리포지토리 내에서 자동 채점 결과를 볼 수 있습니다.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea52ff96e16caf0eb0e05addee7a93e58d57e078
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098581'
---
## 자동 채점 정보

교사는 {% 데이터 variables.location.product_location %}의 과제 리포지토리로 푸시할 때 자동으로 작업을 확인하는 테스트를 구성할 수 있습니다.

학생 및 강사가 {% data variables.product.prodname_classroom %}에서 할당에 대해 자동 채점하도록 구성한 경우 할당 리포지토리 전체에서 자동 채점 테스트 결과를 찾을 수 있습니다. 커밋에 대한 모든 테스트가 성공하면 녹색 확인 표시가 표시됩니다. 커밋에 대한 테스트가 실패하면 빨간색 X가 표시됩니다. 녹색 확인 표시 또는 빨간색 X를 클릭하여 자세한 로그를 볼 수 있습니다.

## 할당 리포지토리에 대한 자동 채점 결과 보기

{% data variables.product.prodname_classroom %}은 {% data variables.product.prodname_actions %}를 사용하여 자동 채점 테스트를 실행합니다. 자동 채점 테스트에 대한 로그를 보는 방법에 대한 자세한 내용은 "[워크플로 실행 로그 사용](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)"을 참조하세요.

**작업** 탭에는 테스트 실행의 전체 기록이 표시됩니다.

!["모든 워크플로"가 선택된 "작업" 탭](/assets/images/help/classroom/autograding-actions-tab.png)

특정 테스트 실행을 클릭하여 컴파일 오류 및 테스트 실패와 같은 로그 출력을 검토할 수 있습니다.

!["{% data variables.product.prodname_classroom %} 워크플로 자동 채점" 테스트 결과는 {% data variables.product.prodname_actions %}에 기록됩니다. ](/assets/images/help/classroom/autograding-actions-logs.png)

## 추가 참고 자료

- "[상태 검사 정보](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
