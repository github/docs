---
ms.openlocfilehash: bca2838e65fedf0ec5d512a21891b594dc90c1f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147521534"
---
Use `jobs.<job_id>.runs-on` para definir el tipo de máquina en la que se ejecutará el trabajo. {% ifversion fpt or ghec %}La máquina puede ser un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, o bien un ejecutor autohospedado.{% endif %} Puede proporcionar `runs-on` como una cadena única o como una matriz de cadenas. Si especifica una matriz de cadenas, el flujo de trabajo se ejecutará en un ejecutor autohospedado cuyas etiquetas coinciden con todos los valores `runs-on` especificados, si están disponibles. Si quiere ejecutar el flujo de trabajo en varias máquinas, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


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
