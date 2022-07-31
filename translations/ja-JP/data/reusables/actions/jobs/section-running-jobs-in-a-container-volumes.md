`jobs.<job_id>.container.volumes`を使って、コンテナが使用するボリュームの`配列`を設定してください。 volumes (ボリューム) を使用すると、サービス間で、または1つのジョブのステップ間でデータを共有できます。 指定できるのは、名前付きDockerボリューム、匿名Dockerボリューム、またはホスト上のバインドマウントです。

ボリュームを指定するには、ソースパスとターゲットパスを指定してください。

`<source>:<destinationPath>`.

`<source>`は、ホストマシン上のボリューム名または絶対パス、`<destinationPath>`はコンテナでの絶対パスです。

#### 例: コンテナでのボリュームのマウント

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
