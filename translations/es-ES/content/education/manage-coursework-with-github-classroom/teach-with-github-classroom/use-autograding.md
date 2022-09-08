---
title: Utiliza las calificaciones automáticas
intro: Puedes proporcionar retroalimentación automáticamente en las emisiones de código de tus alumnos si configuras las pruebas para que se ejecuten en el repositorio de tareas.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112146'
---
## Acerca de las calificaciones automáticas

{% data reusables.classroom.about-autograding %}

Después de que un alumno acepte una tarea, en cada subida al repositorio de la misma, {% data variables.product.prodname_actions %} ejecuta comandos para tu prueba de calificaciones automáticas en un ambiente Linux que contiene el código más nuevo del alumno. {% data variables.product.prodname_classroom %} crea los flujos de trabajo necesarios para {% data variables.product.prodname_actions %}. No necesitas tener experiencia con las {% data variables.product.prodname_actions %} para utilizar las calificaciones automáticas.

Puedes utiizar un marco de trabajo de prueba, ejecutar un comando personalizado, escribir pruebas de entrada/salida, o combinar varios métodos de pruebas. El ambiente de Linux para las calificaciones automáticas contienen muchas herramientas de software populares. Para más información, vea los detalles de la versión más reciente de Ubuntu en "[Especificaciones para ejecutores hospedados en {% data variables.product.company_short %}](/actions/reference/specifications-for-github-hosted-runners#supported-software)".

Puedes ver un resumen de qué estudiantes están pasando las pruebas con calificación automática si navegas a la tarea en {% data variables.product.prodname_classroom %}. Una marca verde significa que el alumno está pasando todas las pruebas, la X roja significa que el alumno falló en algunas o todas las pruebas. Si otorgas puntos para una o más pruebas, entonces una burbuja mostrará la puntuación de éstas con base en la puntuación máxima posible para la tarea.

![Resumen de una tarea con resultados de calificación automática](/assets/images/help/classroom/assignment-individual-hero.png)

## Métodos para calificar

Hay dos métodos para calificar: pruebas de entrada/salida y pruebas de ejecución de comandos.

### Prueba de entrada/salida

Una prueba de entrada/salida ejecuta un comando de configuración opcionalmente y proporciona una entrada estándar de un comando de prueba. {% data variables.product.prodname_classroom %} evalúa la salida del comando de prueba contra un resultado esperado.

| Configuración | Descripción |
| :- | :- |
| **Nombre de la prueba** | El nombre de la prueba para identificarla en las bitácoras |
| **Comando de configuración** | _Opcional_. Un comando a ejecutar antes de las pruebas, tal como una compilación o instalación |
| **Comando de ejecución** | El comando para ejecutar la prueba y generar una salida estándar para su evaluación |
| **Entradas** | Entrada estándar para el comando de ejecución |
| **Salida prevista** | La salida que quieres ver como estándar para el comando de ejecución |
| **De comparación** | El tipo de comparación entre el la salida del comando de ejecución y la salida esperada<br/><br/><ul><li>**Incluido**: se supera cuando aparece la salida esperada<br/>en cualquier parte de la salida estándar del comando de ejecución</li><li>**Exacto**: se supera cuando la salida esperada es completamente idéntica<br/>a la salida estándar del comando de ejecución</li><li>**Expresión regular**: se supera si la expresión regular de la<br/>salida esperada coincide con la salida estándar del comando de ejecución.</li></ul> |
| **Tiempo de espera** | En minutos, lo que tarda una prueba en ejecutarse antes de que resulte en un fallo |
| **Puntos** | _Opcional_. La cantidad de puntos que vale la prueba contra una puntuación total |

### Prueba de comando de ejecución

Una prueba de comando de ejecución ejecuta un comando de configuración y luego un comando de prueba. {% data variables.product.prodname_classroom %} verifica el estado de salida del comando de prueba. Un código de salida de `0` dará un resultado correcto y cualquier otro código de salida producirá un error.

