---
title: Anzeigen privater Beiträge und Erfolge auf deinem Profil
intro: 'Dein {% data variables.product.product_name %}-Profil zeigt ein Diagramm deiner Repositorybeiträge des letzten Jahres an. Du kannst die Aktivitäten in {% ifversion fpt or ghes or ghec %}privaten und internen{% else %}privaten{% endif %} Repositorys{% ifversion fpt or ghes or ghec %} ebenso wie die Aktivitäten in öffentlichen Repositorys anonymisieren{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
ms.openlocfilehash: b40e3835bf1548ff4ced75d1207de9a5b493dc90
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147079950'
---
Wenn du deine privaten Beiträge veröffentlichst, können Benutzer, die keinen Zugriff auf die Repositorys haben, an denen du mitarbeitest, die Informationen zu deinen privaten Beiträgen nicht sehen. Stattdessen sehen sie die Anzahl an privaten Beiträgen, die du pro Tag geleistet hast. Zu deinen öffentlichen Beiträgen werden detaillierte Informationen angezeigt. Weitere Informationen findest du unter [Anzeigen von Beiträgen auf deiner Profilseite](/articles/viewing-contributions-on-your-profile-page).

{% note %}

**Hinweis:** {% ifversion fpt or ghes or ghec %}Auf {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} sind öffentliche Beiträge in deinem Profil {% ifversion fpt or ghec %}für alle Personen sichtbar, die auf {% data variables.product.prodname_dotcom_the_website %} zugreifen können{% elsif ghes %}nur für andere Benutzer von {% data variables.product.product_location%} sichtbar{% endif %}.{% elsif ghae %}Auf {% data variables.product.prodname_ghe_managed %} können nur andere Mitglieder deines Unternehmens die Beiträge in deinem Profil sehen.{% endif %}

{% endnote %}

## Die Sichtbarkeit deiner privaten Beiträge ändern

{% data reusables.profile.access_profile %}
1. Veröffentliche deine privaten Beiträge in deinem Profil, oder blende sie aus:
    - Um deine privaten Beiträge zu veröffentlichen, wähle über deinem Beteiligungsdiagramm im Dropdownmenü **Beitragseinstellungen** die Option **Private Beiträge** aus. Besucher sehen die Anzahl deiner privaten Beiträge ohne weitere Details.
  ![Festlegen Im Dropdownmenü mit den Beitragseinstellungen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-on.png)
    - Um deine privaten Beiträge auszublenden, deaktiviere über deinem Beteiligungsdiagramm im Dropdownmenü **Beitragseinstellungen** die Option **Private Beiträge**. Besucher sehen nur deine öffentlichen Beiträge.
   ![Festlegen Im Dropdownmenü mit den Beitragseinstellungen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-off.png)

## Ändern der Sichtbarkeit für Erfolge

{% data reusables.user-settings.access_settings %}
1. Erfolge auf deinem Profil anzeigen oder ausblenden:
    - Um Erfolge auf deinem Profil anzuzeigen, navigiere zu den **Profileinstellungen**, und aktiviere das Kontrollkästchen neben **Erfolge auf meinem Profil anzeigen** aus.
  ![Anzeige von Erfolgen für Besucher*innen über Profileinstellungen aktivieren](/assets/images/achievements-profile-settings-off.png)
    - Um Erfolge auf deinem Profil auszublenden, navigiere zu den **Profileinstellungen**, und deaktiviere das Kontrollkästchen neben **Erfolge auf meinem Profil anzeigen** aus.
  ![Anzeige von Erfolgen für Besucher*innen über Profileinstellungen deaktivieren](/assets/images/achievements-profile-settings-on.png)

## Weitere Informationsquellen

- [Anzeigen von Beiträgen auf deiner Profilseite](/articles/viewing-contributions-on-your-profile-page)
- [Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
