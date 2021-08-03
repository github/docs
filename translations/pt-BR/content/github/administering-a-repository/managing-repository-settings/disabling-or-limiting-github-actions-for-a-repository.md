---
title: Desabilitando ou limitando o GitHub Actions para um repositório
intro: 'Os proprietários do repositório podem desativar, habilitar e limitar o {% data variables.product.prodname_actions %} para um repositório específico.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
---
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% data reusables.github-actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

É possível habilitar o {% data variables.product.prodname_actions %} para seu repositório. {% data reusables.github-actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para o seu repositório completamente. {% data reusables.github-actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} em seu repositório, mas limitar as ações que um fluxo de trabalho pode ser executado. {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% note %}

**Nota:** Talvez você não seja capaz de gerenciar essas configurações se sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. Para obter mais informações, consulte "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" ou {% if currentVersion == "free-pro-team@latest" %}"[Aplicar políticas de {% data variables.product.prodname_actions %} na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif currentVersion ver_gt "enterprise-server@2.21"%}"[Aplicar políticas de {% data variables.product.prodname_actions %} para a sua empresa](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Em "Permissões do Actions", selecione uma opção. ![Habilitar, desabilitar ou limitar ações para este repositório](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

É possível desabilitar todos os fluxos de trabalho para um repositório ou definir uma política que configura quais ações podem ser usadas em um repositório.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Nota:** Talvez você não seja capaz de gerenciar essas configurações se sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. Para obter mais informações, consulte "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" ou {% if currentVersion == "free-pro-team@latest" %}"[Aplicar políticas de {% data variables.product.prodname_actions %} na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif currentVersion ver_gt "enterprise-server@2.21" %}"[Aplicar políticas de {% data variables.product.prodname_actions %} para a sua empresa](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Em **Permissões de ações**, selecione uma opção. ![Definir política de ações para esta organização](/assets/images/help/repository/actions-policy.png)
1. Clique em **Salvar**.

### Permitir a execução de ações específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Em **Permissões de ações**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista. ![Adicionar ações para permitir lista](/assets/images/help/repository/actions-policy-allow-list.png)
2. Clique em **Salvar**.
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar a política de bifurcação privada para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Definir as permissões do `GITHUB_TOKEN` para o seu repositório

{% data reusables.github-actions.workflow-permissions-intro %}

As permissões padrão também podem ser configuradas nas configurações da organização. Se o padrão mais restrito foi selecionado nas configurações da organização, a mesma opção será selecionada automaticamente nas configurações do repositório e a opção permissiva estará desabilitada.

{% data reusables.github-actions.workflow-permissions-modifying %}

#### Configurar as permissões padrão do `GITHUB_TOKEN`

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Em **permissões do fluxo de trabalho**, escolha se você quer que o `GITHUB_TOKEN` tenha acesso de leitura e gravação para todos os escopos, ou apenas acesso de leitura para o escopo do </code>conteúdo.
<img src="/assets/images/help/settings/actions-workflow-permissions-repository.png" alt="Definir permissões do GITHUB_TOKEN para este repositório" /></p></li>
<li><p spaces-before="0">Clique em <strong x-id="1">Salvar</strong> para aplicar as configurações.
</p>

<p spaces-before="0">{% endif %}</p></li>
</ol>
