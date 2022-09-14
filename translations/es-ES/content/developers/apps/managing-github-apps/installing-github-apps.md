---
title: Instalar GitHub Apps
intro: 'Cuando tu aplicación es pública, cualquiera puede utilizar{% ifversion fpt or ghec %} the {% data variables.product.prodname_marketplace %} o {% endif %}una URL de instalación para instalar la app en tu repositorio. Cuando tu app es privada, solo tú puedes instalar la app en los repositorios que te pertenecen.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092183'
---
{% note %}

**Nota**: La {% data variables.product.prodname_github_app %} tendrá acceso a los repositorios que cree, incluso si alguien la instala únicamente en repositorios seleccionados.

{% endnote %}

## Instalar tu GitHub App privada en tu repositorio

Una vez que creas una GitHub App privada, puedes instalarla en uno de tuos repositorios de usuario o de organización. Para obtener más información, vea "[Flujo de instalación privada](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)".

1. En la [página de configuración de Aplicaciones de GitHub](https://github.com/settings/apps), seleccione la aplicación.
2. En la barra lateral de la izquierda, haga clic en **Install App** (Instalar aplicación).
3. Haz clic en **Instalar** junto a la cuenta personal o de organización que contiene el repositorio correcto.
4. Instala al app en todos los repositorios o selecciona los repositorios por separado.
![Permisos de instalación de la aplicación](/assets/images/install_permissions.png)
5. Una vez instalada, verás las opciones de configuración para la app en tu cuenta seleccionada. Puedes hacer cambios aquí, o repetir los pasos anteriores para instalar la app en otra cuenta.

{% ifversion fpt or ghec %}
## Ofrecer tu app en GitHub Marketplace

Puede ofrecer una versión gratuita o de pago de la aplicación en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), donde los usuarios pueden buscar y ver los detalles de esta. {% data variables.product.prodname_marketplace %} instala automáticamente una GitHub App cuando se completa una orden.

Para obtener más información sobre cómo mostrar la aplicación en {% data variables.product.prodname_marketplace %}, vea "[Introducción a GitHub Marketplace](/marketplace/getting-started/)".

Para obtener más información sobre cómo los usuarios pueden instalar la aplicación desde {% data variables.product.prodname_marketplace %}, vea "[Comprar e instalar aplicaciones en GitHub Marketplace](/articles/purchasing-and-installing-apps-in-github-marketplace)".

{% endif %}

## Permitir que las personas instalen tu app pública en su repositorio

Puedes habilitar a otras personas para que instalen tu app pública si les proporcionas la URL de instalación en lugares como la página principal de tu app. Entonces puedes dirigirlos a la página principal de tu app desde la página de llegada en GitHub.

 Si estás migrándote desde una App de OAuth hacia una GitHub App, puedes utilizar los parámetros de consulta para preseleccionar los repositorios y la cuenta cuando instalen esta GitHub App. Vea "[Migrar aplicaciones de OAuth a Aplicaciones de GitHub](/apps/migrating-oauth-apps-to-github-apps/)" para obtener más información.

En estos pasos se da por hecho que ha [creado una {% data variables.product.prodname_github_app %}](/apps/building-github-apps/):

1. En la [página de configuración de Aplicaciones de GitHub](https://github.com/settings/apps), seleccione la aplicación pública que quiere configurar para que otros usuarios la instalen.
2. En "Homepage URL" (URL de la página principal), escriba la URL de la página principal de la aplicación y haga clic en **Save changes** (Guardar cambios).
![Dirección URL de la página principal](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub proporciona una página de llegada para tu app, la cual incluye un enlace a la "URL de la Página Principal" de la misma. Para visitar la página de llegada en GitHub, copia la URL de "Enlace público" y pégala en un buscador.
![Vínculo público](/assets/images/github-apps/github_apps_public_link.png)
4. Cree una página principal para la aplicación que incluya la dirección URL de instalación de la aplicación: `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

## Autorizar a los usuarios durante la instalación

Puedes simplificar el proceso de autorización si lo completas durante la instalación de la app. Para ello, seleccione **Request user authorization (OAuth) during installation** (Solicitar la autorización del usuario (OAuth) durante la instalación) al crear o modificar la aplicación en GitHub. Vea "[Crear una aplicación de GitHub](/apps/building-github-apps/creating-a-github-app/)" para obtener más información.

Una vez que alguien instale tu app, necesitarás obtener un token de acceso para el usuario. Vea los pasos 2 y 3 en "[Identificar usuarios en su sitio](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)" para obtener más información.
## Preservar el estado de una aplicación durante su instalación

Puede proporcionar un parámetro `state` en la URL de instalación de una aplicación para conservar el estado de la página de la aplicación y devolver a los usuarios a ese estado después de que instalen, se autentiquen o acepten actualizaciones de su aplicación de GitHub. Por ejemplo, puede utilizar `state` a fin de correlacionar una instalación para un usuario o cuenta.

Para preservar el estado, agrégalo a la URL de instalación:

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
