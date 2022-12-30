---
title: 퍼블릭 포크에서 워크플로 실행 승인
intro: 외부 기여자가 퍼블릭 리포지토리에 끌어오기 요청을 제출하는 경우 쓰기 액세스 권한이 있는 유지 관리자는 모든 워크플로 실행을 승인해야 할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164125'
---
## 퍼블릭 포크에서 워크플로 실행 정보

{% data reusables.actions.workflow-run-approve-public-fork %}

[리포지토리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [조직](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) 또는 [엔터프라이즈](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)에 대한 워크플로 승인 요구 사항을 구성할 수 있습니다.

30일 이상 승인을 기다리고 있던 워크플로 실행이 자동으로 삭제됩니다.

## 승인 워크플로는 퍼블릭 포크의 끌어오기 요청에 따라 실행됩니다.

{% data reusables.actions.workflows.approve-workflow-runs %}
