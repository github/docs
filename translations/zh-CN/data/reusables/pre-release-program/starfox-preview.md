---
ms.openlocfilehash: 3557e85680e20919fbe049cfe30ccacc93d9c17c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879807"
---
{% note %}

注意：项目卡详细信息现在显示在项目相关议题和时间线事件的 REST API 响应中。 此功能现在可供开发者预览。 有关详细信息，请参阅此[博客文章](https://developer.github.com/changes/2018-09-05-project-card-events)。

若要接收 `project_card` 属性，则必须为存储库[启用](/articles/disabling-project-boards-in-a-repository)项目板，并且必须在 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)：

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
