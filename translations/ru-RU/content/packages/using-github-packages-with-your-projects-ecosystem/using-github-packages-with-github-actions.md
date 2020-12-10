---
title: Using GitHub Packages with GitHub Actions
intro: 'You can configure a workflow in {% data variables.product.prodname_actions %} to automatically publish or install a package from {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### About {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} For more information, see "[About {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)."

You can extend the CI and CD capabilities of your repository by publishing or installing packages as part of your workflow.

{% if currentVersion == "free-pro-team@latest" %}
#### Authenticating to {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

For an authentication example, see "[Authenticating with the {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)."

{% endif %}

#### Authenticating to package registries on {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}If you want your workflow to authenticate to {% data variables.product.prodname_registry %} to access a package registry other than the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, then{% else %}To authenticate to package registries on {% data variables.product.product_name %},{% endif %} we recommend using the `GITHUB_TOKEN` that {% data variables.product.product_name %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %} instead of a personal access token for authentication. The `GITHUB_TOKEN` has `read:packages` and `write:packages` scopes to the current repository. For forks, the token also has the `read:packages` scope for the parent repository.

You can reference the `GITHUB_TOKEN` in your workflow file using the {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} context. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

### Publishing a package using an action

You can publish packages as part of your continuous integration (CI) flow using {% data variables.product.prodname_actions %}. For example, you could configure a workflow so that anytime a developer pushes code to the default branch, the workflow runs CI tests. If those tests pass, the workflow publishes a new package version to {% data variables.product.prodname_registry %}. This workflow automates the creation of new package versions only if the code meets your quality standards.

{% data reusables.package_registry.actions-configuration %}

### Installing a package using an action

You can install packages as part of your CI flow using {% data variables.product.prodname_actions %}. For example, you could configure a workflow so that anytime a developer pushes code to a pull request, the workflow resolves dependencies by downloading and installing packages hosted by {% data variables.product.prodname_registry %}. Then, the workflow can run CI tests that require the dependencies.

Installing packages hosted by {% data variables.product.prodname_registry %} through {% data variables.product.prodname_actions %} requires minimal configuration or additional authentication when you use `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} Data transfer is also free when an action installs a package. For more information, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
`GITHUB_TOKEN` cannot install packages from any private repository besides the repository where the action runs.  You cannot currently use `GITHUB_TOKEN` to authenticate to
{% data variables.product.prodname_github_container_registry %}.
{% endif %}

{% data reusables.package_registry.actions-configuration %}
