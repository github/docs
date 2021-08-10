---
title: Integrating Jira with your personal projects
intro: 'You can integrate Jira Cloud with your user account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
---
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
3. In the left sidebar, click **{% data variables.product.prodname_oauth_apps %}**.
![{% data variables.product.prodname_oauth_apps %} tab in the left sidebar](/assets/images/help/settings/developer-settings-oauth-apps.png)
3. Click **Register a new application**.
4. Under **Application name**, type "Jira".
5. Under **Homepage URL**, type the full URL to your Jira instance.
6. Under **Authorization callback URL**, type the full URL to your Jira instance.
7. Click **Register application**.
![Register application button](/assets/images/help/oauth/register-application-button.png)
8. Under **Developer applications**, note the "Client ID" and "Client Secret" values.
![Client ID and Client Secret](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

## Further reading

- ["Integrating Jira with your organization project board"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Connect Jira Cloud to GitHub</a> (Atlassian documentation)
