---
title: Collaboration with Git Large File Storage
intro: 'With {% data variables.large_files.product_name_short %} enabled, you''ll be able to fetch, modify, and push large files just as you would expect with any file that Git manages. However, a user that doesn''t have {% data variables.large_files.product_name_short %} will experience a different workflow.'
redirect_from:
  - /articles/collaboration-with-large-file-storage/
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Collaboration
---
If collaborators on your repository don't have {% data variables.large_files.product_name_short %} installed, they won't have access to the original large file. If they attempt to clone your repository, they will only fetch the pointer files, and won't have access to any of the actual data.

{% tip %}

**Tip:** To help users without {% data variables.large_files.product_name_short %} enabled, we recommend you set guidelines for repository contributors that describe how to work with large files. For example, you may ask contributors not to modify large files, or to upload changes to a file sharing service like [Dropbox](http://www.dropbox.com/) or <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>. For more information, see "[Setting guidelines for repository contributors](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."

{% endtip %}

## Viewing large files in pull requests

{% data variables.product.product_name %} does not render {% data variables.large_files.product_name_short %} objects in pull requests. Only the pointer file is shown:

![Sample PR for large files](/assets/images/help/large_files/large_files_pr.png)

For more information about pointer files, see "[About {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)."

To view changes made to large files, check out the pull request locally to review the diff. For more information, see "[Checking out pull requests locally](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."

{% ifversion fpt %}

## Pushing large files to forks

Pushing large files to forks of a repository count against the parent repository's bandwidth and storage quotas, rather than the quotas of the fork owner.

You can push {% data variables.large_files.product_name_short %} objects to public forks if the repository network already has {% data variables.large_files.product_name_short %} objects or you have write access to the root of the repository network.

{% endif %}

## Further reading

- "[Duplicating a repository with Git Large File Storage objects](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
