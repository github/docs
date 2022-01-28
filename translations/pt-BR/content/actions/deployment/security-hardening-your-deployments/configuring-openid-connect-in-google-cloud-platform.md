---
title: Configurando OpenID Connect na Google Cloud Platform
shortTitle: Configurando OpenID Connect na Google Cloud Platform
intro: Use OpenID Connect nos seus fluxos de trabalho para efetuar a autenticação com a Google Cloud Platform.
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

O OpenID Connect (OIDC) permite que seus fluxos de trabalho de {% data variables.product.prodname_actions %} acessem os recursos na Google Cloud Platform (GCP), sem precisar armazenar as credenciais do GCP como segredos de {% data variables.product.prodname_dotcom %} de longa duração.

Este guia fornece uma visão geral de como configurar o GCP para confiar no OIDC de {% data variables.product.prodname_dotcom %} como uma identidade federada, e inclui um exemplo de fluxo de trabalho para a ação [`google-github-actions/auth`](https://github.com/google-github-actions/auth) que usa tokens para efetuar a autenticação no GCP e acessar recursos.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando um provedor de identidade de carga do Google Cloud

Para configurar o provedor de identidade OIDC no GCP, você deverá definir a configuração a seguir. Para obter instruções sobre como fazer essas alterações, consulte [a documentação do GCP](https://github.com/google-github-actions/auth).

1. Crie um novo conjunto de identidades.
2. Configure o mapeamento e adicione condições.
3. Conecte o novo grupo a uma conta de serviço.

Orientação adicional para a configuração do provedor de identidade:

- Para aumentar a segurança, verifique se você revisou ["Configurando a confiança do OIDC com a nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Por exemplo, consulte ["Configurar o assunto no seu provedor de nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para a conta de serviço estar disponível para configuração, ela deverá ser atribuída à função `roles/iam.workloadIdentityUser`. Para obter mais informações, consulte [a documentação do GCP](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- A URL do emissor a usar: `https://token.actions.githubusercontent.com`

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`google-github-actions/auth`](https://github.com/google-github-actions/auth) para trocar o token do OIDC (JWT) por um token de acesso na nuvem.

### Adicionando configurações de permissões

O fluxo de trabalho exigirá uma configuração `permissões` com um valor de [`id-token`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) definido. If you only need to fetch an OIDC token for a single job, then this permission can be set within that job. Por exemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Você pode precisar especificar permissões adicionais aqui, dependendo das necessidades do seu fluxo de trabalho.

### Solicitando o token de acesso

A ação `do google-github-actions/auth` recebe um JWT do provedor OIDC de {% data variables.product.prodname_dotcom %} e, em seguida, solicita um token de acesso do GCP. Para obter mais informações, consulte a [documentação](https://github.com/google-github-actions/auth) do GCP.

Este exemplo tem um trabalho denominado `Get_OIDC_ID_token` que usa ações para solicitar uma lista de serviços do GCP.

- `<example-workload-identity-provider>`: Substitua isso pelo caminho para o seu provedor de identidade no GCP. Por exemplo, `projetos/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: Substitua isso pelo nome da sua conta de serviço no GCP.
- `<project-id>`: Substitua isso pelo ID do seu projeto do GCP.

Esta ação troca um token do OIDC do {% data variables.product.prodname_dotcom %} por um token de acesso do Google Cloud, usando [a Federação de Identidade de Carga](https://cloud.google.com/iam/docs/workload-identity-federation).

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
