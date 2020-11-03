---
title: Aplicar as políticas de gerenciamento do repositório na sua empresa
intro: 'Os proprietários corporativos podem aplicar determinadas políticas de gerenciamento de repositórios para todas as organizações pertencentes a uma conta corporativa ou permitir que as políticas sejam definidas em cada organização.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Configuring the default visibility of new repositories in your enterprise

Each time someone creates a new repository on your enterprise, that person must choose a visibility for the repository. When you configure a default visibility setting for the enterprise, you choose which visibility is selected by default. Para obter mais informações sobre a visibilidade de repositório, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

Se um administrador do site impedir que os membros criem certos tipos de repositórios, os membros não serão capazes de criar esse tipo de repositório, mesmo se a configuração de visibilidade for padrão para esse tipo. For more information, see "[Setting a policy for repository creation](#setting-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Default repository visibility" (Visibilidade padrão do repositório), clique no menu suspenso e selecione uma visibilidade padrão.![Drop-down menu to choose the default repository visibility for your enterprise](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

### Definir uma política para alterar a visibilidade de um repositório

Se você impedir que os integrantes alterem a visibilidade do repositório, somente os administradores do site poderão tornar privados os repositórios públicos ou tornar públicos os repositórios privados.

Se um administrador do site tiver restringido a criação do repositório somente aos proprietários da organização, os integrantes não poderão alterar a visibilidade do repositório. Além disso, se o administrador do site restringir a criação de repositórios apenas aos repositórios privados, os integrantes só conseguirão tornar privados os repositórios públicos. For more information, see "[Setting a policy for repository creation](#setting-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository visibility change" (Alteração da visibilidade do repositório), revise as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Definir uma política para a criação de repositório

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository creation" (Criação de repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Em "Repository creation" (Criação de repositórios), use o menu suspenso e escolha uma política. ![Menu suspenso com opções de políticas de criação de repositórios](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

### Definir uma política de exclusão e transferência de repositório

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository deletion and transfer" (Exclusão e transferência de repositórios), revise as informações sobre como alterar as configurações. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Definir uma política para limites de push do Git

To keep your repository size manageable and prevent performance issues, you can configure a file size limit for repositories in your enterprise.

Por padrão, quando você impõe os limites de upload do repositório, as pessoas não podem adicionar ou atualizar arquivos maiores que 100 MB.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Observação:** o limite de push do Git será verificado somente em arquivos com mais de {% data variables.large_files.warning_size %}. Se quiser definir um limite de push mais baixo, entre em contato com o {% data variables.contact.contact_ent_support %} para obter assistência.

{% endtip %}
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Repository upload limit" (Limite de upload de repositório), use o menu suspenso e clique para definir o tamanho máximo do objeto. ![Menu suspenso com opções de tamanho máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Optionally, to enforce a maximum upload limit for all repositories in your enterprise, select **Enforce on all repositories** ![Opção de limitar o tamanho máximo de objeto em todos os repositórios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

### Configurar o editor de conflitos de merge para pull requests entre repositórios

Solicitar que os usuário resolvam conflitos de merge em seus respectivos computadores pode impedir gravações inadvertidas em repositórios upstream a partir de uma bifurcação.

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Conflict editor for pull requests between repositories" (Editor de conflitos para pull requests entre repositórios), use o menu suspenso e clique em **Disabled** (Desabilitar). ![Menu suspenso com opção para desabilitar o editor de conflito de merge](/assets/images/enterprise/settings/conflict-editor-settings.png)

### Configurar pushes forçados

Cada repositório herda uma configuração padrão de push forçado das configurações da conta de usuário ou da organização à qual pertence. Likewise, each organization and user account inherits a default force push setting from the force push setting for the enterprise. If you change the force push setting for the enterprise, it will change for all repositories owned by any user or organization.

#### Bloquear todos as pushes forçados no seu dispositivo

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Force pushes" (Pushes forçados), use o menu suspenso e clique em **Allow** (Permitir), **Block** (Bloquear) ou **Block to the default branch** (Bloquear no branch padrão). ![Menu suspenso pushes forçados](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Você também pode selecionar a opção **Enforce on all repositories** (Forçar em todos os repositórios), que substituirá as configurações no nível da organização e do repositório por push forçados.

#### Bloquear pushes forçados para um repositório específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecione **Block** (Bloquear) ou **Block to the default branch** (Bloquear no branch padrão) em **Push and Pull** (Operações de push e pull). ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

#### Bloquear pushes forçados em repositórios pertencentes a uma organização ou conta de usuário

Os repositórios herdam as configurações de push forçado da conta do usuário ou da organização à qual pertencem. User accounts and organizations in turn inherit their force push settings from the force push settings for the enterprise.

Você pode substituir as configurações padrão herdadas definindo as configurações da conta de usuário ou da organização.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "Repository default settings" (Configurações padrão do repositório) na seção "Force pushes" (Pushes forçados), selecione
    - **Block** (Bloquear) para bloquear os pushes forçados em todos os branches.
    - **Block to the default branch** (Bloquear no branch padrão) para bloquear os pushes forçados apenas no branch padrão. ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Você também pode selecionar a opção **Enforce on all repositories** (Forçar em todos os repositórios), que substituirá as configurações específicas do repositório. Note that this will **not** override an enterprise-wide policy. ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

### Configurar o acesso de leitura anônimo do Git

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% if enterpriseServerVersions contains currentVersion %}If you have [enabled private mode](/enterprise/admin/configuration/enabling-private-mode) on your enterprise, you {% else %}You {% endif %}can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your enterprise. Quando você ou um administrador de repositório habilitar essa configuração de acesso em um repositório, as operações não autenticadas do Git (e qualquer pessoa com acesso de rede ao {% data variables.product.product_name %}) terão acesso de leitura sem autenticação ao repositório.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on your enterprise by locking the repository's access settings. Após o bloqueio, somente um administrador de site poderá alterar a configuração do acesso de leitura anônimo do Git.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

