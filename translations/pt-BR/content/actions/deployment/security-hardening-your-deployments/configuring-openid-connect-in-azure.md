---
title: Configurando o OpenID Connect no Azure
shortTitle: Configuring OpenID Connect in Azure
intro: Use OpenID Connect dentro dos seus fluxos de trabalho para efetuar a autenticação com o Azure.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 64c7371eec248c7ebeb45a50091b9ef5dbed645e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095106'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

O OpenID Connect (OIDC) permite aos seus fluxos de trabalho de {% data variables.product.prodname_actions %} acessar recursos no Azure, sem precisar armazenar as credenciais do Azure como segredos de {% data variables.product.prodname_dotcom %} de longa duração. 

Este guia fornece uma visão geral de como configurar o Azure para confiar no OIDC do {% data variables.product.prodname_dotcom %} como uma identidade federada e inclui um exemplo de fluxo de trabalho para a ação [`azure/login`](https://github.com/Azure/login) que usa tokens para se autenticar no Azure e acessar recursos.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando as credenciais federadas ao Azure

Provedor OIDC de {% data variables.product.prodname_dotcom %} funciona com a federação de identidade do Azure. Para ter uma visão geral, confira a documentação da Microsoft em "[Federação de identidade de carga de trabalho](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)".

Para configurar o provedor de identidade OIDC no Azure, você deverá definir a configuração a seguir. Para obter instruções sobre como fazer essas alterações, veja [a documentação do Azure](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Cria um aplicativo Azure Active Directory e um diretor de serviço.
2. Adicione ascredenciais federadas ao aplicativo Azure Active Directory.
3. Crie segredos de {% data variables.product.prodname_dotcom %} para armazenar a configuração do Azure.

Orientação adicional para a configuração do provedor de identidade:

- Para reforçar a segurança, leia ["Como configurar a relação de confiança do OIDC com a nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Para ver um exemplo, confira ["Como configurar a entidade no seu provedor de nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para a configuração de `audience`, `api://AzureADTokenExchange` é o valor recomendado, mas você também pode especificar outros valores aqui.

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`azure/login`](https://github.com/Azure/login) para trocar o token OIDC (JWT) por um token de acesso à nuvem.

### Adicionando configurações de permissões

 {% data reusables.actions.oidc-permissions-token %}

### Solicitando o token de acesso

A ação [`azure/login`](https://github.com/Azure/login) recebe um JWT do provedor OIDC do {% data variables.product.prodname_dotcom %} e solicita um token de acesso da sua instância do Azure. Para obter mais informações, confira a documentação [`azure/login`](https://github.com/Azure/login).

O exemplo a seguir troca um token de ID do OIDC com o Azure para receber um token de acesso, que pode, em seguida, ser usado para acessar os recursos da nuvem.

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
