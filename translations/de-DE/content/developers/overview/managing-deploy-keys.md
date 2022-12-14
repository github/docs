---
title: Verwalten von Bereitstellungsschlüsseln
intro: 'Hier erfährst du, wie du SSH-Schlüssel auf deinen Servern verwalten kannst, wenn du Bereitstellungsskripts automatisierst, und welche Möglichkeit für dich am besten geeignet ist.'
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 425535eb582c84801d79f00df751bb48d4a5b05e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058468'
---
Du kannst SSH-Schlüssel auf deinen Servern verwalten, wenn du Bereitstellungsskripts mithilfe von SSH-Agent-Weiterleitung, HTTPS mit OAuth-Token, Bereitstellungsschlüsseln oder Computerbenutzern automatisierst.

## SSH-Agent-Weiterleitung

In vielen Fällen – insbesondere zu Beginn eines Projekts – ist die SSH-Agent-Weiterleitung die schnellste und einfachste Methode. Bei der Agent-Weiterleitung werden dieselben SSH-Schlüssel verwendet wie bei deinem lokalen Entwicklungscomputer.

#### Vorteile

* Du musst keine neuen Schlüssel generieren oder nachverfolgen.
* Es gibt keine Schlüsselverwaltung. Benutzer*innen verfügen auf dem Server über dieselben Berechtigungen wie auf dem lokalen Computer.
* Auf dem Server werden keine Schlüssel gespeichert. Sollte der Server kompromittiert sein, musst du also nicht nach kompromittierten Schlüsseln suchen und diese entfernen.

#### Nachteile

* Benutzer*innen **müssen** SSH für die Bereitstellung nutzen. Automatisierte Bereitstellungsprozesse können nicht verwendet werden.
* Für Windows-Benutzer*innen kann die SSH-Agent-Weiterleitung umständlich sein.

#### Einrichten

1. Aktiviere die Agent-Weiterleitung lokal. Weitere Informationen findest du in [unserem Leitfaden zur SSH-Agent-Weiterleitung][ssh-agent-forwarding].
2. Lege deine Bereitstellungsskripts so fest, dass die Agent-Weiterleitung verwendet wird. Bei einem Bash-Skript sieht die Aktivierung der Agent-Weiterleitung z. B. in etwa wie folgt aus: `ssh -A serverA 'bash -s' < deploy.sh`

## HTTPS-Klonen mit OAuth-Token

Wenn du keine SSH-Schlüssel verwenden möchtest, kannst du HTTPS mit OAuth-Token nutzen.

#### Vorteile

