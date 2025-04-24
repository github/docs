---
title: Configuring OpenID Connect in cloud providers
shortTitle: OpenID Connect in cloud providers
intro: Use OpenID Connect within your workflows to authenticate with cloud providers.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Security
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in your cloud provider, without having to store any credentials as long-lived {% data variables.product.prodname_dotcom %} secrets.

To use OIDC, you will first need to configure your cloud provider to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and must then update your workflows to authenticate using tokens.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

{% data reusables.actions.oidc-on-ghecom %}

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the official action from your cloud provider to exchange the OIDC token (JWT) for a cloud access token.

If your cloud provider doesn't yet offer an official action, you can update your workflows to perform these steps manually.

{% data reusables.actions.oidc-deployment-protection-rules %}

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

### Using official actions

If your cloud provider has created an official action for using OIDC with {% data variables.product.prodname_actions %}, it will allow you to easily exchange the OIDC token for an access token. You can then update your workflows to use this token when accessing cloud resources.

For example, Alibaba Cloud created [`aliyun/configure-aliyun-credentials-action`](https://github.com/aliyun/configure-aliyun-credentials-action) to integrate with using OIDC with {% data variables.product.prodname_dotcom %}.

## Using custom actions

If your cloud provider doesn't have an official action, or if you prefer to create custom scripts, you can manually request the JSON Web Token (JWT) from {% data variables.product.prodname_dotcom %}'s OIDC provider.

If you're not using an official action, then {% data variables.product.prodname_dotcom %} recommends that you use the Actions core toolkit. Alternatively, you can use the following environment variables to retrieve the token: `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_URL`.

To update your workflows using this approach, you will need to make three changes to your YAML:

1. Add permissions settings for the token.
1. Add code that requests the OIDC token from {% data variables.product.prodname_dotcom %}'s OIDC provider.
1. Add code that exchanges the OIDC token with your cloud provider for an access token.

### Requesting the JWT using the Actions core toolkit

The following example demonstrates how to use `actions/github-script` with the `core` toolkit to request the JWT from {% data variables.product.prodname_dotcom %}'s OIDC provider. For more information, see [AUTOTITLE](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages).

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

### Requesting the JWT using environment variables

The following example demonstrates how to use environment variables to request a JSON Web Token.

For your deployment job, you will need to define the token settings, using `actions/github-script` with the `core` toolkit. For more information, see [AUTOTITLE](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages).

For example:

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

You can then use `curl` to retrieve a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider. For example:

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
        echo "idToken=${IDTOKEN}" >> $GITHUB_OUTPUT
      id: tokenid
```

### Getting the access token from the cloud provider

You will need to present the OIDC JSON web token to your cloud provider in order to obtain an access token.

For each deployment, your workflows must use cloud login actions (or custom scripts) that fetch the OIDC token and present it to your cloud provider. The cloud provider then validates the claims in the token; if successful, it provides a cloud access token that is available only to that job run. The provided access token can then be used by subsequent actions in the job to connect to the cloud and deploy to its resources.

The steps for exchanging the OIDC token for an access token will vary for each cloud provider.

### Accessing resources in your cloud provider

Once you've obtained the access token, you can use specific cloud actions or scripts to authenticate to the cloud provider and deploy to its resources. These steps could differ for each cloud provider.

For example, Alibaba Cloud maintains their own instructions for OIDC authentication. For more information, see [Overview of OIDC-based SSO](https://www.alibabacloud.com/help/en/ram/user-guide/overview-of-oidc-based-sso) in the Alibaba Cloud documentation.

In addition, the default expiration time of this access token could vary between each cloud and can be configurable at the cloud provider's side.

## Further reading

{% data reusables.actions.oidc-further-reading %}
