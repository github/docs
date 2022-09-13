---
ms.openlocfilehash: d240321c099e83715916beaf580b9fe869e99d9e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763972"
---
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. ランナー グループ名を変更します。

{% elsif ghae or ghes < 3.4 %} {% data reusables.actions.configure-runner-group %}
1. ランナー グループ名を変更します。
{% endif %}