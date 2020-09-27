---
title: Aplicar as políticas do GitHub Actions à sua empresa
intro: 'Os administradores das empresas podem gerenciar o acesso a {{ site.data.variables.product.prodname_actions }} em uma empresa.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Sobre as permissões de {{ site.data.variables.product.prodname_actions }} para sua empresa

Ao habilitar o {{ site.data.variables.product.prodname_actions }} em {{ site.data.variables.product.prodname_ghe_server }}, ele fica habilitado para todas as organizações da sua empresa. Você pode optar por desativar {{ site.data.variables.product.prodname_actions }} para todas as organizações da sua empresa ou permitir apenas organizações específicas. Você também pode limitar o uso de ações públicas, de modo que as pessoas só possam usar ações locais que existem em uma organização.

### Gerenciar as permissões de {{ site.data.variables.product.prodname_actions }} para a sua empresa

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.actions.enterprise-actions-permissions }}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configurar a política de uma bifurcação privada para a sua empresa

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
