---
title: Gerenciar projetos usando o Jira
intro: 'Você pode integrar o Jira com {% data variables.product.prodname_enterprise %} para o gerenciamento de projeto.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Project management
---

### Conectar o Jira a uma organização de {% data variables.product.prodname_enterprise %}

1. Entre na sua conta do {% data variables.product.prodname_enterprise %} em http[s]://[hostname]/login. Se já conectado, clique no logotipo de {% data variables.product.prodname_dotcom %} no canto superior esquerdo.
2. Clique no seu ícone de perfil abaixo do logotipo de {% data variables.product.prodname_dotcom %} e selecione a organização que você deseja que se conecte com o Jira.

  ![Selecione uma organização](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Clique no link de configuração **Editar _nome da organização_ **.

  ![Editar configurações da organização](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. Na barra lateral esquerda, em **Configurações do desenvolvedor**, clique em **Aplicativos OAuth**.

  ![Selecionar aplicativos OAuth](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Clique no botão **Registrar novo aplicativo**.

  ![Botão para cadastrar novo aplicativo](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Defina as configurações do aplicativo:
    - No campo **do nome do aplicativo**, digite "Jira" ou qualquer nome que você gostaria de usar para identificar a instância do Jira.
    - No campo **Homepage URL**, digite a URL completa da sua instância do Jira.
    - No campo **URL de retorno de chamada de autorização**, digite a URL completa de sua instância do Jira.
7. Clique em **Register application** (Registrar aplicativo).
8. Na parte superior da página, anote os dados dos campos **Client ID** (ID do cliente) e **Client Secret** (Segredo do cliente). Você precisará dessas informações para configurar sua instância do Jira.

### Configuração da instância do Jira

1. Na instância do Jira, faça login em uma conta com acesso administrativo.
2. Na parte superior da página, clique no ícone de configurações (engrenagem) e selecione **Aplicativos**.

  ![Selecionar aplicativos nas configurações do Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. Na barra lateral esquerda, em **Integrações**, clique em **contas DVCS**.

  ![Menu de Integrações do Jira - Contas DVCS](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Clique **Link Bitbucket Cloud ou conta de {% data variables.product.prodname_dotcom %}**.

  ![Vincular conta do GitHub ao Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. No modal **Add New Account** (Adicionar nova conta), defina as configurações do {% data variables.product.prodname_enterprise %}:
    - No menu suspenso **Host**, selecione **{% data variables.product.prodname_enterprise %}**.
    - No campo **Team or User Account** (Conta de equipe ou usuário), digite o nome da sua organização ou conta pessoal do {% data variables.product.prodname_enterprise %}.
    - No campo **OAuth Key** (Chave OAuth), informe o Client ID (ID do cliente) do seu aplicativo de desenvolvedor do {% data variables.product.prodname_enterprise %}.
    - No campo **OAuth Secret** (Segredo OAuth), informe o Client Secret (Segredo do cliente) do seu aplicativo de desenvolvedor do {% data variables.product.prodname_enterprise %}.
    - Se você não desejar vincular novos repositórios que pertencem à sua organização de {% data variables.product.prodname_enterprise %} ou conta pessoal, desmarque a opção **Vincular novos repositórios automaticamente**.
    - Se você não quiser ativar commits inteligentes, desmarque **Habilitar commits inteligentes**.
    - Clique em **Salvar**.
6. Revise as permissões que você vai conceder à sua conta do {% data variables.product.prodname_enterprise %} e clique em **Authorize application** (Autorizar aplicativo).
7. Se necessário, digite a senha para continuar.
