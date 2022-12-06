---
title: Configurando o OpenID Connect no HashiCorp Vault
shortTitle: OpenID Connect in HashiCorp Vault
intro: Use o OpenID Connect nos seus fluxos de trabalho para efetuar a autenticação com o HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106626'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

O OpenID Connect (OIDC) permite aos seus fluxos de trabalho de {% data variables.product.prodname_actions %} efetuar a autenticação com um HashiCorp Vault para recuperar segredos.

Este guia fornece uma visão geral sobre como configurar o HashiCorp Vault para confiar no OIDC do {% data variables.product.prodname_dotcom %} como uma identidade federada e demonstra como usar essa configuração na ação [hashicorp/vault-action](https://github.com/hashicorp/vault-action) para recuperar segredos do HashiCorp Vault.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando o provedor de identidade ao HashiCorp Vault

Para usar OIDC com oHashiCorp Vault, você deverá adicionar uma configuração de confiança ao provedor do OIDC de {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira a [documentação](https://www.vaultproject.io/docs/auth/jwt) do HashiCorp Vault.

Para configurar o servidor do Cofre para aceitar JWT (Tokens Web JSON) para autenticação:

1. Habilite o método `auth` do JWT e use `write` para aplicar a configuração ao Cofre. 
  Para os parâmetros `oidc_discovery_url` e `bound_issuer`, use {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. Esses parâmetros permitem que o servidor do Cofre verifique os JWT (Tokens Web JSON) recebidos durante o processo de autenticação.

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Configure uma política que só concede acesso aos caminhos específicos que seus fluxos de trabalho usarão para recuperar segredos. Para obter políticas mais avançadas, confira a [documentação de Políticas](https://www.vaultproject.io/docs/concepts/policies) do HashiCorp Vault.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Configure funções para agrupar políticas diferentes. Se a autenticação for bem-sucedida, essas políticas serão anexadas ao token de acesso resultante do Cofre.

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` define a validade do token de acesso resultante.
- Verifique se o parâmetro `bound_claims` está definido para seus requisitos de segurança e tenha pelo menos uma condição. Opcionalmente, você também pode definir o parâmetro `bound_subject`, bem como o parâmetro `bound_audiences`.
- Para verificar as declarações arbitrárias no conteúdo JWT recebido, o parâmetro `bound_claims` contém um conjunto de declarações e seus valores necessários. No exemplo acima, a função aceitará quaisquer solicitações de autenticação de entrada do repositório `repo-name` pertencente à conta `user-or-org-name`.
- Para ver todas as declarações disponíveis com suporte pelo provedor OIDC do {% data variables.product.prodname_dotcom %}, confira ["Configurando a confiança do OIDC com a nuvem"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud).

Para obter mais informações, confira a [documentação](https://www.vaultproject.io/docs/auth/jwt) do HashiCorp Vault.

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para trocar o token OIDC (JWT) por um token de acesso à nuvem.


Para adicionar a integração do OIDC a seus fluxos de trabalho que lhes permitem acessar os segredos no Vault, você deverá adicionar as seguintes alterações de código:

- Conceder permissão para obter o token do provedor do OIDC de {% data variables.product.prodname_dotcom %}:
  - O fluxo de trabalho precisa de configurações `permissions:` com o valor de `id-token` definido como `write`. Isso permite obter o token do OIDC de cada trabalho do fluxo de trabalho.
- Solicite o JWT do provedor do OIDC {% data variables.product.prodname_dotcom %} e apresente-o ao HashiCorp Vault para receber um token de acesso:
  - Você pode usar a ação [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para buscar o JWT e receber o token de acesso do Cofre ou pode usar o [kit de ferramentas do Actions](https://github.com/actions/toolkit/) para buscar os tokens para seu trabalho.

Este exemplo demonstra como usar o OIDC com a ação oficial para solicitar um segredo ao HashiCorp Vault.

### Adicionando configurações de permissões

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**Observação**:

Quando a chave `permissions` é usada, todas as permissões não especificadas são definidas como _sem acesso_, com exceção do escopo de metadados, que sempre obtém acesso de _leitura_. Como resultado, talvez seja necessário adicionar outras permissões, como `contents: read`. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)".

{% endnote %}

### Solicitando o token de acesso

A ação `hashicorp/vault-action` recebe um JWT do provedor OIDC do {% data variables.product.prodname_dotcom %} e solicita um token de acesso da sua instância do HashiCorp Vault para recuperar segredos. Para obter mais informações, confira a [documentação](https://github.com/hashicorp/vault-action) do HashiCorp Vault GitHub Action.

Este exemplo demonstra como criar um trabalho que solicita um segredo para o HashiCorp Vault.

- `<Vault URL>`: substitua isso pela URL do seu HashiCorp Vault.
- `<Vault Namespace>`: substitua isso pelo Namespace que você definiu no HashiCorp Vault. Por exemplo: `admin`.
- `<Role name>`: substitua isso pela função que você definiu na relação de confiança do HashiCorp Vault.
- `<Secret-Path>`: substitua isso pelo caminho para o segredo que está sendo recuperado do HashiCorp Vault. Por exemplo: `secret/data/production/ci npmToken`.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Observação**:

- Se o servidor do Cofre não estiver acessível na rede pública, considere usar um executor auto-hospedado com outros [métodos de autenticação](https://www.vaultproject.io/docs/auth) do Cofre disponíveis. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".
- `<Vault Namespace>` deve ser definido para uma implantação do Vault Enterprise (incluindo o HCP Vault). Para mais informações, confira [Namespace do Cofre](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Revogando o token de acesso

Por padrão, o servidor do Cofre revogará automaticamente os tokens de acesso quando a TTL expirar, para que você não precise revogar manualmente os tokens de acesso. No entanto, se você quiser revogar tokens de acesso imediatamente após a conclusão ou falha do trabalho, será possível fazer isso manualmente usando a [API do Cofre](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Defina a opção `exportToken` como `true` (padrão: `false`). Isso exporta o token de acesso do Cofre emitido como uma variável de ambiente: `VAULT_TOKEN`.
2. Adicione uma etapa para chamar a API do Cofre de [Revogação de um Token (Auto)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) para revogar o token de acesso.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
