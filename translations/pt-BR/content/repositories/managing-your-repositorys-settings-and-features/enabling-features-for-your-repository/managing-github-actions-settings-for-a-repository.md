---
title: Gerenciando as configurações do GitHub Actions para um repositório
intro: 'Você pode desabilitar ou configurar {% data variables.product.prodname_actions %} para um repositório específico.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Gerenciar configurações do GitHub Actions
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% data reusables.actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

É possível habilitar o {% data variables.product.prodname_actions %} para seu repositório. {% data reusables.actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para o seu repositório completamente. {% data reusables.actions.disabled-actions-description %}

Como alternativa, você pode habilitar {% data variables.product.prodname_actions %} em seu repositório, mas limitar as ações {% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} que um fluxo de trabalho pode ser executado.

## Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

Você pode desabilitar {% data variables.product.prodname_actions %} para um repositório ou definir uma política que configura quais ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} podem ser usados no repositório.

{% note %}

**Nota:** Talvez você não seja capaz de gerenciar essas configurações se sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. Para obter mais informações, consulte "[Desabilitando ou limitando {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" ou "[Aplicando políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões do Actions", selecione uma opção.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %}
   ![Definir política de ações para este repositório](/assets/images/help/repository/actions-policy-with-workflows.png)
   {%- else %}
   ![Definir política de ações para este repositório](/assets/images/help/repository/actions-policy.png)
   {%- endif %}
