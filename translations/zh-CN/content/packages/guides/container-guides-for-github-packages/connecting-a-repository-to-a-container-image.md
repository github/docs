---
title: 将仓库连接到容器映像
intro: '您可以在本地以及 {% data variables.product.prodname_dotcom %} 上链接仓库与容器映像。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  free-pro-team: '*'
---
在链接容器映像与仓库时，软件包登录页面将显示来自仓库的信息和链接，例如 README。

要在 {% data variables.product.prodname_dotcom %} 上连接仓库和容器映像，它们必须在 {% data variables.product.prodname_dotcom %} 上共用同一个所有者。 例如，`my_repo` 和 `hello_docker` 都归用户 `monalisa` 所有：
```shell
https://github.com/monalisa/my_repo
https://github.com/monalisa/hello_docker
```

### 将仓库连接到 {% data variables.product.prodname_dotcom %} 上用户拥有的容器映像

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

### 将仓库连接到 {% data variables.product.prodname_dotcom %} 上组织拥有的容器映像

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

### 将仓库连接到命令行上的容器映像

1. 在 Dockerfile 中添加此行，将 `OWNER` 和 `REPO` 替换为您的详细信息：

 ```shell
 LABEL org.opencontainers.image.source=https://github.com/<em>OWNER</em>/<em>REPO</em>
 ```
 例如，如果您是用户 `monalisa` 并且拥有 `my-repo`，您会将此行添加到 Dockerfile：
 ```shell
 LABEL org.opencontainers.image.source=https://github.com/monalisa/my-repo
 ```
 更多信息请参阅官方 Docker 文档中的“[LABEL](https://docs.docker.com/engine/reference/builder/#label)”，以及 `opencontainers/image-spec` 仓库中的“[预定义的标注键](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)”。

2. 构建容器映像。 此示例从当前目录的 Dockerfile 构建映像，并分配映像名称 `hello_docker`。

  ```shell
  $ docker build -t hello_docker .
  ```
3. （可选）查看您想要标记的 Docker 映像的详细信息。
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. 使用所需的映像名称和托管目标标记 Docker 映像。
  ```shell
  $ docker tag IMAGE_NAME ghcr.io/OWNER/NEW_IMAGE_NAME:TAG
  ```
  例如：
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/monalisa/hello_docker:latest
  ```

5. 如果尚未进行身份验证，请

{% data variables.product.prodname_github_container_registry %}. 更多信息请参阅“[向 GitHub Container Registry 验证](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-github-container-registry)”。
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. 推送容器映像到 {% data variables.product.prodname_github_container_registry %}。
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:TAG
  ```
  例如：
  ```shell
  $ docker push ghcr.io/monalisa/hello_docker:latest
  ```
