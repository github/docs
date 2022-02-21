---
title: 'Límites de uso, facturación y administración'
intro: 'Hay límites de uso para los flujos de trabajo de {% data variables.product.prodname_actions %}. Los cargos de uso aplican a los repositorios que salen de la cantidad de minutos y almacenamiento gratuitos de un repositorio.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Límites & facturación de los flujos de trabajo
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de la facturación para {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Para obtener más información, consulta las secciones "[Entender las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}".{% elsif ghes or ghec %}" y "[Acerca de {% data variables.product.prodname_actions %} para las empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.github-actions.actions-billing %} Para obtener más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %} instances that use self-hosted runners. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% endif %}


{% ifversion fpt or ghec %}

## Disponibilidad

{% data variables.product.prodname_actions %} está disponible en todos los productos de {% data variables.product.prodname_dotcom %}, pero {% data variables.product.prodname_actions %} no está disponible para los repositorios privados que pertenezcan a cuentas que utilicen planes tradicionales por repositorio. {% data reusables.gated-features.more-info %}

{% endif %}

## Límites de uso

{% ifversion fpt or ghec %}
Hay algunos límites de uso de {% data variables.product.prodname_actions %} cuando se utilizan ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Estos límites están sujetos a cambios.

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
{% data reusables.github-actions.usage-workflow-queue-limits %}

{% else %}
Los límites de uso aplican a los ejecutores auto-hospedados. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% ifversion fpt or ghec %}
## Política de uso

Además de los límites de uso, debes asegurarte de usar las {% data variables.product.prodname_actions %} dentro de los [Términos de servicio de GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/). Para obtener más información sobre los términos específicos de las {% data variables.product.prodname_actions %}, consulta los [Términos adicionales de producto de GitHub](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Facturación para los flujos de trabajo reutilizables

{% data reusables.actions.reusable-workflows-ghes-beta %}

If you reuse a workflow, billing is always associated with the caller workflow. Assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. The caller cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository.

Para obtener más información, consulta la sección "[Reutilizar los flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

## Polìtica de retenciòn de artefactos y bitàcoras

You can configure the artifact and log retention period for your repository, organization, or enterprise account.

{% data reusables.actions.about-artifact-log-retention %}

Para obtener más información, consulta:

- "[Administrar los ajustes de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configurar el periodo de retención de {% data variables.product.prodname_actions %} para los artefactos y bitácoras en tu organización](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Requerir políticas para la {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu repositorio u organización

{% data reusables.github-actions.disabling-github-actions %}

Para obtener más información, consulta:
- "[Administrar los ajustes de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[Requerir políticas para la {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Inhabilitar y habilitar flujos de trabajo

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obtener más información, consulta la sección "[Inhabilitar y habilitar un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
