---
title: GitHub Pages-Website mit HTTPS schützen
intro: 'HTTPS fügt eine Verschlüsselungsebene hinzu, die das Ausspionieren oder Manipulieren des Datenverkehrs zu Deiner Website durch Fremde verhindert. Du kannst HTTPS für Deine {% data variables.product.prodname_pages %}-Website erzwingen und so alle HTTP-Anforderungen transparent an HTTPS weiterleiten.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
versions:
  free-pro-team: '*'
---

Personen mit Administratorberechtigungen für ein Repository können HTTPS für eine {% data variables.product.prodname_pages %}-Website erzwingen.

### Informationen zu HTTPS und {% data variables.product.prodname_pages %}

Alle {% data variables.product.prodname_pages %}-Websites, auch Websites, die korrekt mit einer benutzerdefinierten Domäne konfiguriert sind, unterstützen HTTPS und die Erzwingung von HTTPS. Weitere Informationen findest Du unter „[Informationen zu benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)“ und „[Fehlerbehebung bei benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors).“

Die HTTPS-Erzwingung ist für {% data variables.product.prodname_pages %}-Websites mit einer `github.io`-Domain obligatorisch, wenn die Website nach dem 15. Juni 2016 erstellt wurde. Wenn Du Deine Website vor dem 15. Juni 2016 erstellt hast, kannst Du die HTTPS-Erzwingung manuell aktivieren.

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

### HTTPS für Deine {% data variables.product.prodname_pages %}-Website erzwingen

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wählen Sie unter „{% data variables.product.prodname_pages %}“ die Option **Enforce HTTPS** (HTTPS erzwingen). ![Kontrollkästchen „Enforce HTTPS“ (HTTPS erzwingen)](/assets/images/help/pages/enforce-https-checkbox.png)

### Probleme bei gemischten Inhalten beheben

Wenn Sie für Ihre {% data variables.product.prodname_pages %}-Website HTTPS aktivieren, die HTML Ihrer Website aber noch Bilder, CSS oder JavaScript über HTTP referenziert, stellt Ihre Website *gemischte Inhalte* bereit. In diesem Fall ist Deine Website möglicherweise weniger sicher und das Laden dieser Objekte bereitet eventuell Probleme.

Sollen die gemischten Inhalte Deiner Website entfernt werden, stelle zunächst alle Objekte über HTTPS bereit. Ersetze hierzu `http://` in der HTML Deiner Website durch `https://`.

Objekte befinden sich meist in den folgenden Speicherorten:
- Wenn Deine Website Jekyll verwendet, befinden sich Deine HTML-Dateien wahrscheinlich im Ordner *_layouts*.
- CSS befindet sich im Allgemeinen im Abschnitt `<head>` Deiner HTML-Dateien.
- JavaScript befindet sich in der Regel im Abschnitt `<head>` oder kurz vor dem schließenden `</body>`-Tag.
- Bilder befinden sich meist im Abschnitt `<body>`.

{% tip %}

**Tipp:** Wenn Sie die Assets nicht in den Quelldateien Ihrer Website finden, suchen Sie mit dem Texteditor oder mit {% data variables.product.product_name %} in den Quelldateien nach `http`.

{% endtip %}

#### Beispiele für referenzierte Objekte in einer HTML-Datei

| Objekt-Typ |                                                       HTTP                                                       |                                                       HTTPS                                                        |
|:----------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
|    CSS     |                      `<link rel="stylesheet" href="http://example.com/css/main.css">`                      |                      `<link rel="stylesheet" href="https://example.com/css/main.css">`                       |
| JavaScript |            `<script type="text/javascript" src="http://example.com/js/main.js"></script>`            |            `<script type="text/javascript" src="https://example.com/js/main.js"></script>`             |
|    Bild    | `<A HREF="http://www.somesite.com"><IMG SRC="http://www.example.com/logo.jpg" alt="Logo"></a>` | `<A HREF="https://www.somesite.com"><IMG SRC="https://www.example.com/logo.jpg" alt="Logo"></a>` |  
