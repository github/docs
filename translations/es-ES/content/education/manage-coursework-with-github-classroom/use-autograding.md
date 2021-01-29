---
title: Utiliza las calificaciones automáticas
intro: Puedes proporcionar retroalimentación automáticamente en las emisiones de código de tus alumnos si configuras las pruebas para que se ejecuten en el repositorio de tareas.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
---

### Acerca de las calificaciones automáticas

{% data reusables.classroom.about-autograding %}

Después de que un alumno acepte una tarea, en cada subida al repositorio de la misma, {% data variables.product.prodname_actions %} ejecuta comandos para tu prueba de calificaciones automáticas en un ambiente Linux que contiene el código más nuevo del alumno. {% data variables.product.prodname_classroom %} crea los flujos de trabajo necesarios para {% data variables.product.prodname_actions %}. No necesitas tener experiencia con las {% data variables.product.prodname_actions %} para utilizar las calificaciones automáticas.

Puedes utiizar un marco de trabajo de prueba, ejecutar un comando personalizado, escribir pruebas de entrada/salida, o combinar varios métodos de pruebas. El ambiente de Linux para las calificaciones automáticas contienen muchas herramientas de software populares. Para obtener más información, consulta los detalles de la última versión de Ubuntu en "[Especificaciones para los ejecutores hospedados en {% data variables.product.company_short %}](/actions/reference/specifications-for-github-hosted-runners#supported-software)".

Puedes ver un resumen de qué estudiantes están pasando las pruebas con calificación automática si navegas a la tarea en {% data variables.product.prodname_classroom %}. Una marca verde significa que el alumno está pasando todas las pruebas, la X roja significa que el alumno falló en algunas o todas las pruebas. Si otorgas puntos para una o más pruebas, entonces una burbuja mostrará la puntuación de éstas con base en la puntuación máxima posible para la tarea.

![Resumen de una tarea con resultados de calificación automática](/assets/images/help/classroom/autograding-hero.png)

### Métodos para calificar

Hay dos métodos para calificar: pruebas de entrada/salida y pruebas de ejecución de comandos.

#### Prueba de entrada/salida

Una prueba de entrada/salida ejecuta un comando de configuración opcionalmente y proporciona una entrada estándar de un comando de prueba. {% data variables.product.prodname_classroom %} evalúa la salida del comando de prueba contra un resultado esperado.

| Parámetro                    | Descripción                                                                                                                            |
|:---------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------- |
| **Nombre de la prueba**      | El nombre de la prueba para identificarla en las bitácoras                                                                             |
| **Comando de configuración** | _Opcional_. Un comando a ejecutar antes de las pruebas, tal como una compilación o instalación                                         |
| **Comando de ejecución**     | El comando para ejecutar la prueba y generar una salida estándar para su evaluación                                                    |
| **Inputs**                   | Entrada estándar para el comando de ejecución                                                                                          |
| **Salida esperada**          | La salida que quieres ver como estándar para el comando de ejecución                                                                   |
| **Comparación**              | El tipo de comparación entre el la salida del comando de ejecución y la salida esperada<br/><br/><ul><li>**Included**: Pasa cuando la salida esperada aparece<br/>en cualquier parte dentro de la salida estándar del comando de ejecución</li><li>**Exact**: Pasa cuando la salida esperada es completamente idéntica<br/>a la salida estándar del comando de ejecución</li><li>**Regex**: Pasa si la expresión regular en la salida<br/>esperada coincide con la salida estándar del comando de ejecución</li></ul> |
| **Tiempo excedido**          | En minutos, lo que tarda una prueba en ejecutarse antes de que resulte en un fallo                                                     |
| **Puntos**                   | _Opcional_. La cantidad de puntos que vale la prueba contra una puntuación total                                                       |

#### Prueba de comando de ejecución

Una prueba de comando de ejecución ejecuta un comando de configuración y luego un comando de prueba. {% data variables.product.prodname_classroom %} verifica el estado de salida del comando de prueba. Un código de salida de `0` resultará en éxito y cualquier otro código de salida resultara en un fallo.

{% data variables.product.prodname_classroom %} proporciona preajustes para un las pruebas de comandos de ejecución específicas de lenguaje para varios lenguajes de programación. Por ejemplo, la prueba de **ejecutar nodo** llena previamente el comando de configuración con `npm install` y el comando de prueba con `npm test`.

| Parámetro                    | Descripción                                                                                    |
|:---------------------------- |:---------------------------------------------------------------------------------------------- |
| **Nombre de la prueba**      | El nombre de la prueba para identificarla en las bitácoras                                     |
| **Comando de configuración** | _Opcional_. Un comando a ejecutar antes de las pruebas, tal como una compilación o instalación |
| **Comando de ejecución**     | El comando para ejecutar la prueba y generar un código de salida para evaluación               |
| **Tiempo excedido**          | En minutos, lo que tarda una prueba en ejecutarse antes de que resulte en un fallo             |
| **Puntos**                   | _Opcional_. La cantidad de puntos que vale la prueba contra una puntuación total               |

### Configurar las pruebas de calificación automática para una tarea

Puedes agregar pruebas de calificación automática durante la creación de una tarea nueva. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Puedes agregar, editar o borrar las pruebas de calificación automática para una tarea existente. Si cambias las pruebas de calificación automática para una tarea existente, los repositorios de tareas existentes no se verán afectados. Un alumno o equipo debe aceptar la tarea y crear un repositorio de tareas nuevo para utilizar las pruebas nuevas.

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.assignments-click-pencil %}
1. En la barra lateral, da clic en **Calificaciones y retroalimentación**. !["Calificaciones y retroalimentación" a la izquierda de los puntos básicos de la tarea](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. Agrega, edita o borra una prueba de calificación automática.
    - Para agregar una prueba, debajo de "Agregar pruebas de calificación automática", selecciona el menú desplegable **Agregar prueba** y luego da clic en el método de calificación que quieras utilizar. ![Using the "Add test" drop-down menu to click a grading method](/assets/images/help/classroom/autograding-click-grading-method.png) Configura la prueba y luego da clic en **Guardar caso de prueba**. ![Botón de "Guardar caso de prueba" para una prueba de calificación automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para editar una prueba, a la derecha del nombre de ésta, da clic en {% octicon "pencil" aria-label="The pencil icon" %}. ![Pencil icon for editing an autograding test](/assets/images/help/classroom/autograding-click-pencil.png) Configura la prueba y luego da clic en **Guardar caso de prueba**. ![Botón de "Guardar caso de prueba" para una prueba de calificación automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para borrar una prueba, a la derecha del nombre de ésta, da clic en {% octicon "trash" aria-label="The trash icon" %}. ![Icono de cesta de basura para borrar una prueba de calificación automática](/assets/images/help/classroom/autograding-click-trash.png)
1. En la parte inferior de la página, da clic en **Actualizar tarea**. ![Botón de "Actualizar tarea" en la parte inferior de la página](/assets/images/help/classroom/assignments-click-update-assignment.png)

### Visualizar las bitácoras desde las pruebas de calificación automática

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-assignment-in-list %}
1. A la derecha de una emisión, da clic en **Ver prueba**. ![Botón de "Ver tarea" para una emisión de una tarea](/assets/images/help/classroom/assignments-click-view-test.png)
1. Revisa la salida de la prueba. Para obtener más información, consulta la sección "[Utilizar bitácoras de ejecución de flujos de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs)".

### Further reading

- [Documentación de {% data variables.product.prodname_actions %}](/actions)
