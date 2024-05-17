---
title: Duplicating a repository
intro: 'To maintain a mirror of a repository without forking it, you can run a special clone command, then mirror-push to the new repository.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---
{% ifversion fpt or ghec %}

{% note %}

**Note:** If you have a project hosted on another Git-based hosting service, you can automatically import your project to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_importer %} tool. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-github-importer/about-github-importer)."

{% endnote %}

{% endif %}

Before you can push the original repository to your new copy, or _mirror_, of the repository, you must [create the new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) on {% data variables.location.product_location %}. In these examples, `exampleuser/new-repository` or `exampleuser/mirrored` are the mirrors.

## Mirroring a repository

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Create a bare clone of the repository.

   ```shell
   git clone --bare https://{% data variables.product.product_url %}/EXAMPLE-USER/OLD-REPOSITORY.git
   ```

1. Mirror-push to the new repository.

   ```shell
   cd OLD-REPOSITORY.git
   git push --mirror https://{% data variables.product.product_url %}/EXAMPLE-USER/NEW-REPOSITORY.git
   ```

1. Remove the temporary local repository you created earlier.

   ```shell
   cd ..
   rm -rf OLD-REPOSITORY.git
   ```

## Mirroring a repository that contains {% data variables.large_files.product_name_long %} objects

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Create a bare clone of the repository. Replace the example username with the name of the person or organization who owns the repository, and replace the example repository name with the name of the repository you'd like to duplicate.

   ```shell
   git clone --bare https://{% data variables.product.product_url %}/EXAMPLE-USER/OLD-REPOSITORY.git
   ```

1. Navigate to the repository you just cloned.

   ```shell
   cd OLD-REPOSITORY.git
   ```

1. Pull in the repository's {% data variables.large_files.product_name_long %} objects.

   ```shell
   git lfs fetch --all
   ```

1. Mirror-push to the new repository.

   ```shell
   git push --mirror https://{% data variables.product.product_url %}/EXAMPLE-USER/NEW-REPOSITORY.git
   ```

1. Push the repository's {% data variables.large_files.product_name_long %} objects to your mirror.

   ```shell
   git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
   ```

1. Remove the temporary local repository you created earlier.

   ```shell
   cd ..
   rm -rf OLD-REPOSITORY.git
   ```

## Mirroring a repository in another location

If you want to mirror a repository in another location, including getting updates from the original, you can clone a mirror and periodically push the changes.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Create a bare mirrored clone of the repository.

   ```shell
   git clone --mirror https://{% data variables.product.product_url %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
   ```

1. Set the push location to your mirror.

   ```shell
   cd REPOSITORY-TO-MIRROR
   git remote set-url --push origin https://{% data variables.product.product_url %}/EXAMPLE-USER/MIRRORED
   ```

    As with a bare clone, a mirrored clone includes all remote branches and tags, but all local references will be overwritten each time you fetch, so it will always be the same as the original repository. Setting the URL for pushes simplifies pushing to your mirror.

1. To update your mirror, fetch updates and push.

   ```shell
   git fetch -p origin
   git push --mirror
   ```

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop#pushing-changes-to-github)"
- "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/about-git-large-file-storage-and-github-desktop)"

{% endif %}
