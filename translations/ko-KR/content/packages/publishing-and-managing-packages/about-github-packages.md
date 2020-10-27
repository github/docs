---
title: About GitHub Packages
intro: '{% data variables.product.prodname_registry %} is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### About {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} is a platform for hosting and managing packages, including containers and other dependencies. {% data variables.product.prodname_registry %} combines your source code and packages in one place to provide integrated permissions management and billing, so you can centralize your software development on {% data variables.product.product_name %}.

You can integrate {% data variables.product.prodname_registry %} with {% data variables.product.product_name %} APIs, {% data variables.product.prodname_actions %}, and webhooks to create an end-to-end DevOps workflow that includes your code, CI, and deployment solutions.

{% data variables.product.prodname_registry %} offers different package registries for commonly used packages, such as for Node, RubyGems, Apache Maven, Gradle, and Nuget.

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_registry %} also offers a {% data variables.product.prodname_container_registry %} designed to support the unique needs of container images. For more information, see "[About {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

#### Viewing packages

You can review the package's README, some metadata like licensing, download statistics, version history, and more on {% data variables.product.product_name %}. For more information, see "[Viewing packages](/packages/publishing-and-managing-packages/viewing-packages)."

#### About package permissions and visibility
{% if currentVersion == "free-pro-team@latest" %}
|                   | Package registries                                                                                                                                                                                                                                                                             | {% data variables.product.prodname_github_container_registry %}
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                              | You can host multiple container images in one organization or user account.                                                                                                            |
| Permissions       | Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. | For each container image, you can choose the access level that others have. The permissions for container image access are separate from your organization and repository permissions. |
 Visibility | {% data reusables.package_registry.public-or-private-packages %} | You can set the visibility of each of your container images. A private container image is only visible to people and teams who are given access within your organization. A public container image is visible to anyone. | Anonymous access | N/A | You can access public container images anonymously.

{% else %}
|                   | Package registries                                                                                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                              |
| Permissions       | Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. |
| Visibility        | {% data reusables.package_registry.public-or-private-packages %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

For more information about permissions and visibility for {% data variables.product.prodname_github_container_registry %}, see "[Configuring access control and visibility for containers](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### About billing for {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} For more information, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### Supported clients and formats

{% data variables.product.prodname_registry %} uses the native package tooling commands you're already familiar with to publish and install package versions.

{% if currentVersion == "free-pro-team@latest" %}
#### Support for {% data variables.product.prodname_github_container_registry %}

The {% data variables.product.prodname_github_container_registry %} hosts containers at `ghcr.io/OWNER/IMAGE-NAME`.

| Package client | Language | Package format | 설명                        |
| -------------- | -------- | -------------- | ------------------------- |
| Docker CLI     | N/A      | `Dockerfile`   | Docker container support. |
For more information about the container support offered by

{% data variables.product.prodname_github_container_registry %}, see "[About {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."
{% endif %}

#### Support for package registries

{% if currentVersion == "free-pro-team@latest" %}
Package registries use `PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL, replacing `PACKAGE-TYPE` with the Package namespace. For example, your Gemfile will be hosted at `rubygem.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`.

{% else %}

The package types supported on {% data variables.product.product_location_enterprise %} may vary since your site administrator can enable or disable support for different package types. For more information, see "[Managing GitHub Packages for your enterprise](/enterprise/admin/packages)."

If {% data variables.product.product_location_enterprise %} has subdomain isolation enabled, then package registries will use `PACKAGE-TYPE.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL, replacing `PACKAGE-TYPE` with the Package namespace. For example, your Dockerfile will be hosted at `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`.

If {% data variables.product.product_location_enterprise %} has subdomain isolation disabled, then package registries will use `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL. For example, your Gemfile will be hosted at `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME`, replacing *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance. |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| Language   | 설명                                                     | Package format                       | Package client | Package namespace                                     |
| ---------- | ------------------------------------------------------ | ------------------------------------ | -------------- | ----------------------------------------------------- |
| JavaScript | Node package manager                                   | `package.json`                       | `npm`          | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGems package manager                               | `Gemfile`                            | `gem`          | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Maven project management and comprehension tool | `pom.xml`                            | `mvn`          | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`          |
| Java       | Gradle build automation tool for Java                  | `build.gradle` or `build.gradle.kts` | `gradle`       | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`          |
| .NET       | NuGet package management for .NET                      | `nupkg`                              | `dotnet` CLI   | `nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

With subdomain isolation enabled on {% data variables.product.product_location_enterprise %}:

| Language   | 설명                                                     | Package format                       | Package client | Package namespace                               |
| ---------- | ------------------------------------------------------ | ------------------------------------ | -------------- | ----------------------------------------------- |
| JavaScript | Node package manager                                   | `package.json`                       | `npm`          | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGems package manager                               | `Gemfile`                            | `gem`          | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Maven project management and comprehension tool | `pom.xml`                            | `mvn`          | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Gradle build automation tool for Java                  | `build.gradle` or `build.gradle.kts` | `gradle`       | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | NuGet package management for .NET                      | `nupkg`                              | `dotnet` CLI   | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| N/A        | Docker container management                            | `Dockerfile`                         | `Docker`       | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

With subdomain isolation disabled on {% data variables.product.product_location_enterprise %}:

| Language   | 설명                                                     | Package format                       | Package client | Package namespace                                         |
| ---------- | ------------------------------------------------------ | ------------------------------------ | -------------- | --------------------------------------------------------- |
| JavaScript | Node package manager                                   | `package.json`                       | `npm`          | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGems package manager                               | `Gemfile`                            | `gem`          | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Maven project management and comprehension tool | `pom.xml`                            | `mvn`          | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Gradle build automation tool for Java                  | `build.gradle` or `build.gradle.kts` | `gradle`       | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | NuGet package management for .NET                      | `nupkg`                              | `dotnet` CLI   | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**Note:** Docker is not supported when subdomain isolation is disabled.

{% endnote %}

For more information about subdomain isolation, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)."

