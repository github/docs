---
title: 'Limites de uso, cobrança e administração'
intro: 'Existem limites de uso para fluxos de trabalho de {% data variables.product.prodname_actions %}. As taxas de uso são aplicadas a repositórios que vão além da quantidade de minutos grátis e armazenamento de um repositório.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre a cobrança do {% data variables.product.prodname_actions %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".
{% else %}
O uso do GitHub Actions é grátis para
{% data variables.product.prodname_ghe_server %} que usam executores auto-hospedados.
{% endif %}

### Limites de uso

{% if currentVersion == "free-pro-team@latest" %}
Existem alguns limites em
uso de {% data variables.product.prodname_actions %} ao usar executores hospedados em {% data variables.product.prodname_dotcom %}. Estes limites estão sujeitos a mudanças.

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
{% else %}
Os limites de uso aplicam-se a executores auto-hospedados. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Política de uso
Além dos limites de uso, você deve garantir que você usa

{% data variables.product.prodname_actions %} dentro dos [Termos de Serviço do GitHub](/articles/github-terms-of-service/). Para obter mais informações sobre termos específicos de {% data variables.product.prodname_actions %}, consulte os [Termos adicionais do produto do GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Artefato e política de retenção de registro

É possível configurar o artefato e o período de retenção de registro para o seu repositório, organização ou conta corporativa.

{% data reusables.actions.about-artifact-log-retention %}

Para obter mais informações, consulte:

- [Configurar o período de retenção para {% data variables.product.prodname_actions %} para artefatos e registros no seu repositório](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Configurar o período de retenção para {% data variables.product.prodname_actions %} para artefatos e registros na sua organização](/github/setting-up-and-managing-organizations-and-teams/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Configurar o período de retenção para {% data variables.product.prodname_actions %} para artefatos e registros na sua empresa](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### Desabilitar ou limitar {% data variables.product.prodname_actions %} para o seu repositório ou organização

{% data reusables.github-actions.disabling-github-actions %}

Para obter mais informações, consulte:
- "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para um repositório](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para a sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[Aplicar as políticas de {% data variables.product.prodname_actions %} na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)" para {% data variables.product.prodname_ghe_cloud %}{% endif %}

### Desabilitar e habilitar fluxos de trabalho

Você pode habilitar e desabilitar os fluxos de trabalho individuais no seu repositório em {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obter mais informações, consulte "[Desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
