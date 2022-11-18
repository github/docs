---
title: 배포 분기 정책
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: 배포 분기 정책 API를 사용하면 사용자 지정 배포 분기 정책을 관리할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 109bf81019d62e4c654ba6da4fa71f8fd359ceb4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109594'
---
## 배포 분기 정책 API 정보

배포 분기 정책 API를 사용하면 환경에 배포하기 위해 분기가 일치해야 하는 사용자 지정 이름 패턴을 지정할 수 있습니다. 이러한 엔드포인트를 사용하려면 환경의 `deployment_branch_policy.custom_branch_policies` 속성이 `true`로 설정되어야 합니다. 환경의 `deployment_branch_policy`를 업데이트하려면 “[환경 만들기 또는 업데이트](/rest/deployments/environments#create-or-update-an-environment)”를 참조하세요. 

환경 배포를 특정 분기로 제한하는 방법에 대한 자세한 내용은 “[배포에 환경 사용](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)”을 참조하세요.
