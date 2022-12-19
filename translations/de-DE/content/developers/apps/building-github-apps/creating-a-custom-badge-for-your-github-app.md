---
title: Erstellen eines benutzerdefinierten Badges für deine GitHub-App
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badges
ms.openlocfilehash: df691669b42b0448f9979dec4bf25ca6c1ebf070
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105228'
---
Standardmäßig verfügt eine neue GitHub-App über ein automatisch generiertes [Identicon](https://github.com/blog/1586-identicons).
Dies ist ein Beispiel für einen Identicon-Badge:

![Identicon](/assets/images/identicon.png)

Nachdem du eine GitHub-App erstellt hast, kannst du den Badge deiner App anpassen, indem du ein Logo hochlädst und eine Hintergrundfarbe auswählst. Ein Badge ist ein quadratisches Logobild innerhalb eines kreisförmigen Badges. Du kannst eine Hintergrundfarbe für den Badge auswählen, mit der du deine App optisch hervorheben kannst.

Dein Logo sollte eine PNG-, JPG- oder GIF-Datei sein, die kleiner als 1 MB ist. Für optimale Qualität der Darstellung sollte die Bildgröße mindestens 200px x 200px betragen. {% ifversion fpt or ghec %}Unter [Tipps für Logo- und Badgebilder](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos) findest du weitere Anleitungen zur Anpassung von Badges.{% endif %}

{% ifversion fpt or ghec %}

Du kannst einen benutzerdefinierten Badge für eine GitHub-App ändern, die bereits über einen genehmigten Marketplace-Eintrag verfügt, indem du zu https://github.com/marketplace/manage navigierst.

{% endif %}

So erstellst du einen benutzerdefinierten Badge:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Ziehe unter „Anzeigeinformationen“ mit Drag & Drop ein Bild aus einem lokalen Ordner, oder klicke auf **Logo hochladen**, um ein Bild von deinem Computer auszuwählen.
![Hochladen eines Logos](/assets/images/github-apps/github_apps_upload_logo.png)
6. Schneide das Bild zu. Wenn du fertig bist, klicke auf **Neuen Avatar festlegen**.
![zuschneiden und Festlegen des Logos](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. Gib unter „Hintergrundfarbe des Badges“ den [hexadezimalen Farbcode](http://www.color-hex.com/) der Hintergrundfarbe für deinen Badge ein. {% ifversion fpt or ghec %}**Hinweis**: Das Eingabefeld „Hintergrundfarbe des Badges“ wird nur angezeigt, nachdem du ein Anwendungslogo hochgeladen hast.{% endif %} ![Hintergrundfarbe des Badges](/assets/images/github-apps/github_apps_badge_background_color.png)

{% ifversion fpt or ghec %}

## Nächste Schritte

Weitere Informationen zum Erstellen eines Marketplace-Eintrags für diese App findest du unter [Eintrag auf GitHub-Marketplace](/marketplace/listing-on-github-marketplace/).

{% endif %}