{% endif %}

For more information about configuring your package client for use with {% data variables.product.prodname_registry %}, see "[Using {% data variables.product.prodname_registry %} with your project's ecosystem](/packages/using-github-packages-with-your-projects-ecosystem)."

### Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### About scopes and permissions for {% data variables.product.prodname_github_container_registry %}

| 범위                | 설명                                                                                                                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `read:packages`   | Download and install container images from {% data variables.product.prodname_github_container_registry %}
| `write:packages`  | Upload and publish container images to {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | Delete specified versions of private or public container images from {% data variables.product.prodname_github_container_registry %}. For more information, see "[Deleting a container image](/packages/managing-container-images-with-github-container-registry/deleting-a-container-image)." |

To learn about available scopes and permissions for container images, see "[About {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)" or "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token/)" and "[Available scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)."

{% endif %}

### About scopes and permissions for package registries

To use or manage a package hosted by a package registry, you must use a token with the appropriate scope, and your user account must have appropriate permissions for that repository.

예시:
-  To download and install packages from a repository, your token must have the `read:packages` scope, and your user account must have read permissions for the repository. If the repository is private, your token must also have the `repo` scope.
- To delete a specified version of a private package on {% data variables.product.product_name %}, your token must have the `delete:packages` and `repo` scope. Public packages cannot be deleted. For more information, see "[Deleting a package](/packages/publishing-and-managing-packages/deleting-a-package)."

| 범위                | 설명                                                                                                                                        | Repository permissions |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `read:packages`   | Download and install packages from {% data variables.product.prodname_registry %}                                                         | read                   |
| `write:packages`  | Upload and publish packages to {% data variables.product.prodname_registry %}                                                             | write                  |
| `delete:packages` | Delete specified versions of private packages from {% data variables.product.prodname_registry %}                                         | admin                  |
| `repo`            | Install, upload, and delete certain packages in private repositories (along with `read:packages`, `write:packages`, or `delete:packages`) | read, write, or admin  |

When you create a {% data variables.product.prodname_actions %} workflow, you can use the `GITHUB_TOKEN` to publish and install packages in {% data variables.product.prodname_registry %} without needing to store and manage a personal access token.

For more information, see:
- "[Using {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}](/packages/using-github-packages-with-your-projects-ecosystem/)"
- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Available scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

### Managing packages

You can a delete a version of a private package on {% data variables.product.product_name %} or using the GraphQL API. When you use the GraphQL API to query and delete private packages, you must use the same token you use to authenticate to {% data variables.product.prodname_registry %}. For more information, see "[Deleting a package](/packages/publishing-and-managing-packages/deleting-a-package)" and "[Forming calls with GraphQL](/v4/guides/forming-calls/)."

You can configure webhooks to subscribe to package-related events, such as when a package is published or updated. For more information, see the "[`package` webhook event](/webhooks/event-payloads/#package)."

### Contacting support

{% if currentVersion == "free-pro-team@latest" %}
If you have feedback or feature requests for
{% data variables.product.prodname_registry %}, use the [feedback form for {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Contact {% data variables.contact.github_support %} about {% data variables.product.prodname_registry %} using [our contact form](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) if:

* You experience anything that contradicts the documentation
* You encounter vague or unclear errors
* Your published package contains sensitive data, such as GDPR violations, API Keys, or personally identifying information

{% else %}
If you need support for
{% data variables.product.prodname_registry %}, please contact your site administrators.

{% endif %}
