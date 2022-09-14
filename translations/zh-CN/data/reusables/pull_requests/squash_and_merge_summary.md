---
ms.openlocfilehash: c7eea7975ef49a5a6e3deed2ade3cb6bb5543ac0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145099524"
---
对 {% data variables.product.product_location %} 上的拉取请求选择“压缩并合并”选项时，拉取请求的提交会压缩为单一提交。 不是从主题分支查看所有贡献者的个别提交，而是所有提交合并成一个提交并合并到默认分支。 使用[快进选项](https://git-scm.com/docs/git-merge#_fast_forward_merge)合并包含已压缩提交的拉取请求。

若要压缩并合并拉取请求，必须在存储库中具有[写入权限](/articles/repository-permission-levels-for-an-organization/)，并且存储库必须[允许压缩合并](/articles/configuring-commit-squashing-for-pull-requests/)。

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

您可以使用压缩并合并在仓库中创建更简化的 Git 历史记录。 在功能分支上工作时，提交正在进行的工作会有帮助，但它们不一定必须留在 Git 历史记录中。 如果在合并到默认分支时将这些提交压缩到一个提交中，您可以保留原来的更改并清除 Git 历史记录。
