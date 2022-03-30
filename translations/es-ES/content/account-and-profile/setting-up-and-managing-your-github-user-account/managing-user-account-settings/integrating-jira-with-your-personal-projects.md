---
title: Integrar Jira con tus proyectos personales
intro: 'Puedes integrar Jira Cloud a tu cuenta de usuario para escanear confirmaciones y solicitudes de extracción, creando los metadatos e hipervínculos correspondientes en cualquier propuesta de Jira mencionada.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrar a Jira con los proyectos
---

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. Haz clic en **Register a new application** (Registrar una aplicación nueva).
2. En **Application name** (Nombre de la aplicación), escribe "Jira".
3. En **Homepage URL** (URL de la página de inicio), escribe la URL completa de tu instancia de Jira.
4. En **Authorization callback URL** (URL de devolución de llamada de autorización), escribe la URL completa para tu instancia de Jira.
5. Haz clic en **Register application** (Registrar aplicación). ![Botón Register application (Registrar aplicación)](/assets/images/help/oauth/register-application-button.png)
8. En **Developer applications** (Aplicaciones del programador), presta atención a los valores de "Client ID" (Id. del cliente) y "Client Secret" (Secreto del cliente). ![Id. del cliente y secreto del cliente](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## Leer más

- ["Integrar Jira al tablero de proyecto de tu organización"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar Jira Cloud a GitHub</a> (Documentación de Atlassian)
