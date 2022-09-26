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
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
---
## Connecting Jira to a {% data variables.product.prodname_enterprise %} organization

1. Sign into your {% data variables.product.prodname_enterprise %} account at http[s]://[hostname]/login. If already signed in, click on the {% data variables.product.prodname_dotcom %} logo in the top left corner.
2. Click on your profile icon under the {% data variables.product.prodname_dotcom %} logo and select the organization you would like to connect with Jira.

  ![Select an organization](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Click on the **Edit _organization name_ settings** link.

  ![Edit organization settings](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. In the left sidebar, under **Developer settings**, click **OAuth Apps**.

  ![Select OAuth Apps](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Click on the **Register new application** button.

  ![Register new application button](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Fill in the application settings:
    - In the **Application name** field, type "Jira" or any name you would like to use to identify the Jira instance.
    - In the **Homepage URL** field, type the full URL of your Jira instance.
    - In the **Authorization callback URL** field, type the full URL of your Jira instance.
7. Click **Register application**.
8. At the top of the page, note the **Client ID** and **Client Secret**. You will need these for configuring your Jira instance.

## Jira instance configuration

1. On your Jira instance, log into an account with administrative access.
2. At the top of the page, click the settings (gear) icon and choose **Applications**.

  ![Select Applications on Jira settings](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. In the left sidebar, under **Integrations**, click **DVCS accounts**.

  ![Jira Integrations menu - DVCS accounts](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Click **Link Bitbucket Cloud or {% data variables.product.prodname_dotcom %} account**.

  ![Link GitHub account to Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. In the **Add New Account** modal, fill in your {% data variables.product.prodname_enterprise %} settings:
    - From the **Host** dropdown menu, choose **{% data variables.product.prodname_enterprise %}**.
    - In the **Team or User Account** field, type the name of your {% data variables.product.prodname_enterprise %} organization or user account.
    - In the **OAuth Key** field, type the Client ID of your {% data variables.product.prodname_enterprise %} developer application.
    - In the **OAuth Secret** field, type the Client Secret for your {% data variables.product.prodname_enterprise %} developer application.
    - If you don't want to link new repositories owned by your {% data variables.product.prodname_enterprise %} organization or user account, deselect **Auto Link New Repositories**.
    - If you don't want to enable smart commits, deselect **Enable Smart Commits**.
    - Click **Add**.
6. Review the permissions you are granting to your {% data variables.product.prodname_enterprise %} account and click **Authorize application**.
7. If necessary, type your password to continue.
