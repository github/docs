---
title: Integrar o Jira com seus projetos pessoais
intro: 'Você pode integrar o Jira Cloud à sua conta pessoal para digitalizar os commits e pull requests, criando metadados relevantes e hiperlinks em qualquer problema mencionado do Jira.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrar o Jira com projetos
---

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. Clique em **Register a new application** (Registrar novo aplicativo).
2. Em **Application name** (Nome do aplicativo), digite "Jira".
3. Em **Homepage URL** (URL da página inicial), digite a URL completa da sua instância do JIRA.
4. Em **Authorization callback URL** (URL de revogação de autorização), digite a URL completa da sua instância do JIRA.
5. Clique em **Register application** (Registrar aplicativo). ![Botão Register application (registrar aplicativo)](/assets/images/help/oauth/register-application-button.png)
8. Em **Aplicativos do desenvolvedor**, anote os valores "Client ID" (ID do cliente) e "Client Secret" (Chave secreta do cliente). ![Client ID (ID do cliente) e Client Secret (Chave secreta do cliente)](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## Leia mais

- ["Integrar o Jira com o quadro de projetos da organização"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar o Jira Cloud ao GitHub</a> (documentação Atlassian)
