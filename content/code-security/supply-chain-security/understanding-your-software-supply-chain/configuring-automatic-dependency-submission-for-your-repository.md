---
title: Configuring automatic dependency submission for your repository
shortTitle: Automatic dependency submission
intro: 'You can use automatic dependency submission to submit transitive dependency data in your repository. This enables you to analyze these transitive dependencies using the dependency graph.'
permissions: '{% data reusables.permissions.security-repo-enable %}'
redirect_from:
  - /early-access/ghas/automatic-dependency-submission-for-maven
versions:
  feature: maven-transitive-dependencies
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
---

## About automatic dependency submission

> [!NOTE]
> Automatic dependency submission does not support all package ecosystems. For the current list of supported ecosystems, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems).

Dependency graph analyzes the manifest and lock files in a repository, in order to help users understand the upstream packages that their software project depends on. However, in some ecosystems, the resolution of transitive dependencies occurs at build-time and {% data variables.product.company_short %} isn't able to automatically discover all dependencies based on the contents of the repository alone.

When you enable automatic dependency submission for a repository, {% data variables.product.company_short %} automatically identifies the transitive dependencies in the repository and will submit these dependencies to {% data variables.product.company_short %} using the {% data variables.dependency-submission-api.name %}. You can then explore these dependencies using the dependency graph. {% data variables.product.prodname_dependabot %} will notify you about security updates for these dependencies by generating {% data variables.product.prodname_dependabot_alerts %} .

Using automatic dependency submission counts toward your {% data variables.product.prodname_actions %} minutes. For more information, see [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

Optionally, you can choose to configure self-hosted runners or {% data variables.product.company_short %}-hosted {% data variables.actions.hosted_runners %} for automatic dependency submission. For more information, see [Using self-hosted runners for automatic dependency submission](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository#using-self-hosted-runners-for-automatic-dependency-submission
) and [Using GitHub-hosted larger runners for automatic dependency submission](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository#using-github-hosted-larger-runners-for-automatic-dependency-submission
).

## Prerequisites

Dependency graph must be enabled for the repository for you to enable automatic dependency submission.

You must also enable {% data variables.product.prodname_actions %} for the repository in order to use automatic dependency submission. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

## Enabling automatic dependency submission

Repository administrators can enable or disable automatic dependency submission for a repository by following the steps outlined in this procedure.

Organization owners can enable automatic dependency submission for multiple repositories using a security configuration. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled**.

Once you've enabled automatic dependency submission for a repository, {% data variables.product.company_short %} will:
* Monitor for changes to manifest files in the root of the repository on all branches of the repository.
* Run the dependency graph build action associated with the package ecosystem of each changed manifest.
* Perform an automatic dependency submission with the results.

You can view details about the automatic workflows run by viewing the **Actions** tab of your repository.

> [!NOTE] After you enable automatic dependency submission, we'll automatically trigger a run of the action. Once enabled, it'll run each time a commit to the default branch updates a manifest.

## Using self-hosted runners for automatic dependency submission

You can configure self-hosted runners to run automatic dependency submission jobs, instead of using the {% data variables.product.prodname_actions %} infrastructure.

1. Provision one or more self-hosted runners, at the repository or organization level. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners) and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners). The self-hosted runners must be running on Linux or macOS, and must have Docker installed.
1. Assign a `dependency-submission` label to each runner you want automatic dependency submission to use. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner).
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled for labeled runners**.

Once enabled, automatic dependency submission jobs will run on the self-hosted runners, unless:
* The self-hosted runners are unavailable.
* There aren't any runner groups tagged with a `dependency-submission` label.

>[!NOTE] For Maven or Gradle projects that use self-hosted runners with private Maven registries, you need to modify the Maven server settings file to allow the dependency submission workflows to connect to the registries. For more information about the Maven server settings file, see [Security and Deployment Settings](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#transitive-dependencies) in the Maven documentation.

## Using {% data variables.product.company_short %}-hosted {% data variables.actions.hosted_runners %} for automatic dependency submission

{% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} users can use {% data variables.actions.hosted_runners %} to run automatic dependency submissions jobs.

1. Provision a larger runner at the organization level with the name `dependency-submission`. For more information, see [Adding a {% data variables.actions.hosted_runner %} to an organization](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-organization).
1. Give your repository access to the runner. For more information, see [Allowing repositories to access {% data variables.actions.hosted_runners %}](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#allowing-repositories-to-access-larger-runners).
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled for labeled runners**.

## Troubleshooting automatic dependency submission

Automatic dependency submission makes a best effort to cache package downloads between runs using the [Cache](https://github.com/marketplace/actions/cache) action to speed up workflows. For self-hosted runners, you may want to manage this cache within your own infrastructure. To do this, you can disable the built-in caching by setting an environment variable of `GH_DEPENDENCY_SUBMISSION_SKIP_CACHE` to `true`. For more information, see [AUTOTITLE](/actions/learn-github-actions/variables).

### Manifest deduplication

{% data reusables.dependency-graph.deduplication %}

### Maven projects

For Maven projects, automatic dependency submission runs an open source fork of the [Maven Dependency Tree Dependency Submission](https://github.com/marketplace/actions/maven-dependency-tree-dependency-submission). The fork allows {% data variables.product.github %} to stay in sync with the upstream repository plus maintain some changes that are only applicable to automatic submission. The fork's source is available at [advanced-security/maven-dependency-submission-action](https://github.com/advanced-security/maven-dependency-submission-action).

If your repository's dependencies seem inaccurate, check that the timestamp of the last dependency graph build matches the last change to your `pom.xml` file. The timestamp is visible on the table of alerts in the repository's {% data variables.product.prodname_dependabot_alerts %} tab. Pushing a commit which updates `pom.xml` will trigger a new run of the Dependency Tree Submission action and force a rebuild of that repository's dependency graph.

### Gradle projects

For Gradle projects, automatic dependency submission runs a fork of the open source Gradle actions from [gradle/actions](https://github.com/gradle/actions). The fork is available at [actions/gradle-build-tools-actions](https://github.com/actions/gradle-build-tools-actions). You can view the results of the autosubmission action under your repository's **Actions** tab. Each run will be labeled "Automatic Dependency Submission (Gradle)" and its output will contain the JSON payload which the action submitted to the API.

## Further reading

* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)
