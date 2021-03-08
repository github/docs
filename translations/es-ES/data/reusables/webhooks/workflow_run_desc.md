
Este evento ocurre cuando una ejecución de flujo de trabajo se solicita o se completa, y te permite ejecutar un flujo de trabajo con base en el resultado terminado de otro flujo de trabajo. Por ejemplo, si tu flujo de trabajo de `pull_request` genera artefactos de compilación, puedes crear un nuevo flujo de trabajo que utilice a `workflow_run` para analizar los resultados y agregar un comentario la solicitud de extracción original.

El flujo de trabajo que inició el evento `workflow_run` puede acceder a los secretos y tokens escritos que se utilizan en el flujo de trabajo original.
