---
title: Removing artifacts from the {% data variables.product.virtual_registry %}
intro: "Set the storage and deployment status of artifacts to reflect that they are no longer in use."
versions:
  feature: virtual-registry
topics:
  - Vulnerabilities
  - Dependencies
contentType: concepts
product: 'Organization accounts on any plan'
permissions: 'Write access to the repository where an artifact is built'
shortTitle: Remove linked artifacts
---

It is **not possible** to delete an artifact from the {% data variables.product.virtual_registry %}. However, if an artifact has been removed from your organization's registry or is no longer deployed anywhere, you can update an artifact's storage or deployment record to reflect its status.

## Updating a storage record

When you delete an artifact from your external registry, you can use the [Create artifact metadata storage record](/rest/orgs/artifact-metadata#create-artifact-metadata-storage-record) API endpoint to set the status of an existing artifact to `deleted`. You can also mark an artifact as `eol`.

This information is displayed as a tag next to the artifact repository name.

![Screenshot of the artifact page. The "deleted" tag is highlighted in orange.](/assets/images/help/security/virtual-registry-deleted.png)

If you have deleted an artifact from a registry, you should also remove any attestations associated with the artifact. See [AUTOTITLE](/actions/how-tos/secure-your-work/use-artifact-attestations/manage-attestations).

## Updating a deployment record

When an artifact stops being deployed in a given environment, you can use the [Create an artifact deployment record](/rest/orgs/artifact-metadata#create-an-artifact-deployment-record) API endpoint to set the deployment's status to `decommissioned`.

This information is reflected in the icon next to the deployment record.

![Screenshot of the artifact page. A cloud icon with a line through it is highlighted in orange.](/assets/images/help/security/virtual-registry-decommissioned.png)
