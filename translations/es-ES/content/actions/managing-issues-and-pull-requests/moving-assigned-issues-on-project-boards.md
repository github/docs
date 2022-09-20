---
title: Mover las propuestas asignadas en los tableros de proyecto
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para mover automáticamente una propuesta a una columna específica en un tablero de proyecto cuando se asigna la propuesta.'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 88cec7ca6f2e7774fb29407b0b3ee14dc7041067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410463'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation) para mover automáticamente una incidencia a una columna específica de un panel de proyecto cuando se asigna la incidencia. Por ejemplo, cuando se asigna una incidencia, puede moverla a la columna `In Progress` del panel de proyecto.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. En tu repositorio, elige un tablero de proyecto. Puedes utilizar un proyecto existente o crear uno nuevo. Para más información sobre cómo crear un proyecto, vea "[Creación de un panel de proyecto](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Cambie el valor de `project` por el nombre del panel de proyecto. Si tiene varios paneles de proyecto con el mismo nombre, la acción `alex-page/github-project-automation-plus` actuará en todos los proyectos con el nombre especificado.
   - Cambie el valor de `column` por el nombre de la columna a la que quiera mover las incidencias cuando se asignen.
   - Cambie el valor de `repo-token`:
     1. Cree un token de acceso personal con el ámbito `repo`. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
     1. Almacena este token de acceso personal como secreto en tu repositorio. Para más información sobre el almacenamiento de secretos, vea "[Secretos cifrados](/actions/reference/encrypted-secrets)".
     1. En el archivo de flujo de trabajo, reemplace `PERSONAL_ACCESS_TOKEN` por el nombre del secreto.
6. {% data reusables.actions.commit-workflow %}

## Prueba el flujo de trabajo

Cada vez que se asigne una propuesta en tu repositorio, dicha propuesta se moverá al tablero de proyecto especificado. Si la propuesta no estaba ya en el tablero de proyecto, se agregará a este.

Si el repositorio es propiedad del usuario, la acción `alex-page/github-project-automation-plus` actuará en todos los proyectos del repositorio o la cuenta personal que tengan el nombre de proyecto y la columna especificados. De la misma forma, si tu repositorio pertenece a una organización, la acción actuará en todos los poryectos de tu repositorio u organización que tengan el nombre y columna especificadas.

Prueba tu flujo de trabajo asignando una propuesta en tu repositorio.

1. Abre una propuesta en tu repositorio. Para más información, vea "[Creación de una incidencia](/github/managing-your-work-on-github/creating-an-issue)".
2. Asigna la propuesta. Para más información, vea "[Asignación de incidencias y solicitudes de incorporación de cambios a otros usuarios de GitHub](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)".
3. Para ver la ejecución de flujo de trabajo que se activó al asignar la propuesta, visualiza el historial de tus ejecuciones de flujo de trabajo. Para más información, vea "[Visualización del historial de ejecución de flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Cuando se complete el flujo de trabajo, la propuesta que asignaste se debe agregar a la columna del tablero de proyecto que se especificó.

## Pasos siguientes

- Para más información sobre las tareas adicionales que puede realizar con la acción `alex-page/github-project-automation-plus`, como eliminar o archivar tarjetas de proyecto, visite la [documentación de la acción `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation).
