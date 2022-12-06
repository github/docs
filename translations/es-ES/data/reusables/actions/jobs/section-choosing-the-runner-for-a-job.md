---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120938"
---
Use `jobs.<job_id>.runs-on` para definir el tipo de máquina en la que se ejecutará el trabajo. 

{% ifversion fpt or ghec %}: la máquina de destino puede ser un [ejecutor hospedado por {% data variables.product.prodname_dotcom %}](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) o un [ejecutor autohospedado](#choosing-self-hosted-runners). {% else %}
- La máquina de destino puede ser un [ejecutor autohospedado](#choosing-self-hosted-runners). {% endif %} {% ifversion target-runner-groups %}: puede dirigirse a los ejecutores en función de las etiquetas que se les han asignado, su pertenencia a grupos o una combinación de ambos. {% else %}
- Puedes dirigirte a los ejecutores según las etiquetas que se les han asignado. {% endif %}
- Puedes proporcionar `runs-on` como una sola cadena o como una matriz de cadenas. 
- Si especificas una matriz de cadenas, el flujo de trabajo se ejecutará en cualquier ejecutor que coincida con todos los valores `runs-on` especificados. 
- Si quiere ejecutar el flujo de trabajo en varias máquinas, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### Selección de ejecutores hospedados en {% data variables.product.prodname_dotcom %}

Si usas un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, cada trabajo se ejecuta en una nueva instancia de una imagen de ejecutor especificada por `runs-on`.

Los tipos de ejecutores alojados {% data variables.product.prodname_dotcom %} disponibles son:

{% data reusables.actions.supported-github-runners %}

#### Ejemplo: Especificación de un sistema operativo

```yaml
runs-on: ubuntu-latest
```

Para obtener más información, consulte "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Selección de ejecutores autohospedados
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Ejemplo: Uso de etiquetas para la selección del ejecutor

```yaml
runs-on: [self-hosted, linux]
```

Para más información, vea "[Acerca de los ejecutores autohospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" y "[Uso de ejecutores autohospedados en un flujo de trabajo](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".

{% ifversion target-runner-groups %}

### Elección de ejecutores en un grupo

Puedes usar `runs-on` para dirigirte a grupos de ejecutores, de modo que el trabajo se ejecute en cualquier ejecutor que sea miembro de ese grupo. Para un control más granular, también puedes combinar grupos de ejecutores con etiquetas.

Los grupos de ejecutores solo pueden tener [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners) o [ejecutores autohospedados](/actions/hosting-your-own-runners) como miembros.

#### Ejemplo: Uso de grupos para controlar dónde se ejecutan los trabajos

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Ejemplo: Combinación de grupos y etiquetas

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}