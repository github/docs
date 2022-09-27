---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079933"
---
パブリック リポジトリの再利用可能なワークフローは、SHA、リリース タグ、またはブランチ名を使って参照できます。 詳しくは、「[再利用可能なワークフローの呼び出し](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)」をご覧ください。 

再利用可能なワークフローを使うワークフローを再実行し、参照が SHA ではない場合は、注意すべきいくつかの動作があります。

* ワークフロー内のすべてのジョブを再実行すると、指定した参照の再利用可能なワークフローが使われます。 ワークフロー内のすべてのジョブの再実行について詳しくは、「[ワークフロー内のすべてのジョブを再実行する](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)」をご覧ください。
* 失敗したジョブまたはワークフロー内の特定のジョブを再実行すると、最初の試行と同じコミット SHA の再利用可能なワークフローが使われます。 ワークフロー内の失敗したジョブの再実行について詳しくは、「[ワークフローで失敗したジョブを再実行する](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow)」をご覧ください。 ワークフロー内の特定のジョブの再実行について詳しくは、「[ワークフローの特定のジョブを再実行する](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow)」をご覧ください。
