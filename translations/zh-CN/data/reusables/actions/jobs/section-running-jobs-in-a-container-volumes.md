使用 `jobs.<job_id>.container.volumes` 设置卷 `array` 供容器使用。 您可以使用卷分享作业中服务或其他步骤之间的数据。 可以指定命名的 Docker 卷、匿名的 Docker 卷或主机上的绑定挂载。

要指定卷，需指定来源和目标路径：

`<source>:<destinationPath>`.

`<source>` 是主机上的卷名称或绝对路径，`<destinationPath>` 是容器中的绝对路径。

#### 示例：在容器中装入卷

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
