---
title: Configuring OpenID Connect in Azure
shortTitle: Configuring OpenID Connect in Azure
intro: 'Use OpenID Connect within your workflows to authenticate with Azure.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: 'issue-4856'
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in Azure, without needing to store the Azure credentials as long-lived {% data variables.product.prodname_dotcom %} secrets. 

This guide gives an overview of how to configure Azure to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a workflow example for the [`azure/login`](https://github.com/Azure/login) action that uses tokens to authenticate to Azure and access resources.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the Federated Credentials to Azure

{% data variables.product.prodname_dotcom %}'s OIDC provider works with Azure's workload identity federation. For an overview, see Microsoft's documentation at "[Workload identity federation](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)."

To configure the OIDC identity provider in Azure, you will need to perform the following configuration. For instructions on making these changes, refer to [the Azure documentation](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Create an Active Directory application and a service principal.
2. Add federated credentials for the Active Directory application.
3. Create {% data variables.product.prodname_dotcom %} secrets for storing Azure configuration.

Additional guidance for configuring the identity provider:

- For security hardening, make sure you've reviewed ["Configuring the OIDC trust with the cloud"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). For an example, see ["Configuring the subject in your cloud provider"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- For the `audience` setting,  `api://AzureADTokenExchange` is the recommended value, but you can also specify other values here.

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
2. Use the [`azure/login`](https://github.com/Azure/login) action to exchange the OIDC token (JWT) for a cloud access token.

### Adding permissions settings

The workflow will require a `permissions` setting with a defined [`id-token`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) value. If you only need to fetch an OIDC token for a single job, then this permission can be set within that job. For example:

```yaml{:copy}
permissions:
  id-token: write
```

You may need to specify additional permissions here, depending on your workflow's requirements. 

### Requesting the access token

The [`azure/login`](https://github.com/Azure/login) action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from Azure. For more information, see the [`azure/login`](https://github.com/Azure/login) documentation.

The following example exchanges an OIDC ID token with Azure to receive an access token, which can then be used to access cloud resources.

```yaml{:copy}
name: Run Azure Login with OpenID Connect
on: [push]

permissions:
      id-token: write
      
jobs: 
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
        
    - name: Installing CLI-beta for OpenID Connect
      run: |
        cd ../..
        CWD="$(pwd)"
        python3 -m venv oidc-venv
        . oidc-venv/bin/activate
        echo "activated environment"
        python3 -m pip install -q --upgrade pip
        echo "started installing cli beta"
        pip install -q --extra-index-url https://azcliprod.blob.core.windows.net/beta/simple/ azure-cli
        echo "***************installed cli beta*******************"
        echo "$CWD/oidc-venv/bin" >> $GITHUB_PATH
        
    - name: 'Az CLI login'
      uses: azure/login@v1.4.0
      with:
        client-id: {% raw %}${{ secrets.AZURE_CLIENTID }}{% endraw %}
        tenant-id: {% raw %}${{ secrets.AZURE_TENANTID }}{% endraw %}
        subscription-id: {% raw %}${{ secrets.AZURE_SUBSCRIPTIONID }}{% endraw %}
```
 