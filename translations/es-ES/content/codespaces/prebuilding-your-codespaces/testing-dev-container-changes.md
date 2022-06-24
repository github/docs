---
title: Probar los cambios de configuración de contenedor dev en una rama con precompilación habilitada
shortTitle: Cambios de contenedor dev de pruebas
allowTitleToDifferFromFilename: true
intro: 'Cuando cambias la configuración del contenedor dev para una rama que se habilita para las precompilaciones, debes probar tus cambios en un codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
---

Cualquier cambio que hagas en la configuración del contenedor dev para una rama con precompilación habilitada dará como resultado una actualización a la configuración de codespace y a la plantilla precompilada asociada. Por lo tanto, es importante probar estos cambios en un codespace de una rama de prueba antes de confirmar tus cambios en una rama de tu repositorio que se esté utilizando activamente. Esto garantizará que no estás introduciendo cambios importantes para tu equipo.

Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

## Probar los cambios en la configuración del contenedor dev

1. Crear un codespace desde una rama con precompilación habilitada en la cual quieres cambiar el contenedor dev. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".
1. En el codespace, extrae una rama de prueba. Para obtener más información, consulta la sección "[Utilizar el control de código fuente en tu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)."
1. Realiza los cambios requeridos a la configuración del contenedor dev.
1. Aplica los cambios recompilando el contenedor. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."
1. Cuando todo se vea bien, también recomendamos crear un codespace nuevo desde tu rama de pruebas para garantizar que todo funcione. Entonces podrás confirmar los cambios a la rama predeterminada de tu repositorio o a una rama de característica activa, activando una actualización de la plantilla de precompilación para dicha rama.

   {% note %}

   **Nota**: El crear este codespace llevará más de lo habitual, ya que no se creará desde una precompilación.

   {% endnote %}
