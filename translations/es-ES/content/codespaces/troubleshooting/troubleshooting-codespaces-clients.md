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

{% data variables.product.prodname_vscode %} Insiders is the most frequent release of {% data variables.product.prodname_vscode %}. It has all the latest features and bug fixes, but may also occasionally contain new issues that result in a broken build.

If you are using an Insiders build and notice broken behavior, we recommend switching to {% data variables.product.prodname_vscode %} Stable and trying again.

On the desktop version of {% data variables.product.prodname_vscode %}, you can switch to Stable by closing the {% data variables.product.prodname_vscode %} Insiders application, opening the {% data variables.product.prodname_vscode %} Stable application, and re-opening your codespace.

On the web version of {% data variables.product.prodname_vscode %}, you can click {% octicon "gear" aria-label="The manage icon" %} in the bottom left of the editor and select **Switch to Stable Version...**. If the web version doesn't load or the {% octicon "gear" aria-label="The manage icon" %} icon isn't available, you can force switching to {% data variables.product.prodname_vscode %} Stable by appending `?vscodeChannel=stable` to your codespace URL and loading the codespace at that URL.

Si el problema aún no se soluciona en la versión estable de {% data variables.product.prodname_vscode %}, por favor, sigue las instrucciones de solución de problemas descritas anteriormente.

## Solución de problemas del buscador

Si encuentras problemas para utilizar los codespaces en un buscador que no esté basado en Chromium, intenta cambiar a uno que sí lo esté o revisa si hay problemas conocidos con tu buscador en el repositorio de `microsoft/vscode` buscando aquellos etiquetados con el nombre de dicho buscador, tal como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) o [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si encuentras problemas al utilizar codespaces en un buscador basado en Chromium, puedes verificar si estás experimentando algún otro problema conocido de {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
