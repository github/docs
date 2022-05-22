1. Inicie o ssh-agent em segundo plano.

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Dependendo do seu ambiente, talvez seja necessário usar um comando diferente. Por exemplo, é possível que você tenha de usar o acesso raiz executando `sudo -s -H` antes de iniciar o ssh-agent, ou você pode ter de usar `exec ssh-agent bash` ou `exec ssh-agent zsh` para executar o ssh-agent.
