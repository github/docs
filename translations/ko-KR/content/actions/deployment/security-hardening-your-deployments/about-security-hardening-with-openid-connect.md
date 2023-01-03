---
title: OpenID Connect를 사용한 보안 강화 정보
shortTitle: Security hardening with OpenID Connect
intro: OpenID Connect를 사용하면 워크플로가 클라우드 공급자에서 직접 단기 토큰을 교환할 수 있습니다.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90a2f8c6cb2114f060bfbd0f422cb1ef6dbca604
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192033'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## OpenID Connect 개요

{% data variables.product.prodname_actions %} 워크플로는 종종 소프트웨어를 배포하거나 클라우드의 서비스를 사용하기 위해 클라우드 공급자(예: AWS, Azure, GCP 또는 HashiCorp Vault)에 액세스하도록 설계되었습니다. 워크플로가 이러한 리소스에 액세스하기 전에 클라우드 공급자에게 암호 또는 토큰과 같은 자격 증명을 제공합니다. 이러한 자격 증명은 일반적으로 {% data variables.product.prodname_dotcom %}에 비밀로 저장되며 워크플로는 실행될 때마다 클라우드 공급자에게 이 비밀을 제공합니다. 

그러나 하드 코딩된 비밀을 사용하려면 클라우드 공급자에서 자격 증명을 만든 다음, {% data variables.product.prodname_dotcom %}에서 비밀로 복제해야 합니다. 

OIDC(OpenID Connect)를 사용하면 클라우드 공급자에게 직접 수명이 짧은 액세스 토큰을 요청하도록 워크플로를 구성하여 다른 접근 방식을 취할 수 있습니다. 또한 클라우드 공급자는 OIDC를 지원해야 하며, 액세스 토큰을 요청할 수 있는 워크플로를 제어하는 트러스트 관계를 구성해야 합니다. 현재 OIDC를 지원하는 공급자로는 Amazon Web Services, Azure, Google Cloud Platform 및 HashiCorp Vault 등이 있습니다.

### OIDC 사용의 장점

OIDC 토큰을 사용하도록 워크플로를 업데이트하면 다음과 같은 적절한 보안 사례를 채택할 수 있습니다.

- **클라우드 비밀 없음**: 수명이 긴 {% data variables.product.prodname_dotcom %} 비밀로 클라우드 자격 증명을 복제할 필요가 없습니다. 대신 클라우드 공급자에서 OIDC 트러스트를 구성한 다음, 워크플로를 업데이트하여 OIDC를 통해 클라우드 공급자로부터 단기 액세스 토큰을 요청할 수 있습니다. 
- **인증 및 권한 부여 관리**: 워크플로가 자격 증명을 사용하고 클라우드 공급자의 인증(authN) 및 권한 부여(authZ) 도구를 사용하여 클라우드 리소스에 대한 액세스를 제어하는 방법을 보다 세부적으로 제어할 수 있습니다.
- **자격 증명 순환**: OIDC를 사용하면 클라우드 공급자가 단일 작업에만 유효한 수명이 짧은 액세스 토큰을 발급한 다음, 자동으로 만료됩니다.

### OIDC 시작

다음 다이어그램에서는 {% data variables.product.prodname_dotcom %}의 OIDC 공급자가 워크플로 및 클라우드 공급자와 통합되는 방법에 대한 개요를 제공합니다.

![OIDC 다이어그램](/assets/images/help/images/oidc-architecture.png)

