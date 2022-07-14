---
title: Aplicar as políticas de gerenciamento do repositório na sua empresa
intro: É possível aplicar políticas de gerenciamento de repositórios nas organizações de sua empresa ou permitir que as políticas sejam definidas em cada organização.
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Políticas de gerenciamento do repositório
---

## Sobre políticas para gerenciamento de repositório na sua empresa

Você pode aplicar políticas para controlar como os integrantes da sua empresa em {% data variables.product.product_name %} gerenciam os repositórios. Você também pode permitir que os proprietários da organização gerenciem as políticas para o gerenciamento do repositório. Para obter mais informações, consulte "[Criar e gerenciar repositórios](/repositories/creating-and-managing-repositories) e "[Organizações e equipes](/organizations)".

{% ifversion ghes or ghae %}

## Configurar a visibilidade padrão de novos repositórios

Toda vez que alguém criar um novo repositório na sua empresa, essa pessoa deverá escolher uma visibilidade para o repositório. Ao configurar uma configuração padrão de visibilidade para a empresa, você escolhe qual visibilidade será selecionada por padrão. Para obter mais informações sobre a visibilidade do repositório, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Se um proprietário corporativo impedir que os integrantes criem certos tipos de repositórios, os integrantes não serão capazes de criar esse tipo de repositório, mesmo se a configuração de visibilidade for o padrão para esse tipo. Para obter mais informações, consulte "[Definir uma política para a criação de repositórios](#setting-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Default repository visibility" (Visibilidade padrão do repositório), clique no menu suspenso e selecione uma visibilidade padrão.![Menu suspenso para escolher a visibilidade padrão do repositório para a sua empresa](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Aplicar uma política de {% ifversion ghec or ghes or ghae %}base{% else %}permissões padrão{% endif %} do repositório

Em todas as organizações pertencentes à sua empresa, você pode definir um {% ifversion ghec or ghes or ghae %}base{% else %}padrão{% endif %} nível de permissão de repositório (nenhum leitura, gravação ou administrador) para integrantes da organização, ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
4. Em "{% ifversion ghec or ghes or ghae %}Base{% else %}Default{% endif %} permissões", revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "{% ifversion ghec or ghes or ghae %}Base{% else %}Padrão{% endif %} permissões", use o menu suspenso e escolha uma política.
  {% ifversion ghec or ghes or ghae %}
  ![Menu suspenso com opções de políticas de permissões de repositório](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)
  {% else %}
  ![Menu suspenso com opções de políticas de permissões de repositório](/assets/images/enterprise/business-accounts/repository-permissions-policy-drop-down.png)
  {% endif %}

## Aplicando uma política para a criação do repositório

Em todas as organizações pertencentes à sua empresa, é possível permitir que os integrantes criem repositórios, restringir a criação de repositórios a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização. Caso você permita que os integrantes criem repositórios, escolha se eles poderão criar qualquer combinação de repositórios internos, privados e públicos. O {% data reusables.repositories.internal-repo-default %} Para obter mais informações sobre repositórios internos, consulte "[Criar um repositório interno](/articles/creating-an-internal-repository)".

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository creation" (Criação de repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Em "Repository creation" (Criação de repositórios), use o menu suspenso e escolha uma política.

  ![Menu suspenso com opções de políticas de criação de repositórios](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

## Aplicar uma política para a bifurcação de repositórios internos ou privados

Em todas as organizações pertencentes à sua empresa, é possível permitir que pessoas com acesso a um repositório privado o bifurquem, nunca permitir a bifurcação de repositórios privados ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Em "Bifurcação de repositório", revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repository forking" (Bifurcação de repositórios), use o menu suspenso e escolha uma política.

  ![Menu suspenso com opções de políticas de bifurcação de repositórios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

{% ifversion innersource-fork-policies %}
5. Se a bifurcação estiver habilitada, você poderá especificar onde os usuários podem fazer a bifurcação de repositórios. Revise as informações sobre como alterar a configuração e escolha uma política.

    ![Captura de tela que mostra a lista de opções de política de bifurcação de repositório](/assets/images/help/business-accounts/repository-forking-policy-settings.png)
{% endif %}


## Aplicando uma política para convidar{% ifversion ghec %} colaboradores{% endif %} externos para repositórios

Em todas as organizações pertencentes à sua empresa, você pode permitir que os integrantes convidem{% ifversion ghec %} colaboradores externos{% endif %} para os repositórios, restringir {% ifversion ghec %}colaboradores externos {% endif %}convites para proprietários da organização, {% ifversion prevent-org-admin-add-outside-collaborator %}restringir {% ifversion ghec %}colaboradores externos {% endif %}convites para proprietários corporativos, {% endif %}ou permitir que os proprietários da organização administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Em "Repositório {% ifversion ghec %}colaboradores externos{% elsif ghes or ghae %}convites{% endif %}", revise as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repositório{% ifversion ghec %}colaboradores externos{% elsif ghes or ghae %}convites{% endif %}", use o menu suspenso e escolha uma política.

  {% ifversion ghec %}
  ![Menu suspenso com opções de políticas de convite de colaboradores externos](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)
  {% elsif ghes or ghae %}
  ![Menu suspenso com opções de política de convites](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)
  {% endif %}

{% ifversion ghec or ghes or ghae %}

## Aplicando uma política para o nome padrão do branch

Em todas as organizações pertencentes à sua empresa, você pode definir o nome padrão da branch para quaisquer novos repositórios que os integrantes criarem. Você pode optar por aplicar esse nome do branch-padrão em todas as organizações ou permitir que as organizações individuais definam um nome diferente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na aba **Políticas do repositório** em "Nome do branch-padrão", digite o do branch-padrão que os novos repositórios devem usar. ![Caixa de texto para digitar o nome do branch-padrão](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para aplicar o nome do branch-padrão para todas as organizações da empresa, selecione **Aplicar em toda a empresa**. ![Caixa de aplicação](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Clique em **Atualizar**. ![Botão de atualizar](/assets/images/help/business-accounts/default-branch-name-update.png)

{% endif %}

## Aplicando uma política de alterações à visibilidade do repositório

Em todas as organizações pertencentes à sua empresa, é possível permitir que integrantes com acesso administrativo alterem a visibilidade de um repositório, restringir alterações na visibilidade do repositório a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização. Quando você impede que os integrantes alterem a visibilidade do repositório, somente os proprietários corporativos podem alterar a visibilidade de um repositório.

Se um proprietário corporativo tiver restringido a criação de repositório apenas para os proprietários da organização, os integrantes não poderão alterar a visibilidade do repositório. Se um proprietário corporativo restringir a criação do repositório de integrantes apenas para repositórios privados, os integrantes só poderão alterar a visibilidade de um repositório para privado. Para obter mais informações, consulte "[Definir uma política para a criação de repositórios](#setting-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository visibility change" (Alteração da visibilidade do repositório), revise as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

## Aplicando uma política de exclusão e transferência de repositório

Em todas as organizações pertencentes à sua empresa, é possível permitir que integrantes com permissões administrativas excluam ou transfiram um repositório, restringir exclusões e transferências de repositórios a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository deletion and transfer" (Exclusão e transferência de repositórios), revise as informações sobre como alterar as configurações. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Aplicando uma política para excluir problemas

Em todas as organizações pertencentes à sua empresa, é possível permitir que integrantes com acesso administrativo excluam problemas em um repositório, restringir a exclusão de problemas a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em "Repository issue deletion" (Exclusão de problemas em repositórios), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repository issue deletion" (Exclusão de problemas em repositórios), use o menu suspenso e escolha uma política.

  ![Menu suspenso com opções de políticas de exclusão de problemas](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Aplicando uma política para limites de push do Git

Para manter o tamanho do repositório gerenciável e evitar problemas de desempenho, você pode configurar um limite de tamanho de arquivo para os repositórios na sua empresa.

Por padrão, quando você impõe os limites de upload do repositório, as pessoas não podem adicionar ou atualizar arquivos maiores que 100 MB.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Repository upload limit" (Limite de upload de repositório), use o menu suspenso e clique para definir o tamanho máximo do objeto. ![Menu suspenso com opções de tamanho máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, para aplicar um limite máximo de upload para todos os repositórios na sua empresa, selecione **Aplicar em todos os repositórios** ![Opção de limitar o tamanho máximo de objeto em todos os repositórios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## Configurar o editor de conflitos de merge para pull requests entre repositórios

Solicitar que os usuário resolvam conflitos de merge em seus respectivos computadores pode impedir gravações inadvertidas em repositórios upstream a partir de uma bifurcação.

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Conflict editor for pull requests between repositories" (Editor de conflitos para pull requests entre repositórios), use o menu suspenso e clique em **Disabled** (Desabilitar). ![Menu suspenso com opção para desabilitar o editor de conflito de merge](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configurar pushes forçados

Cada repositório herda uma configuração de push forçado padrão das configurações da conta de usuário ou organização proprietária do repositório. Cada conta de organização e usuário herda uma configuração padrão de push forçado a partir da configuração de push forçado para a empresa. Se você alterar a configuração de push forçado para a empresa, a política irá aplicar-se a todos os repositórios pertencentes a qualquer usuário ou organização.

### Bloqueando pushes forçado para todos os repositórios

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Force pushes" (Pushes forçados), use o menu suspenso e clique em **Allow** (Permitir), **Block** (Bloquear) ou **Block to the default branch** (Bloquear no branch padrão). ![Menu suspenso pushes forçados](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Você também pode selecionar a opção **Enforce on all repositories** (Forçar em todos os repositórios), que substituirá as configurações no nível da organização e do repositório por push forçados.

### Bloquear pushes forçados para um repositório específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecione **Block** (Bloquear) ou **Block to the default branch** (Bloquear no branch padrão) em **Push and Pull** (Operações de push e pull). ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Bloquear pushes forçados em repositórios pertencentes a uma organização ou conta de usuário

Os repositórios herdam as configurações de push forçado da conta do usuário ou da organização à qual pertencem. As contas de usuários e organizações herdam as configurações de push forçado a partir das configurações de push forçado para a empresa.

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
6. Você também pode selecionar a opção **Enforce on all repositories** (Forçar em todos os repositórios), que substituirá as configurações específicas do repositório. Observe que isso **não** substituirá uma política para toda a empresa. ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configurar o acesso de leitura anônimo do Git

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% ifversion ghes %}Se você tiver o [habilitado o modo privado](/enterprise/admin/configuration/enabling-private-mode) na sua empresa, você {% else %}Você {% endif %}pode permitir que administradores de repositórios habilitem o acesso de leitura anônimo do Git aos repositórios públicos.

Habilitar o acesso de leitura anônimo do Git permite que os usuários ignorem a autenticação para ferramentas personalizadas na sua empresa. Quando você ou um administrador de repositório habilitar essa configuração de acesso em um repositório, as operações não autenticadas do Git (e qualquer pessoa com acesso de rede ao {% data variables.product.product_name %}) terão acesso de leitura sem autenticação ao repositório.

Se necessário, você pode impedir que os administradores do repositório alterem configurações anônimas de acesso do Git para repositórios, bloqueando as configurações de acesso do repositório. Após o bloqueio, somente um administrador de site poderá alterar a configuração do acesso de leitura anônimo do Git.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Definir o acesso de leitura anônimo do Git para todos os repositórios

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Anonymous Git read access" (Acesso de leitura anônimo do Git), use o menu suspenso e clique em **Enabled** (Habilitado). ![Menu suspenso de acesso de leitura anônimo do Git com as opções "Enabled" (Habilitado) e "Disabled" (Desabilitado)
](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Opcionalmente, para impedir que os administradores do repositório alterem as configurações de acesso de leitura anônimas do Git em todos os repositórios da sua empresa, selecione **Impedir que os administradores do repositório de alterarem o acesso de leitura anônimo do Git**. ![Marque a caixa de seleção para evitar que os administradores do repositório alterem as configurações de acesso de leitura anônimas do Git para todos os repositórios da sua empresa](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Definir acesso de leitura anônimo do Git para um repositório específico

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Em "Danger Zone" (Zona de perigo), ao lado de "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git), clique em **Enable** (Habilitar). ![Botão "Enabled" (Habilitado) na opção "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git) na zona de perigo das configurações de administração do site ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revise as alterações. Para confirmar, clique em **Yes, enable anonymous Git read access** (Sim, permitir acesso de leitura anônimo ao Git). ![Confirmar configuração de acesso de leitura anônimo do Git na janela pop-up](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Para impedir que os administradores de repositório alterem a configuração nesse repositório, você também pode selecionar **Prevent repository admins from changing anonymous Git read access** (Impedir administradores de repositório de alterarem o acesso de leitura anônimo do Git). ![Marcar a caixa de seleção para impedir que administradores de repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da instância](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
