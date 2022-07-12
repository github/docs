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
shortTitle: Cobrança do fluxo de trabalho & limites
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a cobrança do {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Para obter mais informações, consulte "[Entendendo {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghes or ghec %}" e "[Sobre {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.actions.actions-billing %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% else %}
O uso do GitHub Actions é grátis para instâncias de {% data variables.product.prodname_ghe_server %} que usam executores auto-hospedados. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% endif %}


{% ifversion fpt or ghec %}

## Disponibilidade

{% data variables.product.prodname_actions %} está disponível em todos os produtos de {% data variables.product.prodname_dotcom %}, mas {% data variables.product.prodname_actions %} não está disponível para repositórios privados pertencentes a contas usando planos legados por repositório. {% data reusables.gated-features.more-info %}

{% endif %}

## Limites de uso

{% ifversion fpt or ghec %}
Existem alguns limites sobre o uso de {% data variables.product.prodname_actions %} ao usar executores hospedados em {% data variables.product.prodname_dotcom %}. Estes limites estão sujeitos a mudanças.

{% note %}

**Nota:** Para executores auto-hospedados, aplicam-se diferentes limites de uso. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."

{% endnote %}

- **Tempo de execução de tarefas ** - Cada trabalho em um fluxo de trabalho pode ser executado por até 6 horas de tempo de execução. Se um trabalho atingir esse limite, o trabalho será terminado e não será completado.
{% data reusables.actions.usage-workflow-run-time %}
{% data reusables.actions.usage-api-requests %}
- **Tarefas correntes** - O número de trabalhos simultâneos que você pode executar em sua conta depende do seu plano GitHub, conforme indicado na tabela a seguir. Se excedido, quaisquer tarefas adicionais serão colocadas na fila.

  | Plano GitHub | Total de tarefas simultâneas | Máximo de tarefas macOS simultâneas |
  | ------------ | ---------------------------- | ----------------------------------- |
  | Grátis       | 20                           | 5                                   |
  | Pro          | 40                           | 5                                   |
  | Equipe       | 60                           | 5                                   |
  | Enterprise   | 180                          | 50                                  |

  {% note %}

  **Observação:** Se necessário, os clientes em planos corporativos podem solicitar um limite maior para trabalhos simultâneos. Para mais informações, entre em contato com {% data variables.contact.contact_ent_support %} ou com o seu representante de vendas.

  {% endnote %}
- **Matriz de vagas** - {% data reusables.actions.usage-matrix-limits %}
{% data reusables.actions.usage-workflow-queue-limits %}

{% else %}
Os limites de uso aplicam-se a executores auto-hospedados. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% ifversion fpt or ghec %}
## Política de uso

Além dos limites de uso, você deve garantir que você usa {% data variables.product.prodname_actions %} nos [Termos de serviço](/free-pro-team@latest/github/site-policy/github-terms-of-service/) do GitHub. Para obter mais informações sobre termos específicos de {% data variables.product.prodname_actions %}, consulte os [Termos adicionais do produto do GitHub](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Cobrança para fluxos de trabalho reutilizáveis

{% data reusables.actions.reusable-workflows-ghes-beta %}

Se você reutilizar um fluxo de trabalho, a cobrança será sempre associada ao fluxo de trabalho de chamadas. A atribuição de executores hospedados em {% data variables.product.prodname_dotcom %}é sempre avaliada usando apenas o contexto do invocador. O invocador não pode usar os executores hospedados em {% data variables.product.prodname_dotcom %} do repositório invocado.

Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

## Artefato e política de retenção de registro

É possível configurar o artefato e o período de retenção de registro para o seu repositório, organização ou conta corporativa.

{% data reusables.actions.about-artifact-log-retention %}

Para obter mais informações, consulte:

- "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configurar o período de retenção para {% data variables.product.prodname_actions %} para artefatos e registros na sua organização](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Desativar ou limitar {% data variables.product.prodname_actions %} para o seu repositório ou organização

{% data reusables.actions.disabling-github-actions %}

Para obter mais informações, consulte:
- "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Desabilitar e habilitar fluxos de trabalho

Você pode habilitar e desabilitar os fluxos de trabalho individuais no seu repositório em {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obter mais informações, consulte "[Desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
