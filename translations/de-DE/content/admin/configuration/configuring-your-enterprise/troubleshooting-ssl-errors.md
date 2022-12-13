---
title: Fehlerbehebung bei SSL-Fehlern
intro: Bei SSL-Problemen mit deiner Appliance kannst du Maßnahmen ergreifen, um diese zu beheben.
redirect_from:
- /enterprise/admin/articles/troubleshooting-ssl-errors
- /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
- /enterprise/admin/installation/troubleshooting-ssl-errors
- /enterprise/admin/configuration/troubleshooting-ssl-errors
- /admin/configuration/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
- Enterprise
- Errors
- Infrastructure
- Networking
- Security
- Troubleshooting
shortTitle: Troubleshoot SSL errors
ms.openlocfilehash: cfe73a647b539fa8c9c2aef54f8bc51f2b1becae
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106932"
---
## <a name="removing-the-passphrase-from-your-key-file"></a>Entfernen der Passphrase aus deiner Schlüsseldatei

Wenn du über eine Linux-Maschine mit installiertem OpenSSL verfügst, kannst du deine Passphrase entfernen.

1. Benenne deine ursprüngliche Schlüsseldatei um.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. Generiere einen neuen Schlüssel ohne eine Passphrase.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

Wenn du diesen Befehl ausführst, wirst du aufgefordert, die Passphrase des Schlüssels einzugeben.

Weitere Informationen zu OpenSSL findest du in der [Dokumentation zu OpenSSL](https://www.openssl.org/docs/).

## <a name="converting-your-ssl-certificate-or-key-into-pem-format"></a>SSL-Zertifikat oder Schlüssel in das PEM-Format umwandeln

Wenn du OpenSSL installiert hast, kannst du den Schlüssel mit dem Befehl `openssl` in das PEM-Format umwandeln. Beispielsweise kannst du einen Schlüssel vom DER- in das PEM-Format umwandeln.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Andernfalls kannst du das SSL Converter-Tool verwenden, um dein Zertifikat in das PEM-Format umzuwandeln. Weitere Informationen findest du in der [Dokumentation des SSL-Konvertertools](https://www.sslshopper.com/ssl-converter.html).

## <a name="unresponsive-installation-after-uploading-a-key"></a>Nicht antwortende Installation nach dem Hochladen eines Schlüssels

Wenn {% data variables.product.product_location %} nach dem Hochladen eines SSL-Schlüssels nicht mehr antwortet, [kontaktiere den {% data variables.product.prodname_enterprise %}-Support](https://enterprise.github.com/support) mit den entsprechenden Details, einschließlich einer Kopie deines SSL-Zertifikats.

## <a name="certificate-validity-errors"></a>Zertifizierungsgültigkeitsfehler

Clients wie Webbrowser und die Git-Befehlszeile zeigen eine Fehlermeldung an, wenn die Gültigkeit eines SSL-Zertifikats nicht verifiziert werden kann. Dies ist oftmals bei selbstsignierten Zertifikaten und bei „verketteten Root“-Zertifikaten der Fall, die von einem Root-Zwischenzertifikat ausgestellt wurden, das vom Client nicht anerkannt wird.

Wenn du ein von einer Zertifizierungsstelle (CA) signiertes Zertifikat verwendest, muss die von dir auf {% data variables.product.prodname_ghe_server %} hochgeladene Zertifikatsdatei eine Zertifikatskette mit dem Root-Zertifikat der CA enthalten. Verkette zum Erstellen einer solchen Datei deine gesamte Zertifikatskette (oder „Zertifikats-Bundle“) am Ende deines Zertifikats, um sicherzustellen, dass das Hauptzertifikat mit deinem Hostnamen zuerst angezeigt wird. Auf den meisten Systemen kannst du dazu einen Befehl ausführen, der folgendem ähnelt:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Du solltest ein Zertifikatsbundle (z. B. `bundle-certificates.crt`) von deiner Zertifizierungsstelle oder deinem SSL-Anbieter herunterladen können.

## <a name="installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates"></a>Selbstsignierte oder Root-Zertifikate von nicht vertrauenswürdigen Zertifizierungsstellen (CA) installieren

Wenn deine {% data variables.product.prodname_ghe_server %}-Appliance mit anderen Maschinen in deinem Netzwerk interagiert, die ein selbstsigniertes oder nicht vertrauenswürdiges Zertifikat verwenden, musst du das Root-Zertifikat der signierenden CA in den systemweiten Zertifikatsspeicher importieren, um über HTTPS auf diese Systeme zugreifen zu können.

1. Rufe das Root-Zertifikat der CA von deiner lokalen Zertifizierungsstelle ab, und stelle sicher, dass es im PEM-Format vorliegt.
2. Kopiere über die SSH als der Benutzer „admin“ auf Port 122 die Datei auf deine {% data variables.product.prodname_ghe_server %}-Appliance.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. Stelle über die SSH als der Benutzer „admin“ auf Port 122 eine Verbindung zur {% data variables.product.prodname_ghe_server %}-Verwaltungsshell her.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. Importiere das Zertifikat in den systemweiten Zertifikatsspeicher.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```

## <a name="updating-an-ssl-certificate"></a>Aktualisieren eines SSL-Zertifikats

Du kannst ein neues selbstsigniertes Zertifikat generieren oder ein vorhandenes SSL-Zertifikat für {% data variables.product.product_location %} mit dem `ghe-ssl-certificate-setup`-Befehlszeilenprogramm aktualisieren. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup).
