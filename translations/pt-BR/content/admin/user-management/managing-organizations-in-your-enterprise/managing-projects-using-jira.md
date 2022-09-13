---
title: Gerenciar projetos usando o Jira
intro: 'Você pode integrar o Jira com {% data variables.product.product_name %} para gerenciamento do projeto.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094584'
---
## Conectar o Jira a uma organização de {% data variables.product.prodname_enterprise %}

1. Entre na sua conta do {% data variables.product.prodname_enterprise %} em http[s]://[hostname]/login. Se já conectado, clique no logotipo de {% data variables.product.prodname_dotcom %} no canto superior esquerdo.
2. Clique no seu ícone de perfil abaixo do logotipo de {% data variables.product.prodname_dotcom %} e selecione a organização que você deseja que se conecte com o Jira.

  ![Selecione uma organização](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Clique no link **Editar configurações de _nome da organização_**.

  ![Editar configurações da organização](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. Na barra lateral esquerda, em **Configurações do desenvolvedor**, clique em **Aplicativos OAuth**.

  ![Selecionar aplicativos OAuth](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Clique no botão **Registrar novo aplicativo**.

  ![Botão para cadastrar novo aplicativo](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Defina as configurações do aplicativo:
    - No campo **Nome do aplicativo**, digite "Jira" ou qualquer nome que desejar usar para identificar a instância do Jira.
    - No campo **URL da Home page**, digite a URL completa da instância do Jira.
    - No campo **URL de retorno de chamada de autorização**, digite a URL completa da instância do Jira.
7. Clique em **Registrar aplicativo**.
8. Na parte superior da página, anote a **ID do Cliente** e o **Segredo do Cliente**. Você precisará dessas informações para configurar sua instância do Jira.

## Configuração da instância do Jira

1. Na instância do Jira, faça login em uma conta com acesso administrativo.
2. Na parte superior da página, clique no ícone de configurações (engrenagem) e escolha **Aplicativos**.

  ![Selecionar aplicativos nas configurações do Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. Na barra lateral esquerda, em **Integrações**, clique em **Contas DVCS**.

  ![Menu de Integrações do Jira - Contas DVCS](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Clique em **Link Bitbucket Cloud ou conta do {% data variables.product.prodname_dotcom %}** .

  ![Vincular conta do GitHub ao Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. Na caixa de diálogo modal **Adicionar Nova Conta**, preencha suas configurações do {% data variables.product.prodname_enterprise %}:
    - No menu suspenso **Host**, escolha **{% data variables.product.prodname_enterprise %}** .
    - No campo **Conta de Equipe ou Usuário**, digite o nome da conta de usuário ou da organização do {% data variables.product.prodname_enterprise %}.
    - No campo **Chave OAuth**, digite a ID do cliente do aplicativo de desenvolvedor do {% data variables.product.prodname_enterprise %}.
    - No campo **Segredo do OAuth**, digite o Segredo do Cliente do aplicativo de desenvolvedor do {% data variables.product.prodname_enterprise %}.
    - Se não quiser vincular novos repositórios pertencentes à sua conta de usuário ou da organização do {% data variables.product.prodname_enterprise %}, desmarque a opção **Vincular Novos Repositórios Automaticamente**.
    - Caso não deseje habilitar commits inteligentes, desmarque a opção **Habilitar Commits Inteligentes**.
    - Clique em **Adicionar**.
6. Revise as permissões que você está concedendo à sua conta do {% data variables.product.prodname_enterprise %} e clique em **Autorizar aplicativo**.
7. Se necessário, digite a senha para continuar.
