---
title: Eliminar execução de um fluxo de trabalho
intro: 'Você pode excluir uma execução do fluxo de trabalho que foi concluída ou que tem mais de duas semanas.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Para excluir a execução de um fluxo de trabalho, use o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir execução de fluxo de trabalho**.

    ![Eliminar execução de um fluxo de trabalho](/assets/images/help/settings/workflow-delete-run.png)
2. Revise a solicitação de confirmação e clique em **Sim, excluir permanentemente esta execução do fluxo de trabalho**.

    ![Excluir uma confirmação de execução de fluxo de trabalho](/assets/images/help/settings/workflow-delete-run-confirmation.png)
