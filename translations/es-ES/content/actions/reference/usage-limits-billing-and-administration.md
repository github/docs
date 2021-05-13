---
title: 'Límites de uso, facturación y administración'
intro: 'Hay límites de uso para los flujos de trabajo de {% data variables.product.prodname_actions %}. Los cargos de uso aplican a los repositorios que salen de la cantidad de minutos y almacenamiento gratuitos de un repositorio.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Billing
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca de la facturación para {% data variables.product.prodname_actions %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} Para obtener más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".
{% else %}
El uso de GitHub Actions es gratuito para
las {% data variables.product.prodname_ghe_server %} que utilicen ejecutores auto-hospedados.
{% endif %}

### Límites de uso

{% if currentVersion == "free-pro-team@latest" %}
Hay algunos límites para
el uso de {% data variables.product.prodname_actions %} cuando se utilizan ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Estos límites están sujetos a cambios.

{% note %}

**Nota:** Para los ejecutores auto-hospedados, pueden aplicarse límites de uso distintos. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."

{% endnote %}

- **Tiempo de ejecución de jobs** - Cada job en un flujo de trabajo puede ejecutarse hasta por 6 horas en tiempo de ejecución. Si un job llega a este límite, éste se terminará y fallará en completarse.
{% data reusables.github-actions.usage-workflow-run-time %}
{% data reusables.github-actions.usage-api-requests %}
- **Jobs simultáneos** - La cantidad de jobs que puedes ejecutar simultáneamente en tu cuenta depende de tu plan de GitHub, como se indica en la siguiente tabla. Si eso se excede, cualquier job adicional se pondrá en cola de espera.

  | Plan de GitHub | Jobs simultáneos totales | Jobs simultáneos de macOS máximos |
  | -------------- | ------------------------ | --------------------------------- |
  | Gratis         | 20                       | 5                                 |
  | Pro            | 40                       | 5                                 |
  | Team           | 60                       | 5                                 |
  | Empresa        | 180                      | 50                                |
- **Matiz de jobs** - {% data reusables.github-actions.usage-matrix-limits %}
{% else %}
Los límites de uso aplican a los ejecutores auto-hospedados. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Política de uso
Adicionalmente a los límites de uso, debes garantizar que utilizas

{% data variables.product.prodname_actions %} de acuerdo con las [Condiciones de servicio de Github](/articles/github-terms-of-service/). Para obtener más información sobre los términos específicos de las {% data variables.product.prodname_actions %}, consulta los [Términos adicionales de producto de GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Polìtica de retenciòn de artefactos y bitàcoras

Puedes configurar el periodo de retenciòn de artefactos y bitàcoras para tu repositorio, organizaciòn o cuenta empresarial.

{% data reusables.actions.about-artifact-log-retention %}

Para obtener más información, consulta:

- [Configurar el periodo de retenciòn de las {% data variables.product.prodname_actions %} para los artefactos y bitàcoras en tu repositorio](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Configurar el periodo de retenciòn de las {% data variables.product.prodname_actions %} para los artefactos y bitàcoras en tu organizaciòn](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Configurar el periodo de retenciòn de las {% data variables.product.prodname_actions %} para los artefactos y bitàcoras en tu empresa](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu repositorio u organización

{% data reusables.github-actions.disabling-github-actions %}

Para obtener más información, consulta:
- "[Inhabilitar o limitar {% data variables.product.prodname_actions %} para un repositorio](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[Requerir políticas de {% data variables.product.prodname_actions %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)" para {% data variables.product.prodname_ghe_cloud %}{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Inhabilitar y habilitar flujos de trabajo

Puedes habilitar e inhabilitar flujos de trabajo independientes en tu repositorio en {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obtener más información, consulta la sección "[Inhabilitar y habilitar un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
{% endif %}
