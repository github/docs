---
title: Integrar Jira al tablero de proyecto de tu organización
intro: 'Puedes integrar Jira Cloud a la cuenta de tu organización para escanear confirmaciones y solicitudes de extracción, creando los metadatos e hipervínculos correspondientes en cualquier propuesta de Jira mencionada.'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
ms.openlocfilehash: 0b773dc865373ab006f7c596b50ac81af5d6636a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126223'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral de la izquierda, seleccione **{% octicon "code" aria-label="The code icon" %} Configuración de desarrollador** y, después, haga clic en **Aplicaciones de OAuth**.
  ![Pestaña Aplicaciones de OAuth en la barra lateral izquierda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Haga clic en **Nueva aplicación de OAuth**.
{% else %} {% data reusables.user-settings.access_settings %}
1. En la barra lateral de la izquierda, en **Configuración de la organización**, haga clic en el nombre de la organización.
![Barra lateral Nombre de la organización](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. En la barra lateral de la izquierda, en **Configuración del desarrollador**, haga clic en **Aplicaciones de OAuth**.
  ![Pestaña Aplicaciones de OAuth en la barra lateral izquierda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Haga clic en **Registrar una nueva aplicación**.
{% endif %}
1. En **Nombre de la aplicación**, escriba "Jira".
2. En **URL de página principal**, escriba la dirección URL completa a la instancia de Jira.
3. En **URL de devolución de llamada de autorización**, escriba la dirección URL completa a la instancia de Jira.
4. Haga clic en **Register application** (Registrar aplicación).
![Botón Registrar aplicación](/assets/images/help/oauth/register-application-button.png)
9. En **Aplicaciones propiedad de la organización**, anote los valores "Id. de cliente" y "Secreto de cliente".
![Id. de cliente y Secreto de cliente](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Información adicional

- ["Integración de Jira con proyectos personales"](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conexión de Jira Cloud a GitHub</a> (documentación de Atlassian)
