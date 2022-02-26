---
title: Configuring OpenID Connect in Google Cloud Platform
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: Use OpenID Connect within your workflows to authenticate with Google Cloud Platform.
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

## 概览

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in Google Cloud Platform (GCP), without needing to store the GCP credentials as long-lived {% data variables.product.prodname_dotcom %} secrets.

This guide gives an overview of how to configure GCP to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a workflow example for the [`google-github-actions/auth`](https://github.com/google-github-actions/auth) action that uses tokens to authenticate to GCP and access resources.

## 基本要求

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding a Google Cloud Workload Identity Provider

To configure the OIDC identity provider in GCP, you will need to perform the following configuration. For instructions on making these changes, refer to [the GCP documentation](https://github.com/google-github-actions/auth).

1. Create a new identity pool.
2. Configure the mapping and add conditions.
3. Connect the new pool to a service account.

Additional guidance for configuring the identity provider:

- For security hardening, make sure you've reviewed ["Configuring the OIDC trust with the cloud"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). For an example, see ["Configuring the subject in your cloud provider"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- For the service account to be available for configuration, it needs to be assigned to the `roles/iam.workloadIdentityUser` role. For more information, see [the GCP documentation](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- The Issuer URL to use: `https://token.actions.githubusercontent.com`

## 更新 {% data variables.product.prodname_actions %} 工作流程

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
2. Use the [`google-github-actions/auth`](https://github.com/google-github-actions/auth) action to exchange the OIDC token (JWT) for a cloud access token.

### Adding permissions settings

 {% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The `google-github-actions/auth` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from GCP. For more information, see the GCP [documentation](https://github.com/google-github-actions/auth).

This example has a job called `Get_OIDC_ID_token` that uses actions to request a list of services from GCP.

- `<example-workload-identity-provider>`: Replace this with the path to your identity provider in GCP. For example, `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: Replace this with the name of your service account in GCP.
- `<project-id>`: Replace this with the ID of your GCP project.

This action exchanges a {% data variables.product.prodname_dotcom %} OIDC token for a Google Cloud access token, using [Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation).

{% raw %}
```yaml{:copy}
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```
{% endraw %}
