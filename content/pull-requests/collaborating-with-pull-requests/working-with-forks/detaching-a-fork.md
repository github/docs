---
title: Detaching a fork
intro: You can delete a fork and recreate the same repository, without the connection to the original network.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
topics:
  - Pull requests
permissions: People with admin access for a forked repository can delete the forked repository.
---

To turn your fork into a standalone repository, you can clone the fork, use the clone to create a new repository, and then delete the fork. The new repository will no longer automatically sync with changes from the original repository. This is useful when you want to take the work you are doing in a different direction or maintain distinct versions.

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
   git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/FORK-NAME.git
   ```

1. Delete the forked repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)."<br><br>

   {% warning %}

   **Warning**: Deleting a fork will **permanently** delete any associated pull requests and configurations. This action **cannot** be undone.

   {% endwarning %}

1. Create a new repository with the same name in the same location. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. Mirror-push the repository back to the same remote URL.

   ```shell
   git push --mirror https://github.com/EXAMPLE-USER/FORK-NAME.git
   ```

1. Remove temporary local clone you created earlier.

   ```shell
   cd ..
   rm -rf FORK-NAME.git
   ```
