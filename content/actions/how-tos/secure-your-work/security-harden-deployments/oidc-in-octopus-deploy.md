---
title: Configuring OpenID Connect in Octopus Deploy
shortTitle: OIDC in Octopus Deploy
intro: Use OpenID Connect within your workflows to authenticate with Octopus Deploy.
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Security
  - Actions
---

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with [Octopus Deploy](https://octopus.com/) to push packages, create releases or trigger deployments without storing Octopus Deploy passwords or API keys as long-lived {% data variables.product.prodname_dotcom %} secrets.

This guide provides an overview of how to configure Octopus Deploy to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a workflow example for the [`octopusdeploy/login`](https://github.com/OctopusDeploy/login) action that uses tokens to authenticate to your Octopus Deploy instance.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

{% data reusables.actions.oidc-on-ghecom %}

## Adding the identity provider to Octopus Deploy

To use OIDC with Octopus Deploy, first establish a trust relationship between {% data variables.product.prodname_actions %} and your Octopus Deploy instance. For more information about this process, see [Using OpenID Connect with the Octopus API](https://octopus.com/docs/octopus-rest-api/openid-connect) in the Octopus Deploy documentation.

1. Sign in to your Octopus Deploy instance.
1. Create or open the Service Account that will be granted access via the token request.
1. Configure a new OIDC Identity, defining the relevant subject that the {% data variables.product.prodname_actions %} workflow token request will be validated against.

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`OctopusDeploy/login`](https://github.com/OctopusDeploy/login) action to exchange the OIDC token (JWT) for a cloud access token.

{% data reusables.actions.oidc-deployment-protection-rules %}

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The [`OctopusDeploy/login`](https://github.com/OctopusDeploy/login) action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from your Octopus Server instance. For more information, see the [`OctopusDeploy/login`](https://github.com/OctopusDeploy/login) documentation.

The following example exchanges an OIDC ID token with your Octopus Deploy instance to receive an access token, which can then be used to access your Octopus Deploy resources. Be sure to replace the `server` and `service_account_id` details appropriately for your scenario.

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

jobs:
  create_release_in_octopus:
    runs-on: ubuntu-latest
    name: Create a release in Octopus
    permissions:
      # You might need to add other permissions here like `contents: read` depending on what else your job needs to do
      id-token: write # This is required to obtain an ID token from GitHub Actions for the job
    steps:
      - name: Login to Octopus
        uses: OctopusDeploy/login@34b6dcc1e86fa373c14e6a28c5507d221e4de629 #v1.0.2
        with:
          server: https://my.octopus.app
          service_account_id: 5be4ac10-2679-4041-a8b0-7b05b445e19e

      - name: Create a release in Octopus
        uses: OctopusDeploy/create-release-action@fe13cc69c1c037cb7bb085981b152f5e35257e1f #v3.2.2
        with:
          space: Default
          project: My Octopus Project
```

## Further reading

{% data reusables.actions.oidc-further-reading %}