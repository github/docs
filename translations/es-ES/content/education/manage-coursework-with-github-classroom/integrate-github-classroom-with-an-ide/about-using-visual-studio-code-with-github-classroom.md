---
title: Acerca de utilizar visual Studio Code con GitHub Classroom
shortTitle: Aceca de utilizar Visual Studio Code
intro: 'You can configure {% data variables.product.prodname_vscode %} as the preferred editor for assignments in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## Acerca de {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. With the [GitHub Classroom extension for {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), students can easily browse, edit, submit, collaborate, and test their Classroom Assignments. Para obtener más información sobre los IDe y {% data variables.product.prodname_classroom %}, consulta la sección "[Integrar {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### El editor predilecto de tus alumnos
The GitHub Classroom integration with {% data variables.product.prodname_vscode_shortname %} provides students with an extension pack which contains:

1. [La Extensión de GitHub Classroom](https://aka.ms/classroom-vscode-ext) con abstracciones personalizadas que hacen más fácil que los alumnos naveguen en el inicio.
2. [La Extgensión de Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) que se integra en una vista de alumnos para dar acceso fácil a los ayudantes para enseñar y a los compañeros de clase para ayudar y colaborar.
3. [La Extensión de GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) que permite a los alumnos ver la retroalimentación de sus instructores dentro del editor.

### How to launch the assignment in {% data variables.product.prodname_vscode_shortname %}
When creating an assignment, {% data variables.product.prodname_vscode_shortname %} can be added as the preferred editor for an assignment. Para obtener más detalles, consulta la sección "[Integrar a {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

This will include an "Open in {% data variables.product.prodname_vscode_shortname %}" badge in all student repositories. This badge handles installing {% data variables.product.prodname_vscode_shortname %}, the Classroom extension pack, and opening to the active assignment with one click.

{% note %}

**Note:** The student must have Git installed on their computer to push code from {% data variables.product.prodname_vscode_shortname %} to their repository. This is not automatically installed when clicking the **Open in {% data variables.product.prodname_vscode_shortname %}** button. El alumno puede descargar Git desde [aquí](https://git-scm.com/downloads).

{% endnote %}

### Cómo utilizar el paquete de extensión de GitHub Classroom
La extensión de GitHub Classroom tiene dos componentes principales: la vista de 'Aulas' y la vista de 'Tarea Activa'.

When the student launches the extension for the first time, they are automatically navigated to the Explorer tab in {% data variables.product.prodname_vscode_shortname %}, where they can see the "Active Assignment" view alongside the tree-view of files in the repository.

![Vista de Tarea Activa de GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

El alumno puede subir sus confirmaciones a la última versión del remoto si hace clic en el botón de **sincronizar cambios** que se muestra cuando pasas el puntero del mouse sobre la línea de "Tarea Activa". Esto abstrae el control del código fuente con Git, permitiendo que los instructores enseñen Git a su propio ritmo. El sincronizar los cambios también activa las "Pruebas" para que se ejecuten si un profesor configuró la autocalificación para la tarea.

El nodo de "Grupo" bajo la "Tarea Activa" mostrará a los miembros de un grupo si la tarea es un proyecto grupal. También mostrará a los miembros administrativos del repositorio que pueden ayudar cuando un estudiante se atore. Para colaborar en el proyecto, un alumno puede iniciar una sesión de Live Share con cualquiera en el nodo de grupo y compartirán todo el contexto del repositorio con ellos de inmediato. Puedes aprender más sobre Live Share y cómo colaborar con éste [aquí](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Una vez que un alumno termina la tarea, también pueden navegar para ver otras tareas y aulas. Estas se pueden encontrar bajo la pestaña de GitHub.
