---
title: Visualizar el historial de ejecución del flujo de trabajo
intro: Puedes ver las bitácoras de cada ejecución de un flujo de trabajo. Las bitácoras incluyen el estado de cada job y de cada paso en un flujo de trabajo.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Visualizar el historial de las ejecuciones de flujo de trabajo en {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

### Visualizar el historial de las ejecuciones de flujo de trabajo con {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

#### Visualizar las ejecuciones de flujo de trabajo recientes

Para listar las ejecuciones de flujo de trabajo recientes, utiliza el subcomando `run list`.

```shell
gh run list
```

Para especificar la cantidad máxima de ejecuciones a devolver, puedes utilizar el marcador `-L` o `--limit`. Por defecto es `10`.

```shell
gh run list --limit 5
```

Para que se devuelvan únicamente las ejecuciones del flujo de trabajo especificado, puedes utilizar el marcador `-w` o `--workflow`.  Reemplaza a `workflow` ya sea con el nombre, ID o nombre de archivo del flujo de trabajo. Por ejemplo `"Link Checker"`, `1234567`, o `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

#### Visualizar los detalles de una ejecución de flujo de trabajo específica

Para mostrar los detalles de una ejecución de flujo de trabajo específica, utiliza el subcomando `run view`. Reemplaza `run-id` con la ID de la ejecución que quieres ver. Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas una ejecución reciente.

```shell
gh run view <em>run-id</em>
```

Par aincluir los pasos del job en la salida, utiliza el marcador `-v` o `--verbose`.

```shell
gh run view <em>run-id</em> --verbose
```

Para ver los detalles de un job específico en la ejecución, utiliza el marcador `-j` o `--job`.  Reemplaza a `job-id` con la ID del job que quieres ver.

```shell
gh run view --job <em>job-id</em>
```

Para ver la bitácora completa de un job, utiliza el marcador `--log`.

```shell
gh run view --job <em>job-id</em> --log
```

Utiliza el marcador `--exit-status` para salir con un estado diferente a cero si la ejecución falló. Por ejemplo:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```
