---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178608"
---
{%- ifversion restrict-groups-to-workflows %}
1. ワークフロー アクセス用のポリシーを割り当てます。

   特定のワークフローの一覧またはすべてのワークフローからアクセスできるようにランナー グループを構成できます。 エンタープライズによって共有された組織のランナー グループを構成している場合、この設定をオーバーライドできません。 ランナー グループにアクセスできるワークフローを指定する場合は、リポジトリ名と所有者を含むワークフローへの完全なパスを使用し、ワークフローをブランチ、タグ、または完全 SHA にピン留めする必要があります。 (例: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`)。 
   
   選択したワークフロー内で直接定義されたジョブのみがランナー グループにアクセスできます。{%- endif %}
