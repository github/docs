---
title: Instalar o GitHub Insights
intro: 'Você pode instalar o {% data variables.product.prodname_insights %} e conectar o aplicativo autônomo ao {% data variables.product.prodname_ghe_server %}.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/installing-github-insights
permissions: 'Proprietários da organização em {% data variables.product.prodname_enterprise %} com permissões de leitura para o repositório `github/insights-releases` e acesso de administrador ao servidor de aplicativos pode instalar o {% data variables.product.prodname_insights %}.'
versions:
  enterprise-server: '*'
---

### Pré-requisitos

- Você deve ter um arquivo de licença do {% data variables.product.prodname_enterprise %} que inclui {% data variables.product.prodname_insights %}. Após comprar {% data variables.product.prodname_insights %}, você pode fazer o download do arquivo de licença atualizado no portal [{% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).
- {% data reusables.github-insights.requires-machine %} Para obter mais informações, consulte "[Visão geral do sistema para {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)".
- Você precisa instalar dependências no servidor do aplicativo.
  - [Docker](https://docs.docker.com/install/) 1.13.0+
  - [Docker Compose](https://docs.docker.com/compose/install/) v1.17.0+
  - [netcat](http://netcat.sourceforge.net/), disponível via apt para [Debian](https://packages.debian.org/search?keywords=netcat) e [Ubuntu](https://packages.ubuntu.com/search?keywords=netcat&searchon=names)

  {% note %}

  **Observação:** {% data reusables.github-insights.docker-requirements %}

  {% endnote %}

### Criar {% data variables.product.prodname_github_app %}

Para conectar {% data variables.product.prodname_insights %} a {% data variables.product.prodname_enterprise %}, você deve criar um {% data variables.product.prodname_github_app %} em uma organização no {% data variables.product.prodname_enterprise %}. Uma versão com slug do nome do seu aplicativo será exibida no {% data variables.product.prodname_enterprise %} quando sua integração executar uma ação.

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. Acesse a organização à qual você deseja conectar-se
{% data variables.product.prodname_insights %}.
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
5. Clique em **Novo {% data variables.product.prodname_github_app %}**. ![Botão novo aplicativo do GitHub](/assets/images/help/apps/github_apps_new.png)
6. Em " nome de {% data variables.product.prodname_github_app %}" , digite um nome para o aplicativo. O seu aplicativo não pode ter o mesmo nome de um usuário ou organização existente, a menos que o nome seja o seu próprio usuário ou nome da organização. ![Campo do nome do aplicativo GitHub](/assets/images/help/apps/github_apps_app_name.png)
7. Em "URL da página inicial", digite a URL do servidor do aplicativo para o {% data variables.product.prodname_insights %}. Para obter mais informações, consulte "[Visão geral do sistema para o {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)". ![Campo de URL da página inicial](/assets/images/help/apps/github_apps_homepage_url.png)
8. Em "User authorization callback URL" (URL de retorno de chamada do usuário), digite o seguinte, substituindo `<application-server-url>` pela URL do servidor do aplicativo.
   ```
   <application-server-url>/public/applogin
   ```
   ![Campo de chamada de retorno de autorização do usuário](/assets/images/help/apps/github_apps_user_authorization.png)
9. Em "Setup URL", digite `<application-server-url>/public/setup`. ![Campo da URL de configuração](/assets/images/help/apps/github-apps-setup-url.png)
9. Em "Webhook URL" (URL do webhook), digite `<application-server-url>/webhooks`. ![Campo da URL do webhook](/assets/images/help/apps/github_apps_webhook_url.png)
10. Em "Segredo do webhook", digite um segredo e, em seguida, grave o segredo para referência posterior. ![Campo secreto Webhook](/assets/images/help/apps/github_apps_webhook_secret.png)
11. Em "Permissões", use os menus suspensos e configure as permissões a seguir para o aplicativo.
    - Repositório:
      - Conteúdo: **Somente leitura**
      - Metadados: **Somente leitura**
      - Pull requests: **Somente leitura**
      - Status do commit: **Somente leitura**
    - organização:
      - Integrantes: **Somente leitura**
      - Projetos: **Somente leitura**

  ![Menus suspenso de permissões](/assets/images/help/apps/github_apps_new_permissions_post2dot13.png)
12. Em "Assinar eventos", selecione:
    - Integrante
    - Pull request
    - Push
    - Repositório
    - Equipe ![Caixa de seleção para assinar eventos](/assets/images/help/apps/github_apps_subscribe_to_events_pr_push_repository.png)

13. Para habilitar o {% data variables.product.prodname_github_app %} para acessar dados de qualquer usuário ou organização em {% data variables.product.product_location %}, em "Onde este {% data variables.product.prodname_github_app %} pode ser instalado? , selecione **Qualquer conta**. ![Botões de opção para permitir acesso a qualquer conta](/assets/images/help/apps/github_apps_installation_options_any_account.png)
14. Clique em **Criar {% data variables.product.prodname_github_app %}**. ![Botão Criar um aplicativo GitHub](/assets/images/help/apps/github_apps_create_github_app.png)
15. Revise a configuração do seu aplicativo.
16. Em "Chaves privadas", clique em **Gerar uma chave privada**. ![Gerar um botão de chave privada](/assets/images/help/apps/generate-private-key.png)
17. Salve o arquivo PEM resultante para referência posterior.
18. Anote as informações a seguir sobre seu aplicativo para referência posterior.
    - ID do aplicativo
    - ID do cliente
    - Segredo do cliente
    - Chave privada
    - Segredo do webhook

### Instalar o {% data variables.product.prodname_insights %}

{% data reusables.github-insights.download-latest-release %}
{% data reusables.github-insights.install-script %}
{% data reusables.github-insights.run-script %}

### Configurar o {% data variables.product.prodname_insights %};

Para configurar o {% data variables.product.prodname_insights %} para conectar-se a {% data variables.product.prodname_ghe_server %}, você deve fornecer as informações gravadas nas etapas anteriores.

1. No seu navegador, acesse `<application-server-url>/setup`.
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.insights-license %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
11. Clique em **Enviar**.
12. Clique **Iniciar sessão com {% data variables.product.prodname_dotcom %}**.
13. Para autorizar o {% data variables.product.prodname_github_app %} e acessar {% data variables.product.prodname_insights %}, clique em **Autorizar {% data variables.product.prodname_github_app %}**.

### Leia mais

- "[Gerenciar repositórios](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "<a href="/github/site-policy/github-insights-and-data-protection-for-your-organization" class="dotcom-only">{% data variables.product.prodname_insights %} e proteção de dados para sua organização</a>"
