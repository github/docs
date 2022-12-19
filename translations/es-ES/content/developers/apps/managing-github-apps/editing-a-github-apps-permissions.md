---
title: Editar los permisos de una GitHub App
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092186'
---
{% note %}

**Nota**: Los permisos actualizados no tendrán efecto en una instalación hasta que el propietario de la cuenta o de la organización apruebe los cambios. Puede usar el [webhook InstallationEvent](/webhooks/event-payloads/#installation) a fin de averiguar cuándo aceptan los usuarios permisos nuevos para la aplicación. Una excepción es [permisos de nivel de usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), que no requieren que el propietario de la cuenta apruebe los cambios en los permisos.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Selecciona la GitHub App de la cual quieras cambiar los permisos.
![Selección de la aplicación](/assets/images/github-apps/github_apps_select-app.png)
5. En la barra lateral izquierda, haga clic en **Permissions & webhooks** (Permisos y webhooks).
![Permisos y webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Modifica los permisos que te gustaría cambiar. Para cada tipo de permiso, seleccione "Read-only" (Solo lectura), "Read & write" (Lectura y escritura) o "No access" (Sin acceso) del menú desplegable.
![Selecciones de permisos para la aplicación de GitHub](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. En "suscribirse a los eventos", selecciona cualquier evento al que quieras suscribir a tu app.
![Selecciones de permisos para suscribir la aplicación de GitHub App a los eventos](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Opcionalmente, en "agregar una nota para los usuarios", agrega una nota que indique a tus usuarios el por qué estás cambiando los permisos que solicita tu GitHub App.
![Cuadro de entrada a fin de agregar una nota para los usuarios que explique por qué han cambiado los permisos de la aplicación de GitHub](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Haga clic en **Guardar cambios**.
![Botón para guardar los cambios en los permisos](/assets/images/github-apps/github_apps_save_changes.png)
