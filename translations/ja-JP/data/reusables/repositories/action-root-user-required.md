**ノート：** {% data variables.product.prodname_actions %}はデフォルトのDockerユーザ（root）で実行しなければなりません。 Dockerfileで`USER`命令が設定されていないことを確認してください。使われていた場合には、`GITHUB_WORKSPACE`にアクセスできなくなります。
