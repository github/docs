---
ms.openlocfilehash: 43e874e29bca10faa81fd0f24e4098fe20eab90c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066202"
---
Schlüssel | type | BESCHREIBUNG
----|------|------------
`action` | `string` | Die durchgeführte Aktion. Kann entweder `added` oder `removed` sein.
`repository_selection` | `string` | Die Auswahl an Repositorys, in denen sich die Installation befindet. Kann entweder `selected` oder `all` sein.
`repositories_added` | `array` | Ein Array aus Repositoryobjekten, die der Installation hinzugefügt wurden.
`repositories_removed` | `array` | Ein Array aus Repositoryobjekten, die aus der Installation entfernt wurden.
