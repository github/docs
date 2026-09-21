---
title: Configuring a remote repository for a fork
intro: 'Set up a remote pointing to the upstream repository in Git to sync changes between your fork and the original repository.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /articles/configuring-a-remote-for-a-fork
  - /github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Configure a remote repository
category:
  - Work with forks
contentType: how-tos
---
1. Open your terminal or Git Bash.
1. List the remotes currently configured for your fork.

   ```shell
   $ git remote -v
   > origin  https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin  https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (push)
   ```

1. Add a new remote named _upstream_ that points to the original repository.

   ```shell
   git remote add upstream https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git
   ```

1. Verify the new upstream repository that you specified for your fork.

   ```shell
   $ git remote -v
   > origin    https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin    https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (push)
   > upstream  https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
   > upstream  https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
   ```
