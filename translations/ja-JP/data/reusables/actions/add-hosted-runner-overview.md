---
ms.openlocfilehash: 7020f9ed86843200a1b56c9b9142ed238aaf0dd5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764016"
---
使用可能なオプションのリストから、オペレーティング システムとハードウェア構成を選ぶことができます。 このランナーの新しいインスタンスが自動スケーリングによってデプロイされると、ここで定義したオペレーティング システムとハードウェア構成が使用されます。

また、ランナーを識別するラベルを定義することもできます。これは、処理のためにワークフローを使ってランナーにジョブを送信する方法です (`runs-on` を使います)。 新しいランナーが既定のグループに自動的に割り当てられるか、ランナー作成プロセス中にランナーを結合する必要があるグループを選ぶことができます。 また、ランナーを登録した後で、ランナーのグループ メンバーシップを変更できます。 詳しくは、「[{% data variables.actions.hosted_runner %}へのアクセスの制御](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)」を参照してください。