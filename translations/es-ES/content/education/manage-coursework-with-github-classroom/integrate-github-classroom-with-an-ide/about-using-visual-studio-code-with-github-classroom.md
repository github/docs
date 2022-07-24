---
title: Acerca de utilizar visual Studio Code con GitHub Classroom
shortTitle: Aceca de utilizar Visual Studio Code
intro: 'Puedes configurar {% data variables.product.prodname_vscode %} como el editor preferido para las tareas de {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## Acerca de {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} es un editor de código fuente ligero pero poderoso, el cual se ejecuta en tu escritorio y está disponible para Windows, macOS y Linux. Con la [extensión de GitHub Clasroom para {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), los alumnos pueden buscar, editar, enviar, colaborar y probar sus tareas de las aulas fácilmente. Para obtener más información sobre los IDe y {% data variables.product.prodname_classroom %}, consulta la sección "[Integrar {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### El editor predilecto de tus alumnos
La integración con Github Classroom con {% data variables.product.prodname_vscode_shortname %} proporciona a los estudiantes un paquete de extensiones, el cuál contiene:

1. [La Extensión de GitHub Classroom](https://aka.ms/classroom-vscode-ext) con abstracciones personalizadas que hacen más fácil que los alumnos naveguen en el inicio.
2. [La Extgensión de Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) que se integra en una vista de alumnos para dar acceso fácil a los ayudantes para enseñar y a los compañeros de clase para ayudar y colaborar.
3. [La Extensión de GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) que permite a los alumnos ver la retroalimentación de sus instructores dentro del editor.

### Cómo lanzar la tarea en {% data variables.product.prodname_vscode_shortname %}
Cuando creas una tarea, puedes agregar a {% data variables.product.prodname_vscode_shortname %} como el editor predeterminado para ella. Para obtener más detalles, consulta la sección "[Integrar a {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Esto incluirá una insignia de "Abierto en {% data variables.product.prodname_vscode_shortname %}" en todos los repositorios de los alumnos. Esta insignia maneja la instalación de {% data variables.product.prodname_vscode_shortname %}, el paquete de extensión del aula y la apertura para la tarea activa en un solo clic.

{% note %}

**Nota:** El alumno debe tener Git instalado en su computadora para subir código desde {% data variables.product.prodname_vscode_shortname %} hacia su repositorio. Esto no se instala automáticamente al hacer clic en el botón **Abrir en {% data variables.product.prodname_vscode_shortname %}**. El alumno puede descargar Git desde [aquí](https://git-scm.com/downloads).

{% endnote %}

### Cómo utilizar el paquete de extensión de GitHub Classroom
La extensión de GitHub Classroom tiene dos componentes principales: la vista de 'Aulas' y la vista de 'Tarea Activa'.

Cuando el alumno lanza la extensión por primera vez, se le lleva automáticamente a la pestaña del explorador en {% data variables.product.prodname_vscode_shortname %}, en donde podrán ver la vista de "Tarea activa" junto con la vista triple de los archivos en el repositorio.

![Vista de Tarea Activa de GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

El alumno puede subir sus confirmaciones a la última versión del remoto si hace clic en el botón de **sincronizar cambios** que se muestra cuando pasas el puntero del mouse sobre la línea de "Tarea Activa". Esto abstrae el control del código fuente con Git, permitiendo que los instructores enseñen Git a su propio ritmo. El sincronizar los cambios también activa las "Pruebas" para que se ejecuten si un profesor configuró la autocalificación para la tarea.

El nodo de "Grupo" bajo la "Tarea Activa" mostrará a los miembros de un grupo si la tarea es un proyecto grupal. También mostrará a los miembros administrativos del repositorio que pueden ayudar cuando un estudiante se atore. Para colaborar en el proyecto, un alumno puede iniciar una sesión de Live Share con cualquiera en el nodo de grupo y compartirán todo el contexto del repositorio con ellos de inmediato. Puedes aprender más sobre Live Share y cómo colaborar con éste [aquí](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Una vez que un alumno termina la tarea, también pueden navegar para ver otras tareas y aulas. Estas se pueden encontrar bajo la pestaña de GitHub.
