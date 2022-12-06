---
title: Codespaces 머신
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: Codespaces 머신 API를 사용하면 사용자가 지정된 리포지토리 또는 인증된 사용자로 codespace를 만드는 데 사용할 수 있는 머신 유형을 결정할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 4ef510cd054696025d885bec854f5360cae17e96
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067980'
---
## Codespaces 머신 API 정보

Codespaces 머신 API를 사용하면 사용자가 지정된 리포지토리 또는 인증된 사용자로 codespace를 만드는 데 사용할 수 있는 머신 유형을 결정할 수 있습니다. 자세한 내용은 “[머신 유형 정보](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)”를 참조하세요.

`machine` 속성을 업데이트하여 기존 codespace의 머신을 변경할 때 이 정보를 사용할 수도 있습니다. 머신 업데이트는 다음에 codespace를 다시 시작할 때 수행됩니다. 자세한 내용은 “[codespace에 대한 머신 유형 변경](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)”을 참조하세요.
