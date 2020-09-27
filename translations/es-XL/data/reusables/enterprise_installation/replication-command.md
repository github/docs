1. Para comenzar la replicación de las bases de datos, utiliza el comando `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Advertencia:** `ghe-repl-start` causa una breve interrupción en el servidor principal, durante la cual los usuarios pueden ver errores internos del servidor. Para proporcionar un mensaje más amigable, ejecuta `ghe-maintenance -s` en el nodo principal antes de ejecutar `ghe-repl-start` en el nodo réplica para poner la aplicación en modo de mantenimiento. Una vez que se inicie la replicación, deshabilita el modo de mantenimiento con `ghe-maintenance -u`.

    {% endwarning %}
