---
title: 创建默认的社区运行状况文件
intro: 您可以创建默认社区健康文件，例如 CONTRIBUTING 和 CODE_OF_CONDUCT。 默认文件将用于不包含该类型自有文件的帐户所拥有的任何仓库。
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 85a672d0cc0991a5325df8a107737da47c7b81d3
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193266'
---
## 关于默认社区健康文件

可以将默认社区运行状况文件添加到存储库根目录下或者 `docs` 或 `.github` 文件夹中名为 `.github` 的公共存储库中。

对于在以下任何位置不含该类型自有文件的帐户所拥有的任何仓库，{% data variables.product.product_name %} 将使用并显示默认文件：
- 仓库的根目录
- `.github` 文件夹
- `docs` 文件夹

例如，在不含自有 CONTRIBUTING 文件的仓库中创建议题或拉取请求的人将会看到指向默认 CONTRIBUTING 文件的链接。 如果存储库在其自己的 `.github/ISSUE_TEMPLATE` 文件夹{% ifversion fpt or ghes or ghec %}中含有任何文件，包括议题模板或 config.yml 文件，{% endif %}则不会使用默认 `.github/ISSUE_TEMPLATE` 文件夹的内容。

默认文件不包含在各个存储库的克隆、包或下载中，因为它们只存储在 `.github` 存储库中。

## 支持的文件类型

可以在组织{% ifversion fpt or ghes or ghec %}或个人帐户{% endif %}中为以下社区运行状况文件创建默认内容：

社区运行状况文件 | 说明 --- | ---{% ifversion fpt or ghec %} CODE_OF_CONDUCT.md | CODE_OF_CONDUCT 文件定义有关如何参与社区的标准。 有关详细信息，请参阅“[为项目添加行为准则](/articles/adding-a-code-of-conduct-to-your-project/)”。{% endif %} CONTRIBUTING.md | CONTRIBUTING 文件指示应如何参与你的项目。 有关详细信息，请参阅“[设置存储库参与者指南](/articles/setting-guidelines-for-repository-contributors/)”。{% ifversion discussion-category-forms %} 讨论类别表单 | 讨论类别表单自定义社区成员在存储库中打开新讨论时可以使用的模板。 有关详细信息，请参阅“[创建讨论类别表单](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms)”。{% endif %}{% ifversion fpt or ghec %} FUNDING.yml | FUNDING 文件在存储库中显示发起人按钮，以提高开源项目资助选项的可见性。 有关详细信息，请参阅“[在存储库中显示发起人按钮](/articles/displaying-a-sponsor-button-in-your-repository)。”{% endif %} 问题和拉取请求模板 {% ifversion fpt or ghes or ghec %} 和 config.yml{% endif %} | 问题和拉取请求模板可自定义和标准化你希望参与者在存储库中打开问题或拉取请求时包含的信息。 有关详细信息，请参阅“[关于问题和拉取请求模板](/articles/about-issue-and-pull-request-templates/)。”{% ifversion fpt or ghes or ghec %} SECURITY.md | SECURITY 文件阐述了如何报告项目中的安全漏洞。 有关详细信息，请参阅“[向存储库添加安全策略](/code-security/getting-started/adding-a-security-policy-to-your-repository)。”{% endif %} SUPPORT.md | SUPPORT 文件介绍在项目中获取帮助的途径。 有关详细信息，请参阅“[向项目添加支持资源](/articles/adding-support-resources-to-your-project/)”。

您不能创建默认许可文件。 必须将许可文件添加到各个仓库中，以便在克隆、打包或下载项目时包含该文件。

## 创建用于默认文件的仓库

{% data reusables.repositories.create_new %}
2. 使用“所有者”下拉菜单，选择要为其创建默认文件的组织{% ifversion fpt or ghes or ghec %}或个人帐户{% endif %}。
  ![所有者下拉菜单](/assets/images/help/repository/create-repository-owner.png)
3. 输入“.github”作为存储库的名称和描述（可选）。
  ![创建存储库字段](/assets/images/help/repository/default-file-repository-name.png)
4. 确保存储库状态设置为“公共”（默认文件的存储库不能是私有的）。
  ![用于选择私有或公共状态的单选按钮](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. 在仓库中，创建一个受支持的社区健康文件。 议题模板 {% ifversion fpt or ghes or ghec %} 及其配置文件 {% endif %} 必须位于名为 `.github/ISSUE_TEMPLATE` 的文件夹中。 所有其他支持的文件可能位于存储库根目录、`.github` 文件夹或 `docs` 文件夹中。 有关详细信息，请参阅“[新建文件](/articles/creating-new-files/)”。
