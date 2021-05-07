---
title: Hacer pública o privada a una GitHub App
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps/
  - /apps/building-github-apps/installation-options-for-github-apps/
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/making-a-github-app-public-or-private
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

Para obtener información sobre la autenticación, consulta la sección "[Autenticarse con las GitHub Apps](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

### Flujo de instalación pública

Los flujos de instalación pública tienen una página de llegada en donde los usuarios comenzarán el flujo de instalación. Este enlace se proprociona en el campo "enlace público" cuando configuras tu GitHub App. Para obtener más información, consulta la sección "[Instalar las GitHub Apps](/apps/installing-github-apps/)".

### Flujo de instalación privada

Los flujos de instalación privada permiten que solo el propietario de la GitHub App pueda instalarla. Aún así, existirá información limitada sobre la GitHub App en una página pública, pero el botón de **Instalar** solo estará disponible para los administradores de la organización o para la cuenta de usuario si dicha GitHub App le pertenece a una cuenta individual. Las GitHub Apps privadas o internas solo se pueden instalar en la cuenta de usuario o de organización del propietario.

### Cambiar el quién puede instalar tu GitHub App

Para cambiar quién puede instalar una GitHub App:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. Selecciona la GitHub App cuya opción de instalación quieras cambiar. ![Seleccion de apps](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Dependiendo de la opción deinstalación de tu GitHub App, da clic ya sea en **Convertir en pública** o en **Convertir en interna**. ![Botón para cambiar la opción de instalación para tu GitHub App](/assets/images/github-apps/github_apps_make_public.png)
6. Dependiendo de la opción de instalación de tu GitHub App, da clic ya sea en **Sí, convertir esta GitHub App en pública** o en **Sí, convertir esta GitHub App en interna**. ![Botón para confirmar el cambio de tu opción de instalación](/assets/images/github-apps/github_apps_confirm_installation_option.png)
