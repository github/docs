---
title: Introduction to GitHub Packages
intro: '{% data variables.product.prodname_registry %} is a software package hosting service that allows you to host your software packages privately {% ifversion ghae %} for specified users or internally for your enterprise{% else %}or publicly{% endif %} and use packages as dependencies in your projects.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## About {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} is a platform for hosting and managing packages, including containers and other dependencies. {% data variables.product.prodname_registry %} combines your source code and packages in one place to provide integrated permissions management{% ifversion fpt or ghec %} and billing{% endif %}, so you can centralize your software development on {% data variables.product.product_name %}.

You can integrate {% data variables.product.prodname_registry %} with {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs, {% data variables.product.prodname_actions %}, and webhooks to create an end-to-end DevOps workflow that includes your code, CI, and deployment solutions.

{% data variables.product.prodname_registry %} offers different package registries for commonly used package managers, such as npm, RubyGems, Apache Maven, Gradle, Docker, and NuGet. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}'s {% data variables.product.prodname_container_registry %} is optimized for containers and supports Docker and OCI images.{% endif %} For more information on the different package registries that {% data variables.product.prodname_registry %} supports, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry)."

You can view a package's README, as well as metadata such as licensing, download statistics, version history, and more on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages)."

{% ifversion ghes %}

For more information about the configuration of {% data variables.product.prodname_registry %} on {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

{% endif %}

### Overview of package permissions

{% ifversion packages-registries-v2 %}

The permissions for a package are either inherited from the repository where the package is hosted, or can be defined for specific users or organizations. Some registries only support permissions inherited from a repository. For a list of these registries, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)." For more information on package access, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

{% else %}

Each package inherits the permissions of the repository where the package is hosted.

For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version.

{% endif %}

### Overview of package visibility

{% data reusables.package_registry.public-or-private-packages %}

{% ifversion fpt or ghec %}

## About billing for {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% endif %}

## Supported clients and formats
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %} uses the native package tooling commands you're already familiar with to publish and install package versions.

### Support for package registries

| Language | Description | Package format | Package client |
| --- | --- | --- | --- |
| JavaScript | Node package manager | `package.json`  | `npm` |
| Ruby |  RubyGems package manager | `Gemfile` |  `gem` |
| Java | Apache Maven project management and comprehension tool | `pom.xml` |  `mvn` |
| Java | Gradle build automation tool for Java | `build.gradle` or `build.gradle.kts`  | `gradle`  |
| .NET | NuGet package management for .NET | `nupkg`  |  `dotnet` CLI |
| N/A | Docker container management | `Dockerfile` | `Docker` |

{% ifversion ghes %}
{% note %}

**Note:** When enabling the Docker registry, we highly recommend also enabling subdomain isolation. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)."

{% endnote %}

{% endif %}

For more information about configuring your package client for use with {% data variables.product.prodname_registry %}, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry)."

{% ifversion fpt or ghec %}
For more information about Docker and the {% data variables.product.prodname_container_registry %}, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."
{% endif %}

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## Managing packages

You can delete a package in the {% data variables.product.product_name %} user interface{% ifversion packages-rest-api %} or using the REST API. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)" and the "[AUTOTITLE](/rest/packages)."{% else %}.{% endif %} {% data reusables.package_registry.about-graphql-support %}

When you use the GraphQL API to query and delete private packages, you must use the same {% data variables.product.pat_v1 %} you use to authenticate to {% data variables.product.prodname_registry %}.

For more information, see {% ifversion ghes or ghae %}"[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)" and {% endif %}"[AUTOTITLE](/graphql/guides/forming-calls-with-graphql)."

You can configure webhooks to subscribe to package-related events, such as when a package is published or updated. For more information, see the "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#package)."

## Contacting support

{% ifversion fpt or ghec %}
If you have feedback or feature requests for {% data variables.product.prodname_registry %}, use a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Contact us through the {% data variables.contact.contact_support_portal %} about {% data variables.product.prodname_registry %} if:

- You experience anything that contradicts the documentation
- You encounter vague or unclear errors
- Your published package contains sensitive data, such as GDPR violations, API Keys, or personally identifying information

{% else %}
If you need support for {% data variables.product.prodname_registry %}, please contact your site administrators.

{% endif %}
