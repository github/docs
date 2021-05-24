---
title: 镜像仓库
intro: 要镜像存储库而不对其进行复刻，可以运行特殊克隆命令，然后镜像推送到新仓库。
redirect_from:
  - /articles/duplicating-a-repo/
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
在复制仓库和和推送到仓库的新副本或_镜像_之前，必须在 {% data variables.product.product_location %} 上[创建新仓库](/articles/creating-a-new-repository)。 在以下示例中，`exampleuser/new-repository` 或 `exampleuser/mirrored` 是镜像。

### 镜像仓库

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸克隆。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. 镜像推送至新仓库。
  ```shell
  $ cd <em>old-repository</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. 删除您之前创建的临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

### 镜像包含 {% data variables.large_files.product_name_long %} 对象的仓库。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸克隆。 将示例用户名替换为拥有仓库的个人或组织的名称，并将示例仓库名称替换为要复制的仓库的名称。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. 导航到刚克隆的仓库。
  ```shell
  $ cd <em>old-repository</em>
  ```
4. 拉取仓库的 {% data variables.large_files.product_name_long %} 对象。
  ```shell
  $ git lfs fetch --all
  ```
5. 镜像推送至新仓库。
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. 将仓库的 {% data variables.large_files.product_name_long %} 对象推送至镜像。
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. 删除您之前创建的临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

### 镜像其他位置的仓库

如果要镜像其他位置的仓库，包括从原始位置获取更新，可以克隆镜像并定期推送更改。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸镜像克隆。
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. 设置到镜像的推送位置。
  ```shell
  $ cd <em>repository-to-mirror</em>
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```

与裸克隆一样，镜像的克隆包括所有远程分支和标记，但每次获取时都会覆盖所有本地引用，因此它始终与原始仓库相同。 设置推送 URL 可简化至镜像的推送。 如需更新镜像，请获取更新和推送。

```shell
$ git fetch -p origin
$ git push --mirror
```
