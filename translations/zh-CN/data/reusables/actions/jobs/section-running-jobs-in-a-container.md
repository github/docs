使用 `jobs.<job_id>.container` 创建一个容器，以在尚未指定容器的作业中运行任何步骤。 如有步骤同时使用脚本和容器操作，则容器操作将运行为同一网络上使用相同卷挂载的同级容器。

若不设置 `container`，所有步骤将直接在 `runs-on` 指定的主机上运行，除非步骤引用已配置为在容器中运行的操作。

### 示例：在容器中运行作业

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

只指定容器映像时，可以忽略 `image` 关键词。

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
