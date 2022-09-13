---
ms.openlocfilehash: 346aee71fb06f01bf9130c8b80039206816c106a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111769"
---
Use el protocolo X-Forwarded-For **solo** cuando el protocolo PROXY no esté disponible. El encabezado `X-Forwarded-For` solo funciona con HTTP y HTTPS. La dirección IP informada para las conexiones de Git a través de SSH mostrarán la IP del balanceador de carga.
