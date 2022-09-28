---
ms.openlocfilehash: 6d9406bf1e4b268122142416f69c62e8f55337fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147423677"
---
{% data variables.product.prodname_projects_v2 %} には、特定のイベントに基づいて項目の **状態** を更新するために使用できる組み込みのワークフローが含まれています。 たとえば、項目がプロジェクトに追加されたときに状態を **Todo** に自動的に設定することも、Issue が終了したときに状態を **Done** に設定することもできます。

プロジェクトが初期化されると、既定で 2 つのワークフローが有効になります。プロジェクトの Issue または pull request が終了すると、その状態が **Done** に設定され、プロジェクトの pull request がマージされると、その状態が **Done** に設定されます。
