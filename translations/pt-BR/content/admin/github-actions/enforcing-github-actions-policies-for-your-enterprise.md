---
title: Aplicar as políticas do GitHub Actions à sua empresa
intro: 'Os administradores das empresas podem gerenciar o acesso a {% data variables.product.prodname_actions %} em uma empresa.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as permissões de {% data variables.product.prodname_actions %} para sua empresa

Ao habilitar o {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, ele fica habilitado para todas as organizações da sua empresa. Você pode optar por desativar {% data variables.product.prodname_actions %} para todas as organizações da sua empresa ou permitir apenas organizações específicas. Você também pode limitar o uso de ações públicas, de modo que as pessoas só possam usar ações locais que existem em uma organização.

### Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua empresa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar a política de uma bifurcação privada para a sua empresa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
