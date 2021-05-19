---
title: Fehlerbehebung bei SSL-Fehlern
intro: 'Bei SSL-Problemen mit Ihrer Appliance können Sie Maßnahmen ergreifen, um diese zu beheben.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors/
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration/
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Errors
  - Infrastructure
  - Networking
  - Security
  - Troubleshooting
---
### Passphrase aus Ihrer Schlüsseldatei entfernen

Wenn Sie über eine Linux-Maschine mit installiertem OpenSSL verfügen, können Sie Ihre Passphrase entfernen.

1. Benennen Sie Ihre ursprüngliche Schlüsseldatei um.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. Generieren Sie einen neuen Schlüssel ohne eine Passphrase.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

Wenn Sie diesen Befehl ausführen, werden Sie aufgefordert, die Passphrase des Schlüssels einzugeben.

Weitere Informationen zu OpenSSL finden Sie in der [Dokumentation zu OpenSSL](https://www.openssl.org/docs/).

### SSL-Zertifikat oder Schlüssel in das PEM-Format umwandeln

Wenn Sie OpenSSL installiert haben, können Sie den Schlüssel mit dem Befehl `openssl` in das PEM-Format umwandeln. Beispielsweise können Sie einen Schlüssel vom DER- in das PEM-Format umwandeln.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Andernfalls können Sie das SSL Converter-Tool verwenden, um Ihr Zertifikat in das PEM-Format umzuwandeln. Weitere Informationen finden Sie in der Dokumentation zum [SSL Converter-Tool](https://www.sslshopper.com/ssl-converter.html).

### Nicht antwortende Installation nach dem Hochladen eines Schlüssels

Wenn {% data variables.product.product_location %} nach dem Hochladen eines SSL-Schlüssels nicht mehr antwortet, [kontaktieren Sie den {% data variables.product.prodname_enterprise %}-Support](https://enterprise.github.com/support) mit den entsprechenden Details, einschließlich einer Kopie Ihres SSL-Zertifikats.

### Zertifizierungsgültigkeitsfehler

Clients wie Webbrowser und die Git-Befehlszeile zeigen eine Fehlermeldung an, wenn die Gültigkeit eines SSL-Zertifikats nicht verifiziert werden kann. Dies ist oftmals bei selbstsignierten Zertifikaten und bei „verketteten Root“-Zertifikaten der Fall, die von einem Root-Zwischenzertifikat ausgestellt wurden, das vom Client nicht anerkannt wird.

Wenn Sie ein von einer Zertifizierungsstelle (CA) signiertes Zertifikat verwenden, muss die von Ihnen auf {% data variables.product.prodname_ghe_server %} hochgeladene Zertifikatsdatei eine Zertifikatskette mit dem Root-Zertifikat der CA enthalten. Verketten Sie zum Erstellen einer solchen Datei Ihre gesamte Zertifikatskette (oder „Zertifikats-Bundle“) am Ende Ihres Zertifikats, um sicherzustellen, dass das Hauptzertifikat mit Ihrem Hostnamen zuerst angezeigt wird. Auf den meisten Systemen können Sie dazu einen Befehl ausführen, der folgendem ähnelt:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Sie sollten ein Zertifikats-Bundle (z. B. `bundle-certificates.crt`) von Ihrer Zertifizierungsstelle oder von Ihrem SSL-Anbieter herunterladen können.

### Selbstsignierte oder Root-Zertifikate von nicht vertrauenswürdigen Zertifizierungsstellen (CA) installieren

Wenn Ihre {% data variables.product.prodname_ghe_server %}-Appliance mit anderen Maschinen in Ihrem Netzwerk interagiert, die ein selbstsigniertes oder nicht vertrauenswürdiges Zertifikat verwenden, müssen Sie das Root-Zertifikat der signierenden CA in den systemweiten Zertifikatsspeicher importieren, um über HTTPS auf diese Systeme zugreifen zu können.

1. Rufen Sie das Root-Zertifikat der CA von Ihrer lokalen Zertifizierungsstelle ab, und stellen Sie sicher, dass es im PEM-Format vorliegt.
2. Kopieren Sie über die SSH als der Benutzer „admin“ auf Port 122 die Datei auf Ihre {% data variables.product.prodname_ghe_server %}-Appliance.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. Stellen Sie über die SSH als der Benutzer „admin“ auf Port 122 eine Verbindung zur {% data variables.product.prodname_ghe_server %}-Verwaltungsshell her.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. Importieren Sie das Zertifikat in den systemweiten Zertifikatsspeicher.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```
