1. 要开始复制数据存储，请使用 `ghe-repl-start` 命令。
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **警告：** `ghe-repl-start` 会导致主要服务器短暂中断，期间用户可能会看到内部服务器错误。 为提供更简便的消息，请在副本节点上运行 `ghe-repl-start` 之前，先在主要节点上运行 `ghe-maintenance -s`，使副本置于维护模式。 在复制开始后，使用 `ghe-maintenance -u` 禁用维护模式。

    {% endwarning %}
