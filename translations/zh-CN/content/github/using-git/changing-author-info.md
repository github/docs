---
title: 更改作者信息
redirect_from:
  - /change-author-info/
  - /changing-author-info/
  - /articles/changing-author-info
intro: 要更改现有提交中记录的名称和/或电子邮件地址，您必须重写 Git 仓库的整个历史记录。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**警告**：此操作对仓库的历史记录具有破坏性。 如果您正与其他人在仓库上协作，重写已发布的历史记录被视为不良做法。 应该只在紧急情况下才这样做。

{% endwarning %}

### 使用脚本更改仓库的 Git 历史记录

我们创建了一个用于更改任何提交的脚本，可将此前在作者或提交者字段中填写的旧电子邮件地址更改为正确的名称和电子邮件地址。

{% tip %}

**注**：运行此脚本会重写所有仓库协作者的历史记录。 完成这些步骤后，任何拥有复刻或克隆的人都必须获取重写的历史记录，并将任何本地更改变基为重写的历史记录。

{% endtip %}

运行此脚本之前，您需要：

* 显示在要更改的作者/提交者字段中的旧电子邮件地址
* 要将此类提交归因于的正确名称和电子邮件地址

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 为仓库创建一个全新的裸克隆：
  ```shell
  git clone --bare https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
  cd <em>repo</em>.git
  ```
3. 复制并粘贴脚本，根据您收集的信息替换以下变量：
    * `OLD_EMAIL`
    * `CORRECT_NAME`
    * `CORRECT_EMAIL`

  ```shell
  #!/bin/sh

  git filter-branch --env-filter '

  OLD_EMAIL="your-old-email@example.com"
  CORRECT_NAME="Your Correct Name"
  CORRECT_EMAIL="your-correct-email@example.com"

  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
  export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
  ' --tag-name-filter cat -- --branches --tags
  ```

4. 按 **Enter** 键以运行脚本。
5. 审查新的 Git 历史记录以查找错误。
6. 将更正的历史记录推送到 {% data variables.product.product_name %}：
  ```shell
  git push --force --tags origin 'refs/heads/*'
  ```
7. 清理临时克隆：
  ```shell
  cd ..
  rm -rf <em>repo</em>.git
  ```
