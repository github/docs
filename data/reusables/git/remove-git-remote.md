1. Using the command line, remove any git remotes currently configured for the repository.

   ```shell
   # Show existing remotes
   $ git remote -v
   > origin	git@git-server/octocat/hello-world.git (fetch)
   > origin	git@git-server/octocat/hello-world.git (push)
   # Remove existing remotes
   $ git remote remove origin
   ```
