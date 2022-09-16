---
title: Configurando OpenID Connect na Google Cloud Platform
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: Use OpenID Connect nos seus fluxos de trabalho para efetuar a autenticação com a Google Cloud Platform.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: f8b2c63d442fb5dc5758a6f33bb9db5c2a49c9cc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085288'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

O OpenID Connect (OIDC) permite que seus fluxos de trabalho de {% data variables.product.prodname_actions %} acessem os recursos na Google Cloud Platform (GCP), sem precisar armazenar as credenciais do GCP como segredos de {% data variables.product.prodname_dotcom %} de longa duração. 

Este guia fornece uma visão geral de como configurar o GCP para confiar no OIDC do {% data variables.product.prodname_dotcom %} como uma identidade federada e inclui um exemplo de fluxo de trabalho para a ação [`google-github-actions/auth`](https://github.com/google-github-actions/auth) que usa tokens para se autenticar no GCP e acessar recursos.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando um provedor de identidade de carga do Google Cloud

Para configurar o provedor de identidade OIDC no GCP, você deverá definir a configuração a seguir. Para obter instruções sobre como fazer essas alterações, veja [a documentação do GCP](https://github.com/google-github-actions/auth).

1. Crie um novo conjunto de identidades.
2. Configure o mapeamento e adicione condições.
3. Conecte o novo grupo a uma conta de serviço. 

Orientação adicional para a configuração do provedor de identidade:

- Para reforçar a segurança, leia ["Como configurar a relação de confiança do OIDC com a nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Para ver um exemplo, confira ["Como configurar a entidade no seu provedor de nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para que a conta de serviço esteja disponível para configuração, ela precisa ser atribuída à função `roles/iam.workloadIdentityUser`. Para obter mais informações, confira [a documentação do GCP](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- A URL do Emissor a ser usada: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`google-github-actions/auth`](https://github.com/google-github-actions/auth) para trocar o token OIDC (JWT) por um token de acesso à nuvem.

### Adicionando configurações de permissões

 {% data reusables.actions.oidc-permissions-token %}

### Solicitando o token de acesso

A ação `google-github-actions/auth` recebe um JWT do provedor OIDC do {% data variables.product.prodname_dotcom %} e solicita um token de acesso da sua instância do GCP. Para obter mais informações, confira a [documentação](https://github.com/google-github-actions/auth) do GCP.

Este exemplo contém um trabalho chamado `Get_OIDC_ID_token` que usa ações para solicitar uma lista de serviços do GCP.

- `<example-workload-identity-provider>`: substitua isso pelo caminho para o provedor de identidade no GCP. Por exemplo, `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: substitua isso pelo nome da sua conta de serviço no GCP.
- `<project-id>`: substitua isso pela ID do projeto do GCP.

Essa ação troca um token OIDC do {% data variables.product.prodname_dotcom %} por um token de acesso do Google Cloud usando a [Federação de Identidade de Carga de Trabalho](https://cloud.google.com/iam/docs/workload-identity-federation).

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
