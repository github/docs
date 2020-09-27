1. 使用命令行，删除当前为仓库配置的任何 Git 远程。

  ```shell
  # Show existing remotes
  $ git remote -v
  > origin  git@git-server/octocat/hello-world.git (fetch)
  > origin  git@git-server/octocat/hello-world.git (push)
  # Remove existing remotes
  $ git remote remove origin
  ```
