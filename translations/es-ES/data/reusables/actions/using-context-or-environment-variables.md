---
ms.openlocfilehash: c8e09d66bc8f0f35ca319e3650c6913174e59067
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069406"
---
{% data variables.product.prodname_actions %} incluye una colección de variables denominadas _contextos_ y una colección de variables similar denominadas _variables de entorno predeterminadas_. Estas variables se pretenden utilizar en puntos diferentes del flujo de trabajo:

- **Variables de entorno predeterminadas:** estas variables solo existen en el ejecutor que ejecuta el trabajo. Para más información, vea "[Variables de entorno predeterminadas](/actions/reference/environment-variables#default-environment-variables)".
- **Contextos:** puede usar la mayoría de los contextos en cualquier punto del flujo de trabajo, incluido cuando las _variables de entorno predeterminadas_ no estén disponibles. Por ejemplo, puede usar contextos con expresiones para realizar un procesamiento inicial antes de que el trabajo se enrute a un ejecutor para su ejecución; esto le permite utilizar un contexto con la palabra clave condicional `if` para determinar si se debería ejecutar un paso. Una vez que el trabajo esté en ejecución, también puede recuperar variables de contexto para el ejecutor que ejecuta el trabajo, como `runner.os`. Para más información sobre dónde puede usar varios contextos dentro de un flujo de trabajo, vea "[Disponibilidad del contexto](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability)".

El siguiente ejemplo ilustra cómo estos tipos de variables de ambiente diferentes pueden utilizarse juntas en el job:

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

En este ejemplo, la instrucción `if` comprueba el contexto [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) para determinar el nombre de la rama actual; si el nombre es `refs/heads/main`, se ejecutan los pasos siguientes. {% data variables.product.prodname_actions %} procesa la comprobación `if` y el trabajo solo se envía al ejecutor si el resultado es `true`. Una vez que el trabajo se envía al ejecutor, el paso se ejecuta y hace referencia a la variable de entorno [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) del ejecutor.
