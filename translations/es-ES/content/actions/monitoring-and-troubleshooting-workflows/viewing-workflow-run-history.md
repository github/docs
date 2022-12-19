---
title: Visualizar el historial de ejecución del flujo de trabajo
intro: Puedes ver las bitácoras de cada ejecución de un flujo de trabajo. Las bitácoras incluyen el estado de cada job y de cada paso en un flujo de trabajo.
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: View workflow run history
ms.openlocfilehash: bfef1ccd9f15480000332aec3ced6dc326cb9af3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121217'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### Visualizar las ejecuciones de flujo de trabajo recientes

Para enumerar las ejecuciones de flujo de trabajo recientes, use el subcomando `run list`.

```shell
gh run list
```

Para especificar la cantidad máxima de ejecuciones se deben devolver, puede usar la marca `-L` o `--limit`. El valor predeterminado es `10`.

```shell
gh run list --limit 5
```

Para devolver solo ejecuciones del flujo de trabajo especificado, puede usar la marca `-w` o `--workflow`.  Reemplace `workflow` por el nombre del flujo de trabajo, el identificador de flujo de trabajo o el nombre de archivo de flujo de trabajo. Por ejemplo, `"Link Checker"`, `1234567` o `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

### Visualizar los detalles de una ejecución de flujo de trabajo específica

Para mostrar los detalles de una ejecución de flujo de trabajo específica, use el subcomando `run view`. Reemplace `run-id` por el id. de la ejecución que desea visualizar. Si no especifica ningún `run-id`, la {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elija una ejecución reciente.

```shell
gh run view <em>run-id</em>
```

Para incluir los pasos del trabajo en la salida, use la marca `-v` o `--verbose`.

```shell
gh run view <em>run-id</em> --verbose
```

Para ver los detalles de una ejecución específica, use la marca `-j` o `--job`.  Reemplace `job-id` por el id. del trabajo que desea visualizar.

```shell
gh run view --job <em>job-id</em>
```

Para ver el registro completo de un trabajo, use la marca `--log`.

```shell
gh run view --job <em>job-id</em> --log
```

Use la marca `--exit-status` para salir con un estado distinto de cero si se produjo un error en la ejecución. Por ejemplo:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
