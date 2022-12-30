---
ms.openlocfilehash: e3bbac236dce195487aada32132e9b78e27500ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111546"
---
Puede supervisar la disponibilidad de {% data variables.product.prodname_ghe_server %} si comprueba el código de estado que se devuelve para la URL `https://HOSTNAME/status`. Un dispositivo que puede servir el tráfico de usuario devolverá un código de estado de `200` (correcto). Un dispositivo puede devolver un código `503` (Servicio no disponible) por distintas razones:
 - El aparato es una réplica pasiva, como la réplica en una configuración de disponibilidad alta de dos nodos.
 - El aparato está en modo de mantenimiento.
 - El aparato es parte de una configuración de replicación geográfica, pero es una réplica inactiva.

También puedes utilizar el Tablero de resumen de replicación disponible en:

`https://HOSTNAME/setup/replication`
