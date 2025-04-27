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

{% data reusables.actions.oidc-on-ghecom %}

* To be secure, you need to set a Claims JSON in JFrog when configuring identity mappings. For more information, see [AUTOTITLE](https://jfrog.com/help/r/jfrog-platform-administration-documentation/configure-identity-mappings) and [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims).

    For example, you can set `iss` to `https://token.actions.githubusercontent.com`, and the `repository` to something like "octo-org/octo-repo"`. This will ensure only Actions workflows from the specified repository will have access to your JFrog platform. The following is an example Claims JSON when configuring identity mappings.

    ```json
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

### Example: Authenticating with JFrog using OIDC

In your {% data variables.product.prodname_actions %} workflow file, ensure you are using the provider name and audience you configured in the JFrog Platform.

The following example uses the placeholders YOUR_PROVIDER_NAME and YOUR_AUDIENCE.

```yaml
permissions:
  id-token: write
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Setup JFrog CLI with OIDC
        id: setup-jfrog-cli
        uses: jfrog/setup-jfrog-cli@v4
        with:
          JF_URL: ${{ env.JF_URL }}
          oidc-provider-name: 'my-github-provider' # Replace with your configured provider name
          oidc-audience: 'jfrog-github'            # Replace with your configured audience

      - name: Upload artifact
        run: jf rt upload "dist/*.zip" my-repo/

```

> [!TIP]
> When OIDC authentication is used, the `setup-jfrog-cli` action automatically provides short-lived (`oidc-user` and `oidc-token`) as step outputs. These can be used for Docker, Helm, and other integrations that require authentication with JFrog. No additional configuration is needed to enable these outputs.

```yaml
      - name: Login to Artifactory
        uses: docker/login-action@v3
        with:
          registry: ${{ env.JF_URL }}
          username: ${{ steps.setup-jfrog-cli.outputs.oidc-user }}
          password: ${{ steps.setup-jfrog-cli.outputs.oidc-token }}
```
## Security Best Practices

-  Always set `permissions: id-token: write` in any workflow using OIDC.
-  Restrict trust using claims such as `repository`, `ref`, or `environment`.
-  Use identity mappings to scope access at a fine-grained level inside the JFrog Platform.

## Further Reading

- [JFrog OpenID Connect Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/openid-connect-integration)
- [Configure Identity Mappings](https://jfrog.com/help/r/jfrog-platform-administration-documentation/identity-mappings)
- [GitHub Docs: About Security Hardening with OIDC](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
```
