---
title: Schreiben einer Angebotsbeschreibung für deine App
intro: 'Zum [Auflisten deiner App](/marketplace/listing-on-github-marketplace/) auf dem {% data variables.product.prodname_marketplace %} musst du Beschreibungen deiner App verfassen und Abbildungen bereitstellen, die den Richtlinien von GitHub entsprechen.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
ms.openlocfilehash: f29e049529801011d25d2723c5851b56d7a8bb92
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139256'
---
Hier findest du Anleitungen zu den Feldern, die du im Abschnitt **Angebotsbeschreibung** deines Angebotsentwurfs ausfüllen musst.

## Name und Links

### Angebotsname

Der Name deines Angebots wird auf der [Homepage des {% data variables.product.prodname_marketplace %}](https://github.com/marketplace) angezeigt. Der Name ist auf 255 Zeichen beschränkt und darf sich vom Namen deiner App unterscheiden. Der Angebotsname darf nicht mit einem bestehenden Konto auf {% data variables.product.product_location %} identisch sein, außer es handelt sich um deinen Benutzernamen oder den Namen deiner Organisation. 

### Kurze Beschreibung

Die Kurzbeschreibung wird der Community unter dem App-Namen auf der [Homepage des {% data variables.product.prodname_marketplace %}](https://github.com/marketplace) angezeigt.

![Kurzbeschreibung der {% data variables.product.prodname_marketplace %}-App](/assets/images/marketplace/marketplace_short_description.png)

#### Länge

Eine Länge von 40 bis 80 Zeichen wird für die Kurzbeschreibung empfohlen. Du kannst zwar mehr Zeichen verwenden, doch kurze Beschreibungen sind für Kunden leichter zu lesen und zu verstehen.

#### Inhalt

- Beschreibe die Funktion der App. In diesem Bereich solltest du keine Aufforderungen machen. Beispiel:

  **JA:** Einfaches Projektmanagement für GitHub-Issues

  **NEIN:** Verwalte deine Projekte und Issues auf GitHub

  **Tipp:** Ändere deine Aufforderung in eine akzeptable Beschreibung: _Projekte und Issues auf GitHub verwalten_.

- Wiederhole den Namen der App nicht in der Beschreibung.

  **JA:** Ein containernatives Continuous-Integration-Tool

  **NEIN:** Skycap ist ein containernatives Continuous-Integration-Tool

#### Formatierung

- Beachte stets die Groß- und Kleinschreibung. Der erste Buchstabe am Satzanfang sowie Substantive und Eigennamen werden großgeschrieben.

- Verwende keine Interpunktion am Ende der Kurzbeschreibung. Die Kurzbeschreibung sollte nicht aus vollständigen Sätzen bzw. generell nicht aus mehr als einem Satz bestehen.

- Nur Substantive und Eigennamen werden großgeschrieben. Beispiel:

  **JA:** Lieferautomatisierung mit einem Klick für Webentwickler*innen

  **NEIN:** Lieferautomatisierung Mit Einem Klick Für Webentwickler*innen

- Verwende in Listen immer ein [serielles Komma](https://en.wikipedia.org/wiki/Serial_comma).

- Bezeichne die GitHub-Community nicht als „Benutzer*innen“.

  **JA:** Automatisch Issues für Menschen in deiner Organisation erstellen

  **NEIN:** Automatisch Issues für Benutzer*innen in deiner Organisation erstellen

- Vermeide Akronyme, sofern diese nicht gängig sind (z. B. API). Beispiel:

  **JA:** Agile Task Boards, Schätzungen und Berichte, ohne GitHub zu verlassen

  **NEIN:** Agile Task Boards, Schätzungen und Berichte, ohne die GitHub-UI zu verlassen

### Kategorien

Apps im {% data variables.product.prodname_marketplace %} können nach Kategorie angezeigt werden. Wähle in der Dropdownliste **Primäre Kategorie** die Kategorie aus, die die Hauptfunktion deiner App beschreibt. Optional kannst du eine **Sekundäre Kategorie** auswählen, die zu deiner App passt.

### Unterstützte Sprachen

Wenn deine App nur mit bestimmten Sprachen kompatibel ist, wähle bis zu zehn Programmiersprachen aus, die deine App unterstützt. Diese Sprachen werden auf der Angebotsseite deiner App im {% data variables.product.prodname_marketplace %} angezeigt. Dieses Feld ist optional.

### Angebots-URLs

**Erforderliche URLs**
* **URL für Kundensupport:** Die URL zu einer Website, die deine Kunden besuchen, wenn sie technischen Support benötigen bzw. Produkt- oder Kontoanfragen haben
* **URL zur Datenschutzrichtlinie:** Die Website mit der Datenschutzrichtlinie für deine App
* **Installations-URL:** Dieses Feld wird nur für OAuth-Apps angezeigt. (GitHub Apps verwenden diese URL nicht, da sie stattdessen die optionale Setup-URL aus den App-Einstellungen verwenden.) Wenn ein Kunde deine OAuth-App kauft, leitet GitHub diesen nach der Installation der App zur Installations-URL um. Du musst Kunden an `https://github.com/login/oauth/authorize` umleiten, damit der OAuth-Autorisierungsflow beginnt. Weitere Informationen findest du unter [Neue Käufe für OAuth-Apps](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/). Überspringe dieses Feld, wenn du eine GitHub-App anbietest.

**Optionale URLs**
* **Unternehmens-URL:** Ein Link zur Website deines Unternehmens
* **Status-URL:** Ein Link zu einer Webseite, die den Status deiner App anzeigt. Statusseiten können aktuelle und frühere Incidentberichte, die Uptime der Webanwendung und geplante Wartungen beinhalten.
* **Dokumentations-URL:** Ein Link zu Dokumentationen, die Kunden vermitteln, wie sie deine App verwenden.

## Logo und Featurekarte

{% data variables.product.prodname_marketplace %} stellt alle Angebote mit einem quadratischen Logo in einem runden Badge dar, um die Apps optisch zu unterscheiden.

![GitHub Marketplace-Logo- und Badgebilder](/assets/images/marketplace/marketplace-logo-and-badge.png)

Eine Featurekarte besteht aus dem Logo und dem Namen deiner App und einem benutzerdefinierten Hintergrundbild, das deine Markenpersönlichkeit repräsentiert. {% data variables.product.prodname_marketplace %} zeigt diese Karte an, wenn deine App zu den vier zufällig empfohlenen Apps oben auf der [Homepage](https://github.com/marketplace) zählt. Unter der Featurekarte wird eine Kurzbeschreibung zu jeder App angezeigt.

![Featurekarte](/assets/images/marketplace/marketplace_feature_card.png)

Während du Bilder hochlädst und Farben auswählst, zeigt der {% data variables.product.prodname_marketplace %}-Angebotsentwurf eine Vorschau des Logos und der Featurekarte an.

#### Richtlinien für Logos

Du musst ein benutzerdefiniertes Bild für das Logo hochladen. Wähle eine Hintergrundfarbe für den Badge aus.

- Lade ein Logobild hoch, das mindestens 200×200 Pixel groß ist, damit dein Logo nicht hochskaliert werden muss, wenn dein Angebot veröffentlicht wird.
- Logos werden auf ein Quadrat zugeschnitten. Es wird empfohlen, eine quadratische Bilddatei mit deinem Logo in der Mitte hochzuladen.
- Das beste Ergebnis erzielst du, indem du ein Logobild mit transparentem Hintergrund hochlädst.
- Für möglichst nahtlose Übergänge auf deinem Badge solltest du eine Hintergrundfarbe für den Badge auswählen, die der Hintergrundfarbe (oder Transparenz) deines Logobilds entspricht.
- Verwende keine Logobilder mit Wörtern oder Text. Logos mit Text werden auf kleinen Bildschirmen nicht gut skaliert.

#### Richtlinien für Featurekarten

Du musst ein benutzerdefiniertes Hintergrundbild für die Featurekarte hochladen. Wähle eine Textfarbe für den Namen der App aus.

- Verwende ein Muster oder eine Textur in deinem Hintergrundbild, um deine Karte optisch einzigartig zu gestalten und sie vom dunklen Hintergrund der {% data variables.product.prodname_marketplace %}-Homepage abzuheben. Featurekarten sollten die Markenpersönlichkeit deiner App repräsentieren.
- Die Maße für Hintergrundbilder lauten 965×482 Pixel (Breite × Höhe).
- Wähle eine Textfarbe für den Namen deiner App aus, die auf dem Hintergrundbild deutlich erkennbar ist.

## Auflistungsdetails

Klicke auf der Homepage oder Kategorieseite des {% data variables.product.prodname_marketplace %} auf den Namen deiner App, um zu deren Angebotsseite zu gelangen. Auf der Angebotsseite befindet sich eine längere Beschreibung der App, die aus zwei Teilen besteht: einer Einführungsbeschreibung und einer detaillierten Beschreibung.

Die Einführungsbeschreibung wird oben auf der Angebotsseite der App im {% data variables.product.prodname_marketplace %} angezeigt.

![Einführungsbeschreibung im {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_intro_description.png)

Wenn du auf **Mehr anzeigen...** klickst, wird die detaillierte Beschreibung angezeigt.

![Detaillierte Beschreibung im {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_detailed_description.png)

Befolge diese Richtlinien beim Verfassen der Beschreibungen:

### Länge

Es wird empfohlen, bei der [Angebotserstellung](/marketplace/listing-on-github-marketplace/) im Pflichtfeld „Einführungsbeschreibung“ eine allgemeine Beschreibung zu verfassen, die aus ein bis zwei Sätzen besteht und 150 bis 250 Zeichen lang ist. Du kannst zwar mehr Zeichen verwenden, doch kurze Zusammenfassungen sind für Kunden leichter zu lesen und zu verstehen.

Weitere Informationen kannst du im optionalen Feld „Detaillierte Beschreibung“ ergänzen. Diese Beschreibung wird angezeigt, wenn du unter der Einführungsbeschreibung auf der Angebotsseite der App auf **Mehr anzeigen...** klickst. Eine detaillierte Beschreibung besteht aus drei bis fünf [Wertversprechen](https://en.wikipedia.org/wiki/Value_proposition), die jeweils in ein bis zwei Sätzen erläutert werden. Diese Beschreibung darf bis zu 1.000 Zeichen lang sein.

### Inhalt

- Beginne die Einführungsbeschreibung immer mit dem Namen der App.

- Verfasse Beschreibungen und Wertversprechen immer im Aktiv.

### Formatierung

- Beachte bei den Titeln für Wertversprechen stets die Groß- und Kleinschreibung. Der erste Buchstabe am Satzanfang sowie Substantive und Eigennamen werden großgeschrieben.

- Verwende Punkte in deinen Beschreibungen. Vermeide Ausrufezeichen.

- Verwende keine Interpunktion am Ende der Titel für Wertversprechen. Titel für Wertversprechen sollten nicht aus vollständigen Sätzen bzw. generell nicht aus mehr als einem Satz bestehen.

- Gib für jedes Wertversprechen einen Titel gefolgt von einem Absatz mit einer Beschreibung ein. Formatiere den Titel mit Markdown als [Überschrift der 1. bis 3. Ordnung](/articles/basic-writing-and-formatting-syntax/#headings). Beispiel:

  ### Erwirb die benötigten Qualifikationen

  GitHub Skills unterstützt dich beim Einarbeiten in GitHub, beim effektiveren Kommunizieren mit Markdown, beim Umgehen mit Mergekonflikten und vielem mehr.

- Nur Substantive und Eigennamen werden großgeschrieben.

- Verwende in Listen immer das [serielle Komma](https://en.wikipedia.org/wiki/Serial_comma).

- Bezeichne die GitHub-Community nicht als „Benutzer*innen“.

  **JA:** Automatisch Issues für Menschen in deiner Organisation erstellen

  **NEIN:** Automatisch Issues für Benutzer*innen in deiner Organisation erstellen

- Vermeide Akronyme, sofern diese nicht gängig sind (z. B. API).

## Produktscreenshots

Du kannst bis zu fünf Screenshots von deiner App hochladen, die auf deren Angebotsseite sichtbar sind. Optional kannst du jedem Screenshot mit einer erklärenden Beschriftung versehen. Nachdem du deine Screenshots hochgeladen hast, kannst du per Drag & Drop in der Reihenfolge anordnen, in der sie auf der Angebotsseite angezeigt werden sollen.

### Richtlinien für Screenshots

- Bilder müssen eine hohe Auflösung (mindestens 1200 Pixel breit) aufweisen.
- Alle Bilder müssen dieselbe Höhe und Breite (Seitenverhältnis) aufweisen, um Sprünge auf der Seite zu vermeiden, wenn Kunden auf das nächste Bild klicken.
- Zeige so viel wie möglich von der Benutzeroberfläche, damit die Funktion deiner App erkennbar ist.
- Wenn du Screenshots von einer Browser-App machst, sollte nur der Inhalt des Anzeigefensters zu sehen sein. Die Adressleiste, Titelleiste oder Symbolleiste sollten nicht enthalten sein, da diese auf kleineren Bildschirmen nicht gut skaliert werden können.
- GitHub zeigt die hochgeladenen Screenshots in einem Feld auf der Angebotsseite deiner App an. Du musst die Screenshots also nicht selbst mit einem Feld oder Rahmen versehen.
- Beschriftungen sind am besten, wenn sie kurz und prägnant sind.

![Screenshot vom GitHub Marketplace](/assets/images/marketplace/marketplace-screenshots.png)
