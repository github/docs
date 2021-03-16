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

1. Sign into your {% data variables.product.prodname_enterprise %} account at http[s]://[hostname]/login. If already signed in, click on GitHub logo in the top left corner.
2. Click on your profile icon under the GitHub logo and select the organization you would like to connect with Jira.

<img src="https://user-images.githubusercontent.com/59625655/101296725-23ef0f80-3879-11eb-9a20-28be17b04481.png" width="300">

3. Click on **Edit <org name> settings** link

<img src="https://user-images.githubusercontent.com/59625655/101296763-6284ca00-3879-11eb-9d19-3c794714f39a.png" width="400">

4. In the left sidebar, under **Developer settings** click **OAuth Apps**.

<img src="https://user-images.githubusercontent.com/59625655/101296854-e8087a00-3879-11eb-8d9e-c9777605c0e0.png" width="200">

5. Click on **Register new application** button.

![image](https://user-images.githubusercontent.com/59625655/101001790-ae9ee880-35b3-11eb-9a05-37343d4d8de4.png)

6. Fill in the application settings:
    - In the **Application name** field, type "Jira" or any name you would like to use to identify the Jira instance.
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
