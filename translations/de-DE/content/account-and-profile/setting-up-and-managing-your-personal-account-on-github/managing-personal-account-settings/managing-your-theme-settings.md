---
title: Verwalten der Designeinstellungen
intro: 'Du kannst verwalten, wie {% data variables.product.product_name %} aussieht, indem du eine Designpräferenz einstellst, die sich entweder an deinen Systemeinstellungen orientiert oder einen Tages- oder Nachtmodus verwendet.'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 3f7d35978d3a80f7fb63cce1d054afd15b579f13
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108383'
---
Um flexibel einzustellen, wie und wann du {% data variables.product.product_name %} verwendest, kannst du die Designeinstellungen konfigurieren, um die Darstellung von {% data variables.product.product_name %} zu verändern. Du kannst aus Designs auswählen, die hell oder dunkel sind, oder du kannst {% data variables.product.product_name %} so konfigurieren, dass den Systemeinstellungen entsprochen wird.

Du kannst ein dunkles Design verwenden, um den Stromverbrauch auf bestimmten Geräten zu verringern oder die Augen in schlechten Lichtverhältnissen zu entlasten – oder einfach, weil es dir gefällt.

Wenn du eine Sehbeeinträchtigung hast, kannst du von einem Design mit hohem Kontrast mit höherem Kontrast zwischen Vordergrund- und Hintergrundelementen profitieren.{% ifversion fpt or ghae or ghec %} Wenn du farbenblind bist, kannst du von unseren hellen und dunklen Designs für farbenblinde Personen profitieren.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Wähle unter „Designmodus“ das Dropdownmenü aus, und klicke dann auf eine Designeinstellung.

   ![Dropdownmenü „Designmodus“ zur Auswahl der Designeinstellung](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Klicke auf das gewünschte Design.
    - Wenn du ein Design ausgewählt hast, klicke auf dieses.

      {%- ifversion ghes = 3.5 %} {% note %}

      **Hinweis**: Das helle Design mit hohem Kontrast war in {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2 und 3.5.3 nicht verfügbar. Das Design ist ab Version 3.5.4 verfügbar. Kontaktiere deine*n Websiteadministrator*in, wenn du weitere Informationen zu Upgrades benötigst.

      Weitere Informationen zum Ermitteln der derzeit verwendeten Version von {% data variables.product.product_name %} findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server).
      {% endnote %} {%- endif %}

      ![Optionsfelder zur Auswahl eines Designs](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png)
    - Wenn du die Systemeinstellungen übernehmen möchtest, klicke auf ein Tagesdesign und ein Nachtdesign.

      ![Schaltflächen für die Auswahl eines Designs zum Synchronisieren mit der Systemeinstellung](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png) {% ifversion fpt or ghec %}
    - Wenn du ein Design auswählen möchtest, das derzeit in der öffentlichen Betaversion enthalten ist, musst du es zuerst über die Featurevorschau aktivieren. Weitere Informationen findest du unter [Testen von Early-Access-Releases mit der Featurevorschau](/get-started/using-github/exploring-early-access-releases-with-feature-preview).{% endif %}

{% ifversion command-palette %}

{% note %}

**Hinweis:** Du kannst die Designeinstellungen auch über die Befehlspalette ändern. Weitere Informationen findest du unter [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).

{% endnote %}

{% endif %}

## Weitere Informationsquellen

- [Festlegen eines Designs für {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)
