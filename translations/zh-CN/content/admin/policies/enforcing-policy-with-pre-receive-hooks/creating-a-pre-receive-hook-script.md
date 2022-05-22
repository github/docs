---
title: 创建预接收挂钩脚本
intro: 使用预接收挂钩脚本创建基于内容来接受或拒绝推送的要求。
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---
您可以在 [`github/platform-samples` 仓库](https://github.com/github/platform-samples/tree/master/pre-receive-hooks)中查看 {% data variables.product.prodname_ghe_server %} 的预接收挂钩示例。

### 编写预接收挂钩脚本
预接收挂钩脚本在 {% data variables.product.product_location %} 上的预接收挂钩环境中执行。 创建预接收挂钩脚本时，请考虑可用的输入、输出、退出状态和环境变量。

#### 输入 (`stdin`)
推送发生后，在为远程仓库更新任何引用之前，在 {% data variables.product.product_location %} 上的 `git-receive-pack` 进程将调用预接收挂钩脚本。 脚本 `stdin` 的标准输入是一个字符串，对每个要更新的 ref 包含一行。 每行都包含 ref 的旧对象名称、引用的新对象名称和 ref 的全名。

```
<old-value> SP <new-value> SP <ref-name> LF
```

此字符串表示以下参数。

| 参数                  | 描述                                               |
|:------------------- |:------------------------------------------------ |
| `<old-value>` | 存储在 ref 中的旧对象名称。<br>当您创建新的 ref 时，值是 40 个零。 |
| `<new-value>` | 要存储在 ref 中的新对象名称。<br>当您删除 ref 时，值是 40 个零。  |
| `<ref-name>`  | ref 的全名。                                         |

有关 `git-receive-pack` 的更多信息，请参阅 Git 文档中的“[git-receive-pack](https://git-scm.com/docs/git-receive-pack)”。 有关 ref 的更多信息，请参阅 *Pro Git* 中的“[Git 引用](https://git-scm.com/book/en/v2/Git-Internals-Git-References)”。

#### 输出 (`stdout`)

脚本 `stdout` 的标准输出传回客户端。 任何 `echo` 语句将在命令行或用户界面上对用户可见。

#### 退出状态

预接收脚本的退出状态决定是否接受推送。

| Exit-status 值 | 操作     |
|:------------- |:------ |
| 0             | 将接受推送。 |
| 非零            | 将拒绝推送。 |

#### 环境变量

除了预接收挂钩脚本 `stdin` 的标准输入外，，{% data variables.product.prodname_ghe_server %} 在 Bash 环境中为您的脚本执行提供以下变量。 有关预接收钩脚本 `stdin` 的更多信息，请参阅“[输入 (`stdin`)](#input-stdin)”。

预接收挂钩脚本可使用不同的环境变量，具体取决于触发脚本运行的因素。

- [始终可用](#always-available)
- [可用于从 Web 界面或 API 推送](#available-for-pushes-from-the-web-interface-or-api)
- [可用于拉取请求合并](#available-for-pull-request-merges)
- [可用于使用 SSH 身份验证的推送](#available-for-pushes-using-ssh-authentication)

##### 始终可用

以下变量在预接收挂钩环境中始终可用。

| 变量                        | 描述                                                                                                                                                                                                                          | 示例值                                                                |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------ |
| <pre>$GIT_DIR</pre> | 实例上远程仓库的路径                                                                                                                                                                                                                  | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
| <pre>$GIT_PUSH_OPTION_COUNT</pre> | 由客户端使用 `--pub-option` 发送的推送选项数量。 更多信息请参阅 Git 文档中的“[git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt)”。                                                                        | 1                                                                  |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | 其中 _N_ 是一个从 0 开始的整数，此变量包含客户端发送的推送选项字符串。 发送的第一个选项存储在 `GIT_PUSH_OPTION_0` 中，发送的第二个选项存储在 `GIT_PUSH_OPTION_1` 中，依此类推。 关于推送选项的更多信息，请参阅 Git 文档中的“[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)”。 | abcd |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| <pre>$GIT_USER_AGENT</pre> | 推送更改的 Git 客户端发送的 user-agent 字符串。                                                                                                                                                                                            | git/2.0.0{% endif %}
| <pre>$GITHUB_REPO_NAME</pre> | 以 _NAME_/_OWNER_ 格式更新的仓库名称                                                                                                                                                                                                  | octo-org/hello-enterprise                                          |
| <pre>$GITHUB_REPO_PUBLIC</pre> | 表示更新的仓库是否公开的布尔值                                                                                                                                                                                                             | <ul><li>true：仓库的可见性是公开的</li><li>false：仓库的可见性是私密或内部的</li></ul>                                          |
| <pre>$GITHUB_USER_IP</pre> | 发起推送的客户端 IP 地址                                                                                                                                                                                                              | 192.0.2.1                                                          |
| <pre>$GITHUB_USER_LOGIN</pre> | 发起推送的帐户的用户名                                                                                                                                                                                                                 | octocat                                                            |

##### 可用于从 Web 界面或 API 推送

当触发挂钩的 ref 更新通过 {% data variables.product.prodname_ghe_server %} 的 Web 界面或 API 进行时，`$GITHUB_VIA` 变量可用于预接收挂钩环境。 该值描述了更新 ref 的操作。

| 值                          | 操作                                            | 更多信息                                                                                                                                              |
|:-------------------------- |:--------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>auto-merge deployment api</pre>  | 通过 API 创建的部署自动合并基础分支                          | REST API 文档中的“[仓库](/rest/reference/repos#create-a-deployment)”                                                                                    |
| <pre>blob edit</pre> | 在 Web 界面中更改文件的内容                              | "[编辑仓库中的文件](/github/managing-files-in-a-repository/editing-files-in-your-repository)"                                                             |
| <pre>branch merge api</pre> | 通过 API 合并分支                                   | REST API 文档中的“[仓库](/rest/reference/repos#merge-a-branch)”                                                                                         |
| <pre>branches page delete button</pre> | 在 Web 界面中删除分支                                 | “[在仓库内创建和删除分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”      |
| <pre>git refs create api</pre> | 通过 API 创建 ref                                 | REST API 文档中的“[Git 数据库](/rest/reference/git#create-a-reference)”                                                                                  |
| <pre>git refs delete api</pre> | 通过 API 删除 ref                                 | REST API 文档中的“[Git 数据库](/rest/reference/git#delete-a-reference)”                                                                                  |
| <pre>git refs update api</pre> | 通过 API 更新 ref                                 | REST API 文档中的“[Git 数据库](/rest/reference/git#update-a-reference)”                                                                                  |
| <pre>git repo contents api</pre> | 通过 API 更改文件的内容                                | REST API 文档中的“[仓库](/rest/reference/repos#create-or-update-file-contents)”                                                                         |
| <pre>merge base into head</pre> | 当基础分支需要严格的状态检查时，从基础分支更新主题分支（通过拉取请求中的**更新分支**） | "[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)"                                     |
| <pre>pull request branch delete button</pre> | 在 Web 界面中从拉取请求中删除主题分支                         | "[删除和恢复拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)" |
| <pre>pull request branch undo button</pre> | 在 Web 界面中从拉取请求中恢复主题分支                         | "[删除和恢复拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch)"                |
| <pre>pull request merge api</pre> | 通过 API 合并拉取请求                                 | REST API 文档中的“[拉取](/rest/reference/pulls#merge-a-pull-request)”                                                                                   |
| <pre>pull request merge button</pre> | Web 界面中拉取请求的合并                                | "[合并拉取请求](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github)"                           |
| <pre>拉取请求还原按钮</pre> | 还原拉取请求                                        | "[接收拉取请求](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request)"                                                          |
| <pre>releases delete button</pre> | 删除发行版                                         | “[管理仓库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release)”                                            |
| <pre>stafftools branch restore</pre> | 从站点管理员仪表板中还原分支                                | "[站点管理员仪表板](/admin/configuration/site-admin-dashboard#repositories)"                                                                              |
| <pre>tag create api</pre> | 通过 API 创建标签                                   | REST API 文档中的“[Git 数据库](/rest/reference/git#create-a-tag-object)”                                                                                 |
| <pre>slumlord (#<em>SHA</em>)</pre> | 通过 Subversion 提交                              | "[支持 Subversion 客户端](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion)"                      |
| <pre>web branch create</pre> | 通过 Web 界面创建分支                                 | “[在仓库内创建和删除分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)”      |

##### 可用于拉取请求合并

当触发挂钩的推送由于拉取请求请求合并而成为推送时，以下变量在预接收挂钩环境中可用。

| 变量                         | 描述                                 | 示例值                          |
|:-------------------------- |:---------------------------------- |:---------------------------- |
| <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | 编写拉取请求的帐户的用户名                      | octocat                      |
| <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | 拉取请求的主题分支的名称，格式为 `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
| <pre>$GITHUB_PULL_REQUEST_BASE</pre> | 拉取请求的基础分支的名称，格式为 `USERNAME:BRANCH` | octocat:main                 |

##### 可用于使用 SSH 身份验证的推送

| 变量                         | 描述           | 示例值                                             |
|:-------------------------- |:------------ |:----------------------------------------------- |
| <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | 推送更改的用户的公钥指纹 | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

### 设置权限并将预接收挂钩推送到 {% data variables.product.prodname_ghe_server %}

{% data variables.product.product_location %} 上的仓库中包含预接收挂钩脚本。 站点管理员必须考虑仓库权限，确保只有适当的用户才能访问。

我们建议将挂钩合并到单个仓库。 如果统一的挂钩仓库是公共的，则可以使用 `README.md` 来解释策略强制实施。 此外，也可以通过拉取请求接受贡献。 但是，只能从默认分支添加预接收挂钩。 对于测试工作流程，应使用具有配置的仓库的分支。

1. 对于 Mac 用户，确保脚本具有执行权限：

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   对于 Windows 用户，确保脚本具有执行权限：

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. 在 {% data variables.product.product_location %} 提交并推送到指定的预接收挂钩仓库。

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. 在 {% data variables.product.prodname_ghe_server %} 实例上[创建预接收挂钩](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks)。

### 在本地测试预接收脚本
在 {% data variables.product.product_location %} 上创建或更新预接收挂钩脚本之前，您可以在本地对其进行测试。 一种方法是创建本地 Docker 环境以充当可以执行预接收挂钩的远程仓库。

{% data reusables.linux.ensure-docker %}

2. 创建一个名为 `Dockerfile.dev` 的文件，其中包含：

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
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
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
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
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. 修改远程测试仓库并将其推送到 Docker 容器中的 `test.git` 仓库。 此示例使用了 `git@github.com:octocat/Hello-World.git`，但您可以使用想要的任何仓库。 此示例假定您的本地计算机 (127.0.0.1) 绑定了端口 52311，但如果 docker 在远程计算机上运行，则可以使用不同的 IP 地址。

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   请注意，在执行预接收挂钩并回显脚本中的输出后，将拒绝推送。

### 延伸阅读
 - 来自 *Pro Git 网站*的“[自定义 Git - Git 强制实施策略示例](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)”
