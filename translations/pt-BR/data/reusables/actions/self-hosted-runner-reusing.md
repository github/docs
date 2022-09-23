---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145085265"
---
Como alternativa, se você não tiver acesso ao repositório{% ifversion fpt %} ou à organização{% elsif ghes or ghec or ghae %}, à organização ou à empresa{% endif %} no {% data variables.product.product_name %} para remover um executor, mas desejar reutilizar o computador do executor, exclua o arquivo `.runner` dentro do diretório do aplicativo do executor auto-hospedado. Isso permite que o runner seja registrado sem ter que baixar novamente o aplicativo do runner auto-hospedado.
