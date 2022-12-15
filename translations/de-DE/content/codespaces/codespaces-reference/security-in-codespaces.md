---
title: Sicherheit in Codespaces
intro: Übersicht über die {% data variables.product.prodname_codespaces %}-Sicherheitsarchitektur, mit Richtlinien, die dir helfen, die Sicherheit zu erhalten und das Risiko eines Angriffs zu minimieren.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Security
type: reference
shortTitle: Security in Codespaces
ms.openlocfilehash: 679cc2de9b31159f4162eaea473ca9dd5001d22d
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "146764571"
---
## <a name="overview-of-codespace-security"></a>Übersicht über die Sicherheit in Codespaces

{% data variables.product.prodname_codespaces %} verfügt standardmäßig über eine Sicherheitshärtung. Daher musst du sicherstellen, dass der Codespace-Sicherheitsstatus durch deine Softwareentwicklungspraktiken nicht gefährdet wird. 

In diesem Leitfaden wird beschrieben, wie Codespaces die Sicherheit deiner Entwicklungsumgebung kontinuierlich gewährleistet und einige der bewährten Methoden bereitstellt, die dir dabei helfen, die Sicherheit während der Arbeit aufrechtzuerhalten. Denke wie bei jedem Entwicklungstool daran, dass du nur Repositorys öffnen und mit diesen arbeiten solltest, die du kennst und denen du vertraust.

### <a name="environment-isolation"></a>Isolierung der Umgebung

{% data variables.product.prodname_codespaces %} ist so konzipiert, dass deine Codespaces voneinander getrennt sind. Für jeden einzelnen Codespace wird dabei ein eigener virtueller Computer und ein eigenes virtuelles Netzwerk verwendet.

#### <a name="isolated-virtual-machines"></a>Isolierte virtuelle Computer

Jeder Codespace wird auf einem eigenen neu erstellten virtuellen Computer (virtual machine, VM) gehostet. Zwei Codespaces befinden sich niemals auf demselben virtuellen Computer. 

Jedes Mal, wenn du einen Codespace neu startest, wird er mit den neuesten verfügbaren Sicherheitsupdates auf einem neuen virtuellen Computer bereitgestellt.

#### <a name="isolated-networking"></a>Isoliertes Netzwerk

Jeder Codespace verfügt über ein eigenes isoliertes virtuelles Netzwerk. Firewalls werden dazu verwendet, eingehende Verbindungen aus dem Internet zu blockieren und zu verhindern, dass Codespaces in internen Netzwerken miteinander kommunizieren. Standardmäßig können von Codespaces ausgehende Verbindungen mit dem Internet hergestellt werden.

### <a name="authentication"></a>Authentifizierung

Du kannst eine Verbindung mit einem Codespace über einen Webbrowser oder über {% data variables.product.prodname_vscode %} herstellen. Wenn du eine Verbindung über {% data variables.product.prodname_vscode_shortname %} herstellst, wirst du aufgefordert, dich bei {% data variables.product.product_name %} zu authentifizieren. 

Jedes Mal, wenn ein Codespace erstellt oder neu gestartet wird, wird ihm ein neues {% data variables.product.company_short %}-Token mit einem automatischen Ablaufzeitraum zugewiesen. In diesem Zeitraum kannst du im Codespace arbeiten, ohne dich während eines typischen Arbeitstags erneut authentifizieren zu müssen. Gleichzeitig sinkt jedoch das Risiko, dass du eine Verbindung offen lässt, wenn du die Verwendung von Codespace beendest.

Der Bereich des Token variiert je nach Zugriff, den du auf das Repository hast, in dem der Codespace erstellt wurde:

- **Wenn du Schreibzugriff auf das Repository hast**: Das Token wird mit einem Umfang für Lese-/Schreibzugriff auf das Repository festgelegt.
- **Wenn du nur Lesezugriff auf das Repository hast**: Das Token lässt nur zu, dass der Code aus dem Quellrepository geklont werden kann. Wenn du eine Pushübertragung in ein privates Repository versuchst, für das du nur über Lesezugriff verfügst, wirst du von {% data variables.product.prodname_codespaces %} aufgefordert, einen persönlichen Fork des Repositorys zu erstellen. Das Token wird dann dahin gehend aktualisiert, dass du über Lese-/Schreibzugriff auf den neuen persönlichen Fork verfügst. 
- **Wenn du den Codespace für den Zugriff auf andere Repositorys aktiviert hast**: Wenn einem Codespace [Zugriff auf andere Repositorys](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) gewährt wurde, verfügen alle Codespaces, die ausgehend von diesem Repository erstellt wurden, über Lese-/Schreibtoken im Umfang des Quellrepositorys. Darüber hinaus erhalten die Token auch Lesezugriff auf andere Repositorys, die vom Benutzer oder von der Organisation angegeben werden.

