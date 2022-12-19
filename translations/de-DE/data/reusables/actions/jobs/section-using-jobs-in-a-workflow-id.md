---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103708"
---
Verwende `jobs.<job_id>`, um deinem Auftrag einen eindeutigen Bezeichner zu geben. Der Schlüssel `job_id` ist ein String und der Wert umfasst eine Zuordnung der Konfigurationsdaten für den Auftrag. Du musst `<job_id>` mit einer Zeichenfolge ersetzen, die für das `jobs`-Objekt eindeutig ist. `<job_id>` muss mit einem Buchstaben oder `_` beginnen und darf nur alphanumerische Zeichen, `-` oder `_` enthalten.

#### Beispiel: Erstellen von Aufträgen

In diesem Beispiel wurden zwei Aufträge erstellt und ihre `job_id`-Werte sind `my_first_job` und `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
