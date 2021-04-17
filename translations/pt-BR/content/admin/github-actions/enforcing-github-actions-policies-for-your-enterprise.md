---
title: Aplicar as políticas do GitHub Actions à sua empresa
intro: 'Os administradores das empresas podem gerenciar o acesso a {% data variables.product.prodname_actions %} em uma empresa.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - enterprise
---

{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}

### Sobre as permissões de {% data variables.product.prodname_actions %} para sua empresa

{% if currentVersion == "github-ae@latest" %}{% else %}Ao habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, isso será habilitado para todas as organizações da sua empresa. {% endif %}Você pode escolher desabilitar {% data variables.product.prodname_actions %} para todas as organizações da sua empresa ou apenas permitir organizações específicas. Você também pode limitar o uso de ações públicas, de modo que as pessoas só possam usar ações locais que existem na sua empresa.

### Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest"%}
### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar a política de uma bifurcação privada para a sua empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
