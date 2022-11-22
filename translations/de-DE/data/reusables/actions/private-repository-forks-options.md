---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163824"
---
- **Ausführen von Workflows aus Fork-Pull Requests**: Ermöglicht Benutzern das Ausführen von Workflows aus Fork-Pull Requests mit einem `GITHUB_TOKEN` mit ausschließlicher Leseberechtigung und ohne Zugriff auf geheime Schlüssel.
- **Senden von Schreibtoken an Workflows aus Pull Requests**: Ermöglicht Pull Requests aus Forks die Verwendung eines `GITHUB_TOKEN` mit Schreibberechtigung.
- **Senden von Geheimnissen an Workflows aus Pull Requests**: Stellt dem Pull Request alle Geheimnisse zur Verfügung.{% ifversion actions-private-fork-workflow-approvals %}
- **Genehmigung für Fork-Pull Request-Workflows erforderlich**: Workflows, die ohne Schreibberechtigung für Pull Requests von Projektmitarbeitern ausgeführt werden, müssen von einer Person mit Schreibberechtigung genehmigt werden, bevor sie ausgeführt werden können.{% endif %}
