---
title: Managing projects using Jira
intro: 'You can integrate Jira with {% data variables.product.product_name %} for project management.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-organizations-in-your-enterprise/managing-projects-using-jira
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
---
## Connecting Jira to a {% data variables.product.prodname_enterprise %} organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. Click **New {% data variables.product.prodname_oauth_app %}**.

   {% note %}

   **Note:** If you haven't created an app before, this button will say, **Register an application**.

   {% endnote %}
1. Fill in the application settings:
    * In the **Application name** field, type "Jira" or any name you would like to use to identify the Jira instance.
    * In the **Homepage URL** field, type the full URL of your Jira instance.
    * In the **Authorization callback URL** field, type the full URL of your Jira instance.
1. Click **Register application**.
1. At the top of the page, note the **Client ID** and **Client Secret**. You will need these for configuring your Jira instance.

## Jira instance configuration

1. On your Jira instance, log into an account with administrative access.
1. At the top of the page, click the settings (gear) icon and choose **Applications**.
1. In the left sidebar, under **Integrations**, click **DVCS accounts**.
1. Click **Link Bitbucket Cloud or {% data variables.product.prodname_dotcom %} account**.
1. In the **Add New Account** modal, fill in your {% data variables.product.prodname_enterprise %} settings:
    * From the **Host** dropdown menu, choose **{% data variables.product.prodname_enterprise %}**.
    * In the **Team or User Account** field, type the name of your {% data variables.product.prodname_enterprise %} organization or user account.
    * In the **OAuth Key** field, type the Client ID of your {% data variables.product.prodname_enterprise %} developer application.
    * In the **OAuth Secret** field, type the Client Secret for your {% data variables.product.prodname_enterprise %} developer application.
    * If you don't want to link new repositories owned by your {% data variables.product.prodname_enterprise %} organization or user account, deselect **Auto Link New Repositories**.
    * If you don't want to enable smart commits, deselect **Enable Smart Commits**.
    * Click **Add**.
1. Review the permissions you are granting to your {% data variables.product.prodname_enterprise %} account and click **Authorize application**.
1. If necessary, type your password to continue.
