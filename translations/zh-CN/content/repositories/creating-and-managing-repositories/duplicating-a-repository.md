---
title: 复制仓库
intro: 要维护存储库的镜像而不对其进行复刻，可以运行特殊的克隆命令，然后镜像推送到新存储库。
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
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135484'
---
{% ifversion fpt or ghec %}

{% note %}

注意：如果你在其他版本控制系统上托管了项目，则可以使用 {% data variables.product.prodname_dotcom %} 导入程序工具自动将项目导入到 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 导入程序](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)”。

{% endnote %}

{% endif %}

在将原始存储库推送到存储库的新副本或镜像之前，必须在 {% data variables.location.product_location %} 上[创建新的存储库](/articles/creating-a-new-repository)。 在这些示例中，`exampleuser/new-repository` 或 `exampleuser/mirrored` 为镜像。

## 镜像仓库

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸克隆。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. 镜像推送至新仓库。
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. 删除您之前创建的临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## 镜像包含 {% data variables.large_files.product_name_long %} 对象的仓库。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸克隆。 将示例用户名替换为拥有仓库的个人或组织的名称，并将示例仓库名称替换为要复制的仓库的名称。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. 导航到刚克隆的仓库。
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. 拉取仓库的 {% data variables.large_files.product_name_long %} 对象。
  ```shell
  $ git lfs fetch --all
  ```
5. 镜像推送至新仓库。
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. 将仓库的 {% data variables.large_files.product_name_long %} 对象推送至镜像。
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. 删除您之前创建的临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## 镜像其他位置的仓库

如果要镜像其他位置的仓库，包括从原始位置获取更新，可以克隆镜像并定期推送更改。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 创建仓库的裸镜像克隆。
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. 设置到镜像的推送位置。
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
与裸克隆一样，镜像的克隆包括所有远程分支和标记，但每次获取时都会覆盖所有本地引用，因此它始终与原始仓库相同。 设置推送 URL 可简化至镜像的推送。

4. 如需更新镜像，请获取更新和推送。
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## 延伸阅读

* [将更改推送到 GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)
* [关于 Git 大文件存储和 GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)
* [关于 GitHub 导入工具](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)

{% endif %}
