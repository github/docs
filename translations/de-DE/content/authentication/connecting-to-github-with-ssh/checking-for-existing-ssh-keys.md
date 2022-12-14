---
title: Auf vorhandene SSH-Schlüssel prüfen
intro: 'Bevor du einen SSH-Schlüssel erstellst, kannst du überprüfen, ob für dich bereits SSH-Schlüssel vorhanden sind.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 4487e44b1cbba7038364e92f3194d5c3c06c505b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409107'
---
## Informationen über SSH-Schlüssel

Über SSH (Secure Shell Protocol) kannst du Git-Vorgänge für Repositorys in {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} ausführen. Weitere Informationen findest du unter [Informationen zu SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

Wenn du über einen bestehenden SSH-Schlüssel verfügst, kannst du Git-Vorgänge mit diesem Schlüssel über SSH authentifizieren.

## Auf vorhandene SSH-Schlüssel prüfen

Bevor du einen neuen SSH-Schlüssel generierst, solltest du deinen lokalen Computer auf bestehende Schlüssel prüfen.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Gib `ls -al ~/.ssh` ein, um zu sehen, ob SSH-Schlüssel vorhanden sind.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Überprüfe die Verzeichnisliste, um zu ermitteln, ob du bereits einen öffentlichen SSH-Schlüssel besitzen. Standardmäßig ist der {% ifversion ghae %}-Dateiname eines unterstützten öffentlichen Schlüssels für {% data variables.product.product_name %} *id_rsa.pub*. {% else %}Dateinamender unterstützten öffentlichen Schlüssel für {% data variables.product.product_name %} sind einer der Folgenden.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Tipp**: Wenn du einen Fehler erhältst, das *~/.* ssh nicht vorhanden ist, verfügst du nicht über ein vorhandenes SSH-Schlüsselpaar am Standardspeicherort. Du kannst im nächsten Schritt ein neues SSH-Schlüsselpaar erstellen.

  {% endtip %}

4. Generiere entweder einen neuen SSH-Schlüssel oder lade einen vorhandenen Schlüssel hoch.
    - Wenn du nicht über ein unterstütztes öffentliches und privates Schlüsselpaar verfügst oder keine verfügbaren verwenden möchtest, generierst du einen neuen SSH-Schlüssel.
    - Wenn ein vorhandenes öffentliches und privates Schlüsselpaar aufgeführt ist (z. B. *id_rsa.pub* und *id_rsa*), mit dem du eine Verbindung mit {% data variables.product.product_name %} herstellen möchtest, kannst du dem ssh-Agent den Schlüssel hinzufügen.

      Weitere Informationen zum Erstellen eines neuen SSH-Schlüssels oder einer Ergänzung eines vorhandenen Schlüssels zum ssh-Agent findest du unter „[Generieren eines neuen SSH-Schlüssels und Hinzufügen zum ssh-Agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)“.
