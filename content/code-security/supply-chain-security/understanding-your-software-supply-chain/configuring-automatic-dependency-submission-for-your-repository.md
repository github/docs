---
title: Configuring automatic dependency submission for your repository
shortTitle: Automatic dependency submission
intro: 'You can use automatic dependency submission to submit transitive dependency data in your repository. This enables you to analyze these transitive dependencies using the dependency graph.'
permissions: 'People with admin permissions to a repository, or the security manager role for the repository, can configure automatic dependency submission for that repository.'
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
> Automatic dependency submission is currently only supported for Maven.

Dependency graph analyzes the manifest and lock files in a repository, in order to help users understand the dependencies that the repository depends on. However, in some ecosystems, the resolution of transitive dependencies occurs at build-time and {% data variables.product.company_short %} isn't able to automatically discover all dependencies based on the contents of the repository alone.

When you enable automatic dependency submission for a repository, {% data variables.product.company_short %} automatically identifies the transitive dependencies in the repository and will submit these dependencies to {% data variables.product.company_short %} using the {% data variables.dependency-submission-api.name %}. You can then report on these dependencies using the dependency graph.

Using automatic dependency submission counts toward your {% data variables.product.prodname_actions %} minutes. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

Optionally, you can choose to configure self-hosted runners or {% data variables.product.company_short %}-hosted {% data variables.actions.hosted_runners %} for automatic dependency submission. For more information, see "[Using self-hosted runners for automatic dependency submission](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository#using-self-hosted-runners-for-automatic-dependency-submission
)" and "[Using GitHub-hosted larger runners for automatic dependency submission](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository#using-github-hosted-larger-runners-for-automatic-dependency-submission
)."

## Prerequisites

Dependency graph must be enabled for the repository for you to enable automatic dependency submission.

You must also enable {% data variables.product.prodname_actions %} for the repository in order to use automatic dependency submission. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."

## Enabling automatic dependency submission

Repository administrators can enable or disable automatic dependency submission for a repository by following the steps outlined in this procedure.

Organization owners can enable automatic dependency submission for multiple repositories using a security configuration. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled**.

Once you've enabled automatic dependency submission for a repository, {% data variables.product.company_short %} will:
* Monitor for changes to the `pom.xml` file in the root of the repository on all branches of the repository.
* Perform an automatic dependency submission on each change.

You can view details about the automatic workflows run by viewing the **Actions** tab of your repository.

> [!NOTE] Automatic submission will occur on the first push to the `pom.xml` file after the option is enabled.

## Using self-hosted runners for automatic dependency submission

You can configure self-hosted runners to run automatic dependency submission jobs, instead of using the {% data variables.product.prodname_actions %} infrastructure.

1. Provision one or more self-hosted runners, at the repository or organization level. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)." The self-hosted runners must be running on Linux or macOS, and must have Docker installed.
1. Assign a `dependency-submission` label to each runner you want automatic dependency submission to use. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)."
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled for labeled runners**.

Once enabled, automatic dependency submission jobs will run on the self-hosted runners, unless:
* The self-hosted runners are unavailable.
* There aren't any runner groups tagged with a `dependency-submission` label.

>[!NOTE] When using self-hosted runners, you need to add access to the Maven server settings file to allow the dependency submission workflows to connect to private registries. Dependencies from private registries will be included in the dependency tree in the next `pom.xml` update.  For more information about the Maven server settings file, see [Security and Deployment Settings](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#transitive-dependencies) in the Maven documentation.

## Using {% data variables.product.company_short %}-hosted {% data variables.actions.hosted_runners %} for automatic dependency submission

{% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} users can use {% data variables.actions.hosted_runners %} to run automatic dependency submissions jobs.

1. Provision a larger runner at the organization level with the name `dependency-submission`. For more information, see "[Adding a {% data variables.actions.hosted_runner %} to an organization](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-organization)."
1. Give your repository access to the runner. For more information, see "[Allowing repositories to access {% data variables.actions.hosted_runners %}](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#allowing-repositories-to-access-larger-runners)."
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled for labeled runners**.

## Troubleshooting automatic dependency submission

Automatic dependency submission is currently only supported for Maven. The feature uses the Maven Dependency Tree Submission action. For more information, see the documentation for the [Maven Dependency Tree Dependency Submission](https://github.com/marketplace/actions/maven-dependency-tree-dependency-submission) action in the {% data variables.product.prodname_marketplace %}. If your project uses a non-standard Maven configuration, it may not properly generate the dependencies and submit them to the dependency graph.

## Further reading

* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"
* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)"
