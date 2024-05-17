---
title: Configuring Git Large File Storage
intro: 'Once [{% data variables.large_files.product_name_short %} is installed](/articles/installing-git-large-file-storage/), you need to associate it with a large file in your repository.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Configure Git LFS
---
If there are existing files in your repository that you'd like to use {% data variables.product.product_name %} with, you need to first remove them from the repository and then add them to {% data variables.large_files.product_name_short %} locally. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage)."

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes %}

{% tip %}

**Note:** Before trying to push a large file to {% data variables.product.product_name %}, make sure that you've enabled {% data variables.large_files.product_name_short %} on your enterprise. For more information, see "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/configuring-git-large-file-storage-for-your-enterprise)."

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change your current working directory to an existing repository you'd like to use with {% data variables.large_files.product_name_short %}.
1. To associate a file type in your repository with {% data variables.large_files.product_name_short %}, enter `git {% data variables.large_files.command_name %} track` followed by the name of the file extension you want to automatically upload to {% data variables.large_files.product_name_short %}.

   For example, to associate a _.psd_ file, enter the following command:

   ```shell
   $ git {% data variables.large_files.command_name %} track "*.psd"
   > Tracking "*.psd"
   ```

   Every file type you want to associate with {% data variables.large_files.product_name_short %} will need to be added with `git {% data variables.large_files.command_name %} track`. This command amends your repository's _.gitattributes_ file and associates large files with {% data variables.large_files.product_name_short %}.

   {% note %}

   **Note:** We strongly suggest that you commit your local _.gitattributes_ file into your repository.

   - Relying on a global _.gitattributes_ file associated with {% data variables.large_files.product_name_short %} may cause conflicts when contributing to other Git projects.
   - Including the _.gitattributes_ file in the repository allows people creating forks or fresh clones to more easily collaborate using {% data variables.large_files.product_name_short %}.
   - Including the _.gitattributes_ file in the repository allows {% data variables.large_files.product_name_short %} objects to optionally be included in ZIP file and tarball archives.

   {% endnote %}

1. Add a file to the repository matching the extension you've associated:

   ```shell
   git add path/to/file.psd
   ```

1. Commit the file and push it to {% data variables.product.product_name %}:

   ```shell
   git commit -m "add file.psd"
   git push
   ```

   You should see some diagnostic information about your file upload:

   ```shell
   > Sending file.psd
   > 44.74 MB / 81.04 MB  55.21 % 14s
   > 64.74 MB / 81.04 MB  79.21 % 3s
   ```

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage)"{% ifversion fpt or ghec %}
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
