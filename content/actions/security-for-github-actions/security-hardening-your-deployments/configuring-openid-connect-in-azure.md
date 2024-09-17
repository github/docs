---
title: Configuring OpenID Connect in Azure
shortTitle: OpenID Connect in Azure
intro: Use OpenID Connect within your workflows to authenticate with Azure.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Security
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in Azure, without needing to store the Azure credentials as long-lived {% data variables.product.prodname_dotcom %} secrets.

This guide gives an overview of how to configure Azure to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a workflow example for the [`azure/login`](https://github.com/Azure/login) action that uses tokens to authenticate to Azure and access resources.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

{% ifversion ghes %}
{% data reusables.actions.oidc-endpoints %}
  <!-- This note is indented to align with the above reusable. -->
  {% note %}

  **Note:** Microsoft Entra ID (previously known as Azure AD) does not have fixed IP ranges defined for these endpoints.

  {% endnote %}

* Make sure that the value of the issuer claim that's included with the JSON Web Token (JWT) is set to a publicly routable URL. For more information, see "[AUTOTITLE](/enterprise-server@latest/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."
{% endif %}

## Adding the federated credentials to Azure

{% data variables.product.prodname_dotcom %}'s OIDC provider works with Azure's workload identity federation. For an overview, see Microsoft's documentation at "[Workload identity federation](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)."

To configure the OIDC identity provider in Azure, you will need to perform the following configuration. For instructions on making these changes, refer to [the Azure documentation](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

{% ifversion fpt or ghec %}In the following procedure, you will create an application for Microsoft Entra ID (previously known as Azure AD).{% endif %}

1. Create an Entra ID application and a service principal.
1. Add federated credentials for the Entra ID application.
1. Create {% data variables.product.prodname_dotcom %} secrets for storing Azure configuration.

Additional guidance for configuring the identity provider:

* For security hardening, make sure you've reviewed "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)." For an example, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)."
* For the `audience` setting,  `api://AzureADTokenExchange` is the recommended value, but you can also specify other values here.

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`azure/login`](https://github.com/Azure/login) action to exchange the OIDC token (JWT) for a cloud access token.

{% data reusables.actions.oidc-deployment-protection-rules %}

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The [`azure/login`](https://github.com/Azure/login) action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from Azure. For more information, see the [`azure/login`](https://github.com/Azure/login) documentation.

The following example exchanges an OIDC ID token with Azure to receive an access token, which can then be used to access cloud resources.

{% raw %}

```yaml copy
name: Run Azure Login with OIDC
on: [push]

permissions:
  id-token: write
  contents: read
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

      - name: 'Run az commands'
        run: |
          az account show
          az group list
```

 {% endraw %}

## Further reading

{% data reusables.actions.oidc-further-reading %}
