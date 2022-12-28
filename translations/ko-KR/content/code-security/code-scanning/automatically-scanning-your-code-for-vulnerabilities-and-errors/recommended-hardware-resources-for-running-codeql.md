---
title: CodeQL을 실행하기 위한 권장 하드웨어 리소스
shortTitle: Hardware resources for CodeQL
intro: '코드베이스 크기에 따라 자체 호스팅 컴퓨터에서 {% data variables.product.prodname_codeql %} 분석을 실행하기 위한 권장 사양(RAM, CPU 코어 및 디스크)입니다.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
ms.openlocfilehash: 9f180e28a3207ef64a516a1e6cd6a8bbcf17ea53
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117716'
---
{% data variables.product.prodname_actions %} 또는 외부 CI 시스템에서 {% data variables.product.prodname_codeql %}을 설정할 수 있습니다. {% data variables.product.prodname_codeql %}은 {% data variables.product.prodname_actions %}의 {% data variables.product.prodname_dotcom %} 호스팅 실행기와 완전히 호환됩니다.

프라이빗 리포지토리에 대해 {% data variables.product.prodname_actions %}에서 외부 CI 시스템 또는 자체 호스팅 실행기를 사용하는 경우 사용자 고유의 하드웨어를 구성할 책임이 있습니다. {% data variables.product.prodname_codeql %}을 실행하기 위한 최적의 하드웨어 구성은 코드베이스의 크기와 복잡성, 사용 중인 프로그래밍 언어 및 빌드 시스템, CI 워크플로 설정에 따라 달라질 수 있습니다.

아래 표에서는 코드베이스 크기에 따라 {% data variables.product.prodname_codeql %} 분석을 실행하기 위한 권장 하드웨어 사양을 제공합니다. 이러한 사양을 하드웨어 또는 가상 머신 선택을 결정하기 위한 시작점으로 사용합니다. 리소스가 많은 머신은 분석 성능을 향상시킬 수 있지만 유지 관리 비용이 더 많이 들 수도 있습니다.

| 코드베이스 크기 | RAM | CPU |
|--------|--------|--------|
| 작음(<100K 코드 줄) | 8GB 이상 | 코어 2개 |
| 중간(100K~1M 코드 줄) | 16GB 이상 | 코어 4~8개 |
| 큼(>1M 코드 줄) | 64GB 이상 | 8개 코어 |

모든 코드베이스 크기에 대해 14GB 이상의 디스크 공간이 있는 SSD를 사용하는 것이 좋습니다. 코드를 체크 아웃하고 빌드할 수 있는 충분한 디스크 공간과 {% data variables.product.prodname_codeql %}에서 생성된 데이터를 위한 추가 공간이 있어야 합니다.
