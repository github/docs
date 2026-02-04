---
title: Feature overview for GitHub Enterprise Cloud with data residency
shortTitle: Which features are available?
intro: "Learn about the available features on {% data variables.enterprise.data_residency_site %}, plus features that work differently from {% data variables.product.prodname_dotcom_the_website %}."
versions:
  ghec: '*'
redirect_from:
  - /early-access/admin/data-residency-for-github-enterprise-cloud/feature-overview-for-github-enterprise-cloud-with-data-residency
---

{% data reusables.data-residency.data-resident-enterprise-feature-availability %} Some features work differently or require additional configuration compared to the equivalent feature on {% data variables.product.prodname_dotcom_the_website %}.

## Available features

{% data variables.product.prodname_ghe_cloud %} is a developer platform that supports the entire software development lifecycle, including planning work, automating tests and deployments, and keeping code secure. To learn about available features, see [{% data variables.product.company_short %}'s plans page](https://github.com/pricing).

## Currently unavailable features

The following features are currently unavailable on {% data variables.enterprise.data_residency_site %}, but may be planned for future development.

| Feature | Details | More information |
| :- | :- | :- |
| macOS runners for {% data variables.product.prodname_actions %} | Currently unavailable. | [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners) |
| Maven and Gradle support for {% data variables.product.prodname_registry %} | Currently unavailable. | [AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry) |
| Repository traffic metrics | Currently unavailable through both the UI and REST API. | [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository) |
| {% data variables.product.prodname_spark_short %} | Currently unavailable. | [AUTOTITLE](/copilot/concepts/spark) |
| {% data variables.product.prodname_marketplace %} | {% data variables.product.prodname_marketplace %}, as a means of searching for, purchasing, and directly installing apps and actions, is unavailable. Ecosystem apps and actions can still be discovered and installed from their source, but they may require modification to work on {% data variables.enterprise.data_residency_site %}. | [{% data variables.product.prodname_actions %} workflows from {% data variables.product.prodname_marketplace %}](#github-actions-workflows-from-github-marketplace) |
| Certain features of {% data variables.product.prodname_github_connect %} | Although you can connect an enterprise on {% data variables.enterprise.data_residency_site %} to a {% data variables.product.prodname_ghe_server %} instance, certain features of {% data variables.product.prodname_github_connect %} are not available, including resolution of actions from {% data variables.product.prodname_dotcom_the_website %}. | [{% data variables.product.prodname_github_connect %}](#github-connect) |
| Some features currently in {% data variables.release-phases.public_preview %} or {% data variables.release-phases.private_preview %} | Certain features that are in a preview phase on {% data variables.product.prodname_dotcom_the_website %} may not be available on {% data variables.enterprise.data_residency_site %} until GA. | |

## Permanently unavailable features

By design, the following features are permanently unavailable on {% data variables.enterprise.data_residency_site %}. This is generally because they are not intended for large enterprises with strict compliance requirements.

| Feature | Details | More information |
| :- | :- | :- |
| Features unavailable with {% data variables.product.prodname_emus %} | Because {% data variables.product.prodname_emus %} is the only option for identity management on {% data variables.enterprise.data_residency_site %}, features that are unavailable with {% data variables.product.prodname_emus %} on {% data variables.product.prodname_dotcom_the_website %} are also unavailable on {% data variables.enterprise.data_residency_site %}. Notably, these include gists and public repositories. | [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts) |
| {% data variables.product.prodname_importer %} (the "Import repository" button on {% data variables.product.prodname_dotcom_the_website %}) | Instead, the **{% data variables.product.prodname_importer_proper_name %}** is available to migrate data. See [AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer). | [AUTOTITLE](/migrations/importing-source-code/using-github-importer/about-github-importer) |

## Features that work differently

The following features are either specific to {% data variables.enterprise.data_residency_site %} or work differently compared to {% data variables.product.prodname_dotcom_the_website %}.

* [API access](#api-access)
* [URL differences](#url-differences)
* [{% data variables.product.prodname_actions %} workflows from {% data variables.product.prodname_marketplace %}](#github-actions-workflows-from-github-marketplace)
* [Retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website %}](#retirement-of-namespaces-for-actions-accessed-on-githubcom)
* [GitHub Connect](#github-connect)
* [{% data variables.product.prodname_github_codespaces %}](#github-codespaces)

### API access

{% data reusables.data-residency.data-resident-enterprises-api-access %} For more information, see [AUTOTITLE](/admin/data-residency/about-github-enterprise-cloud-with-data-residency#api-access).

### URL differences

The URL formats for certain features and services vary between {% data variables.product.prodname_dotcom_the_website %} and {% data variables.enterprise.data_residency_site %}. If you're migrating to {% data variables.enterprise.data_residency_site %} and have automations or integrations that depend on URL values for {% data variables.product.prodname_dotcom_the_website %}, you will need to updates these values.

The following examples are not exhaustive.

{% rowheaders %}

| Feature | Example on {% data variables.product.prodname_dotcom_the_website %} | Example on {% data variables.enterprise.data_residency_site %} |
| ------ | ------------ | ----------- |
| {% data variables.product.prodname_registry %} | The {% data variables.product.prodname_container_registry %} is located at {% data variables.product.prodname_container_registry_namespace %}. | The {% data variables.product.prodname_container_registry %} is located at `https://containers.SUBDOMAIN.ghe.com`. |
| User provisioning | The "tenant URL" for Microsoft Entra ID is `https://api.github.com/scim/v2/enterprises/ENTERPRISE` | The "tenant URL" for Microsoft Entra ID is `https://api.SUBDOMAIN.ghe.com/scim/v2/enterprises/SUBDOMAIN` |
| OIDC trusts for {% data variables.product.prodname_actions %} deployments | The OIDC token is issued from `https://token.actions.githubusercontent.com`. | The OIDC token is issued from `https://token.actions.SUBDOMAIN.ghe.com` |
| Raw URLs | `https://raw.githubusercontent.com/` | `https://raw.SUBDOMAIN.ghe.com/` |
| Anonymized URLs for images and videos | `https://private-user-images.githubusercontent.com/` | `https://SUBDOMAIN.ghe.com/user-attachments/assets/` |

{% endrowheaders %}

### {% data variables.product.prodname_actions %} workflows from {% data variables.product.prodname_marketplace %}

{% data variables.product.prodname_actions %} workflows from the {% data variables.product.prodname_marketplace %} may not work as users expect.

* Some actions hard-code API calls to api.github.com, which don't currently work for enterprises on {% data variables.enterprise.data_residency_site %}.
* Some actions make requests to resources on {% data variables.location.product_location %}, and these actions will **not** work for enterprises on {% data variables.enterprise.data_residency_site %} unless the author has built a mechanism to inject a secondary token for API calls. A `GITHUB_TOKEN` within a workflow run for your enterprise on {% data variables.enterprise.data_residency_site %} does not grant access to resources on {% data variables.location.product_location %}.

### Retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.namespace-retirement-ghecom %}

To allow people to use namespaces that match actions you have used from {% data variables.product.prodname_dotcom_the_website %}, you can make a retired namespace available. See [AUTOTITLE](/actions/administering-github-actions/making-retired-namespaces-available-on-ghecom).

### {% data variables.product.prodname_github_connect %}

You can use {% data variables.product.prodname_github_connect %} to connect to {% data variables.enterprise.data_residency_site %} from {% data variables.product.prodname_ghe_server %}.

* {% data variables.product.prodname_server_statistics %} is not available.
* {% data variables.product.prodname_dotcom_the_website %} actions are not available.
* Automatic user license sync requires {% data variables.product.prodname_ghe_server %} version 3.15 or later.

To enable {% data variables.product.prodname_github_connect %}, you must configure your {% data variables.product.prodname_ghe_server %} instance to connect to your {% data variables.enterprise.data_residency_site %} subdomain. See [AUTOTITLE](/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom).

## Features in {% data variables.release-phases.public_preview %}

Some features on {% data variables.enterprise.data_residency_site %} are currently in {% data variables.release-phases.public_preview %}.

### {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} on {% data variables.enterprise.data_residency_site %} are in {% data variables.release-phases.public_preview %}.
