---
title: Uploading storage and deployment data to the {% data variables.product.virtual_registry %}
intro: "Associate packages and builds in your organization with storage and deployment data."
versions:
  feature: virtual-registry
topics:
  - Vulnerabilities
  - Dependencies
contentType: concepts
product: 'Organization accounts on any plan'
permissions: 'Anyone with write access to an organization-owned repository'
shortTitle: Upload linked artifacts
---

The {% data variables.product.virtual_registry %} includes storage records and deployment records for artifacts that you build in your organization. Metadata for each artifact is provided by your organization using one of the following methods:

* A workflow containing one of {% data variables.product.company_short %}'s actions for **artifact attestations**
* An integration with the **JFrog Artifactory** or **Microsoft Defender for Cloud**
* A custom script using the **artifact metadata REST API**

The available methods depend on whether you are uploading a storage record or a deployment record. For more information about record types, see [AUTOTITLE](/code-security/concepts/supply-chain-security/linked-artifacts#which-metadata-is-included).

## Uploading a storage record

You can upload a storage record by creating an **artifact attestation** or enabling an integration with **JFrog Artifactory**. If you don't want to use these options, you must set up a custom integration with the **REST API**.

### Attesting with {% data variables.product.prodname_actions %}

You can upload a storage record for an artifact using {% data variables.product.github %}'s first-party actions for artifact attestations. You can do this in the same workflow you use to build the artifact. These actions create signed provenance and integrity guarantees for the software you build, as well as automatically uploading a storage record to the {% data variables.product.virtual_registry %}.

{% data reusables.actions.attestation-virtual-registry %}

For more information on using these actions, see [AUTOTITLE](/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations).

If the artifact does not require attestation, or if you want to upload deployment records or additional storage metadata, see the following sections.

### Using the JFrog integration

This two-way integration automatically keeps your storage records on {% data variables.product.github %} up to date with the artifact on JFrog. For example, attestations you create on {% data variables.product.github %} are automatically uploaded to JFrog, and promoting an artifact to production on JFrog automatically adds the production context to the record on {% data variables.product.github %}.

For setup instructions, see [Get Started with JFrog Artifactory and GitHub Integration](https://jfrog.com/help/r/jfrog-and-github-integration-guide/get-started-with-jfrog-artifactory-and-github-integration) in the JFrog documentation.

### Using the REST API

For artifacts that do not need to be attested and are not stored on JFrog, you can create a custom integration using the [Create artifact metadata storage record](/rest/orgs/artifact-metadata#create-artifact-metadata-storage-record) API endpoint. You should configure your system to call the endpoint whenever an artifact is published to your chosen package repository.

>[!NOTE] If the artifact is not associated with a provenance attestation on {% data variables.product.github %}, the `github_repository` parameter is mandatory.

## Uploading a deployment record

If you store artifacts in **{% data variables.product.prodname_mdc_definition %}**, you can use an integration to automatically sync data to the {% data variables.product.virtual_registry %}. Otherwise, you must set up a custom integration with the **REST API**.

### Using the Microsoft Defender for Cloud integration

You can connect your {% data variables.product.prodname_mdc %} instance to your {% data variables.product.github %} organization. {% data variables.product.prodname_mdc %} will automatically send deployment and runtime data to {% data variables.product.github %}.

For setup instructions, see [Quick Start: Connect your {% data variables.product.github %} Environment to {% data variables.product.prodname_microsoft_defender %}](https://learn.microsoft.com/en-us/azure/defender-for-cloud/quickstart-onboard-github) in the documentation for {% data variables.product.prodname_mdc %}.

{% data reusables.security.production-context-mdc-preview %}

### Using the REST API

The [Create an artifact deployment record](/rest/orgs/artifact-metadata#create-an-artifact-deployment-record) API endpoint allows systems to send deployment data for a specific artifact to {% data variables.product.github %}, such as its name, digest, environments, cluster, and deployment. You should call this endpoint whenever an artifact is deployed to a new staging or production environment.

>[!NOTE] If the artifact is not associated with a provenance attestation on {% data variables.product.github %}, the `github_repository` parameter is mandatory.

## Verifying an upload

To check that a record has been uploaded successfully, you can view the updated artifact in your organization settings. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/view-linked-artifacts).

## Removing unwanted records

It is not possible to delete an artifact from the {% data variables.product.virtual_registry %}. However, you can update a storage record or deployment record to reflect an artifact's status. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/remove-linked-artifacts).

## {% data variables.product.prodname_actions %} examples

You can upload data to the {% data variables.product.virtual_registry %} in the same workflow you use to build and publish an artifact.

### Generating an attestation

In the following example, we build and publish a Docker image, then use the `{% raw %}${{ steps.push.outputs.digest }}{% endraw %}` output in the next step to generate a provenance attestation.

The `attest-build-provenance` action automatically uploads a storage record to the {% data variables.product.virtual_registry %} when `push-to-registry: true` is set and the workflow includes the `artifact-metadata: write` permission.

``` yaml
{% raw %}
env:
  IMAGE_NAME: my-container-image
  ACR_ENDPOINT: my-registry.azurecr.io

jobs:
  generate-build:
    name: Build and publish Docker image
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      attestations: write
      packages: write
      artifact-metadata: write

    steps:
      - name: Build and push Docker image
        id: push
        uses: docker/build-push-action@263435318d21b8e681c14492fe198d362a7d2c83
        with:
          context: .
          push: true
          tags: |
            ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:latest
            ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

      - name: Generate artifact attestation
        uses: actions/attest-build-provenance@v3
        with:
          subject-name: ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}
          subject-digest: ${{ steps.push.outputs.digest }}
          push-to-registry: true
{% endraw %}
```

### Using the REST API

Alternatively, if you are not generating an attestation, you can call the artifact metadata API directly.

``` yaml
{% raw %}
env:
  IMAGE_NAME: my-container-image
  IMAGE_VERSION: 1.1.2
  ACR_ENDPOINT: my-registry.azurecr.io

jobs:
  generate-build:
    name: Build and publish Docker image
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      packages: write
      artifact-metadata: write

    steps:
      - name: Build and push Docker image
        id: push
        uses: docker/build-push-action@263435318d21b8e681c14492fe198d362a7d2c83
        with:
          context: .
          push: true
          tags: |
              ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:latest
              ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

      - name: Create artifact metadata storage record
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          jq -n --arg artifactName "${{ env.IMAGE_NAME }}" --arg artifactVersion "${{ env.IMAGE_VERSION }}" --arg artifactDigest "${{ steps.push.outputs.digest }}" '{"name": $artifactName, "digest": $artifactDigest, "version": $artifactVersion, "registry_url": "https://azurecr.io", "repository": "my-repository"}' > create-record.json

          gh api -X POST orgs/${{ github.repository_owner }}/artifacts/metadata/storage-record --input create-record.json
        shell: bash
{% endraw %}
```

## Next steps

Once you have uploaded data, teams in your organization can use the context from storage and deployment data to prioritize security alerts. See [AUTOTITLE](/code-security/tutorials/secure-your-organization/prioritize-alerts-in-production-code).
