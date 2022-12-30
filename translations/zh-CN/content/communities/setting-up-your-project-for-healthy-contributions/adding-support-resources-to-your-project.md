---
title: 将支持资源添加到项目
intro: 您可以创建 SUPPORT 文件，让人们知道获取项目相关帮助的方式。
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086528'
---
若要将用户定向到特定的支持资源，可以将 SUPPORT 文件添加到存储库的根文件夹 `docs` 或 `.github`。 当有人在您的仓库中创建议题时，就会看到项目 SUPPORT 文件的链接。

![支持指南](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

可以为组织或个人帐户创建默认支持资源。 有关详细信息，请参阅“[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endif %}

{% tip %}

提示：为帮助用户查找支持指南，可以从存储库的其他位置（如 [README 文件](/articles/about-readmes/)）链接到 SUPPORT 文件。

{% endtip %}

## 将支持资源添加到项目

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在“文件名”字段中，键入“SUPPORT.md”（全大写）。
4. 在“编辑新文件”选项卡中，添加有关用户如何获取项目支持的信息。
5. 若要查看 SUPPORT 文件，请单击“预览”。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
