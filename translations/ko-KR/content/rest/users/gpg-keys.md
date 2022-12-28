---
title: GPG 키
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0781b20628b48b9ca5d411ead6f3ddf1bcd1c6d4
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879174'
---
## 사용자 GPG 키 API 정보

`public_key` 응답 필드에 반환된 데이터는 GPG 형식의 키가 아닙니다. 사용자가 GPG 키를 업로드하면 구문 분석되며 암호화 퍼블릭 키가 추출되고 저장됩니다. 이 암호화 키는 이 페이지의 API에서 반환하는 키입니다. 이 키는 GPG와 같은 프로그램에서 직접 사용하기에 적합하지 않습니다.

{% data reusables.user-settings.user-api %}
