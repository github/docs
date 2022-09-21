---
ms.openlocfilehash: 110de05126a0656467f63f7c377b257adf401c26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064960"
---
允许推送机密时，将在“安全”选项卡中创建警报。如果指定机密为误报或仅在测试中使用，则 {% data variables.product.prodname_dotcom %} 会关闭警报，且不会发送通知。 如果指定机密是真实的并且稍后将修复它，{% data variables.product.prodname_dotcom %} 会将安全警报保持打开状态，并向提交的作者以及存储库管理员发送通知。 有关详细信息，请参阅[管理来自机密扫描的警报](/code-security/secret-scanning/managing-alerts-from-secret-scanning)。
