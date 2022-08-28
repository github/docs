---
title: Integrar Jira al tablero de proyecto de tu organización
intro: 'Puedes integrar Jira Cloud a la cuenta de tu organización para escanear confirmaciones y solicitudes de extracción, creando los metadatos e hipervínculos correspondientes en cualquier propuesta de Jira mencionada.'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.access_settings %}
2. En la barra lateral izquierda en **Organization settings** (Configuraciones de la organización), haz clic en el nombre de tu organización. ![Barra lateral Organization name (Nombre de la organización)](/assets/images/help/settings/organization-settings-from-sidebar.png)
3. En la barra lateral de **Developer settings** (Configuraciones del programador), haz clic en **OAuth applications** (Aplicaciones OAuth). ![Pestaña de aplicaciones OAuth de la barra lateral izquierda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
4. Haz clic en **Register a new application** (Registrar una aplicación nueva).
5. En **Application name** (Nombre de la aplicación), escribe "Jira".
6. En **Homepage URL** (URL de la página de inicio), escribe la URL completa de tu instancia de Jira.
7. En **Authorization callback URL** (URL de devolución de llamada de autorización), escribe la URL completa para tu instancia de Jira.
8. Haz clic en **Register application** (Registrar aplicación). ![Botón Register application (Registrar aplicación)](/assets/images/help/oauth/register-application-button.png)
9. En **Organization owned applications** (Aplicaciones propiedad de la organización), presta atención a los valores de "Client ID" (Id. del cliente) y "Client Secret" (Secreto del cliente). ![Id. del cliente y secreto del cliente](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

### Leer más

- ["Integrar Jira a tus proyectos personales"](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar Jira Cloud a GitHub</a> (Documentación de Atlassian)
