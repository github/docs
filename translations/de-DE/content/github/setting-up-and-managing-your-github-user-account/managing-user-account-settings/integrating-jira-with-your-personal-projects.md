---
title: Jira in Deine persönlichen Projekte integrieren
intro: 'Du kannst Jira Cloud in Dein Benutzerkonto integrieren, um Commits und Pull Requests zu scannen und relevante Metadaten und Hyperlinks in allen erwähnten Jira-Issues zu erstellen.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
versions:
  enterprise-server: '*'
  github-ae: '*'
---
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
3. Klicke auf der linken Seitenleiste auf **{% data variables.product.prodname_oauth_app %}**. ![{% data variables.product.prodname_oauth_app %}s tab in the left sidebar](/assets/images/help/settings/developer-settings-oauth-apps.png)
3. Klicke auf **Register a new application** (Eine neue Anwendung registrieren).
4. Gib unter **Application name** (Anwendungsname) „Jira“ ein.
5. Gib unter **Homepage URL** (URL für Startseite) die vollständige URL Deiner Jira-Instanz ein.
6. Gib unter **Authorization callback URL** (Autorisierungs-Callback-URL) die vollständige URL Deiner Jira-Instanz ein.
7. Klicke auf **Register application** (Anwendung registrieren). ![Schaltfläche „Register application“ (Anwendung registrieren)](/assets/images/help/oauth/register-application-button.png)
8. Notiere Dir unter **Developer applications** (Entwickler-Anwendungen) die Werte für „Client ID“ (Client-ID) und „Client Secret“ (Clientgeheimnis). ![Client-ID und Client-Geheimnis](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

### Weiterführende Informationen

- [„Jira in das Projektboard Deiner Organisation integrieren“](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore> Jira Cloud mit GitHub verbinden</a> (Atlassian-Dokumentation)
