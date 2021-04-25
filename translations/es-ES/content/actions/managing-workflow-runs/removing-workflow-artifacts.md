---
title: Eliminar artefactos de flujo de trabajo
intro: 'Puedes reclamar el almacenamiento de {% data variables.product.prodname_actions %} que se haya utilizado si borras los artefactos antes de que venzan en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Borrar un artefacto

{% warning %}

**Advertencia:** Una vez que eliminas un artefacto, no se puede restaurar.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.github-actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Debajo de **Artefactos**, da clic en
el {% octicon "trashcan" aria-label="The trashcan icon" %} junto al artefacto que quieras eliminar.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![Menú desplegable Delete artifact (Eliminar artefacto)](/assets/images/help/repository/actions-delete-artifact-updated.png)
    {% else %}
    ![Menú desplegable Delete artifact (Eliminar artefacto)](/assets/images/help/repository/actions-delete-artifact.png)
    {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Configurar el periodo de retención para un artefacto

Los periodos de retención para los artefactos y las bitácoras pueden configurarse a nivel de repositorio, organización y empresa. Para obtener más información, consulta la sección "[Límites de uso y administración](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".

También puedes definir un periodo de retención personalizado para los artefactos individuales que utilizan la acción `actions/upload-artifact` en un flujo de trabajo. Para obtener más información, consulta la sección "[Almacenar datos del flujo de trabajo como artefactos](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)".

### Encontrar la fecha de vencimiento de un artefacto

Puedes utilizar la API para confirmar la fecha de programación para el borrado de un artefacto. Para obtener más información, consulta el valor de `expires_at` que devuelve la acción "[Listar artefactos para un repositorio](/rest/reference/actions#artifacts)".
{% endif %}
