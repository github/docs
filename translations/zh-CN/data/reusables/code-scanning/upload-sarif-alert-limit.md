---
ms.openlocfilehash: 0b7740ddd22bccfe9899f98ac44af4d4b94b4ed4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098766"
---
{% note %}

**注意：** 
- SARIF 上传最多支持每次上传 5000 个结果。 任何超过此限制的结果都将被忽略。 如果工具生成太多结果，则应更新配置，以将重点放在最重要的规则或查询的结果上。

 - 对于每次上传，SARIF 上传支持最大大小为 10 MB 的 `gzip` 压缩 SARIF 文件。 任何超过此限制的上传都将被拒绝。 如果 SARIF 文件由于包含太多结果而过大，则应更新配置，以将重点放在最重要的规则或查询的结果上。

{% endnote %}
