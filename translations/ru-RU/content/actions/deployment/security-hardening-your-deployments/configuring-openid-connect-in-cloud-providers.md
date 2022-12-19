---
title: Настройка OpenID Connect в поставщиках облачных служб
shortTitle: OpenID Connect in cloud providers
intro: Использование OpenID Connect в рабочих процессах для проверки подлинности в ваших поставщиках облачных служб.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90dfa54e71fc602243ddb0d51b190fb8530727e4
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135497'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

OpenID Connect (OIDC) позволяет рабочим процессам {% data variables.product.prodname_actions %} получать доступ к ресурсам в поставщике облачных служб без необходимости хранить учетные данные в виде секретов {% data variables.product.prodname_dotcom %} с длительным сроком действия.

Чтобы использовать OIDC, сначала необходимо настроить поставщик облачных служб для доверия OIDC {% data variables.product.prodname_dotcom %} в качестве федеративного удостоверения, а затем обновить рабочие процессы для проверки подлинности с помощью маркеров.

## Предварительные требования

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Обновление рабочего процесса {% data variables.product.prodname_actions %}

Чтобы обновить рабочие процессы для OIDC, необходимо внести два изменения в YAML:
1. Добавьте параметры разрешений для маркера.
2. Используйте официальное действие поставщика облачных служб для обмена маркером OIDC (JWT) для маркера доступа к облаку.

Если ваш поставщик облачных служб еще не предлагает официальное действие, вы можете обновить рабочие процессы, чтобы выполнить эти действия вручную.

### Добавление параметров разрешений

 {% data reusables.actions.oidc-permissions-token %}

### Использование официальных действий

Если ваш поставщик облачных служб создал официальное действие для использования OIDC с {% data variables.product.prodname_actions %}, вы сможете с легкостью обменять маркер OIDC на маркер доступа. Затем можно обновить рабочие процессы, чтобы использовать этот маркер при доступе к облачным ресурсам.

## Создание настраиваемых действий

Если у поставщика облачных служб нет официального действия или если вы предпочитаете создавать пользовательские скрипты, можно вручную запросить JSON Web Token (JWT) от поставщика OIDC {% data variables.product.prodname_dotcom %}.

Если вы не используете официальное действие, {% data variables.product.prodname_dotcom %} рекомендует использовать основной набор средств Actions. Кроме того, для получения маркера можно использовать следующие переменные среды: `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_URL`.

Чтобы обновить рабочие процессы с помощью этого подхода, необходимо внести три изменения в YAML:

1. Добавьте параметры разрешений для маркера.
2. Добавьте код, запрашивающий маркер OIDC у поставщика OIDC {% data variables.product.prodname_dotcom %}.
3. Добавьте код, который обменивает маркер OIDC у поставщика облачных служб на маркер доступа.

### Запрос JWT с помощью основного набора средств Actions

В следующем примере показано, как использовать `actions/github-script` с набором средств `core` для запроса JWT у поставщика OIDC {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе "[Добавление пакетов набора средств Actions](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)".

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: {% data reusables.actions.action-github-script %}
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()
          coredemo.setOutput('id_token', id_token)
```

### Запрос JWT с помощью переменных среды

В следующем примере показано, как использовать переменные среды для запроса JSON Web Token.

Для задания развертывания необходимо определить параметры маркера, используя `actions/github-script` с набором средств `core`. Дополнительные сведения см. в разделе "[Добавление пакетов набора средств Actions](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)".

Пример:

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-github-script %}
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

Затем можно использовать `curl` для получения JWT от поставщика OIDC {% data variables.product.prodname_dotcom %}. Пример:

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer {% raw %} ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} {% endraw %} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
{%- ifversion actions-save-state-set-output-envs %}
        echo "idToken=${IDTOKEN}" >> $GITHUB_OUTPUT
{%- else %}
        echo "::set-output name=idToken::${IDTOKEN}"
{%- endif %}
      id: tokenid
```

### Получение маркера доступа от поставщика облачных служб

Чтобы получить маркер доступа, необходимо представить веб-маркер OIDC JSON поставщику облачных служб.

Для каждого развертывания рабочие процессы должны использовать действия входа в облако (или пользовательские скрипты), которые получают маркер OIDC и представляет его поставщику облачных служб. Затем поставщик облачных служб проверяет утверждения в маркере; в случае успешного выполнения он предоставляет маркер доступа к облаку, доступный только для этого запуска задания. Предоставленный маркер доступа затем можно использовать в последующих действиях в задании для подключения к облаку и развертывания в своих ресурсах.

Порядок замены маркера OIDC на маркера доступа зависит от конкретного поставщика облачных служб.

### Доступ к ресурсам в поставщике облачных служб

Получив маркер доступа, вы можете использовать определенные облачные действия или скрипты для проверки подлинности у поставщика облачных служб и развертывания в своих ресурсах. Эти действия могут отличаться для каждого поставщика облачных служб.
Кроме того, срок действия маркера доступа по умолчанию может отличаться для каждого конкретного облака и может быть настроен на стороне поставщика облачных служб.
