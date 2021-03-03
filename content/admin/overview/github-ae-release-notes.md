---
title: GitHub AE release notes
intro: March 1, 2021
versions:
  github-ae: '*'
---

### Features

#### {% data variables.product.prodname_actions %} beta

[{% data variables.product.prodname_actions %}](https://github.com/features/actions) is a powerful, flexible solution for CI/CD and workflow automation. {% data variables.product.prodname_actions %} on GHAE uses a new [{% data variables.actions.hosted_runner %}](/github-ae@latest/actions/using-github-hosted-runners/about-ae-hosted-runners), only available on GHAE, that enables you to customize the size, image, and networking configuration of the runners. These all new runners are a finished-service CI compute environment with auto-scaling and management, all taken care of by GitHub. During the beta, use of these powerful new GHAE hosted runners is free of charge.

#### {% data variables.product.prodname_registry %} beta

[{% data variables.product.prodname_registry %}](https://github.com/features/packages) is a package hosting service, natively integrated with GitHub APIs, Actions, and webhooks. Create an [end-to-end DevOps workflow](/github-ae@latest/packages/quickstart) that includes your code, continuous integration, and deployment solutions. During this beta, {% data variables.product.prodname_registry %} is offered free of charge to GitHub AE customers.

#### {% data variables.product.prodname_GH_advanced_security %} beta

{% data variables.product.prodname_GH_advanced_security %} is available in beta and includes both code scanning and secret scanning. During this beta, {% data variables.product.prodname_GH_advanced_security %} features are being offered free of charge to GitHub AE customers. Repository and organization administrators can opt-in to use {% data variables.product.prodname_GH_advanced_security %} in the Security and Analysis tab under settings.

Learn more about {% data variables.product.prodname_GH_advanced_security %} [code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning) and [secret scanning](/github/administering-a-repository/about-secret-scanning) on {% data variables.product.prodname_ghe_managed %}.

#### Manage teams from your identity provider

Customers using SCIM (System for Cross-domain Identity Management) can now sync security groups in Azure Active Directory with GitHub teams.  Once a team has been linked to a security group, membership will be automatically updated in GitHub when a user is added or removed from their assigned security group.

#### IP allow lists beta

[GitHub IP allow lists](/admin/configuration/restricting-network-traffic-to-your-enterprise) provide the ability to filter traffic from administrator-specified IP ranges, defined by CIDR notation. The allow list is defined at the enterprise or organization account level in Security > Settings. All traffic that attempts to reach resources within the enterprise account and organizations are filtered by the IP allow lists. This functionality is provided in addition to the ability to request network security group changes that filter traffic to the entirety of the GHAE tenant.


### Changes

#### Developer changes

- [Organization owners can now disable publication](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization) of GitHub Pages sites from repositories in the organization. This will not unpublish existing sites.
- Repositories that use GitHub Pages can now [build and deploy from any branch](/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites).
- When writing an issue or pull request, the list syntax for bullets, numbers, and tasks will now be autocompleted after you press `return` or `enter`.
- You can now delete a directory in a repository from the repository page. When navigating to a directory, a new kebab button next to the “Add file” button gives the option to delete the directory.
- It’s now easier and faster to [reference issues or pull requests](/github/writing-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests), with search across multiple words after the “#”.  

##### Administration changes

- Enterprise administrators can now publish a mandatory message. The message is shown to all users and they must acknowledge it. This can be used to display important information, terms of service or policies.
- The GitHub App single file path permission can now [support up to ten files](/developers/apps/creating-a-github-app-using-url-parameters).
- When configuring a GitHub App, the authorization callback URL is a required field. Now we will permit the integrator to specify multiple callback URLs. GitHub denies authorization if the callback URL from the request is not listed.
- A [new API endpoint](/rest/reference/apps#create-a-scoped-access-token) enables the exchange of a user to server token for a user to server token scoped to specific repositories.
- Events are now logged in the audit log on [promoting a team member to be a team maintainer and on demoting a team maintainer to be a team member](/admin/user-management/audited-actions#teams).
- The [OAuth device authorization flow](/developers/apps/authorizing-oauth-apps#device-flow) is now supported. This allows any CLI client or developer tool to authenticate using a secondary system.
- A user can no longer delete their account if SCIM provisioning is enabled.

##### Default branch renaming

Enterprise and organization administrators can now set the default branch name for new repositories. Enterprise administrators can also enforce their choice of default branch name across all organizations or allow individual organizations to choose their own.

Existing repositories are unaffected by these settings, and their default branch name will not be changed.

This change is one of many changes GitHub is making to support projects and maintainers that want to rename their default branch. To learn more, see [github/renaming](https://github.com/github/renaming).


### Bug fixes
- Users can no longer set a backup email address on their profile. Their email address is set through the Identity Provider only.
- GitHub AE can now connect to Azure Boards.
- Version headers were missing from the APIs, and have now been set to “GitHub AE”.
- Links to documentation have been fixed.

### Known issues

- Audit log forwarding can fail.
- Geographic location data is not shown in the audit log. Location information can otherwise be discerned from the IP address associated with each event.
- The link to Packages from a repository page shows an incorrect search page when that repository does not have any packages.
