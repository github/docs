---
title: Verwenden eines Proxyservers mit selbstgehosteten Runnern
intro: 'Du kannst selbst gehostete Runner so konfigurieren, dass sie einen Proxy-Server verwenden, um mit {% data variables.product.product_name %} zu kommunizieren.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090438'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einen Proxyserver mithilfe von Umgebungsvariablen konfigurieren

Wenn Dein selbst-gehosteten Runner über einen Proxy-Server kommunizieren soll, verwendet die Anwendung für selbst-gehostete Runner die Proxy-Konfigurationen in den folgenden Umgebungsvariablen:

* `https_proxy`: Proxy-URL für HTTPS-Datenverkehr. Du kannst bei Bedarf auch Anmeldeinformationen zur einfachen Authentifizierung angeben. Beispiel:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: Proxy-URL für HTTPS-Datenverkehr. Du kannst bei Bedarf auch Anmeldeinformationen zur einfachen Authentifizierung angeben. Beispiel:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: Durch Kommas getrennte Liste von Hosts, die keinen Proxy verwenden sollten. Nur Hostnamen sind in `no_proxy` zulässig, du kannst keine IP-Adressen verwenden. Beispiel:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

Die Proxy-Umgebungsvariablen werden beim Starten der Anwendung für selbst-gehostete Runner gelesen. Daher musst Du die Umgebungsvariablen festlegen, bevor Du die Anwendung für selbst-gehostete Runner konfigurierst oder startest. Wenn sich deine Proxykonfiguration ändert, musst du die selbstgehostete Runneranwendung neu starten.

Auf Windows-Rechnern wird bei den Namen der Proxy-Umgebungsvariablen nicht zwischen Groß- und Kleinschreibung unterschieden. Auf Linux- und macOS-Rechnern wird empfohlen, alle Umgebungsvariablen in Kleinbuchstaben zu schreiben. Wenn eine Umgebungsvariable sowohl in Kleinbuchstaben als auch in Großbuchstaben unter Linux oder macOS vorhanden ist (z. B. `https_proxy` und `HTTPS_PROXY`), verwendet die selbstgehostete Runneranwendung die Umgebungsvariable in Kleinbuchstaben.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## Eine .env-Datei zur Proxykonfiguration verwenden

Wenn es nicht praktikabel ist, Umgebungsvariablen festzulegen, kannst du die Proxykonfigurationsvariablen in eine Datei mit dem Namen _.env_ schreiben, die im Verzeichnis der Anwendung für selbstgehostete Runner gespeichert wird. Dies kann z. B. erforderlich sein, wenn Du die Runner-Anwendung als Dienst unter einem Systemkonto konfigurieren möchtest. Wenn die Runneranwendung gestartet wird, liest sie die Variablen für die Proxykonfiguration aus _.env_.

Eine Beispielproxykonfiguration für _.env_ wird unten gezeigt:

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Festlegen der Proxy-Konfiguration für Docker-Container

Wenn Du Docker-Container-Aktionen oder Service-Container in Deinen Workflows verwendest, musst Du möglicherweise zusätzlich zur Einstellung der oben genannten Umgebungsvariablen auch Docker so konfigurieren, dass er Deinen Proxy-Server verwendet.

Informationen zur erforderlichen Docker-Konfiguration findest du in der Docker-Dokumentation unter [Konfigurieren von Docker zum Verwenden eines Proxyservers](https://docs.docker.com/network/proxy/).
