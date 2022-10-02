---
title: Acerca de los conflictos de fusión
intro: 'Los conflictos de fusión suceden cuando fusionas ramas que tienen confirmaciones de cambios contrapuestas, y Git necesita tu ayuda para decidir qué cambios incorporar en la fusión final.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
ms.openlocfilehash: 5902f74a9c51772dc3f1d8883b60723ffec3e1d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137845'
---
Por lo general, Git puede resolver las diferencias entre las ramas y fusionarlas automáticamente. Generalmente, los cambios están en diferentes líneas o incluso en diferentes archivos, lo que hace que sea simple para los equipos comprender la fusión. Sin embargo, a veces hay cambios contrapuestos que Git no puede resolver sin tu ayuda. Por lo general, los conflictos de fusión suceden cuando las personas realizan diferentes cambios en la misma línea en el mismo archivo o cuando una persona edita un archivo y otra persona elimina el mismo archivo.

Debes resolver todos los conflictos de fusión antes de poder fusionar un solicitud de extracción en {% data variables.product.product_name %}. Si tiene un conflicto de combinación entre la rama de comparación y la rama base de la solicitud de incorporación de cambios, puede ver una lista de los archivos con cambios en conflicto encima del botón **Combinar solicitud de incorporación de cambios**. El botón **Combinar solicitud de incorporación de cambios** se desactiva hasta que haya resuelto todos los conflictos entre la rama de comparación y la rama base.

![mensaje de error de conflicto de fusión](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

## Resolución de conflictos de combinación

Para resolver un conflicto de fusión, debes editar de forma manual el archivo conflictivo para seleccionar los cambios que quieres mantener en la fusión final. Hay un par de maneras diferentes de resolver un conflicto de fusión:

- Si tu conflicto de fusión es ocasionado por cambios de líneas contrapuestos, como cuando las personas realizan diferentes cambios en la misma línea del mismo archivo en diferentes ramas en tu repositorio de Git, lo puedes resolver en {% data variables.product.product_name %} usando el editor de conflictos. Para más información, vea "[Resolución de un conflicto de combinación en {% data variables.product.prodname_dotcom %}](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)".
- Para todos los otros tipos de conflictos de fusión, debes resolver el conflicto de fusión en un clon local del repositorio y subir el cambio a tu rama en {% data variables.product.product_name %}. Puede usar la línea de comandos o una herramienta como [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) para insertar el cambio. Para más información, vea "[Resolución de un conflicto de combinación en la línea de comandos](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)".

Si tienes un conflicto de fusión en la línea de comandos, no puedes subir tus cambios locales a {% data variables.product.product_name %} hasta que resuelvas el conflicto de fusión localmente en tu equipo. Si intentas fusionar ramas en la línea de comandos que tiene un conflicto de fusión, recibirás un mensaje de errror. Para más información, vea "[Resolución de un conflicto de combinación mediante la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line/)".
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## Información adicional

- "[Acerca de las combinaciones de solicitud de incorporación de cambios](/articles/about-pull-request-merges/)"
- "[Acerca de las solicitudes de incorporación de cambios](/articles/about-pull-requests/)"
- "[Resolución de un conflicto de combinación mediante la línea de comandos](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)"
- "[Resolución de un conflicto de combinación en GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)"
