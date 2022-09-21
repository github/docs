---
ms.openlocfilehash: 02959a116ad5d087dc8a9d7fb3293e36b9b9cb24
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145099549"
---
- 若要筛选多个值的任何匹配项（OR 查询），请用逗号分隔这些值。 例如 `label:"good first issue",bug` 将列出所有标记为 `good first issue` 或 `bug` 的问题。
- 要筛选缺少特定值的字段，请在筛选器之前加上 `-`。 例如，`-label:"bug"` 将仅显示没有标签 `bug` 的项。
- 要筛选缺少所有值的字段，请输入 `no:`，后跟字段名称。 例如，`no:assignee` 将仅显示没有受理人的项。
- 若要按状态进行筛选，请输入 `is:`。 例如，`is: issue` 或 `is:open`。
- 多个过滤条件之间用逗号分隔。 例如，`status:"In progress" -label:"bug" no:assignee` 将仅显示状态为 `In progress`、没有标签 `bug` 且没有受理人的项。
- 要筛选迭代字段的上一个、当前或下一个迭代，请使用 `@previous`、`@current` 或 `@next`。 例如，`sprint:@current`。
- 若要筛选分配给查看器的项，请使用 `@me`。 例如，`assignee:@me`。 使用此视图的任何人都会看到分配给自己的项。
- 若要筛选日期和数字字段，请使用 `>`、`>=`、`<`、`<=` 和 `..` 范围查询。 例如：`target:2022-03-01..2022-03-15`。 有关详细信息，请参阅“[了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)”。
