---
title: Gerenciando o acesso aos executores auto-hospedados usando grupos
intro: Você pode usar políticas para limitar o acesso a executores auto-hospedados adicionados a uma organização ou empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
shortTitle: Gerenciar grupos de executores
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre grupos de executores auto-hospedados

{% ifversion fpt %}
{% note %}

**Observação:** Todas as organizações têm um único grupo de executores auto-hospedados padrão. Somente contas corporativas e organizações pertencentes a contas corporativas podem criar e gerenciar grupos de executores auto-hospedados adicionais.

{% endnote %}
{% endif %}

Grupos de executores auto-hospedados são usados para controlar o acesso a executores auto-hospedados a nível da organização e da empresa. Os administradores da empresa podem configurar políticas de acesso que controlam quais organizações em uma empresa têm acesso ao grupo de runner. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.

Quando um administrador da empresa concede acesso de uma organização a um grupo de runner, os administradores da organização podem ver o grupo de runner listado nas configurações do runner auto-hospedado da organização. Os administradores de organizações podem então atribuir políticas adicionais de acesso ao repositório granular para o grupo de executores empresariais.

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. Para obter mais informações, consulte "[Mover um executorauto-hospedado para um grupo](#moving-a-self-hosted-runner-to-a-group)".

## Criar um grupo de executor auto-hospedado para uma organização

Todas as organizações têm um único grupo de executores auto-hospedados padrão. As organizações dentro de uma conta corporativa podem criar outros grupos auto-hospedados. Os administradores da organização podem permitir o acesso de repositórios individuais a um grupo de executor.

Os executores auto-hospedados são automaticamente atribuídos ao grupo-padrão quando criados e só podem ser membros de um grupo por vez. Você pode mover um executor do grupo- padrão para qualquer grupo que você criar.

Ao criar um grupo, você deverá escolher uma política que defina quais repositórios têm acesso ao grupo do executor.

{% ifversion fpt %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups %}
1. Na seção "Grupos de executores", clique em **Novo grupo de executor**.
 {% data reusables.github-actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Aviso**: {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. Na seção "Executores auto-hospedados", clique em **Adicionar novo** e, em seguida, **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

   {% ifversion ghes > 2.22 or ghae %} Você pode configurar um grupo de executores para poder ser acessado por uma lista específica de repositórios ou por todos os repositórios na organização. Por padrão, apenas repositórios privados podem acessar executores em um grupo de executores, mas você pode substituir isso. Esta configuração não pode ser substituída se você estiver configurando o grupo de executores da organização que foi compartilhado por uma empresa.{% endif %}{% ifversion ghes = 2.22 %}Você pode configurar um grupo de executores para poder ser acessado por uma lista específica de repositórios, por todos os repositórios privados ou por todos os repositórios na organização.{% endif %}

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.
{% endif %}


## Criar um grupo de executor auto-hospedado para uma empresa

As empresas podem adicionar seus executores auto-hospedados a grupos para gerenciamento de acesso. As empresas podem criar grupos de executores auto-hospedados acessíveis a organizações específicas na conta corporativa. Os administradores da organização podem atribuir políticas adicionais granulares de acesso ao repositório para os grupos de executores corporativos.

Os executores auto-hospedados são automaticamente atribuídos ao grupo-padrão quando criados e só podem ser membros de um grupo por vez. Você pode atribuir o executor a um grupo específico durante o processo de registro, ou você pode mover o executor do grupo-padrão para um grupo personalizado.

Ao criar um grupo, você deve escolher uma política que defina quais organizações têm acesso ao grupo de executores.

{% ifversion fpt %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Clique em **Novo grupo de executores**.
 {% data reusables.github-actions.runner-group-assign-policy-org %}

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Clique em **Adicionar novo** e, em seguida, **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. Insira um nome para o seu grupo de executor e atribua uma política para acesso à organização.

   {% ifversion fpt or ghes > 2.22 or ghae %} Você pode configurar um grupo de executor para que possa ser acessado por uma lista específica de organizações ou todas as organizações da empresa. Por padrão, apenas repositórios privados podem acessar executores em um grupo de executores, mas você pode substituir isso. Esta configuração não pode ser substituída se você estiver configurando o grupo de executores da organização que foi compartilhado por uma empresa.{% elsif ghes = 2.22 %}Você pode configurar um grupo de executores para que possa ser acessado por todas as organizações da empresa ou escolher organizações específicas.{% endif %}

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

    ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.
{% endif %}

## Alterar a política de acesso de um grupo de executores auto-hospedados

Você pode atualizar a política de acesso de um grupo de executores ou renomear um grupo de executores.
{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups-selection %}
1. Modifique as opções de acesso ou altere o nome do grupo dp executor.

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}
## Adicionando um executor auto-hospedado a um grupo automaticamente

Você pode usar o script de configuração para adicionar automaticamente um novo executor auto-hospedado a um grupo. Por exemplo, este comando registra um novo executor auto-hospedado e usa o parâmetro `--runnergroup` para adicioná-lo a um grupo denominado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

O comando irá falhar se o grupo do executor não existir:

```
Não foi possível encontrar nenhum grupo de executor auto-hospedado denominado "rg-runnergroup".
```

## Mover um executor auto-hospedado para um grupo

Se você não especificar o grupo de um executor durante o processo de registro, seus novos executores auto-hospedados são automaticamente atribuídos ao grupo padrão e poderão ser transferidos para outro grupo.
{% ifversion fpt or ghes > 3.1 or ghae-next %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
1. Na lista de "Executores", clique no executor que você deseja configurar.
1. Selecione o menu suspenso do grupo do executor.
1. Em "Transferir executor para o grupo", escolha um grupo de destino para o executor.
{% else %}
1. Na seção "executores auto-hospedados" da página de configurações, localize o grupo atual do executor que deseja mover e expandir a lista de integrantes do grupo. ![Visualizar integrantes do grupo de executores](/assets/images/help/settings/actions-org-runner-group-members.png)
1. Marque a caixa de seleção ao lado do executor auto-hospedado e, em seguida, clique em **Mover para o grupo** para ver os destinos disponíveis. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. Para mover o executor, clique no grupo de destino. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}
## Remover um grupo de executor auto-hospedado

Os executores auto-hospedados são retornados automaticamente ao grupo-padrão quando seu grupo é removido.

{% ifversion fpt or ghes > 3.1 or ghae-next %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. Na lista de grupos, à direita do grupo que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. Para remover o grupo, clique em **Remover grupo**.
1. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**.
{% else %}
1. Na seção "Executores auto-hospedados" da página de configurações, localize o grupo que você deseja excluir e clique no botão {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} . ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. Para remover o grupo, clique em **Remover grupo**. ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**.
{% endif %}
