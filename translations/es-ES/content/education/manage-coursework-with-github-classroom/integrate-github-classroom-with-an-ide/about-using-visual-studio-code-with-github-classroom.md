---
title: Acerca de utilizar visual Studio Code con GitHub Classroom
shortTitle: Aceca de utilizar Visual Studio Code
intro: 'Puedes configurar a Visual Studio Code como el editor preferido para las tareas en {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## Acerca de Visual Studio Code

Visual Studio Code es un editor de código fuente ligero pero podereos, el cual se ejecuta en tu máquina de escritorio y está disponible para Windows, macOS y Linux. Con la [Extensión de GitHub Classroom para Visual Studio Code](https://aka.ms/classroom-vscode-ext), los alumnos pueden buscar, editar, emitir, colaborar y probar sus Tareas de las Aulas fácilmente. Para obtener más información sobre los IDe y {% data variables.product.prodname_classroom %}, consulta la sección "[Integrar {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### El editor predilecto de tus alumnos
La integración de GitHub Classroom con Visual Studio Code proporciona a los alumnos un paquete de extensiones que contiene:

1. [La Extensión de GitHub Classroom](https://aka.ms/classroom-vscode-ext) con abstracciones personalizadas que hacen más fácil que los alumnos naveguen en el inicio.
2. [La Extgensión de Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) que se integra en una vista de alumnos para dar acceso fácil a los ayudantes para enseñar y a los compañeros de clase para ayudar y colaborar.
3. [La Extensión de GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) que permite a los alumnos ver la retroalimentación de sus instructores dentro del editor.

### Cómo lanzar una tarea en Visual Sudio Code
Cuando creas una tarea, Visual Studio Code puede agregarse como el editor preferido para ella. Para obtener más detalles, consulta la sección "[Integrar a {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Esto incluirá una insignia de "Abrir en Visual Studio Code" en todos los repositorios de los alumnos. Esta insignia maneja la instalación de Visual Studio Code, el paquete de extensiones del Aula, y el abrir hacia la tarea activa con un clic.

{% note %}

**Nota:** El alumno debe tener instalado Git en su computadora para subir código desde Visual Studio Code hacia su repositorio. Esto no se instala automáticamente cuando haces clic en el botón de **Abrir en Visual Studio Code**. El alumno puede descargar Git desde [aquí](https://git-scm.com/downloads).

{% endnote %}

### Cómo utilizar el paquete de extensión de GitHub Classroom
La extensión de GitHub Classroom tiene dos componentes principales: la vista de 'Aulas' y la vista de 'Tarea Activa'.

Cuando un alumno lanza la extensión por primera vez, automáticamente navegan a la pestaña del Explorador en Visual Studio Code, en donde pueden entrar a la vista de "Tarea Activa" junto con la vista de diagrama de árbol de los archivos en el repositorio.

![Vista de Tarea Activa de GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

El alumno puede subir sus confirmaciones a la última versión del remoto si hace clic en el botón de **sincronizar cambios** que se muestra cuando pasas el puntero del mouse sobre la línea de "Tarea Activa". Esto abstrae el control del código fuente con Git, permitiendo que los instructores enseñen Git a su propio ritmo. El sincronizar los cambios también activa las "Pruebas" para que se ejecuten si un profesor configuró la autocalificación para la tarea.

El nodo de "Grupo" bajo la "Tarea Activa" mostrará a los miembros de un grupo si la tarea es un proyecto grupal. También mostrará a los miembros administrativos del repositorio que pueden ayudar cuando un estudiante se atore. Para colaborar en el proyecto, un alumno puede iniciar una sesión de Live Share con cualquiera en el nodo de grupo y compartirán todo el contexto del repositorio con ellos de inmediato. Puedes aprender más sobre Live Share y cómo colaborar con éste [aquí](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Una vez que un alumno termina la tarea, también pueden navegar para ver otras tareas y aulas. Estas se pueden encontrar bajo la pestaña de GitHub.
