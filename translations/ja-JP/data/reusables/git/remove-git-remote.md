1. コマンドラインを使って、リポジトリに現在設定されているGitリモートを削除してください。

  ```shell
  # 既存のリモートの表示
  $ git remote -v
  > origin  git@git-server/octocat/hello-world.git (fetch)
  > origin  git@git-server/octocat/hello-world.git (push)
  # 既存のリモートを削除
  $ git remote remove origin
  ```
