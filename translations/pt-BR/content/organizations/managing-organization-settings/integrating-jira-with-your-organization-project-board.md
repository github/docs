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
---

{% ifversion ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, selecione **Configurações do desenvolvedor de {% octicon "code" aria-label="The code icon" %}** e, em seguida, clique em **aplicativos OAuth**. ![Aba OAuth applications (aplicativos OAuth) na barra lateral esquerda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Clique em **Novo aplicativo OAuth**.
{% else %}
{% data reusables.user-settings.access_settings %}
1. Na barra lateral esquerda, em **Organization settings** (Configurações da organização) clique no nome de sua organização. ![Barra lateral organization name (nome da organização)](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. Na barra lateral esquerda, em **Developer settings** (Configurações do desenvolvedor), clique em **OAuth applications** (Aplicativos OAuth) ![Aba OAuth applications (aplicativos OAuth) na barra lateral esquerda](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Clique em **Register a new application** (Registrar novo aplicativo).
{% endif %}
1. Em **Application name** (Nome do aplicativo), digite "Jira".
2. Em **Homepage URL** (URL da página inicial), digite a URL completa da sua instância do JIRA.
3. Em **Authorization callback URL** (URL de revogação de autorização), digite a URL completa da sua instância do JIRA.
4. Clique em **Register application** (Registrar aplicativo). ![Botão Register application (registrar aplicativo)](/assets/images/help/oauth/register-application-button.png)
9. Em **Organization owned applications** (Aplicativos de propriedade da organização), anote os valores "Client ID" (ID do cliente) e "Client Secret" (Chave secreta do cliente). ![Client ID (ID do cliente) e Client Secret (Chave secreta do cliente)](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## Leia mais

- ["Integrar o Jira com seus projetos pessoais"](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar o Jira Cloud ao GitHub</a> (documentação Atlassian)
