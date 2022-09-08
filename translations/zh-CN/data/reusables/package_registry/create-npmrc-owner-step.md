---
ms.openlocfilehash: 4edd3d2abea48d816827ab4eede21805ce06d8e0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100389"
---
2. 在与 `package.json` 文件相同的目录中，创建或编辑 `.npmrc` 文件以包含指定 {% data variables.product.prodname_registry %} URL 和帐户所有者的行。 将 `OWNER` 替换为拥有项目所在存储库的用户或组织帐户的名称。

{% ifversion fpt or ghec %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %} 如果启用了子域隔离：
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  如果禁用了子域隔离：
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
