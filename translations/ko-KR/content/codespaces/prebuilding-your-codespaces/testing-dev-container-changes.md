---
title: 사전 빌드 사용 분기에서 개발 컨테이너 구성 변경 테스트
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 사전 빌드에 사용하도록 설정된 분기에 대한 개발 컨테이너 구성을 변경하는 경우 코드스페이스에서 변경 내용을 테스트해야 합니다.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: 29b44d0fb0b3bb3211f0c204cc7e99e39ab89b79
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159854'
---
사전 빌드 사용 분기에 대한 개발 컨테이너 구성을 변경하면 codespace 구성 및 연결된 사전 빌드가 업데이트됩니다. 따라서 적극적으로 사용되는 리포지토리의 분기에 변경 내용을 커밋하기 전에 테스트 분기에서 codespace에서 이러한 변경 내용을 테스트하는 것이 중요합니다. 이렇게 하면 팀에 호환성이 손상되는 변경 내용이 도입되지 않습니다.

자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

## 개발 컨테이너 구성에 대한 변경 내용 테스트

1. 개발 컨테이너를 변경하려는 사전 빌드 사용 분기에서 codespace를 만듭니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).
1. codespace에서 테스트 분기를 확인합니다. 자세한 내용은 “[codespace에서 소스 제어 사용](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)”을 참조하세요.
1. 개발 컨테이너 구성에 필요한 변경 내용을 적용합니다.
1. 컨테이너를 다시 빌드하여 변경 내용을 적용합니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”를 참조하세요.
1. 모든 것이 좋아 보이면 테스트 분기에서 새 codespace를 만들어 모든 것이 제대로 작동하는지 확인하는 것이 좋습니다. 그런 다음 리포지토리의 기본 분기 또는 활성 기능 분기에 변경 내용을 커밋하여 해당 분기에 대한 사전 빌드의 업데이트를 트리거할 수 있습니다.

   {% note %}
   
   **참고**: 이 codespace를 만드는 작업은 사전 빌드에서 생성되지 않으므로 평소보다 오래 걸립니다.
   
   {% endnote %}
