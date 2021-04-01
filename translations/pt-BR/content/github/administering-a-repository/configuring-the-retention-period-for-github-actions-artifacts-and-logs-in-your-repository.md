---
title: Configurar o período de retenção para artefatos e registros do GitHub Actions no seu repositório
intro: 'Você pode configurar o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} no seu repositório.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - repositories
---

{% data reusables.actions.about-artifact-log-retention %}

Você também pode definir um período de retenção personalizado para um artefato específico criado por um fluxo de trabalho. Para obter mais informações, consulte "[Definir o período de retenção para um artefato](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Definir o período de retenção para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
