---
title: 添加许可到仓库
intro: 您可以在仓库中包含开源许可，以便于其他人参与。
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099302'
---
如果在仓库中包含可检测的许可，仓库的访问者将会在仓库页面顶部看到它。 要阅读整个许可文件，请单击许可名称。

![包含 MIT 许可的仓库标头](/assets/images/help/repository/repo-license-indicator.png)

开源许可允许其他人在您的仓库中自由使用、更改和分发项目。 有关存储库许可证的详细信息，请参阅“[许可存储库](/articles/licensing-a-repository)”。

## 在仓库中包含开源许可

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在文件名字段中，键入 LICENSE 或 LICENSE.md（全部大写） 。
4. 在文件名字段右边，单击“选择许可证模板”。
  ![“选择许可证模板”按钮](/assets/images/help/repository/license-tool.png)
5. 在页面左边的 "Add a license to your project"（添加许可到项目）下，检查可用的许可，然后从列表中选择许可。
  ![可用许可证列表](/assets/images/help/repository/license-tool-picker.png)
6. 单击“查看并提交”。
  ![“查看并提交”按钮](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. 单击“提交新文件”。
  ![将许可证提交到分支](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在文件名字段中，键入 LICENSE 或 LICENSE.md（全部大写） 。
4. 在“编辑新文件”选项卡中，粘贴要使用的许可证的全文。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. 在提交消息字段下面，确定是要将提交添加到当前分支还是新分支。 如果当前分支是 `main`，则应选择为提交创建新分支，然后创建拉取请求。 有关详细信息，请参阅“[创建拉取请求](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)”。
![提交分支选项](/assets/images/help/repository/choose-commit-branch.png)
8. 单击“提交新文件”。
  ![将许可证提交到分支](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## 延伸阅读

- [为存储库参与者设置准则](/articles/setting-guidelines-for-repository-contributors)