1. 클라우드 공급자에서 클라우드에 액세스해야 하는 클라우드 역할과 {% data variables.product.prodname_dotcom %} 워크플로 간에 OIDC 트러스트를 만듭니다.
2. 작업이 실행될 때마다 {% data variables.product.prodname_dotcom %}의 OIDC 공급자는 OIDC 토큰을 자동으로 생성합니다. 이 토큰에는 인증하려는 특정 워크플로에 대해 보안이 강화되고 확인 가능한 ID를 설정하는 여러 클레임이 포함되어 있습니다.
3. {% data variables.product.prodname_dotcom %}의 OIDC 공급자에서 이 토큰을 요청하고 클라우드 공급자에게 표시하는 단계 또는 동작을 작업에 포함할 수 있습니다.
4. 클라우드 공급자가 토큰에 제공된 클레임의 유효성을 성공적으로 검사하면 작업 기간 동안에만 사용할 수 있는 수명이 짧은 클라우드 액세스 토큰을 제공합니다.

## 클라우드를 사용하여 OIDC 트러스트 구성

{% data variables.product.prodname_dotcom %}의 OIDC 공급자를 신뢰하도록 클라우드를 구성하는 경우 신뢰할 수 없는 리포지토리 또는 워크플로가 클라우드 리소스에 대한 액세스 토큰을 요청할 수 없도록 들어오는 요청을 필터링하는 조건을 추가 **해야 합니다**.

- 액세스 토큰을 부여하기 전에 클라우드 공급자는 트러스트 설정에서 조건을 설정하는 데 사용되는 [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 및 기타 클레임이 요청의 JWT(JSON Web Token)의 클레임과 일치하는지 확인합니다. 따라서 클라우드 공급자에서 _주체_ 및 기타 조건을 올바르게 정의하기 위해 주의해야 합니다.
- OIDC 트러스트 구성 단계 및 클라우드 역할에 대한 조건을 설정(_주체_ 및 기타 클레임 사용)하는 구문은 사용 중인 클라우드 공급자에 따라 달라집니다. 몇 가지 예제는 "[주체 클레임 예제](#example-subject-claims)"를 참조하세요.
 
### OIDC 토큰 이해

각 작업은 {% data variables.product.prodname_dotcom %}의 OIDC 공급자로부터 OIDC 토큰을 요청합니다. 이 공급자는 생성된 각 워크플로 작업에 대해 고유한 자동으로 생성된 JWT(JSON Web Token)로 응답합니다. 작업이 실행되면 클라우드 공급자에게 OIDC 토큰이 표시됩니다. 토큰의 유효성을 검사하기 위해 클라우드 공급자는 OIDC 토큰의 주체 및 기타 클레임이 클라우드 역할의 OIDC 트러스트 정의에 미리 구성된 조건과 일치하는지 확인합니다.

다음 예제 OIDC 토큰은 `octo-org/octo-repo` 리포지토리에 `sub`라는 작업 환경을 참조하는 주체(`prod`)를 사용합니다.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
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

{% data variables.product.prodname_dotcom %}의 OIDC 공급자에서 지원하는 모든 클레임을 보려면 {% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %} https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}에서 `claims_supported` 항목을 검토합니다.

토큰에는 표준 대상 그룹, 발급자 및 주체 클레임이 포함됩니다.

|    클레임    | 설명            |
| ----------- | ---------------------- |
| `aud`| _(대상 그룹)_ 기본적으로 리포지토리를 소유하는 조직과 같은 리포지토리 소유자의 URL입니다. 사용자 지정할 수 있는 유일한 클레임입니다. 도구 키트 명령 [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)을 사용하여 사용자 지정 대상 그룹을 설정할 수 있습니다.          | 
| `iss`| _(발급자)_ OIDC 토큰의 발급자: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(주체)_ 클라우드 공급자가 유효성을 검사할 주체 클레임을 정의합니다. 이 설정은 액세스 토큰이 예측 가능한 방식으로만 할당되도록 하는 데 필수적입니다.|

OIDC 토큰에는 추가 표준 클레임도 포함됩니다.

