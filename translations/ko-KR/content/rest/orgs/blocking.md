---
title: 사용자 차단
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 1649cc0627ed55be5317e0606bb29287dbd3d94a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065788'
---
조직에 대한 차단 호출을 수행하기 위해 호출을 인증하는 데 사용되는 토큰에는 `admin:org` 범위가 있어야 합니다. 그렇지 않으면 응답에서 `HTTP 404`가 반환됩니다.
