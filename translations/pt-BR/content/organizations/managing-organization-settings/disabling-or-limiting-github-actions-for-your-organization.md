---
title: Desabilitar ou limitar o GitHub Actions para sua organização
intro: 'Os proprietários da organização podem desabilitar, habilitar e limitar o GitHub Actions para uma organização.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b72b1e412906b1a2ec7520a9c939d5adefee7dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064679'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as permissões de {% data variables.product.prodname_actions %} para a sua organização

{% data reusables.actions.disabling-github-actions %} Para obter mais informações sobre o {% data variables.product.prodname_actions %}, confira "[Sobre o {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Você pode habilitar o {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.actions.enabled-actions-description %} Você pode desabilitar o {% data variables.product.prodname_actions %} em todos os repositórios da sua organização. {% data reusables.actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} em todos os repositórios da organização, mas limitar as ações {% ifversion actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %} que um fluxo de trabalho pode executar.

## Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua organização

Você pode optar por desabilitar o {% data variables.product.prodname_actions %} em todos os repositórios da sua organização ou permitir apenas repositórios específicos. Você também pode limitar o uso de ações públicas{% ifversion actions-workflow-policy %} e de fluxos de trabalho reutilizáveis{% endif %}, para que as pessoas só possam usar as ações locais {% ifversion actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %} existentes na {% ifversion ghec or ghes or ghae %}empresa{% else %}organização{% endif %}.

{% note %}

**Observação:** talvez você não consiga gerenciar essas configurações se a sua organização for gerenciada por uma empresa que tem uma política de substituição. Para obter mais informações, confira "[Como impor políticas ao {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Em "Políticas", selecione uma opção.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Definir uma política de ações para esta organização](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![Definir uma política de ações para esta organização](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. Clique em **Salvar**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Em "Políticas", selecione {% data reusables.actions.policy-label-for-select-actions-workflows %} e adicione as ações necessárias{% ifversion actions-workflow-policy %} e os fluxos de trabalho reutilizáveis{% endif %} à lista.

   {% ifversion actions-workflow-policy %} ![Adicionar ações e fluxos de trabalho reutilizáveis à lista de permitidos](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Adicionar ações à lista de permitidos](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![Adicionar ações à lista de permitidos](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. Clique em **Salvar**.

{% ifversion fpt or ghec %}
## Configurar a aprovação necessária para fluxos de trabalho de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar esse comportamento para uma organização seguindo o procedimento abaixo. A modificação desta configuração substitui a configuração definida no nível corporativo.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Se uma política estiver desabilitada para uma empresa, ela não poderá ser habilitada para as organizações.{% endif %} Se uma política estiver desabilitada para uma organização, ela não poderá ser habilitada para repositórios. Se uma organização habilitar uma política, a política poderá ser desabilitada para repositórios individuais.

{% data reusables.actions.private-repository-forks-options %}

### Configurar a política de bifurcação privada para uma organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## Como definir as permissões do `GITHUB_TOKEN` para sua organização

{% data reusables.actions.workflow-permissions-intro %}

Defina as permissões padrão do `GITHUB_TOKEN` nas configurações da organização ou dos repositórios. Se você selecionar a opção restrita como padrão nas configurações da sua organização, a mesma opção será selecionada nas configurações dos repositórios na organização, e a opção permissiva ficará desabilitada. Se sua organização pertencer a uma conta do {% data variables.product.prodname_enterprise %} e o padrão mais restrito tiver sido selecionado nas configurações corporativas, você não poderá de escolher o padrão mais permissivo nas configurações da organização.

{% data reusables.actions.workflow-permissions-modifying %}

### Como configurar as permissões padrão do `GITHUB_TOKEN`

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} Por padrão, quando você cria uma organização, `GITHUB_TOKEN` só tem acesso de leitura ao escopo `contents`.
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Em "Permissões de fluxo de trabalho", escolha se deseja que o `GITHUB_TOKEN` tenha acesso de leitura e gravação em todos os escopos ou apenas acesso de leitura no escopo `contents`.

   ![Definir permissões do GITHUB_TOKEN para esta organização](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Clique em **Salvar** para aplicar as configurações.

{% ifversion allow-actions-to-approve-pr %}
### Como impedir que o {% data variables.product.prodname_actions %} {% ifversion allow-actions-to-approve-pr-with-ent-repo %}crie ou {% endif %}aprove solicitações de pull

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Por padrão, quando você cria uma organização, os fluxos de trabalho não têm permissão para {% ifversion allow-actions-to-approve-pr-with-ent-repo %}criar ou {% endif %}aprovar solicitações de pull.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Em "Permissões do fluxo de trabalho", use a configuração **Permitir que o GitHub Actions {% ifversion allow-actions-to-approve-pr-with-ent-repo %}crie e {% endif %}aprove solicitações de pull** para definir se o `GITHUB_TOKEN` poderá {% ifversion allow-actions-to-approve-pr-with-ent-repo %}criar e {% endif %}aprovar solicitações de pull.

   ![Definir a permissão de apovação de solicitação de pull GITHUB_TOKEN para esta organização](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Clique em **Salvar** para aplicar as configurações.

{% endif %}