Die Administratoren einer Organisation geben an, welche Repositorys als vertrauenswürdig betrachtet werden sollen. Ein Administrator kann entscheiden, keinen, allen oder einigen der Repositorys der Organisation zu [vertrauen](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces). Ein Codespace kann nicht über umfassendere Berechtigungen für den Zugriff auf Ressourcen verfügen als die Person, die sie erstellt hat, auch wenn der Organisationsadministrator Zugriff für alle Benutzer und alle Repositorys gewährt hat.

### <a name="codespace-connections"></a>Codespace-Verbindungen

Du kannst eine Verbindung mit deinem Codespace herstellen, indem du den mit TLS verschlüsselten Tunnel verwendest, der vom {% data variables.product.prodname_codespaces %}-Dienst bereitgestellt wird. Nur der Ersteller eines Codespaces kann eine Verbindung mit einem Codespace herstellen. Verbindungen werden mit {% data variables.product.product_name %} authentifiziert.

Wenn du externen Zugriff auf Dienste zulassen musst, die in einem Codespace ausgeführt werden, kannst du die Portweiterleitung für privaten oder öffentlichen Zugriff aktivieren.

### <a name="port-forwarding"></a>Portweiterleitung

Wenn du eine Verbindung mit einem Dienst (z. B. einem Entwicklungswebserver) herstellen musst, der in deinem Codespace ausgeführt wird, kannst du die Portweiterleitung konfigurieren, um den Dienst im Internet verfügbar zu machen. 

Organisationsbesitzer können die Möglichkeit einschränken, weitergeleitete Ports öffentlich oder innerhalb der Organisation verfügbar zu machen. Weitere Informationen findest du unter [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports).

**Privat weitergeleitete Ports**: sind im Internet zugänglich, aber nur der Codespace-Ersteller kann darauf zugreifen, nachdem die Authentifizierung auf {% data variables.product.product_name %} erfolgt ist.

**Öffentlich weitergeleitete Ports in deiner Organisation**: sind im Internet zugänglich, aber nur für Mitglieder der Organisation, der auch der Codespace angehört, nachdem die Authentifizierung auf {% data variables.product.product_name %} erfolgt ist.

**Öffentlich weitergeleitete Ports**: sind im Internet zugänglich, und jeder im Internet kann darauf zugreifen. Für den Zugriff auf öffentlich weitergeleitete Ports ist keine Authentifizierung erforderlich.

Alle weitergeleiteten Ports sind standardmäßig privat. Das bedeutet, dass du eine Authentifizierung durchführen musst, bevor du auf den Port zugreifen kannst. Der Zugriff auf die privaten weitergeleiteten Ports eines Codespaces wird durch Authentifizierungscookies mit einem Ablaufzeitraum von 3 Stunden gesteuert. Wenn das Cookie abläuft, musst du erneut eine Authentifizierung durchführen.

Wenn du den Port entfernst und erneut hinzufügst oder den Codespace neu startest, wird ein öffentlicher weitergeleiteter Port automatisch wieder in den Status eines privaten Ports zurückgesetzt.

