---
title: Exporting a software bill of materials for your repository
intro: You can export a software bill of materials or SBOM for your repository from the dependency graph. SBOMs allow transparency into your open source usage and help expose supply chain vulnerabilities, reducing supply chain risks.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: 'Anyone can export the dependency graph of a repository as a software bill of materials. The SBOM export will contain a list of the dependencies that are used in the repository.'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Export dependencies as SBOM
---

## About the dependency graph and SBOM exports

{% data reusables.dependabot.about-the-dependency-graph %}

You can export the current state of the dependency graph for your repository as a Software Bill of Materials (SBOM) using the industry standard [SPDX](https://spdx.github.io/spdx-spec/v2.3/) format:
- Via the {% data variables.product.prodname_dotcom %} UI
- Using the REST API

{% data reusables.dependency-graph.sbom-intro %}

If your company provides software to the US federal government per [Executive Order 14028](https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/information-technology-category/it-security/executive-order-14028), you will need to provide an SBOM for your product. You can also use SBOMs as part of your audit process and use them to comply with regulatory and legal requirements.

## Exporting a software bill of material for your repository from the UI

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Dependency graph**.
1. On the top right side of the **Dependencies** tab, click **Export SBOM** to generate an SBOM file for download from your browser.

## Exporting a software bill of material for your repository using the REST API

If you want to use the REST API to export an SBOM for your repository, see "[AUTOTITLE](/rest/dependency-graph/sboms#export-a-software-bill-of-materials-sbom-for-a-repository)."
