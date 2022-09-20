---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578686"
---
{% note %}

**注释**： 

* 如果 git 配置支持推送到多个分支，而不仅仅是推送到当前分支，则由于附加和意外的引用被推送，你的推送可能被阻止。 有关详细信息，请参阅 Git 文档中的 [`push.default` 选项](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)。
* 如果在推送超时后进行 {% data variables.product.prodname_secret_scanning %}，{% data variables.product.prodname_dotcom %} 仍将在推送后扫描你的提交有无机密。

{% endnote %}
