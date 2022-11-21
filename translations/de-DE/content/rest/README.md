---
ms.openlocfilehash: 059e56c6821926e1d6a604c95dd1fa167de2db6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145131866"
---
# REST

Im `/content/rest`-Verzeichnis befinden sich die GitHub GraphQL-API-Dokumente!

* Die Verzeichnisse `/content/rest/guides` und `/content/rest/overview` enthalten reguläre Artikel. Diese sind von Personen bearbeitbar.
* Das `/content/rest/reference`-Verzeichnis enthält einen Artikel für jede Gruppe von Endpunkten in der GitHub REST-API. Die meisten Inhalte in diesem Verzeichnis werden mithilfe von `include`-Tags gerendert.

  Der von `include`-Tags gerenderte Inhalt stammt aus dem `/lib/rest/static`-Verzeichnis, das intern in GitHub automatisch aus dem API-Quellcode generiert wird, und sollte nicht von einer Person bearbeitet werden. Weitere Informationen findest du unter [`/lib/rest/README.md`](/lib/rest/README.md).

  **Änderungen an Inhalten, die von `include`-Tags gerendert werden, können nicht akzeptiert werden. Du kannst jedoch ein Problem öffnen, das die Änderungen beschreibt, die du sehen möchtest.**
