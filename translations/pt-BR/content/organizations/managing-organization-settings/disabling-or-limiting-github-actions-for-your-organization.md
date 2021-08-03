---
title: Desabilitar ou limitar o GitHub Actions para sua organização
intro: 'Os proprietários da organização podem desabilitar, habilitar e limitar o GitHub Actions para uma organização.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as permissões de {% data variables.product.prodname_actions %} para a sua organização

{% data reusables.github-actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

Você pode habilitar o {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.github-actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para todos os repositórios da sua organização. {% data reusables.github-actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} para todos os repositórios na sua organização e limitar as ações que um fluxo de trabalho pode executar. {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em **Ações locais e de terceiros**, selecione uma opção. ![Habilitar, desabilitar ou limitar ações para esta organização](/assets/images/help/repository/enable-org-actions.png)
1. Clique em **Salvar**.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua organização

Você pode desabilitar todos os fluxos de trabalho para uma organização ou definir uma política que configura quais ações podem ser usadas em uma organização.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Observação:** Talvez você não consiga gerenciar essas configurações se a sua organização for gerenciada por uma empresa que tem uma política de substituição. Para obter mais informações, {% if currentVersion == "free-pro-team@latest" %}"[Aplicar políticas de {% data variables.product.prodname_actions %} na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account).{% else %}"[Aplicar políticas de {% data variables.product.prodname_actions %} para a sua empresa](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).{% endif %}

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em **Políticas**, selecione uma opção. ![Definir política de ações para esta organização](/assets/images/help/organizations/actions-policy.png)
1. Clique em **Salvar**.

### Permitir a execução de ações específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em **Políticas**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista. ![Adicionar ações para permitir lista](/assets/images/help/organizations/actions-policy-allow-list.png)
1. Clique em **Salvar**.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar a política de bifurcação privada para uma organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Definindo as permissões do `GITHUB_TOKEN` para a sua organização

{% data reusables.github-actions.workflow-permissions-intro %}

Você pode definir as permissões padrão para o `GITHUB_TOKEN` nas configurações para a sua organização ou repositórios. Se você escolher a opção restrita como padrão nas configurações da sua organização, a mesma opção será selecionada automaticamente nas configurações dos repositórios na organização, e a opção permissiva ficará desabilitada. Se sua organização pertence a uma conta {% data variables.product.prodname_enterprise %} e o padrão mais restrito foi selecionado nas configurações corporativas, você não poderá de escolher o padrão mais permissivo nas configurações da organização.

{% data reusables.github-actions.workflow-permissions-modifying %}

#### Configurar as permissões padrão do `GITHUB_TOKEN`

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
