---
title: Desabilitar ou limitar o GitHub Actions para sua organização
intro: 'Os proprietários da organização podem desabilitar, habilitar e limitar o GitHub Actions para uma organização.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Sobre as permissões de {{ site.data.variables.product.prodname_actions }} para a sua organização

{{ site.data.reusables.github-actions.disabling-github-actions }} Para mais informações sobre {{ site.data.variables.product.prodname_actions }}, consulte "[Sobre {{ site.data.variables.product.prodname_actions }}](/actions/getting-started-with-github-actions/about-github-actions)."

Você pode habilitar o {{ site.data.variables.product.prodname_actions }} para todos os repositórios da sua organização. {{ site.data.reusables.github-actions.enabled-actions-description }} Você pode desabilitar {{ site.data.variables.product.prodname_actions }} para todos os repositórios da sua organização. {{ site.data.reusables.github-actions.disabled-actions-description }}

Como alternativa, você pode habilitar o {{ site.data.variables.product.prodname_actions }} para todos os repositórios na sua organização e limitar as ações que um fluxo de trabalho pode executar. {{ site.data.reusables.github-actions.enabled-local-github-actions }}

### Gerenciar as permissões de {{ site.data.variables.product.prodname_actions }} para a sua organização

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
1. Em **Ações locais e de terceiros**, selecione uma opção. ![Habilitar, desabilitar ou limitar ações para esta organização](/assets/images/help/repository/enable-org-actions.png)
1. Clique em **Salvar**.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configurar a política de bifurcação privada para uma organização

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
