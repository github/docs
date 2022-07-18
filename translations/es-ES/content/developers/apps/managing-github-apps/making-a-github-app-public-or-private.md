---
title: Hacer pública o privada a una GitHub App
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Administrar la visbilidad de las apps
---

Para obtener información sobre la autenticación, consulta la sección "[Autenticarse con las GitHub Apps](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

## Flujo de instalación pública

Los flujos de las instalaciones públicas tienen una página de llegada para habilitar a otras personas además del propietario de la app para que la instalen en sus repositorios. Este enlace se proprociona en el campo "enlace público" cuando configuras tu GitHub App. Para obtener más información, consulta la sección "[Instalar las GitHub Apps](/apps/installing-github-apps/)".

## Flujo de instalación privada

Los flujos de instalación privada permiten que solo el propietario de la GitHub App pueda instalarla. Aún así, existirá información limitada sobre la GitHub App en una página pública, pero el botón de **Instalar** solo estará disponible para los administradores de la organización o para la cuenta personal si dicha GitHub App le pertenece a una cuenta individual. Private GitHub Apps can only be installed on the user or organization account of the owner.

## Cambiar el quién puede instalar tu GitHub App

Para cambiar quién puede instalar una GitHub App:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. Selecciona la GitHub App cuya opción de instalación quieras cambiar. ![Seleccion de apps](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Depending on the installation option of your GitHub App, click either **Make public** or **Make private**. ![Botón para cambiar la opción de instalación para tu GitHub App](/assets/images/github-apps/github_apps_make_public.png)
6. Dependiendo de la opción de instalación de tu GitHub App, haz clic ya sea en **Sí, hacer esta GitHub App pública** o **Sí, hacer esta GitHub App {% ifversion fpt or ghec %}interna{% else %}privada{% endif %}**. ![Botón para confirmar el cambio de tu opción de instalación](/assets/images/github-apps/github_apps_confirm_installation_option.png)
