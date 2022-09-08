---
title: 将子文件夹拆分成新仓库
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: 您可以将 Git 仓库内的文件夹变为全新的仓库。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: 21467b459f1e7af1dd28e5b7a20c962786aed2b5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109487'
---
如果您创建仓库的新克隆副本，则将文件夹拆分为单独的仓库时不会丢失任何 Git 历史记录或更改。

{% data reusables.command_line.open_the_multi_os_terminal %}

2. 将当前工作目录更改为您要创建新仓库的位置。

4. 克隆包含该子文件夹的仓库。
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
   ```

4. 将当前工作目录更改为您克隆的仓库。
   ```shell
   $ cd <em>REPOSITORY-NAME</em>
   ```

5. 若要从存储库中的其余文件中筛选出子文件夹，请运行 [`git filter-repo`](https://github.com/newren/git-filter-repo)，并提供以下信息：
   - `FOLDER-NAME`：项目中要在其中创建单独存储库的文件夹。

   {% windows %}

   {% tip %}

   提示：Windows 用户应使用 `/` 来分隔文件夹。

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
   ```
   
   现在，该仓库应仅包含您的子文件夹中的文件。

6. 在 {% data variables.product.product_name %} 上[新建存储库](/articles/creating-a-new-repository/)。

7. 在新仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。
    
   ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   提示：有关 HTTPS 和 SSH URL 之间区别的信息，请参阅“[关于远程存储库](/github/getting-started-with-github/about-remote-repositories)”。

   {% endtip %}

8. 检查仓库现有的远程名称。 例如，`origin` 或 `upstream` 是两个常见的选项。
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
   ```

9. 使用现有的远程名称和您在步骤 7 中复制的远程仓库 URL 为新仓库设置新的远程 URL。
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
   ```

10. 使用新仓库名称验证远程 URL 是否已更改。
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
    ```

11. 将您的更改推送到 {% data variables.product.product_name %} 上的新仓库。
    ```shell
    git push -u origin <em>BRANCH-NAME</em>
    ```
