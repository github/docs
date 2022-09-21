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
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80bce0a3f43ccac75215bd738922dc5d79868793
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061125'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% data reusables.actions.disabling-github-actions %} Para obter mais informações sobre o {% data variables.product.prodname_actions %}, confira "[Sobre o {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

É possível habilitar o {% data variables.product.prodname_actions %} para seu repositório. {% data reusables.actions.enabled-actions-description %} Você pode desabilitar o {% data variables.product.prodname_actions %} por completo no seu repositório. {% data reusables.actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} no repositório, mas limitar as ações {% ifversion actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %} que um fluxo de trabalho pode executar.

## Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

Você pode desabilitar o {% data variables.product.prodname_actions %} de um repositório ou definir uma política que configure quais ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} podem ser usados no repositório.

{% note %}

**Observação:** talvez você não consiga gerenciar essas configurações se a sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. Para obter mais informações, confira "[Como desabilitar ou limitar o {% data variables.product.prodname_actions %} para sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" ou "[Como impor políticas para o {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões do Actions", selecione uma opção.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Definir uma política de ações para este repositório](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![Definir uma política de ações para este repositório](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. Clique em **Salvar**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões de ações", selecione {% data reusables.actions.policy-label-for-select-actions-workflows %} e adicione as ações necessárias à lista.

   {% ifversion actions-workflow-policy%} ![Adicionar ações e fluxos de trabalho reutilizáveis à lista de permitidos](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Adicionar ações à lista de permitidos](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![Adicionar ações à lista de permitidos](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. Clique em **Salvar**.

{% ifversion fpt or ghec %}
## Como controlar alterações de forks nos fluxos de trabalho em repositórios públicos

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar esse comportamento para um repositório seguindo o procedimento abaixo. A modificação desta configuração substitui a configuração definida no nível da organização ou empresa.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## Como habilitar fluxos de trabalho para forks de repositórios privados

{% data reusables.actions.private-repository-forks-overview %}

Se uma política estiver desabilitada para uma organização {% ifversion ghec or ghae or ghes %}empresa ou{% endif %}, ela não poderá ser habilitada para um repositório.

{% data reusables.actions.private-repository-forks-options %}

### Como configurar a política de fork para um repositório privado

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## Como definir as permissões do `GITHUB_TOKEN` para o seu repositório

{% data reusables.actions.workflow-permissions-intro %}

As permissões padrão também podem ser configuradas nas configurações da organização. Se o seu repositório pertencer a uma organização e um padrão mais restrito foi selecionado nas configurações da organização, a mesma opção será selecionada automaticamente nas configurações do repositório e a opção permissiva ficará desabilitada.

{% data reusables.actions.workflow-permissions-modifying %}

### Como configurar as permissões padrão do `GITHUB_TOKEN`

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} Por padrão, quando você cria um repositório em sua conta pessoal, o `GITHUB_TOKEN` só tem acesso de leitura para o escopo `contents`. Se você criar um repositório em uma organização, a configuração será herdada do que está definido nas configurações da organização.
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões de fluxo de trabalho", escolha se deseja que o `GITHUB_TOKEN` tenha acesso de leitura e gravação em todos os escopos ou apenas acesso de leitura no escopo `contents`.

   ![Definir permissões do GITHUB_TOKEN para este repositório](/assets/images/help/settings/actions-workflow-permissions-repository{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)

1. Clique em **Salvar** para aplicar as configurações.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Como impedir que {% data variables.product.prodname_actions %} crie ou aprove solicitações de pull

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Por padrão, quando você cria um repositório em sua conta pessoal, os fluxos de trabalho não têm permissão para criar nem aprovar solicitações de pull. Se você criar um repositório em uma organização, a configuração será herdada do que está definido nas configurações da organização.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Em "Permissões do fluxo de trabalho", use a configuração **Permitir que o GitHub Actions crie e aprove solicitações de pull** para configurar se `GITHUB_TOKEN` pode criar e aprovar solicitações de pull.

   ![Definir permissões do GITHUB_TOKEN para este repositório](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Clique em **Salvar** para aplicar as configurações.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Permitindo o acesso a componentes em um repositório interno

Os integrantes da sua empresa podem usar repositórios internos para trabalhar em projetos sem compartilhar informações publicamente. Para obter informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".

Siga as etapas abaixo para configurar se {% ifversion internal-actions%}as ações e {% endif %}os fluxos de trabalho em um repositório interno podem ser acessados fora do repositório.{% ifversion internal-actions %} Para obter mais informações, confira "[Como compartilhar ações e fluxos de trabalho com sua empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)". Como alternativa, você pode usar a API REST para definir ou obter detalhes sobre o nível de acesso. Para obter mais informações, confira "[Obter o nível de acesso para fluxos de trabalho fora do repositório](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" e "[Definir o nível de acesso para fluxos de trabalho fora do repositório](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)".{% endif %}

1. No {% data variables.product.prodname_dotcom %}, acesse a página principal do repositório interno.
1. Abaixo do nome do repositório, clique em {% octicon "gear" aria-label="The gear icon" %} **Configurações**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Em **Acesso**, escolha uma das configurações de acesso:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Defina o acesso aos componentes das Ações](/assets/images/help/settings/actions-access-settings.png){% else %}![Defina o acesso aos componentes das Ações](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Não acessível** – Os fluxos de trabalho de outros repositórios não podem acessar este repositório.
   * **Pode ser acessado por meio de repositórios na organização 'NOME DA ORGANIZAÇÃO'** – {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Os fluxos de trabalho de outros repositórios que fazem parte da organização 'NOME DA ORGANIZAÇÃO' podem acessar as ações e os fluxos de trabalho deste repositório. O acesso é permitido somente a partir de repositórios privados ou internos. Os fluxos de trabalho{% else %}em outros repositórios podem usar fluxos de trabalho neste repositório se fizerem parte da mesma organização e sua visibilidade for privada ou interna.{% endif %}
   * **Pode ser acessado por meio de repositórios na empresa 'NOME DA EMPRESA'** – {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Os fluxos de trabalho de outros repositórios que fazem parte da empresa 'NOME DA EMPRESA' podem acessar as ações e os fluxos de trabalho deste repositório. O acesso é permitido somente a partir de repositórios privados ou internos.{% else %}Os fluxos de trabalho em outros repositórios podem usar fluxos de trabalhosnesse repositório se fizerem parte da mesma empresa e a sua visibilidade for privada ou interna.{% endif %}
1. Clique em **Salvar** para aplicar as configurações.
{% endif %}

## Configurar o período de retenção para artefatos e registros de{% data variables.product.prodname_actions %} no seu repositório

Você pode configurar o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} no seu repositório.

{% data reusables.actions.about-artifact-log-retention %}

Você também pode definir um período de retenção personalizado para um artefato específico criado por um fluxo de trabalho. Para obter mais informações, confira "[Como definir o período de retenção para um artefato](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Definir o período de retenção para um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Configurando o armazenamento em cache de um repositório

{% data reusables.actions.cache-default-size %} No entanto, esses tamanhos padrão poderão ser diferentes se um proprietário da empresa os tiver alterado. {% data reusables.actions.cache-eviction-process %}

Você pode definir um tamanho total de armazenamento em cache para seu repositório, até o tamanho máximo permitido pela configuração da política corporativa.

Atualmente, as configurações de repositório para o armazenamento em cache do {% data variables.product.prodname_actions %} só podem ser modificadas usando a API REST:

* Para exibir o limite de armazenamento em cache atual para um repositório, confira "[Obter política de uso do cache do GitHub Actions para um repositório](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)".
* Para alterar o limite de armazenamento em cache atual para um repositório, confira "[Obter política de uso do cache do GitHub Actions para um repositório](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
