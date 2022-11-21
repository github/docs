---
title: 엔드투엔드 공급망 보안
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: '개인 계정, 코드 및 빌드 프로세스를 포함하여 완전한 엔드투엔드 공급망 보안에 대한 모범 사례 가이드를 소개합니다.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060684'
---
## 엔드투엔드 공급망이란?

엔드투엔드 소프트웨어 공급망 보안의 핵심은 배포하는 코드가 변조되지 않았는지 확인하는 것입니다. 이전에 공격자는 사용하는 종속성(예: 라이브러리 및 프레임워크)을 주로 대상으로 했습니다. 공격자는 이제 대상 사용자 계정 및 빌드 프로세스를 포함하도록 대상을 확장했으므로 해당 시스템도 방어해야 합니다.

종속성을 보호하는 데 도움이 될 수 있는 {% data variables.product.prodname_dotcom %}의 기능에 대한 자세한 내용은 “[공급망 보안 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)”를 참조하세요.

## 가이드 정보

이 가이드 시리즈에서는 개인 계정, 코드 및 빌드 프로세스와 같은 엔드투엔드 공급망의 보안을 유지하는 방법을 설명합니다. 각 가이드에서는 해당 영역에 대한 위험을 설명하고 해당 위험을 해결하는 데 도움이 되는 {% data variables.product.product_name %} 기능을 소개합니다. 

모든 사용자의 요구 사항은 서로 다르므로 각 가이드는 가장 큰 영향 변화로 시작하여 고려해야 할 추가 개선 사항으로 진행됩니다. 자유롭게 둘러보고 가장 큰 이익을 얻을 것이라고 생각하는 개선사항에 집중해야 합니다. 목표는 모든 작업을 한 번에 수행하는 것이 아니라 시간이 지남에 따라 시스템의 보안을 지속적으로 개선하는 것입니다.

- “[계정 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)”

- “[공급망 코드 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)”

- “[빌드 시스템 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)”

## 추가 참고 자료

- [모든 소프트웨어 공급망에서 아티팩트 무결성 보호](https://slsa.dev/)
- [Microsoft 공급망 무결성 모델](https://github.com/microsoft/scim)
- [소프트웨어 공급망 보안 문서 - CNCF 보안 기술 자문 그룹](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
