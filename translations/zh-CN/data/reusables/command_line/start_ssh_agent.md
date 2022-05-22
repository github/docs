1. 在后台启动 ssh 代理。

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    根据您的环境，您可能需要使用不同的命令。 例如，您可能需要在启动 ssh 代理之前运行 `sudo-s-H` 来使用根访问，或者您可能需要使用 `exec ssh-agent bash` 或 `exec ssh-agent zsh` 来运行 ssh-agent。
