---
ms.openlocfilehash: 39b050df26b1192db1f0d539b2bd789f90c022d1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763985"
---
プライベート リポジトリでは、{% data variables.actions.hosted_runner %} のみ使うことをお勧めします。
- ワークフロー内でコードを実行する pull request を作成することで、リポジトリのフォークによって、{% data variables.actions.hosted_runner %} 上で危険なコードが実行される可能性があります。
- フォークされたリポジトリを使って {% data variables.actions.hosted_runner %} 上でジョブを実行できるようにすると、予測しないコストが発生する可能性があります。