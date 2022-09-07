---
ms.openlocfilehash: 346aee71fb06f01bf9130c8b80039206816c106a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093740"
---
Use o protocolo X-Forwarded-For **somente** quando o protocolo PROXY não estiver disponível. O cabeçalho `X-Forwarded-For` só funciona com HTTP e HTTPS. O endereço IP informado para conexões Git por SSH mostrará o IP do balanceador de carga.
