---
title: 조건을 사용하여 작업 실행 제어
shortTitle: Use conditions to control job execution
intro: 조건이 충족되지 않는 한 작업이 실행되지 않도록 합니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: e15f726c91109d2aa9cb7cd4b2acd264c6b51b98
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009428'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

{% note %}

**참고:** 건너뛴 작업은 해당 상태를 “성공”으로 보고합니다. 필요한 검사인 경우에도 끌어오기 요청이 병합되는 것을 방지하지 않습니다.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

건너뛴 작업에 대한 다음 상태가 표시됩니다.

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
