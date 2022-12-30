---
ms.openlocfilehash: a9f12214edcef8a107ad9c447fea7207cfdc48f4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184095"
---
Cuando un trabajo o flujo de trabajo concurrente se pone en cola, si otro trabajo o flujo de trabajo que utilicen el mismo grupo de simultaneidad en el repositorio se encuentra en curso, el trabajo o flujo de trabajo en cola se mostrará como `pending`. Cualquier job o flujo de trabajo pendientes anteriores en el grupo de concurrencia se cancelarán. Para cancelar también cualquier trabajo o flujo de trabajo actualmente en ejecución en el mismo grupo de simultaneidad, especifica `cancel-in-progress: true`.

### Ejemplos: Utilizando la concurrencia y el comportamiento predeterminado

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### Ejemplo: Utilizar la concurrencia para cancelar cualquier job o ejecución en curso

{% raw %}
```yaml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Ejemplo: Utilizar un valor para segunda opción

Si compilas el nombre de grupo con una propiedad que solo se defina para eventos específicos, puedes utilizar un valor de segunda opción. Por ejemplo, `github.head_ref` solo se define en eventos `pull_request`. Si tu flujo de trabajo responde a otros eventos además de los eventos `pull_request`, necesitarás proporcionar una segunda opción para evitar un error de sintaxis. El siguiente grupo de simultaneidad cancela los trabajos en curso o solo se ejecuta en eventos `pull_request`; si `github.head_ref` no está definido, el grupo de simultaneidad revertirá al identificador de ejecución, que se garantiza que es único y definido para la ejecución.

{% raw %}
```yaml
concurrency:
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Ejemplo: Cancelar únicamente los jobs o ejecuciones en curso para el flujo de trabajo actual

 Si tienes flujos de trabajo múltiples en el mismo repositorio, los nombres del grupo de concurrencia deben ser únicos en todos los flujos de trabajo para evitar que se cancelen jobs o ejecuciones en curso desde otros flujos de trabajo. De otra forma, cualquier job pendiente o previamente en curso se cancelará sin importar el flujo de trabajo.

Para cancelar solo las ejecuciones en curso del mismo flujo de trabajo, puedes usar la propiedad `github.workflow` para compilar el grupo de simultaneidad:

{% raw %}
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

