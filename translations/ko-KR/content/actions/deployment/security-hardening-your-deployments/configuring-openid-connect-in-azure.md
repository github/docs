---
title: Azure에서 OpenID Connect 구성
shortTitle: OpenID Connect in Azure
intro: 워크플로 내에서 OpenID 커넥트를 사용하여 Azure로 인증합니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: d55d95fd8c6a3787fe661053b13daa97dcf41ac2
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009494'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

OIDC(OpenID Connect)를 사용하면 {% data variables.product.prodname_actions %} 워크플로가 Azure 자격 증명을 수명이 긴 {% data variables.product.prodname_dotcom %} 비밀로 저장할 필요 없이 Azure의 리소스에 액세스할 수 있습니다. 

이 가이드에서는 {% data variables.product.prodname_dotcom %}의 OIDC를 페더레이션된 ID로 신뢰하도록 Azure를 구성하는 방법에 대한 개요를 제공하고, 토큰을 사용하여 Azure에 인증하고 리소스에 액세스하는 [`azure/login`](https://github.com/Azure/login) 작업에 대한 워크플로 예제를 포함합니다.

## 필수 조건

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Azure에 페더레이션된 자격 증명 추가

{% data variables.product.prodname_dotcom %}의 OIDC 공급자는 Azure의 워크로드 ID 페더레이션을 사용합니다. 개요는 “[워크로드 ID 페더레이션](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)”에서 Microsoft의 설명서를 참조하세요.

Azure에서 OIDC ID 공급자를 구성하려면 다음 구성을 수행해야 합니다. 변경에 대한 지침은 [Azure 설명서](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure)를 참조하세요.

1. Azure Active Directory 애플리케이션 및 서비스 주체 만들기
2. Azure Active Directory 애플리케이션에 대한 페더레이션된 자격 증명을 추가합니다.
3. Azure 구성을 저장하기 위한 {% data variables.product.prodname_dotcom %} 비밀을 만듭니다.

ID 공급자를 구성하기 위한 추가 지침:

- 보안 강화를 위해 [“클라우드를 사용하여 OIDC 트러스트 구성”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)을 검토했는지 확인합니다. 예를 들어 [“클라우드 공급자에서 주체 구성”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)을 참조하세요.
- `audience` 설정의 경우 `api://AzureADTokenExchange`가 권장되는 값이지만 여기에 다른 값을 지정할 수도 있습니다.

## {% data variables.product.prodname_actions %} 워크플로 업데이트

OIDC에 대한 워크플로를 업데이트하려면 YAML에 두 가지를 변경해야 합니다.
1. 토큰에 대한 사용 권한 설정을 추가합니다.
2. [`azure/login`](https://github.com/Azure/login) 작업을 사용하여 클라우드 액세스 토큰에 대한 OIDC 토큰(JWT)을 교환합니다.

### 사용 권한 설정 추가

 {% data reusables.actions.oidc-permissions-token %}

### 액세스 토큰 요청

[`azure/login`](https://github.com/Azure/login) 작업은 {% data variables.product.prodname_dotcom %} OIDC 공급자로부터 JWT를 받은 다음 Azure에서 액세스 토큰을 요청합니다. 자세한 내용은 [`azure/login`](https://github.com/Azure/login) 설명서를 참조하세요.

다음 예제에서는 OIDC ID 토큰을 Azure와 교환하여 액세스 토큰을 수신한 다음 클라우드 리소스에 액세스하는 데 사용합니다.

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
