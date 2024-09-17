---
title: Customizing your dependency review action configuration
intro: 'Learn how to add a basic customization to your dependency review configuration.'
product: '{% data reusables.gated-features.dependency-review-action %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Customize dependency review
---

## Introduction

The {% data variables.dependency-review.action_name %} scans your pull requests for dependency changes and raises an error if any new dependencies have known vulnerabilities. Once installed, if the workflow run is marked as required, pull requests introducing known vulnerable packages will be blocked from merging.

This guide shows you how to add three very common customizations: failing builds based on vulnerability severity level, dependency license, and scope.

### Prerequisites

This guide assumes that:

* Dependency graph is enabled for the repository.{% ifversion fpt or ghec %} Dependency graph is enabled by default for public repositories and you can choose to enable it for private repositories.{% endif %} For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
* {% data variables.product.prodname_actions %} is enabled for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Step 1: Adding the dependency review action

In this step, we'll add the dependency review workflow to your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Under "Get started with {% data variables.product.prodname_actions %}", find the "Security" category, then click **View all**.
1. Find "Dependency review", then click **Configure**. Alternatively, search for "Dependency review" using the search bar.
1. This will open dependency review’s {% data variables.product.prodname_actions %} workflow file, `dependency-review.yml`. It should contain the following:

   ```yaml copy
   name: 'Dependency review'
   on:
     pull_request:
       branches: [ "main" ]

   permissions:
     contents: read

   jobs:
     dependency-review:
       runs-on: ubuntu-latest
       steps:
         - name: 'Checkout repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
   ```

## Step 2: Changing the severity

You can block code containing vulnerable dependencies from ever being merged by setting the {% data variables.dependency-review.action_name %} to required. However, it's worth noting that blocking low-risk vulnerabilities may be too restrictive in some circumstances. In this step, we will change the severity of vulnerability that will cause a build to fail with the `fail-on-severity` option.

1. Add the `fail-on-severity` option to the end of the `dependency-review.yml` file:

   ```yaml copy
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
           with:
             fail-on-severity: moderate
   ```

## Step 3: Adding licenses to block

Vulnerabilities aren’t the only reason you might want to block a dependency. If your organization has restrictions on what sorts of licenses you can use, you can use dependency review to enforce those policies with the `deny-licenses` option. In this step, we will add a customization that will break the build if the pull request introduces a dependency that contains the LGPL-2.0 or BSD-2-Clause license.

1. Add the `deny-licenses` option to the end of the `dependency-review.yml` file:

   ```yaml copy
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
           with:
             fail-on-severity: moderate
             deny-licenses: LGPL-2.0, BSD-2-Clause
   ```

## Step 4: Adding scopes

Finally, we'll use the `fail-on-scopes` option to prevent merging vulnerable dependencies to specific deployment environments, in this case the development environment.

1. Add the `fail-on-scopes` option to the end of the `dependency-review.yml` file:

   ```yaml copy
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
           with:
             fail-on-severity: moderate
             deny-licenses: LGPL-2.0, BSD-2-Clause
             fail-on-scopes: development
   ```

## Step 5: Check the configuration

The `dependency-review.yml` file should now look like this:

```yaml copy

name: 'Dependency Review'
on: [pull_request]



permissions:
  contents: read



jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v4
        with:
          fail-on-severity: moderate
          deny-licenses: LGPL-2.0, BSD-2-Clause
          fail-on-scopes: development
```

You can use this configuration as a template for your own custom configurations.

For more information on all the possible customization options, see the [README](https://github.com/actions/dependency-review-action/blob/main/README.md#configuration) in the dependency review action documentation.

## Best practices

When customizing your dependency review configuration, there are some best practices you can follow:

* Choose block lists over allow lists. It is more practical to compile a list of the "really bad" dependencies you want to block than to create an inclusive list of all the libraries you want to allow.

* Choose to block licenses instead of specifying which licenses to allow. There are a wide variety of licenses out there, so it's usually more practical to exclude those you know are incompatible with current licenses than it is to compile a complete list of compatible licenses.

* Choose `fail-on-severity`. Failing based on the severity of a vulnerability is a good way to balance the need for security with the need to create low-friction experiences for developers.

## Further reading

* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#about-configuring-the-dependency-review-action)"{% ifversion repo-rules %}
* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/enforcing-dependency-review-across-an-organization)"{% endif %}
