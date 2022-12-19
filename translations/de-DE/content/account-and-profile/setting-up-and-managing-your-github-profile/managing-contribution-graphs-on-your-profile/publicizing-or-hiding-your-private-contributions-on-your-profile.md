---
title: Private Beiträge in Ihrem Profil veröffentlichen oder verbergen
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068943"
---
Wenn Du Deine privaten Beiträge veröffentlichst, können Benutzer, die keinen Zugriff auf die Repositorys haben, an denen Du mitarbeitest, die Informationen zu Deinen privaten Beiträgen nicht sehen. Stattdessen sehen sie die Anzahl an privaten Beiträgen, die Du pro Tag geleistet hast. Zu Deinen öffentlichen Beiträgen werden detaillierte Informationen angezeigt. Weitere Informationen findest du unter [Anzeigen von Beiträgen auf deiner Profilseite](/articles/viewing-contributions-on-your-profile-page).

{% note %}

**Hinweis:** {% ifversion fpt or ghes or ghec %}Auf {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} sind öffentliche Beiträge in deinem Profil {% ifversion fpt or ghec %}für alle Personen sichtbar, die auf {% data variables.product.prodname_dotcom_the_website %} zugreifen können{% elsif ghes %}nur für andere Benutzer von {% data variables.product.product_location%} sichtbar{% endif %}.{% elsif ghae %}Auf {% data variables.product.prodname_ghe_managed %} können nur andere Mitglieder deines Unternehmens die Beiträge in deinem Profil sehen.{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>Die Sichtbarkeit Deiner privaten Beiträge ändern

{% data reusables.profile.access_profile %}
1. Veröffentliche Deine privaten Beiträge in Deinem Profil, oder blende sie aus:
    - Um deine privaten Beiträge zu veröffentlichen, wähle über deinem Beteiligungsdiagramm im Dropdownmenü **Beitragseinstellungen** die Option **Private Beiträge** aus. Besucher sehen die Anzahl Deiner privaten Beiträge ohne weitere Details.
  ![Festlegen Im Dropdownmenü mit den Beitragseinstellungen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-on.png)
    - Um deine privaten Beiträge auszublenden, deaktiviere über deinem Beteiligungsdiagramm im Dropdownmenü **Beitragseinstellungen** die Option **Private Beiträge**. Besucher sehen nur deine öffentlichen Beiträge.
   ![Festlegen Im Dropdownmenü mit den Beitragseinstellungen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>Weiterführende Themen

- [Anzeigen von Beiträgen auf deiner Profilseite](/articles/viewing-contributions-on-your-profile-page)
- [Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
