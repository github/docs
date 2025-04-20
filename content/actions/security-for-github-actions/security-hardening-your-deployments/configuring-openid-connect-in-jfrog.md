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

### Example: Authenticating with JFrog using OIDC

In your {% data variables.product.prodname_actions %} workflow file, ensure you are using the provider name and audience you configured in the JFrog Platform.

The following example uses the placeholder `YOUR_PROVIDER_NAME` & `YOUR_AUDIENCE`.

```yaml
permissions:
  id-token: write
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Setup JFrog CLI with OIDC
        uses: jfrog/setup-jfrog-cli@v4
        with:
          oidc-provider-name: 'YOUR_PROVIDER_NAME'
          oidc-audience: 'YOUR_AUDIENCE'

      - name: Upload artifact
        run: jf rt upload "dist/*.zip" my-repo/
```

## Security Best Practices

- Always use `permissions: id-token: write` in workflows that authenticate with JFrog.
- Limit trust using specific claims like `repository`, `ref`, or `environment`.
- Configure identity mappings in JFrog to restrict authentication to specific workflows.

## Further Reading

- [JFrog OpenID Connect Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/openid-connect-integration)
- [JFrog Platform Identify Mappings DOCS](https://jfrog.com/help/r/jfrog-platform-administration-documentation/identity-mappings)
- [JFrog CLI Docs: `exchange-oidc-token` command (manual usage)](https://jfrog.com/help/r/jfrog-cli-documentation/oidc-commands#exchange-oidc-token)
- [GitHub Docs: About security hardening with OpenID Connect](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
```
