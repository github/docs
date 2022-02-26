---
title: Configurando o OpenID Connect no Azure
shortTitle: Configurando o OpenID Connect no Azure
intro: Use OpenID Connect dentro dos seus fluxos de trabalho para efetuar a autenticação com o Azure.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

O OpenID Connect (OIDC) permite aos seus fluxos de trabalho de {% data variables.product.prodname_actions %} acessar recursos no Azure, sem precisar armazenar as credenciais do Azure como segredos de {% data variables.product.prodname_dotcom %} de longa duração.

Este guia fornece uma visão geral de como configurar o Azure para confiar no OIDC de {% data variables.product.prodname_dotcom %} como uma identidade federada, e inclui um exemplo de fluxo de trabalho para o [`azure/login`](https://github.com/Azure/login) ação que usa tokens para efetuar a autenticação ao Azure e acessar recursos.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando as credenciais federadas ao Azure

Provedor OIDC de {% data variables.product.prodname_dotcom %} funciona com a federação de identidade do Azure. Para uma visão geral, consulte a documentação da Microsoft em "[Federação de identidade da carga](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)".

Para configurar o provedor de identidade OIDC no Azure, você deverá definir a configuração a seguir. Para obter instruções sobre como fazer essas alterações, consulte [a documentação do Azure](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Cria um aplicativo Azure Active Directory e um diretor de serviço.
2. Adicione ascredenciais federadas ao aplicativo Azure Active Directory.
3. Crie segredos de {% data variables.product.prodname_dotcom %} para armazenar a configuração do Azure.

Orientação adicional para a configuração do provedor de identidade:

- Para aumentar a segurança, verifique se você revisou ["Configurando a confiança do OIDC com a nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Por exemplo, consulte ["Configurar o assunto no seu provedor de nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para a configuração `audiência`, `api://AzureADTokenExchange` é o valor recomendado, mas você também pode especificar outros valores aqui.

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`azure/login`](https://github.com/Azure/login) para trocar o token OIDC (JWT) para um token de acesso da nuvem.

### Adicionando configurações de permissões

 {% data reusables.actions.oidc-permissions-token %}

### Solicitando o token de acesso

A ação [`azure/login`](https://github.com/Azure/login) recebe um JWT do provedor OIDC {% data variables.product.prodname_dotcom %} e, em seguida, solicita um token de acesso do Azure. Para obter mais informações, consulte a documentação [`azure/login`](https://github.com/Azure/login).

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
