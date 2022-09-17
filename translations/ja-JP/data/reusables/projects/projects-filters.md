---
ms.openlocfilehash: 02959a116ad5d087dc8a9d7fb3293e36b9b9cb24
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118629"
---
- 複数の値 (OR クエリ) の一致をフィルター処理するには、値をコンマで区切ります。 たとえば、`label:"good first issue",bug` は、`good first issue` または `bug` とラベル付けされたすべての Issue を一覧表示します。
- 特定の値がない場合にフィルター処理するには、フィルターの前に `-` を配置します。 たとえば、`-label:"bug"` は、`bug` のラベルがない項目のみを表示します。
- すべての値がない場合にフィルター処理するには、`no:` の後にフィールド名を入力します。 たとえば、`no:assignee` は、担当者がいない項目のみを表示します。
- 状態でフィルター処理するには、「`is:`」と入力します。 たとえば、`is: issue` または `is:open` です。
- 複数のフィルタは空白で区切ってください。 たとえば、`status:"In progress" -label:"bug" no:assignee` は、状態が `In progress` で、`bug` のラベルがなく、担当者がいない項目のみを表示します。
- 繰り返しフィールドの前、現在、または次の繰り返しをフィルター処理するには、`@previous`、`@current`、`@next` のいずれかを使用します。 たとえば、`sprint:@current` のようにします。
- ビューアーに割り当てられている項目をフィルター処理するには、`@me` を使用します。 たとえば、`assignee:@me` のようにします。 このビューを使用しているユーザーには、自分に割り当てられた項目が表示されます。
- 日付と数値のフィールドをフィルター処理するには、`>`、`>=`、`<`、`<=`、`..` の範囲クエリを使用します。 (例: `target:2022-03-01..2022-03-15`)。 詳細については、「[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。
