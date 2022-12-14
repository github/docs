---
title: Verwalten der Designeinstellungen
intro: You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 238af803ead331a9323e9457024a85dff05fc5d4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088844"
---
Um flexibel einzustellen, wie und wann Du {% data variables.product.product_name %} verwendest, kannst Du die Designeinstellungen konfigurieren, um das Aussehen von {% data variables.product.product_name %} zu verändern. Du kannst aus Designs auswählen, die hell oder dunkel sind, oder Du kannst {% data variables.product.product_name %} so konfigurieren, dass den Systemeinstellungen entsprochen wird.

Möglicherweise möchtest Du ein dunkles Design verwenden, um den Stromverbrauch auf bestimmten Geräten zu verringern, um die Augenbelastung unter geringen Lichtbedingungen zu verringern oder weil es Dir besser gefällt, wie das Design aussieht.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}Wenn Du eine Sehbeeinträchtigung hast, kannst Du von einem Design mit großem Kontrast mit größerem Kontrast zwischen Vordergrund- und Hintergrundelementen profitieren. {% endif %} {% ifversion fpt or ghae or ghec %} Wenn Du farbenblind bist, kannst Du von unseren hellen und dunklen Designs für farbenblinde Personen profitieren.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Wähle unter "Designmodus" das Dropdownmenü aus, und klicke dann auf eine Designeinstellung.

   ![Dropdownmenü "Designmodus" zur Auswahl der Designeinstellung](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Klicke auf das gewünschte Design.
    - Wenn Du ein einzelnes Design ausgewählt hast, klicke auf ein Design.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Optionsfelder zur Auswahl eines einzelnen Designs](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Optionsfelder zur Auswahl eines einzelnen Designs](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Wenn Du die Systemeinstellungen beibehalten möchtest, klicke auf ein Tagesdesign und ein Nachtdesign.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Schaltflächen zur Auswahl eines Designs zur Synchronisierung mit der Systemeinstellung ](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Schaltflächen zur Auswahl eines Designs zur Synchronisierung mit der Systemeinstellung ](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - Wenn Du ein Design auswählen möchtest, das derzeit in der öffentlichen Betaversion enthalten ist, musst Du es zuerst mit der Funktionsvorschau aktivieren. Weitere Informationen findest Du unter "[Erkunden von Frühzugriffsversionen mit Funktionsvorschau](/get-started/using-github/exploring-early-access-releases-with-feature-preview)". {% endif %}

{% if command-palette %}

{% note %}

**Hinweis:** Du kannst die Designeinstellungen auch mit der Befehlspalette ändern. Weitere Informationen findest Du unter [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).

{% endnote %}

{% endif %}

## <a name="further-reading"></a>Weiterführende Themen

- "[Festlegen eines Designs für {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
