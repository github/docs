---
title: 解决 Git Large File Storage 上传失败
intro: '如果 {% data variables.large_files.product_name_short %} 文件上传不正确，您可以采取几个步骤来解决上传错误。'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% data variables.large_files.product_name_short %} 完整性检查可确保推送中所有引用的 {% data variables.large_files.product_name_short %} 文件均已正确上传。 如果检查检测到尚未上传的引用文件，您将收到错误消息，并且您的推送将被阻止。

要解决此错误消息，您必须重新安装本地 {% data variables.large_files.product_name_short %} 客户端，以确保引用的 {% data variables.large_files.product_name_short %} 文件将来可以正确上传。

1. 打开终端。
2. 重新安装 {% data variables.large_files.product_name_short %}。
  ```shell
  $ git lfs install
  ```
3. 推送所有引用的 {% data variables.large_files.product_name_short %} 文件。
  ```shell
  $ git lfs push --all origin
  ```
