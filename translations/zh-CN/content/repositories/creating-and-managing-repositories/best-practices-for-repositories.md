---
title: 存储库最佳做法
shortTitle: Best practices
intro: 了解如何最有效地使用存储库。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163448'
---
## 创建 README 文件

为了便于用户理解和导航你的工作，建议为每个存储库创建一个 README 文件。 

{% data reusables.repositories.about-READMEs %} 有关详细信息，请参阅“[关于 README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)”。

## 优选分支而不是分叉

为了简化协作，建议常规协作者从单个存储库工作，在分支之间而不是存储库之间创建拉取请求。 分叉最适合接受与项目无关的人员（如开源参与者）的贡献。

若要在使用分支工作流时保持重要分支（如 `main`）的质量，可以使用受保护的分支进行所需的状态检查和拉取请求评审。 有关详细信息，请参阅“[关于受保护的分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。

## 使用 {% data variables.large_files.product_name_long %}

为了优化性能，{% data variables.location.product_location %} 会限制存储库中允许的文件大小。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的大型文件](/repositories/working-with-files/managing-large-files/about-large-files-on-github)”。

若要跟踪 Git 存储库中的大型文件，建议使用 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %})。 有关详细信息，请参阅“[关于 {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)”。
