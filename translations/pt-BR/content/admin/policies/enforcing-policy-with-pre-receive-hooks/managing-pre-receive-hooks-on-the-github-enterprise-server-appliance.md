---
title: Gerenciar hooks pre-receive no appliance do GitHub Enterprise Server
intro: 'Configure o uso que as pessoas farão dos hooks pre-receive em seus appliances do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---
### Criar hooks pre-receive

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Clique em **Add pre-receive hook** (Adicionar hooks pre-receive). ![Adicionar hook pre-receive](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. No campo **Hook name** (Nome do hook), informe o nome do hook que você pretende criar. ![Nomear hook pre-receive](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. No menu suspenso **Environment** (Ambiente), selecione o ambiente em que você pretende executar o hook. ![Ambiente de hook](/assets/images/enterprise/site-admin-settings/environment.png)
7. Em **Script**, no menu suspenso **Select hook repository** (Selecionar repositório de hook), selecione o repositório que contém o script de hook pre-receive. No menu suspenso **Select file** (Selecionar arquivo), selecione o nome do arquivo de scripts do hook pre-receive. ![Script de hook](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Selecione **Use the exit-status to accept or reject pushes** (Usar status de saída para aceitar ou rejeitar pushes) para aplicar seu script. Ao desmarcar essa opção, você pode testar o script enquanto o valor do status de saída é ignorado. Nesse modo, a saída do script ficará visível para o usuário na linha de comando, mas não na interface da web. ![Usar status de saída](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Selecione **Enable this pre-receive hook on all repositories by default** (Habilitar este hooks pre-receive em todos os repositórios por padrão) se quiser que o hook pre-receive seja executado em todos os repositórios. ![Habilitar hooks em todos os repositório](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Selecione **Administrators can enable and disable this hook** (Administradores podem habilitar e desabilitar este hook) para permitir que os integrantes da organização com permissões de administrador ou proprietário decidam se querem habilitar ou desabilitar esse hook pre-receive. ![Habilitar ou desabilitar hooks para administradores](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

### Editar hooks pre-receive

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Ao lado do hook pre-receive que deseja editar, clique em {% octicon "pencil" aria-label="The edit icon" %}.![Editar hooks pre-receive](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

### Excluir hooks pre-receive

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
2. Ao lado do hook pre-receive que deseja excluir, clique em {% octicon "x" aria-label="X symbol" %}.![Editar hooks pre-receive](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

### Configurar hooks pre-receive para uma organização

O administrador da organização só pode configurar permissões de hook para a organização se o administrador do site tiver selecionado a opção **Administrators can enable or disable this hook** (Administradores podem habilitar e desabilitar este hook) ao criar o hook pre-receive. Para configurar hooks pre-receive em um repositório, você deve ser administrador ou proprietário da organização.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Na barra lateral esquerda, clique em **Hooks**. ![Barra lateral de hooks](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Ao lado do hook pre-receive que você pretende configurar, clique no menu suspenso **Hook permissions** (Permissões de hook). Selecione se deseja habilitar ou desabilitar o hook pre-receive, ou permitir que ele seja configurado pelos administradores do repositório. ![Permissões de hook](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

### Configurar hooks pre-receive para um repositório

O proprietário do repositório só pode configurar um hook se o administrador do site tiver selecionado a opção **Administrators can enable or disable this hook** (Administradores podem habilitar e desabilitar este hook) ao criar o hook pre-receive. Em uma organização, o proprietário da organização também deve ter selecionado a permissão de hook **Configurable** (Configurável). Para configurar hooks pre-receive em um repositório, você deve ser proprietário do repositório.

{% data reusables.profile.enterprise_access_profile %}
2. Clique em **Repositories** (Repositórios) e selecione em qual repsitório você deseja configurar hooks pre-receive. ![Repositórios](/assets/images/enterprise/repos/repositories.png)
{% data reusables.repositories.sidebar-settings %}
4. Na barra lateral esquerda, clique em **Hooks & Services** (Hooks e serviços). ![Hooks e serviços](/assets/images/enterprise/repos/hooks-services.png)
5. Ao lado do hook pre-receive que você pretende configurar, clique no menu suspenso **Hook permissions** (Permissões de hook). Defina se você vai habilitar ou desabilitar os hooks pre-receive. ![Permissões do hook repositório](/assets/images/enterprise/repos/repo-hook-permissions.png)
