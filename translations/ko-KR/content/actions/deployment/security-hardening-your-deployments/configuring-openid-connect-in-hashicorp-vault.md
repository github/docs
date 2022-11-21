---
title: HashiCorp 자격 증명 모음에서 OpenID Connect 구성
shortTitle: OpenID Connect in HashiCorp Vault
intro: 워크플로 내에서 OpenID 커넥트를 사용하여 HashiCorp Vault로 인증합니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106631'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

OIDC(OpenID Connect)를 사용하면 {% data variables.product.prodname_actions %} 워크플로가 HashiCorp 자격 증명 모음으로 인증하여 비밀을 검색할 수 있습니다.

이 가이드에서는 {% data variables.product.prodname_dotcom %}의 OIDC를 페더레이션 ID로 신뢰하도록 HashiCorp Vault를 구성하는 방법에 대한 개요를 제공하고 [hashicorp/vault-action](https://github.com/hashicorp/vault-action) 작업에서 이 구성을 사용하여 HashiCorp Vault에서 비밀을 검색하는 방법을 보여 줍니다.

## 필수 조건

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## HashiCorp 자격 증명 모음에 ID 공급자 추가

HashiCorp Vault에서 OIDC를 사용하려면 {% data variables.product.prodname_dotcom %} OIDC 공급자에 대한 신뢰 구성을 추가해야 합니다. 자세한 내용은 HashiCorp Vault [설명서](https://www.vaultproject.io/docs/auth/jwt)를 참조하세요.

인증을 위해 JWT(JSON Web Tokens)를 수락하도록 Vault 서버를 구성하려면 다음을 수행합니다.

1. JWT `auth` 메서드를 사용하도록 설정하고 `write`를 사용하여 자격 증명 모음에 구성을 적용합니다. 
  `oidc_discovery_url` 및 `bound_issuer` 매개 변수의 경우 {% ifversion ghes %}`https://HOSTNAME/_services/token`을 사용합니다{% else %}`https://token.actions.githubusercontent.com`을 사용합니다{% endif %}. 이러한 매개 변수를 통해 Vault 서버는 인증 프로세스 중에 수신된 JWT(JSON Web Token)를 확인할 수 있습니다.

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. 워크플로에서 비밀을 검색하는 데 사용할 특정 경로에 대한 액세스 권한만 부여하는 정책을 구성합니다. 고급 정책은 HashiCorp Vault [정책 설명서](https://www.vaultproject.io/docs/concepts/policies)를 참조하세요.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. 서로 다른 정책을 함께 그룹화하는 역할을 구성합니다. 인증에 성공하면 이러한 정책이 결과 자격 증명 모음 액세스 토큰에 연결됩니다.

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl`은 결과 액세스 토큰의 유효성을 정의합니다.
- `bound_claims` 매개 변수가 보안 요구 사항에 대해 정의되고 하나 이상의 조건이 있는지 확인합니다. 필요에 따라 `bound_audiences` 매개 변수뿐만 `bound_subject`를 설정할 수도 있습니다.
- 수신된 JWT 페이로드에서 임의의 클레임을 확인하기 위해 `bound_claims` 매개 변수에는 클레임 집합과 해당 필수 값이 포함됩니다. 위의 예제에서 역할은 `user-or-org-name` 계정이 소유한 `repo-name` 리포지토리에서 들어오는 인증 요청을 수락합니다.
- {% data variables.product.prodname_dotcom %}의 OIDC 공급자가 지원하는 사용 가능한 모든 클레임을 보려면 [“클라우드를 사용하여 OIDC 트러스트 구성”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)을 참조하세요.

자세한 내용은 HashiCorp Vault [설명서](https://www.vaultproject.io/docs/auth/jwt)를 참조하세요.

## {% data variables.product.prodname_actions %} 워크플로 업데이트

OIDC에 대한 워크플로를 업데이트하려면 YAML에 두 가지를 변경해야 합니다.
1. 토큰에 대한 사용 권한 설정을 추가합니다.
2. [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 작업을 사용하여 클라우드 액세스 토큰에 대한 OIDC 토큰(JWT)을 교환합니다.


자격 증명 모음의 비밀에 액세스할 수 있도록 하는 워크플로에 OIDC 통합을 추가하려면 다음 코드 변경 내용을 추가해야 합니다.

- {% data variables.product.prodname_dotcom %} OIDC 공급자에서 토큰을 가져올 수 있는 권한을 부여합니다.
  - 워크플로에는 `id-token` 값이 `write`로 설정된 `permissions:` 설정이 필요합니다. 이렇게 하면 워크플로의 모든 작업에서 OIDC 토큰을 가져올 수 있습니다.
- {% data variables.product.prodname_dotcom %} OIDC 공급자에서 JWT를 요청하고 HashiCorp Vault에 제출하여 액세스 토큰을 받습니다.
  - [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 작업을 사용하여 JWT를 가져오고 자격 증명 모음에서 액세스 토큰을 받거나 [작업 도구 키트](https://github.com/actions/toolkit/)를 사용하여 작업에 대한 토큰을 가져올 수 있습니다.

이 예제에서는 공식 작업과 함께 OIDC를 사용하여 HashiCorp Vault에서 비밀을 요청하는 방법을 보여 줍니다.

### 사용 권한 설정 추가

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**고**:

`permissions` 키를 사용하는 경우 항상 _읽기_ 액세스 권한을 가져오는 메타데이터 범위를 제외하고 지정되지 않은 모든 권한은 _액세스 권한 없음_ 으로 설정됩니다. 따라서 다른 권한(예: `contents: read`)을 추가해야 할 수 있습니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요.

{% endnote %}

### 액세스 토큰 요청

`hashicorp/vault-action` 작업은 {% data variables.product.prodname_dotcom %} OIDC 공급자로부터 JWT를 받은 다음 HashiCorp Vault 인스턴스에서 액세스 토큰을 요청하여 비밀을 검색합니다. 자세한 내용은 HashiCorp Vault GitHub Action [설명서](https://github.com/hashicorp/vault-action)를 참조하세요.

이 예제에서는 HashiCorp Vault에서 비밀을 요청하는 작업을 만드는 방법을 보여 줍니다.

- `<Vault URL>`: HashiCorp Vault의 URL로 바꿉니다.
- `<Vault Namespace>`: HashiCorp Vault에서 설정한 네임스페이스로 바꿉니다. 예: `admin`
- `<Role name>`: HashiCorp Vault 트러스트 관계에서 설정한 역할로 바꿉니다.
- `<Secret-Path>`: HashiCorp Vault에서 검색하는 비밀의 경로로 바꿉니다. 예: `secret/data/production/ci npmToken`

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**고**:

- 공용 네트워크에서 Vault 서버에 액세스할 수 없는 경우 사용 가능한 다른 자격 증명 모음 [인증 방법](https://www.vaultproject.io/docs/auth)과 함께 자체 호스팅 실행기를 사용하는 것이 좋습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.
- `<Vault Namespace>`는 Vault Enterprise(HCP Vault 포함) 배포에 대해 설정해야 합니다. 자세한 내용은 [Vault 네임스페이스](https://www.vaultproject.io/docs/enterprise/namespaces)를 참조하세요.

{% endnote %}

### 액세스 토큰 해지

기본적으로 Vault 서버는 TTL이 만료되면 액세스 토큰을 자동으로 철회하므로 액세스 토큰을 수동으로 철회할 필요가 없습니다. 그러나 작업이 완료되거나 실패한 직후에 액세스 토큰을 철회하려는 경우 [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self)를 사용하여 발급된 토큰을 수동으로 철회할 수 있습니다.

1. `exportToken` 옵션을 `true`로 설정합니다(기본값: `false`). 그러면 발급된 자격 증명 모음 액세스 토큰을 환경 변수 `VAULT_TOKEN`으로 내보냅니다.
2. 액세스 토큰을 철회하려면 [토큰 철회(자체)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) Vault API를 호출하는 단계를 추가합니다.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
