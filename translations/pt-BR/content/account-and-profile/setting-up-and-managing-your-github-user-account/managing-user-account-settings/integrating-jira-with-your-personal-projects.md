---
title: Integrar o Jira com seus projetos pessoais
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
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083747"
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Clique em **Registrar um novo aplicativo**.
2. Em **Nome do aplicativo**, digite "Jira".
3. Em **URL da Home Page**, digite a URL completa para sua instância do Jira.
4. Na **URL de retorno de chamada de autorização**, digite a URL completa para sua instância do Jira.
5. Clique em **Registrar aplicativo**.
![Botão Registrar aplicativo](/assets/images/help/oauth/register-application-button.png)
8. Em **Aplicativos do desenvolvedor**, anote os valores de "ID do Cliente" e "Segredo do Cliente".
![ID do Cliente e Segredo do Cliente](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## <a name="further-reading"></a>Leitura adicional

- ["Integrar o Jira com o quadro de projetos da organização"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar o Jira Cloud ao GitHub</a> (documentação do Atlassian)
