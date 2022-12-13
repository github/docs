---
ms.openlocfilehash: 5f81e75a6968f2a63114b23674561e82f6a0bae6
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 04/07/2022
ms.locfileid: "141515370"
---
In dieser Tabelle findest Du Beispiele dafür, wie Benutzernamen in {% data variables.product.prodname_ghe_server %} normalisiert werden:

| Username | Normalisierter Benutzername | Ergebnis
|----------|---------------------|-------
| Ms.Bubbles | `ms-bubbles` | Dieser Benutzername wird erfolgreich erstellt.
| !Ms.Bubbles | `-ms-bubbles` | Dieser Benutzername wird nicht erstellt, da er mit einem Bindestrich beginnt.
| Ms.Bubbles! | `ms-bubbles-` | Dieser Benutzername wird nicht erstellt, da er mit einem Bindestrich endet.
| Ms!!Bubbles | `ms--bubbles` | Dieser Benutzername wird nicht erstellt, da er zwei aufeinanderfolgende Bindestriche enthält.
| Ms!Bubbles | `ms-bubbles` | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden.
| Ms.Bubbles@example.com | `ms-bubbles` | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden.
