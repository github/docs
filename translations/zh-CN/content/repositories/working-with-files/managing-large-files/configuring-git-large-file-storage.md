---
title: 配置 Git Large File Storage
intro: '安装 [{% data variables.large_files.product_name_short %}] 后 (/articles/installing-git-large-file-storage/)，需要将其与仓库中的大文件相关联。'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 配置 Git LFS
---

如果仓库中存在要用于 {% data variables.product.product_name %} 的现有文件，则需要先从仓库中删除它们，然后在本地将其添加到 {% data variables.large_files.product_name_short %}。 更多信息请参阅“[将仓库中的文件移动到 {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)”。

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**注：**尝试向 {% data variables.product.product_name %} 推送大文件之前，请确保在您的企业上启用了 {% data variables.large_files.product_name_short %}。 更多信息请参阅“[在 GitHub Enterprise Server 上配置 Git Large File Storage](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)”。

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为要用于 {% data variables.large_files.product_name_short %} 的现有仓库。
3. 要将仓库中的文件类型与 {% data variables.large_files.product_name_short %} 相关联，请输入 `git {% data variables.large_files.command_name %} track`，后跟要自动上传到 {% data variables.large_files.product_name_short %} 的文件扩展名。

  例如，要关联 _.psd_ 文件，请输入以下命令：
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  要与 {% data variables.large_files.product_name_short %} 关联的每个文件类型都需要添加 `git {% data variables.large_files.command_name %} track`。 此命令将修改仓库的 *.gitattributes* 文件，并将大文件与 {% data variables.large_files.product_name_short %} 相关联。

  {% note %}

  **注意：**我们强烈建议您将本地 *.gitattributes* 文件提交到仓库中。

    - 依赖与 {% data variables.large_files.product_name_short %} 关联的全局 *.gitattributes* 文件，可能会导致在参与其他 Git 项目时发生冲突。
    - 在存储库中包含 *.gitattributes* 文件允许创建复刻或新克隆的人员使用 {% data variables.large_files.product_name_short %} 更轻松地进行协作。
    - 在存储库中包含 *.gitattributes* 文件允许 {% data variables.large_files.product_name_short %} 对象选择性地包含在 ZIP 文件和压缩包存档中。

  {% endnote %}

4. 将文件添加到与关联的扩展名相匹配的仓库：
  ```shell
  $ git add path/to/file.psd
  ```
5. 提交文件并将其推送到 {% data variables.product.product_name %}：
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  您会看到一些有关文件上传的诊断信息：
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## 延伸阅读

- "[使用 {% data variables.large_files.product_name_long %} 进行协作](/articles/collaboration-with-git-large-file-storage/)"{% ifversion fpt or ghec %}
- "[管理仓库存档中的 {% data variables.large_files.product_name_short %} 对象](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
