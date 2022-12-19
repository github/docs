---
title: Adición de un distintivo de estado de flujo de trabajo
intro: Puedes mostrar una insignia de estado en tu repositorio para indicar el estado de tus flujos de trabajo.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a status badge
ms.openlocfilehash: d2b0703e9ca4dcdc0a02cb81144e321a38cffde0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880633'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Nota**: No se puede acceder externamente a los distintivos de flujo de trabajo de un repositorio privado, por lo que no podrás insertarlos en un sitio externo ni vincularlos desde ellos.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Para agregar un distintivo de estado del flujo de trabajo a tu archivo `README.md`, primero debes buscar la dirección URL del distintivo de estado que quieres mostrar. Luego, puedes usar Markdown para mostrar el distintivo como imagen en tu archivo `README.md`. Para más información sobre el marcado de una imagen en Markdown, consulta "[Sintaxis de escritura y formato básicos](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

## Usar el nombre de archivo del flujo de trabajo

Para crear la dirección URL del distintivo de estado de un flujo de trabajo, puedes usar el nombre del archivo de flujo de trabajo:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Para mostrar el distintivo de estado del flujo de trabajo en tu archivo `README.md`, usa el marcado Markdown para insertar imágenes. Para más información sobre el marcado de una imagen en Markdown, consulta "[Sintaxis de escritura y formato básicos](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

Por ejemplo, agrega el Markdown siguiente a tu archivo `README.md` para agregar un distintivo de estado de un flujo de trabajo con la ruta de acceso al archivo `.github/workflows/main.yml`. En el repositorio, `OWNER` es la organización `github` y el nombre `REPOSITORY` es `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Uso del parámetro `branch`

Para mostrar el estado de una ejecución de flujo para una rama específica, agrega `?branch=<BRANCH_NAME>` al final de la dirección URL al distintivo de estado.

Por ejemplo, agrega el Markdown siguiente al archivo `README.md` para mostrar un distintivo de estado para una rama con el nombre `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Uso del parámetro `event`

Si quieres mostrar el estado de las ejecuciones del flujo de trabajo que desencadenó el evento `push`, agrega `?event=push` al final de la dirección URL del distintivo de estado.

Por ejemplo, agrega el Markdown siguiente a tu archivo `README.md` para mostrar un distintivo con el estado de las ejecuciones del flujo de trabajo que desencadenó el evento `push`, con lo que se mostrará el estado de la compilación del estado actual de dicha rama.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
