---
title: 문제 전용 리포지토리 만들기
intro: '{% data variables.product.product_name %}는 문제 전용 액세스 권한을 제공하지 않지만 문제만 포함된 두 번째 리포지토리를 사용하여 이를 달성할 수 있습니다.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136911'
---
1. 프로젝트에서 소스 코드를 호스트하는 **프라이빗** 리포지토리를 만듭니다.
2. 문제 추적기를 호스트하려는 권한이 있는 두 번째 리포지토리를 만듭니다.
3. 이 리포지토리의 목적을 설명하고 문제 섹션에 연결하는 문제 리포지토리에 README 파일을 추가합니다.
4. 원하는 대로 리포지토리에 대한 액세스 권한을 부여하도록 협력자 또는 팀을 설정합니다.

둘 다에 대한 쓰기 권한이 있는 사용자는 리포지토리에서 앞뒤로 문제를 참조하고 닫을 수 있지만 필요한 권한이 없는 사용자는 최소 정보가 포함된 참조를 볼 수 있습니다.

예를 들어 `Fixes organization/public-repo#12`를 읽은 메시지와 함께 프라이빗 리포지토리의 기본 분기에 커밋을 푸시한 경우 문제는 닫혀 있지만 적절한 권한이 있는 사용자만 문제를 닫은 커밋을 나타내는 교차 리포지토리 참조를 볼 수 있습니다. 권한이 없으면 참조가 계속 표시되지만 세부 정보는 생략됩니다.
