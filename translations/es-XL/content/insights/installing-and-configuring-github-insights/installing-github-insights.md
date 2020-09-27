---
title: Instalar la información de GitHub
intro: 'Puedes instalar {{ site.data.variables.product.prodname_insights }} y conectar la aplicación autónoma para {{ site.data.variables.product.prodname_ghe_server }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/installing-github-insights
permissions: 'Los propietarios de la organización en {{ site.data.variables.product.prodname_enterprise }} con los permisos de lectura para el repositorio `github/insights-releases` y el acceso administrativo al servidor de aplicaciones pueden instalar {{ site.data.variables.product.prodname_insights }}.'
versions:
  enterprise-server: '*'
---

### Prerrequisitos

- Debes tener un archivo de licencia {{ site.data.variables.product.prodname_enterprise }} que incluya {{ site.data.variables.product.prodname_insights }}. Después de comprar {{ site.data.variables.product.prodname_insights }}, puedes descargar el archivo de licencia actualizado en el portal web [{{ site.data.variables.product.prodname_enterprise }}](https://enterprise.github.com/download).
- {{ site.data.reusables.github-insights.requires-machine }} Para obtener más información, consulta "[Descripción general del sistema para {{ site.data.variables.product.prodname_insights }}](/github/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)".
- Debes instalar dependencias en el servidor de aplicaciones.
  - [Docker](https://docs.docker.com/install/) 1.13.0 +
  - [Docker Compose](https://docs.docker.com/compose/install/) v1.17.0+

  {% note %}

  **Nota:** {{ site.data.reusables.github-insights.docker-requirements }}

  {% endnote %}

### Crear un {{ site.data.variables.product.prodname_github_app }}

Para conectar {{ site.data.variables.product.prodname_insights }} a {{ site.data.variables.product.prodname_enterprise }}, debes crear un {{ site.data.variables.product.prodname_github_app }} en una organización en {{ site.data.variables.product.prodname_enterprise }}. Se mostrará una versión con slugged del nombre de tu app en {{ site.data.variables.product.prodname_enterprise }} cuando tu integración realiza una acción.

{{ site.data.reusables.enterprise_site_admin_settings.sign-in }}
2. Navega hasta la organización a la que deseas conectarte {{ site.data.variables.product.prodname_insights }}.
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
5. Haz clic en **New (nuevo) {{ site.data.variables.product.prodname_github_app }}**. ![Botón nueva app de GitHub](/assets/images/help/apps/github_apps_new.png)
6. En "Name (nombre) {{ site.data.variables.product.prodname_github_app }}", escribe un nombre para la app. Tu app no puede tener el mismo nombre que un usuario o una organización existente, a menos que el nombre sea tu propio nombre de usuario o de organización. ![Campo de nombre de app de GitHub](/assets/images/help/apps/github_apps_app_name.png)
7. En "Homepage URL" (URL de página principal), escribe la URL del servidor de aplicaciones para {{ site.data.variables.product.prodname_insights }}. Para obtener más información, consulta "[Descripción general del sistema para {{ site.data.variables.product.prodname_insights }}](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)". ![Campo de URL de página principal](/assets/images/help/apps/github_apps_homepage_url.png)
8. En "User authorization callback URL" (URL de llamada de vuelta de autorización del usuario), escribe lo siguiente, reemplazando `<application-server-url>` con la URL del servidor de aplicaciones.
   ```
   <application-server-url>/Public/applogin
   ```
   ![Campo llamada de vuelta de autorización del usuario](/assets/images/help/apps/github_apps_user_authorization.png)
9. En "Setup URL" (configurar URL), escribe `<application-server-url>/public/setup`. ![Campo de configuración de URL](/assets/images/help/apps/github-apps-setup-url.png)
9. En "Webhook URL" (URL de webhook), escribe `<application-server-url>/webhooks`. ![Campo de URL de webhook](/assets/images/help/apps/github_apps_webhook_url.png)
10. En "Secreto de webhook", escribe un secreto y luego graba el secreto para una referencia posterior. ![Campo secreto de webhook](/assets/images/help/apps/github_apps_webhook_secret.png)
11. En "Permissions" (permisos), usa los menús desplegables y configura los siguientes permisos para la app.
    - Repositorio:
      - Contenido: **De solo lectura**
      - Metadatos: **De solo lectura**
      - Solicitudes de extracción: **De solo lectura**
      - Estados de confirmación: **De solo lectura**
    - Organización:
      - Miembros: **De solo lectura**
      - Proyectos: **De solo lectura**

  ![Menús desplegables de permisos](/assets/images/help/apps/github_apps_new_permissions_post2dot13.png)
12. En "Subscribe to Events" (suscribirse a eventos), selecciona:
    - Miembro
    - Solicitud de extracción
    - Subir
    - Repositorio
    - Equipo![Casillas de verificación para suscribirse a eventos](/assets/images/help/apps/github_apps_subscribe_to_events_pr_push_repository.png)

13. Para habilitar el {{ site.data.variables.product.prodname_github_app }} para acceder a los datos de cualquier usuario u organización en {{ site.data.variables.product.product_location_enterprise }}, en "¿Dónde puede {{ site.data.variables.product.prodname_github_app }} ser instalado? ", selecciona **Cualquier cuenta**. ![Botones de opción para habilitar el acceso a cualquier cuenta](/assets/images/help/apps/github_apps_installation_options_any_account.png)
14. Haz clic en **Create (crear) {{ site.data.variables.product.prodname_github_app }}**. ![Botón crear una app de GitHub](/assets/images/help/apps/github_apps_create_github_app.png)
15. Revisa la configuración de tu app.
16. En "Private Keys" (claves privadas), haz clic en **Generar una clave privada**. ![Genera un botón de llave privada](/assets/images/help/apps/generate-private-key.png)
17. Guarda el archivo PEM resultante para una referencia posterior.
18. Anota la siguiente información acerca de tu app para una referencia posterior.
    - ID de app
    - ID de cliente
    - Secreto del cliente
    - Llave privada
    - Secreto de webhook

### Instalar {{ site.data.variables.product.prodname_insights }}

{{ site.data.reusables.github-insights.download-latest-release }}
{{ site.data.reusables.github-insights.install-script }}
{{ site.data.reusables.github-insights.run-script }}

### Configurar {{ site.data.variables.product.prodname_insights }}

Para configurar {{ site.data.variables.product.prodname_insights }} para conectarse a {{ site.data.variables.product.prodname_ghe_server }}, debes proporcionar la información que grabaste en los pasos anteriores.

1. En tu navegador, desplázate hasta `<application-server-url>/setup`.
{{ site.data.reusables.github-insights.enterprise-api-url }}
{{ site.data.reusables.github-insights.insights-license }}
{{ site.data.reusables.github-insights.app-id }}
{{ site.data.reusables.github-insights.client-id }}
{{ site.data.reusables.github-insights.client-secret }}
{{ site.data.reusables.github-insights.private-key }}
{{ site.data.reusables.github-insights.webhook-secret }}
{{ site.data.reusables.github-insights.skip-ssl }}
11. Haz clic en **Submit** (enviar).
12. Haz clic en **Log in with (inicia sesión con) {{ site.data.variables.product.prodname_dotcom }}**.
13. Para autorizar el {{ site.data.variables.product.prodname_github_app }} y acceder a {{ site.data.variables.product.prodname_insights }}, haz clic en **Authorize (autorizar) {{ site.data.variables.product.prodname_github_app }}**.

### Leer más

- "[Administrar repositorios](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "[{{ site.data.variables.product.prodname_insights }} y protección de datos para tu organización](/github/site-policy/github-insights-and-data-protection-for-your-organization)"
