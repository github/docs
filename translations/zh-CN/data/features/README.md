---
ms.openlocfilehash: 3e44864fd82617c799cc4af8a3ab31b9279ed950
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877174"
---
## 基于功能的版本

基于功能的版本管理允许我们在一个地方定义和控制任意命名的“功能”版本。

注意：不要删除 `data/features/placeholder.yml`，因为它由测试使用。

## 工作原理

添加一个新的 YAML 文件，其中包含您想要在此目录中使用的功能名称。 对于名为 `meow` 的功能，它将是 `data/features/meow.yml`。

在 YML 文件中添加一个 `versions` 块，其中带有该功能所提供的版本的短名称。 例如：

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

格式和允许的值与 [frontmatter 版本属性](/content#versions)相同。

### 液体条件

现可在内容文件中使用 `{% ifversion meow %} ... {% endif %}`！

### 前辅文

您也可以在内容文件中使用前辅文功能：

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

不能使用 `feature:` 指定多个并发版本，因为这不受支持。 另外，可以使用所需的版本控制新建基于功能的版本控制文件。

## 架构实施

用于验证功能版本控制的架构位于 [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) 中，并由 [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js) 执行。

## 删除功能标签的脚本

待定！
