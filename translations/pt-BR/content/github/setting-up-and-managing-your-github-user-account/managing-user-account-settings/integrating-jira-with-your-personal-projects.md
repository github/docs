---
title: Integrar o Jira com seus projetos pessoais
intro: 'É possível integrar o Jira Cloud à sua conta de usuário para analisar commits e pull requests, criando metadados e hyperlinks relevantes em qualquer problema mencionado no Jira.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
3. Na barra lateral esquerda, clique em **{% data variables.product.prodname_oauth_app %}s**. ![Aba {% data variables.product.prodname_oauth_app %}s na barra lateral esquerda](/assets/images/help/settings/developer-settings-oauth-apps.png)
3. Clique em **Register a new application** (Registrar novo aplicativo).
4. Em **Application name** (Nome do aplicativo), digite "Jira".
5. Em **Homepage URL** (URL da página inicial), digite a URL completa da sua instância do JIRA.
6. Em **Authorization callback URL** (URL de revogação de autorização), digite a URL completa da sua instância do JIRA.
7. Clique em **Register application** (Registrar aplicativo). ![Botão Register application (registrar aplicativo)](/assets/images/help/oauth/register-application-button.png)
8. Em **Aplicativos do desenvolvedor**, anote os valores "Client ID" (ID do cliente) e "Client Secret" (Chave secreta do cliente). ![Client ID (ID do cliente) e Client Secret (Chave secreta do cliente)](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

### Leia mais

- ["Integrar o Jira com o quadro de projetos da organização"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Conectar o Jira Cloud ao GitHub</a> (documentação Atlassian)
