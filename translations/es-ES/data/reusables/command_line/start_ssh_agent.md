1. Inicia el agente SSH en segundo plano.

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Dependiendo de tu ambiente, puede que necesites utilizar un comando diferente. Por ejemplo, puede que necesites utilizar acceso de raíz ejecutando `sudo -s -H` antes de iniciar el ssh-agent, o puede que necesites utilizar `exec ssh-agent bash` o `exec ssh-agent zsh` para ejecutar el ssh-agent.
