---
title: Managing pre-receive hooks on the GitHub Enterprise Server appliance
intro: 'Configure how people will use pre-receive hooks within their {% data variables.product.prodname_ghe_server %} appliance.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  enterprise-server: '*'
---

### Creating pre-receive hooks

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Click **Add pre-receive hook**. ![Add pre-receive hook](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. In the **Hook name** field, enter the name of the hook that you want to create. ![Name pre-receive hook](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. From the **Environment** drop-down menu, select the environment on which you want the hook to run. ![Hook environment](/assets/images/enterprise/site-admin-settings/environment.png)
7. Under **Script**, from the **Select hook repository** drop-down menu, select the repository that contains your pre-receive hook script. From the **Select file** drop-down menu, select the filename of the pre-receive hook script. ![Hook script](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Select **Use the exit-status to accept or reject pushes** to enforce your script. Unselecting this option allows you to test the script while the exit-status value is ignored. In this mode, the output of the script will be visible to the user in the command-line but not on the web interface. ![Use exit-status](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Select **Enable this pre-receive hook on all repositories by default** if you want the pre-receive hook to run on all repositories. ![Enable hook all repositories](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Select **Administrators can enable and disable this hook** to allow organization members with admin or owner permissions to select whether they wish to enable or disable this pre-receive hook. ![Admins enable or disable hook](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

### Editing pre-receive hooks

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Next to the pre-receive hook that you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}. ![Edit pre-receive](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

### Deleting pre-receive hooks

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
2. Next to the pre-receive hook that you want to delete, click {% octicon "x" aria-label="X symbol" %}. ![Edit pre-receive](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

### Configure pre-receive hooks for an organization

An organization administrator can only configure hook permissions for an organization if the site administrator selected the **Administrators can enable or disable this hook** option when they created the pre-receive hook. To configure pre-receive hooks for a repository, you must be an organization administrator or owner.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. In the left sidebar, click **Hooks**. ![Hooks sidebar](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Next to the pre-receive hook that you want to configure, click the **Hook permissions** drop-down menu. Select whether to enable or disable the pre-receive hook, or allow it to be configured by the repository administrators. ![Hook permissions](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

### Configure pre-receive hooks for a repository

A repository owner can only configure a hook if the site administrator selected the **Administrators can enable or disable this hook** option when they created the pre-receive hook. In an organization, the organization owner must also have selected the **Configurable** hook permission. To configure pre-receive hooks for a repository, you must be a repository owner.

{% data reusables.profile.enterprise_access_profile %}
2. Click **Repositories** and select which repository you want to configure pre-receive hooks for. ![Repositories](/assets/images/enterprise/repos/repositories.png)
{% data reusables.repositories.sidebar-settings %}
4. In the left sidebar, click **Hooks & Services**. ![Hooks and services](/assets/images/enterprise/repos/hooks-services.png)
5. Next to the pre-receive hook that you want to configure, click the **Hook permissions** drop-down menu. Select whether to enable or disable the pre-receive hook. ![Repo hook permissions](/assets/images/enterprise/repos/repo-hook-permissions.png)
