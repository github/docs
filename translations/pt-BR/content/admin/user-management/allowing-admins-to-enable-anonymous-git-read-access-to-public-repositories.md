---
title: Permitir que administradores habilitem o acesso de leitura anônimo do Git a repositórios públicos
intro: 'Para simplificar o funcionamento das ferramentas personalizadas na sua instância e ignorar os requisitos de autenticação, você pode permitir que os administradores de repositório habilitem o acesso de leitura anônimo do Git a repositórios públicos na {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Se o modo privado estiver habilitado, você poderá permitir que os administradores de repositório habilitem o acesso de leitura anônimo do Git a repositórios públicos na {% data variables.product.product_location_enterprise %}. Para obter mais informações sobre o modo privado, consulte "[Habilitar modo privado](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode/)".

Conceder o acesso de leitura anônimo do Git permite ignorar a autenticação de ferramentas personalizadas na sua instância. Quando você ou um administrador de repositório habilitar essa configuração de acesso em um repositório, as operações não autenticadas do Git (e qualquer pessoa com acesso de rede ao {% data variables.product.prodname_ghe_server %}) terão acesso de leitura sem autenticação ao repositório.

Você também pode impedir que os administradores do repositório alterem as configurações de acesso anônimo do Git a todos os repositórios ou a um repositório específico na {% data variables.product.product_location_enterprise %}. Para obter mais informações, consulte "[Impedir os usuários de alterarem o acesso de leitura anônimo do Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Anonymous Git read access" (Acesso de leitura anônimo do Git), use o menu suspenso e clique em **Enabled** (Habilitado). ![Menu suspenso de acesso de leitura anônimo do Git com as opções "Enabled" (Habilitado) e "Disabled" (Desabilitado)
](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Para impedir que os administradores de repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da instância, você também pode selecionar **Prevent repository admins from changing anonymous Git read access** (Impedir administradores de repositório de alterarem o acesso de leitura anônimo do Git). ![Marcar a caixa de seleção para impedir que administradores de repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da instância](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Habilitar o acesso de leitura anônimo do Git a determinado repositório

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Em "Danger Zone" (Zona de perigo), ao lado de "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git), clique em **Enable** (Habilitar). ![Botão "Enabled" (Habilitado) na opção "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git) na zona de perigo das configurações de administração do site ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revise as alterações. Para confirmar, clique em **Yes, enable anonymous Git read access** (Sim, permitir acesso de leitura anônimo ao Git). ![Confirmar configuração de acesso de leitura anônimo do Git na janela pop-up](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Para impedir que os administradores de repositório alterem a configuração nesse repositório, você também pode selecionar **Prevent repository admins from changing anonymous Git read access** (Impedir administradores de repositório de alterarem o acesso de leitura anônimo do Git). ![Marcar a caixa de seleção para impedir que administradores de repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da instância](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)
