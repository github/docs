---
title: 배포 검토
shortTitle: Review deployments
intro: 검토를 기다리는 작업을 승인하거나 거부할 수 있습니다.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 88b3b68a48f3b3850c4a5e8d376f38da935942b3
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009434'
---
## 워크플로의 필수 검토 정보

필수 검토자로 구성된 환경을 참조하는 작업은 시작하기 전에 승인을 기다립니다. 작업이 승인을 기다리는 동안 “대기 중” 상태가 됩니다. 작업이 30일 이내에 승인되지 않으면 워크플로 실행이 자동으로 취소됩니다.

환경 및 필요한 승인에 대한 자세한 내용은 “[배포에 환경 사용](/actions/deployment/using-environments-for-deployment)”을 참조하세요. REST API를 사용하여 배포를 검토하는 방법에 대한 내용은 “[워크플로 실행](/rest/reference/actions#workflow-runs)”을 참조하세요.

## 작업 승인 또는 거부

1. 검토가 필요한 워크플로 실행으로 이동합니다. 워크플로 실행으로 이동하는 방법에 대한 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
2. **배포 검토** 를 클릭합니다. 
   ![배포 검토](/assets/images/actions-review-deployments.png)
3. 승인하거나 거부할 작업 환경을 선택합니다. 필요에 따라 주석을 남겨 둡니다.
   ![배포 승인](/assets/images/actions-approve-deployments.png)
4. 승인 또는 거부:
   - 작업을 승인하려면 **승인 및 배포** 를 클릭합니다. 작업이 승인되고 다른 환경 보호 규칙이 통과되면 작업이 진행됩니다. 이 시점에서 작업은 환경에 저장된 모든 비밀에 액세스할 수 있습니다.
   - 작업을 거부하려면 **거부** 를 클릭합니다. 작업이 거부되면 워크플로가 실패합니다.
