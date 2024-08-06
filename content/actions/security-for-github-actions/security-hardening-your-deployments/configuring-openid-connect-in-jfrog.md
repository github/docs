---
title: Configuring OpenID Connect in JFrog
shortTitle: OpenID Connect in JFrog
intro: Use OpenID Connect within your workflows to authenticate with JFrog.
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Security
  - Actions
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-jfrog
---

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with [JFrog](https://jfrog.com/) to download and publish artifacts without storing JFrog passwords, tokens, or API keys in {% data variables.product.company_short %}.

This guide gives an overview of how to configure JFrog to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in a {% data variables.product.prodname_actions %} workflow.

For an example {% data variables.product.prodname_actions %} workflow, see [Sample {% data variables.product.prodname_actions %} Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/sample-github-actions-integration) in the JFrog documentation.

For an example {% data variables.product.prodname_actions %} workflow using the JFrog CLI, see [`build-publish.yml`](https://github.com/jfrog/jfrog-github-oidc-example/blob/main/.github/workflows/build-publish.yml) in the `jfrog-github-oidc-example` repository.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

* To be secure, you need to set a Claims JSON in JFrog when configuring identity mappings. For more information, see "[AUTOTITLE](https://jfrog.com/help/r/jfrog-platform-administration-documentation/configure-identity-mappings)" and "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims)."

    For example, you can set `iss` to `https://token.actions.githubusercontent.com`, and the `repository` to something like "octo-org/octo-repo"`. This will ensure only Actions workflows from the specified repository will have access to your JFrog platform. The following is an example Claims JSON when configuring identity mappings.

    ```json copy
    {
      "iss": "https://token.actions.githubusercontent.com",
      "repository": "octo-org/octo-repo"
    }
    ```

## Adding the identity provider to JFrog

To use OIDC with JFrog, establish a trust relationship between {% data variables.product.prodname_actions %} and the JFrog platform. For more information about this process, see [OpenID Connect Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/openid-connect-integration) in the JFrog documentation.

1. Sign in to your JFrog Platform.
1. Configure trust between JFrog and your {% data variables.product.prodname_actions %} workflows.
1. Configure identity mappings.

## Updating your {% data variables.product.prodname_actions %} workflow

Once you establish a trust relationship between {% data variables.product.prodname_actions %} and the JFrog platform, you can update your {% data variables.product.prodname_actions %} workflow file.

In your {% data variables.product.prodname_actions %} workflow file, ensure you are using the provider name and audience you configured in the JFrog Platform.

The following example uses the placeholder `YOUR_PROVIDER_NAME`.

```yaml
- name: Fetch Access Token from Artifactory
        id: fetch_access_token
        env:
          ID_TOKEN: ${{ steps.idtoken.outputs.id_token }}
        run: |
          ACCESS_TOKEN=$(curl \
          -X POST \
          -H "Content-type: application/json" \
          https://example.jfrog.io/access/api/v1/oidc/token \
          -d \
          "{\"grant_type\": \"urn:ietf:params:oauth:grant-type:token-exchange\", \"subject_token_type\":\"urn:ietf:params:oauth:token-type:id_token\", \"subject_token\": \"$ID_TOKEN\", \"provider_name\": \"YOUR_PROVIDER_NAME\"}" | jq .access_token | tr -d '"')
          echo ACCESS_TOKEN=$ACCESS_TOKEN >> $GITHUB_OUTPUT
```

The following example shows part of a {% data variables.product.prodname_actions %} workflow file using cURL.

```yaml
- name: Get ID Token (cURL method)
        id: idtoken
        run: |
          ID_TOKEN=$(curl -sLS -H "User-Agent: actions/oidc-client" -H "Authorization: Bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" \
          "${ACTIONS_ID_TOKEN_REQUEST_URL}&audience=jfrog-github" | jq .value | tr -d '"')
          echo "ID_TOKEN=${ID_TOKEN}" >> $GITHUB_OUTPUT
```

Alternatively, you can set the audience as an environment variable using the `env` context. For more information about the `env` context, see "[AUTOTITLE](/actions/learn-github-actions/contexts#env-context)."

{% data reusables.actions.oidc-deployment-protection-rules %}

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      OIDC_AUDIENCE: 'YOUR_AUDIENCE'
```

Then, in your workflow file, retrieve the value of the variables stored in the `env` context. The following example uses the `env` context to retrieve the OIDC audience.

```yaml
- name: Get ID Token (using env context)
        uses: {% data reusables.actions.action-github-script %}
        id: idtoken
        with:
          script: |
            const coredemo = require('@actions/core');
            let id_token = await coredemo.getIDToken(process.env.OIDC_AUDIENCE);
            coredemo.setOutput('id_token', id_token);
```
