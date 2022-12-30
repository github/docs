---
title: Google Cloud Platform에서 OpenID Connect 구성
shortTitle: OpenID Connect in Google Cloud Platform
intro: 워크플로 내에서 OpenID Connect를 사용하여 Google Cloud Platform으로 인증합니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: ae68717ba6c1fe4a745880eeda3bad55e3a4f395
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009599'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

OIDC(OpenID Connect)를 사용하면 GCP(Google Cloud Platform) 자격 증명을 수명이 긴 {% data variables.product.prodname_dotcom %} 비밀로 저장할 필요 없이 {% data variables.product.prodname_actions %} 워크플로가 GCP의 리소스에 액세스할 수 있습니다. 

이 가이드에서는 {% data variables.product.prodname_dotcom %}의 OIDC를 페더레이션된 ID로 신뢰하도록 GCP를 구성하는 방법에 대한 개요를 제공하고, 토큰을 사용하여 GCP에 인증하고 리소스에 액세스하는 [`google-github-actions/auth`](https://github.com/google-github-actions/auth) 작업에 대한 워크플로 예제를 포함합니다.

## 필수 조건

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Google Cloud 워크로드 ID 공급자 추가

GCP에서 OIDC ID 공급자를 구성하려면 다음 구성을 수행해야 합니다. 변경에 대한 지침은 [GCP 설명서](https://github.com/google-github-actions/auth)를 참조하세요.

1. 새 ID 풀 만들기
2. 매핑을 구성하고 조건을 추가합니다.
3. 서비스 계정에 새 풀을 연결합니다. 

ID 공급자를 구성하기 위한 추가 지침:

- 보안 강화를 위해 [“클라우드를 사용하여 OIDC 트러스트 구성”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)을 검토했는지 확인합니다. 예를 들어 [“클라우드 공급자에서 주체 구성”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)을 참조하세요.
- 서비스 계정을 구성에 사용할 수 있게 하려면 `roles/iam.workloadIdentityUser` 역할에 할당해야 합니다. 자세한 내용은 [GCP 설명서](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions)를 참조하세요.
- 사용할 발급자 URL: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## {% data variables.product.prodname_actions %} 워크플로 업데이트

OIDC에 대한 워크플로를 업데이트하려면 YAML에 두 가지를 변경해야 합니다.
1. 토큰에 대한 사용 권한 설정을 추가합니다.
2. [`google-github-actions/auth`](https://github.com/google-github-actions/auth) 작업을 사용하여 클라우드 액세스 토큰에 대한 OIDC 토큰(JWT)을 교환합니다.

### 사용 권한 설정 추가

 {% data reusables.actions.oidc-permissions-token %}

### 액세스 토큰 요청

`google-github-actions/auth` 작업은 {% data variables.product.prodname_dotcom %} OIDC 공급자로부터 JWT를 받은 다음 GCP에서 액세스 토큰을 요청합니다. 자세한 내용은 [GCP 설명서](https://github.com/google-github-actions/auth)를 참조하세요.

이 예제에는 GCP에서 서비스 목록을 요청하는 작업을 사용하는 `Get_OIDC_ID_token` 작업이 있습니다.

- `<example-workload-identity-provider>`: GCP에서 ID 공급자의 경로로 바꿉니다. 예를 들어 `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: GCP에서 서비스 계정의 이름으로 바꿉니다.
- `<project-id>`: GCP 프로젝트의 ID로 바꿉니다.

이 작업은 [워크로드 ID 페더레이션](https://cloud.google.com/iam/docs/workload-identity-federation)을 사용하여 {% data variables.product.prodname_dotcom %} OIDC 토큰을 Google 클라우드 액세스 토큰으로 교환합니다.

{% raw %}
```yaml{:copy}
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```
{% endraw %}
