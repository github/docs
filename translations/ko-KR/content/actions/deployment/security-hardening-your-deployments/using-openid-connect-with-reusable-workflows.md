---
title: 재사용 가능한 워크플로에서 OpenID 커넥트 사용
shortTitle: OpenID Connect with reusable workflows
intro: OIDC에서 재사용 가능한 워크플로를 사용하여 배포 단계를 표준화하고 보안을 강화할 수 있습니다.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/using-oidc-with-your-reusable-workflows
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: how_to
topics:
  - Workflows
  - Security
ms.openlocfilehash: 3a02b1de0deff79ec2ee247f82a0587fde5c79fa
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009482'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 재사용 가능한 워크플로 정보

한 워크플로에서 다른 워크플로로 배포 작업을 복사하고 붙여넣는 대신 배포 단계를 수행하는 재사용 가능한 워크플로를 만들 수 있습니다. 재사용 가능한 워크플로는 “[워크플로 재사용](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows)”에 설명된 액세스 요구 사항 중 하나를 충족하는 경우 다른 워크플로에서 사용할 수 있습니다.

"[워크플로 재사용](/actions/learn-github-actions/reusing-workflows)" 및 "[OpenID Connect를 사용하여 보안 강화](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) 정보"에 설명된 개념을 잘 알고 있어야 합니다.

## 신뢰 조건 정의

OIDC(OpenID Connect)와 결합된 경우 재사용 가능한 워크플로를 사용하면 리포지토리, 조직 또는 엔터프라이즈 간에 일관된 배포를 적용할 수 있습니다. 재사용 가능한 워크플로를 기반으로 클라우드 역할에 대한 신뢰 조건을 정의하여 이 작업을 수행할 수 있습니다. 사용 가능한 옵션은 클라우드 공급자에 따라 달라집니다.

- **`job_workflow_ref` 사용**: 
  - 재사용 가능한 워크플로를 기반으로 신뢰 조건을 만들려면 클라우드 공급자가 `job_workflow_ref`에 대한 사용자 지정 클레임을 지원해야 합니다. 이렇게 하면 클라우드 공급자가 작업이 원래 시작된 리포지토리를 식별할 수 있습니다. 
  - 표준 클레임(대상 그룹(`aud`) 및 제목(`sub`))만 지원하는 클라우드의 경우 API를 사용하여 `job_workflow_ref`를 포함할 `sub` 클레임을 사용자 지정할 수 있습니다. 자세한 내용은 “[토큰 클레임 사용자 지정](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims)”을 참조하세요. 사용자 지정 클레임에 대한 지원은 현재 Google Cloud Platform 및 HashiCorp Vault에서 사용할 수 있습니다.

- **토큰 클레임 사용자 지정**: 
  - JWT에 포함된 발급자(`iss`) 및 주체(`sub`) 클레임을 사용자 지정하여 보다 세부적인 신뢰 조건을 구성할 수 있습니다. 자세한 내용은 “[토큰 클레임 사용자 지정](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims)”을 참조하세요.

## 토큰이 재사용 가능한 워크플로를 사용하는 방식

워크플로를 실행하는 동안 {% data variables.product.prodname_dotcom %}의 OIDC 공급자는 작업에 대한 정보가 포함된 OIDC 토큰을 클라우드 공급자에게 제공합니다. 해당 작업이 재사용 가능한 워크플로의 일부인 경우 토큰에는 호출 워크플로에 대한 정보가 포함된 표준 클레임이 포함되며 호출된 워크플로에 대한 정보를 포함하는 사용자 지정 클레임인 `job_workflow_ref`도 포함됩니다.

예를 들어 다음 OIDC 토큰은 호출된 워크플로의 일부인 작업에 대한 것입니다. `workflow`, `ref` 및 기타 특성은 호출자 워크플로를 설명하는 반면 `job_workflow_ref`는 호출된 워크플로를 참조합니다.

```yaml{:copy}
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

재사용 가능한 워크플로가 배포 단계를 수행하는 경우 일반적으로 특정 클라우드 역할에 액세스해야 하며, 조직의 모든 리포지토리가 재사용 가능한 워크플로를 호출하도록 허용해야 합니다. 이를 허용하려면 리포지토리 및 호출자 워크플로를 허용하는 신뢰 조건을 만든 다음 조직 및 호출된 워크플로를 필터링합니다. 다음 섹션에서 몇 가지 예제를 참조하세요.

## 예제

**특정 리포지토리 내에서 재사용 가능한 워크플로 필터링**

특정 리포지토리에서 재사용 가능한 워크플로를 필터링하는 사용자 지정 클레임을 구성할 수 있습니다. 이 예제에서 워크플로 실행은 `octo-org/octo-automation` 리포지토리의 재사용 가능한 워크플로 및 `octo-org` 조직이 소유한 모든 리포지토리에 정의된 작업에서 시작되어야 합니다.

- **제목**:
  - 구문: `repo:ORG_NAME/*`
  - 예: `repo:octo-org/*`

- **사용자 지정 클레임**:
  - 구문: `job_workflow_ref:ORG_NAME/REPO_NAME`
  - 예: `job_workflow_ref:octo-org/octo-automation@*`

**특정 참조에서 재사용 가능한 특정 워크플로에 대한 필터링**

재사용 가능한 특정 워크플로를 필터링하는 사용자 지정 클레임을 구성할 수 있습니다. 이 예제에서 워크플로 실행은 재사용 가능한 워크플로 `octo-org/octo-automation/.github/workflows/deployment.yml` 및 `octo-org` 조직이 소유한 모든 리포지토리에 정의된 작업에서 시작되어야 합니다.

- **제목**:
  - 구문: `repo:ORG_NAME/*` 
  - 예: `repo:octo-org/*` 

- **사용자 지정 클레임**:
  - 구문: `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref` 
  - 예: `job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`
