---
title: Problembehandlung bei TLS-Fehlern
intro: 'Bei TLS-Problemen mit Ihrer Appliance kannst du Maßnahmen ergreifen, um diese zu beheben.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/configuring-your-enterprise/troubleshooting-ssl-errors
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
shortTitle: Troubleshoot TLS errors
ms.openlocfilehash: 855737f89f0380333b1f37c26d512c889f2ee786
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881251'
---
## Passphrase aus deiner Schlüsseldatei entfernen

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

## TLS-Zertifikat oder -Schlüssel in das PEM-Format umwandeln

Wenn du OpenSSL installiert hast, kannst du den Schlüssel mit dem Befehl `openssl` in das PEM-Format umwandeln. Beispielsweise kannst du einen Schlüssel vom DER- in das PEM-Format umwandeln.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Andernfalls kannst du das SSL Converter-Tool verwenden, um dein Zertifikat in das PEM-Format umzuwandeln. Weitere Informationen findest du in der [Dokumentation des SSL-Konvertertools](https://www.sslshopper.com/ssl-converter.html).

## Nicht antwortende Installation nach dem Hochladen eines Schlüssels

Wenn {% data variables.product.product_location %} nach dem Hochladen eines TLS-Schlüssels nicht mehr reagiert, [kontaktiere den {% data variables.product.prodname_enterprise %}-Support](https://enterprise.github.com/support) mit den entsprechenden Details, einschließlich einer Kopie deines TLS-Zertifikats. Vergewissere dich, dass dein privater Schlüssel **nicht** enthalten ist. 

## Zertifizierungsgültigkeitsfehler

Clients wie Webbrowser und die Git-Befehlszeile zeigen eine Fehlermeldung an, wenn die Gültigkeit eines TLS-Zertifikats nicht verifiziert werden kann. Dies ist oftmals bei selbstsignierten Zertifikaten und bei „verketteten Root“-Zertifikaten der Fall, die von einem Root-Zwischenzertifikat ausgestellt wurden, das vom Client nicht anerkannt wird.

Wenn du ein von einer Zertifizierungsstelle (CA) signiertes Zertifikat verwendest, muss die von dir auf {% data variables.product.prodname_ghe_server %} hochgeladene Zertifikatsdatei eine Zertifikatskette mit dem Root-Zertifikat der CA enthalten. Verkette zum Erstellen einer solchen Datei deine gesamte Zertifikatskette (oder „Zertifikats-Bundle“) am Ende deines Zertifikats, um sicherzustellen, dass das Hauptzertifikat mit deinem Hostnamen zuerst angezeigt wird. Auf den meisten Systemen kannst du dazu einen Befehl ausführen, der folgendem ähnelt:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Du solltest ein Zertifikatsbundle (z. B. `bundle-certificates.crt`) von deiner Zertifizierungsstelle oder deinem TLS-Anbieter herunterladen können.

## Selbstsignierte oder Root-Zertifikate von nicht vertrauenswürdigen Zertifizierungsstellen (CA) installieren

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

## TLS-Zertifikat aktualisieren

Du kannst ein neues selbstsigniertes Zertifikat generieren oder mit dem Befehlszeilenprogramm `ghe-ssl-certificate-setup` ein vorhandenes TLS-Zertifikat für {% data variables.product.product_location %} aktualisieren. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup).
