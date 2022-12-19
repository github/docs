---
ms.openlocfilehash: 6f5f7b9a1ef172b471215d5ea66d834fb00e19d7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876184"
---
默认情况下，用户拥有的和组织范围内的 {% data variables.projects.projects_v1_boards %} 是专用的，只有对 {% data variables.projects.projects_v1_board %} 具有读取、写入或管理权限的人才能看到。 {% ifversion ghae %}内部{% else %}公共{% endif %} {% data variables.projects.projects_v1_board %} 对{% ifversion ghae %}可访问企业的任何人{% else %}使用 {% data variables.projects.projects_v1_board %} URL 的任何人{% endif %}可见。 存储库级 {% data variables.projects.projects_v1_boards %} 共享其存储库的可见性。 也就是说，专用存储库将有一个专用项目，这种可见性无法更改。
