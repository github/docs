---
title: Integrar o Jira com o quadro de projetos da organização
intro: 'É possível integrar o Jira Cloud à conta de sua organização para analisar commits e pull requests, criando metadados e hyperlinks relevantes em qualquer problema mencionado no Jira.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097271'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, selecione **{% octicon "code" aria-label="The code icon" %} Configurações do desenvolvedor** e clique em **Aplicativos OAuth**.
  ![Guia Aplicativos OAuth na barra lateral esquerda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Clique em **Novo Aplicativo OAuth**.
{% else %} {% data reusables.user-settings.access_settings %}
1. Na barra lateral esquerda, em **Configurações da organização**, clique 'no nome da sua organização.
![Nome da organização na barra lateral](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. Na barra lateral esquerda, em **Configurações do desenvolvedor**, clique em **Aplicativos OAuth**.
  ![Guia Aplicativos OAuth na barra lateral esquerda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Clique em **Registrar um novo aplicativo**.
{% endif %}
1. Em **Nome do aplicativo**, digite "Jira".
2. Em **URL da Home Page**, digite a URL completa para sua instância do Jira.
3. Na **URL de retorno de chamada de autorização**, digite a URL completa para sua instância do Jira.
4. Clique em **Registrar aplicativo**.
![Botão Registrar aplicativo](/assets/images/help/oauth/register-application-button.png)
9. Em **Aplicativos pertencentes à organização**, anote os valores "ID do Cliente" e "Segredo do Cliente".
![ID do Cliente e Segredo do Cliente](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Leitura adicional

- ["Como integrar o Jira aos seus projetos pessoais"](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar o Jira Cloud ao GitHub</a> (documentação do Atlassian)
