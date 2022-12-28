---
title: Konfigurieren von SSH-Verbindungen mit deiner Instanz
shortTitle: Configure SSH connections
intro: 'Du kannst die Sicherheit von {% data variables.location.product_location %} erhöhen, indem du die SSH-Algorithmen konfigurierst, mit denen Clients eine Verbindung herstellen können.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
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
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107541'
---
## Informationen zu SSH-Verbindungen mit deiner Instanz

{% data reusables.enterprise.about-ssh-ports %}

Um die SSH-Clients in deiner Umgebung zu unterstützen, kannst du die Verbindungsarten konfigurieren, die {% data variables.location.product_location %} akzeptiert.

## Konfigurieren von SSH-Verbindungen mit RSA-Schlüsseln

Wenn Benutzer Git-Vorgänge auf {% data variables.location.product_location %} per SSH über Port 22 durchführen, kann sich der Client mit einem RSA-Schlüssel authentifizieren. Der Client kann den Versuch mit der SHA-1-Hashfunktion signieren. In diesem Kontext ist die SHA-1-Hashfunktion nicht mehr sicher. Weitere Informationen findest du unter [SHA-1](https://en.wikipedia.org/wiki/SHA-1) in Wikipedia.

Für {% ifversion ghes < 3.7 %} von {% data variables.product.product_name %} 3.6 und höher{% endif %} schlagen SSH-Verbindungen fehl, die **beide** der folgenden Bedingungen erfüllen.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

Du kannst den Stichtag anpassen. Wenn der Benutzer den RSA-Schlüssel vor dem Stichtag hochgeladen hat, kann sich der Client weiterhin erfolgreich mit SHA-1 verbinden, solange der Schlüssel gültig bleibt. Alternativ kannst du alle mit einem RSA-Schlüssel authentifizierten SSH-Verbindungen ablehnen, wenn der Client die Verbindung mit der SHA-1-Hashfunktion signiert.

Unabhängig davon, welche Einstellung du für deine Instanz festlegst, können Clients weiterhin eine Verbindung mit einem beliebigen RSA-Schlüssel herstellen, der mit einer SHA-2-Hashfunktion signiert ist.

Falls du eine SSH-Zertifizierungsstelle verwendest, schlägt die Verbindung fehl, wenn das `valid_after`-Datum des Zertifikats nach dem Stichtag liegt. Weitere Informationen findest du unter [Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).

Weitere Informationen findest du unter [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Überprüfe mit dem Hilfsprogramm `ghe-find-insecure-git-operations` die Überwachungsprotokolle deiner Instanz auf Verbindungen, die unsichere Algorithmen oder Hashfunktionen verwenden. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations).
1. Mit dem folgenden Befehl kannst du einen Stichtag konfigurieren, nach dem {% data variables.location.product_location %} Verbindungen von Clients ablehnt, die einen nach diesem Datum hochgeladenen RSA-Schlüssel verwenden, wenn die Verbindung mit der SHA-1-Hashfunktion signiert ist. Ersetze _**RFC-3399-UTC-TIMESTAMP**_ durch einen gültigen RFC-3399-UTC-Zeitstempel. Beispielsweise wird der Standardwert 1. August 2022 als `2022-08-01T00:00:00Z` dargestellt. Weitere Informationen findest du auf der IETF-Website unter [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339).

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. Um SSH-Verbindungen mit RSA-Schlüsseln, die mit der SHA-1-Hashfunktion signiert sind, vollständig zu deaktivieren, kannst du alternativ den folgenden Befehl eingeben.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
