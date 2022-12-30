---
ms.openlocfilehash: 346aee71fb06f01bf9130c8b80039206816c106a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093740"
---
Use o protocolo X-Forwarded-For **somente** quando o protocolo PROXY não estiver disponível. O cabeçalho `X-Forwarded-For` só funciona com HTTP e HTTPS. O endereço IP informado para conexões Git por SSH mostrará o IP do balanceador de carga.
