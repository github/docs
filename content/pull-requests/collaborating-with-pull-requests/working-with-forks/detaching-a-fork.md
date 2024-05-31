---
title: Detaching a fork
intro: You can delete a fork and recreate the same repository, without the connection to the original network.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with admin access for a forked repository can delete the forked repository.
---

## About detaching forks

To turn your fork into a standalone repository, you can clone the fork, use the clone to create a new repository, and then delete the fork. This is useful when you want to take the work you are doing in a different direction or maintain distinct versions.

The new repository will no longer automatically sync with changes from the original repository.

{% note %}

**Notes:**

- The new repository will not retain any of its issues, pull requests, wikis, stars, watchers, comments, child forks, or other metadata that may currently be associated with your current fork.
- All commit metadata will be preserved. Commits may become eligible to be counted as contributions, if they meet certain criteria. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)."

{% endnote %}

{% ifversion ghes %}

{% note %}

**Note:** If you are unable to detach a fork, contact your site administrator.

{% endnote %}

{% endif %}

## Detaching a fork

You can delete a fork and recreate the same repository, without the connection to the original network.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Create a bare clone of the fork.

   ```shell
   git clone --bare https://{% data variables.product.product_url %}/EXAMPLE-USER/FORK-NAME.git
   ```

1. Delete the forked repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)."<br><br>

   {% warning %}

   **Warning**: Deleting a fork will **permanently** delete any associated pull requests and configurations. This action **cannot** be undone.

   {% endwarning %}

1. Create a new repository with the same name in the same location. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. Mirror-push the repository back to the same remote URL.

   ```shell
   cd FORK-NAME.git
   git push --mirror https://github.com/EXAMPLE-USER/FORK-NAME.git
   ```

1. Remove temporary local clone you created earlier.

   ```shell
   cd ..
   rm -rf FORK-NAME.git
   ```

For more information, see [our support page](https://support.github.com/request/fork) on forks.
