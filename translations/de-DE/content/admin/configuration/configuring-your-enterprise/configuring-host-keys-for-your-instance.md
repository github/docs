---
title: Konfigurieren von Hostschlüsseln für deine Instanz
shortTitle: Configure host keys
intro: 'Du kannst die Sicherheit von {% data variables.location.product_location %} erhöhen, indem du die Algorithmen konfigurierst, die deine Instanz zum Generieren und Ankündigen von Hostschlüsseln für eingehende SSH-Verbindungen verwendet.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107109'
---
## Informationen zu Hostschlüsseln für deine Instanz

Server, die SSH-Verbindungen akzeptieren, kündigen einen oder mehrere kryptografische Hostschlüssel an, um den Server für SSH-Clients sicher zu identifizieren. Um die Identität des Servers während der Initialisierung einer Verbindung zu bestätigen, speichern und überprüfen Clients den Hostschlüssel. Weitere Informationen findest du unter [SSH Host Key - What, Why, How](https://ssh.com/academy/ssh/host-key) auf der Website der SSH Academy.

{% data reusables.enterprise.about-ssh-ports %}

Standardmäßig werden von {% data variables.location.product_location %} Hostschlüssel unter Verwendung einer OpenSSH-ähnlichen Hostschlüsselrotation generiert und angekündigt. Um die Sicherheit von SSH in deiner Umgebung zu erhöhen, kannst du zusätzliche Algorithmen für die Generierung von Hostschlüsseln aktivieren.

{% note %}

**Hinweis**: Wenn du zusätzliche Hostschlüsselalgorithmen aktivierst, kann es vorkommen, dass Clients, die für SSH-Verbindungen nicht OpenSSH verwenden, während der Verbindung Warnungen erhalten oder dass die Verbindung ganz fehlschlägt. Einige SSH-Implementierungen können nicht unterstützte Algorithmen ignorieren und ein Fallback zu einem anderen Algorithmus vornehmen. Wenn der Client kein Fallback unterstützt, schlägt die Verbindung fehl. Die SSH-Bibliothek für Go unterstützt beispielsweise kein Fallback zu einem anderen Algorithmus.

{% endnote %}

## Verwalten eines Ed25519-Hostschlüssels

Um die Sicherheit für Clients zu erhöhen, die sich mit {% data variables.location.product_location %} verbinden, kannst du die Generierung und Ankündigung eines Ed25519-Hostschlüssels aktivieren. Ed25519 ist immun gegen einige Angriffe, die auf ältere Signaturalgorithmen abzielen, ohne dabei an Geschwindigkeit einzubüßen. Ältere SSH-Clients unterstützen möglicherweise Ed25519 nicht. Standardmäßig werden von {% data variables.product.product_name %}-Instanzen keine Ed25519-Hostschlüssel generiert oder angekündigt. Weitere Informationen findest du auf der [Website zu Ed25519](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Gib den folgenden Befehl ein, um die Generierung und Ankündigung des Ed25519-Hostschlüssels zu aktivieren.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. Gib optional den folgenden Befehl ein, um die Generierung und Ankündigung des Ed25519-Hostschlüssels zu deaktivieren.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
