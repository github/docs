---
title: Managing pre-receive hooks on your instance
intro: 'Configure how people will use pre-receive hooks on {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
---
## Creating pre-receive hooks

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Click **Add pre-receive hook**.
1. In the "Hook name" field, enter the name of the hook that you want to create.
1. Select the **Environment** dropdown menu, then click the environment on which you want the hook to run.
1. Under "Script," select the **Select hook repository** dropdown menu, then click the repository that contains your pre-receive hook script.
1. Select the **Select file** drop-down menu, then click the filename of the pre-receive hook script.
1. To enforce your script, select **Use the exit-status to accept or reject pushes**. Deselecting this option allows you to test the script while the exit-status value is ignored. In this mode, the output of the script will be visible to the user in the command-line but not on the web interface.
1. If you want the pre-receive hook to run on all repositories, select **Enable this pre-receive hook on all repositories by default**.
1. To allow organization members with admin or owner permissions to select whether they wish to enable or disable this pre-receive hook, select **Administrators can enable and disable this hook**.

## Editing pre-receive hooks

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Next to the pre-receive hook that you want to edit, click **Edit**.

## Deleting pre-receive hooks

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Next to the pre-receive hook that you want to delete, click **Delete**.

## Configure pre-receive hooks for an organization

An organization owner can only configure hook permissions for an organization if the site administrator selected the **Administrators can enable or disable this hook** option when they created the pre-receive hook. To configure pre-receive hooks for a repository, you must be an organization owner.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, click **Hooks**.
1. Next to the pre-receive hook that you want to configure, select the **Hook permissions** dropdown menu, then click an option.

## Configure pre-receive hooks for a repository

A repository owner can only configure a hook if the site administrator selected the **Administrators can enable or disable this hook** option when they created the pre-receive hook. In an organization, the organization owner must also have selected the **Configurable** hook permission. To configure pre-receive hooks for a repository, you must be a repository owner.

{% data reusables.profile.enterprise_access_profile %}
1. Navigate to the repository that you want to configure pre-receive hooks for.
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, click {% octicon "webhook" aria-hidden="true" %} **Hooks**.
1. Next to the pre-receive hook that you want to configure, select the **Hook permissions** dropdown menu, then click whether to enable or disable the pre-receive hook.
