---
title: Subversion 客户端支持
intro: GitHub 仓库可从 Git 和 Subversion (SVN) 客户端进行访问。 本文介绍如何在 GitHub 上使用 Subversion 客户端以及您可能遇到的一些常见问题。
redirect_from:
  - /articles/support-for-subversion-clients
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub 通过 HTTPS 协议支持 Subversion 客户端。 我们使用 Subversion 网桥将 svn 命令传递给 GitHub。

### GitHub 上支持的 Subversion 功能

#### 检出

您首先要进行 Subversion 检出。  由于 Git 克隆将工作目录（您编辑文件的位置）与仓库数据分开，因此工作目录中一次只有一个分支。

Subversion 检出则不同：它们混合工作目录中的仓库数据，因此存在用于您已检出的每个分支和标记的工作目录。  对于具有许多分支和标记的仓库，检出所有内容可能会造成带宽负担，因此应从部分检出开始。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}

3. 进行仓库的空检出：
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. 获取 `trunk` 分支。 The Subversion bridge maps trunk to the Git HEAD branch.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. 获取 `branches` 目录的空检出。  这是所有非 `HEAD` 分支所在的位置，您将在此处进行功能分支。
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

#### 创建分支

您还可以使用到 GitHub 的 Subversion 网桥创建分支。

从 svn 客户端更新 `trunk`，以确保 "master" 是最新的：
```shell
$ svn up trunk
> At revision 1.
```

接下来，您可以使用 `svn copy` 创建新分支：
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

您可以在仓库的分支下拉菜单中确认存在新分支：

![分支快照](/assets/images/help/branch/svnflow-branch-snapshot.png)

您还可以通过命令行确认新分支：

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

#### 对 Subversion 进行提交

添加一些功能并修复一些漏洞后，您想要将这些更改提交到 GitHub。 此工作正如您惯用的 Subversion 一样。 编辑文件，然后使用 `svn commit` 记录您的更改：

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

#### 在分支间切换

要在分支之间切换，您可能想要从 `trunk` 的检出开始：

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

然后，您可以切换到另一个分支：

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

### 为 Subversion 提交查找 Git 提交 SHA

GitHub 的 Subversion 服务器公开每个 Subversion 提交的 Git 提交 sha。

要查看提交 SHA，应请求 `git-commit` 未版本化的远程属性。

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

使用此提交 SHA，举例来说，您可以在 GitHub 上查找相应的 Git 提交。

### 延伸阅读

* “[GitHub 支持的 Subversion 属性](/articles/subversion-properties-supported-by-github)”
