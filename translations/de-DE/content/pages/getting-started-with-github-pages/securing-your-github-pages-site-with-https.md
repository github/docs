---
title: GitHub Pages-Website mit HTTPS schützen
intro: 'HTTPS fügt eine Verschlüsselungsebene hinzu, die das Ausspionieren oder Manipulieren des Datenverkehrs zu Deiner Website durch Fremde verhindert. Du kannst HTTPS für deine {% data variables.product.prodname_pages %}-Website erzwingen und so alle HTTP-Anforderungen transparent an HTTPS weiterleiten.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Secure site with HTTPS
ms.openlocfilehash: fb1ce5b0a0f5c19ac58ef0b93cb379f807a89fe4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146273066'
---
Personen mit Administratorberechtigungen für ein Repository können HTTPS für eine {% data variables.product.prodname_pages %}-Website erzwingen.

## Informationen zu HTTPS und {% data variables.product.prodname_pages %}

Alle {% data variables.product.prodname_pages %}-Websites, auch Websites, die korrekt mit einer benutzerdefinierten Domäne konfiguriert sind, unterstützen HTTPS und die Erzwingung von HTTPS. Weitere Informationen zu benutzerdefinierten Domänen findest Du unter "[Über benutzerdefinierte Domänen und {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)" und "[Problembehandlung bei benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)."

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**Hinweis:** RFC3280 legt fest, dass die maximale Länge des allgemeinen Namens 64 Zeichen betragen sollte. Deshalb muss der gesamte Domänenname deiner {% data variables.product.prodname_pages %}-Website weniger als 64 Zeichen lang sein, damit ein Zertifikat erfolgreich erstellt werden kann.

{% endnote %}

## HTTPS für Deine {% data variables.product.prodname_pages %}-Website erzwingen

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Wähle unter "{% data variables.product.prodname_pages %}" die Option **HTTPS erzwingen**.
  ![HTTPS-Kontrollkästchen erzwingen](/assets/images/help/pages/enforce-https-checkbox.png)

## Problembehandlung bei der Zertifikatbereitstellung ("Zertifikat noch nicht erstellt" Fehler")

Wenn Du Deine benutzerdefinierte Domäne in den Seiteneinstellungen einstellst oder änderst, beginnt eine automatische DNS-Überprüfung. Mit dieser Überprüfung wird festgestellt, ob Deine DNS-Einstellungen so konfiguriert sind, dass {% data variables.product.prodname_dotcom %} automatisch ein Zertifikat abrufen kann. Wenn die Überprüfung erfolgreich ist, {% data variables.product.prodname_dotcom %} wird ein Auftrag zur Anforderung eines TLS-Zertifikats bei [Let's Encrypt](https://letsencrypt.org/) in die Warteschlange gestellt. Wenn Du ein gültiges Zertifikat erhältst, wird es von {% data variables.product.prodname_dotcom %} automatisch auf die Server hochgeladen, die die TLS-Abschluss für Seiten durchführen. Wenn dieser Vorgang erfolgreich abgeschlossen ist, wird neben Deinem benutzerdefinierten Domänennamen ein Häkchen angezeigt.

Dieser Vorgang kann eine Weile dauern. Wenn der Vorgang einige Minuten nach dem Klicken auf **Speichern** noch nicht abgeschlossen ist, klicke auf **Entfernen** neben Deinem benutzerdefinierten Domänennamen. Gib den Domänennamen erneut ein, und klicke erneut auf **Speichern**. Dadurch wird der Bereitstellungsprozess abgebrochen und neu gestartet.

## Probleme bei gemischten Inhalten beheben

Wenn Du HTTPS für Deine {% data variables.product.prodname_pages %}-Website aktivierst, der HTML-Code Deiner Website aber immer noch Bilder, CSS oder JavaScript über HTTP referenziert, dann stellt Deine Website *gemischte Inhalte* bereit. In diesem Fall ist Deine Website möglicherweise weniger sicher und das Laden dieser Objekte bereitet eventuell Probleme.

Sollen die gemischten Inhalte Deiner Website entfernt werden, stelle zunächst alle Objekte über HTTPS bereit. Ersetze hierzu `http://` in der HTML Deiner Website durch `https://`.

Objekte befinden sich meist in den folgenden Speicherorten:
- Wenn Deine Website Jekyll verwendet, werden Deine HTML-Dateien wahrscheinlich im Ordner *_layouts* gefunden.
- CSS wird in der Regel im Abschnitt `<head>` Deiner HTML-Datei gefunden.
- JavaScript wird in der Regel im Abschnitt `<head>` oder direkt vor dem schließenden `</body>` Tag gefunden.
- Bilder werden häufig im `<body>` Abschnitt gefunden.

{% tip %}

**Tipp:** Wenn Du die Ressourcen nicht in den Quelldateien Deiner Website findest, suche mit dem Text-Editor oder mit {% data variables.product.product_name %} in den Quelldateien nach `http`.

{% endtip %}

### Beispiele für referenzierte Objekte in einer HTML-Datei

| Ressourcentyp | HTTP                                      | HTTPS                             |
|:----------:|:-----------------------------------------:|:---------------------------------:|
| CSS        | `<link rel="stylesheet" href="http://example.com/css/main.css">` | `<link rel="stylesheet" href="https://example.com/css/main.css">`
| JavaScript   |  `<script type="text/javascript" src="http://example.com/js/main.js"></script>`  |   `<script type="text/javascript" src="https://example.com/js/main.js"></script>`
| Image        |  `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logo"></a>`  | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logo"></a>`  
