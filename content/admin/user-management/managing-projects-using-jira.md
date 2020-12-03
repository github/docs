---
title: Managing projects using Jira
intro: 'You can integrate Jira with {% data variables.product.prodname_enterprise %} for project management.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
---

### Connecting Jira to a {% data variables.product.prodname_enterprise %} organization

1. Sign into your {% data variables.product.prodname_enterprise %} account at http[s]://[hostname]/login.
2. Got to http[s]://[hostname]/settings/organizations or alternatively in the top-right corner of GitHub Enterprise Server, click your profile photo, then click **Your organizations**.

![Drop-down with Your Organizations link](https://user-images.githubusercontent.com/59625655/100982733-8b1c7380-359c-11eb-9ab7-62f18581a930.png)

3. Click on **Settings** button for the organisation you'd like to connect to Jira

![image](https://user-images.githubusercontent.com/59625655/101001072-c5910b00-35b2-11eb-9541-7969d7d67803.png)

4. In the left sidebar, under **Developer settings** click **OAuth Apps**.

![image](https://user-images.githubusercontent.com/59625655/101001717-99c25500-35b3-11eb-8fe4-af4692fd5782.png)

5. Click on **Register new application** button.

![image](https://user-images.githubusercontent.com/59625655/101001790-ae9ee880-35b3-11eb-9a05-37343d4d8de4.png)

6. Fill in the application settings:
    - In the **Application name** field, type "Jira".
    - In the **Homepage URL** field, type the full URL of your Jira instance.
    - In the **Authorization callback URL** field, type the full URL of your Jira instance.
7. Click **Register application**.
8. At the top of the page, note the **Client ID** and **Client Secret**. You will need these for configuring your Jira instance.

### Jira instance configuration

1. On your Jira instance, log into an account with administrative access.
2. At the top of the page, click the settings (gear) icon and choose **Applications**.

![image](https://user-images.githubusercontent.com/59625655/101001331-16a0ff00-35b3-11eb-909a-6a58ab6b6288.png)

3. In the left sidebar, under **Integrations**, click **DVCS accounts**.

![image](https://user-images.githubusercontent.com/59625655/101001515-549e2300-35b3-11eb-804c-11f9a50f591e.png)

4. Click **Link Bitbucket or GitHub account**.

![image](https://user-images.githubusercontent.com/59625655/101001584-6aabe380-35b3-11eb-936a-67a1aa8f3504.png)

5. In the **Add New Account** modal, fill in your {% data variables.product.prodname_enterprise %} settings:
    - From the **Host** dropdown menu, choose **GitHub Enterprise**.
    - In the **Team or User Account** field, type the name of your {% data variables.product.prodname_enterprise %} organization or personal account.
    - In the **OAuth Key** field, type the Client ID of your {% data variables.product.prodname_enterprise %} developer application.
    - In the **OAuth Secret** field, type the Client Secret for your {% data variables.product.prodname_enterprise %} developer application.
    - If you don't want to link new repositories owned by your {% data variables.product.prodname_enterprise %} organization or personal account, unselect **Auto Link New Repositories**.
    - If you don't want to enable smart commits, unselect **Enable Smart Commits**.
    - Click **Add**.
6. Review the permissions you are granting to your {% data variables.product.prodname_enterprise %} account and click **Authorize application**.
7. If necessary, type your password to continue.
