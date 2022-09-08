---
ms.openlocfilehash: 9c62e7c7c015ddaf1fb84d7c27eadce9e1a42487
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114781"
---
リポジトリの `GITHUB_TOKEN` を使用してタスクを実行する場合、`GITHUB_TOKEN` によってトリガーされたイベントでは、新しいワークフロー実行は作成されません。 これによって、予想外の再帰的なワークフローの実行が生じないようになります。 たとえば、ワークフロー実行でリポジトリの `GITHUB_TOKEN` を使用してコードがプッシュされた場合、`push` イベントの発生時に実行するように構成されたワークフローがリポジトリに含まれている場合でも、新しいワークフローは実行されません。
