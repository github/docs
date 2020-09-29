---
title: Desabilitando ou limitando o GitHub Actions para um repositório
intro: 'Os proprietários do repositório podem desativar, habilitar e limitar o {% data variables.product.prodname_actions %} para um repositório específico.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% data reusables.github-actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

É possível habilitar o {% data variables.product.prodname_actions %} para seu repositório. {% data reusables.github-actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para o seu repositório completamente. {% data reusables.github-actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} em seu repositório, mas limitar as ações que um fluxo de trabalho pode ser executado. {% data reusables.github-actions.enabled-local-github-actions %}

### Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% note %}

**Nota:** Talvez você não seja capaz de gerenciar essas configurações se sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. Para mais informações, consulte "[Desabilitando ou limitando {% data variables.product.prodname_actions %} para sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" ou "[Forçando políticas do {% data variables.product.prodname_actions %} na sua conta corporativa](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Em "Permissões do Actions", selecione uma opção. ![Habilitar, desabilitar ou limitar ações para este repositório](/assets/images/help/repository/enable-repo-actions.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar a política de bifurcação privada para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
