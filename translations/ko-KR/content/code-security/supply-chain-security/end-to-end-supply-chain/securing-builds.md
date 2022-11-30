---
title: 빌드 시스템 보안의 모범 사례
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: 아티팩트 빌드 및 배포에 사용하는 시스템인 공급망의 끝을 보호하는 방법에 대한 지침입니다.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518858'
---
## 이 가이드의 내용

이 가이드에서는 빌드 시스템의 보안을 개선하기 위해 수행할 수 있는 가장 큰 변경 사항을 설명합니다. 각 섹션에서는 보안을 개선하기 위해 프로세스를 변경할 수 있는 사항을 간략하게 설명합니다. 가장 큰 변경 내용이 먼저 나열됩니다.

## 어떤 위험이 있나요?

소프트웨어 공급망에 대한 일부 공격은 빌드 시스템을 직접 대상으로 합니다. 공격자가 빌드 프로세스를 수정할 수 있는 경우 개인 계정 또는 코드를 손상시키지 않고 시스템을 악용할 수 있습니다. 빌드 시스템뿐만 아니라 개인 계정 및 코드를 보호하는 것을 잊지 말아야 합니다.

## 빌드 시스템 보호

빌드 시스템에는 다음과 같은 몇 가지 보안 기능이 있습니다.

1. 빌드 단계는 명확하고 반복 가능해야 합니다.

2. 빌드 프로세스 중에 실행된 내용을 정확히 알고 있어야 합니다.

3. 각 빌드는 새로운 환경에서 시작해야 하므로 손상된 빌드가 향후 빌드에 영향을 주지 않습니다.

{% data variables.product.prodname_actions %}는 기능을 충족하는 데 도움이 될 수 있습니다. 빌드 지침은 코드와 함께 리포지토리에 저장됩니다. 직접 호스팅하는 Windows, Mac, Linux 또는 실행기를 포함하여 빌드가 실행되는 환경을 선택합니다. 각 빌드는 새로운 실행기 이미지로 시작하여 공격이 빌드 환경에서 지속되기 어렵게 만듭니다.

보안 이점 외에도 {% data variables.product.prodname_actions %}를 사용하면 빈번하고 빠른 빌드를 위해 리포지토리의 git 이벤트를 수동으로, 주기적으로 또는 git 이벤트 시 트리거할 수 있습니다.

{% data variables.product.prodname_actions %}는 광범위한 주제이지만, “[GitHub Actions 이해](/actions/learn-github-actions/understanding-github-actions)”와 “[GitHub에서 호스트된 실행기 선택](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)”, “[워크플로 트리거](/actions/using-workflows/triggering-a-workflow)”를 먼저 시작하는 것이 좋습니다.

## 빌드 서명

빌드 프로세스가 안전해지면 누군가가 빌드 프로세스의 최종 결과를 변조하지 않도록 방지해야 합니다. 이 작업을 수행하는 좋은 방법은 빌드에 서명하는 것입니다. 퍼블릭/프라이빗 암호화 키 쌍을 사용하여 소프트웨어를 공개적으로 배포하는 경우가 많습니다. 프라이빗 키를 사용하여 빌드에 서명하고 소프트웨어 사용자가 사용하기 전에 빌드에서 서명을 확인할 수 있도록 퍼블릭 키를 게시합니다. 빌드의 바이트가 수정되면 서명이 확인되지 않습니다.

빌드에 정확히 서명하는 방법은 작성하는 코드의 종류와 사용자가 누구인지에 따라 달라집니다. 프라이빗 키를 안전하게 저장하는 방법을 알기 어려운 경우가 많습니다. 여기서 기본 옵션 중 하나는 {% data variables.product.prodname_actions %} 암호화된 비밀을 사용하는 것이지만 해당 {% data variables.product.prodname_actions %} 워크플로에 대한 액세스 권한이 있는 사용자를 제한해야 합니다. {% ifversion fpt or ghec %}프라이빗 키가 퍼블릭 인터넷(예: Microsoft Azure 또는 HashiCorp Vault)을 통해 액세스할 수 있는 다른 시스템에 저장된 경우 더 고급 옵션은 OpenID Connect로 인증하여 시스템 간에 비밀을 공유할 필요가 없도록 하는 것입니다.{% endif %} 개인 네트워크에서만 프라이빗 키에 액세스할 수 있는 경우 다른 옵션은 {% data variables.product.prodname_actions %}에 자체 호스팅 실행기를 사용하는 것입니다.

자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”{% ifversion fpt or ghec %}, “[OpenID Connect 보안 강화 정보](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”, {% endif %} 및 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

## {% data variables.product.prodname_actions %}에 대한 보안 강화

추가적으로 {% data variables.product.prodname_actions %}를 보호하기 위해 수행할 수 있는 추가 단계가 많습니다. 특히 타사 워크플로를 평가할 때는 주의해야 하며 `CODEOWNERS`를 사용하여 워크플로를 변경할 수 있는 사용자를 제한하는 것이 좋습니다.

자세한 내용은 “[GitHub Actions에 대한 보안 강화](/actions/security-guides/security-hardening-for-github-actions)”, 특히 “[타사 작업 사용](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)” 및 “[`CODEOWNERS`를 사용하여 변경 내용을 모니터링](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)”을 참조하세요.

## 다음 단계

- “[엔드투엔드 공급망 보안](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”

- “[계정 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)”

- “[공급망 코드 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)”
