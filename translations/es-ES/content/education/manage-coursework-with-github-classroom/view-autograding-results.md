---
title: Ver los resultados de calificaciones automáticas
intro: Puedes ver los resultados de las calificaciones automáticas dentro del repositorio de tu tarea.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
---

### Acerca de las calificaciones automáticas

Tu maestro puede configurar las pruebas que verifican tu trabajo automáticamente cuando subres información a un repositorio de tarea en {% data variables.product.product_location %}.

Si eres un alumno y tu instructor configuró las calificaciones automáticas para tu tarea en {% data variables.product.prodname_classroom %}, encontrarás los resultados de las pruebas de calificación automática a lo largo de tu repositorio de tareas. Si todas las pruebas de una confirmación son exitosas, verás una marca verde. Si cualquiera de las pruebas de una confirmación falla, verás una X roja. Puedes ver las bitácoras detalladas si das clic en la marca verde o en la X roja.

### Visualizr los resultados de calificaciones automáticas para un repositorio de tarea

{% data variables.product.prodname_classroom %} utiliza {% data variables.product.prodname_actions %} para ejecutar las pruebas de calificación automática. Para obtener más información sobre cómo ver las bitácoras para una prueba de calificación automática, consulta la sección "[Utilizar bitácoras de ejecución de flujos de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

La pestaña de **Acciones** muestra el historial completo de las ejecuciones de las pruebas.

![Pestaña de "Acciones" que tiene seleccionado "Todos los flujos de trabajo"](/assets/images/help/classroom/autograding-actions-tab.png)

Puedes dar clic en una ejecución de prueba específica para revisar la bitácora de salida, como en los errores de compilación y fallos de pruebas.

![Las bitácoras de resultados de las pruebas de un "flujo de trabajo de calificación automática de {% data variables.product.prodname_classroom %}" en {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

### Further reading

- "[Acerca de las verificaciones de estado](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
