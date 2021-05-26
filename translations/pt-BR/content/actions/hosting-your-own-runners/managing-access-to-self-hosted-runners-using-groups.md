---
title: Gerenciando o acesso aos executores auto-hospedados usando grupos
intro: Você pode usar políticas para limitar o acesso a executores auto-hospedados adicionados a uma organização ou empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Sobre grupos de executores auto-hospedados

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Observação:** Todas as organizações têm um único grupo de executores auto-hospedados padrão. A criação e o gerenciamento de grupos de runner auto-hospedados adicionais somente estão disponíveis apenas para contas corporativas, e para organizações pertencentes a uma conta corporativa.

{% endnote %}
{% endif %}

Grupos de executores auto-hospedados são usados para controlar o acesso a executores auto-hospedados a nível da organização e da empresa. Os administradores da empresa podem configurar políticas de acesso que controlam quais organizações em uma empresa têm acesso ao grupo de runner. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.

Quando um administrador da empresa concede acesso de uma organização a um grupo de runner, os administradores da organização podem ver o grupo de runner listado nas configurações do runner auto-hospedado da organização. Os administradores de organizações podem então atribuir políticas adicionais de acesso ao repositório granular para o grupo de executores empresariais.

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. Para obter mais informações, consulte "[Mover um executorauto-hospedado para um grupo](#moving-a-self-hosted-runner-to-a-group)".

### Criar um grupo de executor auto-hospedado para uma organização

Todas as organizações têm um único grupo de executores auto-hospedados padrão. As organizações dentro de uma conta corporativa podem criar outros grupos auto-hospedados. Os administradores da organização podem permitir o acesso de repositórios individuais a um grupo de executor.

Os executores auto-hospedados são automaticamente atribuídos ao grupo-padrão quando criados e só podem ser membros de um grupo por vez. Você pode mover um executor do grupo- padrão para qualquer grupo que você criar.

Ao criar um grupo, você deverá escolher uma política que defina quais repositórios têm acesso ao grupo do executor.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Na seção</strong>executores auto-hospedados **, clique **Adicionar novo** e, em seguida, clique em **novo grupo**.</p>

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-org-add-runner-group.png)</li>
1
Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 2" ou currentVersion == "github-ae@latest" %} Você pode configurar um grupo de executores para que sejam acessíveis a uma lista específica de repositórios, ou para todos os repositórios da organização. Por padrão, apenas repositórios privados podem acessar executores em um grupo de executor, mas você pode substituir isso.{% elsif currentVersion == "enterprise-server@2.22"%}Você pode configurar um grupo de executor para ser acessível a uma lista específica de repositórios, todos os repositórios privados ou todos os repositórios na organização.{% endif %}

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1
Clique em **Salvar grupo** para criar o grupo e aplicar a política.</ol>

### Criar um grupo de executor auto-hospedado para uma empresa

As empresas podem adicionar seus executores auto-hospedados a grupos para gerenciamento de acesso. As empresas podem criar grupos de executores auto-hospedados acessíveis a organizações específicas na conta corporativa. Os administradores da organização podem atribuir políticas adicionais granulares de acesso ao repositório para os grupos de executores corporativos.

Os executores auto-hospedados são automaticamente atribuídos ao grupo-padrão quando criados e só podem ser membros de um grupo por vez. Você pode atribuir o executor a um grupo específico durante o processo de registro, ou você pode mover o executor do grupo-padrão para um grupo personalizado.

Ao criar um grupo, você deve escolher uma política que defina quais organizações têm acesso ao grupo de executores.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Clique na aba **Executores auto-hospedados**.
1. Clique em **Adicionar novo** e, em seguida, **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. Insira um nome para o seu grupo de executor e atribua uma política para acesso à organização.

   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} Você pode configurar um grupo de executores para ser acessível a uma lista específica de organizações, ou todas as organizações da empresa. Por padrão, apenas repositórios privados podem acessar executores em um grupo de executores, mas você pode substituir isso.% elsif currentVersion == "enterprise-server@2.22"%}}Você pode configurar um grupo de corredores para estar acessível a todas as organizações da empresa ou escolher organizações específicas.{% endif %}

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

    ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.

### Alterar a política de acesso de um grupo de executores auto-hospedados

Você pode atualizar a política de acesso de um grupo de executores ou renomear um grupo de executores.

{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}

### Mover um executor auto-hospedado para um grupo

Os novos executores auto-hospedados são automaticamente atribuídos ao grupo-padrão e podem ser movidos para outro grupo.

1. Na seção **executores auto-hospedados** da página de configurações, localize o grupo atual do executor que deseja mover e expandir a lista de integrantes do grupo. ![Visualizar integrantes do grupo de executores](/assets/images/help/settings/actions-org-runner-group-members.png)
1. Marque a caixa de seleção ao lado do executor auto-hospedado e, em seguida, clique em **Mover para o grupo** para ver os destinos disponíveis. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. Para mover o executor, clique no grupo de destino. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)

### Remover um grupo de executor auto-hospedado

Os executores auto-hospedados são retornados automaticamente ao grupo-padrão quando seu grupo é removido.

1. Na seção de **executores auto-hospedados** da página de configurações, localize o grupo que você deseja excluir e clique no botão {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. Para remover o grupo, clique em **Remover grupo**. ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**.
