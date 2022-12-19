---
title: Releases vergleichen
intro: 'Du kannst die Release-Tags vergleichen, um Änderungen an Deinem Repository zwischen verschiedenen Releases zu sehen.'
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
ms.openlocfilehash: 12ec28717e8de8575a58487b02d5665044f471eb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132099'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Klicke neben der Version, die als Basis verwendet werden soll, auf **Vergleichen**.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menü „Compare release tags“ (Vergleiche Release-Tags)](/assets/images/help/releases/refreshed-compare-tags.png) {% else %} ![Menü „Compare release tags“ (Vergleiche Release-Tags)](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. Benutze das Dropdownmenü „Compare" (Vergleichen) und wähle die Tags, die Du vergleichen willst.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menü „Compare release tags“ (Vergleiche Release-Tags)](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![Optionen im Menü „Compare release tags“ (Vergleiche Release-Tags)](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
