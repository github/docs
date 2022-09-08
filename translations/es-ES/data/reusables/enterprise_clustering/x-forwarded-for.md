---
ms.openlocfilehash: 346aee71fb06f01bf9130c8b80039206816c106a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111769"
---
Use el protocolo X-Forwarded-For **solo** cuando el protocolo PROXY no esté disponible. El encabezado `X-Forwarded-For` solo funciona con HTTP y HTTPS. La dirección IP informada para las conexiones de Git a través de SSH mostrarán la IP del balanceador de carga.
