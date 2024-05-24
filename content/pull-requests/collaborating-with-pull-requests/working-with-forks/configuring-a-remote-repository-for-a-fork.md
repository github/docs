---
title: Configuring a remote repository for a fork
intro: 'You must configure a remote that points to the upstream repository in Git to [sync changes you make in a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) with the original repository. This also allows you to sync changes made in the original repository with the fork.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /articles/configuring-a-remote-for-a-fork
  - /github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Configure a remote repository
---
{% data reusables.command_line.open_the_multi_os_terminal %}
1. List the current configured remote repository for your fork.

   ```shell
   $ git remote -v
   > origin  https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin  https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (push)
   ```

1. Specify a new remote _upstream_ repository that will be synced with the fork.

   ```shell
   git remote add upstream https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git
   ```

1. Verify the new upstream repository you've specified for your fork.

   ```shell
   $ git remote -v
   > origin    https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin    https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (push)
   > upstream  https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
   > upstream  https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
   ```
