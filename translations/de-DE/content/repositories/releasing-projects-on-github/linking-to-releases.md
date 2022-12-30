---
title: Zu Releases verknüpfen
intro: 'Du kannst jedes Release, das Du auf GitHub erstellst, mit einer eindeutigen URL teilen.'
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 9b07e71c6e6d35839d485e5e37c795ac3c663d0b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132093'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Um eine eindeutige URL in deine Zwischenablage zu kopieren, suche die Version, mit der du eine Verknüpfung herstellen möchtest, klicke mit der rechten Maustaste auf den Titel, und kopiere die URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Releasetitel](/assets/images/help/releases/release-title.png) {% else %} ![Releasetitel](/assets/images/help/releases/release-title-old.png) {% endif %}
1. Klicke alternativ mit der rechten Maustaste auf **Latest Release** (Neuestes Release), und kopiere die URL, um sie zu teilen. Das Suffix dieser URL ist immer `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menü für den Vergleich von Release-Tags](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![Tag für neuestes Release](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} Um direkt eine Verknüpfung mit einem Download der neuesten Versionsressource zu erstellen, die manuell hochgeladen wurde, erstelle eine Verknüpfung mit `/owner/name/releases/latest/download/asset-name.zip`.
