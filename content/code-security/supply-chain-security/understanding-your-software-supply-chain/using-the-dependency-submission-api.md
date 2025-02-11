---
title: Using the dependency submission API
intro: 'You can use the {% data variables.dependency-submission-api.name %} to submit dependencies for projects, such as the dependencies resolved when a project is built or compiled.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About the {% data variables.dependency-submission-api.name %}

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the {% data variables.dependency-submission-api.name %} in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit. Snapshots can be generated from your dependencies detected at build time or from a software bill of materials (SBOM). There are {% data variables.product.prodname_actions %} that support either of these use cases. For more information about the {% data variables.dependency-submission-api.name %}, see [AUTOTITLE](/rest/dependency-graph/dependency-submission).

## Submitting dependencies at build-time

You can use the {% data variables.dependency-submission-api.name %} in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built.

### Using pre-made actions

{% data reusables.dependency-submission.api-premade-actions %}

For more information about these actions, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#package-ecosystems-supported-via-dependency-submission-actions).

### Creating your own action

Alternatively, you can write your own action to submit dependencies for your project at build-time. Your workflow should:

  1. Generate a list of dependencies for your project.
  1. Translate the list of dependencies into the snapshot format accepted by the {% data variables.dependency-submission-api.name %}. For more information about the format, see the body parameters for the "Create a repository snapshot" API endpoint in [AUTOTITLE](/rest/dependency-graph/dependency-submission).
  1. Submit the formatted list of dependencies to the {% data variables.dependency-submission-api.name %}.

{% data variables.product.github %} maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you build your own GitHub Action for submitting dependencies to the {% data variables.dependency-submission-api.name %}. For more information about writing an action, see [AUTOTITLE](/actions/creating-actions).

## Generating and submitting a software bill of materials (SBOM)

{% data reusables.dependency-graph.sbom-intro %}

### Generating a software bill of materials (SBOM)

To generate an SBOM, you can use:
* The **{% data variables.product.prodname_dotcom %} UI**. For more information about how to export an SBOM for a repository using information from the dependency graph, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository).
* The **REST API**. For more information, see [AUTOTITLE](/rest/dependency-graph/sboms).
* **{% data variables.product.prodname_actions %}**. The following actions will generate an SBOM for your repository and attach it as a workflow artifact which you can download and use in other applications. For more information about downloading workflow artifacts, see [AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts).

Action | Details |
--- | --- |
[Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) | Uses [Syft](https://github.com/anchore/syft) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/anchore/syft#supported-ecosystems)  |
[sbom-tool by Microsoft](https://github.com/microsoft/sbom-tool) | Scans your dependencies and creates an SPDX compatible SBOM |

### Submitting a software bill of materials (SBOM) to the {% data variables.dependency-submission-api.name %}

To receive {% data variables.product.prodname_dependabot_alerts %} for dependencies that have known vulnerabilities, you can upload and submit the SBOM to the {% data variables.dependency-submission-api.name %}. To submit an SBOM to the {% data variables.dependency-submission-api.name %}, you can use one of the actions in the following table.

>[!TIP] The [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) and the [Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) can be used to both generate the SBOM and submit it to the {% data variables.dependency-submission-api.name %}.

Action | Details |
---  | --- |
[SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) | Uses [Microsoft's SBOM Tool](https://github.com/microsoft/sbom-tool) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/microsoft/component-detection/blob/main/docs/feature-overview.md) |
[Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) | Uses [Syft](https://github.com/anchore/syft) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/anchore/syft#supported-ecosystems)  |
[SBOM Dependency Submission Action](https://github.com/marketplace/actions/sbom-submission-action)| Uploads a CycloneDX SBOM to the {% data variables.dependency-submission-api.name %} |

For example, the following [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) workflow calculates the dependencies for a repository, generates an exportable SBOM in SPDX 2.2 format, and submits it to the {% data variables.dependency-submission-api.name %}.

```yaml

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
