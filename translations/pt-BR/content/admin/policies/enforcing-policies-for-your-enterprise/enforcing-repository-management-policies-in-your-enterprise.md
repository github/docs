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
shortTitle: Repository management policies
ms.openlocfilehash: 10b34ef1d0049ca68e1b0ec655f9d6351c06d396
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192638'
---
## Sobre políticas para gerenciamento de repositório na sua empresa

Você pode aplicar políticas para controlar como os integrantes da sua empresa em {% data variables.product.product_name %} gerenciam os repositórios. Você também pode permitir que os proprietários da organização gerenciem as políticas para o gerenciamento do repositório. Para obter mais informações, confira "[Como criar e gerenciar repositórios](/repositories/creating-and-managing-repositories) e "[Organizações e equipes](/organizations)".

{% ifversion ghes or ghae %}

## Configurar a visibilidade padrão de novos repositórios

Toda vez que alguém criar um novo repositório na sua empresa, essa pessoa deverá escolher uma visibilidade para o repositório. Ao configurar uma configuração padrão de visibilidade para a empresa, você escolhe qual visibilidade será selecionada por padrão. Para obter mais informações sobre a visibilidade do repositório, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Se um proprietário corporativo impedir que os integrantes criem certos tipos de repositórios, os integrantes não serão capazes de criar esse tipo de repositório, mesmo se a configuração de visibilidade for o padrão para esse tipo. Para obter mais informações, confira "[Como impor uma política para criação de repositório](#enforcing-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Em "Default repository visibility" (Visibilidade padrão do repositório), clique no menu suspenso e selecione uma visibilidade padrão.
  ![Menu suspenso usado para escolher a visibilidade padrão do repositório para sua empresa](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Exigir a política com base nas permissões do repositório

Em todas as organizações pertencentes à sua empresa, é possível definir um nível de permissão de base do repositório (nenhum, leitura, gravação ou administrativo) para integrantes da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. Em "Permissões de base", revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Permissões básicas", use o menu suspenso e escolha uma política.
  ![Menu suspenso com opções de políticas de permissões de repositório](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## Aplicando uma política para a criação do repositório

Em todas as organizações pertencentes à sua empresa, é possível permitir que os integrantes criem repositórios, restringir a criação de repositórios a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização. 

Se você permitir que os membros criem repositórios em suas organizações, você poderá escolher quais tipos de repositórios (públicos, privados e internos) que os membros podem criar.

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %} Se a sua empresa usar {% data variables.product.prodname_emus %}, você{% else %}Você{% endif %} também poderá impedir que os usuários criem repositórios pertencentes às próprias contas de usuário deles.
{% endif %}

{% data reusables.repositories.internal-repo-default %} Para obter mais informações sobre repositórios internos, confira "[Como criar um repositório interno](/articles/creating-an-internal-repository)".

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository creation" (Criação de repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %}{% ifversion enterprise-namespace-repo-setting %}
1. Opcionalmente, {% ifversion ghec %}se sua empresa usa {% data variables.product.prodname_emus %} e você deseja {% endif %}para impedir que membros corporativos criem repositórios pertencentes às respectivas contas de usuário, selecione **Bloquear a criação de repositórios de namespace do usuário**.
  ![Captura de tela mostrando a lista de opções desabilitadas da política de bifurcação](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png){% endif %}

## Aplicar uma política para a bifurcação de repositórios internos ou privados
Em todas as organizações pertencentes à sua empresa, é possível permitir que pessoas com acesso a um repositório privado o bifurquem, nunca permitir a bifurcação de repositórios privados ou permitir que os proprietários administrem a configuração no nível da organização.

{% ifversion org-owners-limit-forks-creation %} Pessoas com permissões de administrador podem definir uma política de bifurcação mais granular. Para obter mais informações, confira "[Como gerenciar a política de criação de forks para sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".
{% endif %}

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**Observação:** se {% ifversion ghec %}sua empresa usa {% data variables.product.prodname_emus %} e {% endif %}sua política de "criação de repositório" impede que membros corporativos criem repositórios pertencentes às próprias contas de usuário deles, os membros não poderão bifurcar um repositório em suas contas de usuário, independentemente da política de "Bifurcação de repositório".

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. Em "Bifurcação de repositório", revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
2. Em "Bifurcação de repositório", use o menu suspenso e escolha uma política.

  ![Menu suspenso com as opções de políticas para criação de forks de repositórios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. Se a criação de fork estiver habilitada, você poderá especificar onde os usuários têm permissão para criar fork de repositórios. Examine as informações sobre como alterar a configuração e escolha uma política.

    ![Captura de tela mostrando a lista de opções de política de bifurcação de repositório](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## Aplicando uma política para convidar{% ifversion ghec %} colaboradores{% endif %} externos para repositórios

Em todas as organizações pertencentes à sua empresa, você pode permitir que os membros convidem{% ifversion ghec %} colaboradores{% endif %} externos para repositórios, restringir {% ifversion ghec %}convites a colaboradores {% endif %}externos aos proprietários da organização, {% ifversion prevent-org-admin-add-outside-collaborator %}restringir {% ifversion ghec %}convites a colaboradores {% endif %}externos aos proprietários da organização, {% endif %}ou permitir que os proprietários da organização administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. Em "Repositório {% ifversion ghec %}colaboradores externos{% elsif ghes or ghae %}convites{% endif %}", revise as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repositório{% ifversion ghec %}colaboradores externos{% elsif ghes or ghae %}convites{% endif %}", use o menu suspenso e escolha uma política.

  {% ifversion ghec %} ![Menu suspenso com as opções de políticas para convite de colaborador externo](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![Menu suspenso com as opções de políticas para convite](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## Aplicando uma política para o nome padrão do branch

Em todas as organizações pertencentes à sua empresa, você pode definir o nome padrão da branch para quaisquer novos repositórios que os integrantes criarem. Você pode optar por aplicar esse nome do branch-padrão em todas as organizações ou permitir que as organizações individuais definam um nome diferente.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Políticas do repositório** em "Nome do branch padrão", insira o nome do branch padrão que deve ser usado pelos novos repositórios.
    ![Caixa de texto usada para inserir o nome do branch padrão](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para impor o nome do branch padrão a todas as organizações da empresa, selecione **Impor em toda a empresa**.
    ![Caixa de seleção de imposição](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Clique em **Atualizar**.
    ![Botão Atualizar](/assets/images/help/business-accounts/default-branch-name-update.png)

## Aplicando uma política de alterações à visibilidade do repositório

Em todas as organizações pertencentes à sua empresa, é possível permitir que integrantes com acesso administrativo alterem a visibilidade de um repositório, restringir alterações na visibilidade do repositório a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização. Quando você impede que os integrantes alterem a visibilidade do repositório, somente os proprietários corporativos podem alterar a visibilidade de um repositório.

Se um proprietário corporativo tiver restringido a criação de repositório apenas para os proprietários da organização, os integrantes não poderão alterar a visibilidade do repositório. Se um proprietário corporativo restringir a criação do repositório de integrantes apenas para repositórios privados, os integrantes só poderão alterar a visibilidade de um repositório para privado. Para obter mais informações, confira "[Como impor uma política para criação de repositório](#enforcing-a-policy-for-repository-creation)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. Em "Repository visibility change" (Alteração da visibilidade do repositório), revise as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Em "Repository visibility change" (Mudança de visibilidade do repositório), use o menu suspenso e escolha uma política.
   ![Menu suspenso com opções de políticas de visibilidade do repositório](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## Aplicando uma política de exclusão e transferência de repositório

Em todas as organizações pertencentes à sua empresa, é possível permitir que integrantes com permissões administrativas excluam ou transfiram um repositório, restringir exclusões e transferências de repositórios a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository deletion and transfer" (Exclusão e transferência de repositórios), revise as informações sobre como alterar as configurações. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Aplicando uma política para excluir problemas

Em todas as organizações pertencentes à sua empresa, é possível permitir que integrantes com acesso administrativo excluam problemas em um repositório, restringir a exclusão de problemas a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Políticas do repositório**, em "Exclusão de problemas do repositório", revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repository issue deletion" (Exclusão de problemas em repositórios), use o menu suspenso e escolha uma política.

  ![Menu suspenso com as opções de políticas para exclusão de problemas](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Aplicando uma política para limites de push do Git

Para manter o tamanho do repositório gerenciável e evitar problemas de desempenho, você pode configurar um limite de tamanho de arquivo para os repositórios na sua empresa.

Por padrão, quando você impõe os limites de upload do repositório, as pessoas não podem adicionar ou atualizar arquivos maiores que 100 MB.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Em "Repository upload limit" (Limite de upload de repositório), use o menu suspenso e clique para definir o tamanho máximo do objeto.
![Menu suspenso com as opções de tamanho máximo do objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, para impor um limite máximo de upload para todos os repositórios na sua empresa, selecione **Impor em todos os repositórios**
![opção Impor o tamanho máximo do objeto em todos os repositórios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

{% ifversion profile-name-enterprise-setting %}

## Como impor uma política para a exibição de nomes de membros em seus repositórios

Em todas as organizações pertencentes à sua empresa, você pode permitir que os membros vejam o nome de perfil de um autor de comentário, além do nome de usuário dessa pessoa, em problemas e solicitações de pull para repositórios públicos e internos.

![Nome de perfil do autor do comentário exibido no comentário](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**Observação:** quando essa política é imposta para todos os repositórios na empresa, ela substitui a configuração da organização para repositórios privados. Para obter mais informações, confira "[Gerenciando a exibição de nomes de membros em sua organização](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Em "Permitir que os membros vejam o nome de perfil do autor do comentário em repositórios públicos e internos", selecione o menu suspenso e clique em uma política.
![Captura de tela da página Opções com o menu suspenso de política destacado](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. Opcionalmente, para impor a exibição de nomes de perfil para todos os repositórios em sua empresa, selecione **Impor para todos os repositórios na instância**.
![Captura de tela da opção "Impor para todos os repositórios" destacada](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## Configurar o editor de conflitos de merge para pull requests entre repositórios

Solicitar que os usuário resolvam conflitos de merge em seus respectivos computadores pode impedir gravações inadvertidas em repositórios upstream a partir de uma bifurcação.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Em "Editor de conflitos para solicitações de pull entre repositórios", use o menu suspenso e clique em **Desabilitado**.
 ![Menu suspenso com a opção para desabilitar o editor de conflitos de mesclagem](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configurar pushes forçados

Cada repositório herda uma configuração de push forçado padrão das configurações da conta de usuário ou organização proprietária do repositório. Cada conta de organização e usuário herda uma configuração padrão de push forçado a partir da configuração de push forçado para a empresa. Se você alterar a configuração de push forçado para a empresa, a política irá aplicar-se a todos os repositórios pertencentes a qualquer usuário ou organização.

### Bloqueando pushes forçado para todos os repositórios

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Em "Pushes forçados", use o menu suspenso e clique em **Permitir**, **Bloquear** ou **Bloquear no branch padrão**.
![Menu suspenso Pushes forçados](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Opcionalmente, selecione **Impor em todos os repositórios**, que substituirá as configurações no nível da organização e do repositório de pushes forçados.

### Bloquear pushes forçados para um repositório específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecione **Bloquear** ou **Bloquear no branch padrão** em **Push e Pull**.
   ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Bloquear pushes forçados em repositórios pertencentes a uma organização ou conta de usuário

Os repositórios herdam as configurações de push forçado da conta do usuário ou da organização à qual pertencem. As contas de usuários e organizações herdam as configurações de push forçado a partir das configurações de push forçado para a empresa.

Você pode substituir as configurações padrão herdadas definindo as configurações da conta de usuário ou da organização.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "Repository default settings" (Configurações padrão do repositório) na seção "Force pushes" (Pushes forçados), selecione
    - **Bloquear** para bloquear os pushes forçados em todos os branches.
    - **Bloquear no branch padrão** para bloquear os pushes forçados apenas no branch padrão.
  ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Opcionalmente, selecione **Impor em todos os repositórios**, que substituirá as configurações específicas do repositório. Observe que isso **não** substituirá uma política de toda a empresa.
   ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configurar o acesso de leitura anônimo do Git

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Se você tiver o [modo privado habilitado](/enterprise/admin/configuration/enabling-private-mode) para {% data variables.location.product_location %}, você pode permitir que os administradores do repositório habilitem o acesso de leitura Git anônimo a repositórios públicos.

Habilitar o acesso de leitura anônimo do Git permite que os usuários ignorem a autenticação para ferramentas personalizadas na sua empresa. Quando você ou um administrador do repositório habilitar essa configuração de acesso em um repositório, as operações não autenticadas do Git (e qualquer pessoa com acesso de rede ao {% data variables.product.product_name %}) terão acesso de leitura sem autenticação ao repositório.

O acesso de leitura anônimo do Git está desabilitado por padrão.{% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %} Quando você faz upgrade para o {% data variables.product.product_name %} 3.6 ou versões posteriores, o acesso de leitura anônimo do Git é desabilitado automaticamente no nível do aplicativo, e as conexões do `git://` na porta 9418 retornarão o erro a seguir.

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

{% ifversion ghes > 3.5 %}

Se você deseja dar suporte ao protocolo Git não autenticado em seu ambiente, você precisa reabilitar manualmente o recurso. Execute os seguintes comandos após a atualização:

```ShellSession
$ sudo ghe-config app.gitauth.git-protocol true
$ sudo ghe-config-apply
```

{% endif %}

O acesso de leitura anônimo do Git será totalmente removido em uma versão futura do {% data variables.product.prodname_ghe_server %}. {% data variables.product.company_short %} recomenda usar SSH em vez do protocolo Git. Para obter mais informações sobre esta mudança, veja [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% endif %}



Se necessário, você pode impedir que os administradores do repositório alterem configurações anônimas de acesso do Git para repositórios, bloqueando as configurações de acesso do repositório. Após o bloqueio, somente um administrador de site poderá alterar a configuração do acesso de leitura anônimo do Git.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Definir o acesso de leitura anônimo do Git para todos os repositórios

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. Em "Acesso de leitura anônimo do Git", use o menu suspenso e clique em **Habilitado**.
![Menu suspenso Acesso de leitura anônimo do Git que mostra as opções de menu "Habilitado" e "Desabilitado"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Opcionalmente, para impedir que os administradores do repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da sua empresa, selecione **Impedir que os administradores do repositório alterem o acesso de leitura anônimo do Git**.
![Marcar a caixa de seleção para impedir que os administradores do repositório alterem as configurações de acesso de leitura anônimo do Git em todos os repositórios da sua empresa](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Definir acesso de leitura anônimo do Git para um repositório específico

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Em "Zona de Perigo", ao lado de "Habilitar Acesso de leitura anônimo do Git", clique em **Habilitar**.
![Botão "Habilitado" na opção "Habilitar acesso de leitura anônimo do Git" na zona de perigo das configurações de administração do site de um repositório ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Revise as alterações. Para confirmar, clique em **Sim, habilitar o acesso de leitura anônimo do Git.** 
![Confirmar a configuração de acesso de leitura anônimo do Git na janela pop-up](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Opcionalmente, para impedir que os administradores do repositório alterem a configuração desse repositório, selecione **Impedir que os administradores do repositório alterem o acesso de leitura anônimo do Git**.
![Marcar a caixa de seleção para impedir que administradores do repositório alterem as configurações de acesso de leitura anônimo do Git desse repositório](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
