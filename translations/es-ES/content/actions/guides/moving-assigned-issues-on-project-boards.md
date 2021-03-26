---
title: Mover las propuestas asignadas en los tableros de proyecto
intro: Puedes utilizar las {% data variables.product.prodname_actions %} para mover automáticamente una propuesta a una columna específica en un tablero de proyecto cuando se asigna la propuesta.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Flujos de trabajo'
  - 'Administración de proyectos'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introducción

Este tutorial ilustra cómo utilizar la [acción `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation) para mover una propuesta automáticamente a una columna específica en un tablero de proyecto cuando esta se asigna. Por ejemplo, cuando se asigna una propuesta, puedes moverla hacia la columna `In Progress` de tu tablero de proyecto.

En el tutorial, primero crearás un archivo de flujo de trabajo que utilice la [acción `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

### Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. En tu repositorio, elige un tablero de proyecto. Puedes utilizar un proyecto existente o crear uno nuevo. Para obtener más información sobre cómo crear un proyecto, consulta la sección "[Crear un tablero de proyecto](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    {% raw %}
    ```yaml{:copy}
    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@v0.3.0
            with:
              project: Docs Work
              column: In Progress
              repo-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    ```
    {% endraw %}
5. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Cambia el valor de `project` al nombre de tu tablero de proyecto. Si tienes varios tableros de proyecto con el mismo nombre, la acción `alex-page/github-project-automation-plus` actuará sobre todos aquellos que tengan el nombre previamente especificado.
   - Cambia el valor de `column` al nombre de la columna en donde quieres mover las propuestas cuando se asignen.
   - Cambia el valor de `repo-token`:
     1. Crea un token de acceso personal con el alcance de `repo`. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
     1. Almacena este token de acceso personal como secreto en tu repositorio. Para obtener más información sobre cómo almacenar secretos, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets)".
     1. En tu archivo de flujo de trabajo, reemplaza a `PERSONAL_ACCESS_TOKEN` con el nombre de tu secreto.
6. {% data reusables.actions.commit-workflow %}

### Prueba el flujo de trabajo

Cada vez que se asigne una propuesta en tu repositorio, dicha propuesta se moverá al tablero de proyecto especificado. Si la propuesta no estaba ya en el tablero de proyecto, se agregará a este.

Si tu repositorio pertenece a un usuario, la acción `alex-page/github-project-automation-plus` actuará sobre todos los proyectos en dicho repositorio o en la cuenta de usuario que tengan el nombre y columna del proyecto especificado. De la misma forma, si tu repositorio pertenece a una organización, la acción actuará en todos los poryectos de tu repositorio u organización que tengan el nombre y columna especificadas.

Prueba tu flujo de trabajo asignando una propuesta en tu repositorio.

1. Abre una propuesta en tu repositorio. Para obtener más información, consulta la sección "[Crear una propuesta](/github/managing-your-work-on-github/creating-an-issue)".
2. Asigna la propuesta. Para obtener más informaciónm, consulta la sección "[Asignar propuestas y solicitudes de cambios a otros usuarios de GitHub](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)".
3. Para ver la ejecución de flujo de trabajo que se activó al asignar la propuesta, visualiza el historial de tus ejecuciones de flujo de trabajo. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Cuando se complete el flujo de trabajo, la propuesta que asignaste se debe agregar a la columna del tablero de proyecto que se especificó.

### Pasos siguientes

- Para aprender más sobre las cosas adicionales que puedes hacer con la acción `alex-page/github-project-automation-plus`, como borrar o archivar tarjetas de proyecto, visita la [documentación de la acción `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation).
