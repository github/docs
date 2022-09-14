---
title: Integrar o Jira com seus projetos pessoais
intro: 'É possível integrar o Jira Cloud à sua conta pessoal para analisar commits e solicitações de pull, criando metadados e hyperlinks relevantes em qualquer problema mencionado no Jira.'
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
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164589'
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

## Leitura adicional

- ["Integrar o Jira com o quadro de projetos da organização"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar o Jira Cloud ao GitHub</a> (documentação do Atlassian)
