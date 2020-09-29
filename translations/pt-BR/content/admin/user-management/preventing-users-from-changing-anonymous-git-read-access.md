---
title: Impedir os usuários de alterarem o acesso de leitura anônimo do Git
intro: 'Você pode impedir que os administradores de repositórios alterem o acesso de leitura anônimo do Git a um repositório{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} ou a todos os repositórios{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Para impedir que os administradores de repositório alterem as configurações de acesso de leitura anônimo do Git em determinado repositório, é possível bloquear as configurações de acesso do repositório. Após o bloqueio, somente um administrador de site poderá alterar a configuração do acesso de leitura anônimo do Git.

Os administradores de repositório poderão alterar a configuração do acesso de leitura anônimo do Git de um repositório público se não for uma bifurcação. Para obter mais informações, consulte "[Permitir que administradores habilitem o acesso de leitura anônimo do Git a repositórios públicos](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)".

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

### Impedir os usuários de alterarem o acesso de leitura anônimo do Git no repositório

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Em "Danger Zone" (Zona de perigo), selecione **Prevent repository admins from enabling anonymous Git read access** (Impedir administradores de repositório de habilitarem o acesso de leitura anônimo do Git). ![Marcar a caixa de seleção para impedir o repositório de alterar a configuração de acesso de leitura anônimo do Git](/assets/images/enterprise/site-admin-settings/lock-repo-from-changing-anonymous-git-read-access.png)

### Impedir os usuários de alterarem o acesso de leitura anônimo do Git em todos os repositórios

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
3. Em "Anonymous Git read access" (Acesso de leitura anônimo do Git), confirme que a configuração está habilitada e selecione **Prevent repository admins from changing anonymous Git read access** (Impedir administradores de repositório de habilitarem o acesso de leitura anônimo do Git). ![Marcar a caixa de seleção para impedir todos os repositórios de alterarem a configuração de acesso de leitura anônimo do Git](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