1. Clique em **Salvar**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões de ações", selecione {% data reusables.actions.policy-label-for-select-actions-workflows %} e adicione suas ações necessárias à lista.

   {% ifversion actions-workflow-policy%}
   ![Adicionar ações e fluxos de trabalho reutilizáveis à lista de permissões](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Adicionar ações à lista de permissões](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![Adicionar ações à lista de permissões](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}
1. Clique em **Salvar**.

{% ifversion fpt or ghec %}
## Controlando alterações de bifurcações para fluxos de trabalho em repositórios públicos

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar esse comportamento para um repositório seguindo o procedimento abaixo. A modificação desta configuração substitui a configuração definida no nível da organização ou empresa.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## Habilitando fluxos de trabalho para bifurcações de repositórios privados

{% data reusables.actions.private-repository-forks-overview %}

Se uma política estiver desabilitada para uma organização {% ifversion ghec or ghae or ghes %}empresa ou{% endif %}, ela não poderá ser habilitada para um repositório.

{% data reusables.actions.private-repository-forks-options %}

### Configurando a política de bifurcação de um repositório privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}

## Definir as permissões do `GITHUB_TOKEN` para o seu repositório

{% data reusables.actions.workflow-permissions-intro %}

As permissões padrão também podem ser configuradas nas configurações da organização. Se o seu repositório pertence a uma organização e um padrão mais restritivo foi selecionado nas configurações da organização, a mesma opção está selecionada nas configurações do repositório e a opção permissiva será desabilitada.

{% data reusables.actions.workflow-permissions-modifying %}

### Configurar as permissões padrão do `GITHUB_TOKEN`

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
Por padrão, ao criar um novo repositório na sua conta pessoal, `GITHUB_TOKEN` só terá acesso de leitura para o escopo `conteúdo`. Se você criar um novo repositório em uma organização, a configuração será herdada do que está configurado nas configurações da organização.
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões do fluxo de trabalho", escolha se você quer o `GITHUB_TOKEN` para ter acesso de leitura e escrita para todos os escopos, ou apenas ler acesso para o escopo `conteúdo`.

   ![Definir permissões do GITHUB_TOKEN para este repositório](/assets/images/help/settings/actions-workflow-permissions-repository{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)

1. Clique em **Salvar** para aplicar as configurações.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Impedindo {% data variables.product.prodname_actions %} de criar ou aprovar pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Por padrão, ao cria um novo repositório na sua conta pessoal, os fluxos de trabalho não são autorizados a criar ou aprovar pull requests. Se você criar um novo repositório em uma organização, a configuração será herdada do que está configurado nas configurações da organização.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Fluxos de trabalho", use a configuração **Permitir que o GitHub Actions crie e aprove pull requests** para configurar se `GITHUB_TOKEN` pode criar e aprovar pull requests.

   ![Definir permissões do GITHUB_TOKEN para este repositório](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Clique em **Salvar** para aplicar as configurações.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Permitindo o acesso a componentes em um repositório interno

Os integrantes da sua empresa podem usar repositórios internos para trabalhar em projetos sem compartilhar informações publicamente. Para obter informações, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".

É possível usar os passos abaixo para configurar se as ações {% ifversion internal-actions%}e os {% endif %}fluxos de trabalho em um repositório interno podem ser acessados de fora do repositório.{% ifversion internal-actions %} Para obter mais informações, consulte "[Compartilhando ações e fluxos de trabalho com sua empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)". Como alternativa, você pode usar a API REST para definir ou obter detalhes sobre o nível de acesso. Para obter mais informações, consulte "[Obtenha o nível de acesso para fluxos de trabalho fora do repositório](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" e "[Defina o nível de acesso para fluxos de trabalho fora do repositório](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)"{% endif %}

1. No {% data variables.product.prodname_dotcom %}, acesse a página principal do repositório interno.
1. No nome do repositório, clique em {% octicon "gear" aria-label="The gear icon" %} **Configurações**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Em **Acesso**, escolha uma das configurações de acesso:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Não acessível** - Os fluxos de trabalho em outros repositórios não podem acessar este repositório.
   * **Pode ser acessado a partir de repositórios na organização "ORGANIZATION NAME"** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Os fluxos de trabalho nos outros repositórios que fazem parte da organização "ORGANIZATION NAME" podm acessar as ações e fluxos de trabalho nesse repositório. O acesso é permitido somente a partir de repositórios privados ou internos. Os fluxos de trabalho{% else %}em outros repositórios podem usar fluxos de trabalho neste repositório se fizerem parte da mesma organização e sua visibilidade for privada ou interna.{% endif %}
   * **Pode ser acessado a partir de repositórios na empresa "ENTERPRISE NAME"** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Os fluxos de trabalho nos outros repositórios que fazem parte da empresa "ENTERPRISE NAME" podem acessar as ações e os fluxos de trabalho nesse repositório. O acesso é permitido somente a partir de repositórios privados ou internos.{% else %}Os fluxos de trabalho em outros repositórios podem usar fluxos de trabalhosnesse repositório se fizerem parte da mesma empresa e a sua visibilidade for privada ou interna.{% endif %}
1. Clique em **Salvar** para aplicar as configurações.
{% endif %}

## Configurar o período de retenção para artefatos e registros de{% data variables.product.prodname_actions %} no seu repositório

Você pode configurar o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} no seu repositório.

{% data reusables.actions.about-artifact-log-retention %}

Você também pode definir um período de retenção personalizado para um artefato específico criado por um fluxo de trabalho. Para obter mais informações, consulte "[Definir o período de retenção para um artefato](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Definir o período de retenção para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Configurando armazenamento em cache para um repositório

{% data reusables.actions.cache-default-size %} No entanto, esses tamanhos padrão podem ser diferentes se um proprietário da empresa os alterou. {% data reusables.actions.cache-eviction-process %}

É possível definir um tamanho de armazenamento total de cache para seu repositório até o tamanho máximo permitido pela configuração da política corporativa.

As configurações do repositório para o armazenamento de cache {% data variables.product.prodname_actions %} atualmente só podem ser modificadas usando a API REST:

* Para visualizar o limite atual de armazenamento de cache para um repositório, consulte "[Obter política de uso do cache do GitHub Actions para um repositório](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)".
* Para alterar o limite de armazenamento de cache para um repositório, consulte "[Definir política de uso do cache do GitHub Actions para um repositório](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
