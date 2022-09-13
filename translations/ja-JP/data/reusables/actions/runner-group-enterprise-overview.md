---
ms.openlocfilehash: 3e11d726bb45f2a291ea7fbae4d10770cd505eaf
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763976"
---
ランナー グループは、Organization レベルと Enterprise レベルのランナーへのアクセスを制御するために使用されます。 Enterprise の所有者はアクセス ポリシーを設定して、Enterprise 内のどの Organization {% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}がランナー グループにアクセスできるかを制御できます。 Organization の所有者はアクセス ポリシーを設定して、Organization 内のどのリポジトリ{% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}がランナー グループにアクセスできるかを制御できます。

Enterprise の所有者がランナー グループにアクセス権を付与する場合、Organization の所有者には、Organization のランナー設定に一覧表示されているランナー グループが表示されます。 その後、Organization の所有者は、リポジトリ{% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}の詳細な追加アクセス ポリシーを、Enterprise ランナー グループに割り当てることができます。