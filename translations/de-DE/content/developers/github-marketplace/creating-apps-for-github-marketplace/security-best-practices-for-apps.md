---
title: Bewährte Methoden für die Sicherheit von Apps
intro: 'Richtlinien zum Vorbereiten einer sicheren App zum Freigeben auf dem {% data variables.product.prodname_marketplace %}'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: Security best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: aaff313f73b74ba28f765050a8f993a9dddea1be
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089755'
---
Wenn du diese bewährten Verfahren befolgst, kannst du ein sicheres Benutzererlebnis schaffen.

## Autorisierung, Authentifizierung und Zugriffssteuerung

Es wird empfohlen, eine GitHub App anstatt einer OAuth-App zu erstellen. {% data reusables.marketplace.github_apps_preferred %}. Weitere Details findest du unter „[Unterschiede zwischen GitHub Apps und OAuth-Apps](/apps/differences-between-apps/).“
- Apps sollten das Prinzip der geringsten Berechtigung anwenden und nur die OAuth-Bereiche und GitHub App-Berechtigungen anfordern, die die App benötigt, um ihre beabsichtigte Funktion auszuführen. Weitere Informationen findest du unter [Prinzip der geringsten Rechte](https://en.wikipedia.org/wiki/Principle_of_least_privilege) in Wikipedia.
- Apps sollten den Kunden eine Möglichkeit bieten, ihr Konto zu löschen, ohne dass sie eine E-Mail schreiben oder einen Support-Mitarbeiter kontaktieren müssen.
- Apps sollten keine Token zwischen verschiedenen Implementierungen der App freigeben. Zum Beispiel sollte eine Desktop-App ein anderes Token haben als eine webbasierte App. Mit individuellen Token kann jede App den Zugriff auf die GitHub-Ressourcen separat anfordern.
- Entwirf deine App mit unterschiedlichen Benutzerrollen, je nachdem, welche Funktionen der jeweilige Benutzertyp benötigt. Ein Standardbenutzer sollte z.B. keinen Zugriff auf die Verwaltungsfunktionen haben, und Abrechnungsmanager brauchen vielleicht keinen Push-Zugriff auf den Repository-Code.
- Apps sollten keine Dienstkonten wie E-Mail- oder Datenbankdienste freigeben, um deinen SaaS-Dienst zu verwalten.
- Alle Dienste, die in deiner App verwendet werden, sollten eindeutige Anmelde- und Kennwortanmeldeinformationen aufweisen.
- Der Zugriff auf die Produktionshosting-Infrastruktur mit Administratorrechten sollte nur Ingenieuren und Mitarbeitern mit administrativen Aufgaben gewährt werden.
- Apps sollten keine persönlichen Zugangstoken zur Authentifizierung verwenden und sich als [OAuth-App](/apps/about-apps/#about-oauth-apps) oder [GitHub App](/apps/about-apps/#about-github-apps) authentifizieren:
  - OAuth-Apps sollten sich mit einem [OAuth-Token](/apps/building-oauth-apps/authorizing-oauth-apps/) authentifizieren.
  - GitHub Apps sollten sich mithilfe eines [JSON-Webtokens (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), [OAuth-Token](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) oder [Installationszugriffstoken](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) authentifizieren.

## Schutz von Daten

- Apps sollten Daten, die über das öffentliche Internet übertragen werden, mit HTTPS und einem gültigen TLS-Zertifikat oder SSH für Git verschlüsseln.
- Apps sollten Client-ID und Geheimschlüssel sicher speichern. Es wird empfohlen, sie als [Umgebungsvariablen](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables) zu speichern.
- Apps sollten alle Benutzerdaten von GitHub innerhalb von 30 Tagen nach Erhalt einer Anfrage des Benutzers oder innerhalb von 30 Tagen nach Beendigung der Rechtsbeziehung des Benutzers mit GitHub löschen.
- Apps sollten nicht verlangen, dass der Benutzer sein GitHub-Passwort angibt.
- Apps sollten Token, Client-IDs und Clientschlüssel verschlüsseln.

## Protokollierung und Überwachung

Apps sollten über Protokollierungs- und Überwachungsfunktionen verfügen. App-Protokolle sollten mindestens 30 Tage lang aufbewahrt und für mindestens ein Jahr archiviert werden.
Ein Sicherheitsprotokoll sollte enthalten:

- Authentisierungs- und Autorisierungsereignisse
- Änderungen der Dienstkonfiguration
- Lesen und Schreiben von Objekten
- Alle Benutzer- und Gruppenberechtigungsänderungen
- Erhöhung der Rolle zum Administrator
- Konsistente Zeitstempelung für jedes Ereignis
- Quellbenutzer, IP-Adressen und/oder Hostnamen für alle protokollierten Aktionen

## Workflow zur Reaktion auf Vorfälle

Um den Benutzern eine sichere Umgebung zu bieten, solltest du einen klaren Plan zur Reaktion auf Vorfälle haben, bevor du deine App veröffentlichst. Es empfiehlt sich, ein eigenes Sicherheitsteam in deinem Unternehmen einzurichten, anstatt einen Drittanbieter zu beauftragen. Du solltest die Möglichkeit haben, {% data variables.product.product_name %} innerhalb von 24 Stunden nach einem bestätigten Vorfall zu benachrichtigen.

Ein Beispiel für einen Workflow zur Reaktion auf einen Vorfall findest du auf der [SANS Institute-Website](https://www.sans.org/information-security-policy/) unter „Datenverletzungsantwortrichtlinie“. Ein kurzes Dokument mit klaren Schritten für den Fall eines Vorfalls ist wertvoller als eine lange Richtlinienvorlage.

## Verwaltung von Sicherheitsrisiken und Patching-Workflow

Du solltest regelmäßige Sicherheitsüberprüfungen der Produktionsinfrastruktur durchführen. Du solltest die Ergebnisse der Sicherheitsüberprüfungen bewerten und einen Zeitraum festlegen, innerhalb dessen du die Sicherheitsrisiken beheben willst.

Wenn du noch nicht bereit bist, ein komplettes Programm zum Sicherheitsrisikomanagement einzurichten, ist es sinnvoll, mit der Erstellung eines Patching-Prozesses zu beginnen. Anleitungen zum Erstellen einer Patchverwaltungsrichtlinie findest du in diesem TechRepublic-Artikel „[Einrichten einer Patchverwaltungsrichtlinie](https://www.techrepublic.com/article/establish-a-patch-management-policy-87756/).“
