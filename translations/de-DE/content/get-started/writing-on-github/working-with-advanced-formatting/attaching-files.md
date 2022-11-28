---
title: Anfügen von Dateien
intro: 'Du kannst Informationen vermitteln, indem du deinen Issues und Pull Requests verschiedene Dateitypen anfügst.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
  - /github/writing-on-github/working-with-advanced-formatting/attaching-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 28ce895a23c83f410d4755ad4036673e5c816155
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160763'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

Um eine Datei an eine Issue- oder eine Pull-Request-Unterhaltung anzuhängen, ziehe sie per Drag-and-Drop in das Kommentarfeld. Alternativ kannst du die Leiste am unteren Rand des Kommentarfeldes anklicken, um eine Datei auf deinem Computer zu suchen, auszuwählen und hinzuzufügen.

![Anhänge vom Computer auswählen](/assets/images/help/pull_requests/select-bar.png)

Wenn du eine Datei anfügst, wird sie sofort in {% data variables.product.product_name %} hochgeladen, und das Textfeld wird aktualisiert, um die anonymisierte URL für die Datei anzuzeigen. {% ifversion fpt or ghec %} Weitere Informationen zu anonymisierten URLs findest du unter [Informationen zu anonymisierten URLs](/github/authenticating-to-github/about-anonymized-urls).{% endif %}

{% tip %}

**Tipp:** In vielen Browsern kannst du kopierte Bilder direkt in das Feld einfügen.

{% endtip %}

Die maximale Dateigröße beträgt:
- 10 MB für Bilder und GIFs {% ifversion fpt or ghec %}
- 10 MB für Videos, die in ein Repository hochgeladen wurden, das sich in einem kostenlosen GitHub-Plan im Besitz eines Benutzers oder einer Organisation befindet
- 100 MB für Videos, die in ein Repository hochgeladen wurden, das sich in einem kostenpflichtigen GitHub-Plan im Besitz von Benutzer*innen oder einer Organisation befindet {% elsif ghes %}
- 100 MB für Videos{% endif %}
- 25 MB für alle anderen Dateien

Wir unterstützen die folgenden Dateiformate:

* PNG ( *.png*)
* GIF ( *.gif*)
* JPEG ( *.jpg*) {%- ifversion svg-support %}
* SVG ( *.svg*) {%- endif %}
* Protokolldateien ( *.log*)
* Microsoft Word-, Powerpoint- und Excel-Dokumente ( *.docx*, *.pptx* und *.xlsx*)
* Textdateien ( *.txt*)
* PDFs ( *.pdf*)
* ZIP ( *.zip*, *.gz*, *.tgz*){% ifversion fpt or ghec or ghes %}
* Video ( *.mp4*, *.mov*, *.webm*){% endif %}

{% ifversion fpt or ghec or ghes %}{% note %}

**Hinweis:** Die Videocodec-Kompatibilität ist browserspezifisch, und ein Video, das du in einen Browser hochlädst, wird auf einem anderen Browser vielleicht nicht angezeigt. Derzeit empfehlen wir für maximale Kompatibilität die Verwendung von h.264.

{% endnote %}{% endif %}

![Animiertes GIF zu Anhängen](/assets/images/help/pull_requests/dragging_images.gif)
