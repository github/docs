---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145100257"
---
如果使用 apex 域作为自定义域名，建议还设置一个 `www` 子域。 如果通过 DNS 提供程序配置每种域类型的正确记录，{% data variables.product.prodname_pages %} 将自动在域之间创建重定向。 例如，如果将 `www.example.com` 配置为站点的自定义域，并且为顶点和 `www` 域设置了 {% data variables.product.prodname_pages %} DNS 记录，则 `example.com` 将重定向到 `www.example.com`。 请注意，自动重定向仅适用于 `www` 子域。 自动重定向不适用于任何其他子域，如 `blog`。
