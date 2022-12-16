---
title: Social-Media-Vorschau Deines Repositorys anpassen
intro: 'Du kannst das Bild anpassen, das auf Social-Media-Plattformen angezeigt wird, wenn jemand auf Dein Repository verknüpft.'
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
ms.openlocfilehash: a778b0fd95533a15806cc0034769fbf0feb3b217
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886742'
---
Wenn Du noch kein Bild hinzugefügt hast, werden sich Repository-Links erweitern, um grundlegende Informationen zum Repository sowie den Avatar des Inhabers anzeigen. Durch das Hinzufügen eines Bildes zu Deinem Repository vereinfachst Du die Identifizierung Deines Projekts auf den verschiedenen Social-Media-Kanälen.

## Hinzufügen eines Bilds zum Anpassen der Social Media-Vorschau deines Repositorys

{% ifversion not ghae %}Du kannst ein Bild in ein privates Repository hochladen, aber Dein Bild kann nur von einem öffentlichen Repository geteilt werden.{% endif %}

{% tip %}

**Tipp:** : Dein Bild sollte eine PNG-, JPG- oder GIF-Datei mit weniger als 1 MB sein. Für eine optimale Darstellung empfehlen wir eine Bildgröße von 640 x 320 Pixeln.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Klicke unter "Social previes" (Social Media-Vorschau) auf **Edit** (Bearbeiten).
    - Um ein neues Bild hinzuzufügen, klicke auf **Upload an image...** (Bild hochladen).
    - Um ein Bild zu entfernen, klicken auf **Remove image** (Bild entfernen).

    ![Dropdownmenü „Social preview" (Social-Media-Vorschau)](/assets/images/help/repository/social-preview.png)

## Informationen zur Transparenz

Wir unterstützen PNG-Bilder mit Transparenz. Viele Kommunikationsplattformen unterstützen einen dunklen Modus, sodass die Verwendung einer transparenten Social Media-Vorschau von Vorteil sein kann. Das folgende transparente Bild ist auf einem dunklen Hintergrund akzeptabel; dies ist jedoch u. U. nicht immer der Fall. 

Beachte bei der Verwendung eines transparenten Bilds, wie es auf verschiedenen Farbhintergrunds oder Plattformen aussehen kann, die keine Transparenz unterstützen.

{% tip %}

**Tipp:** Wenn Du nicht sicher bist, empfehlen wir die Verwendung eines Bilds mit einem Hintergrund mit Volltonfarbe.
{% endtip %}

![Transparenz in der Social Media-Vorschau](/assets/images/help/repository/social-preview-transparency.png)
