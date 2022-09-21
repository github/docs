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
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065894'
---
Para obtener información sobre la autenticación, consulta "[Autenticarse con GitHub Apps](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

## Flujo de instalación pública

Los flujos de las instalaciones públicas tienen una página de llegada para habilitar a otras personas además del propietario de la app para que la instalen en sus repositorios. Este enlace se proprociona en el campo "enlace público" cuando configuras tu GitHub App. Para obtener más información, consulta "[Instalar GitHub Apps](/apps/installing-github-apps/)."

## Flujo de instalación privada

Los flujos de instalación privada permiten que solo el propietario de la GitHub App pueda instalarla. Aún así, existirá información limitada sobre la aplicación de GitHub en una página pública, pero el botón **Instalar** solo estará disponible para los administradores de la organización o para la cuenta personal si dicha aplicación pertenece a una cuenta individual. Las aplicaciones de GitHub Apps privadas solo se pueden instalar en la cuenta de usuario o de organización del propietario.

## Cambiar el quién puede instalar tu GitHub App

Para cambiar quién puede instalar una GitHub App:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. Selecciona la GitHub App cuya opción de instalación quieras cambiar.
![Selección de aplicaciones](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. Según la opción de instalación de tu aplicación de GitHub Apps, haz clic en **Hacer pública** o **Hacer privada**.
![Botón para cambiar la opción de instalación para tu aplicación de GitHub Apps](/assets/images/github-apps/github_apps_make_public.png)
6. Según la opción de instalación de tu aplicación de GitHub Apps, haz clic en **Sí, hacer pública esta aplicación de GitHub Apps** o en **Sí, hacer {% ifversion fpt or ghec %}interna{% else %}private{% endif %} esta aplicación de GitHub Apps**.
![Botón para confirmar el cambio de la opción de instalación](/assets/images/github-apps/github_apps_confirm_installation_option.png)
