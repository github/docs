---
title: Acerca de utilizar visual Studio Code con GitHub Classroom
shortTitle: About using Visual Studio Code
intro: 'Puedes configurar {% data variables.product.prodname_vscode %} como el editor preferido para las tareas en {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148748'
---
## Acerca de {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} es un editor de código fuente ligero pero eficaz, que se ejecuta en tu equipo y está disponible para Windows, macOS y Linux. Con la [extensión GitHub Classroom para {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), los alumnos pueden examinar, editar, enviar, colaborar y probar fácilmente sus tareas de clase. Para obtener más información sobre los IDE y {% data variables.product.prodname_classroom %}, vea "[Integración de {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### El editor predilecto de tus alumnos 
La integración de GitHub Classroom con {% data variables.product.prodname_vscode_shortname %} proporciona a los alumnos un paquete de extensión que contiene:

1. [Extensión GitHub Classroom](https://aka.ms/classroom-vscode-ext) con abstracciones personalizadas que facilitan a los alumnos navegar por la introducción.
2. [Extensión Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) que se integra en una vista del alumno a fin de facilitar el acceso a asistentes y compañeros de clase para obtener ayuda y colaboración.
3. [Extensión de solicitud de incorporación de cambios de GitHub](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) que permite a los alumnos ver comentarios de sus instructores en el editor. 

### Cómo iniciar la asignación en {% data variables.product.prodname_vscode_shortname %}
Al crear una asignación, se puede agregar {% data variables.product.prodname_vscode_shortname %} como editor preferido para una asignación. Para más información, vea "[Integración de {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Esto incluirá un distintivo "Abrir en {% data variables.product.prodname_vscode_shortname %}" en todos los repositorios de alumnos. Este distintivo controla la instalación de {% data variables.product.prodname_vscode_shortname %}, el paquete de la extensión Classroom y la apertura a la asignación activa con un solo clic.

{% note %}

**Nota:** El alumno debe tener Git instalado en su equipo para insertar código de {% data variables.product.prodname_vscode_shortname %} en su repositorio. Esto no se instala automáticamente al hacer clic en el botón **Abrir en {% data variables.product.prodname_vscode_shortname %}** . El alumno puede descargar Git [aquí](https://git-scm.com/downloads).

{% endnote %}

### Cómo utilizar el paquete de extensión de GitHub Classroom 
La extensión de GitHub Classroom tiene dos componentes principales: la vista de 'Aulas' y la vista de 'Tarea Activa'. 

Cuando un alumno inicia la extensión por primera vez, automáticamente navegan a la pestaña del Explorador en {% data variables.product.prodname_vscode_shortname %}, en donde pueden entrar a la vista de "Tarea Activa" junto con la vista de diagrama de árbol de los archivos en el repositorio. 

![Vista de Tarea Activa de GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

El alumno puede insertar sus confirmaciones en la versión más reciente del repositorio remoto si hace clic en el botón **sincronizar cambios** que se muestra al mover el mouse sobre la línea "Tarea activa". Esto abstrae el control del código fuente con Git, permitiendo que los instructores enseñen Git a su propio ritmo.
El sincronizar los cambios también activa las "Pruebas" para que se ejecuten si un profesor configuró la autocalificación para la tarea.

El nodo de "Grupo" bajo la "Tarea Activa" mostrará a los miembros de un grupo si la tarea es un proyecto grupal. También mostrará a los miembros administrativos del repositorio que pueden ayudar cuando un estudiante se atore. Para colaborar en el proyecto, un alumno puede iniciar una sesión de Live Share con cualquiera en el nodo de grupo y compartirán todo el contexto del repositorio con ellos de inmediato. [Aquí](https://docs.microsoft.com/en-us/visualstudio/liveshare/) puede obtener más información sobre Live Share y colaborar.

Una vez que un alumno termina la tarea, también pueden navegar para ver otras tareas y aulas. Estas se pueden encontrar bajo la pestaña de GitHub.
