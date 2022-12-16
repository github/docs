---
title: 讨论类别表单的语法
shortTitle: Syntax for discussion category forms
intro: 可以使用 YAML 语法定义讨论类别表单中的字段。
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193249'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## 关于讨论类别表单的 YAML 语法

可以通过将 YAML 表单定义文件添加到存储库中的 `/.github/DISCUSSION_TEMPLATE/` 文件夹来创建自定义讨论类别表单。 {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

对于每个字段，可以定义输入类型、验证和默认标签。

当社区成员填写讨论表单时，他们对每个输入的响应都会转换为 Markdown 并添加到讨论正文中。 社区成员可以编辑使用讨论表单创建的讨论，其他人可以像通过其他方法创建的讨论一样与讨论进行交互。

此示例 YAML 配置文件定义一般讨论类别表单。

{% data reusables.discussions.discussion-category-forms-sample %}

## 顶级语法

讨论类别表单的配置文件必须包含一个 `body` 键，并且 `body` 必须至少包含 1 个非 Markdown 字段。

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

您可以为每个议题表单设置以下顶级键。

| 密钥 | 说明 | 必需 | 类型 |
| :-- | :-- | :-- | :-- | :-- |
| `body` | 在讨论表单中定义输入类型。 | 必需 | 数组 |
| `labels` | 将自动添加到此模板创建的讨论的标签。 | 可选 | 阵列或逗号分界的字符串 |
| `title` | 在讨论提交表单中预填的默认标题。 | 可选 | String |

若要向表单添加字段，请在 `body` 键中包含表单元素数组。 有关可用元素及其语法的列表，请参阅“[{% data variables.product.prodname_dotcom %} 表单架构的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)”。
