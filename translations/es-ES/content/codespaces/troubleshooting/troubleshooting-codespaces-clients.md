---
title: Solucionar problemas de los clientes de Codespaces
intro: Puedes utilizar {% data variables.product.prodname_codespaces %} en tu buscador o a través de {% data variables.product.prodname_vscode %}. Este artículo proporciona pasos de solución de problemas para los problemas comunes de los clientes.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145115041"
---
## Solución de problemas de {% data variables.product.prodname_vscode %}

Cuando conectas a una versión de escritorio de {% data variables.product.prodname_vscode %} a un codespace, notarás algunas cuantas diferencias en comparación con trabajar en un espacio de trabajo normal, pero la experiencia será bastante similar. 

Cuando abres un codespace en tu buscador utilizando {% data variables.product.prodname_vscode %} en la web, notarás más diferencias. Por ejemplo, algunas uniones de teclas serán diferentes o no estarán y algunas extensiones podrían comportarse de forma diferente. Para obtener un resumen, vea: "[Limitaciones conocidas y adaptaciones](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" en la documentación de {% data variables.product.prodname_vscode %}.

Puede comprobar si hay problemas conocidos y registrar nuevos problemas con la experiencia de {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders es el lanzamiento más frecuente de {% data variables.product.prodname_vscode %}. Tiene todas las características y correcciones de errores más recientes, pero también podría contener, ocasionalmente, problemas nuevos que podrían dar como resultado una compilación rota.

Si estás utilizando una compilación de Insiders y notas un comportamiento anormal, te recomendamos cambiar a la versión estable de {% data variables.product.prodname_vscode %} e intentarlo de nuevo.

En la versión de escritorio de {% data variables.product.prodname_vscode %} puedes cambiar a la versión estable si cierras la aplicación de {% data variables.product.prodname_vscode %} Insiders y abres la aplicación estable de {% data variables.product.prodname_vscode %} para luego volver a abrir tu codespace.

En la versión web de {% data variables.product.prodname_vscode %}, puede hacer clic en {% octicon "gear" aria-label="The manage icon" %} en la parte inferior izquierda del editor y seleccionar **Switch to Stable Version...** (Cambiar a versión estable). Si la versión web no se carga o el icono {% octicon "gear" aria-label="El icono de administración" %} no está disponible, puede forzar el cambio a {% data variables.product.prodname_vscode %} Estable si anexa `?vscodeChannel=stable` a la dirección URL del codespace y lo carga en esa dirección URL.

Si el problema aún no se soluciona en la versión estable de {% data variables.product.prodname_vscode %}, por favor, sigue las instrucciones de solución de problemas descritas anteriormente.

## Solución de problemas del buscador

Si tiene problemas al usar codespaces en un explorador que no está basado en Chromium, intente cambiar a otro basado en Chromium, o bien busque problemas conocidos con el explorador en el repositorio `microsoft/vscode`; para ello, busque problemas etiquetados con el nombre del explorador, como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) o [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si tiene problemas al usar codespaces en un explorador basado en Chromium, puede comprobar si experimenta otro problema conocido con {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
