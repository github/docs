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
shortTitle: Desativar ou limitar ações
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as permissões de {% data variables.product.prodname_actions %} para a sua organização

{% data reusables.actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

Você pode habilitar o {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.actions.disabled-actions-description %}

Como alternativa, você pode habilitar {% data variables.product.prodname_actions %} para todos os repositórios na sua organização, mas limitar as ações {% if actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %}, que um fluxo de trabalho pode ser executado.

## Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua organização

É possível desabilitar {% data variables.product.prodname_actions %} em todos os repositórios na organização ou apenas permitir repositórios específicos. Você também pode limitar o uso de ações públicas{% if actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}, para que as pessoas só possam usar ações locais {% if actions-workflow-policy %}e fluxos de trabalho reutilizáveis{% endif %} que existem na sua {% ifversion ghec or ghes or ghae %}empresa{% else %}organização{% endif %}.

{% note %}

**Observação:** Talvez você não consiga gerenciar essas configurações se a sua organização for gerenciada por uma empresa que tem uma política de substituição. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Em "Políticas", selecione uma opção.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% if actions-workflow-policy %}
   ![Definir política de ações para esta organização](/assets/images/help/organizations/actions-policy-with-workflows.png)
   {%- else %}
   ![Definir política de ações para esta organização](/assets/images/help/organizations/actions-policy.png)
   {%- endif %}
1. Clique em **Salvar**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Em "Políticas", selecione {% data reusables.actions.policy-label-for-select-actions-workflows %} e adicione suas ações necessárias{% if actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} à lista.

   {% if actions-workflow-policy %}
   ![Adicionar ações e fluxos de trabalho reutilizáveis à lista de permissões](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Adicionar ações à lista de permissões](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Adicionar ações à lista de permissões](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. Clique em **Salvar**.

{% ifversion fpt or ghec %}
## Configurar a aprovação necessária para fluxos de trabalho de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar esse comportamento para uma organização seguindo o procedimento abaixo. A modificação desta configuração substitui a configuração definida no nível corporativo.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Se uma política estiver desabilitada para uma empresa, ela não poderá ser habilitada para as organizações.{% endif %} Se uma política estiver desabilitada para uma organização, ela não poderá ser habilitada para repositórios. Se uma organização habilitar uma política, a política poderá ser desabilitada para repositórios individuais.

{% data reusables.actions.private-repository-forks-options %}

### Configurar a política de bifurcação privada para uma organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Definindo as permissões do `GITHUB_TOKEN` para a sua organização

{% data reusables.actions.workflow-permissions-intro %}

Você pode definir as permissões padrão para o `GITHUB_TOKEN` nas configurações para a sua organização ou repositórios. Se você escolher a opção restrita como padrão nas configurações da sua organização, a mesma opção será selecionada automaticamente nas configurações dos repositórios na organização, e a opção permissiva ficará desabilitada. Se sua organização pertence a uma conta {% data variables.product.prodname_enterprise %} e o padrão mais restrito foi selecionado nas configurações corporativas, você não poderá de escolher o padrão mais permissivo nas configurações da organização.

{% data reusables.actions.workflow-permissions-modifying %}

### Configurar as permissões padrão do `GITHUB_TOKEN`

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Em **permissões do fluxo de trabalho**, escolha se você quer que o `GITHUB_TOKEN` tenha acesso de leitura e gravação para todos os escopos, ou apenas acesso de leitura para o escopo do </code>conteúdo.
<img src="/assets/images/help/settings/actions-workflow-permissions-organization.png" alt="Definir permissões do GITHUB_TOKEN para esta organização" /></p></li>
<li><p spaces-before="0">Clique em <strong x-id="1">Salvar</strong> para aplicar as configurações.
</p>

<p spaces-before="0">{% endif %}</p></li>
</ol>
