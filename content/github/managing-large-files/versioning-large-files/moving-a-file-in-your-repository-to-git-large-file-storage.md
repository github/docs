---
title: Moving a file in your repository to Git Large File Storage
intro: 'If you''ve set up {% data variables.large_files.product_name_short %}, and you have an existing file in your repository that needs to be tracked in {% data variables.large_files.product_name_short %}, you need to first remove it from your repository.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
After installing {% data variables.large_files.product_name_short %} and configuring {% data variables.large_files.product_name_short %} tracking, you can move files from Git's regular tracking to {% data variables.large_files.product_name_short %}. For more information, see "[Installing {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)" and "[Configuring {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)."

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Tip:** If you get an error that "this exceeds {% data variables.large_files.product_name_short %}'s file size limit of {% data variables.large_files.max_github_size %}" when you try to push files to Git, you can use `git lfs migrate` instead of `filter branch` or the BFG Repo Cleaner, to move the large file to {% data variables.large_files.product_name_long %}. For more information about the `git lfs migrate` command, see the [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released) release announcement.

{% endtip %}

1.  Remove the file from the repository's Git history using either the `filter-branch` command or BFG Repo-Cleaner. For detailed information on using these, see "[Removing sensitive data from a repository](/articles/removing-sensitive-data-from-a-repository)."
2. Configure tracking for your file and push it to {% data variables.large_files.product_name_short %}. For more information on this procedure, see "[Configuring {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)."

## Further reading

- "[About {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Collaboration with {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Installing {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
