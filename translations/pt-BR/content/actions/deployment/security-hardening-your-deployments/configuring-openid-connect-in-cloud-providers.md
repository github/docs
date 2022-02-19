---
title: Configurando OpenID Connect em provedores da nuvem
shortTitle: Configurando OpenID Connect em provedores da nuvem
intro: Use o OpenID Connect dentro de seus fluxos de trabalho para efetuar a autenticação com provedores de nuvem.
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

O OpenID Connect (OIDC) permite que os seus fluxos de trabalho de {% data variables.product.prodname_actions %} acessem recursos no seu provedor da nuvem, sem ter que armazenar qualquer credencial como segredos de {% data variables.product.prodname_dotcom %} de longa duração.

Para usar o OIDC, você primeiro precisará configurar seu provedor de nuvem para confiar no OIDC de {% data variables.product.prodname_dotcom %} como uma identidade federada e, em seguida, atualizar seus fluxos de trabalho para efetuar a autenticação usando tokens.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação oficial do seu provedor de nuvem para trocar o token OIDC (JWT) por um token de acesso em nuvem.

Se seu provedor de nuvem ainda não oferece uma ação oficial, você pode atualizar seus fluxos de trabalho para executar essas etapas manualmente.

### Adicionando configurações de permissões

 {% data reusables.actions.oidc-permissions-token %}

### Usando ações oficiais

Se seu provedor de nuvem criou uma ação oficial para usar o OIDC com {% data variables.product.prodname_actions %}, isso permitirá que você troque o token OIDC por um token de acesso facilmente. Em seguida, você pode atualizar seus fluxos de trabalho para usar este token ao acessar recursos da nuvem.

## Usando ações personalizadas

Se seu provedor de nuvem não tiver uma ação oficial, ou se você preferir criar scripts personalizados, você poderá solicitar manualmente o token web do JSON (JWT) do provedor OIDC de {% data variables.product.prodname_dotcom %}.

Se você não estiver usando uma ação oficial, então {% data variables.product.prodname_dotcom %} recomenda que você use o kit de ferramentas principal das Ações. Como alternativa, você pode usar as seguintes variáveis de ambiente para recuperar o token: `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_URL`.

Para atualizar seus fluxos de trabalho usando esta abordagem, você deverá fazer três alterações no seu YAML:

1. Adicionar configurações de permissões para o token.
2. Adicione o código que solicita o token OIDC do provedor OIDC de {% data variables.product.prodname_dotcom %}.
3. Adicione um código que troque o token OIDC com seu provedor de nuvem por um token de acesso.

### Solicitando o JWT que usa a o kit de ferramentas principal das Ações

O exemplo a seguir demonstra como usar `actions/github-script` com o kit de ferramentas `principal` para solicitar o JWT do provedor do OIDC de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[" Adicionando pacotes de kit de ferramentas de ações](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)".

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: actions/github-script@v4
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()   
          coredemo.setOutput('id_token', id_token)  
```

### Solicitando o JWT que usa variáveis de ambiente

O exemplo a seguir demonstra como usar variáveis de ambiente para solicitar um token web do JSON.

Para o seu trabalho de implantação, você deverá definir as configurações do token, usando `actions/github-script` com o kit de ferramentas `principal`. Para obter mais informações, consulte "[" Adicionando pacotes de kit de ferramentas de ações](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)".

Por exemplo:

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/github-script@v4
      id: script
      timeout-minutes: 10
      with:
        debug: true
        script: |
          const token = process.env['ACTIONS_RUNTIME_TOKEN']
          const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
          core.setOutput('TOKEN', token.trim())
          core.setOutput('IDTOKENURL', runtimeUrl.trim())
```

Você pode usar `curl` para recuperar um JWT do provedor do OIDC do {% data variables.product.prodname_dotcom %}. Por exemplo:

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
        echo "::set-output name=idToken::${IDTOKEN}"
      id: tokenid
```

### Obtendo o token de acesso do provedor da nuvem

Você precisará apresentar o token web JSON do OIDC para seu provedor de nuvem a fim de obter um token de acesso.

Para cada implantação, seus fluxos de trabalho devem usar ações de login em nuvem (ou scripts personalizados) que buscam o token do OIDC e o apresentam ao seu provedor de nuvem. O provedor da nuvem valida as reivindicações no token; se for bem sucedido, ele fornece um token de acesso à nuvem que está disponível apenas para a execução do trabalho. O token de acesso fornecido pode ser usado por ações subsequentes no trabalho para conectar-se à nuvem e fazer a implantação nos seus recursos.

As etapas para trocar o token do OIDC por um token de acesso irão variar para cada provedor de nuvem.

### Acessando recursos no seu provedor da nuvem

Depois de obter o token de acesso, você pode usar as ações específicas da nuvem ou scripts para efetuar a autenticação no provedor da nuvem e fazer a implantação nos seus recursos. Essas etapas podem ser diferentes para cada provedor da nuvem. Além disso, o tempo de expiração padrão desse token de acesso pode variar entre as nuvens e pode ser configurável no lado do provedor de nuvem.
