---
title: Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum ssh-agent
intro: 'Wenn du geprüft hast, ob SSH-Schlüssel vorhanden sind, kannst du einen neuen SSH-Schlüssel für die Authentifizierung generieren und zum SSH-Agent hinzufügen.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 024d74d62b99b6dd94fcecdc835d6094f83234f4
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118972'
---
## Informationen zu SSH-Schlüsselpassphrasen

{% data reusables.ssh.about-ssh %} Weitere Informationen findest du unter [Informationen zu SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

Wenn du einen SSH-Schlüssel generierst, kannst du eine Passphrase hinzufügen, um ihn noch besser zu schützen. Wenn du den Schlüssel verwendest, muss du die Passphrase eingeben. Wenn dein Schlüssel eine Passphrase umfasst und du diese nicht jedes Mal eingeben möchtest, wenn du den Schlüssel verwendest, kannst du diesen dem SSH-Agent hinzufügen. Der SSH-Agent verwaltet deine SSH-Schlüssel und speichert deine Passphrase.

Wenn du noch keinen SSH-Schlüssel hast, musst du einen neuen SSH-Schlüssel generieren, der für die Authentifizierung verwendet werden soll. Wenn du nicht sicher bist, ob du bereits über einen SSH-Schlüssel verfügst, kannst du nach vorhandenen Schlüsseln suchen. Weitere Informationen findest du unter [Überprüfen auf vorhandene SSH-Schlüssel](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).

Wenn du einen Hardwaresicherheitsschlüssel zum Authentifizieren von {% data variables.product.product_name %} verwenden möchtest, musst du einen neuen SSH-Schlüssel für deinen Hardwaresicherheitsschlüssel generieren. Du musst deinen Hardwaresicherheitsschlüssel mit deinem Computer verbinden, wenn du dich mit dem Schlüsselpaar authentifizierst. Weitere Informationen findest du unter [Versionshinweise zu OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Einen neuen SSH-Schlüssel erzeugen

Du kannst einen neuen SSH-Schlüssel auf deinem lokalen Computer generieren. Nachdem du den Schlüssel generiert hast, kannst du ihn deinem Konto auf {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} hinzufügen, um die Authentifizierung für Git-Vorgänge über SSH zu aktivieren.

{% ifversion ghes %}

Wenn du Websiteadministrator für {% data variables.location.product_location %} bist, kannst du dir selbst mit demselben Schlüssel SSH-Administratorzugriff auf die Instanz zu gewähren. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Füge den folgenden Text ein, und ergänze dabei deine {% data variables.product.product_name %}-E-Mail-Adresse.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **Hinweis:** Wenn du ein Legacy-System verwendest, das den Ed25519-Algorithmus nicht unterstützt, verwende:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}

   Dadurch wird ein neuer SSH-Schlüssel erzeugt und die angegebene E-Mail-Adresse als Kennzeichnung verwendet.
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
Wenn du aufgefordert wirst, eine Datei einzugeben, in der der Schlüssel gespeichert werden soll, kannst du die **EINGABETASTE** drücken, um den Standarddateispeicherort zu akzeptieren. Hinweis: Wenn du zuvor SSH-Schlüssel erstellt hast, wirst du möglicherweise von ssh-keygen aufgefordert, einen anderen Schlüssel neu zu schreiben. In diesem Fall wird empfohlen, einen SSH-Schlüssel mit benutzerdefiniertem Namen zu erstellen. Gib hierzu den Standarddateispeicherort ein, und ersetze id_ssh_keyname durch deinen benutzerdefinierten Schlüsselnamen.


   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. Gib an der Eingabeaufforderung eine sichere Passphrase ein. Weitere Informationen findest du unter [Arbeiten mit SSH-Schlüsselpassphrasen](/articles/working-with-ssh-key-passphrases).
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Deinen SSH-Schlüssel zum SSH-Agenten hinzufügen

Bevor du dem SSH-Agent einen neuen SSH-Schlüssel hinzufügst, um deine Schlüssel zu verwalten, solltest du nach vorhandenen SSH-Schlüsseln überprüft und einen neuen SSH-Schlüssel generiert haben. <span class="platform-mac">Verwende beim Hinzufügen des SSH-Schlüssels zum Agent den macOS-Standardbefehl `ssh-add` und keine Anwendung, die von [MacPorts](https://www.macports.org/), [Homebrew](http://brew.sh/) oder einer anderen externen Quelle installiert wurde.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Wenn du macOS Sierra 10.12.2 oder höher verwendest, musst du die `~/.ssh/config`-Datei bearbeiten, damit automatisch Schlüssel in den SSH-Agenten geladen und Passphrasen in der Schlüsselkette gespeichert werden.

   * Überprüfe zunächst, ob deine `~/.ssh/config`-Datei am Standardspeicherort vorhanden ist.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * Wenn die Datei nicht existiert, musst du sie erstellen.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Öffne deine `~/.ssh/config`-Datei und ändere dann die Datei, um die folgenden Zeilen zu enthalten. Wenn deine SSH-Schlüsseldatei einen anderen Namen hat als die Datei im Beispielcode, passe den Dateinamen im Code entsprechend an.

     ```
     Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Hinweise:**

     - Wenn du keine Passphrase zu deinem Schlüssel hinzufügen möchtest, solltest du die `UseKeychain`-Zeile auslassen.

     - Wenn ein `Bad configuration option: usekeychain`-Fehler angezeigt wird, füge dem Abschnitt `Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}` der Konfiguration eine zusätzliche Zeile hinzu.

       ```
       Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Füge deinen privaten SSH-Schlüssel zum SSH-Agenten hinzu, und speichere deine Passphrase in der Keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **Hinweis:** Die `--apple-use-keychain`-Option speichert die Passphrase in der Keychain für dich, wenn du einen SSH-Schlüssel zum SSH-Agent hinzufügst. Wenn du keine Passphrase zu deinem Schlüssel hinzufügen möchtest, führe den Befehl ohne die `--apple-use-keychain`-Option aus.

   Die Option `--apple-use-keychain` ist in der Standardversion von `ssh-add` von Apple enthalten. In MacOS-Versionen vor Monterey (12.0) wurde für die Flags `--apple-use-keychain` und `--apple-load-keychain` die Syntax `-K` bzw `-A` verwendet.

  Wenn Du die Apple-Standardversion von `ssh-add` nicht installiert hast, tritt möglicherweise ein Fehler auf. Weitere Informationen Fehlers findest du unter [Fehler: ssh-add: illegal option -- K](/articles/error-ssh-add-illegal-option-k).


   {% endnote %}

4. Füge deinem Konto auf {% data variables.product.product_name %} deinen SSH-Schlüssel hinzu. Weitere Informationen findest du unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Stelle sicher, dass der SSH-Agent ausgeführt wird. Du kannst die Anleitung für „Automatisches Starten von ssh-agent“ unter [Arbeiten mit SSH-Schlüsselpassphrasen](/articles/working-with-ssh-key-passphrases) verwenden oder diese Komponente manuell starten:
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Füge deinen privaten SSH-Schlüssel zum SSH-Agenten hinzu. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Füge deinem Konto auf {% data variables.product.product_name %} deinen SSH-Schlüssel hinzu. Weitere Informationen findest du unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Füge deinen privaten SSH-Schlüssel zum SSH-Agenten hinzu. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Füge deinem Konto auf {% data variables.product.product_name %} deinen SSH-Schlüssel hinzu. Weitere Informationen findest du unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

{% endlinux %}

## Generieren eines neuen SSH-Schlüssels für einen Hardwaresicherheitsschlüssel

Wenn du macOS oder Linux verwendest, musst du möglicherweise deinen SSH-Client aktualisieren oder einen neuen SSH-Client installieren, bevor du einen neuen SSH-Schlüssel generierst. Weitere Informationen findest du unter [Fehler: Unbekannter Schlüsseltyp](/github/authenticating-to-github/error-unknown-key-type).

1. Füge deinem Computer deinen Hardwaresicherheitsschlüssel hinzu.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Füge den folgenden Text ein und ersetze ihn in der E-Mail-Adresse deines Kontos auf {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
   ```

   {%- ifversion not ghae %} {% note %}

   **Hinweis:** Wenn der Befehl fehlschlägt und du den Fehler `invalid format` oder `feature not supported,` erhältst, verwende möglicherweise einen Hardwaresicherheitsschlüssel, der den Ed25519-Algorithmus nicht unterstützt. Gib stattdessen den folgenden Befehl ein.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}
4. Wenn du dazu aufgefordert wirst, drücke die Schaltfläche auf deinem Hardwaresicherheitsschlüssel.
5. Wenn du aufgefordert wirst, „Eine Datei einzugeben, in der die Taste gespeichert werden soll", drücke EINGABE, um den Standarddateispeicherort zu akzeptieren.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. Wenn du aufgefordert wirst, eine Passphrase einzugeben, drücke **Eingeben**.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. Füge deinem Konto auf {% data variables.product.prodname_dotcom %} den SSH-Schlüssel hinzu. Weitere Informationen findest du unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
