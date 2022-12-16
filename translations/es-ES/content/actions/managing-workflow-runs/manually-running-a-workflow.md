---
title: Ejecutar un flujo de trabajo manualmente
intro: 'Cuando se configura un flujo de trabajo para ejecutarse en el evento `workflow_dispatch`, puedes ejecutar el flujo de trabajo mediante la pestaña Acciones de {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %}, o la API REST.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: 22717c31a6bc2599f066b0e870f0aa652c18cc6f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117178'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Configurar un flujo de trabajo para que se ejecute manualmente

Para ejecutar manualmente un flujo de trabajo, el flujo de trabajo debe configurarse para que se ejecute en el evento `workflow_dispatch`. Para desencadenar el evento `workflow_dispatch`, el flujo de trabajo debe estar en la rama predeterminada. Para obtener más información sobre cómo configurar el evento `workflow_dispatch`, consulta "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

{% data reusables.repositories.permissions-statement-write %}

## Ejecutar un flujo de trabajo

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic ene l flujo de trabajo que quieras ejecutar.
![flujo de trabajo de selección de acciones](/assets/images/actions-select-workflow.png)
1. Encima de la lista de ejecuciones de flujo de trabajo, selecciona **Ejecutar flujo de trabajo**.
![envío del flujo de trabajo de las acciones](/assets/images/actions-workflow-dispatch.png)
1. Usa la lista desplegable **Rama** para seleccionar la rama del flujo de trabajo y escribe los parámetros de entrada. Haz clic en **Ejecutar flujo de trabajo**.
![flujo de trabajo de la ejecución manual de las acciones](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para ejecutar un flujo de trabajo, usa el subcomando `workflow run`. Reemplaza el parámetro `workflow` por el nombre, el id. o el nombre de archivo del flujo de trabajo que quieres ejecutar. Por ejemplo, `"Link Checker"`, `1234567` o `"link-check-test.yml"`. Si no especificas un flujo de trabajo, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas un flujo de trabajo.

```shell
gh workflow run <em>workflow</em>
```

Si tu flujo de trabajo acepta entradas, {% data variables.product.prodname_cli %} te pedirá que las ingreses. Como alternativa, puedes usar `-f` o `-F` para agregar una entrada en formato `key=value`. Usa `-F` para leer desde un archivo.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

También puedes pasar las entradas como JSON utilizando una entrada estándar.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Para ejecutar un flujo de trabajo en una rama diferente de la rama predeterminada del repositorio, usa la marca `--ref`.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

Para ver el progreso de la ejecución del flujo de trabajo, usa el subcomando `run watch` y selecciona la ejecución en la lista interactiva.

```shell
gh run watch
```

{% endcli %}

## Ejecutar un flujo de trabajo utilizando la API de REST

Cuando se usa la API de REST, se configura `inputs` y `ref` como parámetros del cuerpo de la solicitud. Si omites las entradas, se utilizarán los valores predeterminados que se hayan definido en el flujo de trabajo.

{% note %}

**Nota**: Puedes definir hasta 10 `inputs` para un evento `workflow_dispatch`.

{% endnote %}

Para obtener más información sobre el uso de la API de REST, consulta "[Creación de un evento de envío de flujo de trabajo](/rest/reference/actions/#create-a-workflow-dispatch-event)".
