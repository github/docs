---
title: 엔터프라이즈와 작업 및 워크플로 공유
intro: 작업 또는 워크플로를 공개적으로 게시하지 않고도 작업 또는 워크플로를 기업과 공유할 수 있습니다.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068785'
---
## 내부 리포지토리에 대한 {% data variables.product.prodname_actions %} 액세스 정보

엔터프라이즈 계정이 조직을 소유하는 경우 {% data variables.product.prodname_actions %} 워크플로가 작업 또는 워크플로가 포함된 내부 리포지토리에 액세스할 수 있도록 허용하여 작업 또는 워크플로를 공개적으로 게시하지 않고도 엔터프라이즈 내에서 작업 및 워크플로를 공유할 수 있습니다. 

내부 리포지토리에 저장된 모든 작업 또는 워크플로는 동일한 조직이 소유한 다른 개인 및 내부 리포지토리 또는 엔터프라이즈가 소유한 모든 조직에 정의된 워크플로에서 사용할 수 있습니다. 내부 리포지토리에 저장된 작업 및 워크플로는 퍼블릭 리포지토리에서 사용할 수 없습니다.

{% warning %}

**경고**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## 엔터프라이즈와 작업 및 워크플로 공유

1. 작업 또는 워크플로를 내부 리포지토리에 저장합니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)”를 참조하세요.
1. 다른 프라이빗 및 내부 리포지토리의 워크플로에 대한 액세스를 허용하도록 리포지토리를 구성합니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)”를 참조하세요.

## 추가 참고 자료

- “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”
- “[워크플로 다시 사용](/actions/using-workflows/reusing-workflows)”
