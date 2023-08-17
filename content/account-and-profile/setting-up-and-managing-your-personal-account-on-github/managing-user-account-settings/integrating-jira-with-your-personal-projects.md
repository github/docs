---
title: Integrating Jira with your personal projects
intro: 'You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
---
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. Click **Register a new application**.
1. Under **Application name**, type "Jira".
1. Under **Homepage URL**, type the full URL to your Jira instance.
1. Under **Authorization callback URL**, type the full URL to your Jira instance.
1. Click **Register application**.
1. Under **Developer applications**, note the "Client ID" and "Client Secret" values.
{% data reusables.user-settings.jira_help_docs %}

## Further reading

- "[AUTOTITLE](/organizations/managing-organization-settings/integrating-jira-with-your-organization-project-board)"
- [Connect Jira Cloud to GitHub](https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html) in the Atlassian documentation
