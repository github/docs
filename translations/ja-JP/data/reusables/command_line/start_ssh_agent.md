1. バックグラウンドでssh-agentを開始します。

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    環境によっては、異なるコマンドを使う必要があるかもしれません。 たとえば、ssh-agentを開始する前に`sudo -s -H` を実行してルートアクセスを使わなければならないかもしれず、あるいはssh-agentを実行するのに`exec ssh-agent bash`あるいは`exec ssh-agent zsh`を実行しなければならないかもしれません。
