---
title: Azure での OpenID Connect の構成
shortTitle: Configuring OpenID Connect in Azure
intro: ワークフロー内で OpenID Connect を使用して、Azure で認証を行います。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 64c7371eec248c7ebeb45a50091b9ef5dbed645e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117230'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

OpenID Connect (OIDC) を使用すると、{% data variables.product.prodname_actions %} ワークフローでは、有効期間の長い {% data variables.product.prodname_dotcom %} シークレットとして Azure 資格情報を格納しなくても、Azure 内のリソースにアクセスできます。 

このガイドでは、{% data variables.product.prodname_dotcom %} の OIDC をフェデレーション ID として信頼するように Azure を構成する方法の概要と、トークンを使用して Azure に対する認証とリソースへのアクセスを行う [`azure/login`](https://github.com/Azure/login) アクションのワークフロー例を示します。

## 前提条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## フェデレーション資格情報を Azure に追加する

{% data variables.product.prodname_dotcom %}の OIDC プロバイダーは、Azure のワークロード ID フェデレーションと連携します。 概要については、「[ワークロード ID フェデレーション](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)」の Microsoft のドキュメントを参照してください。

Azure で OIDC ID プロバイダーを構成するには、次の構成を実行する必要があります。 これらの変更を行う手順については、[Azure のドキュメント](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure)を参照してください。

1. Azure Active Directory のアプリケーションおよびサービス プリンシパルを作成します。
2. Azure Active Directory アプリケーションのフェデレーション資格情報を追加します。
3. Azure 構成を格納するための {% data variables.product.prodname_dotcom %} シークレットを作成します。

ID プロバイダーを構成するための追加のガイダンス:

- セキュリティ強化については、「[クラウドとの OIDC 信頼の構成](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)」を確認してください。 例については、「[クラウド プロバイダーでのサブジェクトの構成](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)」を参照してください。
- この `audience` 設定では、推奨される値は `api://AzureADTokenExchange` ですが、ここで他の値を指定することもできます。

## {% data variables.product.prodname_actions %} ワークフローを更新する

OIDC のワークフローを更新するには、YAML に 2 つの変更を行う必要があります。
1. トークンのアクセス許可設定を追加します。
2. この [`azure/login`](https://github.com/Azure/login) アクションを使用して、OIDC トークン (JWT) をクラウド アクセス トークンと交換します。

### アクセス許可設定の追加

 {% data reusables.actions.oidc-permissions-token %}

### アクセス トークンの要求

この [`azure/login`](https://github.com/Azure/login) アクションでは、{% data variables.product.prodname_dotcom %} OIDC プロバイダーから JWT を受け取り、Azure からアクセス トークンを要求します。 詳細については、[`azure/login`](https://github.com/Azure/login) のドキュメントを参照してください。

次の例では、OIDC ID トークンを Azure と交換してアクセス トークンを受け取ります。これを使用すると、クラウド リソースにアクセスできます。

{% raw %}
```yaml{:copy}
name: Run Azure Login with OIDC
on: [push]

permissions:
      id-token: write
      contents: read
jobs: 
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
  
      - name: 'Run az commands'
        run: |
          az account show
          az group list
```
 {% endraw %}
