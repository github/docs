---
title: 创建预接收挂钩脚本
intro: 使用预接收挂钩脚本创建基于内容来接受或拒绝推送的要求。
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
---

您可以在 [`github/platform-samples` 仓库](https://github.com/github/platform-samples/tree/master/pre-receive-hooks)中查看 {% data variables.product.prodname_ghe_server %} 的预接收挂钩示例。

### 编写预接收挂钩脚本
预接收挂钩脚本在 {% data variables.product.prodname_ghe_server %} 设备上的预接收挂钩环境中执行。 创建预接收挂钩脚本时，请考虑可用的输入、输出、exit-status 和环境变量。

#### 输入 (stdin)
在推送发生之后以及在远程仓库上更新任何 ref 之前，`git-receive-pack` 进程会调用预接收挂钩脚本，其中要更新的每个 ref 使用一行标准输入：

`<old-value> SP <new-value> SP <ref-name> LF`

此字符串表示以下参数：

| 参数                  | 描述                                                      |
|:------------------- |:------------------------------------------------------- |
| `<old-value>` | 存储在 `ref` 中的旧对象名称。<br>当您*创建*新的 `ref` 时，这等于 40 个零。 |
| `<new-value>` | 要存储在 `ref` 中的新对象名称。<br>当您*删除* `ref` 时，这等于 40 个零。  |
| `<ref-name>`  | `ref` 的全名。                                              |

关于 `git-receive-pack` 的更多信息，请参阅 Git 文档中的“[git-receive-pack](https://git-scm.com/docs/git-receive-pack)”。 关于 `ref` 的更多信息，请参阅 *Pro Git* 中的“[Git 引用](https://git-scm.com/book/en/v2/Git-Internals-Git-References)”。

#### 输出 (stdout)

脚本输出 (`stdout`) 将传递回客户端，因此用户可以在命令行或用户界面中看到任意 `echo` 语句。

#### Exit-status

预接收脚本的 `exit-status` 决定是否接受推送。

| Exit-status 值 |   操作   |
|:-------------:|:------:|
|       0       | 将接受推送。 |
|      非零       | 将拒绝推送。 |

#### 环境变量
除了提供给 `stdin` 的值以外，还有一些其他变量可用于在 {% data variables.product.prodname_ghe_server %} 上运行的预接收挂钩脚本。

| 变量                                    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $GITHUB_USER_LOGIN                  | 创建 `ref` 的用户 ID。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| $GIT_DIR                              | 设备上远程仓库的路径。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| $GITHUB_USER_IP                     | 执行推送的用户的 IP 地址。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| $GITHUB_REPO_NAME                   | 正在更新的仓库的 `owner`/`repo` 格式的名称。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| $GITHUB_PULL_REQUEST_AUTHOR_LOGIN | 在您的实例上打开的拉取请求的作者的用户 ID。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| $GITHUB_REPO_PUBLIC                 | 一个布尔值，为 `true` 时表示公共仓库，为 `false` 时表示私有仓库。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| $GITHUB_PUBLIC_KEY_FINGERPRINT      | 用户的公钥指纹。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| $GITHUB_PULL_REQUEST_HEAD           | 格式中的字符串：`user:branch`，适用于 PR 的 HEAD。<br>示例：`octocat:fix-bug`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| $GITHUB_PULL_REQUEST_BASE           | A string in the format: `user:branch` for the BASE of the PR.<br> Example: `octocat:main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| $GITHUB_VIA                           | 用于创建 ref 的方法。<br> **可选值：**<br> - `auto-merge deployment api` <br> - `blob edit` <br> - `branch merge api` <br> - `branches page delete button` <br> - `git refs create api` <br> - `git refs delete api` <br> - `git refs update api` <br> - `merge api` <br> - `pull request branch delete button` <br> - `pull request branch undo button` <br> - `pull request merge api` <br> - `pull request merge button` <br> - `pull request revert button` <br> - `releases delete button` <br> - `stafftools branch restore` <br> - `slumlord (#{sha})` |
| $GIT_PUSH_OPTION_COUNT              | 客户端发送的推送选项数。 关于推送选项的更多信息，请参阅 Git 文档中的“[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)”。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| $GIT_PUSH_OPTION_N                  | 其中 <em>N</em> 是一个从 0 开始的整数，此变量包含客户端发送的推送选项字符串。 发送的第一个选项存储在 GIT_PUSH_OPTION_0 中，发送的第二个选项存储在 GIT_PUSH_OPTION_1 中，依此类推。 关于推送选项的更多信息，请参阅 Git 文档中的“[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)”。 |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| $GIT_USER_AGENT                     | The user-agent string sent by the client that pushed the changes. |{% endif %}

### 设置权限并将预接收挂钩推送到 {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} 设备上的仓库中包含预接收挂钩脚本。 站点管理员必须考虑仓库权限，确保只有适当的用户才能访问。

我们建议将挂钩合并到单个仓库。 如果统一的挂钩仓库是公共的，则可以使用 `README.md` 来解释策略强制实施。 此外，也可以通过拉取请求接受贡献。 但是，只能从默认分支添加预接收挂钩。 对于测试工作流程，应使用具有配置的仓库的分支。

1. 对于 Mac 用户，确保脚本具有执行权限：

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
  ```
  对于 Windows 用户，确保脚本具有执行权限：

  ```shell
  git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
  ```

2. 提交并推送到 {% data variables.product.prodname_ghe_server %} 实例上指定的预接收挂钩仓库。

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
  ```

3. 在 {% data variables.product.prodname_ghe_server %} 实例上[创建预接收挂钩](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks)。

### 在本地测试预接收脚本
在 {% data variables.product.prodname_ghe_server %} 设备上创建或更新预接收挂钩脚本之前，您可以在本地对其进行测试。 一种方法是创建本地 Docker 环境以充当可以执行预接收挂钩的远程仓库。

{% data reusables.linux.ensure-docker %}

2. 创建一个名为 `Dockerfile.dev` 的文件，其中包含：

    ```
    FROM gliderlabs/alpine:3.3
    RUN \
      apk add --no-cache git openssh bash && \
      ssh-keygen -A && \
      sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
      adduser git -D -G root -h /home/git -s /bin/bash && \
      passwd -d git && \
      su git -c "mkdir /home/git/.ssh && \
      ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P '' && \
      mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && \
      mkdir /home/git/test.git && \
      git --bare init /home/git/test.git"

    VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
    WORKDIR /home/git

    CMD ["/usr/sbin/sshd", "-D"]
    ```

3. 创建一个名为 `always_reject.sh` 的测试预接收脚本。 此示例脚本将拒绝所有推送，这对于锁定仓库非常有用：

    ```
    #!/usr/bin/env bash

    echo "error: rejecting all pushes"
    exit 1
    ```

4. 确保 `always_reject.sh` 脚本具有执行权限：

   ```shell
   $ chmod +x always_reject.sh
  ```

5. 从包含 `Dockerfile.dev` 的目录中，构建一个镜像：

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P ' && mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private rsa key pair.
   > Your identification has been saved in /home/git/.ssh/id_rsa.
   > Your public key has been saved in /home/git/.ssh/id_rsa.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
  ```

6. 运行包含生成的 SSH 密钥的数据容器：

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
  ```

7. 将测试预接收挂钩 `always_reject.sh` 复制到数据容器中：

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
  ```

8. 启动一个运行 `sshd` 的应用程序容器并执行挂钩。 记下返回的容器 ID：

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
  ```

9. 将生成的 SSH 密钥从数据容器复制到本地计算机：

   ```shell
   $ docker cp data:/home/git/.ssh/id_rsa .
  ```

10. 修改远程测试仓库并将其推送到 Docker 容器中的 `test.git` 仓库。 此示例使用了 `git@github.com:octocat/Hello-World.git`，但您可以使用想要的任何仓库。 此示例假定您的本地计算机 (127.0.0.1) 绑定了端口 52311，但如果 docker 在远程计算机上运行，则可以使用不同的 IP 地址。

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_rsa" git push -u test master
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] master -> master (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
  ```

  请注意，在执行预接收挂钩并回显脚本中的输出后，将拒绝推送。

### 延伸阅读
 - 来自 *Pro Git 网站*的“[自定义 Git - Git 强制实施策略示例](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)”
