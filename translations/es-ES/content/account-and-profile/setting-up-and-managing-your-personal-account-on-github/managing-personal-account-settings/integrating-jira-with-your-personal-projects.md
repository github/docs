---
title: Integrar Jira con tus proyectos personales
intro: 'Puedes integrar Jira Cloud a tu cuenta personal para escanear confirmaciones y solicitudes de extracción, creando los metadatos e hipervínculos correspondientes en cualquier propuesta de Jira mencionada.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: bc88d865cd9c1c88caf5498eab330b6f11cd2ec0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165169'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Haga clic en **Registrar una nueva aplicación**.
2. En **Nombre de la aplicación**, escriba "Jira".
3. En **URL de página principal**, escriba la dirección URL completa a la instancia de Jira.
4. En **URL de devolución de llamada de autorización**, escriba la dirección URL completa a la instancia de Jira.
5. Haga clic en **Register application** (Registrar aplicación).
![Botón Registrar aplicación](/assets/images/help/oauth/register-application-button.png)
8. En **Aplicaciones para desarrolladores**, anota los valores "Id. de cliente" y "Secreto de cliente".
![Id. de cliente y Secreto de cliente](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Información adicional

- ["Integrar Jira al tablero de proyecto de tu organización"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conexión de Jira Cloud a GitHub</a> (documentación de Atlassian)
