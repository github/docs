---
title: Utilizar GitHub Actions para la administración de proyectos
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para automatizar muchas de tus tareas de administración de proyectos.'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
ms.openlocfilehash: 5f5d1cb222824bbb451ad603e35b4986384645e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116849'
---
Puedes utilizar las {% data variables.product.prodname_actions %} para automatizar tus tareas de administración de proyectos si creas flujos de trabajo. Cada flujo de trabajo contiene una serie de tareas que se llevan a cabo automáticamente cada que se ejecuta el flujo de trabajo. Por ejemplo, puedes crear un flujo de trabajo que se ejecute cada vez que se crea una propuesta para que se agregue una etiqueta, se deje un comentario y se mueva la propuesta a otro tablero de proyecto.

## ¿Cuándo se ejecutan los flujos de trabajo?

Puedes configurar tus flujos de trabajo para que se ejecuten en cierto itinerario o para que se activen cuando ocurra un evento. Por ejemplo, puedes configurar tu flujo de trabajo para que se ejecute cuando alguien cree una propuesta en un repositorio.

Muchos de los activadores de flujos de trabajo sirven para automatizar la administración de proyectos.

- Para cuando se abre, asigna o etiqueta un proyecto.
- Para cuando se agrega un comentario a una propuesta.
- Para cuando se crea o mueve una tarjeta de proyecto.
- Para una programación de itinerarios.

Para obtener una lista completa de eventos que se pueden usar para desencadenar flujos de trabajo, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

## ¿Qué pueden hacer los flujos de trabajo?

Los flujos de trabajo pueden hacer muchas cosas, tales como comentar en una propuesta, agregar o quitar etiquetas, mover tarjetas en los tableros de proyecto y abrir propuestas.

Puedes aprender sobre cómo utilizar las {% data variables.product.prodname_actions %} para la administración de proyectos si sigues estos tutoriales, los cuales incluyen ejemplos de flujo de trabajo que puedes adaptar para satisfacer tus necesidades.

- "[Adición de etiquetas a incidencias](/actions/guides/adding-labels-to-issues)"
- "[Eliminación de una etiqueta cuando se agrega una tarjeta a una columna del panel de proyecto](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)"
- "[Traslado de incidencias asignadas en paneles de proyecto](/actions/guides/moving-assigned-issues-on-project-boards)"
- "[Comentarios sobre una incidencia cuando se agrega una etiqueta](/actions/guides/commenting-on-an-issue-when-a-label-is-added)"
- "[Cierre de incidencias inactivas](/actions/guides/closing-inactive-issues)"
- "[Programación de la creación de incidencias](/actions/guides/scheduling-issue-creation)"
