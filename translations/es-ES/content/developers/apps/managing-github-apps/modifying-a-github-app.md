---
title: Modificar una GitHub App
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 9038a938d26aa5f1e9ec3cdec6fcecd417f0baf8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178507'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. En "Información básica", modifica la información que quieras cambiar para la GitHub App.
![Sección de información básica de la aplicación de GitHub](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. Si la aplicación de GitHub va a utilizar el flujo de dispositivos para identificar y autorizar usuarios, haga clic en **Enable device flow** (Habilitar flujo de dispositivos). Para obtener más información sobre el flujo de dispositivos, vea "[Autorizar aplicaciones de OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)".
  ![Captura de pantalla en la que se muestra el campo para habilitar el flujo de dispositivos](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. Haga clic en **Guardar cambios**.
![Botón para guardar los cambios en la aplicación de GitHub](/assets/images/github-apps/github_apps_save_changes.png)
