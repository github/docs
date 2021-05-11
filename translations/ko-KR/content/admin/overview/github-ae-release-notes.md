---
title: GitHub AE release notes
intro: 'March 1, 2021'
versions:
  github-ae: '*'
---

### 기능

#### {% data variables.product.prodname_actions %} beta

[{% data variables.product.prodname_actions %}](https://github.com/features/actions) is a powerful, flexible solution for CI/CD and workflow automation. For more information, see "[Introduction to {% data variables.product.prodname_actions %}](/actions/learn-github-actions/introduction-to-github-actions)."

{% data variables.product.prodname_actions %} on {% data variables.product.product_name %} uses a new [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners), only available for {% data variables.product.product_name %}, that enables you to customize the size, image, and networking configuration of the runners. These runners are a finished-service CI compute environment with auto-scaling and management, fully managed by {% data variables.product.company_short %}. During the beta, the use {% data variables.actions.hosted_runner %}s is free of charge. For more information, see "[Adding {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/adding-ae-hosted-runners)."

Please note that when {% data variables.product.prodname_actions %} is enabled during this upgrade, two organizations named "GitHub Actions" (@**actions** and @**github**) will appear in {% data variables.product.product_location %}. These organizations are required by {% data variables.product.prodname_actions %}. Users named @**ghost** and @**actions** appear as the actors for creation of these organizations in the audit log.

#### {% data variables.product.prodname_registry %} beta

[{% data variables.product.prodname_registry %}](https://github.com/features/packages) is a package hosting service, natively integrated with {% data variables.product.prodname_actions %}, APIs, and webhooks. Create an [end-to-end DevOps workflow](/github-ae@latest/packages/quickstart) that includes your code, continuous integration, and deployment solutions. For more information, see "[About {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-github-packages)."

During this beta, {% data variables.product.prodname_registry %} is free of charge to {% data variables.product.product_name %} customers.

#### {% data variables.product.prodname_GH_advanced_security %} beta

{% data variables.product.prodname_GH_advanced_security %} is available in beta and includes both {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}. Repository administrators and organization owners can opt into {% data variables.product.prodname_advanced_security %} features in the settings for a repository or organization, within the **Security and analysis** tab. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

During this beta, {% data variables.product.prodname_advanced_security %} features are free of charge to {% data variables.product.product_name %} customers.

#### Manage teams from your identity provider (IdP)

Customers using SCIM (System for Cross-domain Identity Management) can now sync security groups in Azure Active Directory with {% data variables.product.company_short %} teams. Once a team has been linked to a security group, membership will be automatically updated in {% data variables.product.product_name %} when a user is added or removed from their assigned security group. For more information, see "[Synchronizing a team with an identity provider group](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)."

#### IP allow lists beta

Enterprise and organization owners can now use IP allow lists to restrict traffic to the enterprise or specific organizations. After you configure an IP allow list, only visitors from IP addresses on the list are permitted to access the resources protected by the list.

This functionality is provided in addition to the ability to request network security group changes that filter traffic to the entirety of the {% data variables.product.product_name %} tenant.

For more information, see "[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)" and "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

#### Pull request auto-merge

With auto-merge, pull requests can be set to merge automatically when all merge requirements have been satisfied. This saves users from needing to constantly check the state of their pull requests just to merge them. Auto-merge can be enabled by a user with permission to merge and on pull requests that have unsatisfied merge requirements (like missing approvals or pending or failing required status checks). For more information, see "[Automatically merging a pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)."

### Changes

#### Developer changes

- [Organization owners can now disable publication](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) of {% data variables.product.prodname_pages %} sites from repositories in the organization. This will not unpublish existing sites.
- Repositories that use {% data variables.product.prodname_pages %} can now [build and deploy from any branch](/pages/getting-started-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites).
- When writing an issue or pull request, the list syntax for bullets, numbers, and tasks will now be autocompleted after you press `return` or `enter`.
- You can now delete a directory in a repository from the repository page. When navigating to a directory, a new kebab button next to the "Add file" button gives the option to delete the directory.
- It’s now easier and faster to [reference issues or pull requests](/github/writing-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests), with search across multiple words after the "#".

##### Administration changes

- Enterprise owners can now [publish a mandatory message](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message). The message is shown to all users and they must acknowledge it. This can be used to display important information, terms of service or policies.
- The {% data variables.product.prodname_github_app%} single file path permission can now [support up to ten files](/developers/apps/creating-a-github-app-using-url-parameters).
- When configuring a {% data variables.product.prodname_github_app%}, the authorization callback URL is a required field. Now we will permit the integrator to specify multiple callback URLs. {% data variables.product.product_name %} denies authorization if the callback URL from the request is not listed.
- A [new API endpoint](/rest/reference/apps#create-a-scoped-access-token) enables the exchange of a user to server token for a user to server token scoped to specific repositories.
- Events are now logged in the audit log on [promoting a team member to be a team maintainer and on demoting a team maintainer to be a team member](/admin/user-management/audited-actions#teams).
- The [OAuth device authorization flow](/developers/apps/authorizing-oauth-apps#device-flow) is now supported. This allows any CLI client or developer tool to authenticate using a secondary system.
- A user can no longer delete their account if SCIM provisioning is enabled.

##### Default branch renaming

Enterprise and organization owners can now set the default branch name for new repositories. Enterprise owners can also enforce their choice of default branch name across all organizations or allow individual organizations to choose their own. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)" and "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."

Existing repositories are unaffected by these settings, and their default branch name will not be changed.

This change is one of many changes {% data variables.product.company_short %} is making to support projects and maintainers that want to rename their default branch. To learn more, see [github/renaming](https://github.com/github/renaming).


### Bug fixes
- Users can no longer set a backup email address on their profile. Their email address is set through the IdP only.
- You can no longer enable two-factor authentication after configuring authentication through your IdP.
- {% data variables.product.product_name %} can now connect to Azure Boards.
- Version headers were missing from the APIs, and have now been set to "GitHub AE."
- Links to documentation have been fixed.
- Configuration of audit log forwarding within the enterprise's settings was failing.
- Navigating to gists could result in a 500 error.
- The Support email or URL was failing to save. It now saves after a period of a few minutes.
- Organization level pull request templates were not being applied to all pull requests in the organization.

### 알려진 이슈들

- Geographic location data is not shown in the audit log. Location information can otherwise be discerned from the IP address associated with each event.
- The link to {% data variables.product.prodname_registry %} from a repository page shows an incorrect search page when that repository does not have any packages.
