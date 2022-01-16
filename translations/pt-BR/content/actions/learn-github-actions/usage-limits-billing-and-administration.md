---
title: 'Limites de uso, cobrança e administração'
intro: 'Existem limites de uso para fluxos de trabalho de {% data variables.product.prodname_actions %}. As taxas de uso são aplicadas a repositórios que vão além da quantidade de minutos grátis e armazenamento de um repositório.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Billing
shortTitle: Cobrança do fluxo de trabalho & limites
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a cobrança do {% data variables.product.prodname_actions %}

{% ifversion fpt %}
{% data reusables.github-actions.actions-billing %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% else %}
O uso do GitHub Actions é gratuito para {% data variables.product.prodname_ghe_server %} que usam executores auto-hospedados.
{% endif %}

## Limites de uso

{% ifversion fpt %}
Existem alguns limites sobre o uso de {% data variables.product.prodname_actions %} ao usar executores hospedados em {% data variables.product.prodname_dotcom %}. Estes limites estão sujeitos a mudanças.

{% note %}

**Nota:** Para executores auto-hospedados, aplicam-se diferentes limites de uso. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."

{% endnote %}

- **Tempo de execução de tarefas ** - Cada trabalho em um fluxo de trabalho pode ser executado por até 6 horas de tempo de execução. Se um trabalho atingir esse limite, o trabalho será terminado e não será completado.
{% data reusables.github-actions.usage-workflow-run-time %}
{% data reusables.github-actions.usage-api-requests %}
- **Tarefas correntes** - O número de trabalhos simultâneos que você pode executar em sua conta depende do seu plano GitHub, conforme indicado na tabela a seguir. Se excedido, quaisquer tarefas adicionais serão colocadas na fila.

  | Plano GitHub | Total de tarefas simultâneas | Máximo de tarefas macOS simultâneas |
  | ------------ | ---------------------------- | ----------------------------------- |
  | Grátis       | 20                           | 5                                   |
  | Pro          | 40                           | 5                                   |
  | Equipe       | 60                           | 5                                   |
  | Enterprise   | 180                          | 50                                  |
- **Matriz de vagas** - {% data reusables.github-actions.usage-matrix-limits %}
{% data reusables.github-actions.usage-workflow-queue-limits %}

{% else %}
Os limites de uso aplicam-se a executores auto-hospedados. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% ifversion fpt %}
## Política de uso

Além dos limites de uso, você deve garantir que você usa {% data variables.product.prodname_actions %} nos [Termos de serviço](/articles/github-terms-of-service/) do GitHub. Para obter mais informações sobre termos específicos de {% data variables.product.prodname_actions %}, consulte os [Termos adicionais do produto do GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
## Cobrança para fluxos de trabalho reutilizáveis

Se você reutilizar um fluxo de trabalho, a cobrança será sempre associada ao fluxo de trabalho de chamadas. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## Artefato e política de retenção de registro

É possível configurar o artefato e o período de retenção de registro para o seu repositório, organização ou conta corporativa.

{% data reusables.actions.about-artifact-log-retention %}

Para obter mais informações, consulte:

- "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configurar o período de retenção para {% data variables.product.prodname_actions %} para artefatos e registros na sua organização](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Configurar o período de retenção para {% data variables.product.prodname_actions %} para artefatos e registros na sua empresa](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)"
{% endif %}

## Desativar ou limitar {% data variables.product.prodname_actions %} para o seu repositório ou organização

{% data reusables.github-actions.disabling-github-actions %}

Para obter mais informações, consulte:
- "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% ifversion fpt %}
- "[Aplicar as políticas de {% data variables.product.prodname_actions %} na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)" para {% data variables.product.prodname_ghe_cloud %}{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## Desabilitar e habilitar fluxos de trabalho

Você pode habilitar e desabilitar os fluxos de trabalho individuais no seu repositório em {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obter mais informações, consulte "[Desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
{% endif %}
