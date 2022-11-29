---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103968"
---
Wenn du Aktivitätstypen oder Filter für ein Ereignis und deine Workflowauslöser für mehrere Ereignisse angibst, musst du jedes Ereignis separat konfigurieren. Du musst einen Doppelpunkt (`:`) an alle Ereignisse anhängen, einschließlich Ereignisse ohne Konfiguration.

Beispielsweise wird ein Workflow mit dem folgenden `on`-Wert ausgeführt, wenn:

- Eine Bezeichnung erstellt wird
- Ein Push an die `main`-Verzweigung im Repository vorgenommen wird
- Ein Push an eine {% data variables.product.prodname_pages %}-aktivierte Verzweigung vorgenommen wird

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
