---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145092082"
---
Use `jobs.<job_id>.environment` para definir el entorno al que hace referencia el trabajo. Todas las reglas de protección del ambiente deben pasar antes de que un job que referencie dicho ambiente se envie a un ejecutor. Para más información, vea "[Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment)".

Puede proporcionar el entorno como solo el entorno `name`, o bien como un objeto de entorno con `name` y `url`. La dirección URL se asigna a `environment_url` en la API de implementaciones. Para más información sobre la API de implementaciones, vea "[Implementaciones](/rest/reference/repos#deployments)".

### Ejemplo: Utilizar un solo nombre de ambiente
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### Ejemplo: Uso de un nombre y una URL de entorno

```yaml
environment:
  name: production_environment
  url: https://github.com
```

La URL puede ser una expresión y puede utilizar cualquier contexto con excepción del [contexto `secrets`](/actions/learn-github-actions/contexts#contexts). Para más información sobre las expresiones, vea "[Expresiones](/actions/learn-github-actions/expressions)".

### Ejemplo: Uso de la salida como dirección URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
