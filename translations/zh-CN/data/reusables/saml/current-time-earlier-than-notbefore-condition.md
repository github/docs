---
ms.openlocfilehash: b0db396765557122de192fe6dde98aeeb0057ec2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147093166"
---
## 错误：“当前时间早于 NotBefore 条件”

当 IdP 与 {% data variables.product.product_name %} 之间的时间差太大时可能会发生此错误，这通常发生在自托管 IdP 中。

{% ifversion ghes %}为防止此问题，我们建议将设备指向与 IdP 相同的网络时间协议 (NTP) 源（如果可能）。 {% endif %}如果遇到此错误，请确保 {% ifversion ghes %}设备{% else %}IdP{% endif %} 上的时间与 NTP 服务器正确同步。

如果使用 ADFS 作为 IdP，则对于 {% data variables.product.prodname_dotcom %}，也将 ADFS 中的 `NotBeforeSkew` 设置为 1 分钟。 如果 `NotBeforeSkew` 设置为 0，即使非常小的时间差（包括几毫秒）也会导致身份验证问题。