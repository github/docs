---
title: Promover ou rebaixar administradores de site
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator/
  - /enterprise/admin/articles/demoting-a-site-administrator/
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'Os administradores do site podem promover qualquer conta de usuário como administrador do site e rebaixar administradores do site para usuários regulares.'
versions:
  enterprise-server: '*'
---

{% tip %}

**Observação:** se a [Sincronização LDAP estiver habilitada](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync) e o atributo `Administrators group` estiver definido ao [configurar o acesso LDAP para os usuários](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), esses usuários terão automaticamente acesso de administrador do site em suas respectivas instâncias. Nesse caso, você não pode promover manualmente os usuários pelas etapas abaixo.Será preciso adicioná-los ao grupo de administradores LDAP.

{% endtip %}

Para obter mais informações sobre como promover um usuário a proprietário da organização, consulte a seção `ghe-org-admin-promote` de "[Utilitários da linha de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)".

### Promover usuários pelas configurações empresariais

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
5. No canto superior direito da página, clique em **Add owner** (Adicionar proprietário). ![Botão para adicionar administrador](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. No campo de pesquisa, digite o nome do usuário e clique em **Add** (Adicionar). ![Campo de pesquisa para adicionar administrador](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

### Rebaixar administrador do site pelas configurações empresariais

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. No canto superior esquerdo da página, no campo de pesquisa "Find an administrator" (Localizar administrador), digite o nome de usuário da pessoa que você pretende rebaixar. ![Campo de pesquisa para localizar administrador](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. Nos resultados da pesquisa, localize o nome de usuário da pessoa que você deseja rebaixar e, em seguida, use o {% octicon "gear" %} menu suspenso e selecione **Remover proprietário**. ![Remover da opção empresa](/assets/images/help/business-accounts/demote-admin-button.png)

### Promover usuários pela linha de comando

1. [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) no seu appliance.
2. Execute [ghe-user-promote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-promote) com o nome de usuário para promover.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

### Rebaixar administrador do site pela linha de comando

1. [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) no seu appliance.
2. Execute [ghe-user-demote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-demote) com nome de usuário para rebaixar.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
