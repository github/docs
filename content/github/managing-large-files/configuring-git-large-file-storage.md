---
title: Configuring Git Large File Storage
intro: 'Once [{% data variables.large_files.product_name_short %} is installed](/articles/installing-git-large-file-storage/), you need to associate it with a large file in your repository.'
redirect_from:
  - /articles/configuring-large-file-storage/
  - /articles/configuring-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

If there are existing files in your repository that you'd like to use {% data variables.product.product_name %} with, you need to first remove them from the repository and then add them to {% data variables.large_files.product_name_short %} locally. For more information, see "[Moving a file in your repository to {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)."

{% data reusables.large_files.resolving-upload-failures %}

{% if currentVersion != "free-pro-team@latest" %}

{% tip %}

**Note:** Before trying to push a large file to {% data variables.product.product_name %}, make sure that you've enabled {% data variables.large_files.product_name_short %} on your appliance. For more information, see "[Configuring Git Large File Storage on GitHub Enterprise Server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)."

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change your current working directory to an existing repository you'd like to use with {% data variables.large_files.product_name_short %}.
3. To associate a file type in your repository with {% data variables.large_files.product_name_short %}, enter `git {% data variables.large_files.command_name %} track` followed by the name of the file extension you want to automatically upload to {% data variables.large_files.product_name_short %}.

  For example, to associate a _.psd_ file, enter the following command:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Every file type you want to associate with {% data variables.large_files.product_name_short %} will need to be added with `git {% data variables.large_files.command_name %} track`. This command amends your repository's *.gitattributes* file and associates large files with {% data variables.large_files.product_name_short %}.

  {% tip %}

  **Tip:** We strongly suggest that you commit your local *.gitattributes* file into your repository. Relying on a global *.gitattributes* file associated with {% data variables.large_files.product_name_short %} may cause conflicts when contributing to other Git projects.

  {% endtip %}

4. Add a file to the repository matching the extension you've associated:
  ```shell
  $ git add path/to/file.psd
  ```
5. Commit the file and push it to {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push origin master
  ```
  You should see some diagnostic information about your file upload:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

### Further reading

- "[Collaboration with {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
- "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
