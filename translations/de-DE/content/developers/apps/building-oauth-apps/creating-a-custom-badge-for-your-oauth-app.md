---
title: Erstellen eines benutzerdefinierten Badges für deine OAuth-App
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876865'
---
Standardmäßig verfügt eine neue OAuth-App über ein automatisch generiertes [Identicon](https://github.com/blog/1586-identicons).
Dies ist ein Beispiel für einen Identicon-Badge:

![Identicon](/assets/images/identicon.png)

Nachdem du eine OAuth-App erstellt hast, kannst du den Badge deiner App anpassen, indem du ein Logo hochlädst und eine Hintergrundfarbe auswählst. Ein Badge ist ein quadratisches Logobild innerhalb eines kreisförmigen Badges. Du kannst eine Hintergrundfarbe für den Badge auswählen, mit der du deine App optisch hervorheben kannst.

Dein Logo sollte eine PNG-, JPG- oder GIF-Datei sein, die kleiner als 1 MB ist. Für optimale Qualität der Darstellung sollte die Bildgröße mindestens 200px x 200px betragen. {% ifversion fpt or ghec %}Unter [Tipps für Logo- und Badgebilder](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos) findest du weitere Anleitungen zur Anpassung von Badges.{% endif %}

{% ifversion fpt or ghec %}

Du kannst einen benutzerdefinierten Badge für eine GitHub-App ändern, die bereits über einen genehmigten Marketplace-Eintrag verfügt, indem du zu https://github.com/marketplace/manage navigierst.

{% endif %}

So erstellst du einen benutzerdefinierten Badge:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. Ziehe unter „Anwendungslogo“ mit Drag & Drop ein Bild aus einem lokalen Ordner, oder klicke auf **Logo hochladen**, um ein Bild von deinem Computer auszuwählen.
![Hochladen eines Logos](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. Schneide das Bild zu. Wenn du fertig bist, klicke auf **Neues Anwendungslogo festlegen**.
![Zuschneiden und Festlegen des Logos](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. Gib in „Hintergrundfarbe des Badges“ den [hexadezimalen Farbcode](http://www.color-hex.com/) der Hintergrundfarbe für deinen Badge ein. {% ifversion fpt or ghec %} **Hinweis:** Das Eingabefeld „Hintergrundfarbe des Badges“ wird erst nach dem Hochladen eines Anwendungslogos sichtbar.{% endif %} ![Hintergrundfarbe des Badges](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## Nächste Schritte

Weitere Informationen zum Erstellen eines Marketplace-Eintrags für diese App findest du unter [Eintrag auf GitHub-Marketplace](/marketplace/listing-on-github-marketplace/).

{% endif %}
