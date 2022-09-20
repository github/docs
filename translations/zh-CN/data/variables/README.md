---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067046"
---
# 变量

变量是可重用文本的短字符串。

此目录中的每个 YAML 文件都包含多个变量。

每个 YAML 文件中的路径、文件名和键决定了它的什么路径将位于数据对象中。  

例如，给定文件 `data/variables/foo/bar.yml`：

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

其值可以以下形式访问：

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
