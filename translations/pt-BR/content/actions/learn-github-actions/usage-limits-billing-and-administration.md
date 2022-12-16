---
title: 'Limites de uso, cobrança e administração'
intro: 'Existem limites de uso para fluxos de trabalho de {% data variables.product.prodname_actions %}. As taxas de uso são aplicadas a repositórios que vão além da quantidade de minutos grátis e armazenamento de um repositório.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191851'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a cobrança do {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Para obter mais informações, confira "[Noções básicas sobre o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}".{% elsif ghes or ghec %}" e "[Sobre o {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% else %} O uso do GitHub Actions é gratuito para instâncias do {% data variables.product.prodname_ghe_server %} que usam executores auto-hospedados. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".
{% endif %}


{% ifversion fpt or ghec %}

## Disponibilidade

{% data variables.product.prodname_actions %} está disponível em todos os produtos de {% data variables.product.prodname_dotcom %}, mas {% data variables.product.prodname_actions %} não está disponível para repositórios privados pertencentes a contas usando planos legados por repositório. {% data reusables.gated-features.more-info %}

{% endif %}

## Limites de uso

{% ifversion fpt or ghec %} Há alguns limites no uso do {% data variables.product.prodname_actions %} ao usar os executores hospedados no {% data variables.product.prodname_dotcom %}. Estes limites estão sujeitos a mudanças.

{% note %}

**Observação:** para os executores auto-hospedados, diferentes limites de uso se aplicam. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)".

{% endnote %}

- **Tempo de execução do trabalho** – Cada trabalho em um fluxo de trabalho pode ter um tempo de execução de até seis horas. Se um trabalho atingir esse limite, o trabalho será terminado e não será completado.
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **Trabalhos simultâneos** – O número de trabalhos simultâneos que você pode executar na sua conta depende do seu plano do GitHub e do tipo de executor usado. Se excedido, quaisquer tarefas adicionais serão colocadas na fila.

  **Executores padrão hospedados em {% data variables.product.prodname_dotcom %}**

  | Plano GitHub | Total de tarefas simultâneas | Máximo de tarefas macOS simultâneas |
  |---|---|---|
  | Gratuita | 20 | 5 |
  | Pro | 40 | 5 |
  | Equipe | 60 | 5 |
  | Enterprise | 180 | 50 |

  **{% data variables.actions.hosted_runner %}s hospedados em {% data variables.product.prodname_dotcom %}**

  | Plano GitHub | Total de tarefas simultâneas | Máximo de tarefas macOS simultâneas |
  |---|---|---|
  | Tudo | 500 | n/a |

  {% note %}

  **Nota:** Se necessário, os clientes em planos corporativos podem solicitar um limite mais alto para trabalhos simultâneos. Para obter mais informações, entre em contato com {% data variables.contact.contact_ent_support %} ou seu representante de vendas.

  {% endnote %}
  
- **Matriz de trabalho** – {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} Os limites de uso se aplicam aos executores auto-hospedados. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)".
{% endif %}

{% ifversion fpt or ghec %}
## Política de uso

Além dos limites de uso, você precisa garantir o uso do {% data variables.product.prodname_actions %} de acordo com os [Termos de Serviço do GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/). Para obter mais informações sobre termos específicos do {% data variables.product.prodname_actions %}, confira os [Termos de Produtos Adicionais do GitHub](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Cobrança para fluxos de trabalho reutilizáveis

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Se você reutilizar um fluxo de trabalho, a cobrança será sempre associada ao fluxo de trabalho de chamadas. A atribuição de executores hospedados em {% data variables.product.prodname_dotcom %}é sempre avaliada usando apenas o contexto do invocador. O invocador não pode usar os executores hospedados em {% data variables.product.prodname_dotcom %} do repositório invocado. 

Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

## Política de retenção de log e artefato

É possível configurar o artefato e o período de retenção de registro para o seu repositório, organização ou conta corporativa.

{% data reusables.actions.about-artifact-log-retention %}

Para obter mais informações, consulte:

- "[Como gerenciar configurações do {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Como configurar o período de retenção do {% data variables.product.prodname_actions %} para artefatos e logs na sua organização](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Como impor políticas para o {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Desabilitar ou limitar {% data variables.product.prodname_actions %} para o seu repositório ou organização

{% data reusables.actions.disabling-github-actions %}

Para obter mais informações, consulte:
- "[Como gerenciar configurações do {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Como desabilitar ou limitar o {% data variables.product.prodname_actions %} para sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[Como impor políticas para o {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Desabilitar e habilitar fluxos de trabalho

Você pode habilitar e desabilitar os fluxos de trabalho individuais no seu repositório em {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obter mais informações, confira "[Como desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
