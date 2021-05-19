---
title: Aplicar políticas do GitHub Actions na sua conta corporativa
intro: 'Os proprietários de empresas podem habilitar, desabilitar limitar {% data variables.product.prodname_actions %} para uma conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
---
### Sobre as permissões de {% data variables.product.prodname_actions %} para a sua conta corporativa

Por padrão, {% data variables.product.prodname_actions %} é habilitado em todas as organizações que pertencem a uma conta corporativa. Você pode optar por desabilitar {% data variables.product.prodname_actions %} para todas as organizações que pertencem a uma conta corporativa ou apenas permitir organizações especificadas. Você também pode limitar o uso de ações públicas, de modo que as pessoas só possam usar ações locais que existem na sua organização.

Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

### Gerenciar as permissões de {% data variables.product.prodname_actions %} para a sua conta corporativa

Você pode desabilitar todos os fluxos de trabalho para uma empresa ou definir uma política que configura quais ações podem ser usadas em uma organização.

{% data reusables.actions.actions-use-policy-settings %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Clique em **Salvar**.

### Permitir a execução de ações específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Em **Políticas**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista. ![Adicionar ações para permitir lista](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)

### Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configurar a política de uma bifurcação privada para a sua conta corporativa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
