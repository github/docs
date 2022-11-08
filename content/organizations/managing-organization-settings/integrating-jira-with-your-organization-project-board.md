---
title: Integrating Jira with your organization project board
intro: 'You can integrate Jira Cloud with your organization account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
---
{% ifversion ghes > 3.4 or ghae > 3.4 %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, select **{% octicon "code" aria-label="The code icon" %} Developer settings**, then click **OAuth Apps**.
  ![OAuth applications tab in the left sidebar](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Click **New OAuth App**.
{% else %}
{% data reusables.user-settings.access_settings %}
1. In the left sidebar under **Organization settings**, click the name of your organization.
![Sidebar organization name](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. In the left sidebar under **Developer settings**, click **OAuth applications**.
  ![OAuth applications tab in the left sidebar](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Click **Register a new application**.
{% endif %}
1. Under **Application name**, type "Jira".
2. Under **Homepage URL**, type the full URL to your Jira instance.
3. Under **Authorization callback URL**, type the full URL to your Jira instance.
4. Click **Register application**.
![Register application button](/assets/images/help/oauth/register-application-button.png)
9. Under **Organization owned applications**, note the "Client ID" and "Client Secret" values.
![Client ID and Client Secret](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## Further reading

- ["Integrating Jira with your personal projects"](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Connect Jira Cloud to GitHub</a> (Atlassian documentation)
