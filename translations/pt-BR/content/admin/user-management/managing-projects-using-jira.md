---
title: Gerenciar projetos usando JIRA
intro: 'Você pode integrar o JIRA ao {% data variables.product.prodname_enterprise %} para gerenciar projetos.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Conectar o JIRA a uma organização do {% data variables.product.prodname_enterprise %}

1. Entre na sua conta do {% data variables.product.prodname_enterprise %} em http[s]://[hostname]/login.
1. No canto superior direito de qualquer página, clique no ícone de configuração da conta (engrenagem).
1. Na barra lateral esquerda, clique no nome da organização.
1. Na barra lateral esquerda, clique em **Applications** (Aplicativos).
1. No canto superior direito da caixa **Organization applications** (Aplicativos da organização), clique em **Register new application** (Registrar novo aplicativo).
1. Defina as configurações do aplicativo:
    - No campo **Application name** (Nome do aplicativo), digite "JIRA".
    - No campo **Homepage URL** (URL da página inicial), digite a URL completa da sua instância do JIRA.
    - No campo **URL de callback de autorização**, digite a URL completa da sua instância do JIRA.
1. Clique em **Register application** (Registrar aplicativo).
1. Na parte superior da página, anote os dados dos campos **Client ID** (ID do cliente) e **Client Secret** (Segredo do cliente). Você precisará dessas informações para configurar sua instância do JIRA.

### Configurar a instância do JIRA

1. Na instância do JIRA, entre em uma conta com acesso administrativo.
1. Na parte superior da página, clique no ícone de configuração (engrenagem).
1. No menu suspenso de configuração, clique em **Add-ons** (Complementos).
1. Na barra lateral esquerda, em **Source control** (Controle de fontes), clique em **DVCS accounts** (Contas DVCS).
1. Clique em **Link Bitbucket or GitHub account** (Vincular conta do Bitbucket ou GitHub).
1. No modal **Add New Account** (Adicionar nova conta), defina as configurações do {% data variables.product.prodname_enterprise %}:
    - No menu suspenso **Host**, clique em **GitHub Enterprise**.
    - No campo **Team or User Account** (Conta de equipe ou usuário), digite o nome da sua organização ou conta pessoal do {% data variables.product.prodname_enterprise %}.
    - No campo **OAuth Key** (Chave OAuth), informe o Client ID (ID do cliente) do seu aplicativo de desenvolvedor do {% data variables.product.prodname_enterprise %}.
    - No campo **OAuth Secret** (Segredo OAuth), informe o Client Secret (Segredo do cliente) do seu aplicativo de desenvolvedor do {% data variables.product.prodname_enterprise %}.
    - Se você não quiser vincular novos repositórios pertencentes à sua organização ou conta pessoal do {% data variables.product.prodname_enterprise %}, desmarque a opção **Auto Link New Repositories** (Vincular automaticamente novos repositórios).
    - Se você não quiser habilitar os commits inteligentes, desmarque a opção  **Habilitar commits inteligentes**.
    - Clique em **Salvar**.
1. Revise as permissões que você vai conceder à sua conta do {% data variables.product.prodname_enterprise %} e clique em **Authorize application** (Autorizar aplicativo).
1. Se necessário, digite a senha para continuar.
