---
title: アマゾン ウェブ サービスでの OpenID Connect の構成
shortTitle: OpenID Connect in AWS
intro: ワークフロー内で OpenID Connect を使用して、アマゾン ウェブ サービスで認証を行います。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 597ea408c2f0172eb0eacf07fc2d1ad320872f09
ms.sourcegitcommit: 94ba3891ebcc3c05812f468e4adafdd15b99e390
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182258'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

OpenID Connect (OIDC) を使うと、{% data variables.product.prodname_actions %} ワークフローでは、有効期間の長い {% data variables.product.prodname_dotcom %} シークレットとしてアマゾン ウェブ サービス (AWS) 資格情報を格納しなくても、AWS 内のリソースにアクセスできます。 

このガイドでは、{% data variables.product.prodname_dotcom %} の OIDC をフェデレーション ID として信頼するように AWS を構成する方法と、トークンを使って AWS に対する認証とリソースへのアクセスを行う [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) のワークフロー例を示します。

## 前提条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## AWS への ID プロバイダーの追加

{% data variables.product.prodname_dotcom %} OIDC プロバイダーを IAM に追加するには、[AWS のドキュメント](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)を参照してください。

- プロバイダー URL の場合: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %} を使います
- "Audience" の場合: [公式のアクション](https://github.com/aws-actions/configure-aws-credentials)を使っている場合は、`sts.amazonaws.com` を使います。

### ロールと信頼ポリシーの構成

IAM でロールと信頼を構成するには、AWS のドキュメントの「[ロールの想定](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role)」と「[Web ID または OpenID 接続フェデレーションのためのロールの作成](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)」を参照してください。

信頼ポリシーを編集して、`sub` フィールドを検証条件に追加します。 次に例を示します。

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

次の例では、`StringLike` をワイルドカード演算子 (`*`) と共に使用して、任意のブランチ、pull request マージ ブランチ、または `octo-org/octo-repo` organization とリポジトリの環境が AWS でロールを引き受けることを許可します。

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
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```


## {% data variables.product.prodname_actions %} ワークフローを更新する

OIDC のワークフローを更新するには、YAML に 2 つの変更を行う必要があります。
1. トークンのアクセス許可設定を追加します。
2. この [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) アクションを使用して、OIDC トークン (JWT) をクラウド アクセス トークンと交換します。

### アクセス許可設定の追加

 {% data reusables.actions.oidc-permissions-token %}

### アクセス トークンの要求

この `aws-actions/configure-aws-credentials` アクションを使うと、{% data variables.product.prodname_dotcom %} OIDC プロバイダーから JWT を受け取り、アクセス トークンを AWS に要求します。 詳細については、AWS の[ドキュメント](https://github.com/aws-actions/configure-aws-credentials)を参照してください。

- `<example-bucket-name>`: ここに S3 バケットの名前を追加します。
- `<role-to-assume>`: 例を AWS ロールに置き換えます。
- `<example-aws-region>`: ここに AWS リージョンの名前を追加します。

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
