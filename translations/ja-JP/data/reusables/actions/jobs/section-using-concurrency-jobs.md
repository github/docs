---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091347"
---
{% note %}

**注:** ジョブ レベルでコンカレンシーが指定されている場合、ジョブの順序は保証されないか、互いに 5 分以内にそのキューを実行します。

{% endnote %}

同じコンカレンシー グループを使うジョブまたはワークフローを一度に 1 つだけ実行するには、`jobs.<job_id>.concurrency` を使います。 並行処理グループには、任意の文字列または式を使用できます。 式は、`secrets` コンテキストを除く任意のコンテキストを使用できます。 式について詳しくは、「[式](/actions/learn-github-actions/expressions)」を参照してください。

ワークフロー レベルで `concurrency` を指定することもできます。 詳細については、「[`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency)」を参照してください。

{% data reusables.actions.actions-group-concurrency %}
