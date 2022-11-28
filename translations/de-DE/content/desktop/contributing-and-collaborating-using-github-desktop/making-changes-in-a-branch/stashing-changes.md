---
title: Ausführen eines Stashs für Änderungen
intro: 'Du kannst deine Änderungen vorübergehend speichern, ohne sie in einem Branch zu committen, indem du für Änderungen einen Stash ausführst.'
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
ms.openlocfilehash: ef061bec3c60041fc40ab3e8be45d1557ca90219
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105351'
---
## Informationen zu gestashten Änderungen

Um deine Änderungen auf dein Repository anzuwenden, musst du die Dateien speichern und dann die Änderungen in einen Branch committen. Wenn gespeicherte Änderungen vorliegen, die du noch nicht committen möchtest, kannst du sie für später stashen. Beim Stashen von Änderungen werden die Änderungen vorübergehend aus den Dateien entfernt, und du kannst sie später wiederherstellen oder verwerfen. Du kannst immer nur einen Satz von Änderungen mit {% data variables.product.prodname_desktop %} stashen. Wenn du {% data variables.product.prodname_desktop %} zum Stashen von Änderungen verwendest, werden alle nicht gespeicherten Änderungen gestasht. Nach dem Stashen von Änderungen für einen Branch kannst du gefahrlos den Branch wechseln oder andere Änderungen am aktuellen Branch vornehmen.

Wenn du {% data variables.product.prodname_desktop %} für einen Branchwechsel verwendest, wenn du Änderungen gespeichert, aber noch nicht committet hast, wirst du durch {% data variables.product.prodname_desktop %} aufgefordert, die Änderungen zu stashen oder in den anderen Branch zu übertragen. Weitere Informationen findest du unter [Verwalten von Branches](/desktop/contributing-to-projects/managing-branches#switching-between-branches).

## Ausführen eines Stashs für Änderungen

{% data reusables.desktop.click-changed-files-header %} {% data reusables.desktop.click-stash-all-changes %}

## Wiederherstellen gestashter Änderungen

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-restore %}

## Verwerfen gestashter Änderungen

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-discard %}
