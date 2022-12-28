---
title: 리포지토리에 대한 모범 사례
shortTitle: Best practices
intro: 리포지토리를 가장 효과적으로 사용하는 방법을 알아봅니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163476'
---
## 추가 정보 파일 만들기

사용자가 작업을 더 쉽게 이해하고 탐색할 수 있도록 모든 리포지토리에 대한 추가 정보 파일을 만드는 것이 좋습니다. 

{% data reusables.repositories.about-READMEs %} 자세한 내용은 "[README 정보"를 참조하세요](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

## 포크보다 분기 선호

공동 작업을 간소화하려면 일반 협력자가 단일 리포지토리에서 작업하여 리포지토리 간이 아닌 분기 간에 끌어오기 요청을 만드는 것이 좋습니다. 포크는 오픈 소스 기여자 등 프로젝트와 관련이 없는 사람들의 기여를 수락하는 데 가장 적합합니다.

분기 워크플로를 사용하는 동안 와 같은 `main`중요한 분기의 품질을 유지하려면 필요한 상태 검사 및 끌어오기 요청 검토와 함께 보호된 분기를 사용할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”를 참조하세요.

## {% data variables.large_files.product_name_long %} 사용

성능을 최적화하기 위해 {% data variables.location.product_location %}는 리포지토리에 허용되는 파일의 크기를 제한합니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %}의 대용량 파일](/repositories/working-with-files/managing-large-files/about-large-files-on-github) 정보"를 참조하세요.

Git 리포지토리에서 큰 파일을 추적하려면 {% data variables.large_files.product_name_long %}({% data variables.large_files.product_name_short %})을 사용하는 것이 좋습니다. 자세한 내용은 “[{% data variables.large_files.product_name_long %} 정보](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)”를 참조하세요.
