---
title: Solucionar problemas de los clientes de Codespaces
intro: 'Puedes utilizar {% data variables.product.prodname_codespaces %} en tu buscador o a través de {% data variables.product.prodname_vscode %}. Este artículo proporciona pasos de solución de problemas para los problemas comunes de los clientes.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Clientes de codespaces
---

## Solución de problemas de {% data variables.product.prodname_vscode %}

Cuando conectas a una versión de escritorio de {% data variables.product.prodname_vscode %} a un codespace, notarás algunas cuantas diferencias en comparación con trabajar en un espacio de trabajo normal, pero la experiencia será bastante similar.

Cuando abres un codespace en tu buscador utilizando {% data variables.product.prodname_vscode %} en la web, notarás más diferencias. Por ejemplo, algunas uniones de teclas serán diferentes o no estarán y algunas extensiones podrían comportarse de forma diferente. Para obtener un resumen, consulta la sección "[Adaptaciones y limitaciones conocidas](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" en los documentos de {% data variables.product.prodname_vscode %}.

Puedes revisar si hay problemas conocidos y registrar problemas nuevos con la experiencia de {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders es el lanzamiento más frecuente de {% data variables.product.prodname_vscode %}. Tiene todas las características y correcciones de errores más recientes, pero también podría contener, ocasionalmente, problemas nuevos que podrían dar como resultado una compilación rota.

Si estás utilizando una compilación de Insiders y notas un comportamiento anormal, te recomendamos cambiar a la versión estable de {% data variables.product.prodname_vscode %} e intentarlo de nuevo.

En la versión de escritorio de {% data variables.product.prodname_vscode %} puedes cambiar a la versión estable si cierras la aplicación de {% data variables.product.prodname_vscode %} Insiders y abres la aplicación estable de {% data variables.product.prodname_vscode %} para luego volver a abrir tu codespace.

En la versión web de {% data variables.product.prodname_vscode %}, puedes hacer clic en {% octicon "gear" aria-label="The manage icon" %} en la parte inferior izquierda del editor y seleccionar **Cambiar a la versión estable...**. Si la versión web no carga o si el icono de {% octicon "gear" aria-label="The manage icon" %} no está disponible, puedes forzar el cambio a la versión estable de {% data variables.product.prodname_vscode %} si agregas `?vscodeChannel=stable` a la URL de tu codespace y lo cargas en ella.

Si el problema aún no se soluciona en la versión estable de {% data variables.product.prodname_vscode %}, por favor, sigue las instrucciones de solución de problemas descritas anteriormente.

## Solución de problemas del buscador

Si encuentras problemas para utilizar los codespaces en un buscador que no esté basado en Chromium, intenta cambiar a uno que sí lo esté o revisa si hay problemas conocidos con tu buscador en el repositorio de `microsoft/vscode` buscando aquellos etiquetados con el nombre de dicho buscador, tal como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) o [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si encuentras problemas al utilizar codespaces en un buscador basado en Chromium, puedes verificar si estás experimentando algún otro problema conocido de {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
