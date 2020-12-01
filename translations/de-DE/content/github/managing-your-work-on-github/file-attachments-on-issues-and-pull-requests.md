---
title: Dateianhänge für Issues und Pull Requests
intro: 'Wenn Du einen Issue öffnest oder einen Pull Request aktualisierst, kannst Du mithilfe von Issue-Anhängen Bilder von vorgeschlagenen Funktionen oder Screenshots von Fehlern hochladen.'
redirect_from:
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% warning %}

**Warnung:** Wenn Du ein Bild zu einem Pull-Request- oder Issue-Kommentar hinzufügst, kann jeder die anonymisierte Bild-URL ohne Authentifizierung anzeigen, selbst wenn sich der Pull Request in einem privaten Repository befindet{% if enterpriseServerVersions contains currentVersion %} oder der private Modus aktiviert ist{% endif %}. Um vertraulicher Bilder zu schützen, stelle sie über ein privates Netzwerk oder einen Server bereit, der eine Authentifizierung vorschreibt. {% if currentVersion == "free-pro-team@latest" %}For more information on anonymized URLs see "[About anonymized image URLs](/articles/about-anonymized-image-urls)".{% endif %}

{% endwarning %}

Um eine Datei an eine Issue- oder eine Pull-Request-Unterhaltung anzuhängen, ziehe sie per Drag-and-Drop in das Kommentarfeld. Alternativ kannst Du die Leiste am unteren Rand des Kommentarfeldes anklicken, um eine Datei von Deinem Computer zu suchen, auszuwählen und hinzuzufügen.

![Anhänge vom Computer auswählen](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** In many browsers, you can copy-and-paste images directly into the box.

{% endtip %}

Die Größe der Anhänge ist bei Dateien auf 25 MB und bei Bildern auf 10 MB beschränkt.

Wir unterstützen die folgenden Dateiformate:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Protokolldateien (*.log*)
* Microsoft Word-Dokumente (*.docx*), Powerpoint-Dokumente (*.pptx*) und Excel-Dokumente (*.xlsx*)
* Textdateien (*.txt*)
* PDF-Dateien (*.pdf*)
* ZIP-Dateien (*.zip*, *.gz*)

![Animiertes GIF zu Anhängen](/assets/images/help/pull_requests/dragging_images.gif)
