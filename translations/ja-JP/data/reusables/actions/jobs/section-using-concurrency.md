---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145089479"
---
同じコンカレンシー グループを使うジョブまたはワークフローを一度に 1 つだけ実行するには、`concurrency` を使います。 並行処理グループには、任意の文字列または式を使用できます。 この式には [`github` コンテキスト](/actions/learn-github-actions/contexts#github-context)のみを使用できます。 式の詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

ジョブ レベルで `concurrency` を指定することもできます。 詳細については、「[`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency)」を参照してください。

{% data reusables.actions.actions-group-concurrency %}
