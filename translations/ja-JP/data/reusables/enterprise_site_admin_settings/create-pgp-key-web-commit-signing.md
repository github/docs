1. 管理シェルでPGPキーを作成してください。 メールアドレスとキーIDをメモしてください。

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```

    - デフォルトのキータイプと、有効期限のない最小`4096`ビット長を使用してください。
    - ユーザ名として`web-flow`を使ってください。 
