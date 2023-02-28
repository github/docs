---
title: Modifying a GitHub App
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
  - /developers/apps/managing-github-apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. In "Basic information", modify the GitHub App information that you'd like to change.{% ifversion device-flow-is-opt-in %}
1. If your GitHub App will use the device flow to identify and authorize users, click **Enable device flow**. For more information about the device flow, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow)."
  ![Screenshot showing field for enabling device flow](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. Click **Save changes**.
