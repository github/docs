Las colas de fusión para las solicitudes de cambio pueden incrementar la tasa en la cual pueden fusionarse las solicitudes de cambio en una rama predeterminada de "ocupados" mientras se aseguran de que pasen las verificaciones de la IC.

Las colas de fusión utilizan {% data variables.product.prodname_actions %}. Para obtener más información sobre las acciones, consulta la sección "[{% data variables.product.prodname_actions %}](/actions/)".

Una vez que una solicitud de cambio pasa cualquier verificación y aprobación requerida, un colaborador con acceso de escritura puede agregar la solicitud de cambios a la cola de fusión. La cola entonces crea una rama temporal con esa solicitud de cambios y con cualquiera de estas solicitudes que esté adelante de ella en la cola y activa cualquier verificación de integración continua (IC) requerida.
