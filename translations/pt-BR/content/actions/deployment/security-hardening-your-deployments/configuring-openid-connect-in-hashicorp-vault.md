---
title: Configurando o OpenID Connect no HashiCorp Vault
shortTitle: Configurando o OpenID Connect no HashiCorp Vault
intro: Use o OpenID Connect nos seus fluxos de trabalho para efetuar a autenticação com o HashiCorp Vault.
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

O OpenID Connect (OIDC) permite aos seus fluxos de trabalho de {% data variables.product.prodname_actions %} efetuar a autenticação com um HashiCorp Vault para recuperar segredos.

This guide gives an overview of how to configure HashiCorp Vault to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in the [hashicorp/vault-action](https://github.com/hashicorp/vault-action) action to retrieve secrets from HashiCorp Vault.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando o provedor de identidade ao HashiCorp Vault

Para usar OIDC com oHashiCorp Vault, você deverá adicionar uma configuração de confiança ao provedor do OIDC de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte a [documentação](https://www.vaultproject.io/docs/auth/jwt) do HashiCorp Vault.

Configure o cofre para aceitar tokens web do JSON (JWT) para a autenticação:
- Para o `oidc_discovery_url`, use `https://token.actions.githubusercontent.com`
- Para `bound_issuer`, use `https://token.actions.githubusercontent.com`
- Certifique-se de que `bound_subject` esteja corretamente definido para seus requisitos de segurança. Para obter mais informações, consulte ["Configurar a confiança do OIDC com a nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud) e [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action).

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`hashicorp/vault-ação`](https://github.com/hashicorp/vault-action) para trocar o token do OIDC (JWT) por um token de acesso na nuvem.


Para adicionar a integração do OIDC a seus fluxos de trabalho que lhes permitem acessar os segredos no Vault, você deverá adicionar as seguintes alterações de código:

- Grant permission to fetch the token from the {% data variables.product.prodname_dotcom %} OIDC provider:
  - O fluxo de trabalho precisa de configurações de `permissions:` com o valor `id-token` definido como `write`. This lets you fetch the OIDC token from every job in the workflow.
- Solicite o JWT do provedor do OIDC {% data variables.product.prodname_dotcom %} e apresente-o ao HashiCorp Vault para receber um token de acesso:
  - Você pode usar o kit de ferramentas [Actions](https://github.com/actions/toolkit/) para buscar os tokens para o seu trabalho, ou você pode usar a ação [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para buscar o JWT e receber o token de acesso do Vault.

Este exemplo demonstra como usar o OIDC com a ação oficial para solicitar um segredo ao HashiCorp Vault.

### Adicionando configurações de permissões

O fluxo de trabalho exigirá uma configuração `permissões` com um valor de [`id-token`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) definido. If you only need to fetch an OIDC token for a single job, then this permission can be set within that job. Por exemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Você pode precisar especificar permissões adicionais aqui, dependendo das necessidades do seu fluxo de trabalho.

### Solicitando o token de acesso

A ação `hashicorp/vault-ação` recebe um JWT do provedor de OIDC de {% data variables.product.prodname_dotcom %} e, em seguida, solicita um token de acesso da sua instância do HashiCorp Vault para recuperar segredos. Para obter mais informações, consulte a [documentação](https://github.com/hashicorp/vault-action) do HashiCorp Vault.

Este exemplo demonstra como criar um trabalho que solicita um segredo para o HashiCorp Vault.

- `<Vault URL>`: Substitua isso pela URL do seu HashiCorp Vault.
- `<Role name>`: Substitua isso pela função que você definiu no relacionamento de confiança do HashiCorp Vault.
- `<Audience>`: Substitua isso pela audiência que você definiu no relacionamento de confiança do HashiCorp Vault.
- `<Secret-Path>`: Substitua isso pelo caminho para o segredo que você está recuperando do HashiCorp Vault. Por exemplo: `secret/data/ci npmToken`.

```yaml{:copy}
jobs:
    retrieve-secret:
        steps:
            - name: Retrieve secret from Vault
              uses: hashicorp/vault-action@v2.4.0
              with:
                url: <Vault URL>
                role: <Role name>
                method: jwt
                jwtGithubAudience: <Audience>
                secrets: <Secret-Path>

            - name: Use secret from Vault
               run: |
                 # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```
