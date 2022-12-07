---
title: Verwalten verschlüsselter Geheimnisse für Codespaces
intro: "Du kannst vertrauliche Informationen (z.\_B. Token) speichern, auf die du über Umgebungsvariablen zugreifen möchtest."
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: f2ef60c9311a81ea59ec4f71cb7c1a432102b063
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160442'
---
## Informationen zum Verwalten verschlüsselter Geheimnisse für {% data variables.product.prodname_github_codespaces %}

Du kannst deinem persönlichen Konto verschlüsselte Geheimnisse hinzufügen, die du in deinen Codespaces verwenden möchtest. Du kannst beispielsweise die folgenden vertraulichen Informationen als verschlüsselte Geheimnisse speichern und darauf zugreifen.

- Zugriffstoken für Clouddienste
- Dienstprinzipale
- Abonnementbezeichner
- [Anmeldeinformationen für eine private Imageregistrierung](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

Du kannst auswählen, welche Repositorys Zugriff auf das jeweilige Geheimnis haben sollen. Dann kannst du das Geheimnis in jedem Codespace verwenden, den du für ein Repository erstellst, das Zugriff auf dieses Geheimnis hat. Um ein Geheimnis für einen Codespace freizugeben, der mithilfe einer Vorlage erstellt wurde, musst du den Codespace in einem Repository auf {% data variables.product.prodname_dotcom %} veröffentlichen und dem Repository dann Zugriff auf das Geheimnis gewähren.

{% data reusables.codespaces.secrets-on-start %}

### Benennen von Geheimnissen

{% data reusables.codespaces.secrets-naming %} Ein auf Repositoryebene erstelltes Geheimnis muss beispielsweise einen in diesem Repository eindeutigen Namen haben.

  {% data reusables.codespaces.secret-precedence %}

### Einschränkungen für Geheimnisse

Du kannst bis zu 100 Geheimnisse für {% data variables.product.prodname_github_codespaces %} speichern.

Geheimnisse sind auf 64 KB beschränkt.

## Hinzufügen eines Geheimnisses

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Klicke rechts neben „Codespacegeheimnisse“ auf **Neues Geheimnis**.
  ![Schaltfläche „Neues Geheimnis“](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Gib unter „Name“ einen Namen für das Geheimnis ein.
  ![Textfeld „Name“](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Klicke auf **Geheimnis hinzufügen**.

## Bearbeiten eines Geheimnisses

Du kannst den Wert eines vorhandenen Geheimnisse aktualisieren und ändern, welche Repositorys auf ein Geheimnis zugreifen können.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Klicke unter „Codespacegeheimnisse“ rechts neben dem Geheimnis, das du bearbeiten möchtest, auf **Aktualisieren**.
  ![Schaltfläche „Aktualisieren“](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Klicke unter „Wert“ auf **Neuen Wert eingeben**.
  ![Link „Neuen Wert eingeben“](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Optional kannst du auch optional den Zugriff des Geheimnisses auf ein Repository entfernen, indem du das Repository deaktivierst.
  ![Kontrollkästchen zum Entfernen des Zugriffs auf Repositorys](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Klicke auf **Änderungen speichern**.

## Löschen eines Geheimnisses

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Klicke unter „Codespacegeheimnisse“ rechts neben dem Geheimnis, das du löschen möchtest, auf **Löschen**.
  ![Schaltfläche „Löschen“](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Lies die Warnung, und klicke dann auf **OK**.
  ![Bestätigung zum Löschen des Geheimnisses](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Verwenden von Geheimnissen

Ein Geheimnis wird als Umgebungsvariable in die Terminalsitzung des Benutzers exportiert.

  ![Anzeigen des Werts eines exportierten Geheimnisses im Terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

Du kannst geheime Schlüssel in einem Codespace verwenden, nachdem dieser erstellt und ausgeführt wurde. Ein Geheimnis kann beispielsweise in folgenden Fällen verwendet werden:

* Beim Starten einer Anwendung über das integrierte Terminal oder die SSH-Sitzung.
* Innerhalb des Lebenszyklusskripts eines Entwicklungscontainers, das nach Ausführung des Codespaces ausgeführt wird. Weitere Informationen zu Lebenszyklusskripts von Entwicklungscontainern findest du in der Dokumentation unter „containers.dev“: [Spezifikation](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

In folgenden Fällen können keine Codespacegeheimnisse verwendet werden:

* Während der Codespacebuildzeit (d. h., innerhalb einer Dockerfile oder eines benutzerdefinierten Einstiegspunkts)
* Innerhalb eines Entwicklungscontainerfeatures. Weitere Informationen findest du in der `features`-Eigenschaft in der [Entwicklungscontainerspezifikation](https://containers.dev/implementors/json_reference/#general-properties) auf „containers.dev“.

## Weiterführende Themen

- [Verwalten von verschlüsselten Geheimnissen für dein Repository und deine Organisation für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)
