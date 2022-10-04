---
ms.openlocfilehash: 1e9105d419c42c1210ebe51b785ef3c36df094f8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147066080"
---
当工作流通过引用存储操作的存储库来使用操作时，{% data variables.product.prodname_actions %} 将首先尝试在 {% data variables.product.product_location %} 上查找存储库。 如果 {% data variables.product.product_location %} 上不存在存储库，并且你启用了对 {% data variables.product.prodname_dotcom_the_website %} 的自动访问，{% data variables.product.prodname_actions %} 将尝试在 {% data variables.product.prodname_dotcom_the_website %} 上查找存储库。