{% data variables.product.prodname_classroom %} proporciona preajustes para un las pruebas de comandos de ejecución específicas de lenguaje para varios lenguajes de programación. Por ejemplo, la prueba **Ejecutar nodo** rellena previamente el comando de instalación con `npm install` y el comando de prueba con `npm test`.

| Configuración | Descripción |
| :- | :- |
| **Nombre de la prueba** | El nombre de la prueba para identificarla en las bitácoras |
| **Comando de configuración** | _Opcional_. Un comando a ejecutar antes de las pruebas, tal como una compilación o instalación |
| **Comando de ejecución** | El comando para ejecutar la prueba y generar un código de salida para evaluación |
| **Tiempo de espera** | En minutos, lo que tarda una prueba en ejecutarse antes de que resulte en un fallo |
| **Puntos** | _Opcional_. La cantidad de puntos que vale la prueba contra una puntuación total |

## Configurar las pruebas de calificación automática para una tarea

Puedes agregar pruebas de calificación automática durante la creación de una tarea nueva. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Puedes agregar, editar o borrar las pruebas de calificación automática para una tarea existente. Todos los cambios que se hagan a través de la IU del aula se subirán a los repositorios existentes de los alumnos, así que edita tus pruebas con cuidado.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. En la barra lateral izquierda, haga clic en **Calificación y comentarios**.
  !["Calificación y comentarios" a la izquierda de los aspectos básicos de la asignación](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. Agrega, edita o borra una prueba de calificación automática.
    - Para agregar una prueba, en "Agregar pruebas de calificación automática", seleccione el menú desplegable **Agregar prueba** y, después, haga clic en el método de calificación que quiera usar.
       ![Uso del menú desplegable "Agregar prueba" para hacer clic en un método de calificación](/assets/images/help/classroom/autograding-click-grading-method.png), configurar la prueba y, después, hacer clic en **Guardar caso de prueba**.
       ![Botón "Guardar caso de prueba" para una prueba de calificación automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para editar una prueba, a la derecha del nombre de ésta, da clic en {% octicon "pencil" aria-label="The pencil icon" %}.
        ![Icono de lápiz para editar una prueba de clasificación automática](/assets/images/help/classroom/autograding-click-pencil.png) configurar la prueba y, después, hacer clic en **Guardar caso de prueba**.
       ![Botón "Guardar caso de prueba" para una prueba de calificación automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para borrar una prueba, a la derecha del nombre de ésta, da clic en {% octicon "trash" aria-label="The trash icon" %}.
        ![Icono de la papelera para borrar una prueba de calificación automática](/assets/images/help/classroom/autograding-click-trash.png)
1. En la parte inferior de la página, haga clic en **Actualizar asignación**.
  ![Botón "Actualizar asignación" en la parte inferior de la página](/assets/images/help/classroom/assignments-click-update-assignment.png)

## Ver y descargar los resultados de las pruebas de autoevaluación

### Descargar los resultados de autoevaluación

También puedes descargar un CSV de las puntuaciones de autoevaluación de tus alumnos a través del botón "Descargar". Esto generará un CSV de descarga que contiene un enlace al repositorio del alumno, a su manejador de {% data variables.product.prodname_dotcom %}, identificador de lista, marca de tiempo de emisión y puntuación de autoevaluación.

![Botón "Descargar" seleccionado en el que se muestra "Descargar calificaciones resaltado" y una opción adicional para "Descargar repositorios"](/assets/images/help/classroom/download-grades.png)

### Ver bitácoras individuales
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. A la derecha de un envío, haga clic en **Ver prueba**.
  ![Botón "Ver prueba" para el envío de una asignación](/assets/images/help/classroom/assignments-click-view-test.png)
1. Revisa la salida de la prueba. Para más información, vea "[Uso de registros de ejecución de flujo de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs)".

## Información adicional

- [Documentación de {% data variables.product.prodname_actions %}](/actions)
