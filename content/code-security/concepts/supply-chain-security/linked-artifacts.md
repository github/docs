---
title: About linked artifacts
intro: "The {% data variables.product.virtual_registry %} helps you audit and prioritize your organization's builds on {% data variables.product.github %}, regardless of where the artifacts are stored."
versions:
  feature: virtual-registry
shortTitle: 'Linked artifacts'
topics:
  - Vulnerabilities
  - Dependencies
contentType: concepts
---

The {% data variables.product.virtual_registry %} provides a unified view of software artifacts that your organization builds with {% data variables.product.prodname_actions %}, such as container images, packages, or builds of your production code.

The page shows you how an artifact was built, where it is stored or running, and which compliance and security metadata is associated with the artifact.

Teams in your organization can use the {% data variables.product.virtual_registry %} to:

* Prioritize alerts from {% data variables.product.prodname_GHAS %} features based on whether the detected vulnerabilities are running in production or exposed to the internet
* Quickly connect artifacts to build details, storage locations, and owning teams
* Meet compliance by exporting auditable proof of your artifacts' provenance and integrity

## Which artifacts appear on the {% data variables.product.virtual_registry %}?

The {% data variables.product.virtual_registry %} is unique to each organization. It contains metadata for artifacts that have been built with {% data variables.product.prodname_actions %} in your organization's repositories. It does **not** display artifacts your organization consumes from elsewhere, such as open source dependencies.

Artifact records are uploaded by your organization using either a public API or an integration with an external registry. The {% data variables.product.virtual_registry %} does not store the artifact files themselves. It just provides an authoritative source for the metadata associated with each artifact.

Because an artifact does not need to be stored on {% data variables.product.github %} to appear in the {% data variables.product.virtual_registry %}, you can use the {% data variables.product.virtual_registry %} alongside your preferred package registry, such as JFrog Artifactory or {% data variables.product.prodname_registry %}.

## Which metadata is included?

The {% data variables.product.virtual_registry %} combines data from two different types of record: storage records and deployment records. These records are uploaded using different API endpoints or integrations.

### Storage records

Storage records include the repository containing the artifact's source code, the registry where the artifact is stored, and any attestations proving the artifact's integrity and provenance. You can use this data to quickly find an artifact's owning team and build details.

![Screenshot of an artifact page. Highlighted fields: storage registry, artifact repository, source repository.](/assets/images/help/security/virtual-registry-storage-record.png)

The _artifact repository_ is not mandatory. It refers to the concept of a repository in certain external package registries: a place where multiple packages can be grouped. By contrast, the _source repository_ refers to the {% data variables.product.github %} repository where the artifact is built. The source repository is mandatory, and is detected automatically if the artifact has a build provenance attestation.

For more information about attestations and SLSA levels, see [AUTOTITLE](/actions/concepts/security/artifact-attestations).

### Deployment records

Deployment records include the environment where the artifact is deployed and any runtime risks (such as "sensitive data" or "internet exposed") associated with the artifact. You can use this data to filter security alerts based on the level of threat posed to your organization and consumers.

![Screenshot of an artifact page. Highlighted fields: the "Deployments" list, including tags for "Prod", "sensitive data", and "pacific-east".](/assets/images/help/security/virtual-registry-deployment-record.png)

>[!NOTE] Deployment records do **not** include deployment activity from a repository's deployments dashboard, which comes from a different source. See [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository).

## How does the {% data variables.product.virtual_registry %} fit into my processes?

This example workflow shows how the {% data variables.product.virtual_registry %} integrates with other {% data variables.product.github %} features and external systems.

1. A developer commits code to a {% data variables.product.github %} repository where the code for a software package is defined.
1. A {% data variables.product.prodname_actions %} workflow in the repository automatically:

   1. Builds the package.
   1. Pushes the package to your chosen registry, such as {% data variables.product.prodname_registry %} or JFrog Artifactory.
   1. Creates a cryptographically signed provenance attestation, linking the package to the repository, commit, and workflow used to build the package.
   1. Deploys the package to a staging or production environment. Your deployment system may be gated to ensure that only attested artifacts can be deployed to production, for example using the Kubernetes Admissions Controller.

1. Metadata for the package, such as its linked repository, attestations, and deployment history, is uploaded to the {% data variables.product.virtual_registry %}.
1. Using the data from the {% data variables.product.virtual_registry %}, a security lead triages code scanning and Dependabot alerts, and creates a campaign to address alerts that affect production environments or have a specific runtime risk.
1. When an audit is required, a member of the compliance team exports SBOMs, provenance details, and deployment records for all your organization's linked artifacts from a single source.

## Next steps

To add records to your organization's {% data variables.product.virtual_registry %}, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts).

To view the {% data variables.product.virtual_registry %} for your organization, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/view-linked-artifacts).
