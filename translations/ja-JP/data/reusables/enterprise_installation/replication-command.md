1. データストアのレプリケーションを開始するには、`ghe-repl-start`コマンドを使ってください。
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **警告：** `ghe-repl-start`を使うとプライマリサーバーは短期間利用できなくなり、その間ユーザにはinternal server errorが返されます。 もっと親切なメッセージを提供するには、`ghe-repl-start`をレプリカノードで実行する前にプライマリノード上で`ghe-maintenance -s`を実行し、アプライアンスをメンテナンスモードにしてください。 レプリケーションを開始したら、`ghe-maintenance -u`でメンテナンスモードを無効化してください。

    {% endwarning %}
