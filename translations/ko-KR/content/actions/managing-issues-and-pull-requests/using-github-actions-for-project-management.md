---
title: 프로젝트 관리에 GitHub Actions 사용
intro: '{% data variables.product.prodname_actions %}를 사용하여 많은 프로젝트 관리 작업을 자동화할 수 있습니다.'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
ms.openlocfilehash: 5f5d1cb222824bbb451ad603e35b4986384645e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116847'
---
{% data variables.product.prodname_actions %}를 사용하여 워크플로를 만들고 프로젝트 관리 작업을 자동화할 수 있습니다. 각 워크플로에는 워크플로가 실행될 때마다 자동으로 수행되는 일련의 작업이 포함됩니다. 예를 들어 문제가 만들어질 때마다 실행되는 워크플로를 만들어 레이블을 추가하고 주석을 남기며 문제를 프로젝트 보드로 이동할 수 있습니다.

## 워크플로는 언제 실행되나요?

일정에 따라 실행되거나 이벤트가 발생할 때 트리거되도록 워크플로를 구성할 수 있습니다. 예를 들어 다른 사용자가 리포지토리에서 문제를 만들 때 실행되도록 워크플로를 설정할 수 있습니다.

많은 워크플로 트리거는 프로젝트 관리를 자동화하는 데 유용합니다.

- 문제가 열리거나 할당되거나 레이블이 지정됩니다.
- 문제에 주석이 추가됩니다.
- 프로젝트 카드를 만들거나 이동합니다.
- 예약된 시간.

워크플로를 트리거할 수 있는 이벤트의 전체 목록은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.

## 워크플로는 무엇을 할 수 있나요?

워크플로는 문제에 대한 주석 처리, 레이블 추가 또는 제거, 프로젝트 보드에서 카드 이동, 문제 열기 등 다양한 작업을 수행할 수 있습니다.

요구 사항에 맞게 조정할 수 있는 예제 워크플로를 포함하는 다음 자습서를 수행하여 프로젝트 관리에 {% data variables.product.prodname_actions %}를 사용하는 방법을 알아볼 수 있습니다.

- “[문제에 레이블 추가](/actions/guides/adding-labels-to-issues)”
- “[카드가 프로젝트 보드 열에 추가되면 레이블 제거](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)”
- “[프로젝트 보드에서 할당된 문제 이동](/actions/guides/moving-assigned-issues-on-project-boards)”
- “[레이블이 추가될 때 문제에 주석 달기](/actions/guides/commenting-on-an-issue-when-a-label-is-added)”
- “[비활성 문제 닫기](/actions/guides/closing-inactive-issues)”
- “[문제 만들기 일정 계획](/actions/guides/scheduling-issue-creation)”
