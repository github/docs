---
ms.openlocfilehash: 383458a6038400299b6ab8759b8bbfd1ebbd3a2d
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "147886221"
---
| Estado         | Descripción |
| -------------- | ----------- |
| **Verified**   | La confirmación está firmada, la firma se verificó con éxito y el confirmante es el único autor que ha habilitado el modo vigilante. 
| **Partially&nbsp;verified** | La confirmación se firmó y la firma se verificó con éxito, pero la confirmación tiene un autor que: a) no es el confirmante y b) habilitó el modo vigilante. En este caso, la firma de confirmación no garantiza un consentimiento del autor, así que la confirmación se verifica solo parcialmente.
| **Unverified** | Cualquiera de las siguientes afirmaciones es verdadera:<br>- La confirmación se ha firmado pero la firma no se ha podido verificar.<br>- La confirmación no está firmada y el confirmante ha habilitado el modo vigilante.<br>- La confirmación no está firmada y un autor ha habilitado el modo vigilante.<br>
