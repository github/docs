---
title: 创建预接收挂钩环境
intro: '要执行预接收挂钩，请使用默认的预接收环境，或者创建自定义环境。'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
versions:
  enterprise-server: '*'
topics:
  - 企业
---

{% data variables.product.prodname_ghe_server %} 的预接收环境是 Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot) 环境。 由于预接收挂钩会在每个推送事件上执行，因此它们应该快速且轻量化。 这类检查需要的环境通常极少。

{% data variables.product.prodname_ghe_server %} 提供了一个默认环境，其中包括以下包：`awk`、`bash`、`coreutils`、`curl`、`find`、`gnupg`、`grep`、`jq`、`sed`。

如果您具有此环境未满足的特定要求（例如对特定语言的支持），则可以创建并上传您自己的 64 位 Linux `chroot` 环境。

### 使用 Docker 创建预接收挂钩环境

您可以使用 Linux 容器管理工具来构建预接收挂钩环境。 此示例使用 [Alpine Linux](http://www.alpinelinux.org/) 和 [Docker](https://www.docker.com/)。

{% data reusables.linux.ensure-docker %}
2. 创建包含此信息的文件 `Dockerfile.alpine-3.3`：

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. 从包含 `Dockerfile.dev` 的工作目录中，构建一个镜像：

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```
4. 创建一个容器：

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. 将 Docker 容器导出到 `gzip` 压缩的 `tar` 文件：

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   此文件 `alpine-3.3.tar.gz` 已准备好上传到 {% data variables.product.prodname_ghe_server %} 设备。

### 使用 chroot 创建预接收挂钩环境

1. 创建 Linux `chroot` 环境。
2. 创建 `chroot` 目录的 `gzip` 压缩 `tar` 文件：
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **注意：**
   - 不要在 tar 存档中包含文件的主目录路径，如 `/path/to/chroot`。
   - `/bin/sh` 必须存在并且可执行，作为 chroot 环境的入口点。
   - 与传统的 chroot 不同，预接收挂钩的 chroot 环境不需要 `dev` 目录。

   {% endnote %}

关于创建 chroot 环境的更多信息，请参阅 *Debian Wiki* 中的“[Chroot](https://wiki.debian.org/chroot)”、*Ubuntu 社区帮助 Wiki* 中的“[BasicChroot](https://help.ubuntu.com/community/BasicChroot)”，或者 *Alpine Linux Wiki* 中的“[在 chroot 中安装 Alpine Linux](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)”。

### 在 {% data variables.product.prodname_ghe_server %} 上上传预接收挂钩环境

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 单击 **Manage environments**。 ![管理环境](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. 单击 **Add environment**。 ![添加环境](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. 在 **Environment name** 字段中输入所需的名称。 ![环境名称](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. 输入包含您的环境的 `* .tar.gz` 文件的 URL。 ![从 URL 上传环境](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. 单击 **Add environment**。 ![Add environment 按钮](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

### 通过管理 shell 上传预接收挂钩环境
1. 将包含您的环境的可读 `* .tar.gz` 文件上传到 web 主机并复制 URL 或通过 `scp` 将文件传送到 {% data variables.product.prodname_ghe_server %} 设备。 使用 `scp` 时，您可能需要调整 `* .tar.gz` 文件权限，以使该文件全局可读。
1.  连接到管理 shell。
2.  使用 `ghe-hook-env-create` 命令并输入所需的环境名称作为第一个参数，然后将包含环境的 `* .tar.gz` 文件的完整本地路径或 URL 作为第二个参数。

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
