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
versions:
  enterprise-server: '*'
---

### Configuring the default visibility of new repositories on your appliance

Each time someone creates a new repository on {% data variables.product.product_location_enterprise %}, that person must choose a visibility for the repository. When you configure a default visibility setting for the instance, you choose which visibility is selected by default. For more information on repository visibility, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

If a site administrator disallows members from creating certain types of repositories, members will not be able to create that type of repository even if the visibility setting defaults to that type. For more information, see "[Restricting repository creation in your instance](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."

{% tip %}

**Tip:** You can restrict the ability to change repository visibility to site administrators only. For more information, see "[Preventing users from changing a repository's visibility](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)."

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Default repository visibility", use the drop-down menu and select a default visibility.
  ![Drop-down menu to choose the default repository visibility for your instance](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

### Setting a policy for changing a repository's visibility

When you prevent members from changing repository visibility, only site administrators have the ability to make public repositories private or make private repositories public.

If a site administrator has restricted repository creation to organization owners only, then members will not be able to change repository visibility. If a site administrator has restricted member repository creation to private repositories only, then members will only be able to change repositories from public to private. For more information, see "[Setting a policy for repository creation](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Under "Repository visibility change", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Setting a policy for repository creation

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Under "Repository creation", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Under "Repository creation", use the drop-down menu and choose a policy.
  ![Drop-down menu with repository creation policies](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

### Setting a policy for repository deletion and transfer

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Under "Repository deletion and transfer", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Setting a policy for Git push limits

To keep your repository size manageable and prevent performance issues, you can configure a file size limit for repositories on your instance.

By default, when you enforce repository upload limits, people cannot add or update files larger than 100 MB.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Note:** Only files larger than {% data variables.large_files.warning_size %} will be checked against the Git push limit. If you need to set a lower push limit, contact {% data variables.contact.contact_ent_support %} for assistance.

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Repository upload limit", use the drop-down menu and click a maximum object size.
![Drop-down menu with maximum object size options](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Optionally, to enforce a maximum upload limit for all repositories on {% data variables.product.product_location_enterprise %}, select **Enforce on all repositories**
![Enforce maximum object size on all repositories option](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

### Configuring the merge conflict editor for pull requests between repositories

Requiring users to resolve merge conflicts locally on their computer can prevent people from inadvertently writing to an upstream repository from a fork.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Conflict editor for pull requests between repositories", use the drop-down menu, and click **Disabled**.
 ![Drop-down menu with option to disable the merge conflict editor](/assets/images/enterprise/settings/conflict-editor-settings.png)

### Configuring force pushes

Each repository inherits a default force push setting from the settings of the user account or organization to which it belongs. Likewise, each organization and user account inherits a default force push setting from the force push setting for the entire appliance. If you change the force push setting for the appliance, it will change for all repositories owned by any user or organization.

#### Blocking all force pushes on your appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Force pushes", use the drop-down menu, and click **Allow**, **Block** or **Block to the default branch**.
![Force pushes dropdown](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Optionally, select **Enforce on all repositories**, which will override organization and repository level settings for force pushes.

#### Blocking force pushes to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Select **Block** or **Block to the default branch** under **Push and Pull**.
   ![Block force pushes](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

#### Blocking force pushes to repositories owned by a user account or organization

Repositories inherit force push settings from the user account or organization to which they belong. User accounts and organizations in turn inherit their force push settings from the force push settings for the entire appliance.

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
6. Optionally, select **Enforce on all repositories** to override repository-specific settings. Note that this will **not** override an appliance-wide policy.
   ![Block force pushes](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

### Configuring anonymous Git read access

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

If you have [enabled private mode](/enterprise/admin/configuration/enabling-private-mode) on your instance, you can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your instance. When you or a repository administrator enable this access setting for a repository, unauthenticated Git operations (and anyone with network access to {% data variables.product.prodname_ghe_server %}) will have read access to the repository without authentication.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on {% data variables.product.product_location_enterprise %} by locking the repository's access settings. After you lock a repository's Git read access setting, only a site administrator can change the setting.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

#### Setting anonymous Git read access for all repositories

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Anonymous Git read access", use the drop-down menu, and click **Enabled**.
![Anonymous Git read access drop-down menu showing menu options "Enabled" and "Disabled"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Optionally, to prevent repository admins from changing anonymous Git read access settings in all repositories on your instance, select **Prevent repository admins from changing anonymous Git read access**.
![Select checkbox to prevent repository admins from changing anonymous Git read access settings for all repositories on your instance](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

#### Setting anonymous Git read access for a specific repository

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


