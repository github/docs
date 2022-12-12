---
title: Verschlüsselte Geheimnisse
intro: 'Verschlüsselte Geheimnisse ermöglichen es dir, vertrauliche Informationen in deiner Organisation{% ifversion fpt or ghes or ghec %}, deinem Repository oder deinen Repositoryumgebungen{% else %} oder deinem Repository zu speichern{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162799'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu verschlüsselten Geheimnissen

Geheimnisse sind verschlüsselte Umgebungsvariablen, die du in einer Organisation, einem Repository oder einer Repositoryumgebung erstellst. Du kannst diese Geheimnisse in {% data variables.product.prodname_actions %}-Workflows verwenden. Mithilfe eines [versiegelten Libsodium-Felds](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) stellt {% data variables.product.prodname_dotcom %} sicher, dass die Geheimnisse verschlüsselt werden, bevor sie {% data variables.product.prodname_dotcom %} erreichen, und dies bis zur Verwendung in einem Workflow auch bleiben.

{% data reusables.actions.secrets-org-level-overview %}

Zur Steuerung des Zugriffs auf Geheimnisse, die auf der Umgebungsebene gespeichert sind, kannst du genehmigende Personen aktivieren. So kann ein Workflowauftrag erst dann auf Umgebungsgeheimnisse zugreifen, nachdem eine genehmigende Person die entsprechende Genehmigung erteilt hat.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**Hinweis**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### Benennen von Geheimnissen

{% data reusables.codespaces.secrets-naming %}

  So muss ein auf der Umgebungsebene erstelltes Geheimnis einen eindeutigen Namen in dieser Umgebung besitzen, ein auf der Repositoryebene erstelltes Geheimnis einen eindeutigen Namen in diesem Repository und ein auf der Organisationsebene erstelltes Geheimnis einen eindeutigen Namen auf dieser Ebene.

  {% data reusables.codespaces.secret-precedence %} Analog dazu hat bei einem Geheimnis mit demselben Namen in einer Organisation, einem Repository und einer Umgebung das Geheimnis auf Umgebungsebene Vorrang.

Damit {% data variables.product.prodname_dotcom %} dein Geheimnis in Protokollen bearbeitet, verwende keine strukturierten Daten als Werte von Geheimnissen. Vermeide beispielsweise Geheimnisse zu erstellen, die JSON oder codierte Git-Blobs enthalten.

### Zugreifen auf Geheimnisse

Um ein Geheimnis für eine Aktion verfügbar zu machen, legest du das Geheimnis als Eingabe oder Umgebungsvariable in der Workflow-Datei fest. In der README-Datei der Aktion erfährst Du, welche Eingaben und Umgebungsvariablen die Aktion erwartet. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv).