|    클레임    | 설명            |
| ----------- | ---------------------- |
| `alg`| _(알고리즘)_ OIDC 공급자가 사용하는 알고리즘입니다.                    | 
| `exp`| _(만료 날짜)_ JWT의 만료 시간을 식별합니다.                    | 
| `iat`| _(발급 시간)_ JWT가 발급된 시간입니다.                   | 
| `jti`| _(JWT 토큰 식별자)_ OIDC 토큰의 고유 식별자입니다.                   | 
| `kid`| _(키 식별자)_ OIDC 토큰의 고유 키입니다.                   | 
| `nbf`| _(이전이 아님)_ 이 시간 전에는 JWT를 사용할 수 없습니다.                   | 
| `typ`| _(유형)_ 토큰의 유형을 설명합니다. JWT(JSON Web Token)입니다.                   | 

토큰에는 {% data variables.product.prodname_dotcom %}가 제공하는 사용자 지정 클레임도 포함됩니다.

|    클레임    | 설명            |
| ----------- | ---------------------- |
| `actor`| 워크플로 실행을 시작한 개인 계정입니다.                   | 
| `actor_id`| 워크플로 실행을 시작한 개인 계정의 ID입니다.             |
| `base_ref`| 워크플로 실행에서 끌어오기 요청의 대상 분기입니다.                   | 
| `environment`| 작업에 사용되는 환경의 이름입니다.                    | 
| `event_name`| 워크플로 실행을 트리거한 이벤트의 이름입니다.                    | 
| `head_ref`| 워크플로 실행에서 끌어오기 요청의 소스 분기입니다.                   | 
| `job_workflow_ref`| 이 작업에서 사용하는 재사용 가능한 워크플로의 참조 경로입니다. 자세한 내용은 “[재사용 가능한 워크플로에서 OpenID Connect 사용](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)”을 참조하세요.                  | 
| `ref`| _(참조)_ 워크플로 실행을 트리거한 git 참조입니다.                   | 
| `ref_type`| `ref`의 유형(예: "branch")입니다.                  | 
| `repository_visibility` | 워크플로가 실행 중인 리포지토리의 표시 여부입니다. 값 `internal`, `private` 또는 `public` 중에서 수락합니다.                   | 
| `repository`| 워크플로가 실행 중인 리포지토리입니다.                   | 
| `repository_id`| 워크플로가 실행 중인 리포지토리의 ID입니다.  |
| `repository_owner`| `repository`가 저장되는 조직의 이름입니다.                   | 
| `repository_owner_id`| `repository`가 저장되는 조직의 ID입니다.            |
| `run_id`| 워크플로를 트리거한 워크플로 실행의 ID입니다.                   | 
| `run_number`| 이 워크플로가 실행된 횟수입니다.                   | 
| `run_attempt`| 이 워크플로가 다시 시도된 횟수입니다.                    | 
| `workflow`| 워크플로의 이름입니다.                   | 

### OIDC 클레임을 사용하여 클라우드 역할에 대한 트러스트 조건 정의

OIDC를 사용하면 클라우드 공급자의 리소스에 액세스하기 위해 {% data variables.product.prodname_actions %} 워크플로에 토큰이 필요합니다. 워크플로는 클라우드 공급자로부터 JWT에서 제공하는 세부 정보를 확인하는 액세스 토큰을 요청합니다. JWT의 트러스트 구성이 일치하는 경우 클라우드 공급자는 워크플로에 임시 토큰을 발급하여 응답합니다. 그러면 클라우드 공급자의 리소스에 액세스하는 데 이 임시 토큰을 사용할 수 있습니다. 특정 조직의 리포지토리에서 시작된 요청에만 응답하도록 클라우드 공급자를 구성할 수 있습니다. 아래에 설명된 추가 조건을 지정할 수도 있습니다.

