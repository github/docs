---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108467"
---
Mithilfe des Konfigurationsskripts kannst du einen neuen Runner automatisch einer Gruppe hinzufügen. Mit diesem Befehl wird z. B. ein neuer Runner registriert und mithilfe des Parameters `--runnergroup` einer Gruppe mit dem Namen `rg-runnergroup` hinzugefügt.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

Der Befehl kann nicht ausgeführt werden, wenn die Runnergruppe nicht vorhanden ist:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