Du kannst verschlüsselte Geheimnisse in einer Workflow-Datei verwenden und lesen, wenn du auf die Datei Bearbeitungs-Zugriff hast. Weitere Informationen findest du unter [Zugriffsberechtigungen für {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github).

{% data reusables.actions.secrets-redaction-warning %}

Geheimnisse auf der Organisations- und Repositoryebene werden gelesen, wenn eine Workflowausführung in die Warteschlange eingereiht wird, während Geheimnisse auf der Umgebungsebene beim Starten eines Auftrags gelesen werden, der auf die Umgebung verweist.

Mit der REST-API kannst du Geheimnisse auch verwalten. Weitere Informationen findest du unter [Geheimnisse](/rest/reference/actions#secrets).

### Einschränken von Berechtigungen für Anmeldeinformationen

Beim Generieren von Anmeldeinformationen wird empfohlen, möglichst geringe Berechtigungen zu erteilen. Verwende z. B. anstelle von persönlichen Anmeldeinformationen [Bereitstellungsschlüssel](/developers/overview/managing-deploy-keys#deploy-keys) oder ein Dienstkonto. Ziehe in Erwägung, Nur-Lese-Berechtigungen zu gewähren, wenn dies ausreicht, und schränke den Zugriff so weit wie möglich ein. Wähle beim Generieren eines {% data variables.product.pat_v1 %} nur die nötigsten Bereiche aus.{% ifversion pat-v2 %} Wähle beim Generieren eines {% data variables.product.pat_v2 %} die geringstmögliche Zugriffsberechtigung für das Repository aus.{% endif %}

{% note %}

**Hinweis**: Mit der REST-API kannst du Geheimnisse verwalten. Weitere Informationen findest du unter [API für {% data variables.product.prodname_actions %}-Geheimnisse](/rest/reference/actions#secrets).

{% endnote %}

## Erstellen verschlüsselter Geheimnisse für ein Repository

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. Klicke auf **Neues Repositorygeheimnis**.
1. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
1. Gib den Wert für das Geheimnis ein.
1. Klicke auf **Geheimnis hinzufügen**.

Wenn dein Repository über Umgebungsgeheimnisse verfügt oder auf Geheimnisse der übergeordneten Organisation zugreifen kann, werden diese Geheimnisse auch auf dieser Seite aufgeführt.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende zum Hinzufügen eines Geheimnisses auf Repositoryebene den Unterbefehl `gh secret set`. Ersetze `secret-name` durch den Namen deines Geheimnisses.

```shell
gh secret set SECRET_NAME
```

Du wirst von der CLI zur Eingabe eines Werts für das Geheimnis aufgefordert. Alternativ kannst du den Wert des Geheimnisses aus einer Datei lesen.

```shell
gh secret set SECRET_NAME < secret.txt
```

Verwende zum Auflisten aller Geheimnisse für das Repository den Unterbefehl `gh secret list`.

{% endcli %}

## Erstellen verschlüsselter Geheimnisse für eine Umgebung

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Klicke auf die Umgebung, der du ein Geheimnis hinzufügen möchtest.
2. Klicke unter **Umgebungsgeheimnisse** auf **Geheimnis hinzufügen**.
3. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
4. Gib den Wert für das Geheimnis ein.
5. Klicke auf **Geheimnis hinzufügen**.

{% endwebui %}

{% cli %}

Wenn du ein Geheimnis für eine Umgebung hinzufügen möchtest, verwende den Unterbefehl `gh secret set` mit dem Flag `--env` oder `-e` und dem Namen der Umgebung.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

Wenn du alle Geheimnisse für eine Umgebung auflisten möchtest, verwende den Unterbefehl `gh secret list` mit dem Flag `--env` oder `-e` und dem Namen der Umgebung.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Erstellen verschlüsselter Geheimnisse für eine Organisation

Beim Erstellen eines Geheimnisses in einer Organisation kannst du mit einer Richtlinie einschränken, welche Repositorys darauf zugreifen können. Du kannst beispielsweise allen Repositorys Zugriff gewähren oder nur private Repositorys oder eine angegebene Liste von Repositorys zulassen.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Klicke auf **Neues Organisationsgeheimnis**.
1. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
1. Gib den **Wert** für das Geheimnis ein.
1. Wähle in der Dropdownliste **Repositoryzugriff** eine Zugriffsrichtlinie aus.
1. Klicke auf **Geheimnis hinzufügen**.

{% endwebui %}

{% cli %}

{% note %}

**Hinweis**: Standardmäßig erfolgt die {% data variables.product.prodname_cli %}-Authentifizierung mit den Bereichen `repo` und `read:org`. Zur Verwaltung von Organisationsgeheimnissen musst du zusätzlich den Bereich `admin:org` autorisieren.

```
gh auth login --scopes "admin:org"
```

{% endnote %}

Wenn du ein Geheimnis für eine Organisation hinzufügen möchtest, verwende den Unterbefehl `gh secret set` mit dem Flag `--org` oder `-o` und dem Namen der Organisation.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

Standardmäßig ist das Geheimnis nur für private Repositorys verfügbar. Wenn du angeben möchtest, dass das Geheimnis für alle Repositorys innerhalb der Organisation verfügbar sein soll, verwende das Flag `--visibility` oder `-v`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

Wenn du angeben möchtest, dass das Geheimnis für ausgewählte Repositorys innerhalb der Organisation verfügbar sein soll, verwende das Flag `--repos` oder `-r`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

Wenn du alle Geheimnisse für eine Organisation auflisten möchtest, verwende den Unterbefehl `gh secret list` mit dem Flag `--org` oder `-o` und dem Namen der Organisation.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Überprüfen des Zugriffs auf Organisationsgeheimnisse

Du kannst überprüfen, welche Zugriffsrichtlinien auf ein Geheimnis in deiner Organisation angewendet werden.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Die Liste der Geheimnisse enthält alle konfigurierten Berechtigungen und Richtlinien. Beispiel: ![Liste der Geheimnisse](/assets/images/help/settings/actions-org-secrets-list.png)
1. Klicke auf **Aktualisieren**, um weitere Details zu den konfigurierten Berechtigungen des jeweiligen Geheimnisses anzuzeigen.

## Verwenden verschlüsselter Geheimnisse in einem Workflow

{% note %}

**Hinweise:**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* Geheimnisse werden nicht automatisch an wiederverwendbare Workflows übergeben. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow).

{% endif %}

{% endnote %}

Wenn du für eine Aktion ein Geheimnis als Eingabe- oder Umgebungsvariable bereitstellen möchtest, kannst du mithilfe des `secrets`-Kontexts auf Geheimnisse zugreifen, die du in deinem Repository erstellt hast. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts) und [Workflowsyntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions).

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

In `if:`-Bedingungen kann nicht direkt auf Geheimnisse verwiesen werden. Erwäge stattdessen, Geheimnisse als Umgebungsvariablen auf Auftragsebene festzulegen, und verweise dann auf die Umgebungsvariablen, um Schritte im Auftrag bedingt auszuführen. Weitere Informationen findest du unter [Kontextverfügbarkeit](/actions/learn-github-actions/contexts#context-availability) und [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Wurde kein Geheimnis festgelegt, gibt ein Ausdruck, der auf das Geheimnis verweist (z. B. {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} im Beispiel), eine leere Zeichenfolge zurück.

Wann immer dies möglich ist, vermeide die Übergabe von Geheimnissen zwischen Prozessen von der Befehlszeile aus. Befehlszeilenprozesse sind möglicherweise für andere Benutzer*innen sichtbar (mit dem Befehl `ps`) oder können durch [Sicherheitsüberwachungsereignisse](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing) erfasst werden. Verwende zum Schutz von Geheimnissen Umgebungsvariablen, `STDIN` oder andere Methoden, die vom Zielprozess unterstützt werden.

Wenn du Geheimnisse innerhalb einer Kommandozeile übergeben musst, umschließe sie im Rahmen der gültigen Quotierungsregeln. Geheimnisse enthalten oft Sonderzeichen, die in deiner Shell unbeabsichtigte Wirkungen entfalten können. Um diese Sonderzeichen zu vermeiden, verwende deine Umgebungsvariablen mit Anführungszeichen. Beispiel:

### Beispiel mit Bash

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

### Beispiel mit PowerShell

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

### Beispiel mit Cmd.exe

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

## Einschränkungen für Geheimnisse

Du kannst bis zu 1.000 Organisationsgeheimnisse, 100 Repositorygeheimnisse und 100 Umgebungsgeheimnisse speichern.

Ein Workflow, der in einem Repository erstellt wurde, kann auf die folgende Anzahl von Geheimnissen zugreifen:

* Alle 100 Repositorygeheimnisse.
* Wurde dem Repository der Zugriff auf mehr als 100 Geheimnisse auf Organisationsebene zugewiesen, kann der Workflow nur die ersten 100 Organisationsgeheimnisse (alphabetisch nach dem Namen des Geheimnisses sortiert) verwenden.
* Alle 100 Umgebungsgeheimnisse.

Geheimnisse sind auf 64 KB beschränkt. Weitere Informationen zum Speichern größerer Geheimnisse findest du unter der Problemumgehung [Speichern großer Geheimnisse](#storing-large-secrets) unten.

### Speichern großer Geheimnisse

Um Geheimnisse zu verwenden, die größer als 64 KB sind, kannst du mit einer Problemumgehung verschlüsselte Geheimnisse in deinem Repository speichern und die Passphrase zur Entschlüsselung als Geheimnis auf {% data variables.product.prodname_dotcom %} speichern. Mit `gpg` kannst du z. B. eine Datei mit deinem Geheimnis lokal verschlüsseln, bevor du die verschlüsselte Datei in deinem Repository auf {% data variables.product.prodname_dotcom %} eincheckst. Weitere Informationen findest du unter [gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html).

{% warning %}

**Warnung**: Vergewissere dich, dass deine Geheimnisse beim Ausführen des Workflows nicht gedruckt werden. Wenn du diesen Workaround verwendest, redigiert {% data variables.product.prodname_dotcom %} keine Geheimnisse, die in Protokollen gedruckt werden.

{% endwarning %}

1. Führe in deinem Terminal den folgenden Befehl aus, um die Datei mit deinem Geheimnis mithilfe von `gpg` und dem AES256-Verschlüsselungsalgorithmus zu verschlüsseln. In diesem Beispiel ist `my_secret.json` die Datei, die das Geheimnis enthält.

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. Du wirst aufgefordert, eine Passphrase einzugeben. Merke dir die Passphrase, denn du musst ein neues Geheimnis auf {% data variables.product.prodname_dotcom %} mit der Passphrase als Wert erstellen.

1. Erstelle ein neues Geheimnis, das die Passphrase enthält. Erstelle z. B. ein neues Geheimnis mit dem Namen `LARGE_SECRET_PASSPHRASE`, und lege den Wert des Geheimnisses auf die Passphrase fest, die du im vorherigen Schritt verwendet hast.

1. Kopiere deine verschlüsselte Datei in einen Pfad in deinem Repository, und committe sie. In diesem Beispiel lautet die verschlüsselte Datei `my_secret.json.gpg`.

   {% warning %}

   **Warnung**: Kopiere die verschlüsselte `my_secret.json.gpg`-Datei, die mit der Dateierweiterung `.gpg` endet, und **nicht** die unverschlüsselte `my_secret.json`-Datei.

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. Erstelle ein Shellskript in deinem Repository, um die Geheimnisdatei zu entschlüsseln. In diesem Beispiel heißt das Skript `decrypt_secret.sh`.

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. Stelle sicher, dass dein Shell-Skript ausführbar ist, bevor du es in deinem Repository eincheckst.

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. Verwende in deinem {% data variables.product.prodname_actions %}-Workflow einen `step`, um das Shellskript aufzurufen und das Geheimnis zu entschlüsseln. Verwende für eine Kopie deines Repositorys in der Umgebung, in der dein Workflow ausgeführt wird, die Aktion [`actions/checkout`](https://github.com/actions/checkout). Verweise relativ zum Stamm des Repositorys mithilfe des Befehls `run` auf dein Shellskript.

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Speichern binärer Base64-Blobs als Geheimnisse

Mithilfe der Base64-Codierung kannst du kleine binäre Blobs als Geheimnisse speichern. Anschließend kannst du in deinem Workflow auf das Geheimnis verweisen und es zur Verwendung im Runner decodieren. Informationen zu den Größenbeschränkungen findest du unter [Grenzwerte für Geheimnisse](/actions/security-guides/encrypted-secrets#limits-for-secrets).

{% note %}

**Hinweis**: Base64 ermöglicht nur eine Konvertierung von Binärdaten in Text und ersetzt nicht die eigentliche Verschlüsselung.

{% endnote %}

1. Verwende `base64`, um die Datei in eine Base64-Zeichenfolge zu codieren. Beispiel:

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Erstelle ein Geheimnis, das die Base64-Zeichenfolge enthält. Beispiel:

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. Leite das Geheimnis per Pipeline an `base64 --decode` weiter, um vom Runner auf die Base64-Zeichenfolge zuzugreifen.  Beispiel: 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
