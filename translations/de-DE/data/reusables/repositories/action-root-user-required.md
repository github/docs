---
ms.openlocfilehash: 81695036af856b526d3d9483e36b36a06a85b7ee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145105791"
---
**Hinweis**: {% data variables.product.prodname_actions %} müssen vom standardmäßigen Docker-Benutzer (Root) ausgeführt werden. Stelle sicher, dass dein Dockerfile nicht die `USER`-Anweisung festlegt, andernfalls kannst du nicht auf `GITHUB_WORKSPACE` zugreifen.
