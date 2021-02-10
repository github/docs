---
title: Einen Proxy-Server für selbst-gehostete Runner verwenden
intro: 'Du kannst selbst gehostete Runner so konfigurieren, dass sie einen Proxy-Server verwenden, um mit {% data variables.product.product_name %} zu kommunizieren.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einen Proxyserver mithilfe von Umgebungsvariablen konfigurieren

Wenn Dein selbst-gehosteten Runner über einen Proxy-Server kommunizieren soll, verwendet die Anwendung für selbst-gehostete Runner die Proxy-Konfigurationen in den folgenden Umgebungsvariablen:

* `https_proxy`: Proxy-URL für HTTPS-Datenverkehr. Du kannst bei Bedarf auch Anmeldeinformationen zur einfachen Authentifizierung angeben. Ein Beispiel:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: Proxy-URL für den HTTP-Verkehr. Du kannst bei Bedarf auch Anmeldeinformationen zur einfachen Authentifizierung angeben. Ein Beispiel:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: Durch Kommas getrennte Liste von Hosts, die keinen Proxy verwenden sollten. In `no_proxy` sind nur Host-Namen erlaubt; Du kannst keine IP-Adressen verwenden. Ein Beispiel:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

Die Proxy-Umgebungsvariablen werden beim Starten der Anwendung für selbst-gehostete Runner gelesen. Daher musst Du die Umgebungsvariablen festlegen, bevor Du die Anwendung für selbst-gehostete Runner konfigurierst oder startest. Wenn sich Deine Proxy-Konfiguration ändert, musst Du die Anwendung für selbst-gehostete Runner neu starten.

Auf Windows-Rechnern wird bei den Namen der Proxy-Umgebungsvariablen nicht zwischen Groß- und Kleinschreibung unterschieden. Auf Linux- und macOS-Rechnern wird empfohlen, alle Umgebungsvariablen in Kleinbuchstaben zu schreiben. Wenn Du auf Linux oder macOS eine Umgebungsvariable sowohl in Klein- als auch Großbuchstaben hast, z.B . `https_proxy` und `HTTPS_PROXY`, verwendet die Anwendung für selbst-gehostete Runner die Umgebungsvariable in Kleinbuchstaben.

### Eine .env-Datei zur Proxykonfiguration verwenden

Wenn es nicht praktikabel ist, Umgebungsvariablen zu setzen, kannst Du die Proxykonfigurations-Variablen in eine Datei mit dem Namen _.env_ schreiben, die im Verzeichnis der Anwendung für selbst-gehostete Runner liegt. Dies kann z. B. erforderlich sein, wenn Du die Runner-Anwendung als Dienst unter einem Systemkonto konfigurieren möchtest. Wenn die Runner-Anwendung startet, liest sie die Variablen für die Proxy-Konfiguration aus _.env_.

Eine beispielhafte Proxy-Konfiguration mittels _.env_ ist unten dargestellt:

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

### Festlegen der Proxy-Konfiguration für Docker-Container

Wenn Du Docker-Container-Aktionen oder Service-Container in Deinen Workflows verwendest, musst Du möglicherweise zusätzlich zur Einstellung der oben genannten Umgebungsvariablen auch Docker so konfigurieren, dass er Deinen Proxy-Server verwendet.

Informationen zur erforderlichen Docker-Konfiguration findest Du unter „[Docker-Konfiguration für die Verwendung eines Proxyservers](https://docs.docker.com/network/proxy/)“ in der Docker-Dokumentation.
