---
title: Aplicar as políticas do GitHub Actions à sua empresa
intro: 'Os administradores das empresas podem gerenciar o acesso a {% data variables.product.prodname_actions %} em uma empresa.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: Aplicar políticas corporativas
---

{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}

## Sobre as permissões de {% data variables.product.prodname_actions %} para sua empresa

{% ifversion ghae %}{% else %}Ao habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, isso será habilitado para todas as organizações da sua empresa. {% endif %}Você pode escolher desabilitar {% data variables.product.prodname_actions %} para todas as organizações da sua empresa ou apenas permitir organizações específicas. Você também pode limitar o uso de ações públicas, de modo que as pessoas só possam usar ações locais que existem na sua empresa.

## Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% ifversion ghes > 2.22 %}
## Permitir a execução de ações específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Em **Políticas**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista. ![Adicionar ações para permitir lista](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
{% endif %}

{% ifversion ghes > 2.22 or ghae %}
## Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

### Configurar a política de uma bifurcação privada para a sua empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
