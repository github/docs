---
ms.openlocfilehash: d810c1d04e070750ead1b64ff62e54842a86feb1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065881"
---
如果 {% data variables.product.prodname_actions %} 服务暂时不可用，则在触发后 30 分钟内没有排队时，运行的工作流程运行将被丢弃。 例如，如果触发了一个工作流程，而 {% data variables.product.prodname_actions %} 服务在 31 分钟或更长时间内不可用，则该工作流程将不会被处理。
