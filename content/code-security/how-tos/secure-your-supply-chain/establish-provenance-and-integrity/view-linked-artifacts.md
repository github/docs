---
title: Auditing your organization's builds on the {% data variables.product.virtual_registry %}
intro: "View or export metadata for build runs, storage details, and deployment context."
versions:
  feature: virtual-registry
topics:
  - Vulnerabilities
  - Dependencies
contentType: concepts
product: 'Organization accounts on any plan'
permissions: 'Anyone with read access to an organization-owned repository'
shortTitle: View linked artifacts
---

You can use the {% data variables.product.virtual_registry %} to connect your organization's artifacts to their build details, deployment context, and security metadata. The {% data variables.product.virtual_registry %} collects metadata for artifacts built with {% data variables.product.prodname_actions %} in your organization's repositories, regardless of whether the artifacts are stored on {% data variables.product.github %}. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/linked-artifacts).

## Viewing an artifact

{% data reusables.package_registry.package-settings-from-org-level %}
1. In the left sidebar, click **Linked artifacts**.
1. Click the artifact you want to view.
1. On the artifact's page, you can:

   * View the artifact's deployment history and registry storage details
   * Click through to the repository where the artifact's source code is defined
   * If available, click on the artifact's provenance attestation to find the workflow run that was used to build the artifact

For more information about how data enters the {% data variables.product.virtual_registry %}, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts).

## Exporting artifact metadata

To export metadata in bulk for an audit, use the [List artifact deployment records](/rest/orgs/artifact-metadata#list-artifact-deployment-records) and [List artifact storage records](/rest/orgs/artifact-metadata#list-artifact-storage-records) endpoints of the artifact metadata API.
