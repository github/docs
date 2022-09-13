---
title: 为项目添加行为准则
intro: 采用行为准则制定社区标准，宣示欢迎大家参与的包容性项目，并且阐述对滥用的处理程序。
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
ms.openlocfilehash: dcf1e589ae4f803017752f9e919aad304c570fbc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086535'
---
行为准则定义关于如何参与社区的标准。 它宣示一个尊重所有贡献的包容性环境。 还说明解决项目社区成员间问题的程序。 若要详细了解为何行为准则要定义有关如何参与社区的标准和期望，请参阅[开源指南](https://opensource.guide/code-of-conduct/)。

在对项目采用行为准则之前：

* 研究为开源项目设计的不同行为准则。 选择一个反映您的社区标准的行为准则。
* 认真考虑您是否愿意和能够实施该行为准则。

您可以使用模板向项目添加行为准则，或手动创建自定义行为准则。 您的行为守则可以通过以下任何方式获得，但如果您使用模板，“行为准则”只在您仓库的社区配置文件中标记为完成。 如果您使用由他人或组织编写的行为准则，必须遵守来源方的任何归属指导原则。 有关社区配置文件的详细信息，请参阅“[关于公共存储库的社区配置文件](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)”。

你可以为组织或个人帐户创建默认的行为准则。 有关详细信息，请参阅[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)。

## 使用模板添加行为准则

{% data variables.product.product_name %} 提供常用行为准则的模板，以帮助您快速为项目添加行为准则。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在文件名字段中输入“CODE_OF_CONDUCT.md”。
4. 单击“选择行为准则模板”。
  ![用于选择行为准则模板的按钮](/assets/images/help/repository/code-of-conduct-tool.png)
5. 在页面左边选择行为准则进行预览并添加到项目。
  ![行为准则模板的选择](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. 在页面右边完成字段，在所选的行为准则中填写适当的信息。
7. 单击“查看并提交”。
  ![查看行为准则并提交到项目](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. 检查文本区域中的行为准则内容。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 手动添加行为准则

如果提供的模板中没有要使用的行为准则，您可以手动添加行为准则。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在文件名字段中，键入文件的名称和扩展名。
  ![新行为准则文件名](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - 要在存储库根目录中显示行为准则，请在文件名字段中键入“CODE_OF_CONDUCT”。
    - 要在存储库的 `docs` 目录中显示行为准则，请键入“docs/CODE_OF_CONDUCT”。
    - 要在存储库的 `.github` 目录中显示行为准则，请键入“.github/CODE_OF_CONDUCT”。
4. 在新文件中添加您的自定义行为准则。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
