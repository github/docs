---
title: Enforcing repository management policies in your enterprise
intro: 'Enterprise owners can enforce certain repository management policies for all organizations owned by an enterprise account, or allow policies to be set in each organization.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
---
## Configuring the default visibility of new repositories in your enterprise

Each time someone creates a new repository on your enterprise, that person must choose a visibility for the repository. When you configure a default visibility setting for the enterprise, you choose which visibility is selected by default. For more information on repository visibility, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

If an enterprise owner disallows members from creating certain types of repositories, members will not be able to create that type of repository even if the visibility setting defaults to that type. For more information, see "[Setting a policy for repository creation](#setting-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Default repository visibility", use the drop-down menu and select a default visibility.
  ![Drop-down menu to choose the default repository visibility for your enterprise](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

## Setting a policy for changing a repository's visibility

When you prevent members from changing repository visibility, only enterprise owners can change the visibility of a repository.

If an enterprise owner has restricted repository creation to organization owners only, then members will not be able to change repository visibility. If an enterprise owner has restricted member repository creation to private repositories only, then members will only be able to change the visibility of a repository to private. For more information, see "[Setting a policy for repository creation](#setting-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Under "Repository visibility change", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

## Setting a policy for repository creation

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Under "Repository creation", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Under "Repository creation", use the drop-down menu and choose a policy.
  ![Drop-down menu with repository creation policies](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

## Enforcing a policy on forking private or internal repositories

Across all organizations owned by your enterprise, you can allow people with access to a private or internal repository to fork the repository, never allow forking of private or internal repositories, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository forking", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository forking", use the drop-down menu and choose a policy.
  ![Drop-down menu with repository forking policy options](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

## Setting a policy for repository deletion and transfer

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Under "Repository deletion and transfer", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Setting a policy for Git push limits

To keep your repository size manageable and prevent performance issues, you can configure a file size limit for repositories in your enterprise.

By default, when you enforce repository upload limits, people cannot add or update files larger than 100 MB.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Note:** Only files larger than {% data variables.large_files.warning_size %} will be checked against the Git push limit. If you need to set a lower push limit, contact {% data variables.contact.contact_ent_support %} for assistance.

{% endtip %}
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Repository upload limit", use the drop-down menu and click a maximum object size.
![Drop-down menu with maximum object size options](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Optionally, to enforce a maximum upload limit for all repositories in your enterprise, select **Enforce on all repositories**
![Enforce maximum object size on all repositories option](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## Configuring the merge conflict editor for pull requests between repositories

Requiring users to resolve merge conflicts locally on their computer can prevent people from inadvertently writing to an upstream repository from a fork.

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Conflict editor for pull requests between repositories", use the drop-down menu, and click **Disabled**.
 ![Drop-down menu with option to disable the merge conflict editor](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configuring force pushes

Each repository inherits a default force push setting from the settings of the user account or organization to which it belongs. Likewise, each organization and user account inherits a default force push setting from the force push setting for the enterprise. If you change the force push setting for the enterprise, it will change for all repositories owned by any user or organization.

### Blocking all force pushes on your appliance

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Force pushes", use the drop-down menu, and click **Allow**, **Block** or **Block to the default branch**.
![Force pushes dropdown](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Optionally, select **Enforce on all repositories**, which will override organization and repository level settings for force pushes.

### Blocking force pushes to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Select **Block** or **Block to the default branch** under **Push and Pull**.
   ![Block force pushes](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Blocking force pushes to repositories owned by a user account or organization

Repositories inherit force push settings from the user account or organization to which they belong. User accounts and organizations in turn inherit their force push settings from the force push settings for the enterprise.

You can override the default inherited settings by configuring the settings for a user account or organization.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Under "Repository default settings" in the "Force pushes" section, select
    - **Block** to block force pushes to all branches.
    - **Block to the default branch** to only block force pushes to the default branch.
  ![Block force pushes](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Optionally, select **Enforce on all repositories** to override repository-specific settings. Note that this will **not** override an enterprise-wide policy.
   ![Block force pushes](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% if enterpriseServerVersions contains currentVersion %}

## Configuring anonymous Git read access

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% if enterpriseServerVersions contains currentVersion %}If you have [enabled private mode](/enterprise/admin/configuration/enabling-private-mode) on your enterprise, you {% else %}You {% endif %}can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your enterprise. When you or a repository administrator enable this access setting for a repository, unauthenticated Git operations (and anyone with network access to {% data variables.product.product_name %}) will have read access to the repository without authentication.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on your enterprise by locking the repository's access settings. After you lock a repository's Git read access setting, only a site administrator can change the setting.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Setting anonymous Git read access for all repositories

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Anonymous Git read access", use the drop-down menu, and click **Enabled**.
![Anonymous Git read access drop-down menu showing menu options "Enabled" and "Disabled"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Optionally, to prevent repository admins from changing anonymous Git read access settings in all repositories on your enterprise, select **Prevent repository admins from changing anonymous Git read access**.
![Select checkbox to prevent repository admins from changing anonymous Git read access settings for all repositories on your enterprise](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Setting anonymous Git read access for a specific repository

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Under "Danger Zone", next to "Enable Anonymous Git read access", click **Enable**.
!["Enabled" button under "Enable anonymous Git read access" in danger zone of a repository's site admin settings ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Review the changes. To confirm, click **Yes, enable anonymous Git read access.**
![Confirm anonymous Git read access setting in pop-up window](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Optionally, to prevent repository admins from changing this setting for this repository, select **Prevent repository admins from changing anonymous Git read access**.
![Select checkbox to prevent repository admins from changing anonymous Git read access for this repository](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
## Enforcing a policy on the default branch name

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Default branch name", enter the default branch name that new repositories should use.
    ![Text box for entering default branch name](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Optionally, to enforce the default branch name for all organizations in the enterprise, select **Enforce across this enterprise**.
    ![Enforcement checkbox](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Click **Update**.
    ![Update button](/assets/images/help/business-accounts/default-branch-name-update.png)
{% endif %}
