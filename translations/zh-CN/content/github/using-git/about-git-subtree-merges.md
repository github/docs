---
title: 关于 Git 子树合并
redirect_from:
  - /articles/working-with-subtree-merge/
  - /subtree-merge/
  - /articles/about-git-subtree-merges
intro: '如果需要管理单一仓库中的多个项目，可以使用*子树合并*来处理所有引用。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

通常，子树合并用于在仓库中包含仓库。 “子仓库”存储在主仓库的文件夹中。

解释子树合并的最佳方式是举例说明。 我们将：

- 创建一个名为 `test` 的空仓库，表示我们的项目
- 将另一个仓库 `Spoon-Knife` 作为子树合并到其中。
- 如果该子项目属于同一仓库，`test` 项目会使用它。
- 从 `Spoon-Knife` 提取更新到 `test` 项目。

### 创建用于子树合并的空仓库

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建一个新目录并找到它。
  ```shell
  $ mkdir test
  $ cd test
  ```
3. 初始化新的 Git 仓库。
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. 创建并提交新文件。
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

### 新增一个仓库为子树

1. 新增指向我们感兴趣的单独项目的远程 URL。
  ```shell
  $ git remote add -f spoon-knife git@github.com:octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From git://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. 将 `Spon-Knife` 项目合并到当地 Git 项目。 这不会在本地更改任何文件，但会为下一步准备 Git。

  如果您使用的是 Git 2.9 或更高版本：
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  如果您使用的是 Git 2.8 或更低版本：
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. 创建新目录 **spoon-knife** 并将 `Spoon-Knife` 项目的 Git 历史记录复制到其中。
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. 提交更改以确保其安全。
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

虽然我们只添加了一个子项目，但是可在 Git 仓库中加入任意数量的子项目。

{% tip %}

**提示**：如果以后创建仓库的全新克隆，不会为您创建您添加的远程 Url。 您需要再次使用 [the `git remote add` 命令添加它们](/articles/adding-a-remote)。

{% endtip %}

### 同步更新和更改

添加子项目时，它不会自动与上游更改保持同步。 您需要使用以下命令更新子项目：

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

对于上述示例，将是：

```shell
$ git pull -s subtree spoon-knife main
```

### 延伸阅读

- [_Pro Git_ 书籍中的“子树合并”一章](https://git-scm.com/book/en/Git-Tools-Subtree-Merging)
- "[如何使用子树合并策略](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)"
