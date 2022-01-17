Este evento ocurre cuando una ejecución de flujo de trabajo se solicita o se completa, y te permite ejecutar un flujo de trabajo con base en el resultado terminado de otro flujo de trabajo. Una ejecución de flujo de trabajo se activa sin importar el resultado del flujo de trabajo anterior.

Por ejemplo, si tu flujo de trabajo de `pull_request` genera artefactos de compilación, puedes crear un nuevo flujo de trabajo que utilice a `workflow_run` para analizar los resultados y agregar un comentario la solicitud de extracción original.

El flujo de trabajo que inició el evento `workflow_run` puede acceder a secretos y tokens de escritura, incluso si el flujo de trabajo anterior no podía hacerlo. Esto es útil en los casos en que el flujo de trabajo anterior no tiene privilegios intencionalmente, pero necesitas tomar una acción que requiere de privilegios en un flujo de trabajo subsecuente.
