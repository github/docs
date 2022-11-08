---
title: 在云提供商中配置 OpenID Connect
shortTitle: OpenID Connect in cloud providers
intro: 在工作流程中使用 OpenID Connect 向云提供商进行身份验证。
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135492'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程访问云提供商中的资源，而无需将任何凭据存储为长期 {% data variables.product.prodname_dotcom %} 机密。

要使用 OIDC，需要先配置云提供商信任 {% data variables.product.prodname_dotcom %} 的 OIDC 作为联合身份，然后必须更新工作流程以使用令牌进行验证。

## 先决条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用云提供商的官方操作将 OIDC 令牌 (JWT) 交换为云访问令牌。

如果您的云提供商尚未提供官方操作，您可以更新工作流程以手动执行这些步骤。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

### 使用官方操作

如果您的云提供商已创建将 OIDC 与 {% data variables.product.prodname_actions %} 结合使用的官方操作，它将允许您轻松地将 OIDC 令牌交换为访问令牌。 然后，可以更新工作流程，以便在访问云资源时使用此令牌。

## 使用自定义操作

如果您的云提供商没有官方操作，或者您更喜欢创建自定义脚本，则可以手动向 {% data variables.product.prodname_dotcom %}的 OIDC 提供商请求 JSON Web 令牌 (JWT)。

如果您没有使用官方操作，则 {% data variables.product.prodname_dotcom %} 建议您使用 Actions 核心工具包。 也可使用以下环境变量来检索令牌：`ACTIONS_RUNTIME_TOKEN`、`ACTIONS_ID_TOKEN_REQUEST_URL`。

要使用此方法更新工作流程，您需要对 YAML 进行三项更改：

1. 为令牌添加权限设置。
2. 添加从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求 OIDC 令牌的代码。
3. 添加用于将 OIDC 令牌与您的云提供商交换为访问令牌的代码。

### 使用 Actions 核心工具包请求 JWT

以下示例演示如何将 `actions/github-script` 与 `core` 工具包一起使用，从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商那里请求 JWT。 有关详细信息，请参阅“[添加操作工具包](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)”。

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

### 使用环境变量请求 JWT

下面的示例演示如何使用环境变量来请求 JSON Web 令牌。

对于部署作业，需要使用 `actions/github-script` 和 `core` 工具包来定义令牌设置。 有关详细信息，请参阅“[添加操作工具包](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)”。

例如：

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

然后，可使用 `curl` 从 {% data variables.product.prodname_dotcom %} OIDC 提供商那里检索 JWT。 例如：

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

### 从云提供商获取访问令牌

您需要向云提供商提供 OIDC JSON Web 令牌，以便获取访问令牌。

对于每个部署，您的工作流程必须使用云登录操作（或自定义脚本），以提取 OIDC 令牌并将其提供给您的云提供商。 然后，云提供商验证令牌中的声明；如果成功，它将提供仅可用于该作业运行的云访问令牌。 然后，作业中的后续操作可以使用提供的访问令牌连接到云并部署到其资源。

将 OIDC 令牌交换为访问令牌的步骤因每个云提供商而异。

### 访问云提供商中的资源

获取访问令牌后，可以使用特定的云操作或脚本向云提供商进行身份验证并部署到其资源。 对于每个云提供商，这些步骤可能会有所不同。
此外，此访问令牌的默认过期时间可能因每个云而异，并且可以在云提供商端进行配置。
