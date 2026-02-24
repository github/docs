---
title: Key differences between Azure DevOps and GitHub
shortTitle: Key differences
intro: "Core workflows like repository access, authentication, and pull requests differ after moving from Azure DevOps to {% data variables.product.prodname_dotcom %}."
versions:
  fpt: '*'
  ghec: '*'
defaultTool: cli
contentType: other
---

If you're a member of an organization that has migrated from Azure DevOps to {% data variables.product.github %}, this guide will explain the changes in your workflows to make the migration as smooth as possible.

## Structure

In Azure DevOps, repositories are nested inside **team projects**, so the structure of your environment looks like this:

* Organization
    * Team project
        * Repositories
    * Team project
        * Repositories

Permissions and visibility flow from the team project.

{% data variables.product.github %} is structured differently. Repositories are nested directly inside **organizations**, which also contain teams:

* Enterprise account
    * Organization
        * Teams
        * Repositories
    * Organization
        * Teams
        * Repositories

Permissions and visibility are determined by a combination of organization membership, team membership, and individual permissions.

The concept of a team project, which is used to group repositories in Azure DevOps, does not exist in {% data variables.product.github %} and treating organizations in {% data variables.product.github %} as the equivalent of team projects is not recommended.

While you may initially find each migrated organization on {% data variables.product.github %} has a long unorganized list of repositories, you can grant access and permissions via teams of organization members, which makes navigating the organization's repositories a lot easier.

## Authentication, permissions, and teams

There are two methods for authenticating to {% data variables.product.github %}. Which method you use will depend on how the enterprise account is configured.

If your enterprise account uses {% data variables.product.prodname_emus %}, you'll sign in to {% data variables.product.github %} via your identity provider (for example, Entra ID) and use a **provisioned** account tied to the enterprise account.

Otherwise, you'll use a **personal** {% data variables.product.github %} account. That account will be invited to the enterprise account and any organizations you'll work in. If the enterprise account is configured with additional SAML access restrictions, your personal account will be **linked** to your IdP. You'll be prompted to authenticate with the IdP when you need to access resources within the enterprise account.

In an enterprise on {% data variables.product.prodname_dotcom %}, repositories can be public, private, or internal. Private repositories are only visible to people and teams with explicit access, and internal repositories are visible to all members of your enterprise but not to people outside the enterprise. Internal repositories are useful when multiple organizations in the same enterprise need to discover and reuse code. If your enterprise uses {% data variables.product.prodname_emus %}, user accounts cannot create public repositories or other public content.

## Using Git

To continue working on your repositories using Git, you'll need to make some changes.

1. Update the remote URLs to point at {% data variables.product.github %}. See [AUTOTITLE](/get-started/git-basics/managing-remote-repositories).
1. Update how you authenticate.
    * To use HTTPS authentication, you'll need to create a {% data variables.product.pat_generic %}. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
    * To use SSH authentication, you'll need to either create or add an existing SSH key to {% data variables.product.github %}. See [AUTOTITLE](/authentication/connecting-to-github-with-ssh).
1. If your enterprise or organization uses SAML single sign-on (SSO), you must authorize your {% data variables.product.pat_generic %} or SSH key before it can access resources.

## Pull request flow

With your codebase now hosted on {% data variables.product.github %}, you'll propose changes using pull requests created in your {% data variables.product.github %} repositories.

If your enterprise has integrated Azure Boards and Pipelines, these will both function with {% data variables.product.github %}. You can continue to reference work items in your commit messages and pull requests. For example: `Fix login bug (AB#1234)`.

You can continue to view and manage your work items on Azure Boards. You can also link branches, commits, and pull requests to work items from within Azure. See [Link GitHub commits, pull requests, branches, and issues to work items in Azure Boards](https://learn.microsoft.com/en-us/azure/devops/boards/github/link-to-from-github) on Microsoft Learn.

## Branch protections

People with admin access to a repository can configure **branch protection rules** on {% data variables.product.github %}. These are similar to **branch policies** on Azure DevOps and set rules such as a minimum number of approving reviewers, successful status checks, and requiring signed commits.

{% data variables.product.github %} also supports automatically assigning reviewers based on the file, folder, and glob patterns in a repository's CODEOWNERS file. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

## Packages and artifacts

In Azure DevOps, you may have used Azure Artifacts to publish and consume packages (for example, NuGet packages, npm packages, or Maven packages) and to store build artifacts produced by Azure Pipelines.

On {% data variables.product.github %}, packages are typically published to {% data variables.product.prodname_registry %} and associated with a repository or organization. Depending on how your enterprise completed the migration, you may continue to publish packages to Azure Artifacts, move packages to {% data variables.product.prodname_registry %}, or use a combination of both.

If you can no longer restore dependencies after the migration, check your package source configuration. For example, you may need to update a registry URL or credentials in files like `nuget.config`, `.npmrc`, `settings.xml`, or in your pipeline configuration.

For more information, see [AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages).

## {% data variables.product.prodname_copilot %}

Hosting your repositories on {% data variables.product.github %} unlocks the full power of {% data variables.product.prodname_copilot_short %}. Your codebase provides {% data variables.product.prodname_copilot_short %} with all the context it needs to answer questions in {% data variables.copilot.copilot_chat_short %}, review and make suggestions in your pull requests, and even make changes on your behalf with {% data variables.copilot.copilot_coding_agent %}.

See [AUTOTITLE](/copilot/get-started/quickstart).
