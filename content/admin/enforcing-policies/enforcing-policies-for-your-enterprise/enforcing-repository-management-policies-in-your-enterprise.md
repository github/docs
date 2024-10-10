---
title: Enforcing repository management policies in your enterprise
intro: 'You can enforce policies for repository management within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
---

## About policies for repository management in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage repositories. You can also allow organization owners to manage policies for repository management. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories)" and "[AUTOTITLE](/organizations)."

{% ifversion ghes %}

## Configuring the default visibility of new repositories

Each time someone creates a new repository within your enterprise, that person must choose a visibility for the repository. When you configure a default visibility setting for the enterprise, you choose which visibility is selected by default. For more information on repository visibility, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

If an enterprise owner disallows members from creating certain types of repositories, members will not be able to create that type of repository even if the visibility setting defaults to that type. For more information, see "[Enforcing a policy for repository creation](#enforcing-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Default repository visibility", use the drop-down menu and select a default visibility.
{% indented_data_reference reusables.enterprise_installation.image-urls-viewable-warning spaces=3 %}
{% endif %}

## Enforcing a policy for base repository permissions

Across all organizations owned by your enterprise, you can set a base repository permission level (none, read, write, or admin) for organization members, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Base permissions", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Base permissions", select the dropdown menu and click a policy.

## Enforcing a policy for repository creation

Across all organizations owned by your enterprise, you can allow members to create repositories, restrict repository creation to organization owners, or allow owners to administer the setting on the organization level.

If you allow members to create repositories in your organizations, you can choose which types of repositories (public, private, and internal) that members can create.

{% ifversion enterprise-namespace-repo-setting %}
{% ifversion ghec %}If your enterprise uses {% data variables.product.prodname_emus %}, you{% else %}You{% endif %} can also prevent users from creating repositories owned by their user accounts. {% ifversion emu-owned-repos %}If you allow users to create repositories owned by their user accounts, you can view and temporarily access those repositories at any time. For more information, see "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/viewing-user-owned-repositories-in-your-enterprise)" and "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise)."{% endif %}
{% endif %}

{% data reusables.repositories.internal-repo-default %} For more information about internal repositories, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Repository creation", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{%- ifversion enterprise-namespace-repo-setting %}
1. Optionally, {% ifversion ghec %}if your enterprise uses {% data variables.product.prodname_emus %} and you want {% endif %}to prevent enterprise members from creating repositories owned by their user accounts, select **Block the creation of user namespace repositories**.
{%- endif %}

## Enforcing a policy for forking private or internal repositories

Across all organizations owned by your enterprise, you can allow people with access to a private or internal repository to fork the repository, never allow forking of private or internal repositories, or allow owners to administer the setting on the organization level.

{% ifversion org-owners-limit-forks-creation %}
People with admin permissions can set a more granular forking policy. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."
{% endif %}

{% ifversion enterprise-namespace-repo-setting %}
{% note %}

**Note:** If {% ifversion ghec %}your enterprise uses {% data variables.product.prodname_emus %} and {% endif %}your "Repository creation" policy prevents enterprise members from creating repositories owned by their user accounts, members will not be allowed to fork a repository in their user accounts, regardless of your "Repository forking" policy.

{% endnote %}
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Repository forking", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Repository forking", select the dropdown menu and click a policy.
{%- ifversion innersource-fork-policies %}
1. If forking is enabled, select a policy for where users are allowed to fork repositories.
{%- endif %}

## Enforcing a policy for inviting{% ifversion ghec %} outside{% endif %} collaborators to repositories

{% data reusables.enterprise-managed.repo-collaborators-note %}

Across all organizations owned by your enterprise, you can allow members to invite{% ifversion ghec %} outside{% endif %} collaborators to repositories, restrict {% ifversion ghec %}outside collaborator {% endif %}invitations to organization owners, {% ifversion prevent-org-admin-add-outside-collaborator %}restrict {% ifversion ghec %}outside collaborator {% endif %}invitations to enterprise owners, {% endif %}or allow organization owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Repository {% ifversion ghec %}outside collaborators{% elsif ghes %}invitations{% endif %}", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Repository {% ifversion ghec %}outside collaborators{% elsif ghes %}invitations{% endif %}", select the dropdown menu and click a policy.

## Enforcing a policy for the default branch name

Across all organizations owned by your enterprise, you can set the default branch name for any new repositories that members create. You can choose to enforce that default branch name across all organizations or allow individual organizations to set a different one.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Default branch name", enter the default branch name that new repositories should use.
1. Optionally, to enforce the default branch name for all organizations in the enterprise, select **Enforce across this enterprise**.
1. Click **Update**.

## Enforcing a policy for changes to repository visibility

Across all organizations owned by your enterprise, you can allow members with admin access to change a repository's visibility, restrict repository visibility changes to organization owners, or allow owners to administer the setting on the organization level. When you prevent members from changing repository visibility, only enterprise owners can change the visibility of a repository.

