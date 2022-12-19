---
ms.openlocfilehash: d503b739b31064e743351c490bfbdc2dda14028f
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865930"
---
リポジトリ`GITHUB_TOKEN`を使用してタスクを実行する場合、{% ifversion actions-token-updated-triggers %} `GITHUB_TOKEN` によって`workflow_dispatch`トリガーされるイベント (例外) と `repository_dispatch`、{% endif %} は新しいワークフロー実行を作成しません。 これによって、予想外の再帰的なワークフローの実行が生じないようになります。 たとえば、ワークフロー実行でリポジトリの `GITHUB_TOKEN` を使用してコードがプッシュされた場合、`push` イベントの発生時に実行するように構成されたワークフローがリポジトリに含まれている場合でも、新しいワークフローは実行されません。
