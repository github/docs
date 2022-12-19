---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158854"
---
- 複数の値 (OR クエリ) の一致をフィルター処理するには、値をコンマで区切ります。 たとえば、`label:"good first issue",bug` は、`good first issue` または `bug` とラベル付けされたすべての Issue を一覧表示します。
- 特定の値がない場合にフィルター処理するには、フィルターの前に `-` を配置します。 たとえば、`-label:"bug"` は、`bug` のラベルがない項目のみを表示します。
- すべての値がない場合にフィルター処理するには、`no:` の後にフィールド名を入力します。 たとえば、`no:assignee` は、担当者がいない項目のみを表示します。
- 状態でフィルター処理するには、「`is:`」と入力します。 たとえば、`is: issue` または `is:open` です。
- 複数のフィルタは空白で区切ってください。 たとえば、`status:"In progress" -label:"bug" no:assignee` は、状態が `In progress` で、`bug` のラベルがなく、担当者がいない項目のみを表示します。
- 繰り返しフィールドの前、現在、または次の繰り返しをフィルター処理するには、`@previous`、`@current`、`@next` のいずれかを使用します。 たとえば、`iteration:@current` のようにします。
- ビューアーに割り当てられている項目をフィルター処理するには、`@me` を使用します。 たとえば、`assignee:@me` のようにします。 このビューを使用しているユーザーには、自分に割り当てられた項目が表示されます。
- 項目の最終更新日別にフィルタリングするには、`last-updated:` を使用し、それに日数を指定します。 このフィルターではユニットとしてのみ `{number}days` がサポートされます (あるいは、1 日の場合は `1day`)。 たとえば、`last-updated:7days` の場合、7 日以上前に最終更新された項目のみが表示されます。
- 日付と数値のフィールドをフィルター処理するには、`>`、`>=`、`<`、`<=`、`..` の範囲クエリを使用します。 (例: `target:2022-03-01..2022-03-15`)。 詳細については、「[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。 {% ifversion projects-v2-tasklists %}
- 指定の issue によって追跡される issue に対してフィルタリングするには、`tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"` を使用し、`<OWNER>` をリポジトリ所有者に、`<REPO>` をリポジトリ名に、`<ISSUE NUMBER>` を issue 番号に置換します。 {% endif %}
