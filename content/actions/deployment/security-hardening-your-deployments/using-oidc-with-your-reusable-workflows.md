---
title: Using OIDC with your reusable workflows
shortTitle: Using OIDC with your reusable workflows
intro: 'You can use reusable workflows to standardize how your workflows authenticate with OIDC.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: 'issue-4757-and-5856'
  ghec: '*'
type: how_to
topics:
  - Workflows
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Note:** Reusable workflows are currently in beta and subject to change.

{% endnote %}

## About reusable workflows

To help standardize your security practices and avoid duplicating your OIDC authentication code across multiple workflow files, consider saving your OIDC authentication steps as a reusable workflow. For example, you could create a reusable workflow that retrieves an OIDC token and then requests an access token from your cloud provider. The calling workflow can then use the access token to access the cloud resources it needs.

Note that anyone who can access the reusable workflow repository will subsequently be able to request an access token for the cloud provider's resources. Consider storing your OIDC reusable workflows in a dedicated security hardened repository.

Before proceeding you should be familiar with reusable workflows. For more information, see ["Reusing workflows"](/actions/learn-github-actions/reusing-workflows).

## Creating a reusable workflow that requests tokens

You can modularize the requests for an OIDC token and an access token into a reusable workflow. Your custom workflow can then call the reusable workflow and subsequently access resources in the cloud.

The following example requests a JWT token from the {% data variables.product.prodname_dotcom %} OIDC and then uses it to request an access token from Google Cloud Platform (GCP). The reusable workflow can then be called from another workflow and used to access resources in GCP.

This example is a reusable workflow created in the following path: `octo-org/oidc-provider/.github/workflows/deploy.yml`. 
1. The `Get_OIDC_ID_token` job requests a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider.
1. The `google-github-actions/auth` action uses the JWT to request an access token from GCP.

```yaml{:copy}
name: Reusable workflow to Deploy Artifacts to GCP

on:
  workflow_call:
    inputs:
      index:
        required: true
        type: string
   

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    
    - name: Download artifact
      uses: actions/download-artifact@v2
      with:
        name: {% raw %}${{inputs.index}}{% endraw %}

    - id: 'auth'
      name: 'Authenticate to Google Cloud'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          token_format: 'access_token'
          workload_identity_provider: 'projects/<project-id>/locations/global/workloadIdentityPools/<gh-oidc>/providers/<gh-provider>'
          service_account: '<example-service-account>'
          audience: '<audience>`'

    - name: HTTP Request Action
      run: curl GET --header 'Authorization:Bearer {% raw %}${{ steps.auth.outputs.access_token }}'{% endraw %} --header 'Content-Type:application/json' 'https://serviceusage.googleapis.com/v1/projects/<project-id>/services'
       
    - name: Show Response
      run: echo {% raw %}${{ steps.request.outputs.response }}{% endraw %}
```

- `<gh-provider>`: The name of the provider you created in GCP.
- `<gh-oidc>`: The name of your GCP identity pool.
- `<example-service-account>`: The name of the GCP service account you're using.
- `<project-id>`: The ID of your GCP project.
- `<audience>`: Lets you define the entity that will use the access token. For more information, see "[Understanding the OIDC token](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)".

## Calling the reusable workflow from your custom workflow

This example demonstrates how your custom workflows can be updated to use a reusable workflow.

1. The `deploy` job calls the above reusable at its full path (`octo-org/oidc-provider/.github/workflows/deploy.yml@main`). 
1. 
This allows your custom workflow to use the access token to upload an artifact to GCP.

```yaml{:copy}

name: Builds and deploy artifacts

on:
  workflow_dispatch:
permissions:
  id-token: write
  contents: write
env:
  id_token: None

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: upload artifacts
        uses: actions/upload-artifact@v2
        with:
          name: index
          path: index.html
      - run: echo "::set-output name=artifact_name::index"
  deploy:
    needs: build
    uses: octo-org/oidc-provider/.github/workflows/deploy.yml@main
    with:
      index: {% raw %}${{needs.build.outputs.artifact_name}}{% endraw %}
```

## Creating a policy to enforce reusable workflows

If you want your cloud provider to only accept token requests from the reusable workflows repository, your cloud provider must support subclaims for [`job_workflow_ref`](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token). This will allow your cloud provider to identify which repository the job originally came from. If your cloud provider only supports the standard claims (audience and subject), it will not be able to determine that the job originated from the reusable workflow repository.

For example, if you have a repository called `oidc-provider` that stores all of your OIDC workflows, and you need your cloud provider to only grant tokens to requests that originate from this repository, you will need to configure the trust relationship to add a subclaim for the `job_workflow_ref` presented by the JWT. This `job_workflow_ref` points to the file ref that contains the job, and can be used to identify that the job is coming from the `oidc-provider` repository.

For more information on configuring conditions in your cloud provider, see "[Defining trust conditions on cloud roles using OIDC claims](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)".
