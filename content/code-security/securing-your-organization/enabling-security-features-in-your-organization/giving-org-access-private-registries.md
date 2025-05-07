---
title: Giving security features access to private registries
shortTitle: Give access to private registries
intro: 'If your organization uses private registries, you can improve the results of {% data variables.product.prodname_code_scanning %} analysis and enable {% data variables.product.prodname_dependabot %} to maintain more dependencies by setting up access to these registries.'
allowTitleToDifferFromFilename: true
versions:
  feature: org-private-registry
topics:
  - Code Security
  - Organizations
  - Security
---

## About the importance of providing access to private registries

When a repository uses code stored in a private registry, some security features need access to the registry to enable them to work effectively. Without access to all the dependencies of a repository, {% data variables.product.prodname_code_scanning %} default setup and {% data variables.product.prodname_dependabot %} are limited.

## {% data variables.product.prodname_code_scanning_caps %} default setup access to private registries

{% data variables.product.prodname_code_scanning_caps %} default setup analyzes {% data variables.code-scanning.no_build_support %} code without building it. If you do not define access to the private registries your organization uses, then {% data variables.product.prodname_code_scanning %} will only gather necessary data from dependencies available in public registries. Most times, this is enough for surfacing most of the vulnerabilities. However, in some cases the lack of access can lead to false negative results, that is, {% data variables.product.prodname_code_scanning %} is unable to detect a vulnerability in the code because it does not have all the information it needs to analyze the code. For example, some of the data flow paths may not be detected because steps are defined in dependencies that are not accessible and {% data variables.product.prodname_code_scanning %} does not know how to interpret them.

When you configure access to the private registries used in your organization, {% data variables.product.prodname_code_scanning %} has access to all the information it needs and is much less likely to miss a vulnerability.

> [!TIP]
> You can define one private Maven registry and one private NuGet feed for each organization. If the codebases in your organization use more than one registry or feed, you should define access to the most important registry for the codebases in that organization.

### Defining registry access for {% data variables.product.prodname_code_scanning %} default setup

You need to be an **organization owner** to set up access to private registries in the user interface. You can also use the REST API with organization owner or `{read,write}_org_private_registries` permission.

1. On the **Settings** tab for the organization, scroll down to the "Security" section and select **Secrets and variables**.
1. In the expanded list of secrets and variables, select **Private registries** to display the "Private Registries" page.
1. Select **New private registry** to add access details for a private registry.
1. Use the **URL** and **Type** fields to define the location and type of the registry:
   * **URL** is the location where you access the private registry. For example, to use the {% data variables.product.prodname_registry %} registry for NuGet: `https://nuget.pkg.github.com/`.
   * **Type** is the type of registry.
1. Select either **Token** or **Username and password**, depending on the authentication method, then enter data into the appropriate fields.
1. Define which repositories in the organization can access the private registry using these details: all, private and internal, or selected repositories only.
1. When you have finished defining the private registry, select **Add Registry** to save the registry information.

> [!TIP]
> When you add a private registry to an organization the token or password is stored as an encrypted secret. Once the registry is created, the token or password cannot be viewed again.

### Enabling {% data variables.product.prodname_code_scanning %} default setup to use a registry definition

When you enable {% data variables.product.prodname_code_scanning %} default setup for a repository or group of repositories, {% data variables.product.github %} checks whether the repositories have access to any existing private registries. If any private registries are available to a repository, {% data variables.product.prodname_code_scanning %} will use the relevant definitions during analysis.

When configuring private registries for the first time, you need to disable and re-enable {% data variables.product.prodname_code_scanning %} default setup for any repositories that you want to use the new definition. New or modified configurations will be automatically picked up on subsequent runs.

You can confirm whether private registries were used successfully by {% data variables.product.prodname_code_scanning %} analysis by looking in the Actions log files, see [Determining whether code scanning default setup used any private registries](/code-security/code-scanning/managing-your-code-scanning-configuration/viewing-code-scanning-logs#determining-whether-code-scanning-default-setup-used-any-private-registries).

## {% data variables.product.prodname_code_scanning_caps %} advanced setup access to private registries

{% data variables.product.prodname_code_scanning_caps %} advanced setup uses any private registries available to the workflow that runs the analysis using the `codeql-action`. It does not have access to the organization-level private registries used by default setup.

For compiled languages, the `codeql-action` must observe a build of the code. You can either revise your existing build workflow to also run the `codeql-action` or create a new workflow that builds the production version of the code and also runs the `codeql-action`.

Any private registries used by the build must also be accessible to the workflow that runs the `codeql-action`. For more information on advanced setup, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql).

## {% data variables.product.prodname_dependabot %} updates access to private registries

{% data variables.product.prodname_dependabot %} uses any private registries defined in the `dependabot.yml` file. It does not have access to the organization-level private registries used by {% data variables.product.prodname_code_scanning %} default setup.

{% data variables.product.prodname_dependabot %} cannot check for security or version updates for code stored in a private registry unless it can access the registry. If you do not configure access to the private registry, then {% data variables.product.prodname_dependabot %} cannot raise pull requests to update any of the dependencies stored in the registry.

When you configure access to one or more private registries, {% data variables.product.prodname_dependabot %} can propose pull requests to upgrade a vulnerable dependency or to maintain a dependency, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/guidance-for-the-configuration-of-private-registries-for-dependabot).
