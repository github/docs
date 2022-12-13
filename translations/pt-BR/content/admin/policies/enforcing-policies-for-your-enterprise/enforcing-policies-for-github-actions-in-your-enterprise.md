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
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
ms.openlocfilehash: 21b2cfa73ef84ba6635f05b9fc25bb48df2b87cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147400335'
---
{% data reusables.actions.enterprise-beta %}

## Sobre as políticas para {% data variables.product.prodname_actions %} na sua empresa

{% data variables.product.prodname_actions %} ajuda os inetgrantes da sua empresa a automatizar os fluxos de trabalho de desenvolvimento de software em {% data variables.product.product_name %}. Para obter mais informações, confira "[Noções básicas sobre o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

{% ifversion ghes %}Se você habilitar {% data variables.product.prodname_actions %}, qualquer{% else %}Qualquer{% endif %} organização em {% data variables.product.product_location %} poderá usar {% data variables.product.prodname_actions %}. Você pode aplicar políticas para controlar como os integrantes da sua empresa em {% data variables.product.product_name %} usam {% data variables.product.prodname_actions %}. Por padrão, os proprietários da organização podem gerenciar como os integrantes usam {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como desabilitar ou limitar o {% data variables.product.prodname_actions %} para sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)".

## Como impor uma política para restringir o uso do {% data variables.product.prodname_actions %} na sua empresa

Você pode optar por desativar {% data variables.product.prodname_actions %} para todas as organizações da sua empresa ou permitir apenas organizações específicas. Você também pode limitar o uso de ações públicas {% ifversion actions-workflow-policy %}e de fluxos de trabalho reutilizáveis{% endif %}, para que as pessoas só possam usar as ações locais {% ifversion actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %} existentes na empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Em "Políticas", selecione suas opções.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **Observação:** para habilitar o acesso a ações públicas{% ifversion actions-workflow-policy %} e a fluxos de trabalho reutilizáveis{% endif %}, primeiro, você precisa configurar o {% data variables.product.product_location %} para se conectar ao {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do GitHub.com usando o GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![Habilitar, desabilitar ou limitar ações para essa conta empresarial](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Habilitar, desabilitar ou limitar ações para essa conta empresarial](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. Clique em **Salvar**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Em "Políticas", selecione {% data reusables.actions.policy-label-for-select-actions-workflows %} e adicione as ações necessárias{% ifversion actions-workflow-policy %} e os fluxos de trabalho reutilizáveis{% endif %} à lista.
   {% ifversion actions-workflow-policy %} ![Adicionar ações e fluxos de trabalho reutilizáveis à lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![Adicionar ações à lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![Adicionar ações à lista de permitidos](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## Aplicando uma política de artefato e registrando a retenção na sua empresa

{% data variables.product.prodname_actions %} pode armazenar artefatos e arquivos de registro. Para obter mais informações, confira "[Como baixar artefatos de fluxo de trabalho](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Aplicando uma política para bifurcar pull requests na sua empresa

Você pode aplicar políticas para controlar como {% data variables.product.prodname_actions %} comporta-se para {% data variables.product.product_location %} quando os integrantes da sua empresa{% ifversion ghec %} ou colaboradores externos{% endif %} executarem fluxos de trabalho a partir das bifurcações.

{% ifversion ghec %}

### Aplicando uma política de aprovação de pull requests dos colaboradores externos

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Aplicando uma política para bifurcar pull requests em repositórios privados

{% data reusables.actions.private-repository-forks-overview %}

Se uma política for habilitada para uma empresa, ela poderá ser desabilitada seletivamente em organizações individuais ou repositórios. Se uma política estiver desabilitada para uma empresa, as organizações individuais ou repositórios não poderão habilitá-la.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Aplicando uma política de permissões de fluxo de trabalho na sua empresa

{% data reusables.actions.workflow-permissions-intro %}

Você pode definir as permissões padrão para o `GITHUB_TOKEN` nas configurações para sua empresa, suas organizações ou seus repositórios. Se você escolher uma opção restrita como padrão nas configurações da empresa, isto impedirá que a configuração mais permissiva seja escolhida nas configurações da organização ou do repositório.

{% data reusables.actions.workflow-permissions-modifying %}

### Como configurar as permissões padrão do `GITHUB_TOKEN`

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} Por padrão, quando você cria uma empresa, `GITHUB_TOKEN` só tem acesso de leitura para o escopo `contents`.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Em "Permissões de fluxo de trabalho", escolha se deseja que o `GITHUB_TOKEN` tenha acesso de leitura e gravação em todos os escopos ou apenas acesso de leitura no escopo `contents`.

   ![Definir permissões do GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. Clique em **Salvar** para aplicar as configurações.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Como impedir que {% data variables.product.prodname_actions %} crie ou aprove solicitações de pull

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Por padrão, quando você cria uma empresa, os fluxos de trabalho não têm permissão para criar nem aprovar solicitações de pull.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Em "Permissões do fluxo de trabalho", use a configuração **Permitir que o GitHub Actions crie e aprove solicitações de pull** para configurar se `GITHUB_TOKEN` pode criar e aprovar solicitações de pull.

   ![Definir permissões do GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Clique em **Salvar** para aplicar as configurações.

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## Impor uma política de armazenamento em cache em sua empresa

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

No entanto, você pode definir uma política corporativa para personalizar o tamanho total do cache padrão para cada repositório, bem como o tamanho máximo total do cache permitido para um repositório. Por exemplo, pode ser interessante que o tamanho total do cache padrão de cada repositório seja de 5 GB, mas permita que os administradores de repositório configurem um tamanho total de cache de até 15 GB, se necessário.

Pessoas com acesso de administrador a um repositório podem definir um tamanho total de cache para o repositório limitado ao tamanho máximo de cache permitido pela configuração da política corporativa.

Atualmente, as configurações de política para o armazenamento em cache do {% data variables.product.prodname_actions %} só podem ser modificadas usando a API REST:

* Para exibir as configurações atuais da política corporativa, confira "[Obter a política de uso do cache do GitHub Actions de uma empresa](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)".
* Para alterar as configurações da política corporativa, confira "[Obter a política de uso do cache do GitHub Actions de uma empresa](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
