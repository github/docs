---
title: Google Cloud Platform での OpenID Connect の構成
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: ワークフロー内で OpenID Connect を使用して、Google Cloud Platform での認証を行います。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: f8b2c63d442fb5dc5758a6f33bb9db5c2a49c9cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091372'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

OpenID Connect (OIDC) を使用すると、有効期間の長い {% data variables.product.prodname_dotcom %} シークレットとして Google Cloud Platform (GCP) 資格情報を格納しなくても、{% data variables.product.prodname_actions %} ワークフローから GCP 内のリソースにアクセスできます。 

このガイドでは、{% data variables.product.prodname_dotcom %} の OIDC をフェデレーション ID として信頼するように GCP を構成する方法の概要と、トークンを使用して GCP に対する認証とリソースへのアクセスを行う [`google-github-actions/auth`](https://github.com/google-github-actions/auth) アクションのワークフロー例を示します。

## 前提条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Google Cloud Workload ID プロバイダーの追加

GCP で OIDC ID プロバイダーを構成するには、次の構成を実行する必要があります。 これらの変更を行う手順については、[GCP のドキュメント](https://github.com/google-github-actions/auth)を参照してください。

1. 新しい ID プールを作成します。
2. マッピングを構成し、条件を追加します。
3. 新しいプールをサービス アカウントに接続します。 

ID プロバイダーを構成するためのその他のガイダンス:

- セキュリティ強化については、「[クラウドとの OIDC 信頼の構成](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)」を確認してください。 例については、「[クラウド プロバイダーでのサブジェクトの構成](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)」を参照してください。
- サービス アカウントを構成に使用できるようにするには、`roles/iam.workloadIdentityUser` ロールに割り当てる必要があります。 詳細については、[GCP のドキュメント](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions)を参照してください。
- 使う発行者の URL: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## {% data variables.product.prodname_actions %} ワークフローを更新する

OIDC のワークフローを更新するには、YAML に 2 つの変更を行う必要があります。
1. トークンのアクセス許可設定を追加します。
2. この [`google-github-actions/auth`](https://github.com/google-github-actions/auth) アクションを使用して、OIDC トークン (JWT) をクラウド アクセス トークンと交換します。

### アクセス許可設定の追加

 {% data reusables.actions.oidc-permissions-token %}

### アクセス トークンの要求

この `google-github-actions/auth` アクションを使うと、{% data variables.product.prodname_dotcom %} OIDC プロバイダーから JWT を受け取り、アクセス トークンを GCP に要求します。 詳細については、GCP の[ドキュメント](https://github.com/google-github-actions/auth)を参照してください。

この例には、アクションを使って GCP のサービス一覧を要求する `Get_OIDC_ID_token` というジョブがあります。

- `<example-workload-identity-provider>`: これを GCP の ID プロバイダーへのパスに置き換えます。 たとえば、`projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>` のように指定します。
- `<example-service-account>`: これを GCP のサービス アカウント名に置き換えます。
- `<project-id>`: これを GCP プロジェクトの ID に置き換えます。

このアクションを使い、[ワークロード ID フェデレーション](https://cloud.google.com/iam/docs/workload-identity-federation)を使って、{% data variables.product.prodname_dotcom %} OIDC トークンを Google Cloud アクセス トークンと交換します。

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
