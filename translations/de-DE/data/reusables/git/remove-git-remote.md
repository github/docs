1. Mit Hilfe der Befehlszeile entfernst Du alle Git Remoteelemente, die derzeit für das Repository konfiguriert sind.

  ```shell
  # Zeige alle vorhandenen Remoteelemente
  $ git remote -v
  > origin  git@git-server/octocat/hello-world.git (fetch)
  > origin  git@git-server/octocat/hello-world.git (push)
  # entferne vorhandene Remoteelemente
  $ git remote remove origin
  ```
