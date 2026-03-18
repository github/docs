---
title: Configuring automatic dependency submission for your repository
shortTitle: Submit dependencies automatically
intro: You can use automatic dependency submission to submit transitive dependency data in your repository. This enables you to analyze these transitive dependencies using the dependency graph.
permissions: '{% data reusables.permissions.security-repo-enable %}'
redirect_from:
  - /early-access/ghas/automatic-dependency-submission-for-maven
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository
versions:
  feature: maven-transitive-dependencies
contentType: how-tos
---

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
* Watch for pushes to the repository.
* Run the dependency graph build action associated with the package ecosystem for any manifests in the repository.
* Perform an automatic dependency submission with the results.

You can view details about the automatic workflows run by viewing the **Actions** tab of your repository.

> [!NOTE] After you enable automatic dependency submission, we'll automatically trigger a run of the action. Once enabled, it'll run each time a commit to the default branch updates a manifest.

## Accessing private registries with self-hosted runners

You can configure self-hosted runners to run automatic dependency submission jobs, instead of using the {% data variables.product.prodname_actions %} infrastructure. This is necessary to access private Maven registries. The self-hosted runners must be running on Linux or macOS. For .NET and Python auto-submission, they must have access to the public internet in order to download the latest component-detection release.

1. Provision one or more self-hosted runners, at the repository or organization level. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners) and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners).
1. Assign a `dependency-submission` label to each runner you want automatic dependency submission to use. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner).
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled for labeled runners**.

Once enabled, automatic dependency submission jobs will run on the self-hosted runners, unless:
* The self-hosted runners are unavailable.
* There aren't any runner groups tagged with a `dependency-submission` label.

>[!NOTE] For Maven or Gradle projects that use self-hosted runners with private Maven registries, you need to modify the Maven server settings file to allow the dependency submission workflows to connect to the registries. For more information about the Maven server settings file, see [Security and Deployment Settings](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#transitive-dependencies) in the Maven documentation.

For network allowlist URLs, larger runner configuration, troubleshooting details, and package ecosystem-specific information, see [AUTOTITLE](/code-security/reference/supply-chain-security/automatic-dependency-submission).

## Further reading

* [AUTOTITLE](/code-security/reference/supply-chain-security/automatic-dependency-submission)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)
