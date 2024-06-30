---
title: Resolving Git Large File Storage upload failures
intro: 'If your {% data variables.large_files.product_name_short %} files didn''t upload properly, you can take several steps to troubleshoot the upload error.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/versioning-large-files/resolving-git-large-file-storage-upload-failures
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Resolve upload failures
---
The {% data variables.large_files.product_name_short %} integrity check ensures that all referenced {% data variables.large_files.product_name_short %} files in a push have been uploaded properly. If the check detects referenced files that have not been uploaded, you will receive an error message and your push will be blocked.

To resolve the error message, you must reinstall your local {% data variables.large_files.product_name_short %} client to ensure that the referenced {% data variables.large_files.product_name_short %} files can be properly uploaded in the future.

1. Open Terminal.
1. Reinstall {% data variables.large_files.product_name_short %}.

   ```shell
   git lfs install
   ```

1. Push all referenced {% data variables.large_files.product_name_short %} files.

   ```shell
   git lfs push --all origin
   ```
