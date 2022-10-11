---
title: Solucionar problemas de los clientes de Codespaces
intro: 'Puedes utilizar {% data variables.product.prodname_codespaces %} en tu buscador o a través de {% data variables.product.prodname_vscode %}. Este artículo proporciona pasos de solución de problemas para los problemas comunes de los clientes.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Clientes de codespaces
---

## Solución de problemas de {% data variables.product.prodname_vscode %}

Cuando conectas a una versión de escritorio de {% data variables.product.prodname_vscode %} a un codespace, notarás algunas cuantas diferencias en comparación con trabajar en un espacio de trabajo normal, pero la experiencia será bastante similar.

Cuando abres un codespace en tu buscador utilizando {% data variables.product.prodname_vscode %} en la web, notarás más diferencias. Por ejemplo, algunas uniones de teclas serán diferentes o no estarán y algunas extensiones podrían comportarse de forma diferente. Para obtener un resumen, consulta la sección "[Adaptaciones y limitaciones conocidas](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" en los documentos de {% data variables.product.prodname_vscode %}.

Puedes revisar si hay problemas conocidos y registrar problemas nuevos con la experiencia de {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

## Solución de problemas del buscador

Si encuentras problemas para utilizar los codespaces en un buscador que no esté basado en Chromium, intenta cambiar a uno que sí lo esté o revisa si hay problemas conocidos con tu buscador en el repositorio de `microsoft/vscode` buscando aquellos etiquetados con el nombre de dicho buscador, tal como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) o [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si encuentras problemas al utilizar codespaces en un buscador basado en Chromium, puedes verificar si estás experimentando algún otro problema conocido de {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
