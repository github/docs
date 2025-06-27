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

{% data variables.product.prodname_ghe_cloud %} is a developer platform that supports the entire software development lifecycle, including planning work, automating tests and deployments, and keeping code secure. To learn about available features, see [AUTOTITLE](/enterprise-cloud@latest/admin/overview/feature-overview-for-github-enterprise-cloud).

## Currently unavailable features

The following features are currently unavailable on {% data variables.enterprise.data_residency_site %}.

| Feature | Details | More information |
| :- | :- | :- |
| {% data variables.product.prodname_github_codespaces %} | Currently unavailable. | [AUTOTITLE](/codespaces/quickstart) |
| {% data variables.product.prodname_marketplace %} | Currently, apps from {% data variables.product.prodname_marketplace %} are unavailable. {% data variables.product.prodname_actions %} workflows from {% data variables.product.prodname_marketplace %} may not function as expected. For more information, see [GitHub Actions workflows from GitHub Marketplace](#github-actions-workflows-from-github-marketplace). | [AUTOTITLE](/search-github/searching-on-github/searching-github-marketplace) | [AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features) in the {% data variables.product.prodname_ghe_server %} documentation |
| macOS runners for {% data variables.product.prodname_actions %} | Currently unavailable. | [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners) |
| Maven and Gradle support for {% data variables.product.prodname_registry %} | Currently unavailable. | [AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry) |
| {% data variables.product.prodname_importer %} (the "Import repository" button on {% data variables.product.prodname_dotcom_the_website %}) | Instead, the **{% data variables.product.prodname_importer_proper_name %}** is available to migrate data. See [AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer). | [AUTOTITLE](/migrations/importing-source-code/using-github-importer/about-github-importer) |
| {% data variables.product.prodname_copilot %} Workspaces | Currently unavailable | N/A |
| {% data variables.copilot.copilot_extensions %} | Currently unavailable | [AUTOTITLE](/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat) |
| {% data variables.product.prodname_copilot_short %} Metrics API | Currently unavailable | [AUTOTITLE](/rest/copilot/copilot-metrics) |
| {% data variables.copilot.copilot_coding_agent %} | Currently unavailable | [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot) |
| Restricting {% data variables.product.prodname_actions %} policies to verified creators | Currently unavailable | [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allow-enterprise-and-select-non-enterprise-actions-and-reusable-workflows) |
| Billing for premium requests in {% data variables.product.prodname_copilot_short %} | Currently unavailable | [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/understanding-and-managing-requests-in-copilot) |
| {% data variables.product.prodname_github_models %} |  Currently unavailable | [AUTOTITLE](/github-models/about-github-models) |
| Some features currently in {% data variables.release-phases.public_preview %} or {% data variables.release-phases.private_preview %} | Certain features that are in a preview phase on {% data variables.product.prodname_dotcom_the_website %} may not be available on {% data variables.enterprise.data_residency_site %} | |

## Features that work differently

The following features are either specific to {% data variables.enterprise.data_residency_site %} or work differently compared to {% data variables.product.prodname_dotcom_the_website %}.

* [API access](#api-access)
* [URL differences](#url-differences)
* [{% data variables.product.prodname_actions %} workflows from {% data variables.product.prodname_marketplace %}](#github-actions-workflows-from-github-marketplace)
* [Retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website %}](#retirement-of-namespaces-for-actions-accessed-on-githubcom)
* [GitHub Connect](#github-connect)

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