#### Definir o acesso de leitura anônimo do Git para todos os repositórios

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Anonymous Git read access" (Acesso de leitura anônimo do Git), use o menu suspenso e clique em **Enabled** (Habilitado). ![Menu suspenso de acesso de leitura anônimo do Git com as opções "Enabled" (Habilitado) e "Disabled" (Desabilitado)
](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Optionally, to prevent repository admins from changing anonymous Git read access settings in all repositories on your enterprise, select **Prevent repository admins from changing anonymous Git read access**. ![Select checkbox to prevent repository admins from changing anonymous Git read access settings for all repositories on your enterprise](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

{% if enterpriseServerVersions contains currentVersion %}
#### Definir acesso de leitura anônimo do Git para um repositório específico

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Em "Danger Zone" (Zona de perigo), ao lado de "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git), clique em **Enable** (Habilitar). ![Botão "Enabled" (Habilitado) na opção "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git) na zona de perigo das configurações de administração do site ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revise as alterações. Para confirmar, clique em **Yes, enable anonymous Git read access** (Sim, permitir acesso de leitura anônimo ao Git). ![Confirmar configuração de acesso de leitura anônimo do Git na janela pop-up](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Para impedir que os administradores de repositório alterem a configuração nesse repositório, você também pode selecionar **Prevent repository admins from changing anonymous Git read access** (Impedir administradores de repositório de alterarem o acesso de leitura anônimo do Git). ![Marcar a caixa de seleção para impedir que administradores de repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da instância](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Aplicar uma política com o nome do branch-padrão

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na aba **Políticas do repositório** em "Nome do branch-padrão", digite o do branch-padrão que os novos repositórios devem usar. ![Caixa de texto para digitar o nome do branch-padrão](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para aplicar o nome do branch-padrão para todas as organizações da empresa, selecione **Aplicar em toda a empresa**. ![Caixa de aplicação](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Clique em **Atualizar**. ![Botão de atualizar](/assets/images/help/business-accounts/default-branch-name-update.png)
{% endif %}