---
title: Utilizar GitHub Actions para la administración de proyectos
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para automatizar muchas de tus tareas de administración de proyectos.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Project management
---

Puedes utilizar las {% data variables.product.prodname_actions %} para automatizar tus tareas de administración de proyectos si creas flujos de trabajo. Cada flujo de trabajo contiene una serie de tareas que se llevan a cabo automáticamente cada que se ejecuta el flujo de trabajo. Por ejemplo, puedes crear un flujo de trabajo que se ejecute cada vez que se crea una propuesta para que se agregue una etiqueta, se deje un comentario y se mueva la propuesta a otro tablero de proyecto.

### ¿Cuándo se ejecutan los flujos de trabajo?

Puedes configurar tus flujos de trabajo para que se ejecuten en cierto itinerario o para que se activen cuando ocurra un evento. Por ejemplo, puedes configurar tu flujo de trabajo para que se ejecute cuando alguien cree una propuesta en un repositorio.

Muchos de los activadores de flujos de trabajo sirven para automatizar la administración de proyectos.

- Para cuando se abre, asigna o etiqueta un proyecto.
- Para cuando se agrega un comentario a una propuesta.
- Para cuando se crea o mueve una tarjeta de proyecto.
- Para una programación de itinerarios.

Si quieres encontrar una lista completa de eventos que pueden activar los flujos de trabajo, consulta la sección "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

### ¿Qué pueden hacer los flujos de trabajo?

Los flujos de trabajo pueden hacer muchas cosas, tales como comentar en una propuesta, agregar o quitar etiquetas, mover tarjetas en los tableros de proyecto y abrir propuestas.

Puedes aprender sobre cómo utilizar las {% data variables.product.prodname_actions %} para la administración de proyectos si sigues estos tutoriales, los cuales incluyen ejemplos de flujo de trabajo que puedes adaptar para satisfacer tus necesidades.

- "[Agregar etiquetas a las propuestas](/actions/guides/adding-labels-to-issues)"
- "[Eliminar una etiqueta cuando se agrega una tarjeta a una columna de un tablero de proyecto](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)"
- "[Mover las propuestas asignadas en los tableros de proyecto](/actions/guides/moving-assigned-issues-on-project-boards)"
- "[Comentar en una propuesta cuando se agrega una etiqueta](/actions/guides/commenting-on-an-issue-when-a-label-is-added)"
- "[Cerrar las propuestas inactivas](/actions/guides/closing-inactive-issues)"
- "[Programar la creación de propuestas](/actions/guides/scheduling-issue-creation)"