If an enterprise owner has restricted repository creation to organization owners only, then members will not be able to change repository visibility.  For more information, see "[Enforcing a policy for repository creation](#enforcing-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Repository visibility change", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Repository visibility change", select the dropdown menu and click a policy.

## Enforcing a policy for repository deletion and transfer

Across all organizations owned by your enterprise, you can allow members with admin permissions to delete or transfer a repository, restrict repository deletion and transfers to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
1. Under "Repository deletion and transfer", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Enforcing a policy for deleting issues

Across all organizations owned by your enterprise, you can allow members with admin access to delete issues in a repository, restrict issue deletion to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. On the **Repository policies** tab, under "Repository issue deletion", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Repository issue deletion", select the dropdown menu and click a policy.

{% ifversion ghes %}

## Enforcing a policy for Git push limits

To keep your repository size manageable and prevent performance issues, you can configure a file size limit for repositories in your enterprise.

By default, when you enforce repository upload limits, people cannot add or update files larger than 100 MB.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Repository upload limit", use the drop-down menu and click a maximum object size.
1. Optionally, to enforce a maximum upload limit for all repositories in your enterprise, select **Enforce on all repositories**

   ![Screenshot of the "Repository upload limit" policy section. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

{% ifversion profile-name-enterprise-setting %}

## Enforcing a policy for the display of member names in your repositories

Across all organizations owned by your enterprise, you can allow members to see a comment author's profile name, in addition to their username, in issues and pull requests for public and internal repositories.

![Screenshot of an issue comment. The header says "ashtom (Thomas Dohmke) commented 1 minute ago," with "(Thomas Dohmke)" outlined in dark orange.](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**Note:** When this policy is enforced for all repositories in the enterprise, it overrides the organization setting for private repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Allow members to see the comment author's profile name in public and internal repositories", select the dropdown menu and click a policy.
1. Optionally, to enforce the display of profile names for all repositories in your enterprise, select **Enforce for all repositories on the instance**.

   ![Screenshot of the "Allow members to see the comment author's profile name in public and internal repositories" policy section. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## Configuring the merge conflict editor for pull requests between repositories

Requiring users to resolve merge conflicts locally on their computer can prevent people from inadvertently writing to an upstream repository from a fork.

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Conflict editor for pull requests between repositories", use the drop-down menu, and click **Disabled**.

## Configuring force pushes

Each repository inherits a default force push setting from the settings of the user account or organization that owns the repository. Each organization and user account inherits a default force push setting from the force push setting for the enterprise. If you change the force push setting for the enterprise, the policy applies to all repositories owned by any user or organization.

### Blocking force pushes to all repositories

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Force pushes", select the dropdown menu, and click **Allow**, **Block**, or **Block to the default branch**.
1. Optionally, to override organization and repository level settings for force pushes, select **Enforce on all repositories**.

### Blocking force pushes to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Push and Pull", to the right of "Force pushes", select the dropdown menu, and click **Block** or **Block to the default branch**.

### Blocking force pushes to repositories owned by a user account or organization

Repositories inherit force push settings from the user account or organization to which they belong. User accounts and organizations in turn inherit their force push settings from the force push settings for the enterprise.

You can override the default inherited settings by configuring the settings for a user account or organization.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Repository default settings" in the "Force pushes" section, select a policy.
    * To block force pushes to all branches, select **Block**.
    * To only block force pushes to the default branch, select **Block to the default branch**.
1. Optionally, to override repository-specific settings, select **Enforce on all repositories**. Note that this will **not** override an enterprise-wide policy.

   ![Screenshot of the "Repository default settings" policy section. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configuring anonymous Git read access

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

If you have [enabled private mode](/admin/configuration/configuring-your-enterprise/enabling-private-mode) for {% data variables.location.product_location %}, you can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your enterprise. When you or a repository administrator enable this access setting for a repository, unauthenticated Git operations (and anyone with network access to {% data variables.product.product_name %}) will have read access to the repository without authentication.

Anonymous Git read access is disabled by default.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on your enterprise by locking the repository's access settings. After you lock a repository's Git read access setting, only a site administrator can change the setting.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Setting anonymous Git read access for all repositories

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Anonymous Git read access", use the drop-down menu, and click **Enabled**.
1. Optionally, to prevent repository admins from changing anonymous Git read access settings in all repositories on your enterprise, select **Prevent repository admins from changing anonymous Git read access**.

### Setting anonymous Git read access for a specific repository

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Danger Zone", next to "Enable Anonymous Git read access", click **Enable**.

   ![Screenshot of the "Danger Zone" section of a repository's site admin settings. To the right of "Enable anonymous Git read access", the "Enable" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
1. Review the changes. To confirm, click **Yes, enable anonymous Git read access.**
1. Optionally, to prevent repository admins from changing this setting for this repository, select **Prevent repository admins from disabling anonymous Git read access**.
{% endif %}
