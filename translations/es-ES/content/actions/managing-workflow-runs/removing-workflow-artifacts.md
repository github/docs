---
title: Eliminar artefactos de flujo de trabajo
intro: 'Puedes reclamar el almacenamiento de {% data variables.product.prodname_actions %} que se haya utilizado si borras los artefactos antes de que venzan en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Eliminar los artefactos de un flujo de trabajo
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Borrar un artefacto

{% warning %}

**Advertencia:** Una vez que borres un artefacto, este no se puede restablecer.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Debajo de **Artefactos**, haz clic en {% octicon "trash" aria-label="The trash icon" %} junto al artefacto que quieras eliminar.

    ![Menú desplegable Delete artifact (Eliminar artefacto)](/assets/images/help/repository/actions-delete-artifact-updated.png)


## Configurar el periodo de retención para un artefacto

Los periodos de retención para los artefactos y las bitácoras pueden configurarse a nivel de repositorio, organización y empresa. Para obtener más información, consulta la sección {% ifversion fpt or ghec or ghes %}"[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".{% elsif ghae %}"[Administrar los ajustes de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)". "[Configurar el periodo de retención de las {% data variables.product.prodname_actions %} para los artefactos y bitácoras en tu organización](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)" o "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".{% endif %}

También puedes definir un periodo de retención personalizado para los artefactos individuales que utilizan la acción `actions/upload-artifact` en un flujo de trabajo. Para obtener más información, consulta la sección "[Almacenar datos del flujo de trabajo como artefactos](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)".

## Encontrar la fecha de vencimiento de un artefacto

Puedes utilizar la API para confirmar la fecha de programación para el borrado de un artefacto. Para obtener más información, consulta el valor de `expires_at` que devuelve la acción "[Listar artefactos para un repositorio](/rest/reference/actions#artifacts)".
