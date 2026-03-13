---
title: Using the dependency submission API
intro: You can use the {% data variables.dependency-submission-api.name %} to submit dependencies for projects, such as the dependencies resolved when a project is built or compiled.
shortTitle: Use dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api
contentType: how-tos
---

## About the {% data variables.dependency-submission-api.name %}

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the {% data variables.dependency-submission-api.name %} in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit. Snapshots can be generated from the dependencies detected at build time. For technical details on using the {% data variables.dependency-submission-api.name %} over the network, see [AUTOTITLE](/rest/dependency-graph/dependency-submission).

## Submitting dependencies at build-time

You can use the {% data variables.dependency-submission-api.name %} in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built.

### Using pre-made actions

{% data reusables.dependency-submission.api-premade-actions %}

{% data reusables.dependency-submission.premade-action-table %}

For more information about these actions, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#package-ecosystems-supported-via-dependency-submission-actions).

### Creating your own action

Alternatively, you can write your own action to submit dependencies for your project at build-time. Your workflow should:

  1. Generate a list of dependencies for your project.
  1. Translate the list of dependencies into the snapshot format accepted by the {% data variables.dependency-submission-api.name %}. For more information about the format, see the body parameters for the "Create a repository snapshot" API endpoint in [AUTOTITLE](/rest/dependency-graph/dependency-submission).
  1. Submit the formatted list of dependencies to the {% data variables.dependency-submission-api.name %}.

{% data variables.product.github %} maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you build your own GitHub Action for submitting dependencies to the {% data variables.dependency-submission-api.name %}. For more information about writing an action, see [AUTOTITLE](/actions/creating-actions).

## Submitting SBOMs as snapshots

If you have external tools which create or manage Software Bills of Materials (SBOMs), you can also submit those SBOMs to the {% data variables.dependency-submission-api.name %}. The snapshot data format is very similar to the standard SPDX and CycloneDX SBOM formats, and there are several tools which can generate or translate formats for use as snapshots.

>[!TIP] The [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) and the [Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) can be used to both generate a SBOM and submit it to the {% data variables.dependency-submission-api.name %}.

For example, the following [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) workflow calculates the dependencies for a repository, generates an exportable SBOM in SPDX 2.2 format, and submits it to the {% data variables.dependency-submission-api.name %}.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}
name: SBOM upload

on:
  workflow_dispatch:
  push:
    branches: ["main"]

jobs:
  SBOM-upload:

    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write

    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Generate SBOM
      # generation command documentation: https://github.com/microsoft/sbom-tool#sbom-generation
      run: |
        curl -Lo $RUNNER_TEMP/sbom-tool https://github.com/microsoft/sbom-tool/releases/latest/download/sbom-tool-linux-x64
        chmod +x $RUNNER_TEMP/sbom-tool
        $RUNNER_TEMP/sbom-tool generate -b . -bc . -pn ${{ github.repository }} -pv 1.0.0 -ps OwnerName -nsb https://sbom.mycompany.com -V Verbose
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: sbom
        path: _manifest/spdx_2.2
    - name: SBOM upload
      uses: advanced-security/spdx-dependency-submission-action@5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e
      with:
        filePath: "_manifest/spdx_2.2/"
```
