---
title: Gerenciando o acesso aos executores auto-hospedados usando grupos
intro: Você pode usar políticas para limitar o acesso a executores auto-hospedados adicionados a uma organização ou empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Manage access to runners
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.restrict-runner-workflow-beta %}

## Sobre grupos de executores auto-hospedados

{% ifversion fpt %}
{% note %}

**Observação:** Todas as organizações têm um único grupo de executores auto-hospedados padrão. Somente contas corporativas e organizações pertencentes a contas corporativas podem criar e gerenciar grupos de executores auto-hospedados adicionais.

{% endnote %}

Os grupos de executores auto-hospedados são usados para controlar o acesso a executores auto-hospedados. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.
Se você usar

{% data variables.product.prodname_ghe_cloud %}, você pode criar grupos de executores adicionais. Os administradores corporativos podem configurar políticas de acesso que controlam quais organizações em uma empresa têm acesso ao grupo de executores; e os administradores da organização podem atribuir políticas adicionais de acesso ao repositório granular para o grupo de executores corporativos. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).
{% endif %}

{% ifversion ghec or ghes or ghae %}
Grupos de executores auto-hospedados são usados para controlar o acesso a executores auto-hospedados a nível da organização e da empresa. Enterprise owners can configure access policies that control which organizations
{% if restrict-groups-to-workflows %}and workflows {% endif %}in an enterprise have access to the runner group. Organization owners can configure access policies that control which repositories{% if restrict-groups-to-workflows %} and workflows{% endif %} in an organization have access to the runner group.

When an enterprise owner grants an organization access to a runner group, organization owners can see the runner group listed in the organization's self-hosted runner settings. The organization owners can then assign additional granular repository{% if restrict-groups-to-workflows %} and workflow{% endif %} access policies to the enterprise runner group.

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. Para obter mais informações, consulte "[Mover um executorauto-hospedado para um grupo](#moving-a-self-hosted-runner-to-a-group)".

## Criar um grupo de executor auto-hospedado para uma organização

Todas as organizações têm um único grupo de executores auto-hospedados padrão. As organizações dentro de uma conta corporativa podem criar outros grupos auto-hospedados. Os administradores da organização podem permitir o acesso de repositórios individuais a um grupo de executor. Para obter informações sobre como criar um grupo de executores auto-hospedados com a API REST, consulte "[grupos de executores auto-hospedados](/rest/reference/actions#self-hosted-runner-groups)."

Os executores auto-hospedados são automaticamente atribuídos ao grupo-padrão quando criados e só podem ser membros de um grupo por vez. Você pode mover um executor do grupo- padrão para qualquer grupo que você criar.

When creating a group, you must choose a policy that defines which repositories{% if restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.settings-sidebar-actions-runner-groups %}
1. Na seção "Grupos de executores", clique em **Novo grupo de executor**.
1. Enter a name for your runner group.
 {% data reusables.actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Aviso**: {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- if restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.settings-sidebar-actions-runners %}
1. Em {% ifversion ghes > 3.1 or ghae %}"Executores"{% elsif ghes < 3.2 %}"Executores auto-hospedados"{% endif %}, clique em **Adicionar novo** e, em seguida, **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

   É possível configurar o grupo de um executor para ser acessível a uma lista específica de repositórios ou a todos os repositórios na organização.{% ifversion ghec or ghes %} Por padrão, apenas repositórios privados podem acessar executores no grupo do executor, mas você pode substituir isso. Esta configuração não pode ser substituída se configurar o grupo de executores da organização que foi compartilhado por uma empresa.{% endif %}

   {%- ifversion ghes %}
   {% warning %}

   **Aviso**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.
{% endif %}

## Criar um grupo de executor auto-hospedado para uma empresa

As empresas podem adicionar seus executores auto-hospedados a grupos para gerenciamento de acesso. Enterprises can create groups of self-hosted runners that are accessible to specific organizations in the enterprise account{% if restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% if restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. Para obter informações sobre como criar um grupo de executores auto-hospedados com a API REST, consulte os pontos de extremidade corporativos na [API REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runner-groups).

Os executores auto-hospedados são automaticamente atribuídos ao grupo-padrão quando criados e só podem ser membros de um grupo por vez. Você pode atribuir o executor a um grupo específico durante o processo de registro, ou você pode mover o executor do grupo-padrão para um grupo personalizado.

Ao criar um grupo, você deve escolher uma política que defina quais organizações têm acesso ao grupo de executores.

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. Para escolher uma política para o acesso da organização, selecione a lista suspensa **Organização** e clique em uma política. Você pode configurar um grupo de executor para que possa ser acessado por uma lista específica de organizações ou a todas as organizações da empresa.{% ifversion ghes %} Por padrão, apenas repositórios privados podem acessar executores no grupo de um executor, mas você pode substituir isso.{% endif %}

   {%- ifversion ghec or ghes %}
   {% warning %}

   **Aviso**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
   {%- ifversion ghec or ghes %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.

{% endif %}

## Alterar a política de acesso de um grupo de executores auto-hospedados

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group{% if restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}. For runner groups in an organization, you can change what repositories in the organization can access a runner group{% if restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}.

### Changing what organizations or repositories can access a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. For runner groups in an enterprise, under **Organization access**, modify what organizations can access the runner group. For runner groups in an organization, under **Repository access**, modify what repositories can access the runner group.

   {%- ifversion fpt or ghec or ghes %}
   {% warning %}

   **Aviso**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}

{% if restrict-groups-to-workflows %}
### Changing what workflows can access a runner group
You can configure a self-hosted runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on self-hosted runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise.
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Clique em {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Clique em **Salvar**.

{% endif %}

## Changing the name of a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Change the runner group name.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group %}
1. Change the runner group name.
{% endif %}

{% ifversion ghec or ghes or ghae %}
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

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Na lista de "Executores", clique no executor que você deseja configurar.
2. Selecione o menu suspenso **Grupo do executor**.
3. Em "Transferir executor para o grupo", escolha um grupo de destino para o executor.
{% elsif ghae or ghes < 3.4 %}
1. Na seção {% ifversion ghes > 3.1 or ghae %}"Grupos de executores"{% elsif ghes < 3.2 %}"Executores auto-hospedados"{% endif %} da página de configurações, localize o grupo atual do executor que deseja mover e expandir a lista de integrantes do grupo. ![Visualizar integrantes do grupo de executores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Marque a caixa de seleção ao lado do executor auto-hospedado e, em seguida, clique em **Mover para o grupo** para ver os destinos disponíveis. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para mover o executor, clique no grupo de destino. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}

## Remover um grupo de executor auto-hospedado

Os executores auto-hospedados são retornados automaticamente ao grupo-padrão quando seu grupo é removido.

{% ifversion ghes > 3.1 or ghae or ghec %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. Na lista de grupos, à direita do grupo que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para remover o grupo, clique em **Remover grupo**.
3. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**.
{% elsif ghes < 3.2 %}
1. Na seção "Executores auto-hospedados" da página de configurações, localize o grupo que você deseja excluir e clique no botão {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} . ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. Para remover o grupo, clique em **Remover grupo**. ![Exibir configurações do grupo de executores](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**.
{% endif %}
{% endif %}
