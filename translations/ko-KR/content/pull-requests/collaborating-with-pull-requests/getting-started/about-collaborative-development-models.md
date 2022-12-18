---
title: 협업 개발 모델 정보
intro: 끌어오기 요청을 사용하는 방법은 프로젝트에서 사용하는 개발 모델의 유형에 따라 달라집니다. 포크 및 끌어오기 모델 또는 공유 리포지토리 모델을 사용할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146139186'
---
## 포크 및 끌어오기 모델

포크 및 끌어오기 모델에서는 누구나 기존 리포지토리를 포크하고 변경 내용을 개인 포크로 푸시할 수 있습니다. 사용자 소유의 포크에 푸시하기 위해 원본 리포지토리에 대한 권한이 필요하지 않습니다. 변경 내용은 프로젝트 유지 관리자가 원본 리포지토리로 끌어올 수 있습니다. 사용자 소유 포크에서 원본(업스트림) 리포지토리의 분기로 변경을 제안하는 끌어오기 요청을 열 때 업스트림 리포지토리에 대한 푸시 액세스 권한이 있는 모든 사람이 끌어오기 요청을 변경하도록 허용할 수 있습니다.  이 모델은 새로운 기여자의 마찰을 줄이고 사람들이 사전 조정 없이 독립적으로 작업할 수 있도록 하기 때문에 오픈 소스 프로젝트에서 인기가 있습니다.

{% tip %}

**팁:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## 공유 리포지토리 모델

공유 리포지토리 모델에서 협력자는 단일 공유 리포지토리에 대한 푸시 액세스 권한이 부여되고 변경이 필요할 때 토픽 분기가 생성됩니다. 끌어오기 요청은 변경 내용이 기본 개발 분기에 병합되기 전에 변경 내용 집합에 대한 코드 검토 및 일반적인 토론을 시작하므로 이 모델에서 유용합니다. 이 모델은 소규모 팀과 조직이 개인 프로젝트에 대해 협업하는 경우 더 많이 사용됩니다.

## 추가 참고 자료

- “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
- “[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”
- “[포크에서 만든 끌어오기 요청 분기에 변경 내용 허용](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
