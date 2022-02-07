---
title: 镜像仓库
intro: 'To maintain a mirror of a repository without forking it, you can run a special clone command, then mirror-push to the new repository.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% ifversion fpt or ghec %}

{% note %}

**Note:** If you have a project hosted on another version control system, you can automatically import your project to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_dotcom %} Importer tool. For more information, see "[About {% data variables.product.prodname_dotcom %} Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)."

{% endnote %}

{% endif %}

Before you can push the original repository to your new copy, or _mirror_, of the repository, you must [create the new repository](/articles/creating-a-new-repository) on {% data variables.product.product_location %}. 在以下示例中，`exampleuser/new-repository` 或 `exampleuser/mirrored` 是镜像。

## 镜像仓库

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸克隆。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. 镜像推送至新仓库。
  ```shell
  $ cd <em>old-repository</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. 删除您之前创建的临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## 镜像包含 {% data variables.large_files.product_name_long %} 对象的仓库。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸克隆。 将示例用户名替换为拥有仓库的个人或组织的名称，并将示例仓库名称替换为要复制的仓库的名称。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. 导航到刚克隆的仓库。
  ```shell
  $ cd <em>old-repository</em>
  ```
4. 拉取仓库的 {% data variables.large_files.product_name_long %} 对象。
  ```shell
  $ git lfs fetch --all
  ```
5. 镜像推送至新仓库。
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. 将仓库的 {% data variables.large_files.product_name_long %} 对象推送至镜像。
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. 删除您之前创建的临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## 镜像其他位置的仓库

如果要镜像其他位置的仓库，包括从原始位置获取更新，可以克隆镜像并定期推送更改。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸镜像克隆。
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. 设置到镜像的推送位置。
  ```shell
  $ cd <em>repository-to-mirror</em>
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```
与裸克隆一样，镜像的克隆包括所有远程分支和标记，但每次获取时都会覆盖所有本地引用，因此它始终与原始仓库相同。 设置推送 URL 可简化至镜像的推送。

4. 如需更新镜像，请获取更新和推送。
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## 延伸阅读

* "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[About Git Large File Storage and GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* “[关于 GitHub 导入工具](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)”

{% endif %}
