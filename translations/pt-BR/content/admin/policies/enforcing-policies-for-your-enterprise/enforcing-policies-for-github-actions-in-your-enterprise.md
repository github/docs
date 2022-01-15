---
title: Aplicando políticas para o GitHub Actions na sua empresa
intro: 'Você pode exigir políticas para {% data variables.product.prodname_actions %} dentro das organizações de sua empresa ou permitir que as políticas sejam definidas em cada organização.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: Políticas do GitHub Actions
---

{% data reusables.actions.enterprise-beta %}

## Sobre as políticas para {% data variables.product.prodname_actions %} na sua empresa

{% data variables.product.prodname_actions %} ajuda os inetgrantes da sua empresa a automatizar os fluxos de trabalho de desenvolvimento de software em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Entendendo {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

{% ifversion ghes %}Se você habilitar {% data variables.product.prodname_actions %}, qualquer{% else %}Qualquer{% endif %} organização em {% data variables.product.product_location %} poderá usar {% data variables.product.prodname_actions %}. Você pode aplicar políticas para controlar como os integrantes da sua empresa em {% data variables.product.product_name %} usam {% data variables.product.prodname_actions %}. Por padrão, os proprietários da organização podem gerenciar como os integrantes usam {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Desabilitando ou limitando {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)".

## Aplicando uma política para restringir o uso de ações na sua empresa

Você pode optar por desativar {% data variables.product.prodname_actions %} para todas as organizações da sua empresa ou permitir apenas organizações específicas. Você também pode limitar o uso de ações públicas, de modo que as pessoas só possam usar ações locais que existem na sua empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Clique em **Salvar**.

{% ifversion ghec or ghes or ghae %}

### Permitir selecionar ações para executar

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Em **Políticas**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista.
   {%- ifversion ghes > 3.0 or ghae-issue-5094 %}
   ![Adicionar ações para permitir lista](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![Adicionar ações para permitir lista](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Aplicando uma política de artefato e registrando a retenção na sua empresa

{% data variables.product.prodname_actions %} pode armazenar artefatos e arquivos de registro. Para obter mais informações, consulte "[Fazendo o download dos artefatos de fluxo de trabalho](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}

{% endif %}

## Aplicando uma política para bifurcar pull requests na sua empresa

Você pode aplicar políticas para controlar como {% data variables.product.prodname_actions %} comporta-se para {% data variables.product.product_location %} quando os integrantes da sua empresa{% ifversion ghec %} ou colaboradores externos{% endif %} executarem fluxos de trabalho a partir das bifurcações.

{% ifversion ghec %}

### Aplicando uma política de aprovação de pull requests dos colaboradores externos

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

### Aplicando uma política para bifurcar pull requests em repositórios privados

{% data reusables.github-actions.private-repository-forks-overview %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae %}

## Aplicando uma política de permissões de fluxo de trabalho na sua empresa

{% data reusables.github-actions.workflow-permissions-intro %}

Você pode definir as permissões padrão para o `GITHUB_TOKEN` nas configurações para sua empresa, organizações ou repositórios. Se você escolher a opção restrita como padrão nas configurações da empresa, isto impedirá que a configuração mais permissiva seja escolhida nas configurações da organização ou repositório.

{% data reusables.github-actions.workflow-permissions-modifying %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Em **permissões do fluxo de trabalho**, escolha se você quer que o `GITHUB_TOKEN` tenha acesso de leitura e gravação para todos os escopos, ou apenas acesso de leitura para o escopo do </code>conteúdo.
<img src="/assets/images/help/settings/actions-workflow-permissions-enterprise.png" alt="Definir permissões do GITHUB_TOKEN para esta empresa" /></p></li>
<li><p spaces-before="0">Clique em <strong x-id="1">Salvar</strong> para aplicar as configurações.</p></li>
</ol>

<p spaces-before="0">{% endif %}</p>
