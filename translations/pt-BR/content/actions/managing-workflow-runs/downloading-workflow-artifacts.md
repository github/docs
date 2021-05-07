---
title: Fazer o download de artefatos do fluxo de trabalho
intro: Você pode fazer o download de artefatos arquivados antes que expirem automaticamente.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} Por padrão, {% data variables.product.product_name %} armazena registros de criação por 90 dias e você pode personalizar este período de retenção, dependendo do tipo de repositório. Para obter mais informações, consulte "[Configurar o período de retenção para artefatos e registros do GitHub Actions no seu repositório](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".{% endif %}
{% if currentVersion == "enterprise-server@2.22" %} {% data variables.product.product_name %} armazena registros de criação completos e artefatos por 90 dias.{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Em **Artefatos**, clique no artefato que deseja baixar.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
    ![Menu suspenso do para fazer download do artefato](/assets/images/help/repository/artifact-drop-down-updated.png)
    {% else %}
    ![Menu suspenso do para fazer download do artefato](/assets/images/help/repository/artifact-drop-down.png)
    {% endif %}
