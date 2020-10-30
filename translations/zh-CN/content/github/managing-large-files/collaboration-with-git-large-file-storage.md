---
title: 协作处理 Git Large File Storage
intro: '启用 {% data variables.large_files.product_name_short %} 后，您就可以像使用 Git 管理的任何文件一样获取、修改和推送大文件。 但是，没有 {% data variables.large_files.product_name_short %} 的用户将经历不同的工作流程。'
redirect_from:
  - /articles/collaboration-with-large-file-storage/
  - /articles/collaboration-with-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

如果仓库上的协作者未安装 {% data variables.large_files.product_name_short %}，他们将无法访问原始大文件。 如果他们尝试克隆您的仓库，则只能获取指针文件，而无法访问任何实际数据。

{% tip %}

**提示：**为帮助未启用 {% data variables.large_files.product_name_short %} 的用户，我们建议您设置仓库贡献者指南以介绍如何处理大文件。 例如，您可以要求贡献者不修改大文件，或者将更改上传到文件共享服务，如 [Dropbox](http://www.dropbox.com/) 或 <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>。 更多信息请参阅“[设置仓库参与者指南](/github/building-a-strong-community/setting-guidelines-for-repository-contributors)”。

{% endtip %}

### 查看拉取请求中的大文件

{% data variables.product.product_name %} 不会渲染拉取请求中的 {% data variables.large_files.product_name_short %} 对象。 Only the pointer file is shown:

![大文件的示例 PR](/assets/images/help/large_files/large_files_pr.png)

有关指针文件的更多信息，请参阅“[关于 {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)”。

要查看对大型文件所做的更改，请在本地检出拉取请求以查看差异。 更多信息请参阅“[在本地检出拉取请求](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)”。

{% if currentVersion == "free-pro-team@latest" %}

### 推送大文件到复刻

将大文件推送到仓库复刻会计入父仓库的带宽和存储配额，而不是复刻所有者的配额。

如果仓库网络已经有 {% data variables.large_files.product_name_short %} 对象，或者您能够写入仓库网络的根目录，您可以将 {% data variables.large_files.product_name_short %} 对象推送到公共复刻。

{% endif %}

### 延伸阅读

- "[复制含有 Git Large File Storage 对象的仓库](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
