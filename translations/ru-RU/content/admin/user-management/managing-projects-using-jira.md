---
title: Managing projects using JIRA
intro: 'You can integrate JIRA with {% data variables.product.prodname_enterprise %} for project management.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
---

### Connecting JIRA to a {% data variables.product.prodname_enterprise %} organization

1. Sign into your {% data variables.product.prodname_enterprise %} account at http[s]://[hostname]/login.
1. In the upper right corner of any page, click the account settings (gear) icon.
1. In the left sidebar, click the name of your organization.
1. In the left sidebar, click **Applications**.
1. In the upper right corner of the **Organization applications** box, click **Register new application**.
1. Fill in the application settings:
    - In the **Application name** field, type "JIRA".
    - In the **Homepage URL** field, type the full URL of your JIRA instance.
    - In the **Authorization callback URL** field, type the full URL of your JIRA instance.
1. Click **Register application**.
1. At the top of the page, note the **Client ID** and **Client Secret**. You will need these for configuring your JIRA instance.

### JIRA instance configuration

1. On your JIRA instance, log into an account with administrative access.
1. At the top of the page, click the settings (gear) icon.
1. In the settings dropdown, choose **Add-ons**.
1. In the left sidebar, under **Source control**, click **DVCS accounts**.
1. Click **Link Bitbucket or GitHub account**.
1. In the **Add New Account** modal, fill in your {% data variables.product.prodname_enterprise %} settings:
    - From the **Host** dropdown menu, choose **GitHub Enterprise**.
    - In the **Team or User Account** field, type the name of your {% data variables.product.prodname_enterprise %} organization or personal account.
    - In the **OAuth Key** field, type the Client ID of your {% data variables.product.prodname_enterprise %} developer application.
    - In the **OAuth Secret** field, type the Client Secret for your {% data variables.product.prodname_enterprise %} developer application.
    - If you don't want to link new repositories owned by your {% data variables.product.prodname_enterprise %} organization or personal account, unselect **Auto Link New Repositories**.
    - If you don't want to enable smart commits, unselect **Enable Smart Commits**.
    - Click **Add**.
1. Review the permissions you are granting to your {% data variables.product.prodname_enterprise %} account and click **Authorize application**.
1. If necessary, type your password to continue.