* Alle Benutzer*innen mit Zugriff auf den Server können das Repository bereitstellen.
* Benutzer*innen müssen ihre lokalen SSH-Einstellungen nicht ändern.
* Es werden nicht mehrere Token (ein Token pro Benutzer*in) benötigt. Ein Token pro Server ist ausreichend.
* Da Token jederzeit widerrufen werden können, sind sie im Wesentlichen ein einmaliges Kennwort.
{% ifversion ghes %}
* Neue Token können unter Verwendung [der OAuth-API](/rest/reference/oauth-authorizations#create-a-new-authorization) problemlos mit einem Skript generiert werden.
{% endif %}

#### Nachteile

* Du musst sicherstellen, dass du dein Token mit den richtigen Zugriffsbereichen konfigurierst.
* Token sind im Wesentlichen Kennwörter und müssen auf dieselbe Weise geschützt werden.

#### Einrichten

Weitere Informationen findest du in [unserem Leitfaden zum Erstellen persönlicher Zugriffstoken](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Schlüssel bereitstellen

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### Vorteile

* Alle Benutzer*innen, die Zugriff auf das Repository und den Server haben, können das Projekt bereitstellen.
* Benutzer*innen müssen ihre lokalen SSH-Einstellungen nicht ändern.
* Bereitstellungsschlüssel sind standardmäßig schreibgeschützt, aber du kannst ihnen Schreibzugriff erteilen, wenn du sie einem Repository hinzufügst.

#### Nachteile

* Bereitstellungsschlüssel gewähren lediglich Zugriff auf ein einzelnes Repository. Komplexere Projekte verfügen möglicherweise über eine Vielzahl von Repositorys, die Daten vom selben Server pullen.
* Bereitstellungsschlüssel sind in der Regel nicht durch eine Passphrase geschützt, sodass der Schlüssel bei einem kompromittierten Server leicht zugänglich ist.

#### Einrichten

1. [Führe die `ssh-keygen`-Prozedur][generating-ssh-keys] auf deinem Server aus, und merke dir, wo du das generierte Schlüsselpaar aus öffentlichem und privatem RSA-Schlüssel speicherst.
2. Klicke oben rechts auf einer {% data variables.product.product_name %}-Seite auf dein Profilfoto und dann auf **Dein Profil**. ![Navigation zum Profil](/assets/images/profile-page.png)
3. Klicke auf deiner Profilseite auf **Repositorys**, und klicke dann auf den Namen deines Repositorys. ![Link zu Repositorys](/assets/images/repos.png)
4. Klicke in deinem Repository auf **Einstellungen**. ![Repositoryeinstellungen](/assets/images/repo-settings.png)
5. Klicke auf der Randleiste auf **Bereitstellungsschlüssel** und dann auf **Bereitstellungsschlüssel hinzufügen**. ![Link zum Hinzufügen von Bereitstellungsschlüsseln](/assets/images/add-deploy-key.png)
6. Gib einen Titel an, und füge deinen öffentlichen Schlüssel ein.  ![Seite für Bereitstellungsschlüssel](/assets/images/deploy-key.png)
7. Wähle **Schreibzugriff gewähren** aus, wenn dieser Schlüssel über Schreibzugriff auf das Repository verfügen soll. Ein Bereitstellungsschlüssel mit Schreibzugriff ermöglicht einen Bereitstellungs-Push an das Repository.
8. Klicke auf **Schlüssel hinzufügen**.

#### Verwenden von mehreren Repositorys auf einem Server

Wenn du mehrere Repositorys auf einem Server verwendest, musst du für jedes Repository ein dediziertes Schlüsselpaar generieren. Bereitstellungsschlüssel können nicht für mehrere Repositorys wiederverwendet werden.

Füge in der SSH-Konfigurationsdatei des Servers (üblicherweise `~/.ssh/config`) einen Aliaseintrag für jedes Repository hinzu. Beispiel:

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` – der Alias des Repositorys.
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` – konfiguriert den Hostnamen, der mit dem Alias verwendet wird.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` – weist dem Alias einen privaten Schlüssel zu.

Anschließend kannst du den Alias des Hostnamens für die Interaktion mit dem Repository über SSH verwenden. Dabei wird der eindeutige Bereitstellungsschlüssel verwendet, der diesem Alias zugewiesen ist. Beispiel:

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## Server-zu-Server-Token

Wenn dein Server auf Repositorys in einer oder mehreren Organisationen zugreifen muss, kannst du eine GitHub-App verwenden, um den benötigten Zugriff zu definieren, und dann in dieser GitHub-App _Server-zu-Server_-Token mit _präzise definiertem Bereich_ generieren. Für die Server-zu-Server-Token können einzelne oder mehrere Repositorys als Bereich festgelegt werden, und es können präzise abgestimmte Berechtigungen zugewiesen werden. Du kannst z. B. ein Token mit Lesezugriff auf den Inhalt eines Repositorys generieren.

Da GitHub-Apps Hauptakteure in {% data variables.product.product_name %} sind, werden die Server-zu-Server-Token von GitHub-Benutzer*innen getrennt, sodass sie mit „Diensttoken“ vergleichbar sind. Darüber hinaus verfügen Server-zu-Server-Token über dedizierte Ratenlimits, die mit der Größe der Organisationen skaliert werden, für die sie eingesetzt werden. Weitere Informationen findest du unter [Rate limits for {% data variables.product.prodname_github_apps %}](/developers/apps/rate-limits-for-github-apps) („Ratenlimits für GitHub-Apps“).

#### Vorteile

- Token mit präzise definiertem Bereich und sorgfältig definierten Berechtigungen sowie Ablaufzeiten (1 Stunde, sofern das Token nicht vorher manuell über die API widerrufen wird).
- Dedizierte Ratenlimits, die mit deiner Organisation skaliert werden
- Entkoppelt von GitHub-Benutzeridentitäten, sodass keine lizenzierten Arbeitsplätze genutzt werden.
- Da niemals ein Kennwort zugewiesen wird, ist keine direkte Anmeldung möglich.

#### Nachteile

- Zum Erstellen der GitHub-App sind zusätzliche Einrichtungsschritte erforderlich.
- Server-zu-Server-Token laufen nach 1 Stunde ab und müssen daher (üblicherweise nach Bedarf) mithilfe von Code neu generiert werden.

#### Einrichten

1. Lege fest, ob deine GitHub-App öffentlich oder privat sein soll. Wenn deine GitHub-App ausschließlich mit Repositorys innerhalb deiner Organisation eingesetzt wird, sollte sie am besten privat sein.
1. Weise die erforderlichen Berechtigungen für deine GitHub-App zu (z. B. Lesezugriff auf Repositoryinhalte).
1. Erstelle deine GitHub-App über die Einstellungsseite deiner Organisation. Weitere Informationen findest du unter [Creating a GitHub App](/developers/apps/creating-a-github-app) („Erstellen einer GitHub-App“).
1. Notiere die `id` deiner GitHub-App.
1. Generiere den privaten Schlüssel deiner GitHub-App, lade ihn herunter, und speichere ihn an einem sicheren Speicherort. Weitere Informationen findest du unter [Generating a private key](/developers/apps/authenticating-with-github-apps#generating-a-private-key) („Generieren eines privaten Schlüssels“).
1. Installiere deine GitHub-App in den Repositorys, für die sie benötigt wird. Optional kannst du die GitHub-App in allen Repositorys in deiner Organisation installieren.
1. Ermittle die `installation_id` der Verbindung zwischen deiner GitHub-App und den Organisationsrepositorys, auf die sie zugreifen kann.  Jedes Paar aus GitHub-App und Organisation darf über maximal eine `installation_id` verfügen. Zum Ermitteln dieser `installation_id` kannst du die Schritte unter [Get an organization installation for the authenticated app](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app) („Abrufen einer Organisationsinstallation für die authentifizierte App“) ausführen. Dazu ist eine Authentifizierung als GitHub-App mit einem JWT erforderlich. Weitere Informationen findest du unter [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app) („Authentifizieren als GitHub-App“).
1. Generiere ein Server-zu-Server-Token über den entsprechenden REST-API-Endpunkt. Weitere Informationen findest du unter [Create an installation access token for an app](/rest/reference/apps#create-an-installation-access-token-for-an-app) („Erstellen eines Installationszugriffstokens für eine App“). Dazu ist eine Authentifizierung als GitHub-App mit einem JWT erforderlich. Weitere Informationen findest du unter [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app) („Authentifizieren als GitHub-App“) und [Authenticating as an installation](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation) („Authentifizieren als Installation“).
1. Verwende dieses Server-zu-Server-Token für die Interaktion mit deinen Repositorys (über die REST- oder GraphQL-API bzw. über einen Git-Client).

## Computerbenutzer

Wenn dein Server auf mehrere Repositorys zugreifen muss, kannst du ein neues Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} erstellen und einen SSH-Schlüssel anfügen, der exklusiv für die Automatisierung verwendet wird. Da dieses Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} nicht von menschlichen Benutzer*innen verwendet wird, wird es als _Computerbenutzer_ bezeichnet. Du kannst den Computerbenutzer als [Projektmitarbeiter][collaborator] für ein persönliches Repository (mit Lese- und Schreibzugriff), als [externen Mitarbeiter][outside-collaborator] für ein Organisationsrepository (mit Lese-, Schreib- oder Administratorzugriff) oder zu einem [Team][team] mit Zugriff auf die Repositorys hinzufügen, die automatisiert werden müssen (dabei werden die Berechtigungen des Teams zugewiesen).

{% ifversion fpt or ghec %}

{% tip %}

**Tipp:** In unseren [Vertragsbedingungen][tos] ist Folgendes festgelegt:

> *Konten, die von „Bots“ oder durch andere automatisierte Methoden registriert werden, sind nicht zulässig.*

Dies bedeutet, dass du die Erstellung von Konten nicht automatisieren kannst. Wenn du jedoch einen einzelnen Computerbenutzer für die Automatisierung von Aufgaben wie Bereitstellungsskripts in deinem Projekt oder deiner Organisation erstellen möchtest, ist das problemlos möglich.

{% endtip %}

{% endif %}

#### Vorteile

* Alle Benutzer*innen, die Zugriff auf das Repository und den Server haben, können das Projekt bereitstellen.
* (Menschliche) Benutzer*innen müssen ihre lokalen SSH-Schlüssel nicht ändern.
* Es werden nicht mehrere Schlüssel benötigt, ein Schlüssel pro Server ist ausreichend.

#### Nachteile

* Lediglich bei Organisationen können Computerbenutzer auf Lesezugriff beschränkt werden. Persönliche Repositorys gewähren Projektmitarbeitern immer Lese- und Schreibzugriff.
* Genau wie Bereitstellungsschlüssel sind auch Computerbenutzerschlüssel in der Regel nicht durch eine Passphrase geschützt.

#### Einrichten

1. [Führe die `ssh-keygen`-Prozedur][generating-ssh-keys] auf deinem Server aus, und füge den öffentlichen Schlüssel an das Computerbenutzerkonto an.
2. Gewähre dem Computerbenutzerkonto Zugriff auf die Repositorys, die automatisiert werden sollen. Zu diesem Zweck kannst du das Konto als [Projektmitarbeiter][collaborator], als [externer Mitarbeiter][outside-collaborator] oder zu einem [Team][team] in einer Organisation hinzufügen.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team

## Weiterführende Themen
- [Configuring notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options) („Konfigurieren von Benachrichtigungen“)
