---
title: Usar grupos para gerenciar o acesso a executores hospedados de AE
intro: 'Você pode usar políticas para limitar o acesso a {% data variables.actions.hosted_runner %}s que foram adicionados a uma organização ou empresa.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Sobre grupos de {% data variables.actions.hosted_runner %}

Os grupos de {% data variables.actions.hosted_runner %} são usados para controlar o acesso a {% data variables.actions.hosted_runner %}s no nível da organização e da empresa. Os administradores da empresa podem configurar políticas de acesso que controlam quais organizações em uma empresa têm acesso ao grupo de runner. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.

Quando um administrador corporativo concede acesso de uma organização a um grupo de executores, os administradores da organização podem ver o grupo de executores listado nas configurações do {% data variables.actions.hosted_runner %} da organização. Os administradores de organizações podem então atribuir políticas adicionais de acesso ao repositório granular para o grupo de executores empresariais.

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. Para obter mais informações, consulte "[Transferir um {% data variables.actions.hosted_runner %} para um grupo](#moving-an-ae-hosted-runner-to-a-group)".

### Criar um grupo de {% data variables.actions.hosted_runner %} para uma organização

Todas as organizações possuem um único grupo padrão do {% data variables.actions.hosted_runner %}. As organizações dentro de uma conta corporativa podem criar outros grupos de executores. Os administradores da organização podem permitir o acesso de repositórios individuais a um grupo de executor.

{% data variables.actions.hosted_runner %}s são automaticamente atribuídos ao grupo padrão quando criados, e só podem ser integrantes de um grupo de cada vez. Você pode mover um executor do grupo- padrão para qualquer grupo que você criar.

Ao criar um grupo, você deverá escolher uma política que defina quais repositórios têm acesso ao grupo do executor.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Na seção</strong>executores auto-hospedados **, clique **Adicionar novo** e, em seguida, clique em **novo grupo**.</p>

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)</li>

1

Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

     É possível configurar um grupo de executores para ser acessível a uma lista específica de repositórios ou a todos os repositórios na organização. Por padrão, apenas repositórios privados podem acessar executores em um grupo de executores, mas você pode substituir isso. ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-org-add-runner-group-options.png)

1

Clique em **Salvar grupo** para criar o grupo e aplicar a política.</ol>

### Criar um grupo {% data variables.actions.hosted_runner %} para uma empresa

As empresas podem adicionar os seus {% data variables.actions.hosted_runner %}s a grupos para gerenciamento de acesso. As empresas podem criar grupos de {% data variables.actions.hosted_runner %}s que podem ser acessados por organizações específicas na conta corporativa. Os administradores da organização podem atribuir políticas adicionais granulares de acesso ao repositório para os grupos de executores corporativos.

{% data variables.actions.hosted_runner %}s são automaticamente atribuídos ao grupo padrão quando criados, e só podem ser integrantes de um grupo de cada vez. Você pode atribuir o executor a um grupo específico durante o processo de registro, ou você pode mover o executor do grupo-padrão para um grupo personalizado.

Ao criar um grupo, você deve escolher uma política que defina quais organizações têm acesso ao grupo de executores.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Clique na aba **Executores auto-hospedados**.
1. Clique em **Adicionar novo** e, em seguida, **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. Insira um nome para o seu grupo de executor e atribua uma política para acesso à organização.

   Você pode configurar um grupo de executores para que possa ser acessado por uma lista específica de organizações ou por todas as organizações da empresa.  Por padrão, apenas repositórios privados podem acessar executores em um grupo de executores, mas você pode substituir isso. ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)

1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.

### Alterar a política de acesso de um grupo de {% data variables.actions.hosted_runner %}

Você pode atualizar a política de acesso de um grupo de executores ou renomear um grupo de executores.

{% data reusables.github-actions.hosted-runner-configure-runner-group-access %}

### Transferir um {% data variables.actions.hosted_runner %} para um grupo

Novos {% data variables.actions.hosted_runner %}s são atribuídos automaticamente ao grupo padrão e, em seguida, podem ser movidos para outro grupo.

1. Na seção **executores auto-hospedados** da página de configurações, localize o grupo atual do executor que deseja mover e expandir a lista de integrantes do grupo. ![Visualizar integrantes do grupo de executores](/assets/images/help/settings/actions-hosted-runner-group-members.png)
1. Marque a caixa de seleção próxima ao executor e, em seguida, clique em **Transferir para o grupo** para ver os destinos disponíveis. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-hosted-runner-group-member-move.png)
1. Para mover o executor, clique no grupo de destino. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-hosted-runner-group-member-move-destination.png)

### Remover um grupo de {% data variables.actions.hosted_runner %}

{% data variables.actions.hosted_runner %}s são retornados automaticamente ao grupo padrão quando seu grupo é removido.

1. Na seção de **executores auto-hospedados** da página de configurações, localize o grupo que você deseja excluir e clique no botão {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-hosted-runner-group-kebab.png)

1. Para remover o grupo, clique em **Remover grupo**.

    ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-hosted-runner-group-remove.png)

1. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**.
