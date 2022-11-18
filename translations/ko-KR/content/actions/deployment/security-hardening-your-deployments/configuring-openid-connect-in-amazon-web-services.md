---
title: Amazon Web Services에서 OpenID Connect 구성
shortTitle: OpenID Connect in AWS
intro: 워크플로 내에서 OpenID 커넥트를 사용하여 Amazon Web Services로 인증합니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 173a7469fc8bbf58b9477c18fc79c57af7bc8ee1
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009491'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

OIDC(OpenID Connect)를 사용하면 {% data variables.product.prodname_actions %} 워크플로가 AWS 자격 증명을 수명이 긴 {% data variables.product.prodname_dotcom %} 비밀로 저장할 필요 없이 AWS(Amazon Web Services)의 리소스에 액세스할 수 있습니다. 

이 가이드에서는 {% data variables.product.prodname_dotcom %}의 OIDC를 페더레이션된 ID로 신뢰하도록 AWS를 구성하는 방법에 대해 설명하고, 토큰을 사용하여 AWS에 인증하고 리소스에 액세스하는 [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) 워크플로 예제를 포함합니다.

## 필수 조건

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## AWS에 ID 공급자 추가

{% data variables.product.prodname_dotcom %} OIDC 공급자를 IAM에 추가하려면 [AWS 설명서](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)를 참조하세요.

- 공급자 URL: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com` 사용{% endif %}
- “대상 그룹”의 경우: [공식 작업](https://github.com/aws-actions/configure-aws-credentials)을 사용하는 경우 `sts.amazonaws.com`을 사용합니다.

### 역할 및 신뢰 정책 구성

IAM에서 역할 및 신뢰를 구성하려면 AWS 설명서에서 [“역할 가정”](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role) 및 [“웹 ID 또는 OpenID Connect 페더레이션에 대한 역할 만들기”](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)를 참조하세요.

신뢰 정책을 편집하여 유효성 검사 조건에 `sub` 필드를 추가합니다. 예를 들어:

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

다음 예제에서는 `ForAllValues`를 여러 조건 키에서 일치시키는 데 사용하고 `StringLike`는 지정된 리포지토리에서 모든 참조를 일치시키는 데 사용합니다. `ForAllValues`는 [지나치게 허용적](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html)이므로 `Allow` 효과에서 단독으로 사용되어서는 안 됩니다. 이 예제에서 `StringLike`를 포함하면 `ForAllValues`의 빈 집합이 여전히 조건을 통과하지 못합니다.

```json{:copy}
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::123456123456:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:*"
                },
                "ForAllValues:StringEquals": {
                    "token.actions.githubusercontent.com:iss": "https://token.actions.githubusercontent.com",
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```


## {% data variables.product.prodname_actions %} 워크플로 업데이트

OIDC에 대한 워크플로를 업데이트하려면 YAML에 두 가지를 변경해야 합니다.
1. 토큰에 대한 사용 권한 설정을 추가합니다.
2. [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) 작업을 사용하여 클라우드 액세스 토큰에 대한 OIDC 토큰(JWT)을 교환합니다.

### 사용 권한 설정 추가

 {% data reusables.actions.oidc-permissions-token %}

### 액세스 토큰 요청

`aws-actions/configure-aws-credentials` 작업은 {% data variables.product.prodname_dotcom %} OIDC 공급자로부터 JWT를 받은 다음 AWS에서 액세스 토큰을 요청합니다. 자세한 내용은 AWS [설명서](https://github.com/aws-actions/configure-aws-credentials)를 참조하세요.

- `<example-bucket-name>`: S3 버킷의 이름을 여기에 추가합니다.
- `<role-to-assume>`: 예제를 AWS 역할로 바꿉니다.
- `<example-aws-region>`: 여기에 AWS 지역의 이름을 추가합니다.

```yaml{:copy}
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "<example-bucket-name>"
  AWS_REGION : "<example-aws-region>"
# permission can be added at job level or workflow level    
permissions:
      id-token: write   # This is required for requesting the JWT
      contents: read    # This is required for actions/checkout
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: {% data reusables.actions.action-checkout %}
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::1234567890:role/example-role
          role-session-name: samplerolesession
          aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
      # Upload a file to AWS s3
      - name:  Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://{% raw %}${{ env.BUCKET_NAME }}{% endraw %}/
```
