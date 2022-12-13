---
title: Integrar Jira con tus proyectos personales
intro: You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.
redirect_from:
- /articles/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: a9106d979aa0f219bd20fc5b27042dfe8e81fc8c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091937"
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Haz clic en **Registrar una nueva aplicación**.
2. En **Nombre de la aplicación**, escribe "Jira".
3. En **URL de página principal**, escriba la dirección URL completa a la instancia de Jira.
4. En **URL de devolución de llamada de autorización**, escriba la dirección URL completa a la instancia de Jira.
5. Haga clic en **Register application** (Registrar aplicación).
![Botón Registrar aplicación](/assets/images/help/oauth/register-application-button.png)
8. En **Aplicaciones para desarrolladores**, anota los valores "Id. de cliente" y "Secreto de cliente".
![Id. de cliente y Secreto de cliente](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## <a name="further-reading"></a>Información adicional

- ["Integrar Jira al tablero de proyecto de tu organización"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conexión de Jira Cloud a GitHub</a> (documentación de Atlassian)
