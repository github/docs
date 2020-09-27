1. インスタンスが完全に再起動し、アクセスできるようになったら、SSH の管理シェルを使って新しいリソース構成が認識されていることを確認してください:
```shell
$ ssh -p 122 admin@<em>HOSTNAME</em>
$ ghe-system-info
```
