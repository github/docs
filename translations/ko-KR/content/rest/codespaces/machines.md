---
title: Codespaces 머신
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: REST API를 사용하여 codespace에 대한 컴퓨터 형식의 가용성을 관리합니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5b53ceb3fb7cf137f61285b1f9ed0aa7838a9179
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193549'
---
## {% data variables.product.prodname_codespaces %} 머신 정보

지정된 리포지토리 또는 인증된 사용자로 codespace를 만드는 데 사용할 수 있는 컴퓨터 유형을 확인할 수 있습니다. 자세한 내용은 “[머신 유형 정보](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)”를 참조하세요.

`machine` 속성을 업데이트하여 기존 codespace의 머신을 변경할 때 이 정보를 사용할 수도 있습니다. 머신 업데이트는 다음에 codespace를 다시 시작할 때 수행됩니다. 자세한 내용은 “[codespace에 대한 머신 유형 변경](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)”을 참조하세요.
