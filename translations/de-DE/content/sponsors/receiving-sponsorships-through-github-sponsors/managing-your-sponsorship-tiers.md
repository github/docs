---
title: Verwalten von Sponsoringebenen
intro: 'Du kannst neue Sponsoring-Stufen hinzufügen, oder eine bestehende Stufe bearbeiten oder zurückziehen.'
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Manage payment tiers
ms.openlocfilehash: 4ff2d3731483075afc23da403e62f1682c6dd6c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133802'
---
## Informationen zu Sponsoring-Stufen

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Eine Stufe hinzufügen

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Wenn du zum ersten Mal Ebenen einrichtest, solltest du dir die vorgeschlagenen Beispiele für Ebenen ansehen, um zu sehen, wie andere an Open Source Mitwirkende {% data variables.product.prodname_sponsors %} eingerichtet haben. Entscheide, ob du mit einigen vorgeschlagenen Entwurfsebenen beginnen möchtest, die du im Ebenen-Editor anpassen kannst.
   - Um eine vorgeschlagene Ebene zu verwenden, wähle die Belohnungen aus, die du in deine Entwurfsebene(n) aufnehmen möchtest. Klicke dann auf **Weiter zum Ebenen-Editor**.
   - Um Ebenen zu erstellen, ohne einen der Entwurfsvorschläge zu verwenden, klicke auf **Diesen Schritt überspringen**.
   ![Option „Diesen Schritt überspringen“ und Schaltfläche „Weiter zum Ebenen-Editor“](/assets/images/help/sponsors/tier-editor-button.png)
1. Wenn du optional eine Entwurfsebene bearbeiten möchtest, suche die Entwurfsebene, und klicke auf **Bearbeiten**.
  ![Schaltfläche „Bearbeiten“ neben der Entwurfsebene](/assets/images/help/sponsors/draft-tier-edit.png) {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %}

## Bearbeiten oder Außerkraftsetzen einer Ebene

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  **Hinweis:** Scrolle nach unten, um Ideen von Ebenenbeschreibungen anzuzeigen.

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## Hinzufügen eines Repositorys zu einer Sponsoringebene

{% data reusables.sponsors.sponsors-only-repos %}

### Informationen zum Hinzufügen von Repositorys zu einer Sponsoringebene

Um ein Repository einer Ebene hinzuzufügen, muss das Repository privat und im Besitz einer Organisation sein, und du musst über Administratorzugriff auf das Repository verfügen.

Wenn du einer Ebene ein Repository hinzufügst, sendet {% data variables.product.company_short %} automatisch Repositoryeinladungen an neue Sponsoren und hebt den Zugriff auf, wenn ein Sponsoring beendet wird. 

Nur persönliche Konten, nicht Organisationen, können zu privaten Repositorys eingeladen werden, die einer Sponsoringebene zugeordnet sind.

Du kannst dem Repository auch manuell Projektmitarbeiter hinzufügen oder sie davon entfernen, und {% data variables.product.company_short %} überschreibt diese nicht in der Synchronisierung. 

### Informationen zu Übertragungen für Repositorys, die Sponsorenebenen hinzugefügt werden

Wenn du ein Repository überträgst, das einer Sponsoringebene hinzugefügt wurde, können Sponsoren betroffen sein, die über die Ebene Zugriff auf das Repository haben.

- Wenn das gesponserte Profil für eine Organisation gilt und das Repository an eine andere Organisation übertragen wird, werden aktuelle Sponsoren übertragen, aber neue Sponsoren werden nicht hinzugefügt. Der neue Besitzer des Repositorys kann vorhandene Sponsoren entfernen.
- Wenn das gesponserte Profil für ein persönliches Konto gilt, wird das Repository an eine Organisation übertragen, und das persönliche Konto hat Administratorzugriff auf das neue Repository, vorhandene Sponsoren werden übertragen, und neue Sponsoren werden dem Repository weiterhin hinzugefügt.
- Wenn das Repository in ein persönliches Konto übertragen wird, werden alle Sponsoren entfernt, und neue Sponsoren werden dem Repository nicht hinzugefügt.

### Hinzufügen eines Repositorys zu einer Sponsoringebene

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. Wähle **Sponsoren Zugriff auf ein privates Repository gewähren** aus.

   ![Screenshot des Kontrollkästchens, um Sponsoren Zugriff auf ein privates Repository zu gewähren](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Wähle das Dropdownmenü aus, und klicke auf das Repository, das du hinzufügen möchtest.

   ![Screenshot des Dropdownmenüs zum Auswählen des Repositorys, um Sponsoren Zugriff zu gewähren auf](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## Aktivieren von Ebenen mit benutzerdefinierten Beträgen

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.enable-custom-amounts %}

## Deaktivieren von Ebenen mit benutzerdefinierten Beträgen

Du kannst Ebenen mit benutzerdefinierten Beträgen deaktivieren, indem du die Option **Benutzerdefinierte Beträge aktivieren** auf der Registerkarte **Sponsoringebenen** deaktivierst. Wenn du benutzerdefinierte Beträge deaktivierst, werden alle benutzerdefinierten Ebenen außer Kraft gesetzt.
