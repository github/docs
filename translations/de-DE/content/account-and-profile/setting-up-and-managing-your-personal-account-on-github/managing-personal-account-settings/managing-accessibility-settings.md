---
title: Verwalten von Barrierefreiheitseinstellungen
shortTitle: Manage accessibility settings
intro: 'Die Benutzeroberfläche von {% data variables.product.product_name %} kann an deine visuellen, auditiven, motorischen, kognitiven oder lernspezifischen Bedürfnisse angepasst werden.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 088bb097004f6c3b13412ec9716665b1f02edca5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107213'
---
## Informationen zu Barrierefreiheitseinstellungen

Um eine Benutzeroberfläche auf {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} zu erstellen, die deinen Anforderungen entspricht, kannst du die Benutzeroberfläche anpassen. Barrierefreiheitseinstellungen können für Personen mit Behinderungen unerlässlich, aber für jeden nützlich sein. Die Anpassung von Tastenkombinationen ist beispielsweise für Personen wichtig, die mit der Sprachsteuerung navigieren, kann aber für jeden nützlich sein, wenn eine Tastenkombination für {% data variables.product.product_name %} mit einer Tastenkombination einer anderen Anwendung im Konflikt steht.

## Verwalten von Barrierefreiheitseinstellungen

Du kannst entscheiden, ob du einige oder alle Tastenkombinationen auf {% ifversion fpt or ghec %}{% data variables.location.product_location %}{% elsif ghes or ghae %}der Website für {% data variables.location.product_location %}{% endif %} verwenden möchtest, und du kannst die Anzeige animierter Bilder steuern.

### Verwalten von Tastenkombinationen

Du kannst Aktionen auf der {% data variables.product.product_name %}-Website ausschließlich mit der Tastatur ausführen. Tastenkombinationen können nützlich sein, um Zeit zu sparen, doch sie können versehentlich aktiviert werden oder Hilfstechnologie beeinträchtigen.

Standardmäßig sind alle Tastenkombinationen für {% data variables.product.product_name %} aktiviert. Weitere Informationen findest du unter [Tastenkombinationen](/get-started/using-github/keyboard-shortcuts).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. Verwalte unter „Tastenkombinationen“ die Einstellungen für deine Tastenkombinationen.

   - Um Tastenkombinationen zu deaktivieren, die keine Zusatztasten wie <kbd>Steuerelement</kbd> oder <kbd>Befehl</kbd> verwenden, deaktiviere unter „Allgemein“ die Option **Zeichentasten**.
     - Wenn du Zeichentasten deaktivierst, kannst du möglicherweise dennoch Tastenkombinationen für deinen Webbrowser auslösen, und du kannst weiterhin Tastenkombinationen für {% data variables.product.product_name %} auslösen, die eine Zusatztaste verwenden.
   {%- ifversion command-palette %}
   - Um die Tastenkombinationen zum Auslösen der Befehlspalette anzupassen, kannst du in den Dropdownmenüs unter „Befehlspalette“ eine Tastenkombination wählen. Weitere Informationen findest du unter [{% data variables.product.company_short %}-Befehlspalette](/get-started/using-github/github-command-palette).
   {%- endif %}

{% ifversion motion-management %}

### Verwalten von Bewegung

Du kannst steuern, wie {% data variables.product.product_name %} animierte _GIF_-Bilder anzeigt.

Standardmäßig ist {% data variables.product.product_name %} mit deiner Einstellung auf Systemebene für reduzierte Bewegung synchronisiert. Weitere Informationen findest du in der Dokumentation oder in den Einstellungen deines Betriebssystems.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. Verwalte unter „Bewegung“ Einstellungen für Bewegung.

   - Unter „Animierte Bilder automatisch wiedergeben“ kannst du steuern, wie in {% data variables.product.product_name %} animierte Bilder angezeigt werden sollen: **Synchron mit System**, **Aktiviert** oder **Deaktiviert**.

{% endif %}
