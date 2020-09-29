---
title: Jira in das Projektboard Deiner Organisation integrieren
intro: 'Du kannst Jira Cloud in das Konto Deiner Organisation integrieren, um Commits und Pull Requests zu scannen und relevante Metadaten und Hyperlinks in allen erwähnten Jira-Issues zu erstellen.'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
versions:
  enterprise-server: '*'
---

{% data reusables.user_settings.access_settings %}
2. Klicke auf der linken Seitenleiste unter **Organization settings** (Organisationseinstellungen) auf den Namen Deiner Organisation. ![Organisationsname in Seitenleiste](/assets/images/help/settings/organization-settings-from-sidebar.png)
3. Klicke auf der linken Seitenleiste unter **Developer settings** (Entwicklereinstellungen) auf **OAuth applications** (OAuth-Anwendungen). ![Registerkarte „OAuth applications“ (OAuth-Anwendungen) in der linken Seitenleiste](/assets/images/help/organizations/org-oauth-applications-ghe.png)
4. Klicke auf **Register a new application** (Eine neue Anwendung registrieren).
5. Gib unter **Application name** (Anwendungsname) „Jira“ ein.
6. Gib unter **Homepage URL** (URL für Startseite) die vollständige URL Deiner Jira-Instanz ein.
7. Gib unter **Authorization callback URL** (Autorisierungs-Callback-URL) die vollständige URL Deiner Jira-Instanz ein.
8. Klicke auf **Register application** (Anwendung registrieren). ![Schaltfläche „Register application“ (Anwendung registrieren)](/assets/images/help/oauth/register-application-button.png)
9. Notiere Dir unter **Organization owned applications** (Anwendungen im Besitz der Organisation) die Werte für „Client ID“ (Client-ID) und „Client Secret“ (Client-Geheimnis). ![Client-ID und Client-Geheimnis](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

### Weiterführende Informationen

- [„Jira in Deine persönlichen Projekte integrieren“](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore> Jira Cloud mit GitHub verbinden</a> (Atlassian-Dokumentation)
