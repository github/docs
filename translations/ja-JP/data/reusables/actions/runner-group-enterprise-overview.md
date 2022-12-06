---
ms.openlocfilehash: 761cee3710852bda8e1f36d47da475e2c6d6b130
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109746"
---
ランナー グループは、Organization レベルと Enterprise レベルのランナーへのアクセスを制御するために使用されます。 Enterprise の所有者はアクセス ポリシーを設定して、Enterprise 内のどの Organization {% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}がランナー グループにアクセスできるかを制御できます。 Organization の所有者はアクセス ポリシーを設定して、Organization 内のどのリポジトリ{% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}がランナー グループにアクセスできるかを制御できます。

Enterprise の所有者がランナー グループにアクセス権を付与する場合、Organization の所有者には、Organization のランナー設定に一覧表示されているランナー グループが表示されます。 その後、Organization の所有者は、リポジトリ{% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}の詳細な追加アクセス ポリシーを、Enterprise ランナー グループに割り当てることができます。