대상 그룹 및 주체 클레임은 일반적으로 클라우드 역할/리소스에 대한 조건을 설정하여 GitHub 워크플로에 대한 액세스 범위를 지정할 때 함께 사용됩니다.
- **대상 그룹**: 기본적으로 이 값은 조직 또는 리포지토리 소유자의 URL을 사용합니다. 특정 조직의 워크플로만 클라우드 역할에 액세스할 수 있는 조건을 설정하는 데 사용할 수 있습니다.
- **주체**: 기본적으로 미리 정의된 형식을 가지며 {% data variables.product.prodname_dotcom %} 조직, 리포지토리, 분기 또는 연결된 [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) 환경과 같은 워크플로에 대한 일부 주요 메타데이터를 연결한 것입니다. 연결된 메타데이터에서 주체 클레임이 어셈블되는 방법을 보려면 "[주체 클레임 예제](#example-subject-claims)"를 참조하세요.

보다 세부적인 신뢰 조건이 필요한 경우 JWT에 포함된 발급자(`iss`) 및 주체(`sub`) 클레임을 사용자 지정할 수 있습니다. 자세한 내용은 “[토큰 클레임 사용자 지정](#customizing-the-token-claims)”을 참조하세요.

이러한 조건을 설정하는 데 사용할 수 있는 OIDC 토큰에서 지원되는 많은 추가 클레임이 있습니다. 또한 클라우드 공급자를 사용하면 액세스 토큰에 역할을 할당할 수 있으므로 보다 세부적인 권한을 지정할 수 있습니다.

{% note %}

**참고**: 클라우드 공급자가 액세스 토큰을 발급하는 방법을 제어하려면 신뢰할 수 없는 리포지토리가 클라우드 리소스에 대한 액세스 토큰을 요청할 수 없도록 하나 이상의 조건을 정의 **해야 합니다**.

{% endnote %}

### 주체 클레임 예제

다음 예제에서는 "주체"를 조건으로 사용하는 방법과 연결된 메타데이터에서 "주체"가 어셈블되는 방법을 설명합니다. [주체](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)는 [`job` 컨텍스트](/actions/learn-github-actions/contexts#job-context)의 정보를 사용하며, 특정 분기, 환경에서 실행되는 워크플로의 요청에 대해서만 액세스 토큰 요청을 부여할 수 있음을 클라우드 공급자에 알립니다. 다음 섹션에서는 사용할 수 있는 몇 가지 일반적인 주체에 대해 설명합니다.

#### 특정 환경에 대한 필터링

주체 클레임에는 작업이 환경을 참조할 때의 환경 이름이 포함됩니다.

특정 [환경](/actions/deployment/using-environments-for-deployment) 이름을 필터링하는 주체를 구성할 수 있습니다. 이 예제에서 워크플로 실행은 `octo-org` 조직이 소유한 `octo-repo`라는 리포지토리에 `Production`이라는 환경이 있는 작업에서 시작되어야 합니다.

|        |             |
| ------ | ----------- |
| 구문 | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| 예제:| `repo:octo-org/octo-repo:environment:Production`       |

#### `pull_request` 이벤트 필터링

워크플로가 끌어오기 요청 이벤트에 의해 트리거되는 경우 주체 클레임에 `pull_request` 문자열이 포함됩니다. 단, 작업에서 환경을 참조하지 않아야만 합니다.

[`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) 이벤트를 필터링하는 주체를 구성할 수 있습니다. 이 예제에서 워크플로 실행은 `octo-org` 조직이 소유한 `octo-repo`라는 리포지토리의 `pull_request` 이벤트에 의해 트리거되어야 합니다.

|        |             |
| ------ | ----------- |
| 구문 | `repo:<orgName/repoName>:pull_request`      | 
| 예제:| `repo:octo-org/octo-repo:pull_request`      |

#### 특정 분기 필터링

주체 클레임에는 워크플로의 분기 이름이 포함됩니다. 단, 작업이 환경을 참조하지 않고 워크플로가 끌어오기 요청 이벤트에 의해 트리거되지 않는 경우에만 해당됩니다.

특정 분기 이름을 필터링하는 주체를 구성할 수 있습니다. 이 예제에서 워크플로 실행은 `octo-org` 조직이 소유한 `octo-repo`라는 리포지토리에 `demo-branch`라는 분기에서 시작되어야 합니다.

|        |             |
| ------ | ----------- |
| 구문 | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| 예제:| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### 특정 태그 필터링

주체 클레임에는 워크플로의 태그 이름이 포함됩니다. 단, 작업이 환경을 참조하지 않고 워크플로가 끌어오기 요청 이벤트에 의해 트리거되지 않는 경우에만 해당됩니다.

특정 태그를 필터링하는 주체를 만들 수 있습니다. 이 예제에서 워크플로 실행은 `octo-org` 조직이 소유한 `octo-repo`라는 리포지토리의 `demo-tag` 태그로 시작되어야 합니다.

|        |             |
| ------ | ----------- |
| 구문 | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| 예제:| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### 클라우드 공급자에서 주체 구성

클라우드 공급자의 트러스트 관계에서 주체를 구성하려면 해당 트러스트 구성에 주체 문자열을 추가해야 합니다. 다음 예제에서는 다양한 클라우드 공급자가 서로 다른 방식으로 동일한 `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` 주체를 수락하는 방법을 보여 줍니다.

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

자세한 내용은 "[클라우드 공급자에 대해 OpenID Connect 사용](#enabling-openid-connect-for-your-cloud-provider)"에 나열된 지침을 참조하세요.

## OIDC에 대한 작업 업데이트

OIDC를 사용하여 인증하도록 사용자 지정 작업을 업데이트하려면 작업 도구 키트에서 `getIDToken()`을 사용하여 {% data variables.product.prodname_dotcom %}의 OIDC 공급자로부터 JWT를 요청할 수 있습니다. 자세한 내용은 [npm 패키지 설명서](https://www.npmjs.com/package/@actions/core/v/1.6.0)에서 "OIDC 토큰"을 참조하세요.

다음 환경 변수를 사용하여 `curl` 명령을 사용하여 JWT를 요청할 수도 있습니다.

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | {% data variables.product.prodname_dotcom %}의 OIDC 공급자에 대한 URL      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | OIDC 공급자에 대한 요청의 전달자 토큰      |


예를 들면 다음과 같습니다.

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### 사용 권한 설정 추가

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## 토큰 클레임 사용자 지정

JWT에 포함된 클레임을 사용자 지정하여 OIDC 구성의 보안을 강화할 수 있습니다. 다음 사용자 지정을 사용하면 워크플로가 클라우드에서 호스트되는 리소스에 액세스할 수 있도록 허용할 때 클라우드 역할에 대해 보다 세부적인 신뢰 조건을 정의할 수 있습니다.

{% ifversion ghec %} - 추가 보안 계층을 위해 엔터프라이즈 슬러그와 함께 `issuer` URL을 추가할 수 있습니다. 이렇게 하면 발급자(`iss`) 클레임에 조건을 설정하고 엔터프라이즈 슬러그를 포함해야 하는 고유한 `issuer` URL의 JWT 토큰만 허용하도록 구성할 수 있습니다.{% endif %}
- 특정 리포지토리, 재사용 가능한 워크플로 또는 기타 원본에서 발생하는 데 JWT 토큰이 필요한 주체(`sub`) 클레임에 대한 조건을 설정하여 OIDC 구성을 표준화할 수 있습니다.
- `repository_id` 및 `repository_visibility` 등과 같은 추가 OIDC 토큰 클레임을 사용하여 세분화된 OIDC 정책을 정의할 수 있습니다. 자세한 내용은 “[OIDC 토큰 이해](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)”를 참조하세요.

이러한 클레임 형식을 사용자 지정하기 위해 조직 및 리포지토리 관리자는 다음 섹션에 설명된 REST API 엔드포인트를 사용할 수 있습니다.

{% ifversion ghec %}

### 고유한 토큰 URL로 전환

기본적으로 JWT는 {% data variables.product.prodname_dotcom %}의 OIDC 공급자가 `https://token.actions.githubusercontent.com`에서 발급합니다. 이 경로는 JWT의 `iss` 값을 사용하여 클라우드 공급자에게 표시됩니다.

엔터프라이즈 관리자는 `https://token.actions.githubusercontent.com/<enterpriseSlug>`에서 고유한 URL에서 토큰을 받도록 엔터프라이즈를 구성하여 OIDC 구성의 보안을 강화할 수 있습니다. `<enterpriseSlug>`를 엔터프라이즈의 슬러그 값으로 바꿉니다. 

이 구성은 엔터프라이즈가 고유한 URL에서 OIDC 토큰을 수신하고 해당 URL의 토큰만 수락하도록 클라우드 공급자를 구성할 수 있음을 의미합니다. 이렇게 하면 엔터프라이즈의 리포지토리만 OIDC를 사용하여 클라우드 리소스에 액세스할 수 있습니다.

엔터프라이즈에 대해 이 설정을 활성화하려면 엔터프라이즈 관리자가 `/enterprises/{enterprise}/actions/oidc/customization/issuer` 엔드포인트를 사용하고 요청 본문에서 `"include_enterprise_slug": true`를 지정해야 합니다. 자세한 내용은 “[엔터프라이즈에 대한 {% data variables.product.prodname_actions %} OIDC 사용자 지정 발급자 정책 설정](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)”을 참조하세요.

이 설정이 적용되면 JWT에 업데이트된 `iss` 값이 포함됩니다. 다음 예제에서 `iss` 키는 해당 `enterpriseSlug` 값으로 `octocat-inc`를 사용합니다.

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### 조직 또는 리포지토리에 대한 주체 클레임 사용자 지정

보안, 규정 준수 및 표준화를 개선하기 위해 필요한 액세스 조건에 맞게 표준 클레임을 사용자 지정할 수 있습니다. 클라우드 공급자가 주체 클레임에 대한 조건을 지원하는 경우 `sub`값이 재사용 가능한 워크플로의 경로와 일치하는지 여부를 확인하는 조건을 만들 수 있습니다(예: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`). 정확한 형식은 클라우드 공급자의 OIDC 구성에 따라 달라집니다. {% data variables.product.prodname_dotcom %}에서 일치 조건을 구성하려면 REST API를 사용하여 `sub` 클레임에 항상 특정 사용자 지정 클레임(예: `job_workflow_ref`)을 포함하도록 요구할 수 있습니다. [OIDC REST API를 사용하여 OIDC](/rest/actions/oidc) 주체 클레임에 대한 사용자 지정 템플릿을 적용할 수 있습니다. 예를 들어 OIDC 토큰 내의 `sub` 클레임에 항상 특정 사용자 지정 클레임(예: `job_workflow_ref`)을 포함하도록 요구할 수 있습니다.

{% note %}

**참고**: 조직 템플릿이 적용되면 이미 OIDC를 사용하는 기존 리포지토리의 워크플로에는 영향을 주지 않습니다. 기존 리포지토리와 템플릿이 적용된 후 생성된 새 리포지토리의 경우 리포지토리 소유자는 이 구성을 수신하기 위해 옵트인해야 하거나 리포지토리에 특정한 다른 구성을 적용할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 OIDC 주체 클레임에 대한 사용자 지정 템플릿 설정"을 참조하세요](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository).

{% endnote %}

클레임을 사용자 지정하면 전체 `sub` 클레임에 대해 새 형식이 생성되며, 이는 “[예제 주체 클레임](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)”에 설명된 토큰의 기본 미리 정의된 `sub` 형식을 대체합니다.

다음 예제 템플릿에서는 제목 클레임을 사용자 지정하는 다양한 방법을 보여 줍니다. {% data variables.product.prodname_dotcom %}에서 이러한 설정을 구성하기 위해 관리자는 REST API를 사용하여 주체(`sub`) 클레임에 포함되어야 하는 클레임 목록을 지정합니다. 

{% data reusables.actions.use-request-body-api %}

주체 클레임을 사용자 지정하려면 먼저 REST API를 사용하여 구성을 사용자 지정하기 전에 클라우드 공급자의 OIDC 구성에서 일치하는 조건을 만들어야 합니다. 구성이 완료되면 새 작업이 실행될 때마다 해당 작업 중에 생성된 OIDC 토큰이 새 사용자 지정 템플릿을 따릅니다. 작업이 실행되기 전에 일치하는 조건이 클라우드 공급자의 OIDC 구성에 없는 경우 클라우드 조건이 동기화되지 않을 수 있으므로 생성된 토큰이 클라우드 공급자에 의해 수락되지 않을 수 있습니다.

#### 예: 표시 유형 및 소유자에 따라 리포지토리 허용

이 예제 템플릿을 사용하면 `sub` 클레임이 `repository_owner` 및 `repository_visibility`를 사용하여 새 형식을 가질 수 있습니다.

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

클라우드 공급자의 OIDC 구성에서 클레임에 `repository_owner` 및 `repository_visibility`에 대한 특정 값을 포함해야 하는 `sub` 조건을 구성합니다. 예: `"repository_owner: "monalisa":repository_visibility:private"` 이 접근 방식을 사용하면 클라우드 역할 액세스를 조직 또는 엔터프라이즈 내의 프라이빗 리포지토리로만 제한할 수 있습니다.

#### 예: 특정 소유자에게 모든 리포지토리에 대한 액세스 허용

이 예제 템플릿을 사용하면 `sub` 클레임에 `repository_owner`의 값만 있는 새 형식을 사용할 수 있습니다. 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

클라우드 공급자의 OIDC 구성에서 클레임에 `repository_owner`에 대한 특정 값을 포함해야 하는 `sub` 조건을 구성합니다. 예: `"repository_owner: "monalisa""`

#### 예: 재사용 가능한 워크플로 필요

이 예제 템플릿을 사용하면 `sub` 클레임에 `job_workflow_ref` 클레임의 값이 포함된 새 형식을 갖도록 할 수 있습니다. 이를 통해 엔터프라이즈는 [재사용 가능한 워크플로](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)를 사용하여 조직 및 리포지토리에 일관된 배포를 적용할 수 있습니다.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

클라우드 공급자의 OIDC 구성에서 클레임에 `job_workflow_ref`에 대한 특정 값을 포함해야 하는 `sub` 조건을 구성합니다. 예: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`

#### 예: 재사용 가능한 워크플로 및 기타 클레임 필요

다음 예제 템플릿은 재사용 가능한 특정 워크플로의 요구 사항을 추가 클레임과 결합합니다.

{% data reusables.actions.use-request-body-api %}

이 예제에서는 `"context"`를 사용하여 조건을 정의하는 데 사용하는 방법도 보여 줍니다. 이 부분은 리포지토리를 [기본 `sub` 형식](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)으로 따르는 부분입니다. 예를 들어 작업이 환경을 참조할 때 컨텍스트에는 `environment:<environmentName>`이 포함됩니다.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

클라우드 공급자의 OIDC 구성에서 클레임에 `repo``context` 및`job_workflow_ref`에 대한 특정 값을 포함해야 하는 `sub` 조건을 구성합니다.

이 사용자 지정 템플릿을 사용하려면 `sub`가 `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>` 형식을 사용해야 합니다. 예: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### 예: 특정 리포지토리에 대한 액세스 권한 부여

이 예제 템플릿을 사용하면 모든 분기/태그 및 환경에서 특정 리포지토리의 모든 워크플로에 클라우드 액세스 권한을 부여할 수 있습니다. 보안을 강화하려면 이 템플릿을 “[엔터프라이즈용 토큰 URL 사용자 지정](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)”에 설명된 사용자 지정 발급자 URL과 결합합니다. 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

클라우드 공급자의 OIDC 구성에서 필요한 값과 일치하는 `repo` 클레임을 요구하도록 `sub` 조건을 구성합니다.

#### 예: 시스템 생성 GUID 사용

이 예제 템플릿은 엔터티 이름 바꾸기(예: 리포지토리 이름 바꾸기) 간에 변경되지 않는 시스템 생성 GUID를 사용하여 예측 가능한 OIDC 클레임을 사용하도록 설정합니다. 

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

클라우드 공급자의 OIDC 구성에서 필요한 값과 일치하는 `repository_id` 클레임을 요구하도록 `sub` 조건을 구성합니다.

또는:

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

클라우드 공급자의 OIDC 구성에서 필요한 값과 일치하는 `repository_owner_id` 클레임을 요구하도록 `sub` 조건을 구성합니다.

#### 사용자 지정 초기화

이 예제 템플릿은 주체 클레임을 기본 형식으로 초기화합니다. 이 템플릿은 조직 수준 사용자 지정 정책을 효과적으로 옵트아웃합니다.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

클라우드 공급자의 OIDC 구성에서 클레임에 `repo` 및 `context`에 대한 특정 값을 포함해야 하는 `sub` 조건을 구성합니다.

#### 기본 주체 클레임 사용

조직에서 주체 클레임 정책을 받을 수 있는 리포지토리의 경우 리포지토리 소유자는 나중에 옵트아웃하도록 선택하고 대신 기본 `sub` 클레임 형식을 사용할 수 있습니다. 즉, 리포지토리는 조직의 사용자 지정된 템플릿을 사용하지 않습니다. 

기본 `sub` 클레임 형식을 사용하도록 리포지토리를 구성하려면 리포지토리 관리자가 다음 요청 본문과 함께 "[리포지토리에 대한 OIDC 주체 클레임에 대한 사용자 지정 템플릿 설정](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)"의 REST API 엔드포인트를 사용해야 합니다.

```json
{
   "use_default": true
}
```

#### 예: 조직 템플릿을 사용하도록 리포지토리 구성

리포지토리 관리자는 조직의 관리자가 만든 템플릿을 사용하도록 리포지토리를 구성할 수 있습니다.

조직의 템플릿을 사용하도록 리포지토리를 구성하려면 리포지토리 관리자가 다음 요청 본문과 함께 "[리포지토리에 대한 OIDC 주체 클레임에 대한 사용자 지정 템플릿 설정](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)"의 REST API 엔드포인트를 사용해야 합니다.

```json
{
   "use_default": false
}
```

{% endif %}

## OIDC에 대한 워크플로 업데이트

이제 비밀 대신 OIDC 액세스 토큰을 사용하도록 YAML 워크플로를 업데이트할 수 있습니다. 인기 있는 클라우드 공급자는 OIDC를 쉽게 시작할 수 있도록 하는 공식 로그인 작업을 게시했습니다. 워크플로 업데이트에 대한 자세한 내용은 "[클라우드 공급자에 OpenID Connect 사용](#enabling-openid-connect-for-your-cloud-provider)"에 나열된 클라우드 관련 가이드를 참조하세요.


## 클라우드 공급자에 OpenID Connect 사용

특정 클라우드 공급자에 대해 OIDC를 사용하도록 설정하고 구성하려면 다음 가이드를 참조하세요.

- ["Amazon Web Services에서 OpenID Connect 구성"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- ["Azure에서 OpenID Connect 구성"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- ["Google Cloud Platform에서 OpenID Connect 구성"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- ["HashiCorp 자격 증명 모음에서 OpenID Connect 구성"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

다른 클라우드 공급자에 대해 OIDC를 사용하도록 설정하고 구성하려면 다음 가이드를 참조하세요.

- ["클라우드 공급자에서 OpenID Connect 구성"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