Du kannst das Fenster „Ports“ verwenden, um einen Port für den öffentlichen oder privaten Zugriff zu konfigurieren und die Portweiterleitung zu beenden, wenn sie nicht mehr erforderlich ist. Weitere Informationen findest du unter [Weiterleiten von Ports in deinem Codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

## <a name="good-security-practices-for-your-codespaces"></a>Gute Sicherheitspraktiken für deine Codespaces

Codespaces verfügen standardmäßig über eine Sicherheitshärtung. Damit dieser Sicherheitsstatus aufrechterhalten werden kann, empfiehlt es sich, während deiner Entwicklungsverfahren gute Sicherheitspraktiken zu befolgen: 

- Denke wie bei jedem Entwicklungstool daran, dass du nur Repositorys öffnen und mit diesen arbeiten solltest, die du kennst und denen du vertraust.
- Bevor du dem Codespace neue Abhängigkeiten hinzufügst, überprüfe, ob sie gut gepflegt werden und Updates für sie veröffentlicht werden, damit Sicherheitsrisiken behoben werden können, die im Code gefunden wurden.

### <a name="using-secrets-to-access-sensitive-information"></a>Verwenden von Geheimnissen für den Zugriff auf vertrauliche Informationen 

Verwende immer verschlüsselte Geheimnisse, wenn du vertrauliche Informationen (z. B. Zugriffstoken) in einem Codespace verwenden möchtest. Du kannst auf deine Geheimnisse als Umgebungsvariablen im Codespace zugreifen, auch über das Terminal. Du kannst beispielsweise ein Terminal innerhalb des Codespace starten und `echo $SECRET_NAME ` verwenden, um den Wert eines Geheimnisses anzuzeigen.

Die geheimen Werte werden in Umgebungsvariablen kopiert, wenn der Codespace fortgesetzt oder erstellt wird, und werden auch synchronisiert, wenn sie geändert werden.

Geheimnisse werden nicht in die Umgebung kopiert, wenn du keinen Schreibzugriff auf das Repository des Codespaces hast.

Weitere Informationen zu Geheimnissen findest du unter:
- [Verwalten verschlüsselter Geheimnisse für Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
- [Verwalten verschlüsselter Geheimnisse für dein Repository und deine Organisation für Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)

### <a name="working-with-other-peoples-contributions-and-repositories"></a>Arbeiten mit Beiträgen und Repositorys anderer Personen

Wenn du einen Codespace aus einem PR-Branch aus einem Fork erstellst, variiert das Token im Codespace je nachdem, ob das Repository öffentlich oder privat ist:
- Für ein privates Repository wird dem Codespace Zugriff auf den Fork und das übergeordnete Element gewährt.
- Für ein öffentliches Repository hat der Codespace nur Zugriff auf den Fork und für das Öffnen von PRs im übergeordneten Element.

Wir schützen dich auch weiter in diesen Szenarien, indem keines deiner [Codespace-Geheimnisse](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) in die Umgebung eingefügt wird.

### <a name="additional-good-practices"></a>Weitere bewährte Methoden

Es gibt einige zusätzliche bewährte Methoden und Risiken, die du beim Verwenden von {% data variables.product.prodname_codespaces %} kennen solltest. 

#### <a name="understanding-a-repositorys-devcontainerjson-file"></a>Grundlegendes zur Datei devcontainer.json eines Repositorys

Wenn du einen Codespace erstellst und eine `devcontainer.json`-Datei für dein Repository gefunden wird, wird sie geparst und zum Konfigurieren deines Codespace verwendet. Die `devcontainer.json`-Datei kann leistungsstarke Features enthalten, z. B. die Installation von Erweiterungen von Drittanbietern und das Ausführen von beliebigem Code, der in einem `postCreateCommand` angegeben ist.

Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

#### <a name="granting-access-through-features"></a>Gewähren des Zugriffs über Features

Bestimmte Entwicklungsfeatures können der Umgebung potenziell Risiken hinzufügen. Beispielsweise können das Signieren von Commits, in Umgebungsvariablen eingefügte Geheimnisse, authentifizierter Registrierungszugriff und Paketzugriff potenzielle Sicherheitsprobleme darstellen. Es empfiehlt sich, dass du ausschließlich den Personen Zugriff gewährst, die die Zugriffsrechte benötigen, und dass du dich an der Richtlinie orientierst, so restriktiv wie möglich vorzugehen. 

#### <a name="using-extensions"></a>Verwenden von Erweiterungen

Alle zusätzlichen {% data variables.product.prodname_vscode_shortname %}-Erweiterungen, die du installiert hast, können potenziell zu weiteren Risiken führen. Achte zur Verringerung dieses Risikos darauf, nur vertrauenswürdige Erweiterungen zu installieren und dass diese immer auf dem aktuellen Stand gehalten werden.
