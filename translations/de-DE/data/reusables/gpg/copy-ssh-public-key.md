---
ms.openlocfilehash: a707921d4c8f6afa3ce5e59e2d58180ecb38d29e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147653424"
---
1. Kopiere den öffentlichen SSH-Schlüssel in die Zwischenablage.

  Wenn die Datei mit Deinem öffentlichen SSH-Schlüssel einen anderen Namen hat als die Datei im Beispielcode, passe den Dateinamen im Code entsprechend an. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Tipp:** Wenn `pbcopy` nicht funktioniert, kannst Du den ausgeblendeten Ordner `.ssh` suchen, die Datei in Deinem bevorzugten Text-Editor öffnen und in die Zwischenablage kopieren.

  {% endtip %} {% endmac %} {% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Tipp:** Wenn `clip` nicht funktioniert, kannst Du den ausgeblendeten Ordner `.ssh` suchen, die Datei in Deinem bevorzugten Text-Editor öffnen und in die Zwischenablage kopieren.

  {% endtip %} {% endwindows %} {% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Tipp:** Alternativ kannst Du den ausgeblendeten Ordner `.ssh` suchen, die Datei in Deinem bevorzugten Text-Editor öffnen und in die Zwischenablage kopieren.

  {% endtip %} {% endlinux %}
