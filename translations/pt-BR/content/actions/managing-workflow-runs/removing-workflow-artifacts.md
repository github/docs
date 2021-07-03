---
title: Remover artefatos de fluxo de trabalho
intro: 'Você pode recuperar o armazenamento de {% data variables.product.prodname_actions %} utilizado, excluindo artefatos antes de expirarem em {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Excluir um artefato

{% warning %}

**Aviso:** Após a exclusão de um artefato, este não poderá ser restaurado.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.github-actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Em **Artefatos**, clique em
{% octicon "trash" aria-label="The trash icon" %} ao lado do artefato que você deseja remover.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![Menu suspenso para excluir o artefato](/assets/images/help/repository/actions-delete-artifact-updated.png)
    {% else %}
    ![Menu suspenso para excluir o artefato](/assets/images/help/repository/actions-delete-artifact.png)
    {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Definir o período de retenção para um artefato

Os períodos de retenção para artefatos e registros podem ser configurados no repositório, organização e no nível corporativo. Para obter mais informações, consulte "[Limites de uso, cobrança e administração](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".

Você também pode definir um período de retenção personalizado para artefatos individuais usando a ação `actions/upload-artefato` em um fluxo de trabalho. Para obter mais informações, consulte "[Armazenar dados de fluxo de trabalho como artefatos](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)".

### Localizar a data de expiração de um artefato

Você pode usar a API para confirmar a data em que um artefato está agendado para ser excluído. Para obter mais informações, consulte o valor `expires_at` valor retornado por "[Listar artefatos para um repositório](/rest/reference/actions#artifacts). "
{% endif %}
