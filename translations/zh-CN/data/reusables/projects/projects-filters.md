---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158851"
---
- 若要筛选多个值的任何匹配项（OR 查询），请用逗号分隔这些值。 例如 `label:"good first issue",bug` 将列出所有标记为 `good first issue` 或 `bug` 的问题。
- 要筛选缺少特定值的字段，请在筛选器之前加上 `-`。 例如，`-label:"bug"` 将仅显示没有标签 `bug` 的项。
- 要筛选缺少所有值的字段，请输入 `no:`，后跟字段名称。 例如，`no:assignee` 将仅显示没有受理人的项。
- 若要按状态进行筛选，请输入 `is:`。 例如，`is: issue` 或 `is:open`。
- 多个过滤条件之间用逗号分隔。 例如，`status:"In progress" -label:"bug" no:assignee` 将仅显示状态为 `In progress`、没有标签 `bug` 且没有受理人的项。
- 要筛选迭代字段的上一个、当前或下一个迭代，请使用 `@previous`、`@current` 或 `@next`。 例如，`iteration:@current`。
- 若要筛选分配给查看器的项，请使用 `@me`。 例如，`assignee:@me`。 使用此视图的任何人都会看到分配给自己的项。
- 若要按项的上次更新时间进行筛选，请使用 `last-updated:`，后跟天数。 此筛选器仅支持 `{number}days`（一天用 `1day`）为一个单位。 例如，`last-updated:7days` 将仅显示上次更新在 7 天或 7 天前的项。
- 若要筛选日期和数字字段，请使用 `>`、`>=`、`<`、`<=` 和 `..` 范围查询。 例如：`target:2022-03-01..2022-03-15`。 有关详细信息，请参阅“[了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)”。 {% ifversion projects-v2-tasklists %}
- 若要筛选指定问题跟踪的问题，请使用 `tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"` 并将 `<OWNER>` 替换为存储库所有者、将 `<REPO>` 替换为存储库名称，将 `<ISSUE NUMBER>` 替换为问题编号。 {% endif %}
