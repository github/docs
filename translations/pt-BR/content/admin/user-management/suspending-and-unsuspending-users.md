---
title: Suspender e cancelar a suspensão de usuários
redirect_from:
  - /enterprise/admin/articles/suspending-a-user/
  - /enterprise/admin/articles/unsuspending-a-user/
  - /enterprise/admin/articles/viewing-suspended-users/
  - /enterprise/admin/articles/suspended-users/
  - /enterprise/admin/articles/suspending-and-unsuspending-users/
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
intro: 'Se um usuário sair da empresa ou mudar para outro departamento, você deve remover ou modificar a forma como ele acessa a {% data variables.product.product_location_enterprise %}.'
versions:
  enterprise-server: '*'
---

Se funcionários saírem da empresa, você poderá suspender suas contas do {% data variables.product.prodname_ghe_server %} para disponibilizar licenças de usuário em sua licença {% data variables.product.prodname_enterprise %}, embora os problemas, comentários, repositórios, gists e outros dados que eles criaram continuem existindo. Usuários suspensos não podem entrar na sua instância nem fazer push ou pull de códigos.

Quando você suspende um usuário, a alteração entra em vigor na mesma hora e o usuário não recebe notificações a respeito. Se tentar fazer pull ou push em um repositório, o usuário receberá este erro:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Clonando em 'test-repo'...
ERRO: sua conta foi suspensa. Verifique com o administrador de instalação.
fatal: o remote desligou inesperadamente
```

Antes de suspender os administradores do site, você deve rebaixá-los para usuários regulares. Para obter mais informações, consulte "[Promover ou rebaixar administradores de site](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)".

{% tip %}

**Observação:** se a [Sincronização LDAP estiver habilitada](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#enabling-ldap-sync) para a {% data variables.product.product_location_enterprise %}, os usuários serão suspensos automaticamente quando forem removidos do servidor de diretório LDAP. Quando a Sincronização LDAP estiver habilitada para a sua instância, os métodos normais de suspensão do usuário ficarão desabilitados.

{% endtip %}

### Suspender usuários pelo painel de administração de usuários

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "Account suspension" (Suspensão de conta) na caixa Danger Zone (Zona de perigo), clique em **Suspend** (Suspender). ![Botão Suspend (Suspender)](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Informe um motivo para a suspensão do usuário. ![Motivo da suspensão](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

### Cancelar a suspensão de usuários pelo painel de administração de usuários

Assim como na suspensão, o cancelamento da suspensão de um usuário ocorre na mesma hora. O usuário não receberá notificações.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Na barra lateral esquerda, clique em **Suspended users** (Usuários suspensos). ![Guia Suspended users (Usuários suspensos)](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Clique no nome da conta de usuário que você deseja suspender. ![Usuário suspenso](/assets/images/enterprise/site-admin-settings/user/suspended-user.png)
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Em "Account suspension" (Suspensão de conta) na caixa Danger Zone (Zona de perigo), clique em **Unuspend** (Cancelar suspensão). ![Botão Unsuspend (Cancelar suspensão)](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Informe um motivo para o cancelamento da suspensão do usuário. ![Motivo do cancelamento da suspensão](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

### Suspender usuários pela linha de comando

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Execute [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend) com o nome de usuário para suspender.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

### Criar mensagem personalizada para usuários suspensos

É possível criar uma mensagem personalizada que os usuários suspensos verão ao tentar fazer login.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Clique em **Add message** (Adicionar mensagem). ![Adicionar mensagem](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Digite a mensagem na caixa **Suspended user message** (Mensagem para usuários suspensos). Você pode digitar Markdown ou usar a barra de ferramentas Markdown para estilizar a mensagem. ![Mensagem para usuários suspensos](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Clique no botão **Preview** (Visualizar) no campo **Suspended user message** (Mensagem para usuários suspensos) para ver a mensagem renderizada. ![Botão Preview (Visualizar)](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Revise a mensagem renderizada. ![Mensagem renderizada para usuário suspenso](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Cancelar a suspensão de usuários pela linha de comando

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Execute [ghe-user-unsuspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) com o nome de usuário para cancelar a suspensão.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

### Leia mais
- "[Suspender um usuário](/enterprise/{{ currentVersion }}/v3/enterprise-admin/users/#suspend-a-user)"
