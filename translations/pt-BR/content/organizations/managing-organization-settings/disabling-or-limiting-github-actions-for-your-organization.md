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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as permissões de {% data variables.product.prodname_actions %} para a sua organização

{% data reusables.github-actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

Você pode habilitar o {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.github-actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.github-actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} para todos os repositórios na sua organização e limitar as ações que um fluxo de trabalho pode executar. {% data reusables.github-actions.enabled-local-github-actions %}

## Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua organização

Você pode desabilitar todos os fluxos de trabalho para uma organização ou definir uma política que configura quais ações podem ser usadas em uma organização.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Observação:** Talvez você não consiga gerenciar essas configurações se a sua organização for gerenciada por uma empresa que tem uma política de substituição. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em **Políticas**, selecione uma opção. ![Definir política de ações para esta organização](/assets/images/help/organizations/actions-policy.png)
1. Clique em **Salvar**.

## Permitir a execução de ações específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em **Políticas**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista.
   {%- ifversion ghes > 3.0 %}
   ![Adicionar ações para permitir lista](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Adicionar ações para permitir lista](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. Clique em **Salvar**.

{% ifversion fpt or ghec %}
## Configurar a aprovação necessária para fluxos de trabalho de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar esse comportamento para uma organização seguindo o procedimento abaixo. A modificação desta configuração substitui a configuração definida no nível corporativo.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}If a policy is disabled for an enterprise, it cannot be enabled for organizations.{% endif %} If a policy is disabled for an organization, it cannot be enabled for repositories. If an organization enables a policy, the policy can be disabled for individual repositories.

{% data reusables.github-actions.private-repository-forks-options %}

### Configurar a política de bifurcação privada para uma organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Definindo as permissões do `GITHUB_TOKEN` para a sua organização

{% data reusables.github-actions.workflow-permissions-intro %}

Você pode definir as permissões padrão para o `GITHUB_TOKEN` nas configurações para a sua organização ou repositórios. Se você escolher a opção restrita como padrão nas configurações da sua organização, a mesma opção será selecionada automaticamente nas configurações dos repositórios na organização, e a opção permissiva ficará desabilitada. Se sua organização pertence a uma conta {% data variables.product.prodname_enterprise %} e o padrão mais restrito foi selecionado nas configurações corporativas, você não poderá de escolher o padrão mais permissivo nas configurações da organização.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configurar as permissões padrão do `GITHUB_TOKEN`

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em **permissões do fluxo de trabalho**, escolha se você quer que o `GITHUB_TOKEN` tenha acesso de leitura e gravação para todos os escopos, ou apenas acesso de leitura para o escopo do </code>conteúdo.
<img src="/assets/images/help/settings/actions-workflow-permissions-organization.png" alt="Definir permissões do GITHUB_TOKEN para esta organização" /></p></li>
<li><p spaces-before="0">Clique em <strong x-id="1">Salvar</strong> para aplicar as configurações.
</p>

<p spaces-before="0">{% endif %}</p></li>
</ol>
