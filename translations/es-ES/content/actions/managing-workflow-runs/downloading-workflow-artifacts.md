---
title: Descargar los artefactos del flujo de trabajo
intro: Puedes descargar artefactos archivados antes de que venzan automáticamente.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Descargar artefactos de flujo de trabajo
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% ifversion fpt or ghes > 2.22 or ghae %} Predeterminadamente, {% data variables.product.product_name %} almacena las bitácoras de compilación y los artefactos por 90 días, y puedes personalizar este periodo de retención dependiendo del tipo de repositorio. For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."{% endif %}
{% ifversion ghes = 2.22 %} Las {% data variables.product.product_name %} almacenan las bitácoras y los artefactos por 90 días.{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Debajo de **Artefactos**, da clic en aquél que quieras descargar.
    {% ifversion fpt or ghes > 3.0 or ghae %}
    ![Menú desplegable Download artifact (Descargar artefacto)](/assets/images/help/repository/artifact-drop-down-updated.png)
    {% else %}
    ![Menú desplegable Download artifact (Descargar artefacto)](/assets/images/help/repository/artifact-drop-down.png)
    {% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

El {% data variables.product.prodname_cli %} descargará cada artefacto en directorios separados con base en el nombre de dicho artefacto. Si se especifica solo un artefacto individual, este se extraerá en el directorio actual.

Para descargar todos los artefactos que genera una ejecución de flujo de trabajo, utiliza el subcomando `run download`. Reemplaza a `run-id` con la ID de la ejecución de la cual quieres descargar artefactos. Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas una ejecución reciente.

```shell
gh run download <em>run-id</em>
```

Para descargar un artefacto específico desde una ejecución, utiliza el subcomando `run download`. Reemplaza a `run-id` con la ID de la ejecución de la cual quieres descargar artefactos. Reemplaza a `artifact-name` con el nombre del artefacto que quieres descargar.

```shell
gh run download <em>run-id</em> -n <em>artifact-name</em>
```

Puedes especificar más de un artefacto.

```shell
gh run download <em>run-id</em> -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

Para descargar los artefactos específicos a lo largo de todas las ejecuciones en un repositorio, utiliza el subcomando `run download`.

```shell
gh run download -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

{% endcli %}
