---
title: Instalar GitHub Apps
intro: 'Cuando tu app es pública, cualquiera puede utilizar {% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_marketplace %} o {% endif %}una URL de instalación para instalar la app en tu repositorio. Cuando tu app es privada, solo tú puedes instalar la app en los repositorios que te pertenecen.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% note %}

**Nota:** Tu {% data variables.product.prodname_github_app %} tendra acceso a cualquier repositorio que ella misma cree, aún si alguien la instala únicamente en repositorios selectos.

{% endnote %}

### Instalar tu GitHub App privada en tu repositorio

Una vez que creas una GitHub App privada, puedes instalarla en uno de tuos repositorios de usuario o de organización. Para obtener más información, consulta la sección "[Flujo de instalación privada](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)".

1. Selecciona tu app desde la [página de configuración de GitHub Apps](https://github.com/settings/apps).
2. En la barra lateral izquierda, da clic en **Instalar App**.
3. Da clic en **Instalar** junto a la cuenta de usuario o de organización que contiene el repositorio correcto.
4. Instala al app en todos los repositorios o selecciona los repositorios por separado. ![Permisos de instalación de la aplicación](/assets/images/install_permissions.png)
5. Una vez instalada, verás las opciones de configuración para la app en tu cuenta seleccionada. Puedes hacer cambios aquí, o repetir los pasos anteriores para instalar la app en otra cuenta.

{% if currentVersion == "free-pro-team@latest" %}
### Ofrecer tu app en GitHub Marketplace

Puedes ofrecer una versión gratuita o pagada de tu app en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), en donde las personas pueden uscar y ver los detalles de la misma. {% data variables.product.prodname_marketplace %} instala automáticamente una GitHub App cuando se completa una orden.

Consulta la sección "[Comenzar con GitHub Marketplace](/marketplace/getting-started/)" para aprender más acerca de listar tu app en {% data variables.product.prodname_marketplace %}.

Para aprender más acerca de cómo los usuarios pueden instalar tu app desde {% data variables.product.prodname_marketplace %}, consulta la sección "[Comprar e instalar apps en GitHub Marketplace](/articles/purchasing-and-installing-apps-in-github-marketplace)".

{% endif %}

### Permitir que las personas instalen tu app pública en su repositorio

Puedes habilitar a otras personas para que instalen tu app pública si les proporcionas la URL de instalación en lugares como la página principal de tu app. Entonces puedes dirigirlos a la página principal de tu app desde la página de llegada en GitHub.

 Si estás migrándote desde una App de OAuth hacia una GitHub App, puedes utilizar los parámetros de consulta para preseleccionar los repositorios y la cuenta cuando instalen esta GitHub App. Consulta la secicón "[Migrar de Apps de OAuth a GitHub Apps](/apps/migrating-oauth-apps-to-github-apps/)" para aprender más.

Estos pasos asumen que has [creado una {% data variables.product.prodname_github_app %}](/apps/building-github-apps/):

1. Desde la [Página de configuración de GitHub Apps](https://github.com/settings/apps), selecciona la app pública que quieres configurar para que los demás la instalen.
2. En "URL de la Página Principal", teclea la URL de la página principal de tu app y da clic en **Guardar cambios**. ![URL de la página de inicio](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub proporciona una página de llegada para tu app, la cual incluye un enlace a la "URL de la Página Principal" de la misma. Para visitar la página de llegada en GitHub, copia la URL de "Enlace público" y pégala en un buscador. ![Enlace público](/assets/images/github-apps/github_apps_public_link.png)
4. Crear una página principal para tu app que incluya la URL de instalación de la misma: `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

### Autorizar a los usuarios durante la instalación

Puedes simplificar el proceso de autorización si lo completas durante la instalación de la app. Para hacerlo, sleecciona **Solicitar la autorización del usuario (OAuth) durante la instalación** al crear o modificar tu app en GitHub. Consulta la sección "[Crear una GitHub App](/apps/building-github-apps/creating-a-github-app/)" para aprender más al respecto.

Una vez que alguien instale tu app, necesitarás obtener un token de acceso para el usuario. Consulta los pasos 2 y 3 en la sección "[Indentificar a los usuarios en tu sitio](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)" para aprender más al respecto.
### Preservar el estado de una aplicación durante su instalación

Puedes proporcionar un parámetro de `state` en la URL de instalación de una app para preservar el estado de la página de la aplicación y regresar a las personas a ese estado después de que instalen, se autentiquen, o acepten actualizaciones de tu GitHub App. Por ejemplo, puedes utilizar el `state` para correlacionar una instalación para el usuario o cuenta.

Para preservar el estado, agrégalo a la URL de instalación:

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
