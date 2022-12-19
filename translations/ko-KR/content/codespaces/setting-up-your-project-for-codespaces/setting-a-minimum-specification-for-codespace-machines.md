---
title: codespace 머신에 대한 최소 사양 설정
shortTitle: Set a minimum machine spec
intro: '리소스가 부족한 컴퓨터 유형이 리포지토리의 {% data variables.product.prodname_github_codespaces %}에 사용되지 않도록 방지할 수 있습니다.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: b7eeaac84721ff1d9ceab663957b1615952b0623
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159167'
---
## 개요

만드는 각 codespace는 별도의 가상 머신에서 호스트됩니다. 리포지토리에서 codespace를 만들 때 일반적으로 다양한 유형의 가상 머신 중에서 선택할 수 있습니다. 각 컴퓨터 유형에는 서로 다른 리소스(프로세서 코어, 메모리, 스토리지)가 있으며, 기본적으로 리소스가 가장 적은 컴퓨터 유형이 사용됩니다. 자세한 내용은 “[codespace에 대한 머신 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)”을 참조하세요.

프로젝트에 특정 수준의 컴퓨팅 성능이 필요한 경우 {% data variables.product.prodname_github_codespaces %}를 구성하여 이러한 요구 사항을 충족하는 머신 형식만 기본적으로 사용하거나 사용자가 선택할 수 있도록 할 수 있습니다. 이는 `devcontainer.json` 파일에서 구성합니다.

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

**중요:** 일부 머신 유형에 대한 액세스는 조직 수준에서 제한될 수 있습니다. 일반적으로 이 작업은 더 높은 비율로 청구되는 리소스가 더 높은 머신을 선택하는 것을 방지하기 위해 수행됩니다. 리포지토리가 머신 유형에 대한 조직 수준 정책의 영향을 받는 경우 사용자가 선택할 수 있는 머신 유형이 없는 최소 사양을 설정하지 않도록 해야 합니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

{% endnote %}

## 최소 머신 사양 설정

{% data reusables.codespaces.edit-devcontainer-json %}
1. 파일을 편집하고 `devcontainer.json` , 파일의 최상위 수준에 있는 속성을 바깥쪽 JSON 개체 내에 추가 `hostRequirements` 합니다. 예:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   `cpus`, `memory`, `storage` 옵션 중 일부 또는 전체를 지정할 수 있습니다.
   
   현재 리포지토리에 사용할 수 있는 {% data variables.product.prodname_github_codespaces %} 머신 유형의 사양을 확인하려면 선택한 머신 유형이 표시될 때까지 Codespace를 만드는 프로세스를 단계별로 진행합니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).
   
1. 파일을 저장하고 리포지토리의 필요한 분기에 변경 내용을 커밋합니다.

   이제 리포지토리의 해당 분기에 대한 codespace를 만들고 생성 구성 옵션으로 이동하면 지정한 리소스와 일치하거나 초과하는 머신 유형만 선택할 수 있습니다.

   ![제한된 머신 유형 선택을 보여 주는 대화 상자](/assets/images/help/codespaces/machine-types-limited-choice.png)

## 추가 참고 자료

- “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”
